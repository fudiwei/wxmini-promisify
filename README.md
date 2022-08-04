# wxmini-promisify

[![NPM Version](https://img.shields.io/npm/v/@skit/wxmini-promisify.svg?sanitize=true)](https://www.npmjs.com/package/@skit/wxmini-promisify)
[![NPM Download](https://img.shields.io/npm/dm/@skit/wxmini-promisify.svg?sanitize=true)](https://www.npmjs.com/package/@skit/wxmini-promisify)
[![Dependency Status](https://david-dm.org/fudiwei/wxmini-promisify.svg)](https://david-dm.org/fudiwei/wxmini-promisify)
[![License](https://img.shields.io/github/license/fudiwei/wxmini-promisify)](https://mit-license.org/)

> 微信官方已于 2019 年 7 月 16 日推出了小程序 API Promise 化独立的扩展库 [miniprogram-api-promise](https://github.com/wechat-miniprogram/miniprogram-api-promise)，详情请参阅此[链接](https://developers.weixin.qq.com/miniprogram/dev/extended/utils/api-promise.html)。
>
> 微信官方已于 2020 年 2 月 20 日在小程序基础库 2.10.2 中支持了 API Promise 形式调用，详情请参阅此[链接](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/api.html)。
>
> 本库还会继续维护更新。

---

## 特性

-   将微信小程序、微信小游戏、企业微信小程序中提供的基于回调函数的 API，转化为 Promise 形式（_wx.func_ 将转换成同名的 _wx.funcAsync_ 形式）；
-   可单独拷贝到项目中使用；
-   支持 TypeScript；
-   支持 uni-app、Taro 等多端框架，同时理论支持目前所有主流小程序运行时（如 QQ 小程序、支付宝小程序、钉钉小程序、抖音小程序、头条小程序、百度智能小程序等等）；
-   与微信小程序基础库（当前版本：2.24.6）同步更新。

---

## 用法

### 安装：

```shell
npm install @skit/wxmini-promisify
```

### 导入：

```javascript
const $ = require('@skit/wxmini-promisify');

$.promisifyAll({
    env: wx, // （可选）运行时对象。默认值 wx。
    root: wx, // （可选）指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
    extends: ['someNewApi'] // （可选）若基础库新增了某些 API 而本库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
});
```

### 使用异步方法：

```javascript
wx.loginAsync({ timeout: 5000 })
    .then((res) => {
        console.log('success', res);

        return wx.getUserProfileAsync({ desc: '获取用户资料' });
    })
    .then((res) => {
        console.log('success', res);

        return wx.requestAsync({
            method: 'GET',
            url: 'https://baidu.com'
        });
    })
    .then((res) => {
        console.log('success', res);
    })
    .catch((err) => {
        console.warn('fail', err);
    })
    .finally(() => {
        console.log('complete');
    });

/**
 * @example 以上示例代码等同于下方原生实现：
 */
wx.login({
    timeout: 5000,
    success: (res) => {
        console.log('success', res);

        wx.getUserProfile({
            desc: '获取用户资料',
            success: (res) => {
                console.log('success', res);

                wx.request({
                    method: 'POST',
                    url: 'https://example.com/api/login',
                    success: (res) => {
                        console.log('success', res);
                    },
                    fail: (err) => {
                        console.warn('fail', err);
                    },
                    complete: () => {
                        console.log('complete');
                    }
                });
            },
            fail: (err) => {
                console.warn('fail', err);
            },
            complete: () => {
                console.log('complete');
            }
        });
    },
    fail: (err) => {
        console.warn('fail', err);
    },
    complete: () => {
        console.log('complete');
    }
});
```

当然，上述异步代码你也可以转写为 `async` + `await` 的形式，这里不再赘述。

---

## 常见问题

### 1. `wx.getFileSystemManager`、`wx.getUserCryptoManager`、`wx.createMapContext`、`wx.createBLEPeripheralServer` 等方法，如何支持异步？

这类 API 不会被 `promisifyAll` 异步化，但可以像下面这样单独使其异步化：

```javascript
const fileSystemManager = wx.getFileSystemManager();
const openFileAsync = $.promisify(fileSystemManager.open);
openFileAsync({ filePath: 'myFilePath' });
```

### 2. `wx.request`、`wx.uploadFile`、`wx.downloadFile`、`wx.connectSocket` 等方法，如何获取原始方法的返回值？

这类 API 虽然是也是异步的，但原始方法却会有自己的返回值，通常会有两个用途，一是可以添加特定的事件侦听器（如 `onProgressUpdate`），二是可以调用特定的方法（如 `abort`）。

对于前者需求，可以像下面这样使用：

```javascript
wx.requestAsync({
    method: 'GET',
    url: 'https://example.com',
    onHeadersReceived: (e) => {
        console.log('receive header', e.header);
    }
});

/**
 * @example 以上示例代码等同于下方原生实现：
 */
const requestTask = wx.request({
    method: 'GET',
    url: 'https://example.com'
});
requestTask.onHeadersReceived((e) => {
    console.log('receive header', e.header);
});
```

对于后者需求，本库暂时无法满足，你仍可以使用原生方法来实现。

### 3. 在 TypeScript 中如何使用？

在 `tsconfig.json` 中加入：

```json
{
    "compilerOptions": {
        "types": [
            ...
            "@skit/wxmini-promisify"
        ],
        ...
    }
}
```

这样就可以获得 TypeScript 的代码智能提示和类型检查等特性了。

如果你将异步 API 挂载到了非 `wx` 对象上，那么可能还需要显式地声明类型：

```typescript
let myRoot = {} as WechatMiniprogram.WxAsync;
$.promisifyAll({ root: myRoot });
```

---

## 技术选型对比

|                                                      库或框架                                                       | 侵入性 | 兼容性 | 扩展性 | TypeScript 支持 | 多端支持 |
| :-----------------------------------------------------------------------------------------------------------------: | :----: | :----: | :----: | :-------------: | :------: |
|                                                      原生写法                                                       |   无   |   低   |   无   |        √        |    ×     |
|                        [@skit/wxmini-promisify](https://github.com/fudiwei/wxmini-promisify)                        |   低   |   高   |   高   |        √        |    √     |
|              [miniprogram-api-promise](https://github.com/wechat-miniprogram/miniprogram-api-promise)               |   低   |   低   |   低   |        ×        |    ×     |
| [wepy-promisify](https://github.com/Tencent/wepy/wiki/wepy%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%BF%E7%94%A8async-await) |   高   |   低   |   无   |        ×        |    ×     |
|                                 [wx-extend](https://github.com/wux-weapp/wx-extend)                                 |   中   |   中   |   低   |        √        |    ×     |
|                           [wx-promise-pro](https://github.com/youngjuning/wx-promise-pro)                           |   低   |   中   |   高   |        ×        |    ×     |
|                         [minapp-api-promise](https://github.com/bigmeow/minapp-api-promise)                         |   低   |   中   |   低   |        ×        |    ×     |

### 指标释义：

-   “侵入性”越低越好，从以下 2 个维度衡量：

    1. 是否需要调整原有业务代码；

    2. 是否污染全局变量或有其他副作用。

-   “兼容性”越高越好，从以下 4 个维度衡量：

    1. 是否支持低版本小程序基础库；

    2. 是否覆盖完整的 API（含有多入参、有返回值等特殊 API）；

    3. 是否保留原本的 `success`、`fail` 回调；

    4. 是否以 `Promise.prototype.finally` 的形式支持原本的 `complete` 回调。

-   "扩展性"越高越好，从以下 1 个维度衡量：

    1. 是否允许扩展新的 API。

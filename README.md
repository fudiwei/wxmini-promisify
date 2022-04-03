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

-   将微信小程序或小游戏中提供的基于回调函数的 API，转化为 Promise 形式（_wx.func_ 将转换成同名的 _wx.funcAsync_ 形式）；
-   可单独拷贝到项目中使用；
-   支持 TypeScript；
-   支持 uni-app、Taro 等多端框架，同时理论支持目前所有主流小程序运行时（如企业微信小程序、QQ 小程序、支付宝小程序、钉钉小程序、抖音小程序、头条小程序、百度智能小程序等等）；
-   与微信小程序基础库（当前版本：2.23.2）同步更新。

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
        console.info('success', res.code);
    })
    .catch((err) => {
        console.error('fail', err);
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
        console.info('success', res.code);
    },
    fail: (err) => {
        console.error('fail', err);
    },
    complete: () => {
        console.log('complete');
    }
});
```

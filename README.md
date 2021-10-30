# wxmini-promisify

[![NPM Version](https://img.shields.io/npm/v/@skit/wxmini-promisify.svg?sanitize=true)](https://www.npmjs.com/package/@skit/wxmini-promisify)
[![NPM Download](https://img.shields.io/npm/dm/@skit/wxmini-promisify.svg?sanitize=true)](https://www.npmjs.com/package/@skit/wxmini-promisify)
[![Dependency Status](https://david-dm.org/fudiwei/wxmini-promisify.svg)](https://david-dm.org/fudiwei/wxmini-promisify)
[![License](https://img.shields.io/github/license/fudiwei/wxmini-promisify)](https://mit-license.org/)

> 微信官方已于 2019 年 7 月 16 日推出了小程序 API Promise 化独立的扩展库 [miniprogram-api-promise](https://github.com/wechat-miniprogram/miniprogram-api-promise)，详情请参阅此[链接](https://developers.weixin.qq.com/miniprogram/dev/extended/utils/api-promise.html)。
>
> 微信官方已于 2020 年 2 月 20 日在小程序基础库 2.10.2 中支持了 API Promise 形式调用，详情请参阅此[链接](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/api.html)。
>
> 本库也会继续维护更新。

---

## 特性

-   将微信小程序或小游戏中提供的基于回调函数的 API，转化为 Promise 形式（_wx.func_ 将转换成同名的 _wx.funcAsync_ 形式）；
-   与 wepy 框架的 [promisify](https://github.com/Tencent/wepy/wiki/wepy%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%BF%E7%94%A8async-await) 模块相比，侵入性更小，同时以 `Promise.prototype.finally` 的形式支持了原本的 _complete_ 回调；
-   与 miniprogram-api-promise 库相比，支持了 TypeScript。虽然社区有了解决方案（[详情参考此 Issue](https://github.com/wechat-miniprogram/miniprogram-api-promise/issues/5)），但并非百分百完全兼容，仍有部分类型声明因原始命名不标准而遗漏；
-   可单独拷贝到项目中使用；
-   支持 TypeScript；
-   与微信小程序基础库（当前版本：2.20.1）同步更新。

---

## 用法

安装：

```shell
npm install @skit/wxmini-promisify
```

导入：

```javascript
import wxmini from '@skit/wxmini-promisify';

wxmini.promisify({
    root: wx, // （可选）指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
    extends: ['someNewApi'], // （可选）若基础库新增了某些 API 而该库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
    enableCompatible: true // （可选）指示是否为低版本基础库提供覆写，防止抛出 NPE。默认值为 true。
});
```

使用异步方法：

```javascript
// 原始方法
wx.login({
    timeout: 5000,
    success: (res) => {
        console.info(res.code);
    },
    fail: (err) => {
        console.error(err);
    },
    complete: () => {
        // Do Something always
    }
});

// Promise 方法
wx.loginAsync({ timeout: 5000 })
    .then((res) => {
        console.info(res.code);
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        // Do Something always
    });
```

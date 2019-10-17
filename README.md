# wxmini-promisify

---

## 特性

* 将微信小程序中提供的基于回调函数的 API，转化为 Promise 形式（支持直接覆写或挂载成 *wx.funcAsync* 的形式）；
* 将微信小程序中高版本提供的 API，做向下兼容处理，以保证代码在运行时无需考虑版本问题而不抛出异常；
* 与 wepy 框架的 [promisify](https://github.com/Tencent/wepy/wiki/wepy%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%BF%E7%94%A8async-await) 模块相比，侵入性更小，同时支持了原本的 *complete* 回调；
* 与微信小程序基础库（当前版本：2.8.3）同步更新。

---

## 用法

安装：

``` shell
npm install @step/wxmini-promisify
```

导入：

``` javascript
import WxMini from '@step/wxmini-promisify';

WxMini.promisify({
    'enableOverwrite': false, // 是否直接覆写原生方法（默认值为 false）
    'enableCompatible': true, // 是否为低版本基础库提供兼容方法（默认值为 true）
    'ignore': ['request', 'downloadFile', 'uploadFile', 'connectSocket'] // 不覆写的原生方法列表（仅当 options.enableOverwrite 设置为 true 时生效）
});
WxMini.polyfill();
```
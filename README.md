# wxmini-promisify

> 微信官方已于 2019 年 7 月 16 日推出了专门的小程序 API Promise 化扩展库 [miniprogram-api-promise](https://github.com/wechat-miniprogram/miniprogram-api-promise)，详情请参阅此[链接](https://developers.weixin.qq.com/miniprogram/dev/extended/utils/api-promise.html)。
> 本库也会继续维护更新。

---

## 特性

* 将微信小程序中提供的基于回调函数的 API，转化为 Promise 形式（*wx.func* 将转换成同名的 *wx.funcAsync* 形式）；
* 将微信小程序中高版本提供的 API，做向下兼容处理，以保证代码在运行时无需考虑版本问题而不抛出异常；
* 与 wepy 框架的 [promisify](https://github.com/Tencent/wepy/wiki/wepy%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%BF%E7%94%A8async-await) 模块相比，侵入性更小，同时支持了原本的 *complete* 回调；
* 可单独拷贝到项目中使用；
* 支持 TypeScript；
* 与微信小程序基础库（当前版本：2.9.0）同步更新。

---

## 用法

安装：

> 提示：暂时未发布到 npmjs.org，需先自行执行 `npm run deploy` 发布到私有仓库。

``` shell
npm install @step/wxmini-promisify
```

导入：

``` javascript
import WxMini from '@step/wxmini-promisify';

WxMini.promisify({
    'root': wx, // 指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
    'extends': ['request', 'downloadFile', 'uploadFile', 'connectSocket'], // 若基础库新增了某些 API 而该库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
    'enableCompatible': true // 指示是否为低版本基础库提供覆写，防止抛出 undefined。默认值为 true。
});
WxMini.polyfill();
```
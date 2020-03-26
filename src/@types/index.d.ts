/// <reference path="./wx.api.d.ts" />

declare namespace STEP.WxminiPromisify {
    interface WxminiPolyfillOptions {}

    interface WxminiPromisifyOptions {
        /**
         * 指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
         */
        root?: any;
        /**
         * 若基础库新增了某些 API 而该库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
         */
        extends?: Array<string>;
        /**
         * 指示是否为低版本基础库提供覆写，防止抛出 undefined。默认值为 true。
         */
        enableCompatible?: boolean;
    }

    interface Wxmini {
        polyfill(options?: WxminiPolyfillOptions): void;

        promisify(options?: WxminiPromisifyOptions): void;
    }

    export const wxmini: Wxmini;
}

export default STEP.WxminiPromisify.wxmini;

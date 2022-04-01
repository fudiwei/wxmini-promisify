/// <reference path="./wx.miniprogram-config.d.ts" />
/// <reference path="./wx.miniprogram-api-promisify.d.ts" />
/// <reference path="./wx.minigame-api-promisify.d.ts" />

declare namespace SKIT.WxminiPromisify {
    interface WxminiPromisifyConfig {
        /*
         * 指定当前执行环境的根对象。默认环境为 wx，如在 uni-app、Taro 等跨端小程序框架、或其他平台的小程序时请自行替换为相应的值。
         */
        env?: unknown;
        /**
         * 指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
         */
        root?: unknown;
        /**
         * 若基础库新增了某些 API 而本库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
         */
        extends?: Array<string>;
    }

    export const _default: {
        promisify<T>(fn: (options?: { success?: (res?: T) => void }) => void): Promise<T>;
        promisifyAll(config?: WxminiPromisifyConfig): void;
    };
}

export default SKIT.WxminiPromisify._default;

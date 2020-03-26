declare namespace WechatMiniprogram {
    interface Wx {
        addEventListener(event: string, callback: Function);

        removeEventListener(event: string, callback: Function);
    }
}
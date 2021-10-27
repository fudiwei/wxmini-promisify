declare namespace SKIT.WxminiPromisify {
    namespace Internal {
        type WxCallbackOption = {
            success?: (...args: any) => void;
            fail?: (...args: any) => void;
            complete?: (...args: any) => void;
        };
        type WxPromisifiedCallbackOption<T extends WxCallbackOption> = Omit<T, keyof WxCallbackOption>;
        type WxPromisifiedCallbackResult<T extends WxCallbackOption> = Promise<Parameters<T['success']>[0]>;
    }
}

const isCallable = (fn) => 'function' === typeof fn;
const noop = () => {};

const promisyFuncs = [
    // network 下载
    'downloadFile',
    // network mDNS
    'startLocalServiceDiscovery', 'stopLocalServiceDiscovery',
    // network 发起请求
    'request',
    // network 上传
    'uploadFile',
    // network WebSocket
    'closeSocket', 'connectSocket', 'sendSocketMessage',

    // media 音频
    'getAvailableAudioSources', 'pauseVoice', 'playVoice', 'setInnerAudioOption', 'stopVoice',
    // media 背景音频
    'getBackgroundAudioPlayerState', 'pauseBackgroundAudio', 'playBackgroundAudio', 'seekBackgroundAudio', 'stopBackgroundAudio',
    // media 图片
    'chooseImage', 'chooseMessageFile', 'compressImage', 'getImageInfo', 'previewImage', 'saveImageToPhotosAlbum',
    // media 录音
    'stopRecord', 'startRecord',
    // media 视频
    'chooseMedia', 'chooseVideo', 'saveVideoToPhotosAlbum',

    // file
    'getFileInfo', 'getSavedFileInfo', 'getSavedFileList', 'openDocument', 'removeSavedFile', 'saveFile',

    // storage
    'clearStorage', 'getStorage', 'getStorageInfo', 'removeStorage', 'setStorage',
    'setBackgroundFetchToken', 'getBackgroundFetchToken', 'getBackgroundFetchData',

    // location
    'stopLocationUpdate', 'startLocationUpdateBackground', 'startLocationUpdate', 'openLocation', 'getLocation', 'chooseLocation',

    // device 加速计
    'startAccelerometer', 'stopAccelerometer',
    // device 电量
    'getBatteryInfo',
    // device 蓝牙
    'closeBluetoothAdapter', 'getBluetoothAdapterState', 'getBluetoothDevices', 'getConnectedBluetoothDevices', 'openBluetoothAdapter', 'startBluetoothDevicesDiscovery', 'stopBluetoothDevicesDiscovery',
    // device 低功耗蓝牙
    'closeBLEConnection', 'createBLEConnection', 'getBLEDeviceCharacteristics', 'getBLEDeviceServices', 'notifyBLECharacteristicValueChange', 'readBLECharacteristicValue', 'writeBLECharacteristicValue',
    // device 剪贴板
    'getClipboardData', 'setClipboardData',
    // device 罗盘
    'startCompass', 'stopCompass',
    // device 联系人
    'addPhoneContact',
    // device 陀螺仪
    'startGyroscope', 'stopGyroscope',
    // device iBeacon
    'getBeacons', 'startBeaconDiscovery', 'stopBeaconDiscovery',
    // device 设备方向
    'startDeviceMotionListening', 'stopDeviceMotionListening',
    // device 网络
    'getNetworkType',
    // device NFC
    'getHCEState', 'sendHCEMessage', 'startHCE', 'stopHCE',
    // device 电话
    'makePhoneCall',
    // device 扫码
    'scanCode',
    // device 屏幕
    'getScreenBrightness', 'setKeepScreenOn', 'setScreenBrightness',
    // device 振动
    'vibrateShort', 'vibrateLong',
    // device Wi-Fi
    'connectWifi', 'getConnectedWifi', 'getWifiList', 'setWifiList', 'startWifi', 'stopWifi',

    // ui 背景
    'setBackgroundColor', 'setBackgroundTextStyle',
    // ui 交互
    'hideLoading', 'hideToast', 'showActionSheet', 'showLoading', 'showModal', 'showToast',
    // ui 导航栏
    'showNavigationBarLoading', 'setNavigationBarTitle', 'setNavigationBarColor', 'hideNavigationBarLoading', 'hideHomeButton',
    // ui 下拉刷新
    'startPullDownRefresh', 'stopPullDownRefresh',
    // ui 滚动
    'pageScrollTo',
    // ui 置顶
    'setTopBarText',
    // ui TabBar
    'hideTabBar', 'hideTabBarRedDot', 'removeTabBarBadge', 'setTabBarBadge', 'setTabBarItem', 'setTabBarStyle', 'showTabBar', 'showTabBarRedDot',
    // ui 字体
    'loadFontFace',

    // open-api 收货地址
    'chooseAddress',
    // open-api 授权
    'authorize',
    // open-api 卡券
    'addCard', 'openCard',
    // open-api 发票
    'chooseInvoice', 'chooseInvoiceTitle',
    // open-api 登录
    'checkSession', 'login',
    // open-api 小程序跳转
    'navigateBackMiniProgram', 'navigateToMiniProgram',
    // open-api 支付
    'requestPayment',
    // open-api 设置
    'getSetting', 'openSetting',
    // open-api 生物认证
    'checkIsSoterEnrolledInDevice', 'checkIsSupportSoterAuthentication', 'startSoterAuthentication',
    // open-api 用户信息
    'getUserInfo',
    // open-api 微信运动
    'getWeRunData',
    // open-api 订阅消息
    'requestSubscribeMessage',

    // canvas
    'canvasToTempFilePath', 'canvasGetImageData', 'canvasPutImageData',

    // debug
    'setEnableDebug',

    // ext
    'getExtConfig',

    // route
    'navigateBack', 'navigateTo', 'redirectTo', 'reLaunch', 'switchTab',

    // share
    'getShareInfo', 'hideShareMenu', 'showShareMenu', 'updateShareMenu',

    // system
    'getSystemInfo',
];

/**
 * 
 * @param {Object} options
 * @param {Object} [options.root] 指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
 * @param {Array} [options.extends] 若基础库新增了某些 API 而该库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
 * @param {Boolean} [options.enableCompatible] 是否为低版本基础库提供兼容方法。默认值为 true。
 */
module.exports = (options = {}) => {
    options = Object.assign({
        root: wx,
        extends: [],
        enableCompatible: true
    }, options, {});

    if (null === wx || undefined === wx) {
        throw 'This module can be injected into wechat-miniprogram runtime only.';
    }
    if (null === options.root || undefined === options.root) {
        throw 'The value of root must be a not-empty object.';
    }
    if (!Array.isArray(options.extends)) {
        options.extends = Array.from(options.extends);
    }

    [].concat(promisyFuncs, options.extends)
        .filter((e) => !!e)
        .filter((e, i, arr) => arr.indexOf(e, 0) === i)
        .forEach((prop) => {
            let fn = wx[prop];
            if (!isCallable(fn)) {
                if (!options.enableCompatible) {
                    return;
                }

                fn = (args) => {
                    if ('object' === typeof args) {
                        if (isCallable(args.fail)) {
                            args.fail({ errMsg: `${prop}:not support` });
                        }
                        if (isCallable(args.complete)) {
                            args.complete({ errMsg: `${prop}:not support` });
                        }
                    }
                };
            }

            const newFn = (args = {}) => {
                args = Object.assign({
                    success: noop,
                    fail: noop,
                    complete: noop
                }, args, {});

                const successFn = args.success,
                    failFn = args.fail,
                    completeFn = args.complete;

                return new Promise((resolve, reject) => {
                    args.success = (res) => {
                        resolve(res);
                    };
                    args.fail = (res) => {
                        reject(res);
                    };
                    args.complete = () => {};

                    fn(args);
                }).then(res => {
                    if (isCallable(successFn)) {
                        try {
                            successFn(res);
                        } catch (err) {
                            console.error(err);
                        }
                    }

                    return Promise.resolve(res);
                }).catch(res => {
                    if (isCallable(failFn)) {
                        try {
                            failFn(res);
                        } catch (err) {
                            console.error(err);
                        }
                    }

                    return Promise.reject(res);
                }).finally(res => {
                    if (isCallable(completeFn)) {
                        try {
                            completeFn(res);
                        } catch (err) {
                            console.error(err);
                        }
                    }
                });
            };

            options.root[prop + 'Async'] = newFn;
        });
}
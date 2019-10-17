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
    'chooseVideo', 'saveVideoToPhotosAlbum',

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
 * @param {Boolean} options.enableOverwrite 是否直接覆写原生方法（默认值为 false）
 * @param {Boolean} options.enableCompatible 是否为低版本基础库提供兼容方法（默认值为 true）
 * @param {Array} options.ignore 忽略的原生方法列表（仅当 options.enableOverwrite 设置为 true 时生效）
 */
module.exports = (options = {}) => {
    if (null === wx || undefined === wx) {
        throw 'This module can be injected into wx-miniprogram runtime only.';
    }

    options = Object.assign({}, {
        enableOverwrite: false,
        enableCompatible: true,
        ignore: []
    }, options);

    if (!Array.isArray(options.ignore)) {
        options.ignore = [];
    }

    promisyFuncs.forEach((prop) => {
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

        const newFn = (args) => {
            return new Promise((resolve, reject) => {
                if ('object' !== typeof args) {
                    args = {};
                }

                const successFn = isCallable(args.success) ? args.success : noop,
                    failFn = isCallable(args.fail) ? args.fail : noop,
                    completeFn = isCallable(args.complete) ? args.complete : noop;

                args.success = (res) => {
                    successFn(res);
                    completeFn(res);
                    resolve(res);
                };
                args.fail = (err) => {
                    failFn(err);
                    completeFn(err);
                    reject(err);
                };
                args.complete = (data) => {
                    completeFn(data);
                };

                fn(args);
            });
        };

        const newProp = prop + 'Async';
        if (options.enableOverwrite && options.ignore.includes(prop)) {
            wx[prop] = newFn;
            wx[newProp] = newFn;
        } else {
            wx[newProp] = newFn;
        }
    });
}
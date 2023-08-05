const _apis = [
    // 基础：系统 - Base/System
    'openSystemBluetoothSetting',
    'openAppAuthorizeSetting',
    'getSystemInfoAsync',
    'getSystemInfo',
    'getSkylineInfo',
    'getRendererUserAgent',
    // 基础：更新 - Base/Update
    'updateWeChatApp',
    // 基础：分包加载 - Base/Subpackage
    'loadSubpackage',
    'preDownloadSubpackage',
    // 基础：调试 - Base/Debug
    'setEnableDebug',
    // 基础：性能 - Base/Performance
    'preloadWebview',
    'preloadSkylineView',
    'preloadAssets',

    // 路由 - Route
    'switchTab',
    'reLaunch',
    'redirectTo',
    'navigateTo',
    'navigateBack',

    // 跳转 - Navigate
    'openEmbeddedMiniProgram',
    'restartMiniProgram',
    'navigateToMiniProgram',
    'navigateBackMiniProgram',
    'exitMiniProgram',

    // 转发 - Share
    'updateShareMenu',
    'showShareMenu',
    'showShareImageMenu',
    'shareVideoMessage',
    'shareFileMessage',
    'hideShareMenu',
    'getShareInfo',
    'authPrivateMessage',
    'startHandoff',
    'checkHandoffEnabled',

    // 界面：交互 - UI/Interaction
    'showToast',
    'showModal',
    'showLoading',
    'showActionSheet',
    'hideToast',
    'hideLoading',
    'enableAlertBeforeUnload',
    'disableAlertBeforeUnload',
    // 界面：导航栏 - UI/Navigation
    'showNavigationBarLoading',
    'setNavigationBarTitle',
    'setNavigationBarColor',
    'hideNavigationBarLoading',
    'hideHomeButton',
    // 界面：菜单 - UI/Menu
    'setMenuStyle',
    // 界面：状态栏 - UI/StatusBar
    'setStatusBarStyle',
    // 界面：背景 - UI/Background
    'setBackgroundTextStyle',
    'setBackgroundColor',
    // 界面：TabBar - UI/TabBar
    'showTabBarRedDot',
    'showTabBar',
    'setTabBarStyle',
    'setTabBarItem',
    'setTabBarBadge',
    'removeTabBarBadge',
    'hideTabBarRedDot',
    'hideTabBar',
    // 界面：字体 - UI/Font
    'loadFontFace',
    // 界面：下拉刷新 - UI/PullDown
    'startPullDownRefresh',
    'stopPullDownRefresh',
    // 界面：滚动 - UI/Scroll
    'pageScrollTo',
    // 界面：置顶 - UI/TopBar
    'setTopBarText',
    // 界面：窗口 - UI/Window
    'setWindowSize',

    // 网络：发起请求 - Network/Request
    'request',
    // 网络：下载 - Network/Download
    'downloadFile',
    // 网络：上传 - Network/Upload
    'uploadFile',
    // 网络：WebSocket - Network/WebSocket
    'sendSocketMessage',
    'connectSocket',
    'closeSocket',
    // 网络：mDNS - Network/mDNS
    'stopLocalServiceDiscovery',
    'startLocalServiceDiscovery',

    // 支付 - Payment
    'requestVirtualPayment',
    'requestPluginPayment',
    'requestOrderPayment',
    'requestPayment',

    // 虚拟支付 - MidasPayment
    'requestMidasPayment',
    'requestMidasFriendPayment',

    // 数据缓存：存储 - Storage/Storage
    'setStorage',
    'removeStorage',
    'getStorageInfo',
    'getStorage',
    'clearStorage',
    'batchSetStorage',
    'batchGetStorage',
    // 数据缓存：周期性更新 - Storage/BackgroundFetch
    'setBackgroundFetchToken',
    'onBackgroundFetchData',
    'getBackgroundFetchToken',
    'getBackgroundFetchData',

    // 数据分析 - DataAnalysis
    'reportScene',
    'getCommonConfig',

    // 画布 - Canvas
    'canvasToTempFilePath',
    'canvasPutImageData',
    'canvasGetImageData',

    // 字体 - Font
    'getTextLineHeight',

    // 媒体：图片 - Media/Image
    'saveImageToPhotosAlbum',
    'previewMedia',
    'previewImage',
    'getImageInfo',
    'editImage',
    'cropImage',
    'compressImage',
    'chooseMessageFile',
    'chooseImage',
    // 媒体：视频 - Media/Video
    'saveVideoToPhotosAlbum',
    'openVideoEditor',
    'getVideoInfo',
    'compressVideo',
    'chooseVideo',
    'chooseMedia',
    // 媒体：音频 - Media/Audio&Voice
    'stopVoice',
    'playVoice',
    'pauseVoice',
    'setInnerAudioOption',
    'getAvailableAudioSources',
    // 媒体：背景音频 - Media/BackgroundAudio
    'stopBackgroundAudio',
    'seekBackgroundAudio',
    'playBackgroundAudio',
    'pauseBackgroundAudio',
    'getBackgroundAudioPlayerState',
    // 媒体：录音 - Media/Record
    'stopRecord',
    'startRecord',
    // 媒体：实时语音 - Media/VoIP
    'updateVoIPChatMuteConfig',
    'subscribeVoIPVideoMembers',
    'setEnable1v1Chat',
    'joinVoIPChat',
    'join1v1Chat',
    'exitVoIPChat',

    // 位置 - Location
    'stopLocationUpdate',
    'startLocationUpdateBackground',
    'startLocationUpdate',
    'openLocation',
    'getLocation',
    'getFuzzyLocation',
    'choosePoi',
    'chooseLocation',

    // 文件 File
    'saveFileToDisk',
    'saveFile',
    'removeSavedFile',
    'openDocument',
    'getSavedFileList',
    'getSavedFileInfo',
    'getFileInfo',

    // 开放接口：登录 - OpenAPI/Login
    'pluginLogin',
    'login',
    'checkSession',
    // 开放接口：用户信息 - OpenAPI/UserInfo
    'getUserProfile',
    'getUserInfo',
    // 开放接口：授权 - OpenAPI/Authorization
    'authorize',
    'authorizeForMiniProgram',
    // 开放接口：设置 - OpenAPI/Setting
    'openSetting',
    'getSetting',
    // 开放接口：收货地址 - OpenAPI/Address
    'chooseAddress',
    // 开放接口：卡券 - OpenAPI/Card
    'openCard',
    'addCard',
    // 开放接口：发票 - OpenAPI/Invoice
    'chooseInvoiceTitle',
    'chooseInvoice',
    // 开放接口：生物认证 - OpenAPI/SoterAuthentication
    'startSoterAuthentication',
    'checkIsSupportSoterAuthentication',
    'checkIsSoterEnrolledInDevice',
    // 开放接口：微信运动 - OpenAPI/RunData
    'shareToWeRun',
    'getWeRunData',
    'addWeRunData',
    'uploadWeRunData',
    // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
    'requestSubscribeMessage',
    'requestSubscribeSystemMessage',
    'requestSubscribeDeviceMessage',
    // 开放接口：微信红包 - OpenAPI/RedPackage
    'showRedPackage',
    // 开放接口：收藏 - OpenAPI/Favorites
    'addVideoToFavorites',
    'addFileToFavorites',
    // 开放接口：我的小程序 - OpenAPI/MyMiniProgram
    'checkIsAddedToMyMiniProgram',
    // 开放接口：车牌 - OpenAPI/LicensePlate
    'chooseLicensePlate',
    // 开放接口：视频号 - OpenAPI/Channels
    'reserveChannelsLive',
    'openChannelsUserProfile',
    'openChannelsLive',
    'openChannelsEvent',
    'openChannelsActivity',
    'getChannelsShareKey',
    'getChannelsLiveNoticeInfo',
    'getChannelsLiveInfo',
    // 开放接口：音视频通话 - OpenAPI/VoIP
    'requestDeviceVoIP',
    'getDeviceVoIPList',
    // 开放接口：微信群 - OpenAPI/Group
    'getGroupEnterInfo',
    // 开放接口：隐私信息授权 - OpenAPI/Privacy
    'requirePrivacyAuthorize',
    'openPrivacyContract',
    'getPrivacySetting',
    // 开放接口：微信客服 - OpenAPI/ServiceChat
    'openCustomerServiceChat',
    // 开放接口：开放数据 - OpenAPI/Data
    'shareMessageToFriend',
    'setUserCloudStorage',
    'removeUserCloudStorage',
    'modifyFriendInteractiveStorage',
    'getUserInteractiveStorage',
    'getUserCloudStorageKeys',
    'getUserCloudStorage',
    'getPotentialFriendList',
    'getGroupInfo',
    'getGroupCloudStorage',
    'getFriendCloudStorage',
    // 开放接口：防沉迷 - OpenAPI/Anti-Addiction
    'checkIsUserAdvisedToRest',
    // 开放接口：客服消息 - OpenAPI/CustomerMessage
    'openCustomerServiceConversation',
    // 开放接口：游戏圈 - OpenAPI/GameClub
    'getGameClubData',

    // 设备：外围设备 - Device/Peripheralf
    'createBLEPeripheralServer',
    // 设备：iBeacon - Device/iBeacon
    'stopBeaconDiscovery',
    'startBeaconDiscovery',
    'getBeacons',
    // 设备：NFC - Device/NFC
    'stopHCE',
    'startHCE',
    'sendHCEMessage',
    'getHCEState',
    // 设备：WiFi - Device/WiFi
    'stopWifi',
    'startWifi',
    'setWifiList',
    'getWifiList',
    'getConnectedWifi',
    'connectWifi',
    // 设备：日历 - Device/Calendar
    'addPhoneRepeatCalendar',
    'addPhoneCalendar',
    // 设备：联系人 - Device/Contact
    'chooseContact',
    'addPhoneContact',
    // 设备：无障碍 - Device/Accessibility
    'checkIsOpenAccessibility',
    // 设备：低功耗蓝牙 - Device/BLE
    'setBLEMTU',
    'makeBluetoothPair',
    'writeBLECharacteristicValue',
    'readBLECharacteristicValue',
    'notifyBLECharacteristicValueChange',
    'getBLEMTU',
    'getBLEDeviceServices',
    'getBLEDeviceCharacteristics',
    'createBLEConnection',
    'closeBLEConnection',
    'createBLEPeripheralServer',
    'getBLEDeviceRSSI',
    // 设备：蓝牙 - Device/Bluetooth
    'stopBluetoothDevicesDiscovery',
    'startBluetoothDevicesDiscovery',
    'openBluetoothAdapter',
    'isBluetoothDevicePaired',
    'getConnectedBluetoothDevices',
    'getBluetoothDevices',
    'getBluetoothAdapterState',
    'closeBluetoothAdapter',
    // 设备：电量 - Device/Battery
    'getBatteryInfo',
    // 设备：剪贴板 - Device/Clipboard
    'setClipboardData',
    'getClipboardData',
    // 设备：网络 - Device/Newwork
    'getLocalIPAddress',
    'getNetworkType',
    // 设备：加密 - Device/Crypto
    'getRandomValues',
    // 设备：屏幕 - Device/Screen
    'setVisualEffectOnCapture',
    'setScreenBrightness',
    'setKeepScreenOn',
    'getScreenRecordingState',
    'getScreenBrightness',
    // 设备：键盘 - Device/Keyboard
    'hideKeyboard',
    'getSelectedTextRange',
    'updateKeyboard',
    'showKeyboard',
    // 设备：电话 - Device/Call
    'makePhoneCall',
    // 设备：加速计 - Device/Accelerometer
    'stopAccelerometer',
    'startAccelerometer',
    // 设备：罗盘 - Device/Compass
    'stopCompass',
    'startCompass',
    // 设备：设备方向 - Device/Motion
    'stopDeviceMotionListening',
    'startDeviceMotionListening',
    // 设备：转屏 - Device/Orientation
    'setDeviceOrientation',
    // 设备：陀螺仪 - Device/Gyroscope
    'stopGyroscope',
    'startGyroscope',
    // 设备：扫码 - Device/ScanCode
    'scanCode',
    // 设备：短信 - Device/SMS
    'sendSms',
    // 设备：振动 - Device/Vibration
    'vibrateShort',
    'vibrateLong',

    // AI：推理 - AI/Inference
    'getInferenceEnvInfo',
    // AI：人脸识别 - AI/Face
    'stopFaceDetect',
    'initFaceDetect',
    'faceDetect',

    // 第三方平台 - Ext
    'getExtConfig',

    // 私有 API
    'addDevicePanel',
    'addNativeDownloadTask',
    'addToDesktop',
    'batchAddDevicePanel',
    'batchGetContactDirectly',
    'bindGroup',
    'bindPaymentCard',
    'calRqt',
    'cancelDownloadAppTask',
    'captureScreen',
    'checkBeforeAddOrder',
    'checkIsSupportFacialRecognition',
    'checkTrafficCardConditions',
    'chooseMultiMedia',
    'chooseShareGroup',
    'chooseWeChatContact',
    'deleteTrafficCard',
    'downloadApp',
    'downloadAppForIOS',
    'downloadSilkVoice',
    'drawCanvas',
    'enterContact',
    'faceVerifyForPay',
    'getABTestConfig',
    'getAppInstallState',
    'getChannelsLiveReservation',
    'getChannelsLiveState',
    'getCookies',
    'getDevicePanelList',
    'getExptInfo',
    'getLabInfo',
    'getMonitoredBluetoothDevices',
    'getOpenDeviceId',
    'getResPath',
    'getWCPayOverseaPrepayRequest',
    'getWxSecData',
    'handleWCPayOverseaWalletBuffer',
    'installDownloadApp',
    'issueTrafficCard',
    'joinGroup',
    'launchApplicationDirectly',
    'launchApplicationForNative',
    'launchDevMiniProgram',
    'launchMiniProgram',
    'loadPaySpeechDialectConfig',
    'makeVoIPCall',
    'navigateBackApplication',
    'navigateBackH5',
    'navigateBackNative',
    'navigateToDevMiniProgram',
    'navigateToMiniProgramDirectly',
    'notifyBLECharacteristicValueChanged',
    'notifyWCPayResult',
    'openBluetoothAdapterBackground',
    'openBusinessView',
    'openChannelsCreateContact',
    'openChannelsLiveCollection',
    'openCTID',
    'openDeliveryList',
    'openGoldenRedPacketDetail',
    'openMiniProgramAuthManageList',
    'openMiniProgramHistoryList',
    'openMiniProgramProfile',
    'openMiniProgramSearch',
    'openMiniProgramStarList',
    'openOfficialAccountProfile',
    'openOfflinePayView',
    'openPublicServicePayment',
    'openQRCode',
    'openSelectPayment',
    'openUrl',
    'openUserProfile',
    'openWCPayCardList',
    'openWCPayOverseaPaymentReceive',
    'openWCPayOverseaPaymentReceive',
    'openWeComUserProfile',
    'operateWXData',
    'pauseDownloadAppTask',
    'phoneBindCardVerifySms',
    'predownloadMiniProgramPackageDirectly',
    'preloadMiniProgramEnvDirectly',
    'presetWifiList',
    'preventApplePayUI',
    'publishWeChatState',
    'publishWechatStateActivity',
    'queryDownloadAppTask',
    'queryTrafficCardInfo',
    'rechargeTrafficCard',
    'removeDevicePanel',
    'requestBizSplitBillPayment',
    'requestEntrustAuthorization',
    'requestFacetoFacePayment',
    'requestH5Transaction',
    'requestH5Transaction',
    'requestJointPayment',
    'requestMallPayment',
    'requestPaymentToBank',
    'requestPersonalPay',
    'requestQueryCashier',
    'requestVerifyUserIdentity',
    'resumeDownloadAppTask',
    'scanItem',
    'searchContacts',
    'secureTunnel',
    'sendBizRedPacket',
    'sendGoldenRedPacket',
    'setBluetoothBackgroundMode',
    'setCookies',
    'setCurrentPaySpeech',
    'setDefaultTrafficCard',
    'setLabInfo',
    'setNavigationBarAlpha',
    'setNavigationBarRightButton',
    'setPageOrientation',
    'setPageStyle',
    'setResPath',
    'shareAppMessageForFakeNative',
    'showShareActionSheet',
    'startCustomFacialRecognitionVerify',
    'startCustomFacialRecognitionVerifyAndUploadVideo',
    'startFacialEncryptionVerify',
    'startFacialEncryptionVerifyAndUploadVideo',
    'startFacialRecognitionVerify',
    'startFacialRecognitionVerifyAndUploadVideo',
    'startMonitoringBluetoothDevice',
    'stopMonitoringBluetoothDevice',
    'traceEvent',
    'triggerGettingWidgetData',
    'uploadEncryptedFileToCDN',
    'updatePerfData',
    'uploadSilkVoice',
    'uploadToCommonCDN',
    'verifyPaymentPassword',
    'voiceSplitJoint',

    // 企业微信专属 API
    'qy.login',
    'qy.checkSession',
    'qy.getSystemInfo',
    'qy.getContext',
    'qy.setShareAttr',
    'qy.getShareInfo',
    'qy.selectEnterpriseContact',
    'qy.openUserProfile',
    'qy.getEnterpriseUserInfo',
    'qy.getAvatar',
    'qy.getQrCode',
    'qy.selectCorpGroupContact',
    'qy.claimClassAdmin',
    'qy.selectPrivilegedContact',
    'qy.openEnterpriseChat',
    'qy.updateEnterpriseChat',
    'qy.sendChatMessage',
    'qy.createCorpGroupChat',
    'qy.updateCorpGroupChat',
    'qy.getNFCReaderState',
    'qy.startNFCReader',
    'qy.stopNFCReader',
    'qy.translateVoice',
    'qy.chooseMessageFile',
    'qy.selectExternalContact',
    'qy.getCurExternalContact',
    'qy.getCurExternalChat',
    'qy.shareToExternalContact',
    'qy.shareToExternalChat',
    'qy.navigateToAddCustomer',
    'qy.shareToExternalMoments',
    'qy.navigateToKfChat',
    'qy.createExternalPayment',
    'qy.refundExternalPayment',
    'qy.createSchoolPayment',
    'qy.createDoc',
    'qy.checkSchedule',
    'qy.startMeeting',
    'qy.wedriveSelectDir',
    'qy.wedriveSelectFileForShare',
    'qy.wedriveSelectFileForDownload',
    'qy.wedocSelectDoc',
    'qy.startLiving',
    'qy.replayLiving',
    'qy.downloadLivingReplay',
    'qy.openThirdAppServiceChat',
    'qy.openAppManage',
    'qy.openAppComment',
    'qy.openAppDeviceDataAuth',
    'qy.addDevice',
    'qy.openDeviceProfile',
    'qy.queryCurrHWOpenTalk',
    'qy.enterHWOpenTalk',
    'qy.startWecast',
    'qy.printFile'
];

const _isFn = (fn) => 'function' === typeof fn;

const _c2p = (apiFunc, apiName) => {
    if (!_isFn(apiFunc))
        throw 'The first argument must be a function.';

    return (options = {}, ...args) => {
        const onSuccess = options.success,
            onFail = options.fail,
            onComplete = options.complete;

        const bindEventListeners = (target, options, ...events) => {
            if (!target || !options) {
                return;
            }

            for (let i = 0; i < events.length; i++) {
                if (_isFn(target[events[i]]) && _isFn(options[events[i]])) {
                    target[events[i]](options[events[i]]);
                }
            }
        };

        const p = new Promise((resolve, reject) => {
            options.success = (res) => resolve(res);
            options.fail = (err) => reject(err);
            options.complete = undefined;

            const ret = apiFunc(options, ...args);
            if (apiName === 'request') {
                bindEventListeners(ret, options, 'onHeadersReceived', 'onChunkReceived');
            } else if (apiName === 'downloadFile' || apiName === 'uploadFile') {
                bindEventListeners(ret, options, 'onHeadersReceived', 'onProgressUpdate');
            } else if (apiName === 'connectSocket') {
                bindEventListeners(ret, options, 'onClose', 'onError', 'onMessage', 'onOpen');
            } else if (apiName === 'loadSubpackage') {
                bindEventListeners(ret, options, 'onProgressUpdate');
            }
        }).then((res) => {
            _isFn(onSuccess) && onSuccess(res);
            return res;
        }).catch((err) => {
            _isFn(onFail) && onFail(err);
            throw err;
        });

        _isFn(p.finally) && _isFn(onComplete) && p.finally(onComplete);
        return p;
    };
};

const promisify = (fn) => {
    return _c2p(fn);
};

const promisifyAll = (config = {}) => {
    config = Object.assign({
        env: wx,
        root: wx,
        extends: []
    }, config);

    if (config.env == null)
        throw 'This module can be injected into WeChat MiniProgram/MiniGame runtime only.';
    if (config.root == null)
        throw 'The first argument `config.root` should be a not-empty object.';
    if (config.extends != null && !Array.isArray(config.extends))
        throw 'The first argument `config.extends` should be an array.';

    []
        .concat(_apis, config.extends)
        .filter((e, i, arr) => !!e && arr.indexOf(e, 0) === i)
        .forEach((prop) => {
            let env = config.env;
            let root = config.root;

            const pathes = String(prop).split('.').map(s => s.trim()).filter(s => !!s);
            for (let i = 0, len = pathes.length; i < len; i++) {
                const path = pathes[i];

                if (i === len - 1) {
                    const fn = _isFn(env[path])
                        ? env[path]
                        : function (args = {}) {
                            args.fail({ errMsg: `${prop}:not supported` });
                            args.complete({ errMsg: `${prop}:not supported` });
                        };
                    root[path + 'Async'] = _c2p(fn, prop);
                    continue;
                }

                root[path] = Object.assign({}, env[path]);
                root = root[path];
                env = env[path];
            }
        });
};

module.exports = {
    promisify,
    promisifyAll
};

const isCallable = (fn) => 'function' === typeof fn;
const noop = () => { };

const promisyFuncs = [
	// 基础：系统 - Base/System
	'openSystemBluetoothSetting', 'openAppAuthorizeSetting', 'getSystemInfoAsync', 'getSystemInfo',
	// 基础：更新 - Base/Update
	'updateWeChatApp',
	// 基础：调试 - Base/Debug
	'setEnableDebug',

	// 路由 - Route
	'switchTab', 'reLaunch', 'redirectTo', 'navigateTo', 'navigateBack',

	// 跳转 - Navigate
	'openEmbeddedMiniProgram', 'navigateToMiniProgram', 'navigateBackMiniProgram', 'exitMiniProgram',

	// 转发 - Share
	'updateShareMenu', 'showShareMenu', 'showShareImageMenu', 'shareVideoMessage', 'shareFileMessage', 'hideShareMenu', 'getShareInfo', 'authPrivateMessage', 'startHandoff', 'checkHandoffEnabled',

	// 界面：交互 - UI/Interaction
	'showToast', 'showModal', 'showLoading', 'showActionSheet', 'hideToast', 'hideLoading', 'enableAlertBeforeUnload', 'disableAlertBeforeUnload',
	// 界面：导航栏 - UI/Navigation
	'showNavigationBarLoading', 'setNavigationBarTitle', 'setNavigationBarColor', 'hideNavigationBarLoading', 'hideHomeButton',
	// 界面：菜单 - UI/Menu
	'setMenuStyle',
	// 界面：状态栏 - UI/StatusBar
	'setStatusBarStyle',
	// 界面：背景 - UI/Background
	'setBackgroundTextStyle', 'setBackgroundColor',
	// 界面：TabBar - UI/TabBar
	'showTabBarRedDot', 'showTabBar', 'setTabBarStyle', 'setTabBarItem', 'setTabBarBadge', 'removeTabBarBadge', 'hideTabBarRedDot', 'hideTabBar',
	// 界面：字体 - UI/Font
	'loadFontFace',
	// 界面：下拉刷新 - UI/PullDown
	'startPullDownRefresh', 'stopPullDownRefresh',
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
	'sendSocketMessage', 'connectSocket', 'closeSocket',
	// 网络：mDNS - Network/mDNS
	'stopLocalServiceDiscovery', 'startLocalServiceDiscovery',

	// 支付 - Payment
	'requestPayment', 'requestOrderPayment',

	// 虚拟支付 - MidasPayment
	'requestMidasPayment', 'requestMidasFriendPayment',

	// 数据缓存：存储 - Storage/Storage
	'setStorage', 'removeStorage', 'getStorageInfo', 'getStorage', 'clearStorage',
	// 数据缓存：周期性更新 - Storage/BackgroundFetch
	'setBackgroundFetchToken', 'onBackgroundFetchData', 'getBackgroundFetchToken', 'getBackgroundFetchData',

	// 画布 - Canvas
	'canvasToTempFilePath', 'canvasPutImageData', 'canvasGetImageData',

	// 字体 - Font
	'getTextLineHeight',

	// 媒体：图片 - Media/Image
	'saveImageToPhotosAlbum', 'previewMedia', 'previewImage', 'getImageInfo', 'compressImage', 'chooseMessageFile', 'chooseImage',
	// 媒体：视频 - Media/Video
	'saveVideoToPhotosAlbum', 'openVideoEditor', 'getVideoInfo', 'compressVideo', 'chooseVideo', 'chooseMedia',
	// 媒体：音频 - Media/Audio&Voice
	'stopVoice', 'playVoice', 'pauseVoice', 'setInnerAudioOption', 'getAvailableAudioSources',
	// 媒体：背景音频 - Media/BackgroundAudio
	'stopBackgroundAudio', 'seekBackgroundAudio', 'playBackgroundAudio', 'pauseBackgroundAudio', 'getBackgroundAudioPlayerState',
	// 媒体：录音 - Media/Record
	'stopRecord', 'startRecord',
	// 媒体：实时语音 - Media/VoIP
	'updateVoIPChatMuteConfig', 'subscribeVoIPVideoMembers', 'setEnable1v1Chat', 'joinVoIPChat', 'exitVoIPChat',

	// 位置 - Location
	'stopLocationUpdate', 'startLocationUpdateBackground', 'startLocationUpdate', 'openLocation', 'getLocation', 'choosePoi', 'chooseLocation',

	// 文件 File
	'saveFileToDisk', 'saveFile', 'removeSavedFile', 'openDocument', 'getSavedFileList', 'getSavedFileInfo', 'getFileInfo',

	// 开放接口：登录 - OpenAPI/Login
	'login', 'checkSession',
	// 开放接口：用户信息 - OpenAPI/UserInfo
	'getUserProfile', 'getUserInfo',
	// 开放接口：授权 - OpenAPI/Authorization
	'authorize', 'authorizeForMiniProgram',
	// 开放接口：设置 - OpenAPI/Setting
	'openSetting', 'getSetting',
	// 开放接口：收货地址 - OpenAPI/Address
	'chooseAddress',
	// 开放接口：卡券 - OpenAPI/Card
	'openCard', 'addCard',
	// 开放接口：发票 - OpenAPI/Invoice
	'chooseInvoiceTitle', 'chooseInvoice',
	// 开放接口：生物认证 - OpenAPI/SoterAuthentication
	'startSoterAuthentication', 'checkIsSupportSoterAuthentication', 'checkIsSoterEnrolledInDevice',
	// 开放接口：微信运动 - OpenAPI/RunData
	'shareToWeRun', 'getWeRunData',
	// 开放接口：订阅消息 - OpenAPI/SubscribeMessage
	'requestSubscribeMessage', 'requestSubscribeSystemMessage',
	// 开放接口：微信红包 - OpenAPI/RedPackage
	'showRedPackage',
	// 开放接口：收藏 - OpenAPI/Favorites
	'addVideoToFavorites', 'addFileToFavorites',
	// 开放接口：视频号 - OpenAPI/Channels
	'openChannelsLive', 'openChannelsActivity', 'getChannelsLiveNoticeInfo', 'getChannelsLiveInfo',
	// 开放接口：微信群 - OpenAPI/Group
	'getGroupEnterInfo',
	// 开放接口：微信客服 - OpenAPI/ServiceChat
	'openCustomerServiceChat',
	// 开放接口：开放数据 - OpenAPI/Data
	'shareMessageToFriend', 'setUserCloudStorage', 'removeUserCloudStorage', 'modifyFriendInteractiveStorage', 'getUserInteractiveStorage', 'getUserCloudStorageKeys', 'getUserCloudStorage', 'getPotentialFriendList', 'getGroupInfo', 'getGroupCloudStorage', 'getFriendCloudStorage',
	// 开放接口：防沉迷 - OpenAPI/Anti-Addiction
	'checkIsUserAdvisedToRest',
	// 开放接口：客服消息 - OpenAPI/CustomerMessage
	'openCustomerServiceConversation',

	// 设备：外围设备 - Device/Peripheral
	'createBLEPeripheralServer',
	// 设备：iBeacon - Device/iBeacon
	'stopBeaconDiscovery', 'startBeaconDiscovery', 'getBeacons',
	// 设备：NFC - Device/NFC
	'stopHCE', 'startHCE', 'sendHCEMessage', 'getHCEState',
	// 设备：WiFi - Device/WiFi
	'stopWifi', 'startWifi', 'setWifiList', 'getWifiList', 'getConnectedWifi', 'connectWifi',
	// 设备：日历 - Device/Calendar
	'addPhoneRepeatCalendar', 'addPhoneCalendar',
	// 设备：联系人 - Device/Contact
	'searchContacts', 'chooseContact', 'addPhoneContact',
	// 设备：无障碍 - Device/Accessibility
	'checkIsOpenAccessibility',
	// 设备：低功耗蓝牙 - Device/BLE
	'setBLEMTU', 'makeBluetoothPair', 'writeBLECharacteristicValue', 'readBLECharacteristicValue', 'notifyBLECharacteristicValueChange', 'getBLEMTU', 'getBLEDeviceServices', 'getBLEDeviceCharacteristics', 'createBLEConnection', 'closeBLEConnection', 'createBLEPeripheralServer', 'getBLEDeviceRSSI',
	// 设备：蓝牙 - Device/Bluetooth
	'stopBluetoothDevicesDiscovery', 'startBluetoothDevicesDiscovery', 'openBluetoothAdapter', 'isBluetoothDevicePaired', 'getConnectedBluetoothDevices', 'getBluetoothDevices', 'getBluetoothAdapterState', 'closeBluetoothAdapter',
	// 设备：电量 - Device/Battery
	'getBatteryInfo',
	// 设备：剪贴板 - Device/Clipboard
	'setClipboardData', 'getClipboardData',
	// 设备：网络 - Device/Newwork
	'getLocalIPAddress', 'getNetworkType',
	// 设备：加密 - Device/Crypto
	'getRandomValues',
	// 设备：屏幕 - Device/Screen
	'setVisualEffectOnCapture', 'setScreenBrightness', 'setKeepScreenOn', 'getScreenBrightness',
	// 设备：键盘 - Device/Keyboard
	'hideKeyboard', 'getSelectedTextRange', 'updateKeyboard', 'showKeyboard',
	// 设备：电话 - Device/Call
	'makePhoneCall',
	// 设备：加速计 - Device/Accelerometer
	'stopAccelerometer', 'startAccelerometer',
	// 设备：罗盘 - Device/Compass
	'stopCompass', 'startCompass',
	// 设备：设备方向 - Device/Motion
	'stopDeviceMotionListening', 'startDeviceMotionListening',
	// 设备：陀螺仪 - Device/Gyroscope
	'stopGyroscope', 'startGyroscope',
	// 设备：扫码 - Device/ScanCode
	'scanCode',
	// 设备：振动 - Device/Vibration
	'vibrateShort', 'vibrateLong',

	// AI：人脸识别 - AI/Face
	'stopFaceDetect', 'initFaceDetect', 'faceDetect',

	// 第三方平台 - Ext
	'getExtConfig',
];

/**
 *
 * @param {Object} options
 * @param {Object} [options.root] 指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
 * @param {Array} [options.extends] 若基础库新增了某些 API 而本库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
 * @param {Boolean} [options.enableCompatible] 是否为兼容低版本基础库。默认值为 true。
 */
module.exports = (options = {}) => {
	options = Object.assign({
		root: wx,
		extends: [],
		enableCompatible: true
	}, options, {});

	if (null === wx || undefined === wx) {
		throw 'This module can be injected into WeChat MiniProgram/MiniGame runtime only.';
	}
	if (null === options.root || undefined === options.root) {
		throw 'The value of `options.root` must be a not-empty object.';
	}
	if (!Array.isArray(options.extends)) {
		options.extends = Array.from(options.extends);
	}

	[].concat(promisyFuncs, options.extends)
		.filter((e, i, arr) => !!e && arr.indexOf(e, 0) === i)
		.forEach((prop) => {
			let fn = wx[prop];
			if (!isCallable(fn)) {
				if (!options.enableCompatible) {
					return;
				}

				fn = (args) => {
					if ('object' === typeof args) {
						if (isCallable(args.fail)) {
							args.fail({ errMsg: `${prop}:not supported` });
						}
						if (isCallable(args.complete)) {
							args.complete({ errMsg: `${prop}:not supported` });
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

				const p = new Promise((resolve, reject) => {
					args.success = (res) => resolve(res);
					args.fail = (res) => reject(res);
					args.complete = noop;

					fn(args);
				}).then(res => {
					if (isCallable(successFn)) {
						successFn(res);
					}

					return Promise.resolve(res);
				}).catch(res => {
					if (isCallable(failFn)) {
						failFn(res);
					}

					return Promise.reject(res);
				});

				if (isCallable(p.finally)) {
					p.finally(() => {
						if (isCallable(completeFn)) {
							completeFn();
						}
					});
				}

				return p;
			};

			options.root[prop + 'Async'] = newFn;
		});
};

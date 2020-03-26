declare namespace WechatMiniprogram {
    interface Wx {
        // 基础：系统 - Base/System
        getSystemInfoAsync(options?: GetSystemInfoOption): Promise<GetSystemInfoSuccessCallbackResult>;
        // 基础：调试 - Base/Debug
        setEnableDebugAsync(options?: SetEnableDebugOption): Promise<GeneralCallbackResult>;

        // 路由 - Route
        reLaunchAsync(options?: ReLaunchOption): Promise<GeneralCallbackResult>;
        switchTabAsync(options?: SwitchTabOption): Promise<GeneralCallbackResult>;
        redirectToAsync(options?: RedirectToOption): Promise<GeneralCallbackResult>;
        navigateToAsync(options?: NavigateToOption): Promise<NavigateToSuccessCallbackResult>;
        navigateBackAsync(options?: NavigateBackOption): Promise<GeneralCallbackResult>;

        // 界面：交互 - UI/Interaction
        showToastAsync(options?: ShowToastOption): Promise<GeneralCallbackResult>;
        showModalAsync(options?: ShowModalOption): Promise<ShowModalSuccessCallbackResult>;
        showLoadingAsync(options?: ShowLoadingOption): Promise<GeneralCallbackResult>;
        showActionSheetAsync(options?: ShowActionSheetOption): Promise<ShowActionSheetSuccessCallbackResult>;
        hideToastAsync(options?: HideToastOption): Promise<GeneralCallbackResult>;
        hideLoadingAsync(options?: HideLoadingOption): Promise<GeneralCallbackResult>;
        // 界面：导航栏 - UI/Navigation
        showNavigationBarLoadingAsync(options?: ShowNavigationBarLoadingOption): Promise<GeneralCallbackResult>;
        setNavigationBarTitleAsync(options?: SetNavigationBarTitleOption): Promise<GeneralCallbackResult>;
        setNavigationBarColorAsync(options?: SetNavigationBarColorOption): Promise<GeneralCallbackResult>;
        hideNavigationBarLoadingAsync(options?: HideNavigationBarLoadingOption): Promise<GeneralCallbackResult>;
        hideHomeButtonAsync(options?: HideHomeButtonOption): Promise<GeneralCallbackResult>;
        // 界面：背景 - UI/Background
        setBackgroundTextStyleAsync(options?: SetBackgroundTextStyleOption): Promise<GeneralCallbackResult>;
        setBackgroundColorAsync(options?: SetBackgroundColorOption): Promise<GeneralCallbackResult>;
        // 界面：TabBar - UI/TabBar
        showTabBarRedDotAsync(options?: ShowTabBarRedDotOption): Promise<GeneralCallbackResult>;
        showTabBarAsync(options?: ShowTabBarOption): Promise<GeneralCallbackResult>;
        setTabBarStyleAsync(options?: SetTabBarStyleOption): Promise<GeneralCallbackResult>;
        setTabBarItemAsync(options?: SetTabBarItemOption): Promise<GeneralCallbackResult>;
        setTabBarBadgeAsync(options?: SetTabBarBadgeOption): Promise<GeneralCallbackResult>;
        removeTabBarBadgeAsync(options?: RemoveTabBarBadgeOption): Promise<GeneralCallbackResult>;
        hideTabBarRedDotAsync(options?: HideTabBarRedDotOption): Promise<GeneralCallbackResult>;
        hideTabBarAsync(options?: HideTabBarOption): Promise<GeneralCallbackResult>;
        // 界面：字体 - UI/Font
        loadFontFaceAsync(options?: LoadFontFaceOption): Promise<LoadFontFaceSuccessCallbackResult>;
        // 界面：下拉刷新 - UI/PullDown
        startPullDownRefreshAsync(options?: StartPullDownRefreshOption): Promise<GeneralCallbackResult>;
        stopPullDownRefreshAsync(options?: StopPullDownRefreshOption): Promise<GeneralCallbackResult>;
        // 界面：滚动 - UI/Scroll
        pageScrollToAsync(options?: PageScrollToOption): Promise<GeneralCallbackResult>;
        // 界面：置顶 - UI/TopBar
        setTopBarTextAsync(options?: SetTopBarTextOption): Promise<GeneralCallbackResult>;
        // 界面：键盘 - UI/Keyword
        hideKeyboardAsync(options?: HideKeyboardOption): Promise<GeneralCallbackResult>;
        getSelectedTextRange(options?: GetSelectedTextRangeOption): Promise<GetSelectedTextRangeSuccessCallbackResult>;

        // 网络：发起请求 - Network/Request
        requestAsync(options?: RequestOption): Promise<RequestSuccessCallbackResult>;
        // 网络：下载 - Network/Download
        downloadFileAsync(options?: DownloadFileOption): Promise<DownloadFileSuccessCallbackResult>;
        // 网络：上传 - Network/Upload
        uploadFileAsync(options?: UploadFileOption): Promise<UploadFileSuccessCallbackResult>;
        // 网络：WebSocket - Network/WebSocket
        sendSocketMessageAsync(options?: SendSocketMessageOption): Promise<GeneralCallbackResult>;
        connectSocketAsync(options?: ConnectSocketOption): Promise<GeneralCallbackResult>;
        closeSocketAsync(options?: CloseSocketOption): Promise<GeneralCallbackResult>;
        // 网络：mDNS - Network/mDNS
        stopLocalServiceDiscoveryAsync(options?: StopLocalServiceDiscoveryOption): Promise<GeneralCallbackResult>;
        startLocalServiceDiscoveryAsync(options?: StartLocalServiceDiscoveryOption): Promise<GeneralCallbackResult>;
        
        // 数据缓存：存储 - Storage/Storage
        setStorageAsync(options?: SetStorageOption): Promise<GeneralCallbackResult>;
        removeStorageAsync(options?: RemoveStorageOption): Promise<GeneralCallbackResult>;
        getStorageInfoAsync(options?: GetStorageInfoOption): Promise<GetStorageInfoSuccessCallbackOption>;
        getStorageAsync(options?: GetStorageOption): Promise<GetStorageInfoSuccessCallbackOption>;
        clearStorageAsync(options?: ClearStorageOption): Promise<GeneralCallbackResult>;
        // 数据缓存：周期性更新 - Storage/BackgroundFetch
        setBackgroundFetchTokenAsync(options?: SetBackgroundFetchTokenOption): Promise<GeneralCallbackResult>;
        onBackgroundFetchDataAsync(options?: OnBackgroundFetchDataOption): Promise<GeneralCallbackResult>;
        getBackgroundFetchTokenAsync(options?: GetBackgroundFetchTokenOption): Promise<GeneralCallbackResult>;
        getBackgroundFetchDataAsync(options?: GetBackgroundFetchDataOption): Promise<GeneralCallbackResult>;
        
        // 媒体：图片 - Media/Image
        saveImageToPhotosAlbumAsync(options?: SaveImageToPhotosAlbumOption): Promise<GeneralCallbackResult>;
        previewImageAsync(options?: PreviewImageOption): Promise<GeneralCallbackResult>;
        getImageInfoAsync(options?: GetImageInfoOption): Promise<GetImageInfoSuccessCallbackResult>;
        compressImageAsync(options?: CompressImageOption): Promise<CompressImageSuccessCallbackResult>;
        chooseMessageFileAsync(options?: ChooseMessageFileOption): Promise<ChooseMessageFileSuccessCallbackResult>;
        chooseImageAsync(options?: ChooseImageOption): Promise<ChooseImageSuccessCallbackResult>;
        // 媒体：视频 - Media/Video
        saveVideoToPhotosAlbumAsync(options?: SaveVideoToPhotosAlbumOption): Promise<GeneralCallbackResult>;
        chooseVideoAsync(options?: ChooseVideoOption): Promise<ChooseVideoSuccessCallbackResult>;
        chooseMediaAsync(options?: ChooseMediaOption): Promise<ChooseMediaSuccessCallbackResult>;
        // 媒体：音频 - Media/Audio&Voice
        stopVoiceAsync(options?: StopVoiceOption): Promise<GeneralCallbackResult>;
        setInnerAudioOptionAsync(options?: SetInnerAudioOption): Promise<GeneralCallbackResult>;
        playVoiceAsync(options?: PlayVoiceOption): Promise<GeneralCallbackResult>;
        pauseVoiceAsync(options?: PauseVoiceOption): Promise<GeneralCallbackResult>;
        getAvailableAudioSourcesAsync(options?: GetAvailableAudioSourcesOption): Promise<GetAvailableAudioSourcesSuccessCallbackResult>;
        // 媒体：背景音频 - Media/BackgroundAudio
        stopBackgroundAudioAsync(options?: StopBackgroundAudioOption): Promise<GeneralCallbackResult>;
        seekBackgroundAudioAsync(options?: SeekBackgroundAudioOption): Promise<GeneralCallbackResult>;
        playBackgroundAudioAsync(options?: PlayBackgroundAudioOption): Promise<GeneralCallbackResult>;
        pauseBackgroundAudioAsync(options?: PauseBackgroundAudioOption): Promise<GeneralCallbackResult>;
        getBackgroundAudioPlayerStateAsync(options?: GetBackgroundAudioPlayerStateOption): Promise<GetBackgroundAudioPlayerStateSuccessCallbackResult>;
        // 媒体：录音 - Media/Record
        stopRecordAsync(options?: WxStopRecordOption): Promise<GeneralCallbackResult>;
        startRecordAsync(options?: WxStartRecordOption): Promise<StartRecordSuccessCallbackResult>;
        
        // 位置 - Location
        stopLocationUpdateAsync(options?: StopLocationUpdateOption): Promise<GeneralCallbackResult>;
        startLocationUpdateBackgroundAsync(options?: StartLocationUpdateBackgroundOption): Promise<GeneralCallbackResult>;
        startLocationUpdateAsync(options?: StartLocationUpdateOption): Promise<GeneralCallbackResult>;
        openLocationAsync(options?: OpenLocationOption): Promise<GeneralCallbackResult>;
        getLocationAsync(options?: GetLocationOption): Promise<GetLocationSuccessCallbackResult>;
        chooseLocationAsync(options?: ChooseLocationOption): Promise<ChooseLocationSuccessCallbackResult>;

        // 转发 - Share
        updateShareMenuAsync(options?: UpdateShareMenuOption): Promise<GeneralCallbackResult>;
        showShareMenuAsync(options?: ShowShareMenuOption): Promise<GeneralCallbackResult>;
        hideShareMenuAsync(options?: HideShareMenuOption): Promise<GeneralCallbackResult>;
        getShareInfoAsync(options?: GetShareInfoOption): Promise<GetShareInfoSuccessCallbackResult>;

        // 画布 - Canvas
        canvasToTempFilePathAsync(options?: CanvasToTempFilePathOption): Promise<CanvasToTempFilePathSuccessCallbackResult>;
        canvasPutImageDataAsync(options?: CanvasPutImageDataOption): Promise<GeneralCallbackResult>;
        canvasGetImageDataAync(options?: CanvasGetImageDataOption): Promise<CanvasGetImageDataSuccessCallbackResult>;
        
        // 文件 File
        saveFileAsync(options?: WxSaveFileOption): Promise<WxSaveFileSuccessCallbackResult>;
        removeSavedFileAsync(options?: WxRemoveSavedFileOption): Promise<GeneralCallbackResult>;
        openDocumentAsync(options?: OpenDocumentOption): Promise<GeneralCallbackResult>;
        getSavedFileListAsync(options?: WxGetSavedFileListOption): Promise<WxGetSavedFileListSuccessCallbackResult>;
        getSavedFileInfoAsync(options?: GetSavedFileInfoOption): Promise<GetSavedFileInfoSuccessCallbackResult>;
        getFileInfoAsync(options?: WxGetFileInfoOption): Promise<WxGetFileInfoSuccessCallbackResult>;

        // 开放接口：登录 - OpenAPI/Login
        loginAsync(options?: LoginOption): Promise<LoginSuccessCallbackResult>;
        checkSessionAsync(options?: CheckSessionOption): Promise<GeneralCallbackResult>;
        // 开放接口：小程序跳转 - OpenAPI/MiniProgramNavigate
        navigateToMiniProgramAsync(options?: NavigateToMiniProgramOption): Promise<GeneralCallbackResult>;
        navigateBackMiniProgramAsync(options?: NavigateBackMiniProgramOption): Promise<GeneralCallbackResult>;
        // 开放接口：用户信息 - OpenAPI/UserInfo
        getUserInfoAsync(options?: GetUserInfoOption): Promise<GetUserInfoSuccessCallbackResult>;
        // 开放接口：支付 - OpenAPI/Payment
        requestPaymentAsync(options?: RequestPaymentOption): Promise<GeneralCallbackResult>;
        // 开放接口：授权 - OpenAPI/Authorization
        authorizeAsync(options?: AuthorizeOption): Promise<GeneralCallbackResult>;
        // 开放接口：设置 - OpenAPI/Setting
        openSettingAsync(options?: OpenSettingOption): Promise<OpenSettingSuccessCallbackResult>;
        getSettingAsync(options?: GetSettingOption): Promise<GetSettingSuccessCallbackResult>;
        // 开放接口：收货地址 - OpenAPI/Address
        chooseAddressAsync(options?: ChooseAddressOption): Promise<ChooseAddressSuccessCallbackResult>;
        // 开放接口：卡券 - OpenAPI/Card
        openCardAsync(options?: OpenCardOption): Promise<GeneralCallbackResult>;
        addCardAsync(options?: AddCardOption): Promise<AddCardSuccessCallbackResult>;
        // 开放接口：发票 - OpenAPI/Invoice
        chooseInvoiceTitleAsync(options?: ChooseInvoiceTitleOption): Promise<ChooseInvoiceTitleSuccessCallbackResult>;
        chooseInvoiceAsync(options?: ChooseInvoiceOption): Promise<ChooseInvoiceSuccessCallbackResult>;
        // 开放接口：生物认证 - OpenAPI/SoterAuthentication
        startSoterAuthenticationAsync(options?: StartSoterAuthenticationOption): Promise<StartSoterAuthenticationSuccessCallbackResult>;
        checkIsSupportSoterAuthenticationAsync(options?: CheckIsSupportSoterAuthenticationOption): Promise<CheckIsSupportSoterAuthenticationSuccessCallbackResult>;
        checkIsSoterEnrolledInDeviceAsync(options?: CheckIsSoterEnrolledInDeviceOption): Promise<CheckIsSoterEnrolledInDeviceSuccessCallbackResult>;
        // 开放接口：微信运动 - OpenAPI/RunData
        getWeRunDataAsync(options?: GetWeRunDataOption): Promise<GetWeRunDataSuccessCallbackResult>;
        // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
        requestSubscribeMessageAsync(options?: RequestSubscribeMessageOption): Promise<RequestSubscribeMessageSuccessCallbackResult>;
        // 开放接口：微信红包 - OpenAPI/RedPackage
        showRedPackgeAsync(options?: ShowRedPackageOption): Promise<GeneralCallbackResult>;

        // 设备：iBeacon - Device/iBeacon
        stopBeaconDiscoveryAsync(options?: StopBeaconDiscoveryOption): Promise<IBeaconError>;
        startBeaconDiscoveryAsync(options?: StartBeaconDiscoveryOption): Promise<IBeaconError>;
        getBeaconsAsync(options?: GetBeaconsOption): Promise<GetBeaconsSuccessCallbackResult>;
        // 设备：WiFi - Device/WiFi
        stopWifiAsync(options?: StopWifiOption): Promise<WifiError>;
        startWifiAsync(options?: StartWifiOption): Promise<WifiError>;
        setWifiListAsync(options?: SetWifiListOption): Promise<WifiError>;
        getWifiListAsync(options?: GetWifiListOption): Promise<WifiError>;
        getConnectedWifiAsync(options?: GetConnectedWifiOption): Promise<GetConnectedWifiSuccessCallbackResult>;
        connectWifiAsync(options?: ConnectWifiOption): Promise<WifiError>;
        // 设备：联系人 - Device/Contact
        addPhoneContactAsync(options?: AddPhoneContactOption): Promise<GeneralCallbackResult>;
        // 设备：低功耗蓝牙 - Device/BLE
        writeBLECharacteristicValueAsync(options?: WriteBLECharacteristicValueOption): Promise<BluetoothError>;
        readBLECharacteristicValueAsync(options?: ReadBLECharacteristicValueOption): Promise<BluetoothError>;
        notifyBLECharacteristicValueChangeAsync(options?: NotifyBLECharacteristicValueChangeOption): Promise<BluetoothError>;
        getBLEDeviceServicesAsync(options?: GetBLEDeviceServicesOption): Promise<GetBLEDeviceServicesSuccessCallbackResult>;
        getBLEDeviceCharacteristicsAsync(options?: GetBLEDeviceCharacteristicsOption): Promise<GetBLEDeviceCharacteristicsSuccessCallbackResult>;
        createBLEConnectionAsync(options?: CreateBLEConnectionOption): Promise<BluetoothError>;
        closeBLEConnectionAsync(options?: CloseBLEConnectionOption): Promise<BluetoothError>;
        // 设备：蓝牙 - Device/Bluetooth
        stopBluetoothDevicesDiscoveryAsync(options?: StopBluetoothDevicesDiscoveryOption): Promise<BluetoothError>;
        startBluetoothDevicesDiscoveryAsync(options?: StartBluetoothDevicesDiscoveryOption): Promise<BluetoothError>;
        openBluetoothAdapterAsync(options?: OpenBluetoothAdapterOption): Promise<BluetoothError>;
        getConnectedBluetoothDevicesAsync(options?: GetConnectedBluetoothDevicesOption): Promise<GetConnectedBluetoothDevicesSuccessCallbackResult>;
        getBluetoothDevicesAsync(options?: GetBluetoothDevicesOption): Promise<GetBluetoothDevicesSuccessCallbackResult>;
        getBluetoothAdapterStateAsync(options?: GetBluetoothAdapterStateOption): Promise<GetBluetoothAdapterStateSuccessCallbackResult>;
        closeBluetoothAdapterAsync(options?: CloseBluetoothAdapterOption): Promise<BluetoothError>;
        // 设备：电量 - Device/Battery
        getBatteryInfoAsync(options?: GetBatteryInfoOption): Promise<GetBatteryInfoSuccessCallbackResult>;
        // 设备：剪贴板 - Device/Clipboard
        setClipboardDataAsync(options?: SetClipboardDataOption): Promise<GeneralCallbackResult>;
        getClipboardDataAsync(options?: GetClipboardDataOption): Promise<GetClipboardDataSuccessCallbackOption>;
        // 设备：NFC - Device/NFC
        stopHCEAsync(options?: StopHCEOption): Promise<NFCError>;
        startHCEAsync(options?: StartHCEOption): Promise<NFCError>;
        sendHCEMessageAsync(options?: SendHCEMessageOption): Promise<NFCError>;
        getHCEStateAsync(options?: GetHCEStateOption): Promise<NFCError>;
        // 设备：网络 - Device/Newwork
        getNetworkTypeAsync(options?: GetNetworkTypeOption): Promise<GetNetworkTypeSuccessCallbackResult>;
        // 设备：屏幕 - Device/Screen
        setScreenBrightnessAsync(options?: SetScreenBrightnessOption): Promise<GeneralCallbackResult>;
        setKeepScreenOnAsync(options?: SetKeepScreenOnOption): Promise<GeneralCallbackResult>;
        getScreenBrightnessAsync(options?: GetScreenBrightnessOption): Promise<GetScreenBrightnessSuccessCallbackOption>;
        // 设备：电话 - Device/Call
        makePhoneCallAsync(options?: MakePhoneCallOption): Promise<GeneralCallbackResult>;
        // 设备：加速计 - Device/Accelerometer
        stopAccelerometerAsync(options?: StopAccelerometerOption): Promise<GeneralCallbackResult>;
        startAccelerometerAsync(options?: StartAccelerometerOption): Promise<GeneralCallbackResult>;
        // 设备：罗盘 - Device/Compass
        stopCompassAsync(options?: StopCompassOption): Promise<GeneralCallbackResult>;
        startCompassAsync(options?: StartCompassOption): Promise<GeneralCallbackResult>;
        // 设备：设备方向 - Device/Motion
        stopDeviceMotionListeningAsync(options?: StopDeviceMotionListeningOption): Promise<GeneralCallbackResult>;
        startDeviceMotionListeningAsync(options?: StartDeviceMotionListeningOption): Promise<GeneralCallbackResult>;
        // 设备：陀螺仪 - Device/Gyroscope
        stopGyroscopeAsync(options?: StopGyroscopeOption): Promise<GeneralCallbackResult>;
        startGyroscopeAsync(options?: StartGyroscopeOption): Promise<GeneralCallbackResult>;
        // 设备：扫码 - Device/ScanCode
        scanCodeAsync(options?: ScanCodeOption): Promise<ScanCodeSuccessCallbackResult>;
        // 设备：振动 - Device/Vibration
        vibrateShortAsync(options?: VibrateShortOption): Promise<GeneralCallbackResult>;
        vibrateLongAsync(options?: VibrateLongOption): Promise<GeneralCallbackResult>;

        // 第三方平台 - Ext
        getExtConfigAsync(options?: GetExtConfigOption): Promise<GetExtConfigSuccessCallbackResult>;
    }
}
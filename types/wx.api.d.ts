declare namespace WechatMiniprogram {
    namespace Wx {
        type PromisifiedCallbackResult<T extends { success?: (...args: any) => any }> = Promise<Parameters<T['success']>[0]>;
    }

    interface Wx {
        // 基础：系统 - Base/System
        getSystemInfoAsyncAsync(options?: GetSystemInfoAsyncOption): Wx.PromisifiedCallbackResult<GetSystemInfoAsyncOption>;
        getSystemInfoAsync(options?: GetSystemInfoOption): Wx.PromisifiedCallbackResult<GetSystemInfoOption>;
        // 基础：更新 - Base/Update
        updateWeChatAppAsync(options?: UpdateWeChatAppOption): Wx.PromisifiedCallbackResult<UpdateWeChatAppOption>;
        // 基础：调试 - Base/Debug
        setEnableDebugAsync(options?: SetEnableDebugOption): Wx.PromisifiedCallbackResult<SetEnableDebugOption>;

        // 路由 - Route
        reLaunchAsync(options?: ReLaunchOption): Wx.PromisifiedCallbackResult<ReLaunchOption>;
        switchTabAsync(options?: SwitchTabOption): Wx.PromisifiedCallbackResult<SwitchTabOption>;
        redirectToAsync(options?: RedirectToOption): Wx.PromisifiedCallbackResult<RedirectToOption>;
        navigateToAsync(options?: NavigateToOption): Wx.PromisifiedCallbackResult<NavigateToOption>;
        navigateBackAsync(options?: NavigateBackOption): Wx.PromisifiedCallbackResult<NavigateBackOption>;

        // 界面：交互 - UI/Interaction
        showToastAsync(options?: ShowToastOption): Wx.PromisifiedCallbackResult<ShowToastOption>;
        showModalAsync(options?: ShowModalOption): Wx.PromisifiedCallbackResult<ShowModalOption>;
        showLoadingAsync(options?: ShowLoadingOption): Wx.PromisifiedCallbackResult<ShowLoadingOption>;
        showActionSheetAsync(options?: ShowActionSheetOption): Wx.PromisifiedCallbackResult<ShowActionSheetOption>;
        hideToastAsync(options?: HideToastOption): Wx.PromisifiedCallbackResult<HideToastOption>;
        hideLoadingAsync(options?: HideLoadingOption): Wx.PromisifiedCallbackResult<HideLoadingOption>;
        enableAlertBeforeUnloadAsync(options?: EnableAlertBeforeUnloadOption): Wx.PromisifiedCallbackResult<EnableAlertBeforeUnloadOption>;
        disableAlertBeforeUnloadAsync(options?: DisableAlertBeforeUnloadOption): Wx.PromisifiedCallbackResult<DisableAlertBeforeUnloadOption>;
        // 界面：导航栏 - UI/Navigation
        showNavigationBarLoadingAsync(options?: ShowNavigationBarLoadingOption): Wx.PromisifiedCallbackResult<ShowNavigationBarLoadingOption>;
        setNavigationBarTitleAsync(options?: SetNavigationBarTitleOption): Wx.PromisifiedCallbackResult<SetNavigationBarTitleOption>;
        setNavigationBarColorAsync(options?: SetNavigationBarColorOption): Wx.PromisifiedCallbackResult<SetNavigationBarColorOption>;
        hideNavigationBarLoadingAsync(options?: HideNavigationBarLoadingOption): Wx.PromisifiedCallbackResult<HideNavigationBarLoadingOption>;
        hideHomeButtonAsync(options?: HideHomeButtonOption): Wx.PromisifiedCallbackResult<HideHomeButtonOption>;
        // 界面：背景 - UI/Background
        setBackgroundTextStyleAsync(options?: SetBackgroundTextStyleOption): Wx.PromisifiedCallbackResult<SetBackgroundTextStyleOption>;
        setBackgroundColorAsync(options?: SetBackgroundColorOption): Wx.PromisifiedCallbackResult<SetBackgroundColorOption>;
        // 界面：TabBar - UI/TabBar
        showTabBarRedDotAsync(options?: ShowTabBarRedDotOption): Wx.PromisifiedCallbackResult<ShowTabBarRedDotOption>;
        showTabBarAsync(options?: ShowTabBarOption): Wx.PromisifiedCallbackResult<ShowTabBarOption>;
        setTabBarStyleAsync(options?: SetTabBarStyleOption): Wx.PromisifiedCallbackResult<SetTabBarStyleOption>;
        setTabBarItemAsync(options?: SetTabBarItemOption): Wx.PromisifiedCallbackResult<SetTabBarItemOption>;
        setTabBarBadgeAsync(options?: SetTabBarBadgeOption): Wx.PromisifiedCallbackResult<SetTabBarBadgeOption>;
        removeTabBarBadgeAsync(options?: RemoveTabBarBadgeOption): Wx.PromisifiedCallbackResult<RemoveTabBarBadgeOption>;
        hideTabBarRedDotAsync(options?: HideTabBarRedDotOption): Wx.PromisifiedCallbackResult<HideTabBarRedDotOption>;
        hideTabBarAsync(options?: HideTabBarOption): Wx.PromisifiedCallbackResult<HideTabBarOption>;
        // 界面：字体 - UI/Font
        loadFontFaceAsync(options?: LoadFontFaceOption): Wx.PromisifiedCallbackResult<LoadFontFaceOption>;
        // 界面：下拉刷新 - UI/PullDown
        startPullDownRefreshAsync(options?: StartPullDownRefreshOption): Wx.PromisifiedCallbackResult<StartPullDownRefreshOption>;
        stopPullDownRefreshAsync(options?: StopPullDownRefreshOption): Wx.PromisifiedCallbackResult<StopPullDownRefreshOption>;
        // 界面：滚动 - UI/Scroll
        pageScrollToAsync(options?: PageScrollToOption): Wx.PromisifiedCallbackResult<PageScrollToOption>;
        // 界面：置顶 - UI/TopBar
        setTopBarTextAsync(options?: SetTopBarTextOption): Wx.PromisifiedCallbackResult<SetTopBarTextOption>;
        // 界面：窗口 - UI/Window
        setWindowSizeAsync(options?: SetWindowSizeOption): Wx.PromisifiedCallbackResult<SetWindowSizeOption>;
        // 界面：键盘 - UI/Keyword
        hideKeyboardAsync(options?: HideKeyboardOption): Wx.PromisifiedCallbackResult<HideKeyboardOption>;
        getSelectedTextRange(options?: GetSelectedTextRangeOption): Wx.PromisifiedCallbackResult<GetSelectedTextRangeOption>;

        // 网络：发起请求 - Network/Request
        requestAsync(options?: RequestOption): Wx.PromisifiedCallbackResult<RequestOption>;
        requestAsync<T>(options?: RequestOption<T>): Promise<RequestOption<T>>;
        // 网络：下载 - Network/Download
        downloadFileAsync(options?: DownloadFileOption): Wx.PromisifiedCallbackResult<DownloadFileOption>;
        // 网络：上传 - Network/Upload
        uploadFileAsync(options?: UploadFileOption): Wx.PromisifiedCallbackResult<UploadFileOption>;
        // 网络：WebSocket - Network/WebSocket
        sendSocketMessageAsync(options?: SendSocketMessageOption): Wx.PromisifiedCallbackResult<SendSocketMessageOption>;
        connectSocketAsync(options?: ConnectSocketOption): Wx.PromisifiedCallbackResult<ConnectSocketOption>;
        closeSocketAsync(options?: CloseSocketOption): Wx.PromisifiedCallbackResult<CloseSocketOption>;
        // 网络：mDNS - Network/mDNS
        stopLocalServiceDiscoveryAsync(options?: StopLocalServiceDiscoveryOption): Wx.PromisifiedCallbackResult<StopLocalServiceDiscoveryOption>;
        startLocalServiceDiscoveryAsync(options?: StartLocalServiceDiscoveryOption): Wx.PromisifiedCallbackResult<StartLocalServiceDiscoveryOption>;

        // 数据缓存：存储 - Storage/Storage
        setStorageAsync(options?: SetStorageOption): Wx.PromisifiedCallbackResult<SetStorageOption>;
        removeStorageAsync(options?: RemoveStorageOption): Wx.PromisifiedCallbackResult<RemoveStorageOption>;
        getStorageInfoAsync(options?: GetStorageInfoOption): Wx.PromisifiedCallbackResult<GetStorageInfoOption>;
        getStorageAsync(options?: GetStorageOption): Wx.PromisifiedCallbackResult<GetStorageOption>;
        getStorageAsync<T>(options?: GetStorageOption<T>): Promise<GetStorageOption<T>>;
        clearStorageAsync(options?: ClearStorageOption): Wx.PromisifiedCallbackResult<ClearStorageOption>;
        // 数据缓存：周期性更新 - Storage/BackgroundFetch
        setBackgroundFetchTokenAsync(options?: SetBackgroundFetchTokenOption): Wx.PromisifiedCallbackResult<SetBackgroundFetchTokenOption>;
        getBackgroundFetchTokenAsync(options?: GetBackgroundFetchTokenOption): Wx.PromisifiedCallbackResult<GetBackgroundFetchTokenOption>;
        getBackgroundFetchDataAsync(options?: GetBackgroundFetchDataOption): Wx.PromisifiedCallbackResult<GetBackgroundFetchDataOption>;

        // 媒体：图片 - Media/Image
        saveImageToPhotosAlbumAsync(options?: SaveImageToPhotosAlbumOption): Wx.PromisifiedCallbackResult<SaveImageToPhotosAlbumOption>;
        previewMediaAsync(options?: PreviewMediaOption): Wx.PromisifiedCallbackResult<PreviewMediaOption>;
        previewImageAsync(options?: PreviewImageOption): Wx.PromisifiedCallbackResult<PreviewImageOption>;
        getImageInfoAsync(options?: GetImageInfoOption): Wx.PromisifiedCallbackResult<GetImageInfoOption>;
        compressImageAsync(options?: CompressImageOption): Wx.PromisifiedCallbackResult<CompressImageOption>;
        chooseMessageFileAsync(options?: ChooseMessageFileOption): Wx.PromisifiedCallbackResult<ChooseMessageFileOption>;
        chooseImageAsync(options?: ChooseImageOption): Wx.PromisifiedCallbackResult<ChooseImageOption>;
        // 媒体：视频 - Media/Video
        saveVideoToPhotosAlbumAsync(options?: SaveVideoToPhotosAlbumOption): Wx.PromisifiedCallbackResult<SaveVideoToPhotosAlbumOption>;
        openVideoEditorAsync(options?: OpenVideoEditorOption): Wx.PromisifiedCallbackResult<OpenVideoEditorOption>;
        getVideoInfoAsync(options?: GetVideoInfoOption): Wx.PromisifiedCallbackResult<GetVideoInfoOption>;
        compressVideoAsync(options?: CompressVideoOption): Wx.PromisifiedCallbackResult<CompressVideoOption>;
        chooseVideoAsync(options?: ChooseVideoOption): Wx.PromisifiedCallbackResult<ChooseVideoOption>;
        chooseMediaAsync(options?: ChooseMediaOption): Wx.PromisifiedCallbackResult<ChooseMediaOption>;
        // 媒体：音频 - Media/Audio&Voice
        stopVoiceAsync(options?: StopVoiceOption): Wx.PromisifiedCallbackResult<StopVoiceOption>;
        setInnerAudioOptionAsync(options?: SetInnerAudioOption): Wx.PromisifiedCallbackResult<SetInnerAudioOption>;
        playVoiceAsync(options?: PlayVoiceOption): Wx.PromisifiedCallbackResult<PlayVoiceOption>;
        pauseVoiceAsync(options?: PauseVoiceOption): Wx.PromisifiedCallbackResult<PauseVoiceOption>;
        getAvailableAudioSourcesAsync(options?: GetAvailableAudioSourcesOption): Wx.PromisifiedCallbackResult<GetAvailableAudioSourcesOption>;
        // 媒体：背景音频 - Media/BackgroundAudio
        stopBackgroundAudioAsync(options?: StopBackgroundAudioOption): Wx.PromisifiedCallbackResult<StopBackgroundAudioOption>;
        seekBackgroundAudioAsync(options?: SeekBackgroundAudioOption): Wx.PromisifiedCallbackResult<SeekBackgroundAudioOption>;
        playBackgroundAudioAsync(options?: PlayBackgroundAudioOption): Wx.PromisifiedCallbackResult<PlayBackgroundAudioOption>;
        pauseBackgroundAudioAsync(options?: PauseBackgroundAudioOption): Wx.PromisifiedCallbackResult<PauseBackgroundAudioOption>;
        getBackgroundAudioPlayerStateAsync(options?: GetBackgroundAudioPlayerStateOption): Wx.PromisifiedCallbackResult<GetBackgroundAudioPlayerStateOption>;
        // 媒体：录音 - Media/Record
        stopRecordAsync(options?: WxStopRecordOption): Wx.PromisifiedCallbackResult<WxStopRecordOption>;
        startRecordAsync(options?: WxStartRecordOption): Wx.PromisifiedCallbackResult<WxStartRecordOption>;
        // 媒体：实时语音 - Media/VoIP
        updateVoIPChatMuteConfigAsync(options?: UpdateVoIPChatMuteConfigOption): Wx.PromisifiedCallbackResult<UpdateVoIPChatMuteConfigOption>;
        subscribeVoIPVideoMembersAsync(options?: SubscribeVoIPVideoMembersOption): Wx.PromisifiedCallbackResult<SubscribeVoIPVideoMembersOption>;
        joinVoIPChatAsync(options?: JoinVoIPChatOption): Wx.PromisifiedCallbackResult<JoinVoIPChatOption>;
        exitVoIPChatAsync(options?: ExitVoIPChatOption): Wx.PromisifiedCallbackResult<ExitVoIPChatOption>;

        // 位置 - Location
        stopLocationUpdateAsync(options?: StopLocationUpdateOption): Wx.PromisifiedCallbackResult<StopLocationUpdateOption>;
        startLocationUpdateBackgroundAsync(options?: StartLocationUpdateBackgroundOption): Wx.PromisifiedCallbackResult<StartLocationUpdateBackgroundOption>;
        startLocationUpdateAsync(options?: StartLocationUpdateOption): Wx.PromisifiedCallbackResult<StartLocationUpdateOption>;
        openLocationAsync(options?: OpenLocationOption): Wx.PromisifiedCallbackResult<OpenLocationOption>;
        getLocationAsync(options?: GetLocationOption): Wx.PromisifiedCallbackResult<GetLocationOption>;
        choosePoiAsync(options?: ChoosePoiOption): Wx.PromisifiedCallbackResult<ChoosePoiOption>;
        chooseLocationAsync(options?: ChooseLocationOption): Wx.PromisifiedCallbackResult<ChooseLocationOption>;

        // 转发 - Share
        updateShareMenuAsync(options?: UpdateShareMenuOption): Wx.PromisifiedCallbackResult<UpdateShareMenuOption>;
        showShareMenuAsync(options?: ShowShareMenuOption): Wx.PromisifiedCallbackResult<ShowShareMenuOption>;
        hideShareMenuAsync(options?: HideShareMenuOption): Wx.PromisifiedCallbackResult<HideShareMenuOption>;
        getShareInfoAsync(options?: GetShareInfoOption): Wx.PromisifiedCallbackResult<GetShareInfoOption>;
        authPrivateMessageAsync(options: AuthPrivateMessageOption): Wx.PromisifiedCallbackResult<AuthPrivateMessageOption>;

        // 画布 - Canvas
        canvasToTempFilePathAsync(
            options?: CanvasToTempFilePathOption,
            component?: Component.TrivialInstance | Page.TrivialInstance
        ): Promise<CanvasToTempFilePathOption>;
        canvasPutImageDataAsync(options?: CanvasPutImageDataOption): Wx.PromisifiedCallbackResult<CanvasPutImageDataOption>;
        canvasGetImageDataAync(options?: CanvasGetImageDataOption): Wx.PromisifiedCallbackResult<CanvasGetImageDataOption>;

        // 文件 File
        saveFileToDiskAsync(options?: SaveFileToDiskOption): Wx.PromisifiedCallbackResult<SaveFileToDiskOption>;
        saveFileAsync(options?: WxSaveFileOption): Wx.PromisifiedCallbackResult<WxSaveFileOption>;
        removeSavedFileAsync(options?: WxRemoveSavedFileOption): Wx.PromisifiedCallbackResult<WxRemoveSavedFileOption>;
        openDocumentAsync(options?: OpenDocumentOption): Wx.PromisifiedCallbackResult<OpenDocumentOption>;
        getSavedFileListAsync(options?: WxGetSavedFileListOption): Wx.PromisifiedCallbackResult<WxGetSavedFileListOption>;
        getSavedFileInfoAsync(options?: GetSavedFileInfoOption): Wx.PromisifiedCallbackResult<GetSavedFileInfoOption>;
        getFileInfoAsync(options?: WxGetFileInfoOption): Wx.PromisifiedCallbackResult<WxGetFileInfoOption>;

        // 开放接口：登录 - OpenAPI/Login
        loginAsync(options?: LoginOption): Wx.PromisifiedCallbackResult<LoginOption>;
        checkSessionAsync(options?: CheckSessionOption): Wx.PromisifiedCallbackResult<CheckSessionOption>;
        // 开放接口：小程序跳转 - OpenAPI/MiniProgramNavigate
        navigateToMiniProgramAsync(options?: NavigateToMiniProgramOption): Wx.PromisifiedCallbackResult<NavigateToMiniProgramOption>;
        navigateBackMiniProgramAsync(options?: NavigateBackMiniProgramOption): Wx.PromisifiedCallbackResult<NavigateBackMiniProgramOption>;
        // 开放接口：用户信息 - OpenAPI/UserInfo
        getUserProfileAsync(options?: GetUserProfileOption): Wx.PromisifiedCallbackResult<GetUserProfileOption>;
        getUserInfoAsync(options?: GetUserInfoOption): Wx.PromisifiedCallbackResult<GetUserInfoOption>;
        // 开放接口：支付 - OpenAPI/Payment
        requestPaymentAsync(options?: RequestPaymentOption): Wx.PromisifiedCallbackResult<RequestPaymentOption>;
        // 开放接口：授权 - OpenAPI/Authorization
        authorizeAsync(options?: AuthorizeOption): Wx.PromisifiedCallbackResult<AuthorizeOption>;
        // 开放接口：设置 - OpenAPI/Setting
        openSettingAsync(options?: OpenSettingOption): Wx.PromisifiedCallbackResult<OpenSettingOption>;
        getSettingAsync(options?: GetSettingOption): Wx.PromisifiedCallbackResult<GetSettingOption>;
        // 开放接口：收货地址 - OpenAPI/Address
        chooseAddressAsync(options?: ChooseAddressOption): Wx.PromisifiedCallbackResult<ChooseAddressOption>;
        // 开放接口：卡券 - OpenAPI/Card
        openCardAsync(options?: OpenCardOption): Wx.PromisifiedCallbackResult<OpenCardOption>;
        addCardAsync(options?: AddCardOption): Wx.PromisifiedCallbackResult<AddCardOption>;
        // 开放接口：发票 - OpenAPI/Invoice
        chooseInvoiceTitleAsync(options?: ChooseInvoiceTitleOption): Wx.PromisifiedCallbackResult<ChooseInvoiceTitleOption>;
        chooseInvoiceAsync(options?: ChooseInvoiceOption): Wx.PromisifiedCallbackResult<ChooseInvoiceOption>;
        // 开放接口：生物认证 - OpenAPI/SoterAuthentication
        startSoterAuthenticationAsync(options?: StartSoterAuthenticationOption): Wx.PromisifiedCallbackResult<StartSoterAuthenticationOption>;
        checkIsSupportSoterAuthenticationAsync(options?: CheckIsSupportSoterAuthenticationOption): Promise<CheckIsSupportSoterAuthenticationOption>;
        checkIsSoterEnrolledInDeviceAsync(options?: CheckIsSoterEnrolledInDeviceOption): Wx.PromisifiedCallbackResult<CheckIsSoterEnrolledInDeviceOption>;
        // 开放接口：微信运动 - OpenAPI/RunData
        shareToWeRunAsync(options?: ShareToWeRunOption): Wx.PromisifiedCallbackResult<ShareToWeRunOption>;
        getWeRunDataAsync(options?: GetWeRunDataOption): Wx.PromisifiedCallbackResult<GetWeRunDataOption>;
        // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
        requestSubscribeMessageAsync(options?: RequestSubscribeMessageOption): Wx.PromisifiedCallbackResult<RequestSubscribeMessageOption>;
        // 开放接口：微信红包 - OpenAPI/RedPackage
        showRedPackgeAsync(options?: ShowRedPackageOption): Wx.PromisifiedCallbackResult<ShowRedPackageOption>;
        // 开发接口：群工具 - OpenAPI/Group
        getGroupEnterInfoAsync(options?: GetGroupEnterInfoOption): Wx.PromisifiedCallbackResult<GetGroupEnterInfoOption>;

        // 设备：iBeacon - Device/iBeacon
        stopBeaconDiscoveryAsync(options?: StopBeaconDiscoveryOption): Wx.PromisifiedCallbackResult<StopBeaconDiscoveryOption>;
        startBeaconDiscoveryAsync(options?: StartBeaconDiscoveryOption): Wx.PromisifiedCallbackResult<StartBeaconDiscoveryOption>;
        getBeaconsAsync(options?: GetBeaconsOption): Wx.PromisifiedCallbackResult<GetBeaconsOption>;
        // 设备：WiFi - Device/WiFi
        stopWifiAsync(options?: StopWifiOption): Wx.PromisifiedCallbackResult<StopWifiOption>;
        startWifiAsync(options?: StartWifiOption): Wx.PromisifiedCallbackResult<StartWifiOption>;
        setWifiListAsync(options?: SetWifiListOption): Wx.PromisifiedCallbackResult<SetWifiListOption>;
        getWifiListAsync(options?: GetWifiListOption): Wx.PromisifiedCallbackResult<GetWifiListOption>;
        getConnectedWifiAsync(options?: GetConnectedWifiOption): Wx.PromisifiedCallbackResult<GetConnectedWifiOption>;
        connectWifiAsync(options?: ConnectWifiOption): Wx.PromisifiedCallbackResult<ConnectWifiOption>;
        // 设备：低功耗蓝牙 - Device/BLE
        setBLEMTUAsync(options?: SetBLEMTUOption): Wx.PromisifiedCallbackResult<SetBLEMTUOption>;
        makeBluetoothPairAsync(options?: MakeBluetoothPairOption): Wx.PromisifiedCallbackResult<MakeBluetoothPairOption>;
        writeBLECharacteristicValueAsync(options?: WriteBLECharacteristicValueOption): Wx.PromisifiedCallbackResult<WriteBLECharacteristicValueOption>;
        readBLECharacteristicValueAsync(options?: ReadBLECharacteristicValueOption): Wx.PromisifiedCallbackResult<ReadBLECharacteristicValueOption>;
        notifyBLECharacteristicValueChangeAsync(
            options?: NotifyBLECharacteristicValueChangeOption
        ): Wx.PromisifiedCallbackResult<NotifyBLECharacteristicValueChangeOption>;
        getBLEDeviceServicesAsync(options?: GetBLEDeviceServicesOption): Wx.PromisifiedCallbackResult<GetBLEDeviceServicesOption>;
        getBLEDeviceCharacteristicsAsync(options?: GetBLEDeviceCharacteristicsOption): Wx.PromisifiedCallbackResult<GetBLEDeviceCharacteristicsOption>;
        createBLEConnectionAsync(options?: CreateBLEConnectionOption): Wx.PromisifiedCallbackResult<CreateBLEConnectionOption>;
        closeBLEConnectionAsync(options?: CloseBLEConnectionOption): Wx.PromisifiedCallbackResult<CloseBLEConnectionOption>;
        // 设备：联系人 - Device/Contact
        chooseContactAsync(options?: ChooseContactOption): Wx.PromisifiedCallbackResult<ChooseContactOption>;
        addPhoneContactAsync(options?: AddPhoneContactOption): Wx.PromisifiedCallbackResult<AddPhoneContactOption>;
        // 设备：无障碍 - Device/Accessibility
        checkIsOpenAccessibilityAsync(options?: CheckIsOpenAccessibilityOption): Wx.PromisifiedCallbackResult<CheckIsOpenAccessibilityOption>;
        // 设备：蓝牙 - Device/Bluetooth
        stopBluetoothDevicesDiscoveryAsync(options?: StopBluetoothDevicesDiscoveryOption): Wx.PromisifiedCallbackResult<StopBluetoothDevicesDiscoveryOption>;
        startBluetoothDevicesDiscoveryAsync(options?: StartBluetoothDevicesDiscoveryOption): Wx.PromisifiedCallbackResult<StartBluetoothDevicesDiscoveryOption>;
        openBluetoothAdapterAsync(options?: OpenBluetoothAdapterOption): Wx.PromisifiedCallbackResult<OpenBluetoothAdapterOption>;
        getConnectedBluetoothDevicesAsync(options?: GetConnectedBluetoothDevicesOption): Wx.PromisifiedCallbackResult<GetConnectedBluetoothDevicesOption>;
        getBluetoothDevicesAsync(options?: GetBluetoothDevicesOption): Wx.PromisifiedCallbackResult<GetBluetoothDevicesOption>;
        getBluetoothAdapterStateAsync(options?: GetBluetoothAdapterStateOption): Wx.PromisifiedCallbackResult<GetBluetoothAdapterStateOption>;
        closeBluetoothAdapterAsync(options?: CloseBluetoothAdapterOption): Wx.PromisifiedCallbackResult<CloseBluetoothAdapterOption>;
        // 设备：电量 - Device/Battery
        getBatteryInfoAsync(options?: GetBatteryInfoOption): Wx.PromisifiedCallbackResult<GetBatteryInfoOption>;
        // 设备：剪贴板 - Device/Clipboard
        setClipboardDataAsync(options?: SetClipboardDataOption): Wx.PromisifiedCallbackResult<SetClipboardDataOption>;
        getClipboardDataAsync(options?: GetClipboardDataOption): Wx.PromisifiedCallbackResult<GetClipboardDataOption>;
        // 设备：NFC - Device/NFC
        stopHCEAsync(options?: StopHCEOption): Wx.PromisifiedCallbackResult<StopHCEOption>;
        startHCEAsync(options?: StartHCEOption): Wx.PromisifiedCallbackResult<StartHCEOption>;
        sendHCEMessageAsync(options?: SendHCEMessageOption): Wx.PromisifiedCallbackResult<SendHCEMessageOption>;
        getHCEStateAsync(options?: GetHCEStateOption): Wx.PromisifiedCallbackResult<GetHCEStateOption>;
        // 设备：网络 - Device/Newwork
        getNetworkTypeAsync(options?: GetNetworkTypeOption): Wx.PromisifiedCallbackResult<GetNetworkTypeOption>;
        // 设备：屏幕 - Device/Screen
        setScreenBrightnessAsync(options?: SetScreenBrightnessOption): Wx.PromisifiedCallbackResult<SetScreenBrightnessOption>;
        setKeepScreenOnAsync(options?: SetKeepScreenOnOption): Wx.PromisifiedCallbackResult<SetKeepScreenOnOption>;
        getScreenBrightnessAsync(options?: GetScreenBrightnessOption): Wx.PromisifiedCallbackResult<GetScreenBrightnessOption>;
        // 设备：电话 - Device/Call
        makePhoneCallAsync(options?: MakePhoneCallOption): Wx.PromisifiedCallbackResult<MakePhoneCallOption>;
        // 设备：加速计 - Device/Accelerometer
        stopAccelerometerAsync(options?: StopAccelerometerOption): Wx.PromisifiedCallbackResult<StopAccelerometerOption>;
        startAccelerometerAsync(options?: StartAccelerometerOption): Wx.PromisifiedCallbackResult<StartAccelerometerOption>;
        // 设备：罗盘 - Device/Compass
        stopCompassAsync(options?: StopCompassOption): Wx.PromisifiedCallbackResult<StopCompassOption>;
        startCompassAsync(options?: StartCompassOption): Wx.PromisifiedCallbackResult<StartCompassOption>;
        // 设备：设备方向 - Device/Motion
        stopDeviceMotionListeningAsync(options?: StopDeviceMotionListeningOption): Wx.PromisifiedCallbackResult<StopDeviceMotionListeningOption>;
        startDeviceMotionListeningAsync(options?: StartDeviceMotionListeningOption): Wx.PromisifiedCallbackResult<StartDeviceMotionListeningOption>;
        // 设备：陀螺仪 - Device/Gyroscope
        stopGyroscopeAsync(options?: StopGyroscopeOption): Wx.PromisifiedCallbackResult<StopGyroscopeOption>;
        startGyroscopeAsync(options?: StartGyroscopeOption): Wx.PromisifiedCallbackResult<StartGyroscopeOption>;
        // 设备：扫码 - Device/ScanCode
        scanCodeAsync(options?: ScanCodeOption): Wx.PromisifiedCallbackResult<ScanCodeOption>;
        // 设备：振动 - Device/Vibration
        vibrateShortAsync(options?: VibrateShortOption): Wx.PromisifiedCallbackResult<VibrateShortOption>;
        vibrateLongAsync(options?: VibrateLongOption): Wx.PromisifiedCallbackResult<VibrateLongOption>;

        // 第三方平台 - Ext
        getExtConfigAsync(options?: GetExtConfigOption): Wx.PromisifiedCallbackResult<GetExtConfigOption>;
    }
}

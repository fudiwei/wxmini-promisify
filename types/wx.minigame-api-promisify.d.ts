declare namespace WechatMinigame {
    namespace WxAsync {
        type CallbackOption = {
            success?: (...args: any) => any;
            fail?: (...args: any) => any;
            complete?: (...args: any) => any;
        };
        type PromisifiedOption<T extends CallbackOption> = Omit<T, keyof CallbackOption>;
        type PromisifiedResult<T extends CallbackOption> = Promise<Parameters<NonNullable<T["success"]>>[0]>;
    }

    interface WxAsync {
        // 基础：系统 - Base/System
        openSystemBluetoothSettingAsync(option?: WxAsync.PromisifiedOption<OpenSystemBluetoothSettingOption>): WxAsync.PromisifiedResult<OpenSystemBluetoothSettingOption>;
        openAppAuthorizeSettingAsync(option?: WxAsync.PromisifiedOption<OpenAppAuthorizeSettingOption>): WxAsync.PromisifiedResult<OpenAppAuthorizeSettingOption>;
        getSystemInfoAsyncAsync(option?: WxAsync.PromisifiedOption<GetSystemInfoAsyncOption>): WxAsync.PromisifiedResult<GetSystemInfoAsyncOption>;
        getSystemInfoAsync(option?: WxAsync.PromisifiedOption<GetSystemInfoOption>): WxAsync.PromisifiedResult<GetSystemInfoOption>;
        // 基础：更新 - Base/Update
        updateWeChatAppAsync(option?: WxAsync.PromisifiedOption<UpdateWeChatAppOption>): WxAsync.PromisifiedResult<UpdateWeChatAppOption>;
        // 基础：分包加载 - Base/Subpackage
        loadSubpackageAsync(
            option?: WxAsync.PromisifiedOption<LoadSubpackageOption> & {
                onProgressUpdate?: LoadSubpackageTaskOnProgressUpdateCallback;
            }
        ): WxAsync.PromisifiedResult<LoadSubpackageOption>;
        preDownloadSubpackageAsync(
            option?: WxAsync.PromisifiedOption<PreDownloadSubpackageOption> & {
                onProgressUpdate?: LoadSubpackageTaskOnProgressUpdateCallback;
            }
        ): WxAsync.PromisifiedResult<PreDownloadSubpackageOption>;
        // 基础：调试 - Base/Debug
        setEnableDebugAsync(option?: WxAsync.PromisifiedOption<SetEnableDebugOption>): WxAsync.PromisifiedResult<SetEnableDebugOption>;

        // 跳转 - Navigate
        restartMiniProgramAsync(option?: WxAsync.PromisifiedOption<RestartMiniProgramOption>): WxAsync.PromisifiedResult<RestartMiniProgramOption>;
        navigateToMiniProgramAsync(option?: WxAsync.PromisifiedOption<NavigateToMiniProgramOption>): WxAsync.PromisifiedResult<NavigateToMiniProgramOption>;
        exitMiniProgramAsync(option?: WxAsync.PromisifiedOption<ExitMiniProgramOption>): WxAsync.PromisifiedResult<ExitMiniProgramOption>;

        // 转发 - Share
        updateShareMenuAsync(option?: WxAsync.PromisifiedOption<UpdateShareMenuOption>): WxAsync.PromisifiedResult<UpdateShareMenuOption>;
        showShareMenuAsync(option?: WxAsync.PromisifiedOption<ShowShareMenuOption>): WxAsync.PromisifiedResult<ShowShareMenuOption>;
        showShareImageMenuAsync(option?: WxAsync.PromisifiedOption<ShowShareImageMenuOption>): WxAsync.PromisifiedResult<ShowShareImageMenuOption>;
        hideShareMenuAsync(option?: WxAsync.PromisifiedOption<HideShareMenuOption>): WxAsync.PromisifiedResult<HideShareMenuOption>;
        getShareInfoAsync(option?: WxAsync.PromisifiedOption<GetShareInfoOption>): WxAsync.PromisifiedResult<GetShareInfoOption>;
        authPrivateMessageAsync(option?: WxAsync.PromisifiedOption<AuthPrivateMessageOption>): WxAsync.PromisifiedResult<AuthPrivateMessageOption>;
        startHandoffAsync(option?: WxAsync.PromisifiedOption<StartHandoffOption>): WxAsync.PromisifiedResult<StartHandoffOption>;
        checkHandoffEnabledAsync(option?: WxAsync.PromisifiedOption<CheckHandoffEnabledOption>): WxAsync.PromisifiedResult<CheckHandoffEnabledOption>;

        // 界面：交互 - UI/Interaction
        showToastAsync(option?: WxAsync.PromisifiedOption<ShowToastOption>): WxAsync.PromisifiedResult<ShowToastOption>;
        showModalAsync(option?: WxAsync.PromisifiedOption<ShowModalOption>): WxAsync.PromisifiedResult<ShowModalOption>;
        showLoadingAsync(option?: WxAsync.PromisifiedOption<ShowLoadingOption>): WxAsync.PromisifiedResult<ShowLoadingOption>;
        showActionSheetAsync(option?: WxAsync.PromisifiedOption<ShowActionSheetOption>): WxAsync.PromisifiedResult<ShowActionSheetOption>;
        hideToastAsync(option?: WxAsync.PromisifiedOption<HideToastOption>): WxAsync.PromisifiedResult<HideToastOption>;
        hideLoadingAsync(option?: WxAsync.PromisifiedOption<HideLoadingOption>): WxAsync.PromisifiedResult<HideLoadingOption>;
        // 界面：菜单 - UI/Menu
        setMenuStyleAsync(option?: WxAsync.PromisifiedOption<SetMenuStyleOption>): WxAsync.PromisifiedResult<SetMenuStyleOption>;
        // 界面：状态栏 - UI/StatusBar
        setStatusBarStyleAsync(option?: WxAsync.PromisifiedOption<SetStatusBarStyleOption>): WxAsync.PromisifiedResult<SetStatusBarStyleOption>;
        // 界面：窗口 - UI/Window
        /**
         * @deprecated
         */
        setWindowSizeAsync(option?: WxAsync.PromisifiedOption<SetWindowSizeOption>): WxAsync.PromisifiedResult<SetWindowSizeOption>;

        // 网络：发起请求 - Network/Request
        requestAsync(
            option?: WxAsync.PromisifiedOption<RequestOption> & {
                onHeadersReceived?: OnHeadersReceivedCallback;
                onChunkReceived?: OnChunkReceivedCallback;
            }
        ): WxAsync.PromisifiedResult<RequestOption>;
        requestAsync<T>(
            option?: WxAsync.PromisifiedOption<RequestOption<T>> & {
                onHeadersReceived?: OnHeadersReceivedCallback;
                onChunkReceived?: OnChunkReceivedCallback;
            }
        ): Promise<RequestOption<T>>;
        // 网络：下载 - Network/Download
        downloadFileAsync(
            option?: WxAsync.PromisifiedOption<DownloadFileOption> & {
                onHeadersReceived?: OnHeadersReceivedCallback;
                onProgressUpdate?: DownloadTaskOnProgressUpdateCallback;
            }
        ): WxAsync.PromisifiedResult<DownloadFileOption>;
        // 网络：上传 - Network/Upload
        uploadFileAsync(
            option?: WxAsync.PromisifiedOption<UploadFileOption> & {
                onHeadersReceived?: OnHeadersReceivedCallback;
                onProgressUpdate?: DownloadTaskOnProgressUpdateCallback;
            }
        ): WxAsync.PromisifiedResult<UploadFileOption>;
        // 网络：WebSocket - Network/WebSocket
        sendSocketMessageAsync(option?: WxAsync.PromisifiedOption<SendSocketMessageOption>): WxAsync.PromisifiedResult<SendSocketMessageOption>;
        connectSocketAsync(
            option?: WxAsync.PromisifiedOption<ConnectSocketOption> & {
                onClose?: OnSocketCloseCallback;
                onError?: OnSocketErrorCallback;
                onMessage?: OnSocketMessageCallback;
                onOpen?: OnSocketOpenCallback;
            }
        ): WxAsync.PromisifiedResult<ConnectSocketOption>;
        closeSocketAsync(option?: WxAsync.PromisifiedOption<CloseSocketOption>): WxAsync.PromisifiedResult<CloseSocketOption>;

        // 虚拟支付 - MidasPayment
        requestMidasPaymentAsync(option?: WxAsync.PromisifiedOption<RequestMidasPaymentOption>): WxAsync.PromisifiedResult<RequestMidasPaymentOption>;
        requestMidasFriendPaymentAsync(option?: WxAsync.PromisifiedOption<RequestMidasFriendPaymentOption>): WxAsync.PromisifiedResult<RequestMidasFriendPaymentOption>;

        // 数据缓存：存储 - Storage/Storage
        setStorageAsync(option?: WxAsync.PromisifiedOption<SetStorageOption>): WxAsync.PromisifiedResult<SetStorageOption>;
        removeStorageAsync(option?: WxAsync.PromisifiedOption<RemoveStorageOption>): WxAsync.PromisifiedResult<RemoveStorageOption>;
        getStorageInfoAsync(option?: WxAsync.PromisifiedOption<GetStorageInfoOption>): WxAsync.PromisifiedResult<GetStorageInfoOption>;
        getStorageAsync(option?: WxAsync.PromisifiedOption<GetStorageOption>): WxAsync.PromisifiedResult<GetStorageOption>;
        getStorageAsync<T>(option?: WxAsync.PromisifiedOption<GetStorageOption<T>>): Promise<GetStorageOption<T>>;
        clearStorageAsync(option?: WxAsync.PromisifiedOption<ClearStorageOption>): WxAsync.PromisifiedResult<ClearStorageOption>;
        batchSetStorageAsync(option?: WxAsync.PromisifiedOption<BatchSetStorageOption>): WxAsync.PromisifiedResult<BatchSetStorageOption>;
        batchGetStorageAsync(option?: WxAsync.PromisifiedOption<BatchGetStorageOption>): WxAsync.PromisifiedResult<BatchGetStorageOption>;

        // 数据分析 - DataAnalysis
        reportSceneAsync(option?: WxAsync.PromisifiedOption<ReportSceneOption>): WxAsync.PromisifiedResult<ReportSceneOption>;

        // 字体 - Font
        getTextLineHeightAsync(option?: WxAsync.PromisifiedOption<GetTextLineHeightOption>): WxAsync.PromisifiedResult<GetTextLineHeightOption>;

        // 媒体：图片 - Media/Image
        saveImageToPhotosAlbumAsync(option?: WxAsync.PromisifiedOption<SaveImageToPhotosAlbumOption>): WxAsync.PromisifiedResult<SaveImageToPhotosAlbumOption>;
        previewMediaAsync(option?: WxAsync.PromisifiedOption<PreviewMediaOption>): WxAsync.PromisifiedResult<PreviewMediaOption>;
        previewImageAsync(option?: WxAsync.PromisifiedOption<PreviewImageOption>): WxAsync.PromisifiedResult<PreviewImageOption>;
        chooseMessageFileAsync(option?: WxAsync.PromisifiedOption<ChooseMessageFileOption>): WxAsync.PromisifiedResult<ChooseMessageFileOption>;
        chooseImageAsync(option?: WxAsync.PromisifiedOption<ChooseImageOption>): WxAsync.PromisifiedResult<ChooseImageOption>;
        // 媒体：视频 - Media/Video
        chooseMediaAsync(option?: WxAsync.PromisifiedOption<ChooseMediaOption>): WxAsync.PromisifiedResult<ChooseMediaOption>;
        // 媒体：音频 - Media/Audio&Voice
        setInnerAudioOptionAsync(option?: WxAsync.PromisifiedOption<SetInnerAudioOption>): WxAsync.PromisifiedResult<SetInnerAudioOption>;
        getAvailableAudioSourcesAsync(option?: WxAsync.PromisifiedOption<GetAvailableAudioSourcesOption>): WxAsync.PromisifiedResult<GetAvailableAudioSourcesOption>;
        // 媒体：实时语音 - Media/VoIP
        updateVoIPChatMuteConfigAsync(option?: WxAsync.PromisifiedOption<UpdateVoIPChatMuteConfigOption>): WxAsync.PromisifiedResult<UpdateVoIPChatMuteConfigOption>;
        joinVoIPChatAsync(option?: WxAsync.PromisifiedOption<JoinVoIPChatOption>): WxAsync.PromisifiedResult<JoinVoIPChatOption>;
        exitVoIPChatAsync(option?: WxAsync.PromisifiedOption<ExitVoIPChatOption>): WxAsync.PromisifiedResult<ExitVoIPChatOption>;

        // 位置 - Location
        getLocationAsync(option?: WxAsync.PromisifiedOption<GetLocationOption>): WxAsync.PromisifiedResult<GetLocationOption>;
        getFuzzyLocationAsync(option?: WxAsync.PromisifiedOption<GetFuzzyLocationOption>): WxAsync.PromisifiedResult<GetFuzzyLocationOption>;

        // 文件 File
        saveFileToDiskAsync(option?: WxAsync.PromisifiedOption<SaveFileToDiskOption>): WxAsync.PromisifiedResult<SaveFileToDiskOption>;
        getFileInfoAsync(option?: WxAsync.PromisifiedOption<WxGetFileInfoOption>): WxAsync.PromisifiedResult<WxGetFileInfoOption>;

        // 开放接口：登录 - OpenAPI/Login
        loginAsync(option?: WxAsync.PromisifiedOption<LoginOption>): WxAsync.PromisifiedResult<LoginOption>;
        checkSessionAsync(option?: WxAsync.PromisifiedOption<CheckSessionOption>): WxAsync.PromisifiedResult<CheckSessionOption>;
        // 开放接口：用户信息 - OpenAPI/UserInfo
        getUserInfoAsync(option?: WxAsync.PromisifiedOption<GetUserInfoOption>): WxAsync.PromisifiedResult<GetUserInfoOption>;
        // 开放接口：授权 - OpenAPI/Authorization
        authorizeAsync(option?: WxAsync.PromisifiedOption<AuthorizeOption>): WxAsync.PromisifiedResult<AuthorizeOption>;
        // 开放接口：设置 - OpenAPI/Setting
        openSettingAsync(option?: WxAsync.PromisifiedOption<OpenSettingOption>): WxAsync.PromisifiedResult<OpenSettingOption>;
        getSettingAsync(option?: WxAsync.PromisifiedOption<GetSettingOption>): WxAsync.PromisifiedResult<GetSettingOption>;
        // 开放接口：卡券 - OpenAPI/Card
        openCardAsync(option?: WxAsync.PromisifiedOption<OpenCardOption>): WxAsync.PromisifiedResult<OpenCardOption>;
        addCardAsync(option?: WxAsync.PromisifiedOption<AddCardOption>): WxAsync.PromisifiedResult<AddCardOption>;
        // 开放接口：微信运动 - OpenAPI/RunData
        getWeRunDataAsync(option?: WxAsync.PromisifiedOption<GetWeRunDataOption>): WxAsync.PromisifiedResult<GetWeRunDataOption>;
        // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
        requestSubscribeMessageAsync(option?: WxAsync.PromisifiedOption<RequestSubscribeMessageOption>): WxAsync.PromisifiedResult<RequestSubscribeMessageOption>;
        // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
        requestSubscribeSystemMessageAsync(option?: WxAsync.PromisifiedOption<RequestSubscribeSystemMessageOption>): WxAsync.PromisifiedResult<RequestSubscribeSystemMessageOption>;
        // 开放接口：视频号 - OpenAPI/Channels
        openChannelsLiveAsync(option?: WxAsync.PromisifiedOption<OpenChannelsLiveOption>): WxAsync.PromisifiedResult<OpenChannelsLiveOption>;
        openChannelsActivityAsync(option?: WxAsync.PromisifiedOption<OpenChannelsActivityOption>): WxAsync.PromisifiedResult<OpenChannelsActivityOption>;
        getChannelsLiveNoticeInfoAsync(option?: WxAsync.PromisifiedOption<GetChannelsLiveNoticeInfoOption>): WxAsync.PromisifiedResult<GetChannelsLiveNoticeInfoOption>;
        getChannelsLiveInfoAsync(option?: WxAsync.PromisifiedOption<GetChannelsLiveInfoOption>): WxAsync.PromisifiedResult<GetChannelsLiveInfoOption>;
        // 开放接口：微信群 - OpenAPI/Group
        getGroupEnterInfoAsync(option?: WxAsync.PromisifiedOption<GetGroupEnterInfoOption>): WxAsync.PromisifiedResult<GetGroupEnterInfoOption>;
        // 开放接口：开放数据 - OpenAPI/Data
        shareMessageToFriendAsync(option?: WxAsync.PromisifiedOption<ShareMessageToFriendOption>): WxAsync.PromisifiedResult<ShareMessageToFriendOption>;
        setUserCloudStorageAsync(option?: WxAsync.PromisifiedOption<SetUserCloudStorageOption>): WxAsync.PromisifiedResult<SetUserCloudStorageOption>;
        removeUserCloudStorageAsync(option?: WxAsync.PromisifiedOption<RemoveUserCloudStorageOption>): WxAsync.PromisifiedResult<RemoveUserCloudStorageOption>;
        modifyFriendInteractiveStorageAsync(option?: WxAsync.PromisifiedOption<ModifyFriendInteractiveStorageOption>): WxAsync.PromisifiedResult<ModifyFriendInteractiveStorageOption>;
        getUserInteractiveStorageAsync(option?: WxAsync.PromisifiedOption<GetUserInteractiveStorageOption>): WxAsync.PromisifiedResult<GetUserInteractiveStorageOption>;
        getUserCloudStorageKeysAsync(option?: WxAsync.PromisifiedOption<GetUserCloudStorageKeysOption>): WxAsync.PromisifiedResult<GetUserCloudStorageKeysOption>;
        getUserCloudStorageAsync(option?: WxAsync.PromisifiedOption<GetUserCloudStorageOption>): WxAsync.PromisifiedResult<GetUserCloudStorageOption>;
        getPotentialFriendListAsync(option?: WxAsync.PromisifiedOption<GetPotentialFriendListOption>): WxAsync.PromisifiedResult<GetPotentialFriendListOption>;
        getGroupInfoAsync(option?: WxAsync.PromisifiedOption<GetGroupInfoOption>): WxAsync.PromisifiedResult<GetGroupInfoOption>;
        getGroupCloudStorageAsync(option?: WxAsync.PromisifiedOption<GetGroupCloudStorageOption>): WxAsync.PromisifiedResult<GetGroupCloudStorageOption>;
        getFriendCloudStorageAsync(option?: WxAsync.PromisifiedOption<GetFriendCloudStorageOption>): WxAsync.PromisifiedResult<GetFriendCloudStorageOption>;
        // 开放接口：防沉迷 - OpenAPI/Anti-Addiction
        checkIsUserAdvisedToRestAsync(option?: WxAsync.PromisifiedOption<CheckIsUserAdvisedToRestOption>): WxAsync.PromisifiedResult<CheckIsUserAdvisedToRestOption>;
        // 开放接口：我的小程序 - OpenAPI/MyMiniProgram
        checkIsAddedToMyMiniProgramAsync(option?: WxAsync.PromisifiedOption<CheckIsAddedToMyMiniProgramOption>): WxAsync.PromisifiedResult<CheckIsAddedToMyMiniProgramOption>;
        // 开放接口：隐私信息授权 - OpenAPI/Privacy
        requirePrivacyAuthorizeAsync(option?: WxAsync.PromisifiedOption<RequirePrivacyAuthorizeOption>): WxAsync.PromisifiedResult<RequirePrivacyAuthorizeOption>;
        openPrivacyContractAsync(option?: WxAsync.PromisifiedOption<OpenPrivacyContractOption>): WxAsync.PromisifiedResult<OpenPrivacyContractOption>;
        getPrivacySettingAsync(option?: WxAsync.PromisifiedOption<GetPrivacySettingOption>): WxAsync.PromisifiedResult<GetPrivacySettingOption>;
        // 开放接口：微信客服 - OpenAPI/ServiceChat
        openCustomerServiceChatAsync(option?: WxAsync.PromisifiedOption<OpenCustomerServiceChatOption>): WxAsync.PromisifiedResult<OpenCustomerServiceChatOption>;
        openCustomerServiceConversationAsync(option?: WxAsync.PromisifiedOption<OpenCustomerServiceConversationOption>): WxAsync.PromisifiedResult<OpenCustomerServiceConversationOption>;
        // 开放接口：游戏圈 - OpenAPI/GameClub
        getGameClubDataAsync(option?: WxAsync.PromisifiedOption<GetGameClubDataOption>): WxAsync.PromisifiedResult<GetGameClubDataOption>;

        // 设备：iBeacon - Device/iBeacon
        stopBeaconDiscoveryAsync(option?: WxAsync.PromisifiedOption<StopBeaconDiscoveryOption>): WxAsync.PromisifiedResult<StopBeaconDiscoveryOption>;
        startBeaconDiscoveryAsync(option?: WxAsync.PromisifiedOption<StartBeaconDiscoveryOption>): WxAsync.PromisifiedResult<StartBeaconDiscoveryOption>;
        getBeaconsAsync(option?: WxAsync.PromisifiedOption<GetBeaconsOption>): WxAsync.PromisifiedResult<GetBeaconsOption>;
        // 设备：低功耗蓝牙 - Device/BLE
        setBLEMTUAsync(option?: WxAsync.PromisifiedOption<SetBLEMTUOption>): WxAsync.PromisifiedResult<SetBLEMTUOption>;
        makeBluetoothPairAsync(option?: WxAsync.PromisifiedOption<MakeBluetoothPairOption>): WxAsync.PromisifiedResult<MakeBluetoothPairOption>;
        writeBLECharacteristicValueAsync(option?: WxAsync.PromisifiedOption<WriteBLECharacteristicValueOption>): WxAsync.PromisifiedResult<WriteBLECharacteristicValueOption>;
        readBLECharacteristicValueAsync(option?: WxAsync.PromisifiedOption<ReadBLECharacteristicValueOption>): WxAsync.PromisifiedResult<ReadBLECharacteristicValueOption>;
        notifyBLECharacteristicValueChangeAsync(option?: WxAsync.PromisifiedOption<NotifyBLECharacteristicValueChangeOption>): WxAsync.PromisifiedResult<NotifyBLECharacteristicValueChangeOption>;
        getBLEDeviceServicesAsync(option?: WxAsync.PromisifiedOption<GetBLEDeviceServicesOption>): WxAsync.PromisifiedResult<GetBLEDeviceServicesOption>;
        getBLEDeviceCharacteristicsAsync(option?: WxAsync.PromisifiedOption<GetBLEDeviceCharacteristicsOption>): WxAsync.PromisifiedResult<GetBLEDeviceCharacteristicsOption>;
        createBLEConnectionAsync(option?: WxAsync.PromisifiedOption<CreateBLEConnectionOption>): WxAsync.PromisifiedResult<CreateBLEConnectionOption>;
        closeBLEConnectionAsync(option?: WxAsync.PromisifiedOption<CloseBLEConnectionOption>): WxAsync.PromisifiedResult<CloseBLEConnectionOption>;
        createBLEPeripheralServerAsync(option?: WxAsync.PromisifiedOption<CreateBLEPeripheralServerOption>): WxAsync.PromisifiedResult<CreateBLEPeripheralServerOption>;
        getBLEDeviceRSSIAsync(option?: WxAsync.PromisifiedOption<GetBLEDeviceRSSIOption>): WxAsync.PromisifiedResult<GetBLEDeviceRSSIOption>;
        // 设备：蓝牙 - Device/Bluetooth
        stopBluetoothDevicesDiscoveryAsync(option?: WxAsync.PromisifiedOption<StopBluetoothDevicesDiscoveryOption>): WxAsync.PromisifiedResult<StopBluetoothDevicesDiscoveryOption>;
        startBluetoothDevicesDiscoveryAsync(option?: WxAsync.PromisifiedOption<StartBluetoothDevicesDiscoveryOption>): WxAsync.PromisifiedResult<StartBluetoothDevicesDiscoveryOption>;
        openBluetoothAdapterAsync(option?: WxAsync.PromisifiedOption<OpenBluetoothAdapterOption>): WxAsync.PromisifiedResult<OpenBluetoothAdapterOption>;
        getConnectedBluetoothDevicesAsync(option?: WxAsync.PromisifiedOption<GetConnectedBluetoothDevicesOption>): WxAsync.PromisifiedResult<GetConnectedBluetoothDevicesOption>;
        getBluetoothDevicesAsync(option?: WxAsync.PromisifiedOption<GetBluetoothDevicesOption>): WxAsync.PromisifiedResult<GetBluetoothDevicesOption>;
        getBluetoothAdapterStateAsync(option?: WxAsync.PromisifiedOption<GetBluetoothAdapterStateOption>): WxAsync.PromisifiedResult<GetBluetoothAdapterStateOption>;
        closeBluetoothAdapterAsync(option?: WxAsync.PromisifiedOption<CloseBluetoothAdapterOption>): WxAsync.PromisifiedResult<CloseBluetoothAdapterOption>;
        // 设备：电量 - Device/Battery
        getBatteryInfoAsync(option?: WxAsync.PromisifiedOption<GetBatteryInfoOption>): WxAsync.PromisifiedResult<GetBatteryInfoOption>;
        // 设备：剪贴板 - Device/Clipboard
        setClipboardDataAsync(option?: WxAsync.PromisifiedOption<SetClipboardDataOption>): WxAsync.PromisifiedResult<SetClipboardDataOption>;
        getClipboardDataAsync(option?: WxAsync.PromisifiedOption<GetClipboardDataOption>): WxAsync.PromisifiedResult<GetClipboardDataOption>;
        // 设备：网络 - Device/Newwork
        getNetworkTypeAsync(option?: WxAsync.PromisifiedOption<GetNetworkTypeOption>): WxAsync.PromisifiedResult<GetNetworkTypeOption>;
        // 设备：加密 - Device/Crypto
        getRandomValuesAsync(option?: WxAsync.PromisifiedOption<GetRandomValuesOption>): WxAsync.PromisifiedResult<GetRandomValuesOption>;
        // 设备：屏幕 - Device/Screen
        setScreenBrightnessAsync(option?: WxAsync.PromisifiedOption<SetScreenBrightnessOption>): WxAsync.PromisifiedResult<SetScreenBrightnessOption>;
        setKeepScreenOnAsync(option?: WxAsync.PromisifiedOption<SetKeepScreenOnOption>): WxAsync.PromisifiedResult<SetKeepScreenOnOption>;
        getScreenBrightnessAsync(option?: WxAsync.PromisifiedOption<GetScreenBrightnessOption>): WxAsync.PromisifiedResult<GetScreenBrightnessOption>;
        // 设备：键盘 - Device/Keyword
        showKeyboardAsync(option?: WxAsync.PromisifiedOption<ShowKeyboardOption>): WxAsync.PromisifiedResult<ShowKeyboardOption>;
        hideKeyboardAsync(option?: WxAsync.PromisifiedOption<HideKeyboardOption>): WxAsync.PromisifiedResult<HideKeyboardOption>;
        updateKeyboardAsync(option?: WxAsync.PromisifiedOption<UpdateKeyboardOption>): WxAsync.PromisifiedResult<UpdateKeyboardOption>;
        // 设备：加速计 - Device/Accelerometer
        stopAccelerometerAsync(option?: WxAsync.PromisifiedOption<StopAccelerometerOption>): WxAsync.PromisifiedResult<StopAccelerometerOption>;
        startAccelerometerAsync(option?: WxAsync.PromisifiedOption<StartAccelerometerOption>): WxAsync.PromisifiedResult<StartAccelerometerOption>;
        // 设备：罗盘 - Device/Compass
        stopCompassAsync(option?: WxAsync.PromisifiedOption<StopCompassOption>): WxAsync.PromisifiedResult<StopCompassOption>;
        startCompassAsync(option?: WxAsync.PromisifiedOption<StartCompassOption>): WxAsync.PromisifiedResult<StartCompassOption>;
        // 设备：设备方向 - Device/Motion
        stopDeviceMotionListeningAsync(option?: WxAsync.PromisifiedOption<StopDeviceMotionListeningOption>): WxAsync.PromisifiedResult<StopDeviceMotionListeningOption>;
        startDeviceMotionListeningAsync(option?: WxAsync.PromisifiedOption<StartDeviceMotionListeningOption>): WxAsync.PromisifiedResult<StartDeviceMotionListeningOption>;
        // 设备：转屏 - Device/Orientation
        setDeviceOrientationAsync(option?: WxAsync.PromisifiedOption<SetDeviceOrientationOption>): WxAsync.PromisifiedResult<SetDeviceOrientationOption>;
        // 设备：陀螺仪 - Device/Gyroscope
        stopGyroscopeAsync(option?: WxAsync.PromisifiedOption<StopGyroscopeOption>): WxAsync.PromisifiedResult<StopGyroscopeOption>;
        startGyroscopeAsync(option?: WxAsync.PromisifiedOption<StartGyroscopeOption>): WxAsync.PromisifiedResult<StartGyroscopeOption>;
        // 设备：扫码 - Device/ScanCode
        scanCodeAsync(option?: WxAsync.PromisifiedOption<ScanCodeOption>): WxAsync.PromisifiedResult<ScanCodeOption>;
        // 设备：振动 - Device/Vibration
        vibrateShortAsync(option?: WxAsync.PromisifiedOption<VibrateShortOption>): WxAsync.PromisifiedResult<VibrateShortOption>;
        vibrateLongAsync(option?: WxAsync.PromisifiedOption<VibrateLongOption>): WxAsync.PromisifiedResult<VibrateLongOption>;

        // AI：推理 - AI/Inference
        getInferenceEnvInfoAsync(option?: WxAsync.PromisifiedOption<GetInferenceEnvInfoOption>): WxAsync.PromisifiedResult<GetInferenceEnvInfoOption>;

        // 第三方平台 - Ext
        getExtConfigAsync(option?: WxAsync.PromisifiedOption<GetExtConfigOption>): WxAsync.PromisifiedResult<GetExtConfigOption>;
    }

    // @ts-ignore
    interface Wx extends WxAsync {}
}

/// <reference path="./wx.internal.d.ts" />

declare namespace WechatMinigame {
    namespace Wx {
        type CallbackOption = SKIT.WxminiPromisify.Internal.WxCallbackOption;
        type PromisifiedCallbackOption<T extends CallbackOption> =
            SKIT.WxminiPromisify.Internal.WxPromisifiedCallbackOption<T>;
        type PromisifiedCallbackResult<T extends CallbackOption> =
            SKIT.WxminiPromisify.Internal.WxPromisifiedCallbackResult<T>;
    }

    interface Wx {
        // 基础：系统 - Base/System
        getSystemInfoAsyncAsync(
            options?: Wx.PromisifiedCallbackOption<GetSystemInfoAsyncOption>
        ): Wx.PromisifiedCallbackResult<GetSystemInfoAsyncOption>;
        getSystemInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetSystemInfoOption>
        ): Wx.PromisifiedCallbackResult<GetSystemInfoOption>;
        // 基础：更新 - Base/Update
        updateWeChatAppAsync(
            options?: Wx.PromisifiedCallbackOption<UpdateWeChatAppOption>
        ): Wx.PromisifiedCallbackResult<UpdateWeChatAppOption>;
        // 基础：调试 - Base/Debug
        setEnableDebugAsync(
            options?: Wx.PromisifiedCallbackOption<SetEnableDebugOption>
        ): Wx.PromisifiedCallbackResult<SetEnableDebugOption>;

        // 跳转 - Navigate
        navigateToMiniProgramAsync(
            options?: Wx.PromisifiedCallbackOption<NavigateToMiniProgramOption>
        ): Wx.PromisifiedCallbackResult<NavigateToMiniProgramOption>;
        exitMiniProgramAsync(
            options?: Wx.PromisifiedCallbackOption<ExitMiniProgramOption>
        ): Wx.PromisifiedCallbackResult<ExitMiniProgramOption>;

        // 转发 - Share
        updateShareMenuAsync(
            options?: Wx.PromisifiedCallbackOption<UpdateShareMenuOption>
        ): Wx.PromisifiedCallbackResult<UpdateShareMenuOption>;
        showShareMenuAsync(
            options?: Wx.PromisifiedCallbackOption<ShowShareMenuOption>
        ): Wx.PromisifiedCallbackResult<ShowShareMenuOption>;
        showShareImageMenuAsync(
            options?: Wx.PromisifiedCallbackOption<ShowShareImageMenuOption>
        ): Wx.PromisifiedCallbackResult<ShowShareImageMenuOption>;
        hideShareMenuAsync(
            options?: Wx.PromisifiedCallbackOption<HideShareMenuOption>
        ): Wx.PromisifiedCallbackResult<HideShareMenuOption>;
        getShareInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetShareInfoOption>
        ): Wx.PromisifiedCallbackResult<GetShareInfoOption>;
        authPrivateMessageAsync(
            options?: Wx.PromisifiedCallbackOption<AuthPrivateMessageOption>
        ): Wx.PromisifiedCallbackResult<AuthPrivateMessageOption>;
        startHandoffAsync(
            options?: Wx.PromisifiedCallbackOption<StartHandoffOption>
        ): Wx.PromisifiedCallbackResult<StartHandoffOption>;
        checkHandoffEnabledAsync(
            options?: Wx.PromisifiedCallbackOption<CheckHandoffEnabledOption>
        ): Wx.PromisifiedCallbackResult<CheckHandoffEnabledOption>;

        // 界面：交互 - UI/Interaction
        showToastAsync(
            options?: Wx.PromisifiedCallbackOption<ShowToastOption>
        ): Wx.PromisifiedCallbackResult<ShowToastOption>;
        showModalAsync(
            options?: Wx.PromisifiedCallbackOption<ShowModalOption>
        ): Wx.PromisifiedCallbackResult<ShowModalOption>;
        showLoadingAsync(
            options?: Wx.PromisifiedCallbackOption<ShowLoadingOption>
        ): Wx.PromisifiedCallbackResult<ShowLoadingOption>;
        showActionSheetAsync(
            options?: Wx.PromisifiedCallbackOption<ShowActionSheetOption>
        ): Wx.PromisifiedCallbackResult<ShowActionSheetOption>;
        hideToastAsync(
            options?: Wx.PromisifiedCallbackOption<HideToastOption>
        ): Wx.PromisifiedCallbackResult<HideToastOption>;
        hideLoadingAsync(
            options?: Wx.PromisifiedCallbackOption<HideLoadingOption>
        ): Wx.PromisifiedCallbackResult<HideLoadingOption>;
        // 界面：菜单 - UI/Menu
        setMenuStyleAsync(
            options?: Wx.PromisifiedCallbackOption<SetMenuStyleOption>
        ): Wx.PromisifiedCallbackResult<SetMenuStyleOption>;
        // 界面：状态栏 - UI/StatusBar
        setStatusBarStyleAsync(
            options?: Wx.PromisifiedCallbackOption<SetStatusBarStyleOption>
        ): Wx.PromisifiedCallbackResult<SetStatusBarStyleOption>;
        // 界面：窗口 - UI/Window
        /**
         * @deprecated
         */
        setWindowSizeAsync(
            options?: Wx.PromisifiedCallbackOption<SetWindowSizeOption>
        ): Wx.PromisifiedCallbackResult<SetWindowSizeOption>;

        // 网络：发起请求 - Network/Request
        requestAsync(
            options?: Wx.PromisifiedCallbackOption<RequestOption>
        ): Wx.PromisifiedCallbackResult<RequestOption>;
        requestAsync<T>(options?: Wx.PromisifiedCallbackOption<RequestOption<T>>): Promise<RequestOption<T>>;
        // 网络：下载 - Network/Download
        downloadFileAsync(
            options?: Wx.PromisifiedCallbackOption<DownloadFileOption>
        ): Wx.PromisifiedCallbackResult<DownloadFileOption>;
        // 网络：上传 - Network/Upload
        uploadFileAsync(
            options?: Wx.PromisifiedCallbackOption<UploadFileOption>
        ): Wx.PromisifiedCallbackResult<UploadFileOption>;
        // 网络：WebSocket - Network/WebSocket
        sendSocketMessageAsync(
            options?: Wx.PromisifiedCallbackOption<SendSocketMessageOption>
        ): Wx.PromisifiedCallbackResult<SendSocketMessageOption>;
        connectSocketAsync(
            options?: Wx.PromisifiedCallbackOption<ConnectSocketOption>
        ): Wx.PromisifiedCallbackResult<ConnectSocketOption>;
        closeSocketAsync(
            options?: Wx.PromisifiedCallbackOption<CloseSocketOption>
        ): Wx.PromisifiedCallbackResult<CloseSocketOption>;

        // 虚拟支付 - MidasPayment
        requestMidasPaymentAsync(
            options?: Wx.PromisifiedCallbackOption<RequestMidasPaymentOption>
        ): Wx.PromisifiedCallbackResult<RequestMidasPaymentOption>;
        requestMidasFriendPaymentAsync(
            options?: Wx.PromisifiedCallbackOption<RequestMidasFriendPaymentOption>
        ): Wx.PromisifiedCallbackResult<RequestMidasFriendPaymentOption>;

        // 数据缓存：存储 - Storage/Storage
        setStorageAsync(
            options?: Wx.PromisifiedCallbackOption<SetStorageOption>
        ): Wx.PromisifiedCallbackResult<SetStorageOption>;
        removeStorageAsync(
            options?: Wx.PromisifiedCallbackOption<RemoveStorageOption>
        ): Wx.PromisifiedCallbackResult<RemoveStorageOption>;
        getStorageInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetStorageInfoOption>
        ): Wx.PromisifiedCallbackResult<GetStorageInfoOption>;
        getStorageAsync(
            options?: Wx.PromisifiedCallbackOption<GetStorageOption>
        ): Wx.PromisifiedCallbackResult<GetStorageOption>;
        getStorageAsync<T>(options?: Wx.PromisifiedCallbackOption<GetStorageOption<T>>): Promise<GetStorageOption<T>>;
        clearStorageAsync(
            options?: Wx.PromisifiedCallbackOption<ClearStorageOption>
        ): Wx.PromisifiedCallbackResult<ClearStorageOption>;

        // 字体 - Font
        getTextLineHeightAsync(
            options?: Wx.PromisifiedCallbackOption<GetTextLineHeightOption>
        ): Wx.PromisifiedCallbackResult<GetTextLineHeightOption>;

        // 媒体：图片 - Media/Image
        saveImageToPhotosAlbumAsync(
            options?: Wx.PromisifiedCallbackOption<SaveImageToPhotosAlbumOption>
        ): Wx.PromisifiedCallbackResult<SaveImageToPhotosAlbumOption>;
        previewMediaAsync(
            options?: Wx.PromisifiedCallbackOption<PreviewMediaOption>
        ): Wx.PromisifiedCallbackResult<PreviewMediaOption>;
        previewImageAsync(
            options?: Wx.PromisifiedCallbackOption<PreviewImageOption>
        ): Wx.PromisifiedCallbackResult<PreviewImageOption>;
        chooseImageAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseImageOption>
        ): Wx.PromisifiedCallbackResult<ChooseImageOption>;
        // 媒体：音频 - Media/Audio&Voice
        setInnerAudioOptionAsync(
            options?: Wx.PromisifiedCallbackOption<SetInnerAudioOption>
        ): Wx.PromisifiedCallbackResult<SetInnerAudioOption>;
        getAvailableAudioSourcesAsync(
            options?: Wx.PromisifiedCallbackOption<GetAvailableAudioSourcesOption>
        ): Wx.PromisifiedCallbackResult<GetAvailableAudioSourcesOption>;
        // 媒体：实时语音 - Media/VoIP
        updateVoIPChatMuteConfigAsync(
            options?: Wx.PromisifiedCallbackOption<UpdateVoIPChatMuteConfigOption>
        ): Wx.PromisifiedCallbackResult<UpdateVoIPChatMuteConfigOption>;
        joinVoIPChatAsync(
            options?: Wx.PromisifiedCallbackOption<JoinVoIPChatOption>
        ): Wx.PromisifiedCallbackResult<JoinVoIPChatOption>;
        exitVoIPChatAsync(
            options?: Wx.PromisifiedCallbackOption<ExitVoIPChatOption>
        ): Wx.PromisifiedCallbackResult<ExitVoIPChatOption>;

        // 位置 - Location
        getLocationAsync(
            options?: Wx.PromisifiedCallbackOption<GetLocationOption>
        ): Wx.PromisifiedCallbackResult<GetLocationOption>;

        // 文件 File
        saveFileToDiskAsync(
            options?: Wx.PromisifiedCallbackOption<SaveFileToDiskOption>
        ): Wx.PromisifiedCallbackResult<SaveFileToDiskOption>;
        getFileInfoAsync(
            options?: Wx.PromisifiedCallbackOption<WxGetFileInfoOption>
        ): Wx.PromisifiedCallbackResult<WxGetFileInfoOption>;

        // 开放接口：登录 - OpenAPI/Login
        loginAsync(options?: Wx.PromisifiedCallbackOption<LoginOption>): Wx.PromisifiedCallbackResult<LoginOption>;
        checkSessionAsync(
            options?: Wx.PromisifiedCallbackOption<CheckSessionOption>
        ): Wx.PromisifiedCallbackResult<CheckSessionOption>;
        // 开放接口：用户信息 - OpenAPI/UserInfo
        getUserInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetUserInfoOption>
        ): Wx.PromisifiedCallbackResult<GetUserInfoOption>;
        // 开放接口：授权 - OpenAPI/Authorization
        authorizeAsync(
            options?: Wx.PromisifiedCallbackOption<AuthorizeOption>
        ): Wx.PromisifiedCallbackResult<AuthorizeOption>;
        // 开放接口：设置 - OpenAPI/Setting
        openSettingAsync(
            options?: Wx.PromisifiedCallbackOption<OpenSettingOption>
        ): Wx.PromisifiedCallbackResult<OpenSettingOption>;
        getSettingAsync(
            options?: Wx.PromisifiedCallbackOption<GetSettingOption>
        ): Wx.PromisifiedCallbackResult<GetSettingOption>;
        // 开放接口：卡券 - OpenAPI/Card
        openCardAsync(
            options?: Wx.PromisifiedCallbackOption<OpenCardOption>
        ): Wx.PromisifiedCallbackResult<OpenCardOption>;
        addCardAsync(
            options?: Wx.PromisifiedCallbackOption<AddCardOption>
        ): Wx.PromisifiedCallbackResult<AddCardOption>;
        // 开放接口：微信运动 - OpenAPI/RunData
        getWeRunDataAsync(
            options?: Wx.PromisifiedCallbackOption<GetWeRunDataOption>
        ): Wx.PromisifiedCallbackResult<GetWeRunDataOption>;
        // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
        requestSubscribeMessageAsync(
            options?: Wx.PromisifiedCallbackOption<RequestSubscribeMessageOption>
        ): Wx.PromisifiedCallbackResult<RequestSubscribeMessageOption>;
        // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
        requestSubscribeSystemMessageAsync(
            options?: Wx.PromisifiedCallbackOption<RequestSubscribeSystemMessageOption>
        ): Wx.PromisifiedCallbackResult<RequestSubscribeSystemMessageOption>;
        // 开放接口：视频号 - OpenAPI/Channels
        openChannelsLiveAsync(
            options?: Wx.PromisifiedCallbackOption<OpenChannelsLiveOption>
        ): Wx.PromisifiedCallbackResult<OpenChannelsLiveOption>;
        openChannelsActivityAsync(
            options?: Wx.PromisifiedCallbackOption<OpenChannelsActivityOption>
        ): Wx.PromisifiedCallbackResult<OpenChannelsActivityOption>;
        getChannelsLiveNoticeInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetChannelsLiveNoticeInfoOption>
        ): Wx.PromisifiedCallbackResult<GetChannelsLiveNoticeInfoOption>;
        getChannelsLiveInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetChannelsLiveInfoOption>
        ): Wx.PromisifiedCallbackResult<GetChannelsLiveInfoOption>;
        // 开放接口：微信群 - OpenAPI/Group
        getGroupEnterInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetGroupEnterInfoOption>
        ): Wx.PromisifiedCallbackResult<GetGroupEnterInfoOption>;
        // 开放接口：开放数据 - OpenAPI/Data
        shareMessageToFriendAsync(
            options?: Wx.PromisifiedCallbackOption<ShareMessageToFriendOption>
        ): Wx.PromisifiedCallbackResult<ShareMessageToFriendOption>;
        setUserCloudStorageAsync(
            options?: Wx.PromisifiedCallbackOption<SetUserCloudStorageOption>
        ): Wx.PromisifiedCallbackResult<SetUserCloudStorageOption>;
        removeUserCloudStorageAsync(
            options?: Wx.PromisifiedCallbackOption<RemoveUserCloudStorageOption>
        ): Wx.PromisifiedCallbackResult<RemoveUserCloudStorageOption>;
        modifyFriendInteractiveStorageAsync(
            options?: Wx.PromisifiedCallbackOption<ModifyFriendInteractiveStorageOption>
        ): Wx.PromisifiedCallbackResult<ModifyFriendInteractiveStorageOption>;
        getUserInteractiveStorageAsync(
            options?: Wx.PromisifiedCallbackOption<GetUserInteractiveStorageOption>
        ): Wx.PromisifiedCallbackResult<GetUserInteractiveStorageOption>;
        getUserCloudStorageKeysAsync(
            options?: Wx.PromisifiedCallbackOption<GetUserCloudStorageKeysOption>
        ): Wx.PromisifiedCallbackResult<GetUserCloudStorageKeysOption>;
        getUserCloudStorageAsync(
            options?: Wx.PromisifiedCallbackOption<GetUserCloudStorageOption>
        ): Wx.PromisifiedCallbackResult<GetUserCloudStorageOption>;
        getPotentialFriendListAsync(
            options?: Wx.PromisifiedCallbackOption<GetPotentialFriendListOption>
        ): Wx.PromisifiedCallbackResult<GetPotentialFriendListOption>;
        getGroupInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetGroupInfoOption>
        ): Wx.PromisifiedCallbackResult<GetGroupInfoOption>;
        getGroupCloudStorageAsync(
            options?: Wx.PromisifiedCallbackOption<GetGroupCloudStorageOption>
        ): Wx.PromisifiedCallbackResult<GetGroupCloudStorageOption>;
        getFriendCloudStorageAsync(
            options?: Wx.PromisifiedCallbackOption<GetFriendCloudStorageOption>
        ): Wx.PromisifiedCallbackResult<GetFriendCloudStorageOption>;
        // 开放接口：防沉迷 - OpenAPI/Anti-Addiction
        checkIsUserAdvisedToRestAsync(
            options?: Wx.PromisifiedCallbackOption<CheckIsUserAdvisedToRestOption>
        ): Wx.PromisifiedCallbackResult<CheckIsUserAdvisedToRestOption>;
        // 开放接口：客服消息 - OpenAPI/CustomerMessage
        openCustomerServiceConversationAsync(
            options?: Wx.PromisifiedCallbackOption<OpenCustomerServiceConversationOption>
        ): Wx.PromisifiedCallbackResult<OpenCustomerServiceConversationOption>;

        // 设备：iBeacon - Device/iBeacon
        stopBeaconDiscoveryAsync(
            options?: Wx.PromisifiedCallbackOption<StopBeaconDiscoveryOption>
        ): Wx.PromisifiedCallbackResult<StopBeaconDiscoveryOption>;
        startBeaconDiscoveryAsync(
            options?: Wx.PromisifiedCallbackOption<StartBeaconDiscoveryOption>
        ): Wx.PromisifiedCallbackResult<StartBeaconDiscoveryOption>;
        getBeaconsAsync(
            options?: Wx.PromisifiedCallbackOption<GetBeaconsOption>
        ): Wx.PromisifiedCallbackResult<GetBeaconsOption>;
        // 设备：低功耗蓝牙 - Device/BLE
        setBLEMTUAsync(
            options?: Wx.PromisifiedCallbackOption<SetBLEMTUOption>
        ): Wx.PromisifiedCallbackResult<SetBLEMTUOption>;
        makeBluetoothPairAsync(
            options?: Wx.PromisifiedCallbackOption<MakeBluetoothPairOption>
        ): Wx.PromisifiedCallbackResult<MakeBluetoothPairOption>;
        writeBLECharacteristicValueAsync(
            options?: Wx.PromisifiedCallbackOption<WriteBLECharacteristicValueOption>
        ): Wx.PromisifiedCallbackResult<WriteBLECharacteristicValueOption>;
        readBLECharacteristicValueAsync(
            options?: Wx.PromisifiedCallbackOption<ReadBLECharacteristicValueOption>
        ): Wx.PromisifiedCallbackResult<ReadBLECharacteristicValueOption>;
        notifyBLECharacteristicValueChangeAsync(
            options?: Wx.PromisifiedCallbackOption<NotifyBLECharacteristicValueChangeOption>
        ): Wx.PromisifiedCallbackResult<NotifyBLECharacteristicValueChangeOption>;
        getBLEDeviceServicesAsync(
            options?: Wx.PromisifiedCallbackOption<GetBLEDeviceServicesOption>
        ): Wx.PromisifiedCallbackResult<GetBLEDeviceServicesOption>;
        getBLEDeviceCharacteristicsAsync(
            options?: Wx.PromisifiedCallbackOption<GetBLEDeviceCharacteristicsOption>
        ): Wx.PromisifiedCallbackResult<GetBLEDeviceCharacteristicsOption>;
        createBLEConnectionAsync(
            options?: Wx.PromisifiedCallbackOption<CreateBLEConnectionOption>
        ): Wx.PromisifiedCallbackResult<CreateBLEConnectionOption>;
        closeBLEConnectionAsync(
            options?: Wx.PromisifiedCallbackOption<CloseBLEConnectionOption>
        ): Wx.PromisifiedCallbackResult<CloseBLEConnectionOption>;
        createBLEPeripheralServerAsync(
            options?: Wx.PromisifiedCallbackOption<CreateBLEPeripheralServerOption>
        ): Wx.PromisifiedCallbackResult<CreateBLEPeripheralServerOption>;
        getBLEDeviceRSSIAsync(
            options?: Wx.PromisifiedCallbackOption<GetBLEDeviceRSSIOption>
        ): Wx.PromisifiedCallbackResult<GetBLEDeviceRSSIOption>;
        // 设备：蓝牙 - Device/Bluetooth
        stopBluetoothDevicesDiscoveryAsync(
            options?: Wx.PromisifiedCallbackOption<StopBluetoothDevicesDiscoveryOption>
        ): Wx.PromisifiedCallbackResult<StopBluetoothDevicesDiscoveryOption>;
        startBluetoothDevicesDiscoveryAsync(
            options?: Wx.PromisifiedCallbackOption<StartBluetoothDevicesDiscoveryOption>
        ): Wx.PromisifiedCallbackResult<StartBluetoothDevicesDiscoveryOption>;
        openBluetoothAdapterAsync(
            options?: Wx.PromisifiedCallbackOption<OpenBluetoothAdapterOption>
        ): Wx.PromisifiedCallbackResult<OpenBluetoothAdapterOption>;
        getConnectedBluetoothDevicesAsync(
            options?: Wx.PromisifiedCallbackOption<GetConnectedBluetoothDevicesOption>
        ): Wx.PromisifiedCallbackResult<GetConnectedBluetoothDevicesOption>;
        getBluetoothDevicesAsync(
            options?: Wx.PromisifiedCallbackOption<GetBluetoothDevicesOption>
        ): Wx.PromisifiedCallbackResult<GetBluetoothDevicesOption>;
        getBluetoothAdapterStateAsync(
            options?: Wx.PromisifiedCallbackOption<GetBluetoothAdapterStateOption>
        ): Wx.PromisifiedCallbackResult<GetBluetoothAdapterStateOption>;
        closeBluetoothAdapterAsync(
            options?: Wx.PromisifiedCallbackOption<CloseBluetoothAdapterOption>
        ): Wx.PromisifiedCallbackResult<CloseBluetoothAdapterOption>;
        // 设备：电量 - Device/Battery
        getBatteryInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetBatteryInfoOption>
        ): Wx.PromisifiedCallbackResult<GetBatteryInfoOption>;
        // 设备：剪贴板 - Device/Clipboard
        setClipboardDataAsync(
            options?: Wx.PromisifiedCallbackOption<SetClipboardDataOption>
        ): Wx.PromisifiedCallbackResult<SetClipboardDataOption>;
        getClipboardDataAsync(
            options?: Wx.PromisifiedCallbackOption<GetClipboardDataOption>
        ): Wx.PromisifiedCallbackResult<GetClipboardDataOption>;
        // 设备：网络 - Device/Newwork
        getNetworkTypeAsync(
            options?: Wx.PromisifiedCallbackOption<GetNetworkTypeOption>
        ): Wx.PromisifiedCallbackResult<GetNetworkTypeOption>;
        // 设备：加密 - Device/Crypto
        getRandomValuesAsync(
            options?: Wx.PromisifiedCallbackOption<GetRandomValuesOption>
        ): Wx.PromisifiedCallbackResult<GetRandomValuesOption>;
        // 设备：屏幕 - Device/Screen
        setScreenBrightnessAsync(
            options?: Wx.PromisifiedCallbackOption<SetScreenBrightnessOption>
        ): Wx.PromisifiedCallbackResult<SetScreenBrightnessOption>;
        setKeepScreenOnAsync(
            options?: Wx.PromisifiedCallbackOption<SetKeepScreenOnOption>
        ): Wx.PromisifiedCallbackResult<SetKeepScreenOnOption>;
        getScreenBrightnessAsync(
            options?: Wx.PromisifiedCallbackOption<GetScreenBrightnessOption>
        ): Wx.PromisifiedCallbackResult<GetScreenBrightnessOption>;
        // 设备：键盘 - Device/Keyword
        showKeyboardAsync(
            options?: Wx.PromisifiedCallbackOption<ShowKeyboardOption>
        ): Wx.PromisifiedCallbackResult<ShowKeyboardOption>;
        hideKeyboardAsync(
            options?: Wx.PromisifiedCallbackOption<HideKeyboardOption>
        ): Wx.PromisifiedCallbackResult<HideKeyboardOption>;
        updateKeyboardAsync(
            options?: Wx.PromisifiedCallbackOption<UpdateKeyboardOption>
        ): Wx.PromisifiedCallbackResult<UpdateKeyboardOption>;
        // 设备：加速计 - Device/Accelerometer
        stopAccelerometerAsync(
            options?: Wx.PromisifiedCallbackOption<StopAccelerometerOption>
        ): Wx.PromisifiedCallbackResult<StopAccelerometerOption>;
        startAccelerometerAsync(
            options?: Wx.PromisifiedCallbackOption<StartAccelerometerOption>
        ): Wx.PromisifiedCallbackResult<StartAccelerometerOption>;
        // 设备：罗盘 - Device/Compass
        stopCompassAsync(
            options?: Wx.PromisifiedCallbackOption<StopCompassOption>
        ): Wx.PromisifiedCallbackResult<StopCompassOption>;
        startCompassAsync(
            options?: Wx.PromisifiedCallbackOption<StartCompassOption>
        ): Wx.PromisifiedCallbackResult<StartCompassOption>;
        // 设备：设备方向 - Device/Motion
        stopDeviceMotionListeningAsync(
            options?: Wx.PromisifiedCallbackOption<StopDeviceMotionListeningOption>
        ): Wx.PromisifiedCallbackResult<StopDeviceMotionListeningOption>;
        startDeviceMotionListeningAsync(
            options?: Wx.PromisifiedCallbackOption<StartDeviceMotionListeningOption>
        ): Wx.PromisifiedCallbackResult<StartDeviceMotionListeningOption>;
        // 设备：陀螺仪 - Device/Gyroscope
        stopGyroscopeAsync(
            options?: Wx.PromisifiedCallbackOption<StopGyroscopeOption>
        ): Wx.PromisifiedCallbackResult<StopGyroscopeOption>;
        startGyroscopeAsync(
            options?: Wx.PromisifiedCallbackOption<StartGyroscopeOption>
        ): Wx.PromisifiedCallbackResult<StartGyroscopeOption>;
        // 设备：扫码 - Device/ScanCode
        scanCodeAsync(
            options?: Wx.PromisifiedCallbackOption<ScanCodeOption>
        ): Wx.PromisifiedCallbackResult<ScanCodeOption>;
        // 设备：振动 - Device/Vibration
        vibrateShortAsync(
            options?: Wx.PromisifiedCallbackOption<VibrateShortOption>
        ): Wx.PromisifiedCallbackResult<VibrateShortOption>;
        vibrateLongAsync(
            options?: Wx.PromisifiedCallbackOption<VibrateLongOption>
        ): Wx.PromisifiedCallbackResult<VibrateLongOption>;

        // 第三方平台 - Ext
        getExtConfigAsync(
            options?: Wx.PromisifiedCallbackOption<GetExtConfigOption>
        ): Wx.PromisifiedCallbackResult<GetExtConfigOption>;
    }
}

declare namespace WechatMinigame {
    namespace Wx {
        type CallbackOption = {
            success?: (...args: any) => void;
            fail?: (...args: any) => void;
            complete?: (...args: any) => void;
        };
        type PromisifiedOption<T extends CallbackOption> = SKIT.WxminiPromisify.Internal.WxPromisifiedCallbackOption<T>;
        type PromisifiedResult<T extends CallbackOption> = SKIT.WxminiPromisify.Internal.WxPromisifiedCallbackResult<T>;
    }

    interface Wx {
        // 基础：系统 - Base/System
        getSystemInfoAsyncAsync(
            options?: Wx.PromisifiedOption<GetSystemInfoAsyncOption>
        ): Wx.PromisifiedResult<GetSystemInfoAsyncOption>;
        getSystemInfoAsync(
            options?: Wx.PromisifiedOption<GetSystemInfoOption>
        ): Wx.PromisifiedResult<GetSystemInfoOption>;
        // 基础：更新 - Base/Update
        updateWeChatAppAsync(
            options?: Wx.PromisifiedOption<UpdateWeChatAppOption>
        ): Wx.PromisifiedResult<UpdateWeChatAppOption>;
        // 基础：调试 - Base/Debug
        setEnableDebugAsync(
            options?: Wx.PromisifiedOption<SetEnableDebugOption>
        ): Wx.PromisifiedResult<SetEnableDebugOption>;

        // 跳转 - Navigate
        navigateToMiniProgramAsync(
            options?: Wx.PromisifiedOption<NavigateToMiniProgramOption>
        ): Wx.PromisifiedResult<NavigateToMiniProgramOption>;
        exitMiniProgramAsync(
            options?: Wx.PromisifiedOption<ExitMiniProgramOption>
        ): Wx.PromisifiedResult<ExitMiniProgramOption>;

        // 转发 - Share
        updateShareMenuAsync(
            options?: Wx.PromisifiedOption<UpdateShareMenuOption>
        ): Wx.PromisifiedResult<UpdateShareMenuOption>;
        showShareMenuAsync(
            options?: Wx.PromisifiedOption<ShowShareMenuOption>
        ): Wx.PromisifiedResult<ShowShareMenuOption>;
        showShareImageMenuAsync(
            options?: Wx.PromisifiedOption<ShowShareImageMenuOption>
        ): Wx.PromisifiedResult<ShowShareImageMenuOption>;
        hideShareMenuAsync(
            options?: Wx.PromisifiedOption<HideShareMenuOption>
        ): Wx.PromisifiedResult<HideShareMenuOption>;
        getShareInfoAsync(options?: Wx.PromisifiedOption<GetShareInfoOption>): Wx.PromisifiedResult<GetShareInfoOption>;
        authPrivateMessageAsync(
            options?: Wx.PromisifiedOption<AuthPrivateMessageOption>
        ): Wx.PromisifiedResult<AuthPrivateMessageOption>;
        startHandoffAsync(options?: Wx.PromisifiedOption<StartHandoffOption>): Wx.PromisifiedResult<StartHandoffOption>;
        checkHandoffEnabledAsync(
            options?: Wx.PromisifiedOption<CheckHandoffEnabledOption>
        ): Wx.PromisifiedResult<CheckHandoffEnabledOption>;

        // 界面：交互 - UI/Interaction
        showToastAsync(options?: Wx.PromisifiedOption<ShowToastOption>): Wx.PromisifiedResult<ShowToastOption>;
        showModalAsync(options?: Wx.PromisifiedOption<ShowModalOption>): Wx.PromisifiedResult<ShowModalOption>;
        showLoadingAsync(options?: Wx.PromisifiedOption<ShowLoadingOption>): Wx.PromisifiedResult<ShowLoadingOption>;
        showActionSheetAsync(
            options?: Wx.PromisifiedOption<ShowActionSheetOption>
        ): Wx.PromisifiedResult<ShowActionSheetOption>;
        hideToastAsync(options?: Wx.PromisifiedOption<HideToastOption>): Wx.PromisifiedResult<HideToastOption>;
        hideLoadingAsync(options?: Wx.PromisifiedOption<HideLoadingOption>): Wx.PromisifiedResult<HideLoadingOption>;
        // 界面：菜单 - UI/Menu
        setMenuStyleAsync(options?: Wx.PromisifiedOption<SetMenuStyleOption>): Wx.PromisifiedResult<SetMenuStyleOption>;
        // 界面：状态栏 - UI/StatusBar
        setStatusBarStyleAsync(
            options?: Wx.PromisifiedOption<SetStatusBarStyleOption>
        ): Wx.PromisifiedResult<SetStatusBarStyleOption>;
        // 界面：窗口 - UI/Window
        /**
         * @deprecated
         */
        setWindowSizeAsync(
            options?: Wx.PromisifiedOption<SetWindowSizeOption>
        ): Wx.PromisifiedResult<SetWindowSizeOption>;

        // 网络：发起请求 - Network/Request
        requestAsync(options?: Wx.PromisifiedOption<RequestOption>): Wx.PromisifiedResult<RequestOption>;
        requestAsync<T>(options?: Wx.PromisifiedOption<RequestOption<T>>): Promise<RequestOption<T>>;
        // 网络：下载 - Network/Download
        downloadFileAsync(options?: Wx.PromisifiedOption<DownloadFileOption>): Wx.PromisifiedResult<DownloadFileOption>;
        // 网络：上传 - Network/Upload
        uploadFileAsync(options?: Wx.PromisifiedOption<UploadFileOption>): Wx.PromisifiedResult<UploadFileOption>;
        // 网络：WebSocket - Network/WebSocket
        sendSocketMessageAsync(
            options?: Wx.PromisifiedOption<SendSocketMessageOption>
        ): Wx.PromisifiedResult<SendSocketMessageOption>;
        connectSocketAsync(
            options?: Wx.PromisifiedOption<ConnectSocketOption>
        ): Wx.PromisifiedResult<ConnectSocketOption>;
        closeSocketAsync(options?: Wx.PromisifiedOption<CloseSocketOption>): Wx.PromisifiedResult<CloseSocketOption>;

        // 虚拟支付 - MidasPayment
        requestMidasPaymentAsync(
            options?: Wx.PromisifiedOption<RequestMidasPaymentOption>
        ): Wx.PromisifiedResult<RequestMidasPaymentOption>;
        requestMidasFriendPaymentAsync(
            options?: Wx.PromisifiedOption<RequestMidasFriendPaymentOption>
        ): Wx.PromisifiedResult<RequestMidasFriendPaymentOption>;

        // 数据缓存：存储 - Storage/Storage
        setStorageAsync(options?: Wx.PromisifiedOption<SetStorageOption>): Wx.PromisifiedResult<SetStorageOption>;
        removeStorageAsync(
            options?: Wx.PromisifiedOption<RemoveStorageOption>
        ): Wx.PromisifiedResult<RemoveStorageOption>;
        getStorageInfoAsync(
            options?: Wx.PromisifiedOption<GetStorageInfoOption>
        ): Wx.PromisifiedResult<GetStorageInfoOption>;
        getStorageAsync(options?: Wx.PromisifiedOption<GetStorageOption>): Wx.PromisifiedResult<GetStorageOption>;
        getStorageAsync<T>(options?: Wx.PromisifiedOption<GetStorageOption<T>>): Promise<GetStorageOption<T>>;
        clearStorageAsync(options?: Wx.PromisifiedOption<ClearStorageOption>): Wx.PromisifiedResult<ClearStorageOption>;

        // 字体 - Font
        getTextLineHeightAsync(
            options?: Wx.PromisifiedOption<GetTextLineHeightOption>
        ): Wx.PromisifiedResult<GetTextLineHeightOption>;

        // 媒体：图片 - Media/Image
        saveImageToPhotosAlbumAsync(
            options?: Wx.PromisifiedOption<SaveImageToPhotosAlbumOption>
        ): Wx.PromisifiedResult<SaveImageToPhotosAlbumOption>;
        previewMediaAsync(options?: Wx.PromisifiedOption<PreviewMediaOption>): Wx.PromisifiedResult<PreviewMediaOption>;
        previewImageAsync(options?: Wx.PromisifiedOption<PreviewImageOption>): Wx.PromisifiedResult<PreviewImageOption>;
        chooseImageAsync(options?: Wx.PromisifiedOption<ChooseImageOption>): Wx.PromisifiedResult<ChooseImageOption>;
        // 媒体：音频 - Media/Audio&Voice
        setInnerAudioOptionAsync(
            options?: Wx.PromisifiedOption<SetInnerAudioOption>
        ): Wx.PromisifiedResult<SetInnerAudioOption>;
        getAvailableAudioSourcesAsync(
            options?: Wx.PromisifiedOption<GetAvailableAudioSourcesOption>
        ): Wx.PromisifiedResult<GetAvailableAudioSourcesOption>;
        // 媒体：实时语音 - Media/VoIP
        updateVoIPChatMuteConfigAsync(
            options?: Wx.PromisifiedOption<UpdateVoIPChatMuteConfigOption>
        ): Wx.PromisifiedResult<UpdateVoIPChatMuteConfigOption>;
        joinVoIPChatAsync(options?: Wx.PromisifiedOption<JoinVoIPChatOption>): Wx.PromisifiedResult<JoinVoIPChatOption>;
        exitVoIPChatAsync(options?: Wx.PromisifiedOption<ExitVoIPChatOption>): Wx.PromisifiedResult<ExitVoIPChatOption>;

        // 位置 - Location
        getLocationAsync(options?: Wx.PromisifiedOption<GetLocationOption>): Wx.PromisifiedResult<GetLocationOption>;

        // 文件 File
        saveFileToDiskAsync(
            options?: Wx.PromisifiedOption<SaveFileToDiskOption>
        ): Wx.PromisifiedResult<SaveFileToDiskOption>;
        getFileInfoAsync(
            options?: Wx.PromisifiedOption<WxGetFileInfoOption>
        ): Wx.PromisifiedResult<WxGetFileInfoOption>;

        // 开放接口：登录 - OpenAPI/Login
        loginAsync(options?: Wx.PromisifiedOption<LoginOption>): Wx.PromisifiedResult<LoginOption>;
        checkSessionAsync(options?: Wx.PromisifiedOption<CheckSessionOption>): Wx.PromisifiedResult<CheckSessionOption>;
        // 开放接口：用户信息 - OpenAPI/UserInfo
        getUserInfoAsync(options?: Wx.PromisifiedOption<GetUserInfoOption>): Wx.PromisifiedResult<GetUserInfoOption>;
        // 开放接口：授权 - OpenAPI/Authorization
        authorizeAsync(options?: Wx.PromisifiedOption<AuthorizeOption>): Wx.PromisifiedResult<AuthorizeOption>;
        // 开放接口：设置 - OpenAPI/Setting
        openSettingAsync(options?: Wx.PromisifiedOption<OpenSettingOption>): Wx.PromisifiedResult<OpenSettingOption>;
        getSettingAsync(options?: Wx.PromisifiedOption<GetSettingOption>): Wx.PromisifiedResult<GetSettingOption>;
        // 开放接口：卡券 - OpenAPI/Card
        openCardAsync(options?: Wx.PromisifiedOption<OpenCardOption>): Wx.PromisifiedResult<OpenCardOption>;
        addCardAsync(options?: Wx.PromisifiedOption<AddCardOption>): Wx.PromisifiedResult<AddCardOption>;
        // 开放接口：微信运动 - OpenAPI/RunData
        getWeRunDataAsync(options?: Wx.PromisifiedOption<GetWeRunDataOption>): Wx.PromisifiedResult<GetWeRunDataOption>;
        // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
        requestSubscribeMessageAsync(
            options?: Wx.PromisifiedOption<RequestSubscribeMessageOption>
        ): Wx.PromisifiedResult<RequestSubscribeMessageOption>;
        // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
        requestSubscribeSystemMessageAsync(
            options?: Wx.PromisifiedOption<RequestSubscribeSystemMessageOption>
        ): Wx.PromisifiedResult<RequestSubscribeSystemMessageOption>;
        // 开放接口：视频号 - OpenAPI/Channels
        openChannelsLiveAsync(
            options?: Wx.PromisifiedOption<OpenChannelsLiveOption>
        ): Wx.PromisifiedResult<OpenChannelsLiveOption>;
        openChannelsActivityAsync(
            options?: Wx.PromisifiedOption<OpenChannelsActivityOption>
        ): Wx.PromisifiedResult<OpenChannelsActivityOption>;
        getChannelsLiveNoticeInfoAsync(
            options?: Wx.PromisifiedOption<GetChannelsLiveNoticeInfoOption>
        ): Wx.PromisifiedResult<GetChannelsLiveNoticeInfoOption>;
        getChannelsLiveInfoAsync(
            options?: Wx.PromisifiedOption<GetChannelsLiveInfoOption>
        ): Wx.PromisifiedResult<GetChannelsLiveInfoOption>;
        // 开放接口：微信群 - OpenAPI/Group
        getGroupEnterInfoAsync(
            options?: Wx.PromisifiedOption<GetGroupEnterInfoOption>
        ): Wx.PromisifiedResult<GetGroupEnterInfoOption>;
        // 开放接口：开放数据 - OpenAPI/Data
        shareMessageToFriendAsync(
            options?: Wx.PromisifiedOption<ShareMessageToFriendOption>
        ): Wx.PromisifiedResult<ShareMessageToFriendOption>;
        setUserCloudStorageAsync(
            options?: Wx.PromisifiedOption<SetUserCloudStorageOption>
        ): Wx.PromisifiedResult<SetUserCloudStorageOption>;
        removeUserCloudStorageAsync(
            options?: Wx.PromisifiedOption<RemoveUserCloudStorageOption>
        ): Wx.PromisifiedResult<RemoveUserCloudStorageOption>;
        modifyFriendInteractiveStorageAsync(
            options?: Wx.PromisifiedOption<ModifyFriendInteractiveStorageOption>
        ): Wx.PromisifiedResult<ModifyFriendInteractiveStorageOption>;
        getUserInteractiveStorageAsync(
            options?: Wx.PromisifiedOption<GetUserInteractiveStorageOption>
        ): Wx.PromisifiedResult<GetUserInteractiveStorageOption>;
        getUserCloudStorageKeysAsync(
            options?: Wx.PromisifiedOption<GetUserCloudStorageKeysOption>
        ): Wx.PromisifiedResult<GetUserCloudStorageKeysOption>;
        getUserCloudStorageAsync(
            options?: Wx.PromisifiedOption<GetUserCloudStorageOption>
        ): Wx.PromisifiedResult<GetUserCloudStorageOption>;
        getPotentialFriendListAsync(
            options?: Wx.PromisifiedOption<GetPotentialFriendListOption>
        ): Wx.PromisifiedResult<GetPotentialFriendListOption>;
        getGroupInfoAsync(options?: Wx.PromisifiedOption<GetGroupInfoOption>): Wx.PromisifiedResult<GetGroupInfoOption>;
        getGroupCloudStorageAsync(
            options?: Wx.PromisifiedOption<GetGroupCloudStorageOption>
        ): Wx.PromisifiedResult<GetGroupCloudStorageOption>;
        getFriendCloudStorageAsync(
            options?: Wx.PromisifiedOption<GetFriendCloudStorageOption>
        ): Wx.PromisifiedResult<GetFriendCloudStorageOption>;
        // 开放接口：防沉迷 - OpenAPI/Anti-Addiction
        checkIsUserAdvisedToRestAsync(
            options?: Wx.PromisifiedOption<CheckIsUserAdvisedToRestOption>
        ): Wx.PromisifiedResult<CheckIsUserAdvisedToRestOption>;
        // 开放接口：客服消息 - OpenAPI/CustomerMessage
        openCustomerServiceConversationAsync(
            options?: Wx.PromisifiedOption<OpenCustomerServiceConversationOption>
        ): Wx.PromisifiedResult<OpenCustomerServiceConversationOption>;

        // 设备：iBeacon - Device/iBeacon
        stopBeaconDiscoveryAsync(
            options?: Wx.PromisifiedOption<StopBeaconDiscoveryOption>
        ): Wx.PromisifiedResult<StopBeaconDiscoveryOption>;
        startBeaconDiscoveryAsync(
            options?: Wx.PromisifiedOption<StartBeaconDiscoveryOption>
        ): Wx.PromisifiedResult<StartBeaconDiscoveryOption>;
        getBeaconsAsync(options?: Wx.PromisifiedOption<GetBeaconsOption>): Wx.PromisifiedResult<GetBeaconsOption>;
        // 设备：低功耗蓝牙 - Device/BLE
        setBLEMTUAsync(options?: Wx.PromisifiedOption<SetBLEMTUOption>): Wx.PromisifiedResult<SetBLEMTUOption>;
        makeBluetoothPairAsync(
            options?: Wx.PromisifiedOption<MakeBluetoothPairOption>
        ): Wx.PromisifiedResult<MakeBluetoothPairOption>;
        writeBLECharacteristicValueAsync(
            options?: Wx.PromisifiedOption<WriteBLECharacteristicValueOption>
        ): Wx.PromisifiedResult<WriteBLECharacteristicValueOption>;
        readBLECharacteristicValueAsync(
            options?: Wx.PromisifiedOption<ReadBLECharacteristicValueOption>
        ): Wx.PromisifiedResult<ReadBLECharacteristicValueOption>;
        notifyBLECharacteristicValueChangeAsync(
            options?: Wx.PromisifiedOption<NotifyBLECharacteristicValueChangeOption>
        ): Wx.PromisifiedResult<NotifyBLECharacteristicValueChangeOption>;
        getBLEDeviceServicesAsync(
            options?: Wx.PromisifiedOption<GetBLEDeviceServicesOption>
        ): Wx.PromisifiedResult<GetBLEDeviceServicesOption>;
        getBLEDeviceCharacteristicsAsync(
            options?: Wx.PromisifiedOption<GetBLEDeviceCharacteristicsOption>
        ): Wx.PromisifiedResult<GetBLEDeviceCharacteristicsOption>;
        createBLEConnectionAsync(
            options?: Wx.PromisifiedOption<CreateBLEConnectionOption>
        ): Wx.PromisifiedResult<CreateBLEConnectionOption>;
        closeBLEConnectionAsync(
            options?: Wx.PromisifiedOption<CloseBLEConnectionOption>
        ): Wx.PromisifiedResult<CloseBLEConnectionOption>;
        createBLEPeripheralServerAsync(
            options?: Wx.PromisifiedOption<CreateBLEPeripheralServerOption>
        ): Wx.PromisifiedResult<CreateBLEPeripheralServerOption>;
        getBLEDeviceRSSIAsync(
            options?: Wx.PromisifiedOption<GetBLEDeviceRSSIOption>
        ): Wx.PromisifiedResult<GetBLEDeviceRSSIOption>;
        // 设备：蓝牙 - Device/Bluetooth
        stopBluetoothDevicesDiscoveryAsync(
            options?: Wx.PromisifiedOption<StopBluetoothDevicesDiscoveryOption>
        ): Wx.PromisifiedResult<StopBluetoothDevicesDiscoveryOption>;
        startBluetoothDevicesDiscoveryAsync(
            options?: Wx.PromisifiedOption<StartBluetoothDevicesDiscoveryOption>
        ): Wx.PromisifiedResult<StartBluetoothDevicesDiscoveryOption>;
        openBluetoothAdapterAsync(
            options?: Wx.PromisifiedOption<OpenBluetoothAdapterOption>
        ): Wx.PromisifiedResult<OpenBluetoothAdapterOption>;
        getConnectedBluetoothDevicesAsync(
            options?: Wx.PromisifiedOption<GetConnectedBluetoothDevicesOption>
        ): Wx.PromisifiedResult<GetConnectedBluetoothDevicesOption>;
        getBluetoothDevicesAsync(
            options?: Wx.PromisifiedOption<GetBluetoothDevicesOption>
        ): Wx.PromisifiedResult<GetBluetoothDevicesOption>;
        getBluetoothAdapterStateAsync(
            options?: Wx.PromisifiedOption<GetBluetoothAdapterStateOption>
        ): Wx.PromisifiedResult<GetBluetoothAdapterStateOption>;
        closeBluetoothAdapterAsync(
            options?: Wx.PromisifiedOption<CloseBluetoothAdapterOption>
        ): Wx.PromisifiedResult<CloseBluetoothAdapterOption>;
        // 设备：电量 - Device/Battery
        getBatteryInfoAsync(
            options?: Wx.PromisifiedOption<GetBatteryInfoOption>
        ): Wx.PromisifiedResult<GetBatteryInfoOption>;
        // 设备：剪贴板 - Device/Clipboard
        setClipboardDataAsync(
            options?: Wx.PromisifiedOption<SetClipboardDataOption>
        ): Wx.PromisifiedResult<SetClipboardDataOption>;
        getClipboardDataAsync(
            options?: Wx.PromisifiedOption<GetClipboardDataOption>
        ): Wx.PromisifiedResult<GetClipboardDataOption>;
        // 设备：网络 - Device/Newwork
        getNetworkTypeAsync(
            options?: Wx.PromisifiedOption<GetNetworkTypeOption>
        ): Wx.PromisifiedResult<GetNetworkTypeOption>;
        // 设备：加密 - Device/Crypto
        getRandomValuesAsync(
            options?: Wx.PromisifiedOption<GetRandomValuesOption>
        ): Wx.PromisifiedResult<GetRandomValuesOption>;
        // 设备：屏幕 - Device/Screen
        setScreenBrightnessAsync(
            options?: Wx.PromisifiedOption<SetScreenBrightnessOption>
        ): Wx.PromisifiedResult<SetScreenBrightnessOption>;
        setKeepScreenOnAsync(
            options?: Wx.PromisifiedOption<SetKeepScreenOnOption>
        ): Wx.PromisifiedResult<SetKeepScreenOnOption>;
        getScreenBrightnessAsync(
            options?: Wx.PromisifiedOption<GetScreenBrightnessOption>
        ): Wx.PromisifiedResult<GetScreenBrightnessOption>;
        // 设备：键盘 - Device/Keyword
        showKeyboardAsync(options?: Wx.PromisifiedOption<ShowKeyboardOption>): Wx.PromisifiedResult<ShowKeyboardOption>;
        hideKeyboardAsync(options?: Wx.PromisifiedOption<HideKeyboardOption>): Wx.PromisifiedResult<HideKeyboardOption>;
        updateKeyboardAsync(
            options?: Wx.PromisifiedOption<UpdateKeyboardOption>
        ): Wx.PromisifiedResult<UpdateKeyboardOption>;
        // 设备：加速计 - Device/Accelerometer
        stopAccelerometerAsync(
            options?: Wx.PromisifiedOption<StopAccelerometerOption>
        ): Wx.PromisifiedResult<StopAccelerometerOption>;
        startAccelerometerAsync(
            options?: Wx.PromisifiedOption<StartAccelerometerOption>
        ): Wx.PromisifiedResult<StartAccelerometerOption>;
        // 设备：罗盘 - Device/Compass
        stopCompassAsync(options?: Wx.PromisifiedOption<StopCompassOption>): Wx.PromisifiedResult<StopCompassOption>;
        startCompassAsync(options?: Wx.PromisifiedOption<StartCompassOption>): Wx.PromisifiedResult<StartCompassOption>;
        // 设备：设备方向 - Device/Motion
        stopDeviceMotionListeningAsync(
            options?: Wx.PromisifiedOption<StopDeviceMotionListeningOption>
        ): Wx.PromisifiedResult<StopDeviceMotionListeningOption>;
        startDeviceMotionListeningAsync(
            options?: Wx.PromisifiedOption<StartDeviceMotionListeningOption>
        ): Wx.PromisifiedResult<StartDeviceMotionListeningOption>;
        // 设备：陀螺仪 - Device/Gyroscope
        stopGyroscopeAsync(
            options?: Wx.PromisifiedOption<StopGyroscopeOption>
        ): Wx.PromisifiedResult<StopGyroscopeOption>;
        startGyroscopeAsync(
            options?: Wx.PromisifiedOption<StartGyroscopeOption>
        ): Wx.PromisifiedResult<StartGyroscopeOption>;
        // 设备：扫码 - Device/ScanCode
        scanCodeAsync(options?: Wx.PromisifiedOption<ScanCodeOption>): Wx.PromisifiedResult<ScanCodeOption>;
        // 设备：振动 - Device/Vibration
        vibrateShortAsync(options?: Wx.PromisifiedOption<VibrateShortOption>): Wx.PromisifiedResult<VibrateShortOption>;
        vibrateLongAsync(options?: Wx.PromisifiedOption<VibrateLongOption>): Wx.PromisifiedResult<VibrateLongOption>;

        // 第三方平台 - Ext
        getExtConfigAsync(options?: Wx.PromisifiedOption<GetExtConfigOption>): Wx.PromisifiedResult<GetExtConfigOption>;
    }
}

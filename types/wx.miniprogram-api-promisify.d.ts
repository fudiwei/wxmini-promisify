declare namespace WechatMiniprogram {
    namespace Wx {
        type CallbackOption = {
            success?: (...args: any) => void;
            fail?: (...args: any) => void;
            complete?: (...args: any) => void;
        };
        type PromisifiedOption<T extends CallbackOption> = Omit<T, keyof CallbackOption>;
        type PromisifiedResult<T extends CallbackOption> = Promise<Parameters<T['success']>[0]>;
    }

    interface Wx {
        // 基础：系统 - Base/System
        openSystemBluetoothSettingAsync(
            options?: Wx.PromisifiedOption<OpenSystemBluetoothSettingOption>
        ): Wx.PromisifiedResult<OpenSystemBluetoothSettingOption>;
        openAppAuthorizeSettingAsync(
            options?: Wx.PromisifiedOption<OpenAppAuthorizeSettingOption>
        ): Wx.PromisifiedResult<OpenAppAuthorizeSettingOption>;
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

        // 路由 - Route
        reLaunchAsync(options?: Wx.PromisifiedOption<ReLaunchOption>): Wx.PromisifiedResult<ReLaunchOption>;
        switchTabAsync(options?: Wx.PromisifiedOption<SwitchTabOption>): Wx.PromisifiedResult<SwitchTabOption>;
        redirectToAsync(options?: Wx.PromisifiedOption<RedirectToOption>): Wx.PromisifiedResult<RedirectToOption>;
        navigateToAsync(options?: Wx.PromisifiedOption<NavigateToOption>): Wx.PromisifiedResult<NavigateToOption>;
        navigateBackAsync(options?: Wx.PromisifiedOption<NavigateBackOption>): Wx.PromisifiedResult<NavigateBackOption>;

        // 跳转 - Navigate
        openEmbeddedMiniProgramAsync(
            options?: Wx.PromisifiedOption<OpenEmbeddedMiniProgramOption>
        ): Wx.PromisifiedResult<OpenEmbeddedMiniProgramOption>;
        navigateToMiniProgramAsync(
            options?: Wx.PromisifiedOption<NavigateToMiniProgramOption>
        ): Wx.PromisifiedResult<NavigateToMiniProgramOption>;
        navigateBackMiniProgramAsync(
            options?: Wx.PromisifiedOption<NavigateBackMiniProgramOption>
        ): Wx.PromisifiedResult<NavigateBackMiniProgramOption>;
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
        shareVideoMessageAsync(
            options?: Wx.PromisifiedOption<ShareVideoMessageOption>
        ): Wx.PromisifiedResult<ShareVideoMessageOption>;
        shareFileMessageAsync(
            options?: Wx.PromisifiedOption<ShareFileMessageOption>
        ): Wx.PromisifiedResult<ShareFileMessageOption>;
        hideShareMenuAsync(
            options?: Wx.PromisifiedOption<HideShareMenuOption>
        ): Wx.PromisifiedResult<HideShareMenuOption>;
        getShareInfoAsync(options?: Wx.PromisifiedOption<GetShareInfoOption>): Wx.PromisifiedResult<GetShareInfoOption>;
        authPrivateMessageAsync(
            options?: Wx.PromisifiedOption<AuthPrivateMessageOption>
        ): Wx.PromisifiedResult<AuthPrivateMessageOption>;

        // 界面：交互 - UI/Interaction
        showToastAsync(options?: Wx.PromisifiedOption<ShowToastOption>): Wx.PromisifiedResult<ShowToastOption>;
        showModalAsync(options?: Wx.PromisifiedOption<ShowModalOption>): Wx.PromisifiedResult<ShowModalOption>;
        showLoadingAsync(options?: Wx.PromisifiedOption<ShowLoadingOption>): Wx.PromisifiedResult<ShowLoadingOption>;
        showActionSheetAsync(
            options?: Wx.PromisifiedOption<ShowActionSheetOption>
        ): Wx.PromisifiedResult<ShowActionSheetOption>;
        hideToastAsync(options?: Wx.PromisifiedOption<HideToastOption>): Wx.PromisifiedResult<HideToastOption>;
        hideLoadingAsync(options?: Wx.PromisifiedOption<HideLoadingOption>): Wx.PromisifiedResult<HideLoadingOption>;
        enableAlertBeforeUnloadAsync(
            options?: Wx.PromisifiedOption<EnableAlertBeforeUnloadOption>
        ): Wx.PromisifiedResult<EnableAlertBeforeUnloadOption>;
        disableAlertBeforeUnloadAsync(
            options?: Wx.PromisifiedOption<DisableAlertBeforeUnloadOption>
        ): Wx.PromisifiedResult<DisableAlertBeforeUnloadOption>;
        // 界面：导航栏 - UI/Navigation
        showNavigationBarLoadingAsync(
            options?: Wx.PromisifiedOption<ShowNavigationBarLoadingOption>
        ): Wx.PromisifiedResult<ShowNavigationBarLoadingOption>;
        setNavigationBarTitleAsync(
            options?: Wx.PromisifiedOption<SetNavigationBarTitleOption>
        ): Wx.PromisifiedResult<SetNavigationBarTitleOption>;
        setNavigationBarColorAsync(
            options?: Wx.PromisifiedOption<SetNavigationBarColorOption>
        ): Wx.PromisifiedResult<SetNavigationBarColorOption>;
        hideNavigationBarLoadingAsync(
            options?: Wx.PromisifiedOption<HideNavigationBarLoadingOption>
        ): Wx.PromisifiedResult<HideNavigationBarLoadingOption>;
        hideHomeButtonAsync(
            options?: Wx.PromisifiedOption<HideHomeButtonOption>
        ): Wx.PromisifiedResult<HideHomeButtonOption>;
        // 界面：背景 - UI/Background
        setBackgroundTextStyleAsync(
            options?: Wx.PromisifiedOption<SetBackgroundTextStyleOption>
        ): Wx.PromisifiedResult<SetBackgroundTextStyleOption>;
        setBackgroundColorAsync(
            options?: Wx.PromisifiedOption<SetBackgroundColorOption>
        ): Wx.PromisifiedResult<SetBackgroundColorOption>;
        // 界面：TabBar - UI/TabBar
        showTabBarRedDotAsync(
            options?: Wx.PromisifiedOption<ShowTabBarRedDotOption>
        ): Wx.PromisifiedResult<ShowTabBarRedDotOption>;
        showTabBarAsync(options?: Wx.PromisifiedOption<ShowTabBarOption>): Wx.PromisifiedResult<ShowTabBarOption>;
        setTabBarStyleAsync(
            options?: Wx.PromisifiedOption<SetTabBarStyleOption>
        ): Wx.PromisifiedResult<SetTabBarStyleOption>;
        setTabBarItemAsync(
            options?: Wx.PromisifiedOption<SetTabBarItemOption>
        ): Wx.PromisifiedResult<SetTabBarItemOption>;
        setTabBarBadgeAsync(
            options?: Wx.PromisifiedOption<SetTabBarBadgeOption>
        ): Wx.PromisifiedResult<SetTabBarBadgeOption>;
        removeTabBarBadgeAsync(
            options?: Wx.PromisifiedOption<RemoveTabBarBadgeOption>
        ): Wx.PromisifiedResult<RemoveTabBarBadgeOption>;
        hideTabBarRedDotAsync(
            options?: Wx.PromisifiedOption<HideTabBarRedDotOption>
        ): Wx.PromisifiedResult<HideTabBarRedDotOption>;
        hideTabBarAsync(options?: Wx.PromisifiedOption<HideTabBarOption>): Wx.PromisifiedResult<HideTabBarOption>;
        // 界面：字体 - UI/Font
        loadFontFaceAsync(options?: Wx.PromisifiedOption<LoadFontFaceOption>): Wx.PromisifiedResult<LoadFontFaceOption>;
        // 界面：下拉刷新 - UI/PullDown
        startPullDownRefreshAsync(
            options?: Wx.PromisifiedOption<StartPullDownRefreshOption>
        ): Wx.PromisifiedResult<StartPullDownRefreshOption>;
        stopPullDownRefreshAsync(
            options?: Wx.PromisifiedOption<StopPullDownRefreshOption>
        ): Wx.PromisifiedResult<StopPullDownRefreshOption>;
        // 界面：滚动 - UI/Scroll
        pageScrollToAsync(options?: Wx.PromisifiedOption<PageScrollToOption>): Wx.PromisifiedResult<PageScrollToOption>;
        // 界面：置顶 - UI/TopBar
        /**
         * @deprecated
         */
        setTopBarTextAsync(
            options?: Wx.PromisifiedOption<SetTopBarTextOption>
        ): Wx.PromisifiedResult<SetTopBarTextOption>;
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
        // 网络：mDNS - Network/mDNS
        stopLocalServiceDiscoveryAsync(
            options?: Wx.PromisifiedOption<StopLocalServiceDiscoveryOption>
        ): Wx.PromisifiedResult<StopLocalServiceDiscoveryOption>;
        startLocalServiceDiscoveryAsync(
            options?: Wx.PromisifiedOption<StartLocalServiceDiscoveryOption>
        ): Wx.PromisifiedResult<StartLocalServiceDiscoveryOption>;

        // 支付 - Payment
        requestPaymentAsync(
            options?: Wx.PromisifiedOption<RequestPaymentOption>
        ): Wx.PromisifiedResult<RequestPaymentOption>;
        requestOrderPaymentAsync(
            options?: Wx.PromisifiedOption<RequestOrderPaymentOption>
        ): Wx.PromisifiedResult<RequestOrderPaymentOption>;

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
        // 数据缓存：周期性更新 - Storage/BackgroundFetch
        setBackgroundFetchTokenAsync(
            options?: Wx.PromisifiedOption<SetBackgroundFetchTokenOption>
        ): Wx.PromisifiedResult<SetBackgroundFetchTokenOption>;
        getBackgroundFetchTokenAsync(
            options?: Wx.PromisifiedOption<GetBackgroundFetchTokenOption>
        ): Wx.PromisifiedResult<GetBackgroundFetchTokenOption>;
        getBackgroundFetchDataAsync(
            options?: Wx.PromisifiedOption<GetBackgroundFetchDataOption>
        ): Wx.PromisifiedResult<GetBackgroundFetchDataOption>;

        // 画布 - Canvas
        canvasToTempFilePathAsync(
            options?: Wx.PromisifiedOption<CanvasToTempFilePathOption>,
            component?: Component.TrivialInstance | Page.TrivialInstance
        ): Promise<CanvasToTempFilePathOption>;
        canvasPutImageDataAsync(
            options?: Wx.PromisifiedOption<CanvasPutImageDataOption>
        ): Wx.PromisifiedResult<CanvasPutImageDataOption>;
        canvasGetImageDataAync(
            options?: Wx.PromisifiedOption<CanvasGetImageDataOption>
        ): Wx.PromisifiedResult<CanvasGetImageDataOption>;

        // 媒体：图片 - Media/Image
        saveImageToPhotosAlbumAsync(
            options?: Wx.PromisifiedOption<SaveImageToPhotosAlbumOption>
        ): Wx.PromisifiedResult<SaveImageToPhotosAlbumOption>;
        previewMediaAsync(options?: Wx.PromisifiedOption<PreviewMediaOption>): Wx.PromisifiedResult<PreviewMediaOption>;
        previewImageAsync(options?: Wx.PromisifiedOption<PreviewImageOption>): Wx.PromisifiedResult<PreviewImageOption>;
        getImageInfoAsync(options?: Wx.PromisifiedOption<GetImageInfoOption>): Wx.PromisifiedResult<GetImageInfoOption>;
        compressImageAsync(
            options?: Wx.PromisifiedOption<CompressImageOption>
        ): Wx.PromisifiedResult<CompressImageOption>;
        chooseMessageFileAsync(
            options?: Wx.PromisifiedOption<ChooseMessageFileOption>
        ): Wx.PromisifiedResult<ChooseMessageFileOption>;
        chooseImageAsync(options?: Wx.PromisifiedOption<ChooseImageOption>): Wx.PromisifiedResult<ChooseImageOption>;
        // 媒体：视频 - Media/Video
        saveVideoToPhotosAlbumAsync(
            options?: Wx.PromisifiedOption<SaveVideoToPhotosAlbumOption>
        ): Wx.PromisifiedResult<SaveVideoToPhotosAlbumOption>;
        openVideoEditorAsync(
            options?: Wx.PromisifiedOption<OpenVideoEditorOption>
        ): Wx.PromisifiedResult<OpenVideoEditorOption>;
        getVideoInfoAsync(options?: Wx.PromisifiedOption<GetVideoInfoOption>): Wx.PromisifiedResult<GetVideoInfoOption>;
        compressVideoAsync(
            options?: Wx.PromisifiedOption<CompressVideoOption>
        ): Wx.PromisifiedResult<CompressVideoOption>;
        chooseVideoAsync(options?: Wx.PromisifiedOption<ChooseVideoOption>): Wx.PromisifiedResult<ChooseVideoOption>;
        chooseMediaAsync(options?: Wx.PromisifiedOption<ChooseMediaOption>): Wx.PromisifiedResult<ChooseMediaOption>;
        // 媒体：音频 - Media/Audio&Voice
        /**
         * @deprecated
         */
        stopVoiceAsync(options?: Wx.PromisifiedOption<StopVoiceOption>): Wx.PromisifiedResult<StopVoiceOption>;
        /**
         * @deprecated
         */
        playVoiceAsync(options?: Wx.PromisifiedOption<PlayVoiceOption>): Wx.PromisifiedResult<PlayVoiceOption>;
        /**
         * @deprecated
         */
        pauseVoiceAsync(options?: Wx.PromisifiedOption<PauseVoiceOption>): Wx.PromisifiedResult<PauseVoiceOption>;
        setInnerAudioOptionAsync(
            options?: Wx.PromisifiedOption<SetInnerAudioOption>
        ): Wx.PromisifiedResult<SetInnerAudioOption>;
        getAvailableAudioSourcesAsync(
            options?: Wx.PromisifiedOption<GetAvailableAudioSourcesOption>
        ): Wx.PromisifiedResult<GetAvailableAudioSourcesOption>;
        // 媒体：背景音频 - Media/BackgroundAudio
        /**
         * @deprecated
         */
        stopBackgroundAudioAsync(
            options?: Wx.PromisifiedOption<StopBackgroundAudioOption>
        ): Wx.PromisifiedResult<StopBackgroundAudioOption>;
        /**
         * @deprecated
         */
        seekBackgroundAudioAsync(
            options?: Wx.PromisifiedOption<SeekBackgroundAudioOption>
        ): Wx.PromisifiedResult<SeekBackgroundAudioOption>;
        /**
         * @deprecated
         */
        playBackgroundAudioAsync(
            options?: Wx.PromisifiedOption<PlayBackgroundAudioOption>
        ): Wx.PromisifiedResult<PlayBackgroundAudioOption>;
        /**
         * @deprecated
         */
        pauseBackgroundAudioAsync(
            options?: Wx.PromisifiedOption<PauseBackgroundAudioOption>
        ): Wx.PromisifiedResult<PauseBackgroundAudioOption>;
        /**
         * @deprecated
         */
        getBackgroundAudioPlayerStateAsync(
            options?: Wx.PromisifiedOption<GetBackgroundAudioPlayerStateOption>
        ): Wx.PromisifiedResult<GetBackgroundAudioPlayerStateOption>;
        // 媒体：录音 - Media/Record
        /**
         * @deprecated
         */
        stopRecordAsync(options?: Wx.PromisifiedOption<WxStopRecordOption>): Wx.PromisifiedResult<WxStopRecordOption>;
        /**
         * @deprecated
         */
        startRecordAsync(
            options?: Wx.PromisifiedOption<WxStartRecordOption>
        ): Wx.PromisifiedResult<WxStartRecordOption>;
        // 媒体：实时语音 - Media/VoIP
        updateVoIPChatMuteConfigAsync(
            options?: Wx.PromisifiedOption<UpdateVoIPChatMuteConfigOption>
        ): Wx.PromisifiedResult<UpdateVoIPChatMuteConfigOption>;
        subscribeVoIPVideoMembersAsync(
            options?: Wx.PromisifiedOption<SubscribeVoIPVideoMembersOption>
        ): Wx.PromisifiedResult<SubscribeVoIPVideoMembersOption>;
        setEnable1v1ChatAsync(
            options?: Wx.PromisifiedOption<SetEnable1v1ChatOption>
        ): Wx.PromisifiedResult<SetEnable1v1ChatOption>;
        joinVoIPChatAsync(options?: Wx.PromisifiedOption<JoinVoIPChatOption>): Wx.PromisifiedResult<JoinVoIPChatOption>;
        exitVoIPChatAsync(options?: Wx.PromisifiedOption<ExitVoIPChatOption>): Wx.PromisifiedResult<ExitVoIPChatOption>;

        // 位置 - Location
        stopLocationUpdateAsync(
            options?: Wx.PromisifiedOption<StopLocationUpdateOption>
        ): Wx.PromisifiedResult<StopLocationUpdateOption>;
        startLocationUpdateBackgroundAsync(
            options?: Wx.PromisifiedOption<StartLocationUpdateBackgroundOption>
        ): Wx.PromisifiedResult<StartLocationUpdateBackgroundOption>;
        startLocationUpdateAsync(
            options?: Wx.PromisifiedOption<StartLocationUpdateOption>
        ): Wx.PromisifiedResult<StartLocationUpdateOption>;
        openLocationAsync(options?: Wx.PromisifiedOption<OpenLocationOption>): Wx.PromisifiedResult<OpenLocationOption>;
        getLocationAsync(options?: Wx.PromisifiedOption<GetLocationOption>): Wx.PromisifiedResult<GetLocationOption>;
        choosePoiAsync(options?: Wx.PromisifiedOption<ChoosePoiOption>): Wx.PromisifiedResult<ChoosePoiOption>;
        chooseLocationAsync(
            options?: Wx.PromisifiedOption<ChooseLocationOption>
        ): Wx.PromisifiedResult<ChooseLocationOption>;

        // 文件 File
        saveFileToDiskAsync(
            options?: Wx.PromisifiedOption<SaveFileToDiskOption>
        ): Wx.PromisifiedResult<SaveFileToDiskOption>;
        saveFileAsync(options?: Wx.PromisifiedOption<WxSaveFileOption>): Wx.PromisifiedResult<WxSaveFileOption>;
        removeSavedFileAsync(
            options?: Wx.PromisifiedOption<WxRemoveSavedFileOption>
        ): Wx.PromisifiedResult<WxRemoveSavedFileOption>;
        openDocumentAsync(options?: Wx.PromisifiedOption<OpenDocumentOption>): Wx.PromisifiedResult<OpenDocumentOption>;
        getSavedFileListAsync(
            options?: Wx.PromisifiedOption<WxGetSavedFileListOption>
        ): Wx.PromisifiedResult<WxGetSavedFileListOption>;
        getSavedFileInfoAsync(
            options?: Wx.PromisifiedOption<GetSavedFileInfoOption>
        ): Wx.PromisifiedResult<GetSavedFileInfoOption>;
        getFileInfoAsync(
            options?: Wx.PromisifiedOption<WxGetFileInfoOption>
        ): Wx.PromisifiedResult<WxGetFileInfoOption>;

        // 开放接口：登录 - OpenAPI/Login
        pluginLoginAsync(options?: Wx.PromisifiedOption<PluginLoginOption>): Wx.PromisifiedResult<PluginLoginOption>;
        loginAsync(options?: Wx.PromisifiedOption<LoginOption>): Wx.PromisifiedResult<LoginOption>;
        checkSessionAsync(options?: Wx.PromisifiedOption<CheckSessionOption>): Wx.PromisifiedResult<CheckSessionOption>;
        // 开放接口：用户信息 - OpenAPI/UserInfo
        getUserProfileAsync(
            options?: Wx.PromisifiedOption<GetUserProfileOption>
        ): Wx.PromisifiedResult<GetUserProfileOption>;
        getUserInfoAsync(options?: Wx.PromisifiedOption<GetUserInfoOption>): Wx.PromisifiedResult<GetUserInfoOption>;
        // 开放接口：授权 - OpenAPI/Authorization
        authorizeAsync(options?: Wx.PromisifiedOption<AuthorizeOption>): Wx.PromisifiedResult<AuthorizeOption>;
        authorizeForMiniProgramAsync(
            options?: Wx.PromisifiedOption<AuthorizeForMiniProgramOption>
        ): Wx.PromisifiedResult<AuthorizeForMiniProgramOption>;
        // 开放接口：设置 - OpenAPI/Setting
        openSettingAsync(options?: Wx.PromisifiedOption<OpenSettingOption>): Wx.PromisifiedResult<OpenSettingOption>;
        getSettingAsync(options?: Wx.PromisifiedOption<GetSettingOption>): Wx.PromisifiedResult<GetSettingOption>;
        // 开放接口：收货地址 - OpenAPI/Address
        chooseAddressAsync(
            options?: Wx.PromisifiedOption<ChooseAddressOption>
        ): Wx.PromisifiedResult<ChooseAddressOption>;
        // 开放接口：卡券 - OpenAPI/Card
        openCardAsync(options?: Wx.PromisifiedOption<OpenCardOption>): Wx.PromisifiedResult<OpenCardOption>;
        addCardAsync(options?: Wx.PromisifiedOption<AddCardOption>): Wx.PromisifiedResult<AddCardOption>;
        // 开放接口：发票 - OpenAPI/Invoice
        chooseInvoiceTitleAsync(
            options?: Wx.PromisifiedOption<ChooseInvoiceTitleOption>
        ): Wx.PromisifiedResult<ChooseInvoiceTitleOption>;
        chooseInvoiceAsync(
            options?: Wx.PromisifiedOption<ChooseInvoiceOption>
        ): Wx.PromisifiedResult<ChooseInvoiceOption>;
        // 开放接口：生物认证 - OpenAPI/SoterAuthentication
        startSoterAuthenticationAsync(
            options?: Wx.PromisifiedOption<StartSoterAuthenticationOption>
        ): Wx.PromisifiedResult<StartSoterAuthenticationOption>;
        checkIsSupportSoterAuthenticationAsync(
            options?: Wx.PromisifiedOption<CheckIsSupportSoterAuthenticationOption>
        ): Promise<CheckIsSupportSoterAuthenticationOption>;
        checkIsSoterEnrolledInDeviceAsync(
            options?: Wx.PromisifiedOption<CheckIsSoterEnrolledInDeviceOption>
        ): Wx.PromisifiedResult<CheckIsSoterEnrolledInDeviceOption>;
        // 开放接口：微信运动 - OpenAPI/RunData
        shareToWeRunAsync(options?: Wx.PromisifiedOption<ShareToWeRunOption>): Wx.PromisifiedResult<ShareToWeRunOption>;
        getWeRunDataAsync(options?: Wx.PromisifiedOption<GetWeRunDataOption>): Wx.PromisifiedResult<GetWeRunDataOption>;
        // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
        requestSubscribeMessageAsync(
            options?: Wx.PromisifiedOption<RequestSubscribeMessageOption>
        ): Wx.PromisifiedResult<RequestSubscribeMessageOption>;
        requestSubscribeDeviceMessageAsync(
            options?: Wx.PromisifiedOption<RequestSubscribeDeviceMessageOption>
        ): Wx.PromisifiedResult<RequestSubscribeDeviceMessageOption>;
        // 开放接口：微信红包 - OpenAPI/RedPackage
        showRedPackgeAsync(
            options?: Wx.PromisifiedOption<ShowRedPackageOption>
        ): Wx.PromisifiedResult<ShowRedPackageOption>;
        // 开放接口：收藏 - OpenAPI/Favorites
        addVideoToFavoritesAsync(
            options?: Wx.PromisifiedOption<AddVideoToFavoritesOption>
        ): Wx.PromisifiedResult<AddVideoToFavoritesOption>;
        addFileToFavoritesAsync(
            options?: Wx.PromisifiedOption<AddFileToFavoritesOption>
        ): Wx.PromisifiedResult<AddFileToFavoritesOption>;
        // 开放接口：车牌 - LicensePlate
        chooseLicensePlateAsync(
            options?: Wx.PromisifiedOption<ChooseLicensePlateOption>
        ): Wx.PromisifiedResult<ChooseLicensePlateOption>;
        // 开放接口：视频号 - OpenAPI/Channels
        openChannelsUserProfileAsync(
            options?: Wx.PromisifiedOption<OpenChannelsUserProfileOption>
        ): Wx.PromisifiedResult<OpenChannelsUserProfileOption>;
        openChannelsLiveAsync(
            options?: Wx.PromisifiedOption<OpenChannelsLiveOption>
        ): Wx.PromisifiedResult<OpenChannelsLiveOption>;
        openChannelsEventAsync(
            options?: Wx.PromisifiedOption<OpenChannelsEventOption>
        ): Wx.PromisifiedResult<OpenChannelsEventOption>;
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
        // 开放接口：微信客服 - ServiceChat
        openCustomerServiceChatAsync(
            options?: Wx.PromisifiedOption<OpenCustomerServiceChatOption>
        ): Wx.PromisifiedResult<OpenCustomerServiceChatOption>;

        // 设备：iBeacon - Device/iBeacon
        stopBeaconDiscoveryAsync(
            options?: Wx.PromisifiedOption<StopBeaconDiscoveryOption>
        ): Wx.PromisifiedResult<StopBeaconDiscoveryOption>;
        startBeaconDiscoveryAsync(
            options?: Wx.PromisifiedOption<StartBeaconDiscoveryOption>
        ): Wx.PromisifiedResult<StartBeaconDiscoveryOption>;
        getBeaconsAsync(options?: Wx.PromisifiedOption<GetBeaconsOption>): Wx.PromisifiedResult<GetBeaconsOption>;
        // 设备：NFC - Device/NFC
        stopHCEAsync(options?: Wx.PromisifiedOption<StopHCEOption>): Wx.PromisifiedResult<StopHCEOption>;
        startHCEAsync(options?: Wx.PromisifiedOption<StartHCEOption>): Wx.PromisifiedResult<StartHCEOption>;
        sendHCEMessageAsync(
            options?: Wx.PromisifiedOption<SendHCEMessageOption>
        ): Wx.PromisifiedResult<SendHCEMessageOption>;
        getHCEStateAsync(options?: Wx.PromisifiedOption<GetHCEStateOption>): Wx.PromisifiedResult<GetHCEStateOption>;
        // 设备：WiFi - Device/WiFi
        stopWifiAsync(options?: Wx.PromisifiedOption<StopWifiOption>): Wx.PromisifiedResult<StopWifiOption>;
        startWifiAsync(options?: Wx.PromisifiedOption<StartWifiOption>): Wx.PromisifiedResult<StartWifiOption>;
        setWifiListAsync(options?: Wx.PromisifiedOption<SetWifiListOption>): Wx.PromisifiedResult<SetWifiListOption>;
        getWifiListAsync(options?: Wx.PromisifiedOption<GetWifiListOption>): Wx.PromisifiedResult<GetWifiListOption>;
        getConnectedWifiAsync(
            options?: Wx.PromisifiedOption<GetConnectedWifiOption>
        ): Wx.PromisifiedResult<GetConnectedWifiOption>;
        connectWifiAsync(options?: Wx.PromisifiedOption<ConnectWifiOption>): Wx.PromisifiedResult<ConnectWifiOption>;
        // 设备：日历 - Device/Calendar
        addPhoneRepeatCalendarAsync(
            options?: Wx.PromisifiedOption<AddPhoneRepeatCalendarOption>
        ): Wx.PromisifiedResult<AddPhoneRepeatCalendarOption>;
        addPhoneCalendarAsync(
            options?: Wx.PromisifiedOption<AddPhoneCalendarOption>
        ): Wx.PromisifiedResult<AddPhoneCalendarOption>;
        // 设备：联系人 - Device/Contact
        chooseContactAsync(
            options?: Wx.PromisifiedOption<ChooseContactOption>
        ): Wx.PromisifiedResult<ChooseContactOption>;
        addPhoneContactAsync(
            options?: Wx.PromisifiedOption<AddPhoneContactOption>
        ): Wx.PromisifiedResult<AddPhoneContactOption>;
        // 设备：无障碍 - Device/Accessibility
        checkIsOpenAccessibilityAsync(
            options?: Wx.PromisifiedOption<CheckIsOpenAccessibilityOption>
        ): Wx.PromisifiedResult<CheckIsOpenAccessibilityOption>;
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
        getBLEMTUAsync(options?: Wx.PromisifiedOption<GetBLEMTUOption>): Wx.PromisifiedResult<GetBLEMTUOption>;
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
        isBluetoothDevicePairedAsync(
            options?: Wx.PromisifiedOption<IsBluetoothDevicePairedOption>
        ): Wx.PromisifiedResult<IsBluetoothDevicePairedOption>;
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
        getLocalIPAddressAsync(
            options?: Wx.PromisifiedOption<GetLocalIPAddressOption>
        ): Wx.PromisifiedResult<GetLocalIPAddressOption>;
        // 设备：加密 - Device/Crypto
        getRandomValuesAsync(
            options?: Wx.PromisifiedOption<GetRandomValuesOption>
        ): Wx.PromisifiedResult<GetRandomValuesOption>;
        // 设备：屏幕 - Device/Screen
        setVisualEffectOnCaptureAsync(
            options?: Wx.PromisifiedOption<SetVisualEffectOnCaptureOption>
        ): Wx.PromisifiedResult<SetVisualEffectOnCaptureOption>;
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
        hideKeyboardAsync(options?: Wx.PromisifiedOption<HideKeyboardOption>): Wx.PromisifiedResult<HideKeyboardOption>;
        getSelectedTextRangeAsync(
            options?: Wx.PromisifiedOption<GetSelectedTextRangeOption>
        ): Wx.PromisifiedResult<GetSelectedTextRangeOption>;
        // 设备：电话 - Device/Call
        makePhoneCallAsync(
            options?: Wx.PromisifiedOption<MakePhoneCallOption>
        ): Wx.PromisifiedResult<MakePhoneCallOption>;
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

        // AI：人脸识别 - AI/Face
        stopFaceDetectAsync(
            options?: Wx.PromisifiedOption<StopFaceDetectOption>
        ): Wx.PromisifiedResult<StopFaceDetectOption>;
        initFaceDetectAsync(
            options?: Wx.PromisifiedOption<InitFaceDetectOption>
        ): Wx.PromisifiedResult<InitFaceDetectOption>;
        faceDetectAsync(options?: Wx.PromisifiedOption<FaceDetectOption>): Wx.PromisifiedResult<FaceDetectOption>;

        // 第三方平台 - Ext
        getExtConfigAsync(options?: Wx.PromisifiedOption<GetExtConfigOption>): Wx.PromisifiedResult<GetExtConfigOption>;
    }
}

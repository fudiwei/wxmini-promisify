declare namespace WechatMiniprogram {
    namespace Wx {
        type PromisifiedCallbackOptions<T = any> = Omit<Omit<Omit<T, 'success'>, 'fail'>, 'complete'>;
        type PromisifiedCallbackResult<T = any> = Promise<Parameters<T['success']>[0]>;
    }

    interface Wx {
        // 基础：系统 - Base/System
        getSystemInfoAsyncAsync(
            options?: PromisifiedOptions<GetSystemInfoAsyncOption>
        ): Wx.PromisifiedCallbackResult<GetSystemInfoAsyncOption>;
        getSystemInfoAsync(
            options?: Wx.PromisifiedCallbackOptions<GetSystemInfoOption>
        ): Wx.PromisifiedCallbackResult<GetSystemInfoOption>;
        // 基础：更新 - Base/Update
        updateWeChatAppAsync(
            options?: Wx.PromisifiedCallbackOptions<UpdateWeChatAppOption>
        ): Wx.PromisifiedCallbackResult<UpdateWeChatAppOption>;
        // 基础：调试 - Base/Debug
        setEnableDebugAsync(
            options?: Wx.PromisifiedCallbackOptions<SetEnableDebugOption>
        ): Wx.PromisifiedCallbackResult<SetEnableDebugOption>;

        // 路由 - Route
        reLaunchAsync(
            options?: Wx.PromisifiedCallbackOptions<ReLaunchOption>
        ): Wx.PromisifiedCallbackResult<ReLaunchOption>;
        switchTabAsync(
            options?: Wx.PromisifiedCallbackOptions<SwitchTabOption>
        ): Wx.PromisifiedCallbackResult<SwitchTabOption>;
        redirectToAsync(
            options?: Wx.PromisifiedCallbackOptions<RedirectToOption>
        ): Wx.PromisifiedCallbackResult<RedirectToOption>;
        navigateToAsync(
            options?: Wx.PromisifiedCallbackOptions<NavigateToOption>
        ): Wx.PromisifiedCallbackResult<NavigateToOption>;
        navigateBackAsync(
            options?: Wx.PromisifiedCallbackOptions<NavigateBackOption>
        ): Wx.PromisifiedCallbackResult<NavigateBackOption>;

        // 跳转 - Navigate
        navigateToMiniProgramAsync(
            options?: Wx.PromisifiedCallbackOptions<NavigateToMiniProgramOption>
        ): Wx.PromisifiedCallbackResult<NavigateToMiniProgramOption>;
        navigateBackMiniProgramAsync(
            options?: Wx.PromisifiedCallbackOptions<NavigateBackMiniProgramOption>
        ): Wx.PromisifiedCallbackResult<NavigateBackMiniProgramOption>;
        exitMiniProgramAsync(
            options?: Wx.PromisifiedCallbackOptions<ExitMiniProgramOption>
        ): Wx.PromisifiedCallbackResult<ExitMiniProgramOption>;

        // 转发 - Share
        updateShareMenuAsync(
            options?: Wx.PromisifiedCallbackOptions<UpdateShareMenuOption>
        ): Wx.PromisifiedCallbackResult<UpdateShareMenuOption>;
        showShareMenuAsync(
            options?: Wx.PromisifiedCallbackOptions<ShowShareMenuOption>
        ): Wx.PromisifiedCallbackResult<ShowShareMenuOption>;
        showShareImageMenuMenu(
            options?: Wx.PromisifiedCallbackOptions<ShowShareImageMenuOption>
        ): Wx.PromisifiedCallbackResult<ShowShareImageMenuOption>;
        shareVideoMessageAsync(
            options?: Wx.PromisifiedCallbackOptions<ShareVideoMessageOption>
        ): Wx.PromisifiedCallbackResult<ShareVideoMessageOption>;
        shareFileMessageAsync(
            options?: Wx.PromisifiedCallbackOptions<ShareFileMessageOption>
        ): Wx.PromisifiedCallbackResult<ShareFileMessageOption>;
        hideShareMenuAsync(
            options?: Wx.PromisifiedCallbackOptions<HideShareMenuOption>
        ): Wx.PromisifiedCallbackResult<HideShareMenuOption>;
        getShareInfoAsync(
            options?: Wx.PromisifiedCallbackOptions<GetShareInfoOption>
        ): Wx.PromisifiedCallbackResult<GetShareInfoOption>;
        authPrivateMessageAsync(
            options?: Wx.PromisifiedCallbackOptions<AuthPrivateMessageOption>
        ): Wx.PromisifiedCallbackResult<AuthPrivateMessageOption>;

        // 界面：交互 - UI/Interaction
        showToastAsync(
            options?: Wx.PromisifiedCallbackOptions<ShowToastOption>
        ): Wx.PromisifiedCallbackResult<ShowToastOption>;
        showModalAsync(
            options?: Wx.PromisifiedCallbackOptions<ShowModalOption>
        ): Wx.PromisifiedCallbackResult<ShowModalOption>;
        showLoadingAsync(
            options?: Wx.PromisifiedCallbackOptions<ShowLoadingOption>
        ): Wx.PromisifiedCallbackResult<ShowLoadingOption>;
        showActionSheetAsync(
            options?: Wx.PromisifiedCallbackOptions<ShowActionSheetOption>
        ): Wx.PromisifiedCallbackResult<ShowActionSheetOption>;
        hideToastAsync(
            options?: Wx.PromisifiedCallbackOptions<HideToastOption>
        ): Wx.PromisifiedCallbackResult<HideToastOption>;
        hideLoadingAsync(
            options?: Wx.PromisifiedCallbackOptions<HideLoadingOption>
        ): Wx.PromisifiedCallbackResult<HideLoadingOption>;
        enableAlertBeforeUnloadAsync(
            options?: Wx.PromisifiedCallbackOptions<EnableAlertBeforeUnloadOption>
        ): Wx.PromisifiedCallbackResult<EnableAlertBeforeUnloadOption>;
        disableAlertBeforeUnloadAsync(
            options?: Wx.PromisifiedCallbackOptions<DisableAlertBeforeUnloadOption>
        ): Wx.PromisifiedCallbackResult<DisableAlertBeforeUnloadOption>;
        // 界面：导航栏 - UI/Navigation
        showNavigationBarLoadingAsync(
            options?: Wx.PromisifiedCallbackOptions<ShowNavigationBarLoadingOption>
        ): Wx.PromisifiedCallbackResult<ShowNavigationBarLoadingOption>;
        setNavigationBarTitleAsync(
            options?: Wx.PromisifiedCallbackOptions<SetNavigationBarTitleOption>
        ): Wx.PromisifiedCallbackResult<SetNavigationBarTitleOption>;
        setNavigationBarColorAsync(
            options?: Wx.PromisifiedCallbackOptions<SetNavigationBarColorOption>
        ): Wx.PromisifiedCallbackResult<SetNavigationBarColorOption>;
        hideNavigationBarLoadingAsync(
            options?: Wx.PromisifiedCallbackOptions<HideNavigationBarLoadingOption>
        ): Wx.PromisifiedCallbackResult<HideNavigationBarLoadingOption>;
        hideHomeButtonAsync(
            options?: Wx.PromisifiedCallbackOptions<HideHomeButtonOption>
        ): Wx.PromisifiedCallbackResult<HideHomeButtonOption>;
        // 界面：背景 - UI/Background
        setBackgroundTextStyleAsync(
            options?: Wx.PromisifiedCallbackOptions<SetBackgroundTextStyleOption>
        ): Wx.PromisifiedCallbackResult<SetBackgroundTextStyleOption>;
        setBackgroundColorAsync(
            options?: Wx.PromisifiedCallbackOptions<SetBackgroundColorOption>
        ): Wx.PromisifiedCallbackResult<SetBackgroundColorOption>;
        // 界面：TabBar - UI/TabBar
        showTabBarRedDotAsync(
            options?: Wx.PromisifiedCallbackOptions<ShowTabBarRedDotOption>
        ): Wx.PromisifiedCallbackResult<ShowTabBarRedDotOption>;
        showTabBarAsync(
            options?: Wx.PromisifiedCallbackOptions<ShowTabBarOption>
        ): Wx.PromisifiedCallbackResult<ShowTabBarOption>;
        setTabBarStyleAsync(
            options?: Wx.PromisifiedCallbackOptions<SetTabBarStyleOption>
        ): Wx.PromisifiedCallbackResult<SetTabBarStyleOption>;
        setTabBarItemAsync(
            options?: Wx.PromisifiedCallbackOptions<SetTabBarItemOption>
        ): Wx.PromisifiedCallbackResult<SetTabBarItemOption>;
        setTabBarBadgeAsync(
            options?: Wx.PromisifiedCallbackOptions<SetTabBarBadgeOption>
        ): Wx.PromisifiedCallbackResult<SetTabBarBadgeOption>;
        removeTabBarBadgeAsync(
            options?: Wx.PromisifiedCallbackOptions<RemoveTabBarBadgeOption>
        ): Wx.PromisifiedCallbackResult<RemoveTabBarBadgeOption>;
        hideTabBarRedDotAsync(
            options?: Wx.PromisifiedCallbackOptions<HideTabBarRedDotOption>
        ): Wx.PromisifiedCallbackResult<HideTabBarRedDotOption>;
        hideTabBarAsync(
            options?: Wx.PromisifiedCallbackOptions<HideTabBarOption>
        ): Wx.PromisifiedCallbackResult<HideTabBarOption>;
        // 界面：字体 - UI/Font
        loadFontFaceAsync(
            options?: Wx.PromisifiedCallbackOptions<LoadFontFaceOption>
        ): Wx.PromisifiedCallbackResult<LoadFontFaceOption>;
        // 界面：下拉刷新 - UI/PullDown
        startPullDownRefreshAsync(
            options?: Wx.PromisifiedCallbackOptions<StartPullDownRefreshOption>
        ): Wx.PromisifiedCallbackResult<StartPullDownRefreshOption>;
        stopPullDownRefreshAsync(
            options?: Wx.PromisifiedCallbackOptions<StopPullDownRefreshOption>
        ): Wx.PromisifiedCallbackResult<StopPullDownRefreshOption>;
        // 界面：滚动 - UI/Scroll
        pageScrollToAsync(
            options?: Wx.PromisifiedCallbackOptions<PageScrollToOption>
        ): Wx.PromisifiedCallbackResult<PageScrollToOption>;
        // 界面：置顶 - UI/TopBar
        setTopBarTextAsync(
            options?: Wx.PromisifiedCallbackOptions<SetTopBarTextOption>
        ): Wx.PromisifiedCallbackResult<SetTopBarTextOption>;
        // 界面：窗口 - UI/Window
        setWindowSizeAsync(
            options?: Wx.PromisifiedCallbackOptions<SetWindowSizeOption>
        ): Wx.PromisifiedCallbackResult<SetWindowSizeOption>;

        // 网络：发起请求 - Network/Request
        requestAsync(
            options?: Wx.PromisifiedCallbackOptions<RequestOption>
        ): Wx.PromisifiedCallbackResult<RequestOption>;
        requestAsync<T>(options?: Wx.PromisifiedCallbackOptions<RequestOption<T>>): Promise<RequestOption<T>>;
        // 网络：下载 - Network/Download
        downloadFileAsync(
            options?: Wx.PromisifiedCallbackOptions<DownloadFileOption>
        ): Wx.PromisifiedCallbackResult<DownloadFileOption>;
        // 网络：上传 - Network/Upload
        uploadFileAsync(
            options?: Wx.PromisifiedCallbackOptions<UploadFileOption>
        ): Wx.PromisifiedCallbackResult<UploadFileOption>;
        // 网络：WebSocket - Network/WebSocket
        sendSocketMessageAsync(
            options?: Wx.PromisifiedCallbackOptions<SendSocketMessageOption>
        ): Wx.PromisifiedCallbackResult<SendSocketMessageOption>;
        connectSocketAsync(
            options?: Wx.PromisifiedCallbackOptions<ConnectSocketOption>
        ): Wx.PromisifiedCallbackResult<ConnectSocketOption>;
        closeSocketAsync(
            options?: Wx.PromisifiedCallbackOptions<CloseSocketOption>
        ): Wx.PromisifiedCallbackResult<CloseSocketOption>;
        // 网络：mDNS - Network/mDNS
        stopLocalServiceDiscoveryAsync(
            options?: Wx.PromisifiedCallbackOptions<StopLocalServiceDiscoveryOption>
        ): Wx.PromisifiedCallbackResult<StopLocalServiceDiscoveryOption>;
        startLocalServiceDiscoveryAsync(
            options?: Wx.PromisifiedCallbackOptions<StartLocalServiceDiscoveryOption>
        ): Wx.PromisifiedCallbackResult<StartLocalServiceDiscoveryOption>;

        // 支付 - Payment
        requestPaymentAsync(
            options?: Wx.PromisifiedCallbackOptions<RequestPaymentOption>
        ): Wx.PromisifiedCallbackResult<RequestPaymentOption>;
        requestOrderPaymentAsync(
            options?: Wx.PromisifiedCallbackOptions<RequestOrderPaymentOption>
        ): Wx.PromisifiedCallbackResult<RequestOrderPaymentOption>;

        // 数据缓存：存储 - Storage/Storage
        setStorageAsync(
            options?: Wx.PromisifiedCallbackOptions<SetStorageOption>
        ): Wx.PromisifiedCallbackResult<SetStorageOption>;
        removeStorageAsync(
            options?: Wx.PromisifiedCallbackOptions<RemoveStorageOption>
        ): Wx.PromisifiedCallbackResult<RemoveStorageOption>;
        getStorageInfoAsync(
            options?: Wx.PromisifiedCallbackOptions<GetStorageInfoOption>
        ): Wx.PromisifiedCallbackResult<GetStorageInfoOption>;
        getStorageAsync(
            options?: Wx.PromisifiedCallbackOptions<GetStorageOption>
        ): Wx.PromisifiedCallbackResult<GetStorageOption>;
        getStorageAsync<T>(options?: Wx.PromisifiedCallbackOptions<GetStorageOption<T>>): Promise<GetStorageOption<T>>;
        clearStorageAsync(
            options?: Wx.PromisifiedCallbackOptions<ClearStorageOption>
        ): Wx.PromisifiedCallbackResult<ClearStorageOption>;
        // 数据缓存：周期性更新 - Storage/BackgroundFetch
        setBackgroundFetchTokenAsync(
            options?: Wx.PromisifiedCallbackOptions<SetBackgroundFetchTokenOption>
        ): Wx.PromisifiedCallbackResult<SetBackgroundFetchTokenOption>;
        getBackgroundFetchTokenAsync(
            options?: Wx.PromisifiedCallbackOptions<GetBackgroundFetchTokenOption>
        ): Wx.PromisifiedCallbackResult<GetBackgroundFetchTokenOption>;
        getBackgroundFetchDataAsync(
            options?: Wx.PromisifiedCallbackOptions<GetBackgroundFetchDataOption>
        ): Wx.PromisifiedCallbackResult<GetBackgroundFetchDataOption>;

        // 画布 - Canvas
        canvasToTempFilePathAsync(
            options?: Wx.PromisifiedCallbackOptions<CanvasToTempFilePathOption>,
            component?: Component.TrivialInstance | Page.TrivialInstance
        ): Promise<CanvasToTempFilePathOption>;
        canvasPutImageDataAsync(
            options?: Wx.PromisifiedCallbackOptions<CanvasPutImageDataOption>
        ): Wx.PromisifiedCallbackResult<CanvasPutImageDataOption>;
        canvasGetImageDataAync(
            options?: Wx.PromisifiedCallbackOptions<CanvasGetImageDataOption>
        ): Wx.PromisifiedCallbackResult<CanvasGetImageDataOption>;

        // 媒体：图片 - Media/Image
        saveImageToPhotosAlbumAsync(
            options?: Wx.PromisifiedCallbackOptions<SaveImageToPhotosAlbumOption>
        ): Wx.PromisifiedCallbackResult<SaveImageToPhotosAlbumOption>;
        previewMediaAsync(
            options?: Wx.PromisifiedCallbackOptions<PreviewMediaOption>
        ): Wx.PromisifiedCallbackResult<PreviewMediaOption>;
        previewImageAsync(
            options?: Wx.PromisifiedCallbackOptions<PreviewImageOption>
        ): Wx.PromisifiedCallbackResult<PreviewImageOption>;
        getImageInfoAsync(
            options?: Wx.PromisifiedCallbackOptions<GetImageInfoOption>
        ): Wx.PromisifiedCallbackResult<GetImageInfoOption>;
        compressImageAsync(
            options?: Wx.PromisifiedCallbackOptions<CompressImageOption>
        ): Wx.PromisifiedCallbackResult<CompressImageOption>;
        chooseMessageFileAsync(
            options?: Wx.PromisifiedCallbackOptions<ChooseMessageFileOption>
        ): Wx.PromisifiedCallbackResult<ChooseMessageFileOption>;
        chooseImageAsync(
            options?: Wx.PromisifiedCallbackOptions<ChooseImageOption>
        ): Wx.PromisifiedCallbackResult<ChooseImageOption>;
        // 媒体：视频 - Media/Video
        saveVideoToPhotosAlbumAsync(
            options?: Wx.PromisifiedCallbackOptions<SaveVideoToPhotosAlbumOption>
        ): Wx.PromisifiedCallbackResult<SaveVideoToPhotosAlbumOption>;
        openVideoEditorAsync(
            options?: Wx.PromisifiedCallbackOptions<OpenVideoEditorOption>
        ): Wx.PromisifiedCallbackResult<OpenVideoEditorOption>;
        getVideoInfoAsync(
            options?: Wx.PromisifiedCallbackOptions<GetVideoInfoOption>
        ): Wx.PromisifiedCallbackResult<GetVideoInfoOption>;
        compressVideoAsync(
            options?: Wx.PromisifiedCallbackOptions<CompressVideoOption>
        ): Wx.PromisifiedCallbackResult<CompressVideoOption>;
        chooseVideoAsync(
            options?: Wx.PromisifiedCallbackOptions<ChooseVideoOption>
        ): Wx.PromisifiedCallbackResult<ChooseVideoOption>;
        chooseMediaAsync(
            options?: Wx.PromisifiedCallbackOptions<ChooseMediaOption>
        ): Wx.PromisifiedCallbackResult<ChooseMediaOption>;
        // 媒体：音频 - Media/Audio&Voice
        stopVoiceAsync(
            options?: Wx.PromisifiedCallbackOptions<StopVoiceOption>
        ): Wx.PromisifiedCallbackResult<StopVoiceOption>;
        setInnerAudioOptionAsync(
            options?: Wx.PromisifiedCallbackOptions<SetInnerAudioOption>
        ): Wx.PromisifiedCallbackResult<SetInnerAudioOption>;
        playVoiceAsync(
            options?: Wx.PromisifiedCallbackOptions<PlayVoiceOption>
        ): Wx.PromisifiedCallbackResult<PlayVoiceOption>;
        pauseVoiceAsync(
            options?: Wx.PromisifiedCallbackOptions<PauseVoiceOption>
        ): Wx.PromisifiedCallbackResult<PauseVoiceOption>;
        getAvailableAudioSourcesAsync(
            options?: Wx.PromisifiedCallbackOptions<GetAvailableAudioSourcesOption>
        ): Wx.PromisifiedCallbackResult<GetAvailableAudioSourcesOption>;
        // 媒体：背景音频 - Media/BackgroundAudio
        stopBackgroundAudioAsync(
            options?: Wx.PromisifiedCallbackOptions<StopBackgroundAudioOption>
        ): Wx.PromisifiedCallbackResult<StopBackgroundAudioOption>;
        seekBackgroundAudioAsync(
            options?: Wx.PromisifiedCallbackOptions<SeekBackgroundAudioOption>
        ): Wx.PromisifiedCallbackResult<SeekBackgroundAudioOption>;
        playBackgroundAudioAsync(
            options?: Wx.PromisifiedCallbackOptions<PlayBackgroundAudioOption>
        ): Wx.PromisifiedCallbackResult<PlayBackgroundAudioOption>;
        pauseBackgroundAudioAsync(
            options?: Wx.PromisifiedCallbackOptions<PauseBackgroundAudioOption>
        ): Wx.PromisifiedCallbackResult<PauseBackgroundAudioOption>;
        getBackgroundAudioPlayerStateAsync(
            options?: Wx.PromisifiedCallbackOptions<GetBackgroundAudioPlayerStateOption>
        ): Wx.PromisifiedCallbackResult<GetBackgroundAudioPlayerStateOption>;
        // 媒体：录音 - Media/Record
        stopRecordAsync(
            options?: Wx.PromisifiedCallbackOptions<WxStopRecordOption>
        ): Wx.PromisifiedCallbackResult<WxStopRecordOption>;
        startRecordAsync(
            options?: Wx.PromisifiedCallbackOptions<WxStartRecordOption>
        ): Wx.PromisifiedCallbackResult<WxStartRecordOption>;
        // 媒体：实时语音 - Media/VoIP
        updateVoIPChatMuteConfigAsync(
            options?: Wx.PromisifiedCallbackOptions<UpdateVoIPChatMuteConfigOption>
        ): Wx.PromisifiedCallbackResult<UpdateVoIPChatMuteConfigOption>;
        subscribeVoIPVideoMembersAsync(
            options?: Wx.PromisifiedCallbackOptions<SubscribeVoIPVideoMembersOption>
        ): Wx.PromisifiedCallbackResult<SubscribeVoIPVideoMembersOption>;
        joinVoIPChatAsync(
            options?: Wx.PromisifiedCallbackOptions<JoinVoIPChatOption>
        ): Wx.PromisifiedCallbackResult<JoinVoIPChatOption>;
        exitVoIPChatAsync(
            options?: Wx.PromisifiedCallbackOptions<ExitVoIPChatOption>
        ): Wx.PromisifiedCallbackResult<ExitVoIPChatOption>;

        // 位置 - Location
        stopLocationUpdateAsync(
            options?: Wx.PromisifiedCallbackOptions<StopLocationUpdateOption>
        ): Wx.PromisifiedCallbackResult<StopLocationUpdateOption>;
        startLocationUpdateBackgroundAsync(
            options?: Wx.PromisifiedCallbackOptions<StartLocationUpdateBackgroundOption>
        ): Wx.PromisifiedCallbackResult<StartLocationUpdateBackgroundOption>;
        startLocationUpdateAsync(
            options?: Wx.PromisifiedCallbackOptions<StartLocationUpdateOption>
        ): Wx.PromisifiedCallbackResult<StartLocationUpdateOption>;
        openLocationAsync(
            options?: Wx.PromisifiedCallbackOptions<OpenLocationOption>
        ): Wx.PromisifiedCallbackResult<OpenLocationOption>;
        getLocationAsync(
            options?: Wx.PromisifiedCallbackOptions<GetLocationOption>
        ): Wx.PromisifiedCallbackResult<GetLocationOption>;
        choosePoiAsync(
            options?: Wx.PromisifiedCallbackOptions<ChoosePoiOption>
        ): Wx.PromisifiedCallbackResult<ChoosePoiOption>;
        chooseLocationAsync(
            options?: Wx.PromisifiedCallbackOptions<ChooseLocationOption>
        ): Wx.PromisifiedCallbackResult<ChooseLocationOption>;

        // 文件 File
        saveFileToDiskAsync(
            options?: Wx.PromisifiedCallbackOptions<SaveFileToDiskOption>
        ): Wx.PromisifiedCallbackResult<SaveFileToDiskOption>;
        saveFileAsync(
            options?: Wx.PromisifiedCallbackOptions<WxSaveFileOption>
        ): Wx.PromisifiedCallbackResult<WxSaveFileOption>;
        removeSavedFileAsync(
            options?: Wx.PromisifiedCallbackOptions<WxRemoveSavedFileOption>
        ): Wx.PromisifiedCallbackResult<WxRemoveSavedFileOption>;
        openDocumentAsync(
            options?: Wx.PromisifiedCallbackOptions<OpenDocumentOption>
        ): Wx.PromisifiedCallbackResult<OpenDocumentOption>;
        getSavedFileListAsync(
            options?: Wx.PromisifiedCallbackOptions<WxGetSavedFileListOption>
        ): Wx.PromisifiedCallbackResult<WxGetSavedFileListOption>;
        getSavedFileInfoAsync(
            options?: Wx.PromisifiedCallbackOptions<GetSavedFileInfoOption>
        ): Wx.PromisifiedCallbackResult<GetSavedFileInfoOption>;
        getFileInfoAsync(
            options?: Wx.PromisifiedCallbackOptions<WxGetFileInfoOption>
        ): Wx.PromisifiedCallbackResult<WxGetFileInfoOption>;

        // 开放接口：登录 - OpenAPI/Login
        loginAsync(options?: Wx.PromisifiedCallbackOptions<LoginOption>): Wx.PromisifiedCallbackResult<LoginOption>;
        checkSessionAsync(
            options?: Wx.PromisifiedCallbackOptions<CheckSessionOption>
        ): Wx.PromisifiedCallbackResult<CheckSessionOption>;
        // 开放接口：用户信息 - OpenAPI/UserInfo
        getUserProfileAsync(
            options?: Wx.PromisifiedCallbackOptions<GetUserProfileOption>
        ): Wx.PromisifiedCallbackResult<GetUserProfileOption>;
        getUserInfoAsync(
            options?: Wx.PromisifiedCallbackOptions<GetUserInfoOption>
        ): Wx.PromisifiedCallbackResult<GetUserInfoOption>;
        // 开放接口：授权 - OpenAPI/Authorization
        authorizeAsync(
            options?: Wx.PromisifiedCallbackOptions<AuthorizeOption>
        ): Wx.PromisifiedCallbackResult<AuthorizeOption>;
        // 开放接口：设置 - OpenAPI/Setting
        openSettingAsync(
            options?: Wx.PromisifiedCallbackOptions<OpenSettingOption>
        ): Wx.PromisifiedCallbackResult<OpenSettingOption>;
        getSettingAsync(
            options?: Wx.PromisifiedCallbackOptions<GetSettingOption>
        ): Wx.PromisifiedCallbackResult<GetSettingOption>;
        // 开放接口：收货地址 - OpenAPI/Address
        chooseAddressAsync(
            options?: Wx.PromisifiedCallbackOptions<ChooseAddressOption>
        ): Wx.PromisifiedCallbackResult<ChooseAddressOption>;
        // 开放接口：卡券 - OpenAPI/Card
        openCardAsync(
            options?: Wx.PromisifiedCallbackOptions<OpenCardOption>
        ): Wx.PromisifiedCallbackResult<OpenCardOption>;
        addCardAsync(
            options?: Wx.PromisifiedCallbackOptions<AddCardOption>
        ): Wx.PromisifiedCallbackResult<AddCardOption>;
        // 开放接口：发票 - OpenAPI/Invoice
        chooseInvoiceTitleAsync(
            options?: Wx.PromisifiedCallbackOptions<ChooseInvoiceTitleOption>
        ): Wx.PromisifiedCallbackResult<ChooseInvoiceTitleOption>;
        chooseInvoiceAsync(
            options?: Wx.PromisifiedCallbackOptions<ChooseInvoiceOption>
        ): Wx.PromisifiedCallbackResult<ChooseInvoiceOption>;
        // 开放接口：生物认证 - OpenAPI/SoterAuthentication
        startSoterAuthenticationAsync(
            options?: Wx.PromisifiedCallbackOptions<StartSoterAuthenticationOption>
        ): Wx.PromisifiedCallbackResult<StartSoterAuthenticationOption>;
        checkIsSupportSoterAuthenticationAsync(
            options?: Wx.PromisifiedCallbackOptions<CheckIsSupportSoterAuthenticationOption>
        ): Promise<CheckIsSupportSoterAuthenticationOption>;
        checkIsSoterEnrolledInDeviceAsync(
            options?: Wx.PromisifiedCallbackOptions<CheckIsSoterEnrolledInDeviceOption>
        ): Wx.PromisifiedCallbackResult<CheckIsSoterEnrolledInDeviceOption>;
        // 开放接口：微信运动 - OpenAPI/RunData
        shareToWeRunAsync(
            options?: Wx.PromisifiedCallbackOptions<ShareToWeRunOption>
        ): Wx.PromisifiedCallbackResult<ShareToWeRunOption>;
        getWeRunDataAsync(
            options?: Wx.PromisifiedCallbackOptions<GetWeRunDataOption>
        ): Wx.PromisifiedCallbackResult<GetWeRunDataOption>;
        // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
        requestSubscribeMessageAsync(
            options?: Wx.PromisifiedCallbackOptions<RequestSubscribeMessageOption>
        ): Wx.PromisifiedCallbackResult<RequestSubscribeMessageOption>;
        // 开放接口：微信红包 - OpenAPI/RedPackage
        showRedPackgeAsync(
            options?: Wx.PromisifiedCallbackOptions<ShowRedPackageOption>
        ): Wx.PromisifiedCallbackResult<ShowRedPackageOption>;
        // 开发接口：收藏 - OpenAPI/Favorites
        addVideoToFavoritesAsync(
            options?: Wx.PromisifiedCallbackOptions<AddVideoToFavoritesOption>
        ): Wx.PromisifiedCallbackResult<AddVideoToFavoritesOption>;
        addFileToFavoritesAsync(
            options?: Wx.PromisifiedCallbackOptions<AddFileToFavoritesOption>
        ): Wx.PromisifiedCallbackResult<AddFileToFavoritesOption>;
        // 开发接口：视频号 - OpenAPI/Channels
        openChannelsLiveAsync(
            options?: Wx.PromisifiedCallbackOptions<OpenChannelsLiveOption>
        ): Wx.PromisifiedCallbackResult<OpenChannelsLiveOption>;
        getChannelsLiveInfoAsync(
            options?: Wx.PromisifiedCallbackOptions<GetChannelsLiveInfoOption>
        ): Wx.PromisifiedCallbackResult<GetChannelsLiveInfoOption>;
        // 开发接口：微信群 - OpenAPI/Group
        getGroupEnterInfoAsync(
            options?: Wx.PromisifiedCallbackOptions<GetGroupEnterInfoOption>
        ): Wx.PromisifiedCallbackResult<GetGroupEnterInfoOption>;

        // 设备：iBeacon - Device/iBeacon
        stopBeaconDiscoveryAsync(
            options?: Wx.PromisifiedCallbackOptions<StopBeaconDiscoveryOption>
        ): Wx.PromisifiedCallbackResult<StopBeaconDiscoveryOption>;
        startBeaconDiscoveryAsync(
            options?: Wx.PromisifiedCallbackOptions<StartBeaconDiscoveryOption>
        ): Wx.PromisifiedCallbackResult<StartBeaconDiscoveryOption>;
        getBeaconsAsync(
            options?: Wx.PromisifiedCallbackOptions<GetBeaconsOption>
        ): Wx.PromisifiedCallbackResult<GetBeaconsOption>;
        // 设备：NFC - Device/NFC
        stopHCEAsync(
            options?: Wx.PromisifiedCallbackOptions<StopHCEOption>
        ): Wx.PromisifiedCallbackResult<StopHCEOption>;
        startHCEAsync(
            options?: Wx.PromisifiedCallbackOptions<StartHCEOption>
        ): Wx.PromisifiedCallbackResult<StartHCEOption>;
        sendHCEMessageAsync(
            options?: Wx.PromisifiedCallbackOptions<SendHCEMessageOption>
        ): Wx.PromisifiedCallbackResult<SendHCEMessageOption>;
        getHCEStateAsync(
            options?: Wx.PromisifiedCallbackOptions<GetHCEStateOption>
        ): Wx.PromisifiedCallbackResult<GetHCEStateOption>;
        // 设备：WiFi - Device/WiFi
        stopWifiAsync(
            options?: Wx.PromisifiedCallbackOptions<StopWifiOption>
        ): Wx.PromisifiedCallbackResult<StopWifiOption>;
        startWifiAsync(
            options?: Wx.PromisifiedCallbackOptions<StartWifiOption>
        ): Wx.PromisifiedCallbackResult<StartWifiOption>;
        setWifiListAsync(
            options?: Wx.PromisifiedCallbackOptions<SetWifiListOption>
        ): Wx.PromisifiedCallbackResult<SetWifiListOption>;
        getWifiListAsync(
            options?: Wx.PromisifiedCallbackOptions<GetWifiListOption>
        ): Wx.PromisifiedCallbackResult<GetWifiListOption>;
        getConnectedWifiAsync(
            options?: Wx.PromisifiedCallbackOptions<GetConnectedWifiOption>
        ): Wx.PromisifiedCallbackResult<GetConnectedWifiOption>;
        connectWifiAsync(
            options?: Wx.PromisifiedCallbackOptions<ConnectWifiOption>
        ): Wx.PromisifiedCallbackResult<ConnectWifiOption>;
        // 设备：日历 - Device/Calendar
        addPhoneRepeatCalendarAsync(
            options?: Wx.PromisifiedCallbackOptions<AddPhoneRepeatCalendarOption>
        ): Wx.PromisifiedCallbackResult<AddPhoneRepeatCalendarOption>;
        addPhoneCalendarAsync(
            options?: Wx.PromisifiedCallbackOptions<AddPhoneCalendarOption>
        ): Wx.PromisifiedCallbackResult<AddPhoneCalendarOption>;
        // 设备：联系人 - Device/Contact
        searchContactsAsync(
            options?: Wx.PromisifiedCallbackOptions<SearchContactsOption>
        ): Wx.PromisifiedCallbackResult<SearchContactsOption>;
        chooseContactAsync(
            options?: Wx.PromisifiedCallbackOptions<ChooseContactOption>
        ): Wx.PromisifiedCallbackResult<ChooseContactOption>;
        addPhoneContactAsync(
            options?: Wx.PromisifiedCallbackOptions<AddPhoneContactOption>
        ): Wx.PromisifiedCallbackResult<AddPhoneContactOption>;
        // 设备：无障碍 - Device/Accessibility
        checkIsOpenAccessibilityAsync(
            options?: Wx.PromisifiedCallbackOptions<CheckIsOpenAccessibilityOption>
        ): Wx.PromisifiedCallbackResult<CheckIsOpenAccessibilityOption>;
        // 设备：低功耗蓝牙 - Device/BLE
        setBLEMTUAsync(
            options?: Wx.PromisifiedCallbackOptions<SetBLEMTUOption>
        ): Wx.PromisifiedCallbackResult<SetBLEMTUOption>;
        makeBluetoothPairAsync(
            options?: Wx.PromisifiedCallbackOptions<MakeBluetoothPairOption>
        ): Wx.PromisifiedCallbackResult<MakeBluetoothPairOption>;
        writeBLECharacteristicValueAsync(
            options?: Wx.PromisifiedCallbackOptions<WriteBLECharacteristicValueOption>
        ): Wx.PromisifiedCallbackResult<WriteBLECharacteristicValueOption>;
        readBLECharacteristicValueAsync(
            options?: Wx.PromisifiedCallbackOptions<ReadBLECharacteristicValueOption>
        ): Wx.PromisifiedCallbackResult<ReadBLECharacteristicValueOption>;
        notifyBLECharacteristicValueChangeAsync(
            options?: Wx.PromisifiedCallbackOptions<NotifyBLECharacteristicValueChangeOption>
        ): Wx.PromisifiedCallbackResult<NotifyBLECharacteristicValueChangeOption>;
        getBLEDeviceServicesAsync(
            options?: Wx.PromisifiedCallbackOptions<GetBLEDeviceServicesOption>
        ): Wx.PromisifiedCallbackResult<GetBLEDeviceServicesOption>;
        getBLEDeviceCharacteristicsAsync(
            options?: Wx.PromisifiedCallbackOptions<GetBLEDeviceCharacteristicsOption>
        ): Wx.PromisifiedCallbackResult<GetBLEDeviceCharacteristicsOption>;
        createBLEConnectionAsync(
            options?: Wx.PromisifiedCallbackOptions<CreateBLEConnectionOption>
        ): Wx.PromisifiedCallbackResult<CreateBLEConnectionOption>;
        closeBLEConnectionAsync(
            options?: Wx.PromisifiedCallbackOptions<CloseBLEConnectionOption>
        ): Wx.PromisifiedCallbackResult<CloseBLEConnectionOption>;
        // 设备：蓝牙 - Device/Bluetooth
        stopBluetoothDevicesDiscoveryAsync(
            options?: Wx.PromisifiedCallbackOptions<StopBluetoothDevicesDiscoveryOption>
        ): Wx.PromisifiedCallbackResult<StopBluetoothDevicesDiscoveryOption>;
        startBluetoothDevicesDiscoveryAsync(
            options?: Wx.PromisifiedCallbackOptions<StartBluetoothDevicesDiscoveryOption>
        ): Wx.PromisifiedCallbackResult<StartBluetoothDevicesDiscoveryOption>;
        openBluetoothAdapterAsync(
            options?: Wx.PromisifiedCallbackOptions<OpenBluetoothAdapterOption>
        ): Wx.PromisifiedCallbackResult<OpenBluetoothAdapterOption>;
        getConnectedBluetoothDevicesAsync(
            options?: Wx.PromisifiedCallbackOptions<GetConnectedBluetoothDevicesOption>
        ): Wx.PromisifiedCallbackResult<GetConnectedBluetoothDevicesOption>;
        getBluetoothDevicesAsync(
            options?: Wx.PromisifiedCallbackOptions<GetBluetoothDevicesOption>
        ): Wx.PromisifiedCallbackResult<GetBluetoothDevicesOption>;
        getBluetoothAdapterStateAsync(
            options?: Wx.PromisifiedCallbackOptions<GetBluetoothAdapterStateOption>
        ): Wx.PromisifiedCallbackResult<GetBluetoothAdapterStateOption>;
        closeBluetoothAdapterAsync(
            options?: Wx.PromisifiedCallbackOptions<CloseBluetoothAdapterOption>
        ): Wx.PromisifiedCallbackResult<CloseBluetoothAdapterOption>;
        // 设备：电量 - Device/Battery
        getBatteryInfoAsync(
            options?: Wx.PromisifiedCallbackOptions<GetBatteryInfoOption>
        ): Wx.PromisifiedCallbackResult<GetBatteryInfoOption>;
        // 设备：剪贴板 - Device/Clipboard
        setClipboardDataAsync(
            options?: Wx.PromisifiedCallbackOptions<SetClipboardDataOption>
        ): Wx.PromisifiedCallbackResult<SetClipboardDataOption>;
        getClipboardDataAsync(
            options?: Wx.PromisifiedCallbackOptions<GetClipboardDataOption>
        ): Wx.PromisifiedCallbackResult<GetClipboardDataOption>;
        // 设备：网络 - Device/Newwork
        getNetworkTypeAsync(
            options?: Wx.PromisifiedCallbackOptions<GetNetworkTypeOption>
        ): Wx.PromisifiedCallbackResult<GetNetworkTypeOption>;
        // 设备：加密 - Device/Crypto
        getRandomValuesAsync(
            options?: Wx.PromisifiedCallbackOptions<GetRandomValuesOption>
        ): Wx.PromisifiedCallbackResult<GetRandomValuesOption>;
        // 设备：屏幕 - Device/Screen
        setScreenBrightnessAsync(
            options?: Wx.PromisifiedCallbackOptions<SetScreenBrightnessOption>
        ): Wx.PromisifiedCallbackResult<SetScreenBrightnessOption>;
        setKeepScreenOnAsync(
            options?: Wx.PromisifiedCallbackOptions<SetKeepScreenOnOption>
        ): Wx.PromisifiedCallbackResult<SetKeepScreenOnOption>;
        getScreenBrightnessAsync(
            options?: Wx.PromisifiedCallbackOptions<GetScreenBrightnessOption>
        ): Wx.PromisifiedCallbackResult<GetScreenBrightnessOption>;
        // 设备：键盘 - Device/Keyword
        hideKeyboardAsync(
            options?: Wx.PromisifiedCallbackOptions<HideKeyboardOption>
        ): Wx.PromisifiedCallbackResult<HideKeyboardOption>;
        getSelectedTextRange(
            options?: Wx.PromisifiedCallbackOptions<GetSelectedTextRangeOption>
        ): Wx.PromisifiedCallbackResult<GetSelectedTextRangeOption>;
        // 设备：电话 - Device/Call
        makePhoneCallAsync(
            options?: Wx.PromisifiedCallbackOptions<MakePhoneCallOption>
        ): Wx.PromisifiedCallbackResult<MakePhoneCallOption>;
        // 设备：加速计 - Device/Accelerometer
        stopAccelerometerAsync(
            options?: Wx.PromisifiedCallbackOptions<StopAccelerometerOption>
        ): Wx.PromisifiedCallbackResult<StopAccelerometerOption>;
        startAccelerometerAsync(
            options?: Wx.PromisifiedCallbackOptions<StartAccelerometerOption>
        ): Wx.PromisifiedCallbackResult<StartAccelerometerOption>;
        // 设备：罗盘 - Device/Compass
        stopCompassAsync(
            options?: Wx.PromisifiedCallbackOptions<StopCompassOption>
        ): Wx.PromisifiedCallbackResult<StopCompassOption>;
        startCompassAsync(
            options?: Wx.PromisifiedCallbackOptions<StartCompassOption>
        ): Wx.PromisifiedCallbackResult<StartCompassOption>;
        // 设备：设备方向 - Device/Motion
        stopDeviceMotionListeningAsync(
            options?: Wx.PromisifiedCallbackOptions<StopDeviceMotionListeningOption>
        ): Wx.PromisifiedCallbackResult<StopDeviceMotionListeningOption>;
        startDeviceMotionListeningAsync(
            options?: Wx.PromisifiedCallbackOptions<StartDeviceMotionListeningOption>
        ): Wx.PromisifiedCallbackResult<StartDeviceMotionListeningOption>;
        // 设备：陀螺仪 - Device/Gyroscope
        stopGyroscopeAsync(
            options?: Wx.PromisifiedCallbackOptions<StopGyroscopeOption>
        ): Wx.PromisifiedCallbackResult<StopGyroscopeOption>;
        startGyroscopeAsync(
            options?: Wx.PromisifiedCallbackOptions<StartGyroscopeOption>
        ): Wx.PromisifiedCallbackResult<StartGyroscopeOption>;
        // 设备：扫码 - Device/ScanCode
        scanCodeAsync(
            options?: Wx.PromisifiedCallbackOptions<ScanCodeOption>
        ): Wx.PromisifiedCallbackResult<ScanCodeOption>;
        // 设备：振动 - Device/Vibration
        vibrateShortAsync(
            options?: Wx.PromisifiedCallbackOptions<VibrateShortOption>
        ): Wx.PromisifiedCallbackResult<VibrateShortOption>;
        vibrateLongAsync(
            options?: Wx.PromisifiedCallbackOptions<VibrateLongOption>
        ): Wx.PromisifiedCallbackResult<VibrateLongOption>;

        // 第三方平台 - Ext
        getExtConfigAsync(
            options?: Wx.PromisifiedCallbackOptions<GetExtConfigOption>
        ): Wx.PromisifiedCallbackResult<GetExtConfigOption>;
    }
}

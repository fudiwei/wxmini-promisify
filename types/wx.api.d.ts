declare namespace WechatMiniprogram {
    namespace Wx {
        type CallbackOption = {
            success?: (...args: any) => void;
            fail?: (...args: any) => void;
            complete?: (...args: any) => void;
        };
        type PromisifiedCallbackOption<T extends CallbackOption> = Omit<T, keyof CallbackOption>;
        type PromisifiedCallbackResult<T extends CallbackOption> = Promise<Parameters<T['success']>[0]>;
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

        // 路由 - Route
        reLaunchAsync(
            options?: Wx.PromisifiedCallbackOption<ReLaunchOption>
        ): Wx.PromisifiedCallbackResult<ReLaunchOption>;
        switchTabAsync(
            options?: Wx.PromisifiedCallbackOption<SwitchTabOption>
        ): Wx.PromisifiedCallbackResult<SwitchTabOption>;
        redirectToAsync(
            options?: Wx.PromisifiedCallbackOption<RedirectToOption>
        ): Wx.PromisifiedCallbackResult<RedirectToOption>;
        navigateToAsync(
            options?: Wx.PromisifiedCallbackOption<NavigateToOption>
        ): Wx.PromisifiedCallbackResult<NavigateToOption>;
        navigateBackAsync(
            options?: Wx.PromisifiedCallbackOption<NavigateBackOption>
        ): Wx.PromisifiedCallbackResult<NavigateBackOption>;

        // 跳转 - Navigate
        navigateToMiniProgramAsync(
            options?: Wx.PromisifiedCallbackOption<NavigateToMiniProgramOption>
        ): Wx.PromisifiedCallbackResult<NavigateToMiniProgramOption>;
        navigateBackMiniProgramAsync(
            options?: Wx.PromisifiedCallbackOption<NavigateBackMiniProgramOption>
        ): Wx.PromisifiedCallbackResult<NavigateBackMiniProgramOption>;
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
        showShareImageMenuMenu(
            options?: Wx.PromisifiedCallbackOption<ShowShareImageMenuOption>
        ): Wx.PromisifiedCallbackResult<ShowShareImageMenuOption>;
        shareVideoMessageAsync(
            options?: Wx.PromisifiedCallbackOption<ShareVideoMessageOption>
        ): Wx.PromisifiedCallbackResult<ShareVideoMessageOption>;
        shareFileMessageAsync(
            options?: Wx.PromisifiedCallbackOption<ShareFileMessageOption>
        ): Wx.PromisifiedCallbackResult<ShareFileMessageOption>;
        hideShareMenuAsync(
            options?: Wx.PromisifiedCallbackOption<HideShareMenuOption>
        ): Wx.PromisifiedCallbackResult<HideShareMenuOption>;
        getShareInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetShareInfoOption>
        ): Wx.PromisifiedCallbackResult<GetShareInfoOption>;
        authPrivateMessageAsync(
            options?: Wx.PromisifiedCallbackOption<AuthPrivateMessageOption>
        ): Wx.PromisifiedCallbackResult<AuthPrivateMessageOption>;

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
        enableAlertBeforeUnloadAsync(
            options?: Wx.PromisifiedCallbackOption<EnableAlertBeforeUnloadOption>
        ): Wx.PromisifiedCallbackResult<EnableAlertBeforeUnloadOption>;
        disableAlertBeforeUnloadAsync(
            options?: Wx.PromisifiedCallbackOption<DisableAlertBeforeUnloadOption>
        ): Wx.PromisifiedCallbackResult<DisableAlertBeforeUnloadOption>;
        // 界面：导航栏 - UI/Navigation
        showNavigationBarLoadingAsync(
            options?: Wx.PromisifiedCallbackOption<ShowNavigationBarLoadingOption>
        ): Wx.PromisifiedCallbackResult<ShowNavigationBarLoadingOption>;
        setNavigationBarTitleAsync(
            options?: Wx.PromisifiedCallbackOption<SetNavigationBarTitleOption>
        ): Wx.PromisifiedCallbackResult<SetNavigationBarTitleOption>;
        setNavigationBarColorAsync(
            options?: Wx.PromisifiedCallbackOption<SetNavigationBarColorOption>
        ): Wx.PromisifiedCallbackResult<SetNavigationBarColorOption>;
        hideNavigationBarLoadingAsync(
            options?: Wx.PromisifiedCallbackOption<HideNavigationBarLoadingOption>
        ): Wx.PromisifiedCallbackResult<HideNavigationBarLoadingOption>;
        hideHomeButtonAsync(
            options?: Wx.PromisifiedCallbackOption<HideHomeButtonOption>
        ): Wx.PromisifiedCallbackResult<HideHomeButtonOption>;
        // 界面：背景 - UI/Background
        setBackgroundTextStyleAsync(
            options?: Wx.PromisifiedCallbackOption<SetBackgroundTextStyleOption>
        ): Wx.PromisifiedCallbackResult<SetBackgroundTextStyleOption>;
        setBackgroundColorAsync(
            options?: Wx.PromisifiedCallbackOption<SetBackgroundColorOption>
        ): Wx.PromisifiedCallbackResult<SetBackgroundColorOption>;
        // 界面：TabBar - UI/TabBar
        showTabBarRedDotAsync(
            options?: Wx.PromisifiedCallbackOption<ShowTabBarRedDotOption>
        ): Wx.PromisifiedCallbackResult<ShowTabBarRedDotOption>;
        showTabBarAsync(
            options?: Wx.PromisifiedCallbackOption<ShowTabBarOption>
        ): Wx.PromisifiedCallbackResult<ShowTabBarOption>;
        setTabBarStyleAsync(
            options?: Wx.PromisifiedCallbackOption<SetTabBarStyleOption>
        ): Wx.PromisifiedCallbackResult<SetTabBarStyleOption>;
        setTabBarItemAsync(
            options?: Wx.PromisifiedCallbackOption<SetTabBarItemOption>
        ): Wx.PromisifiedCallbackResult<SetTabBarItemOption>;
        setTabBarBadgeAsync(
            options?: Wx.PromisifiedCallbackOption<SetTabBarBadgeOption>
        ): Wx.PromisifiedCallbackResult<SetTabBarBadgeOption>;
        removeTabBarBadgeAsync(
            options?: Wx.PromisifiedCallbackOption<RemoveTabBarBadgeOption>
        ): Wx.PromisifiedCallbackResult<RemoveTabBarBadgeOption>;
        hideTabBarRedDotAsync(
            options?: Wx.PromisifiedCallbackOption<HideTabBarRedDotOption>
        ): Wx.PromisifiedCallbackResult<HideTabBarRedDotOption>;
        hideTabBarAsync(
            options?: Wx.PromisifiedCallbackOption<HideTabBarOption>
        ): Wx.PromisifiedCallbackResult<HideTabBarOption>;
        // 界面：字体 - UI/Font
        loadFontFaceAsync(
            options?: Wx.PromisifiedCallbackOption<LoadFontFaceOption>
        ): Wx.PromisifiedCallbackResult<LoadFontFaceOption>;
        // 界面：下拉刷新 - UI/PullDown
        startPullDownRefreshAsync(
            options?: Wx.PromisifiedCallbackOption<StartPullDownRefreshOption>
        ): Wx.PromisifiedCallbackResult<StartPullDownRefreshOption>;
        stopPullDownRefreshAsync(
            options?: Wx.PromisifiedCallbackOption<StopPullDownRefreshOption>
        ): Wx.PromisifiedCallbackResult<StopPullDownRefreshOption>;
        // 界面：滚动 - UI/Scroll
        pageScrollToAsync(
            options?: Wx.PromisifiedCallbackOption<PageScrollToOption>
        ): Wx.PromisifiedCallbackResult<PageScrollToOption>;
        // 界面：置顶 - UI/TopBar
        setTopBarTextAsync(
            options?: Wx.PromisifiedCallbackOption<SetTopBarTextOption>
        ): Wx.PromisifiedCallbackResult<SetTopBarTextOption>;
        // 界面：窗口 - UI/Window
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
        // 网络：mDNS - Network/mDNS
        stopLocalServiceDiscoveryAsync(
            options?: Wx.PromisifiedCallbackOption<StopLocalServiceDiscoveryOption>
        ): Wx.PromisifiedCallbackResult<StopLocalServiceDiscoveryOption>;
        startLocalServiceDiscoveryAsync(
            options?: Wx.PromisifiedCallbackOption<StartLocalServiceDiscoveryOption>
        ): Wx.PromisifiedCallbackResult<StartLocalServiceDiscoveryOption>;

        // 支付 - Payment
        requestPaymentAsync(
            options?: Wx.PromisifiedCallbackOption<RequestPaymentOption>
        ): Wx.PromisifiedCallbackResult<RequestPaymentOption>;
        requestOrderPaymentAsync(
            options?: Wx.PromisifiedCallbackOption<RequestOrderPaymentOption>
        ): Wx.PromisifiedCallbackResult<RequestOrderPaymentOption>;

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
        // 数据缓存：周期性更新 - Storage/BackgroundFetch
        setBackgroundFetchTokenAsync(
            options?: Wx.PromisifiedCallbackOption<SetBackgroundFetchTokenOption>
        ): Wx.PromisifiedCallbackResult<SetBackgroundFetchTokenOption>;
        getBackgroundFetchTokenAsync(
            options?: Wx.PromisifiedCallbackOption<GetBackgroundFetchTokenOption>
        ): Wx.PromisifiedCallbackResult<GetBackgroundFetchTokenOption>;
        getBackgroundFetchDataAsync(
            options?: Wx.PromisifiedCallbackOption<GetBackgroundFetchDataOption>
        ): Wx.PromisifiedCallbackResult<GetBackgroundFetchDataOption>;

        // 画布 - Canvas
        canvasToTempFilePathAsync(
            options?: Wx.PromisifiedCallbackOption<CanvasToTempFilePathOption>,
            component?: Component.TrivialInstance | Page.TrivialInstance
        ): Promise<CanvasToTempFilePathOption>;
        canvasPutImageDataAsync(
            options?: Wx.PromisifiedCallbackOption<CanvasPutImageDataOption>
        ): Wx.PromisifiedCallbackResult<CanvasPutImageDataOption>;
        canvasGetImageDataAync(
            options?: Wx.PromisifiedCallbackOption<CanvasGetImageDataOption>
        ): Wx.PromisifiedCallbackResult<CanvasGetImageDataOption>;

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
        getImageInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetImageInfoOption>
        ): Wx.PromisifiedCallbackResult<GetImageInfoOption>;
        compressImageAsync(
            options?: Wx.PromisifiedCallbackOption<CompressImageOption>
        ): Wx.PromisifiedCallbackResult<CompressImageOption>;
        chooseMessageFileAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseMessageFileOption>
        ): Wx.PromisifiedCallbackResult<ChooseMessageFileOption>;
        chooseImageAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseImageOption>
        ): Wx.PromisifiedCallbackResult<ChooseImageOption>;
        // 媒体：视频 - Media/Video
        saveVideoToPhotosAlbumAsync(
            options?: Wx.PromisifiedCallbackOption<SaveVideoToPhotosAlbumOption>
        ): Wx.PromisifiedCallbackResult<SaveVideoToPhotosAlbumOption>;
        openVideoEditorAsync(
            options?: Wx.PromisifiedCallbackOption<OpenVideoEditorOption>
        ): Wx.PromisifiedCallbackResult<OpenVideoEditorOption>;
        getVideoInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetVideoInfoOption>
        ): Wx.PromisifiedCallbackResult<GetVideoInfoOption>;
        compressVideoAsync(
            options?: Wx.PromisifiedCallbackOption<CompressVideoOption>
        ): Wx.PromisifiedCallbackResult<CompressVideoOption>;
        chooseVideoAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseVideoOption>
        ): Wx.PromisifiedCallbackResult<ChooseVideoOption>;
        chooseMediaAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseMediaOption>
        ): Wx.PromisifiedCallbackResult<ChooseMediaOption>;
        // 媒体：音频 - Media/Audio&Voice
        stopVoiceAsync(
            options?: Wx.PromisifiedCallbackOption<StopVoiceOption>
        ): Wx.PromisifiedCallbackResult<StopVoiceOption>;
        setInnerAudioOptionAsync(
            options?: Wx.PromisifiedCallbackOption<SetInnerAudioOption>
        ): Wx.PromisifiedCallbackResult<SetInnerAudioOption>;
        playVoiceAsync(
            options?: Wx.PromisifiedCallbackOption<PlayVoiceOption>
        ): Wx.PromisifiedCallbackResult<PlayVoiceOption>;
        pauseVoiceAsync(
            options?: Wx.PromisifiedCallbackOption<PauseVoiceOption>
        ): Wx.PromisifiedCallbackResult<PauseVoiceOption>;
        getAvailableAudioSourcesAsync(
            options?: Wx.PromisifiedCallbackOption<GetAvailableAudioSourcesOption>
        ): Wx.PromisifiedCallbackResult<GetAvailableAudioSourcesOption>;
        // 媒体：背景音频 - Media/BackgroundAudio
        stopBackgroundAudioAsync(
            options?: Wx.PromisifiedCallbackOption<StopBackgroundAudioOption>
        ): Wx.PromisifiedCallbackResult<StopBackgroundAudioOption>;
        seekBackgroundAudioAsync(
            options?: Wx.PromisifiedCallbackOption<SeekBackgroundAudioOption>
        ): Wx.PromisifiedCallbackResult<SeekBackgroundAudioOption>;
        playBackgroundAudioAsync(
            options?: Wx.PromisifiedCallbackOption<PlayBackgroundAudioOption>
        ): Wx.PromisifiedCallbackResult<PlayBackgroundAudioOption>;
        pauseBackgroundAudioAsync(
            options?: Wx.PromisifiedCallbackOption<PauseBackgroundAudioOption>
        ): Wx.PromisifiedCallbackResult<PauseBackgroundAudioOption>;
        getBackgroundAudioPlayerStateAsync(
            options?: Wx.PromisifiedCallbackOption<GetBackgroundAudioPlayerStateOption>
        ): Wx.PromisifiedCallbackResult<GetBackgroundAudioPlayerStateOption>;
        // 媒体：录音 - Media/Record
        stopRecordAsync(
            options?: Wx.PromisifiedCallbackOption<WxStopRecordOption>
        ): Wx.PromisifiedCallbackResult<WxStopRecordOption>;
        startRecordAsync(
            options?: Wx.PromisifiedCallbackOption<WxStartRecordOption>
        ): Wx.PromisifiedCallbackResult<WxStartRecordOption>;
        // 媒体：实时语音 - Media/VoIP
        updateVoIPChatMuteConfigAsync(
            options?: Wx.PromisifiedCallbackOption<UpdateVoIPChatMuteConfigOption>
        ): Wx.PromisifiedCallbackResult<UpdateVoIPChatMuteConfigOption>;
        subscribeVoIPVideoMembersAsync(
            options?: Wx.PromisifiedCallbackOption<SubscribeVoIPVideoMembersOption>
        ): Wx.PromisifiedCallbackResult<SubscribeVoIPVideoMembersOption>;
        joinVoIPChatAsync(
            options?: Wx.PromisifiedCallbackOption<JoinVoIPChatOption>
        ): Wx.PromisifiedCallbackResult<JoinVoIPChatOption>;
        exitVoIPChatAsync(
            options?: Wx.PromisifiedCallbackOption<ExitVoIPChatOption>
        ): Wx.PromisifiedCallbackResult<ExitVoIPChatOption>;

        // 位置 - Location
        stopLocationUpdateAsync(
            options?: Wx.PromisifiedCallbackOption<StopLocationUpdateOption>
        ): Wx.PromisifiedCallbackResult<StopLocationUpdateOption>;
        startLocationUpdateBackgroundAsync(
            options?: Wx.PromisifiedCallbackOption<StartLocationUpdateBackgroundOption>
        ): Wx.PromisifiedCallbackResult<StartLocationUpdateBackgroundOption>;
        startLocationUpdateAsync(
            options?: Wx.PromisifiedCallbackOption<StartLocationUpdateOption>
        ): Wx.PromisifiedCallbackResult<StartLocationUpdateOption>;
        openLocationAsync(
            options?: Wx.PromisifiedCallbackOption<OpenLocationOption>
        ): Wx.PromisifiedCallbackResult<OpenLocationOption>;
        getLocationAsync(
            options?: Wx.PromisifiedCallbackOption<GetLocationOption>
        ): Wx.PromisifiedCallbackResult<GetLocationOption>;
        choosePoiAsync(
            options?: Wx.PromisifiedCallbackOption<ChoosePoiOption>
        ): Wx.PromisifiedCallbackResult<ChoosePoiOption>;
        chooseLocationAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseLocationOption>
        ): Wx.PromisifiedCallbackResult<ChooseLocationOption>;

        // 文件 File
        saveFileToDiskAsync(
            options?: Wx.PromisifiedCallbackOption<SaveFileToDiskOption>
        ): Wx.PromisifiedCallbackResult<SaveFileToDiskOption>;
        saveFileAsync(
            options?: Wx.PromisifiedCallbackOption<WxSaveFileOption>
        ): Wx.PromisifiedCallbackResult<WxSaveFileOption>;
        removeSavedFileAsync(
            options?: Wx.PromisifiedCallbackOption<WxRemoveSavedFileOption>
        ): Wx.PromisifiedCallbackResult<WxRemoveSavedFileOption>;
        openDocumentAsync(
            options?: Wx.PromisifiedCallbackOption<OpenDocumentOption>
        ): Wx.PromisifiedCallbackResult<OpenDocumentOption>;
        getSavedFileListAsync(
            options?: Wx.PromisifiedCallbackOption<WxGetSavedFileListOption>
        ): Wx.PromisifiedCallbackResult<WxGetSavedFileListOption>;
        getSavedFileInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetSavedFileInfoOption>
        ): Wx.PromisifiedCallbackResult<GetSavedFileInfoOption>;
        getFileInfoAsync(
            options?: Wx.PromisifiedCallbackOption<WxGetFileInfoOption>
        ): Wx.PromisifiedCallbackResult<WxGetFileInfoOption>;

        // 开放接口：登录 - OpenAPI/Login
        loginAsync(options?: Wx.PromisifiedCallbackOption<LoginOption>): Wx.PromisifiedCallbackResult<LoginOption>;
        checkSessionAsync(
            options?: Wx.PromisifiedCallbackOption<CheckSessionOption>
        ): Wx.PromisifiedCallbackResult<CheckSessionOption>;
        // 开放接口：用户信息 - OpenAPI/UserInfo
        getUserProfileAsync(
            options?: Wx.PromisifiedCallbackOption<GetUserProfileOption>
        ): Wx.PromisifiedCallbackResult<GetUserProfileOption>;
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
        // 开放接口：收货地址 - OpenAPI/Address
        chooseAddressAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseAddressOption>
        ): Wx.PromisifiedCallbackResult<ChooseAddressOption>;
        // 开放接口：卡券 - OpenAPI/Card
        openCardAsync(
            options?: Wx.PromisifiedCallbackOption<OpenCardOption>
        ): Wx.PromisifiedCallbackResult<OpenCardOption>;
        addCardAsync(
            options?: Wx.PromisifiedCallbackOption<AddCardOption>
        ): Wx.PromisifiedCallbackResult<AddCardOption>;
        // 开放接口：发票 - OpenAPI/Invoice
        chooseInvoiceTitleAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseInvoiceTitleOption>
        ): Wx.PromisifiedCallbackResult<ChooseInvoiceTitleOption>;
        chooseInvoiceAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseInvoiceOption>
        ): Wx.PromisifiedCallbackResult<ChooseInvoiceOption>;
        // 开放接口：生物认证 - OpenAPI/SoterAuthentication
        startSoterAuthenticationAsync(
            options?: Wx.PromisifiedCallbackOption<StartSoterAuthenticationOption>
        ): Wx.PromisifiedCallbackResult<StartSoterAuthenticationOption>;
        checkIsSupportSoterAuthenticationAsync(
            options?: Wx.PromisifiedCallbackOption<CheckIsSupportSoterAuthenticationOption>
        ): Promise<CheckIsSupportSoterAuthenticationOption>;
        checkIsSoterEnrolledInDeviceAsync(
            options?: Wx.PromisifiedCallbackOption<CheckIsSoterEnrolledInDeviceOption>
        ): Wx.PromisifiedCallbackResult<CheckIsSoterEnrolledInDeviceOption>;
        // 开放接口：微信运动 - OpenAPI/RunData
        shareToWeRunAsync(
            options?: Wx.PromisifiedCallbackOption<ShareToWeRunOption>
        ): Wx.PromisifiedCallbackResult<ShareToWeRunOption>;
        getWeRunDataAsync(
            options?: Wx.PromisifiedCallbackOption<GetWeRunDataOption>
        ): Wx.PromisifiedCallbackResult<GetWeRunDataOption>;
        // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
        requestSubscribeMessageAsync(
            options?: Wx.PromisifiedCallbackOption<RequestSubscribeMessageOption>
        ): Wx.PromisifiedCallbackResult<RequestSubscribeMessageOption>;
        // 开放接口：微信红包 - OpenAPI/RedPackage
        showRedPackgeAsync(
            options?: Wx.PromisifiedCallbackOption<ShowRedPackageOption>
        ): Wx.PromisifiedCallbackResult<ShowRedPackageOption>;
        // 开发接口：收藏 - OpenAPI/Favorites
        addVideoToFavoritesAsync(
            options?: Wx.PromisifiedCallbackOption<AddVideoToFavoritesOption>
        ): Wx.PromisifiedCallbackResult<AddVideoToFavoritesOption>;
        addFileToFavoritesAsync(
            options?: Wx.PromisifiedCallbackOption<AddFileToFavoritesOption>
        ): Wx.PromisifiedCallbackResult<AddFileToFavoritesOption>;
        // 开发接口：视频号 - OpenAPI/Channels
        openChannelsLiveAsync(
            options?: Wx.PromisifiedCallbackOption<OpenChannelsLiveOption>
        ): Wx.PromisifiedCallbackResult<OpenChannelsLiveOption>;
        getChannelsLiveInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetChannelsLiveInfoOption>
        ): Wx.PromisifiedCallbackResult<GetChannelsLiveInfoOption>;
        // 开发接口：微信群 - OpenAPI/Group
        getGroupEnterInfoAsync(
            options?: Wx.PromisifiedCallbackOption<GetGroupEnterInfoOption>
        ): Wx.PromisifiedCallbackResult<GetGroupEnterInfoOption>;

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
        // 设备：NFC - Device/NFC
        stopHCEAsync(
            options?: Wx.PromisifiedCallbackOption<StopHCEOption>
        ): Wx.PromisifiedCallbackResult<StopHCEOption>;
        startHCEAsync(
            options?: Wx.PromisifiedCallbackOption<StartHCEOption>
        ): Wx.PromisifiedCallbackResult<StartHCEOption>;
        sendHCEMessageAsync(
            options?: Wx.PromisifiedCallbackOption<SendHCEMessageOption>
        ): Wx.PromisifiedCallbackResult<SendHCEMessageOption>;
        getHCEStateAsync(
            options?: Wx.PromisifiedCallbackOption<GetHCEStateOption>
        ): Wx.PromisifiedCallbackResult<GetHCEStateOption>;
        // 设备：WiFi - Device/WiFi
        stopWifiAsync(
            options?: Wx.PromisifiedCallbackOption<StopWifiOption>
        ): Wx.PromisifiedCallbackResult<StopWifiOption>;
        startWifiAsync(
            options?: Wx.PromisifiedCallbackOption<StartWifiOption>
        ): Wx.PromisifiedCallbackResult<StartWifiOption>;
        setWifiListAsync(
            options?: Wx.PromisifiedCallbackOption<SetWifiListOption>
        ): Wx.PromisifiedCallbackResult<SetWifiListOption>;
        getWifiListAsync(
            options?: Wx.PromisifiedCallbackOption<GetWifiListOption>
        ): Wx.PromisifiedCallbackResult<GetWifiListOption>;
        getConnectedWifiAsync(
            options?: Wx.PromisifiedCallbackOption<GetConnectedWifiOption>
        ): Wx.PromisifiedCallbackResult<GetConnectedWifiOption>;
        connectWifiAsync(
            options?: Wx.PromisifiedCallbackOption<ConnectWifiOption>
        ): Wx.PromisifiedCallbackResult<ConnectWifiOption>;
        // 设备：日历 - Device/Calendar
        addPhoneRepeatCalendarAsync(
            options?: Wx.PromisifiedCallbackOption<AddPhoneRepeatCalendarOption>
        ): Wx.PromisifiedCallbackResult<AddPhoneRepeatCalendarOption>;
        addPhoneCalendarAsync(
            options?: Wx.PromisifiedCallbackOption<AddPhoneCalendarOption>
        ): Wx.PromisifiedCallbackResult<AddPhoneCalendarOption>;
        // 设备：联系人 - Device/Contact
        searchContactsAsync(
            options?: Wx.PromisifiedCallbackOption<SearchContactsOption>
        ): Wx.PromisifiedCallbackResult<SearchContactsOption>;
        chooseContactAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseContactOption>
        ): Wx.PromisifiedCallbackResult<ChooseContactOption>;
        addPhoneContactAsync(
            options?: Wx.PromisifiedCallbackOption<AddPhoneContactOption>
        ): Wx.PromisifiedCallbackResult<AddPhoneContactOption>;
        // 设备：无障碍 - Device/Accessibility
        checkIsOpenAccessibilityAsync(
            options?: Wx.PromisifiedCallbackOption<CheckIsOpenAccessibilityOption>
        ): Wx.PromisifiedCallbackResult<CheckIsOpenAccessibilityOption>;
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
        hideKeyboardAsync(
            options?: Wx.PromisifiedCallbackOption<HideKeyboardOption>
        ): Wx.PromisifiedCallbackResult<HideKeyboardOption>;
        getSelectedTextRange(
            options?: Wx.PromisifiedCallbackOption<GetSelectedTextRangeOption>
        ): Wx.PromisifiedCallbackResult<GetSelectedTextRangeOption>;
        // 设备：电话 - Device/Call
        makePhoneCallAsync(
            options?: Wx.PromisifiedCallbackOption<MakePhoneCallOption>
        ): Wx.PromisifiedCallbackResult<MakePhoneCallOption>;
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

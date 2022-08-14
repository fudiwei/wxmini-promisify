/// <reference path="./wx.miniprogram-api-qy.d.ts" />

declare namespace WechatMiniprogram {
    namespace WxAsync {
        type CallbackOption = {
            success?: (...args: any) => void;
            fail?: (...args: any) => void;
            complete?: (...args: any) => void;
        };
        type PromisifiedOption<T extends CallbackOption> = Omit<T, keyof CallbackOption>;
        type PromisifiedResult<T extends CallbackOption> = Promise<Parameters<T["success"]>[0]>;
    }

    interface WxAsync {
        // 基础：系统 - Base/System
        openSystemBluetoothSettingAsync(option?: WxAsync.PromisifiedOption<OpenSystemBluetoothSettingOption>): WxAsync.PromisifiedResult<OpenSystemBluetoothSettingOption>;
        openAppAuthorizeSettingAsync(option?: WxAsync.PromisifiedOption<OpenAppAuthorizeSettingOption>): WxAsync.PromisifiedResult<OpenAppAuthorizeSettingOption>;
        getSystemInfoAsyncAsync(option?: WxAsync.PromisifiedOption<GetSystemInfoAsyncOption>): WxAsync.PromisifiedResult<GetSystemInfoAsyncOption>;
        getSystemInfoAsync(option?: WxAsync.PromisifiedOption<GetSystemInfoOption>): WxAsync.PromisifiedResult<GetSystemInfoOption>;
        // 基础：更新 - Base/Update
        updateWeChatAppAsync(option?: WxAsync.PromisifiedOption<UpdateWeChatAppOption>): WxAsync.PromisifiedResult<UpdateWeChatAppOption>;
        // 基础：调试 - Base/Debug
        setEnableDebugAsync(option?: WxAsync.PromisifiedOption<SetEnableDebugOption>): WxAsync.PromisifiedResult<SetEnableDebugOption>;
        // 基础：性能 - Base/Performance
        preloadWebviewAsync(option?: WxAsync.PromisifiedOption<PreloadWebviewOption>): WxAsync.PromisifiedResult<PreloadWebviewOption>;
        preloadAssetsAsync(option?: WxAsync.PromisifiedOption<PreloadAssetsOption>): WxAsync.PromisifiedResult<PreloadAssetsOption>;

        // 路由 - Route
        reLaunchAsync(option?: WxAsync.PromisifiedOption<ReLaunchOption>): WxAsync.PromisifiedResult<ReLaunchOption>;
        switchTabAsync(option?: WxAsync.PromisifiedOption<SwitchTabOption>): WxAsync.PromisifiedResult<SwitchTabOption>;
        redirectToAsync(option?: WxAsync.PromisifiedOption<RedirectToOption>): WxAsync.PromisifiedResult<RedirectToOption>;
        navigateToAsync(option?: WxAsync.PromisifiedOption<NavigateToOption>): WxAsync.PromisifiedResult<NavigateToOption>;
        navigateBackAsync(option?: WxAsync.PromisifiedOption<NavigateBackOption>): WxAsync.PromisifiedResult<NavigateBackOption>;

        // 跳转 - Navigate
        navigateToMiniProgramAsync(option?: WxAsync.PromisifiedOption<NavigateToMiniProgramOption>): WxAsync.PromisifiedResult<NavigateToMiniProgramOption>;
        navigateBackMiniProgramAsync(option?: WxAsync.PromisifiedOption<NavigateBackMiniProgramOption>): WxAsync.PromisifiedResult<NavigateBackMiniProgramOption>;
        exitMiniProgramAsync(option?: WxAsync.PromisifiedOption<ExitMiniProgramOption>): WxAsync.PromisifiedResult<ExitMiniProgramOption>;

        // 转发 - Share
        updateShareMenuAsync(option?: WxAsync.PromisifiedOption<UpdateShareMenuOption>): WxAsync.PromisifiedResult<UpdateShareMenuOption>;
        showShareMenuAsync(option?: WxAsync.PromisifiedOption<ShowShareMenuOption>): WxAsync.PromisifiedResult<ShowShareMenuOption>;
        showShareImageMenuAsync(option?: WxAsync.PromisifiedOption<ShowShareImageMenuOption>): WxAsync.PromisifiedResult<ShowShareImageMenuOption>;
        shareVideoMessageAsync(option?: WxAsync.PromisifiedOption<ShareVideoMessageOption>): WxAsync.PromisifiedResult<ShareVideoMessageOption>;
        shareFileMessageAsync(option?: WxAsync.PromisifiedOption<ShareFileMessageOption>): WxAsync.PromisifiedResult<ShareFileMessageOption>;
        hideShareMenuAsync(option?: WxAsync.PromisifiedOption<HideShareMenuOption>): WxAsync.PromisifiedResult<HideShareMenuOption>;
        getShareInfoAsync(option?: WxAsync.PromisifiedOption<GetShareInfoOption>): WxAsync.PromisifiedResult<GetShareInfoOption>;
        authPrivateMessageAsync(option?: WxAsync.PromisifiedOption<AuthPrivateMessageOption>): WxAsync.PromisifiedResult<AuthPrivateMessageOption>;

        // 界面：交互 - UI/Interaction
        showToastAsync(option?: WxAsync.PromisifiedOption<ShowToastOption>): WxAsync.PromisifiedResult<ShowToastOption>;
        showModalAsync(option?: WxAsync.PromisifiedOption<ShowModalOption>): WxAsync.PromisifiedResult<ShowModalOption>;
        showLoadingAsync(option?: WxAsync.PromisifiedOption<ShowLoadingOption>): WxAsync.PromisifiedResult<ShowLoadingOption>;
        showActionSheetAsync(option?: WxAsync.PromisifiedOption<ShowActionSheetOption>): WxAsync.PromisifiedResult<ShowActionSheetOption>;
        hideToastAsync(option?: WxAsync.PromisifiedOption<HideToastOption>): WxAsync.PromisifiedResult<HideToastOption>;
        hideLoadingAsync(option?: WxAsync.PromisifiedOption<HideLoadingOption>): WxAsync.PromisifiedResult<HideLoadingOption>;
        enableAlertBeforeUnloadAsync(option?: WxAsync.PromisifiedOption<EnableAlertBeforeUnloadOption>): WxAsync.PromisifiedResult<EnableAlertBeforeUnloadOption>;
        disableAlertBeforeUnloadAsync(option?: WxAsync.PromisifiedOption<DisableAlertBeforeUnloadOption>): WxAsync.PromisifiedResult<DisableAlertBeforeUnloadOption>;
        // 界面：导航栏 - UI/Navigation
        showNavigationBarLoadingAsync(option?: WxAsync.PromisifiedOption<ShowNavigationBarLoadingOption>): WxAsync.PromisifiedResult<ShowNavigationBarLoadingOption>;
        setNavigationBarTitleAsync(option?: WxAsync.PromisifiedOption<SetNavigationBarTitleOption>): WxAsync.PromisifiedResult<SetNavigationBarTitleOption>;
        setNavigationBarColorAsync(option?: WxAsync.PromisifiedOption<SetNavigationBarColorOption>): WxAsync.PromisifiedResult<SetNavigationBarColorOption>;
        hideNavigationBarLoadingAsync(option?: WxAsync.PromisifiedOption<HideNavigationBarLoadingOption>): WxAsync.PromisifiedResult<HideNavigationBarLoadingOption>;
        hideHomeButtonAsync(option?: WxAsync.PromisifiedOption<HideHomeButtonOption>): WxAsync.PromisifiedResult<HideHomeButtonOption>;
        // 界面：背景 - UI/Background
        setBackgroundTextStyleAsync(option?: WxAsync.PromisifiedOption<SetBackgroundTextStyleOption>): WxAsync.PromisifiedResult<SetBackgroundTextStyleOption>;
        setBackgroundColorAsync(option?: WxAsync.PromisifiedOption<SetBackgroundColorOption>): WxAsync.PromisifiedResult<SetBackgroundColorOption>;
        // 界面：TabBar - UI/TabBar
        showTabBarRedDotAsync(option?: WxAsync.PromisifiedOption<ShowTabBarRedDotOption>): WxAsync.PromisifiedResult<ShowTabBarRedDotOption>;
        showTabBarAsync(option?: WxAsync.PromisifiedOption<ShowTabBarOption>): WxAsync.PromisifiedResult<ShowTabBarOption>;
        setTabBarStyleAsync(option?: WxAsync.PromisifiedOption<SetTabBarStyleOption>): WxAsync.PromisifiedResult<SetTabBarStyleOption>;
        setTabBarItemAsync(option?: WxAsync.PromisifiedOption<SetTabBarItemOption>): WxAsync.PromisifiedResult<SetTabBarItemOption>;
        setTabBarBadgeAsync(option?: WxAsync.PromisifiedOption<SetTabBarBadgeOption>): WxAsync.PromisifiedResult<SetTabBarBadgeOption>;
        removeTabBarBadgeAsync(option?: WxAsync.PromisifiedOption<RemoveTabBarBadgeOption>): WxAsync.PromisifiedResult<RemoveTabBarBadgeOption>;
        hideTabBarRedDotAsync(option?: WxAsync.PromisifiedOption<HideTabBarRedDotOption>): WxAsync.PromisifiedResult<HideTabBarRedDotOption>;
        hideTabBarAsync(option?: WxAsync.PromisifiedOption<HideTabBarOption>): WxAsync.PromisifiedResult<HideTabBarOption>;
        // 界面：字体 - UI/Font
        loadFontFaceAsync(option?: WxAsync.PromisifiedOption<LoadFontFaceOption>): WxAsync.PromisifiedResult<LoadFontFaceOption>;
        // 界面：下拉刷新 - UI/PullDown
        startPullDownRefreshAsync(option?: WxAsync.PromisifiedOption<StartPullDownRefreshOption>): WxAsync.PromisifiedResult<StartPullDownRefreshOption>;
        stopPullDownRefreshAsync(option?: WxAsync.PromisifiedOption<StopPullDownRefreshOption>): WxAsync.PromisifiedResult<StopPullDownRefreshOption>;
        // 界面：滚动 - UI/Scroll
        pageScrollToAsync(option?: WxAsync.PromisifiedOption<PageScrollToOption>): WxAsync.PromisifiedResult<PageScrollToOption>;
        // 界面：置顶 - UI/TopBar
        /**
         * @deprecated
         */
        setTopBarTextAsync(option?: WxAsync.PromisifiedOption<SetTopBarTextOption>): WxAsync.PromisifiedResult<SetTopBarTextOption>;
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
        // 网络：mDNS - Network/mDNS
        stopLocalServiceDiscoveryAsync(option?: WxAsync.PromisifiedOption<StopLocalServiceDiscoveryOption>): WxAsync.PromisifiedResult<StopLocalServiceDiscoveryOption>;
        startLocalServiceDiscoveryAsync(option?: WxAsync.PromisifiedOption<StartLocalServiceDiscoveryOption>): WxAsync.PromisifiedResult<StartLocalServiceDiscoveryOption>;

        // 支付 - Payment
        requestPaymentAsync(option?: WxAsync.PromisifiedOption<RequestPaymentOption>): WxAsync.PromisifiedResult<RequestPaymentOption>;
        requestPluginPaymentAsync(option?: WxAsync.PromisifiedOption<RequestPluginPaymentOption>): WxAsync.PromisifiedResult<RequestPluginPaymentOption>;
        requestOrderPaymentAsync(option?: WxAsync.PromisifiedOption<RequestOrderPaymentOption>): WxAsync.PromisifiedResult<RequestOrderPaymentOption>;

        // 数据缓存：存储 - Storage/Storage
        setStorageAsync(option?: WxAsync.PromisifiedOption<SetStorageOption>): WxAsync.PromisifiedResult<SetStorageOption>;
        removeStorageAsync(option?: WxAsync.PromisifiedOption<RemoveStorageOption>): WxAsync.PromisifiedResult<RemoveStorageOption>;
        getStorageInfoAsync(option?: WxAsync.PromisifiedOption<GetStorageInfoOption>): WxAsync.PromisifiedResult<GetStorageInfoOption>;
        getStorageAsync(option?: WxAsync.PromisifiedOption<GetStorageOption>): WxAsync.PromisifiedResult<GetStorageOption>;
        getStorageAsync<T>(option?: WxAsync.PromisifiedOption<GetStorageOption<T>>): Promise<GetStorageOption<T>>;
        clearStorageAsync(option?: WxAsync.PromisifiedOption<ClearStorageOption>): WxAsync.PromisifiedResult<ClearStorageOption>;
        // 数据缓存：周期性更新 - Storage/BackgroundFetch
        setBackgroundFetchTokenAsync(option?: WxAsync.PromisifiedOption<SetBackgroundFetchTokenOption>): WxAsync.PromisifiedResult<SetBackgroundFetchTokenOption>;
        getBackgroundFetchTokenAsync(option?: WxAsync.PromisifiedOption<GetBackgroundFetchTokenOption>): WxAsync.PromisifiedResult<GetBackgroundFetchTokenOption>;
        getBackgroundFetchDataAsync(option?: WxAsync.PromisifiedOption<GetBackgroundFetchDataOption>): WxAsync.PromisifiedResult<GetBackgroundFetchDataOption>;

        // 画布 - Canvas
        canvasToTempFilePathAsync(option?: WxAsync.PromisifiedOption<CanvasToTempFilePathOption>, component?: Component.TrivialInstance | Page.TrivialInstance): Promise<CanvasToTempFilePathOption>;
        canvasPutImageDataAsync(option?: WxAsync.PromisifiedOption<CanvasPutImageDataOption>): WxAsync.PromisifiedResult<CanvasPutImageDataOption>;
        canvasGetImageDataAync(option?: WxAsync.PromisifiedOption<CanvasGetImageDataOption>): WxAsync.PromisifiedResult<CanvasGetImageDataOption>;

        // 媒体：图片 - Media/Image
        saveImageToPhotosAlbumAsync(option?: WxAsync.PromisifiedOption<SaveImageToPhotosAlbumOption>): WxAsync.PromisifiedResult<SaveImageToPhotosAlbumOption>;
        previewMediaAsync(option?: WxAsync.PromisifiedOption<PreviewMediaOption>): WxAsync.PromisifiedResult<PreviewMediaOption>;
        previewImageAsync(option?: WxAsync.PromisifiedOption<PreviewImageOption>): WxAsync.PromisifiedResult<PreviewImageOption>;
        getImageInfoAsync(option?: WxAsync.PromisifiedOption<GetImageInfoOption>): WxAsync.PromisifiedResult<GetImageInfoOption>;
        editImageAsync(option?: WxAsync.PromisifiedOption<EditImageOption>): WxAsync.PromisifiedResult<EditImageOption>;
        compressImageAsync(option?: WxAsync.PromisifiedOption<CompressImageOption>): WxAsync.PromisifiedResult<CompressImageOption>;
        chooseMessageFileAsync(option?: WxAsync.PromisifiedOption<ChooseMessageFileOption>): WxAsync.PromisifiedResult<ChooseMessageFileOption>;
        chooseImageAsync(option?: WxAsync.PromisifiedOption<ChooseImageOption>): WxAsync.PromisifiedResult<ChooseImageOption>;
        // 媒体：视频 - Media/Video
        saveVideoToPhotosAlbumAsync(option?: WxAsync.PromisifiedOption<SaveVideoToPhotosAlbumOption>): WxAsync.PromisifiedResult<SaveVideoToPhotosAlbumOption>;
        openVideoEditorAsync(option?: WxAsync.PromisifiedOption<OpenVideoEditorOption>): WxAsync.PromisifiedResult<OpenVideoEditorOption>;
        getVideoInfoAsync(option?: WxAsync.PromisifiedOption<GetVideoInfoOption>): WxAsync.PromisifiedResult<GetVideoInfoOption>;
        compressVideoAsync(option?: WxAsync.PromisifiedOption<CompressVideoOption>): WxAsync.PromisifiedResult<CompressVideoOption>;
        chooseVideoAsync(option?: WxAsync.PromisifiedOption<ChooseVideoOption>): WxAsync.PromisifiedResult<ChooseVideoOption>;
        chooseMediaAsync(option?: WxAsync.PromisifiedOption<ChooseMediaOption>): WxAsync.PromisifiedResult<ChooseMediaOption>;
        // 媒体：音频 - Media/Audio&Voice
        /**
         * @deprecated
         */
        stopVoiceAsync(option?: WxAsync.PromisifiedOption<StopVoiceOption>): WxAsync.PromisifiedResult<StopVoiceOption>;
        /**
         * @deprecated
         */
        playVoiceAsync(option?: WxAsync.PromisifiedOption<PlayVoiceOption>): WxAsync.PromisifiedResult<PlayVoiceOption>;
        /**
         * @deprecated
         */
        pauseVoiceAsync(option?: WxAsync.PromisifiedOption<PauseVoiceOption>): WxAsync.PromisifiedResult<PauseVoiceOption>;
        setInnerAudioOptionAsync(option?: WxAsync.PromisifiedOption<SetInnerAudioOption>): WxAsync.PromisifiedResult<SetInnerAudioOption>;
        getAvailableAudioSourcesAsync(option?: WxAsync.PromisifiedOption<GetAvailableAudioSourcesOption>): WxAsync.PromisifiedResult<GetAvailableAudioSourcesOption>;
        // 媒体：背景音频 - Media/BackgroundAudio
        /**
         * @deprecated
         */
        stopBackgroundAudioAsync(option?: WxAsync.PromisifiedOption<StopBackgroundAudioOption>): WxAsync.PromisifiedResult<StopBackgroundAudioOption>;
        /**
         * @deprecated
         */
        seekBackgroundAudioAsync(option?: WxAsync.PromisifiedOption<SeekBackgroundAudioOption>): WxAsync.PromisifiedResult<SeekBackgroundAudioOption>;
        /**
         * @deprecated
         */
        playBackgroundAudioAsync(option?: WxAsync.PromisifiedOption<PlayBackgroundAudioOption>): WxAsync.PromisifiedResult<PlayBackgroundAudioOption>;
        /**
         * @deprecated
         */
        pauseBackgroundAudioAsync(option?: WxAsync.PromisifiedOption<PauseBackgroundAudioOption>): WxAsync.PromisifiedResult<PauseBackgroundAudioOption>;
        /**
         * @deprecated
         */
        getBackgroundAudioPlayerStateAsync(option?: WxAsync.PromisifiedOption<GetBackgroundAudioPlayerStateOption>): WxAsync.PromisifiedResult<GetBackgroundAudioPlayerStateOption>;
        // 媒体：录音 - Media/Record
        /**
         * @deprecated
         */
        stopRecordAsync(option?: WxAsync.PromisifiedOption<WxStopRecordOption>): WxAsync.PromisifiedResult<WxStopRecordOption>;
        /**
         * @deprecated
         */
        startRecordAsync(option?: WxAsync.PromisifiedOption<WxStartRecordOption>): WxAsync.PromisifiedResult<WxStartRecordOption>;
        // 媒体：实时语音 - Media/VoIP
        updateVoIPChatMuteConfigAsync(option?: WxAsync.PromisifiedOption<UpdateVoIPChatMuteConfigOption>): WxAsync.PromisifiedResult<UpdateVoIPChatMuteConfigOption>;
        subscribeVoIPVideoMembersAsync(option?: WxAsync.PromisifiedOption<SubscribeVoIPVideoMembersOption>): WxAsync.PromisifiedResult<SubscribeVoIPVideoMembersOption>;
        setEnable1v1ChatAsync(option?: WxAsync.PromisifiedOption<SetEnable1v1ChatOption>): WxAsync.PromisifiedResult<SetEnable1v1ChatOption>;
        joinVoIPChatAsync(option?: WxAsync.PromisifiedOption<JoinVoIPChatOption>): WxAsync.PromisifiedResult<JoinVoIPChatOption>;
        join1v1ChatAsync(option?: WxAsync.PromisifiedOption<Join1v1ChatOption>): WxAsync.PromisifiedResult<Join1v1ChatOption>;
        exitVoIPChatAsync(option?: WxAsync.PromisifiedOption<ExitVoIPChatOption>): WxAsync.PromisifiedResult<ExitVoIPChatOption>;

        // 位置 - Location
        stopLocationUpdateAsync(option?: WxAsync.PromisifiedOption<StopLocationUpdateOption>): WxAsync.PromisifiedResult<StopLocationUpdateOption>;
        startLocationUpdateBackgroundAsync(option?: WxAsync.PromisifiedOption<StartLocationUpdateBackgroundOption>): WxAsync.PromisifiedResult<StartLocationUpdateBackgroundOption>;
        startLocationUpdateAsync(option?: WxAsync.PromisifiedOption<StartLocationUpdateOption>): WxAsync.PromisifiedResult<StartLocationUpdateOption>;
        openLocationAsync(option?: WxAsync.PromisifiedOption<OpenLocationOption>): WxAsync.PromisifiedResult<OpenLocationOption>;
        getLocationAsync(option?: WxAsync.PromisifiedOption<GetLocationOption>): WxAsync.PromisifiedResult<GetLocationOption>;
        choosePoiAsync(option?: WxAsync.PromisifiedOption<ChoosePoiOption>): WxAsync.PromisifiedResult<ChoosePoiOption>;
        chooseLocationAsync(option?: WxAsync.PromisifiedOption<ChooseLocationOption>): WxAsync.PromisifiedResult<ChooseLocationOption>;

        // 文件 File
        saveFileToDiskAsync(option?: WxAsync.PromisifiedOption<SaveFileToDiskOption>): WxAsync.PromisifiedResult<SaveFileToDiskOption>;
        saveFileAsync(option?: WxAsync.PromisifiedOption<WxSaveFileOption>): WxAsync.PromisifiedResult<WxSaveFileOption>;
        removeSavedFileAsync(option?: WxAsync.PromisifiedOption<WxRemoveSavedFileOption>): WxAsync.PromisifiedResult<WxRemoveSavedFileOption>;
        openDocumentAsync(option?: WxAsync.PromisifiedOption<OpenDocumentOption>): WxAsync.PromisifiedResult<OpenDocumentOption>;
        getSavedFileListAsync(option?: WxAsync.PromisifiedOption<WxGetSavedFileListOption>): WxAsync.PromisifiedResult<WxGetSavedFileListOption>;
        getSavedFileInfoAsync(option?: WxAsync.PromisifiedOption<GetSavedFileInfoOption>): WxAsync.PromisifiedResult<GetSavedFileInfoOption>;
        getFileInfoAsync(option?: WxAsync.PromisifiedOption<WxGetFileInfoOption>): WxAsync.PromisifiedResult<WxGetFileInfoOption>;

        // 开放接口：登录 - OpenAPI/Login
        pluginLoginAsync(option?: WxAsync.PromisifiedOption<PluginLoginOption>): WxAsync.PromisifiedResult<PluginLoginOption>;
        loginAsync(option?: WxAsync.PromisifiedOption<LoginOption>): WxAsync.PromisifiedResult<LoginOption>;
        checkSessionAsync(option?: WxAsync.PromisifiedOption<CheckSessionOption>): WxAsync.PromisifiedResult<CheckSessionOption>;
        // 开放接口：用户信息 - OpenAPI/UserInfo
        getUserProfileAsync(option?: WxAsync.PromisifiedOption<GetUserProfileOption>): WxAsync.PromisifiedResult<GetUserProfileOption>;
        getUserInfoAsync(option?: WxAsync.PromisifiedOption<GetUserInfoOption>): WxAsync.PromisifiedResult<GetUserInfoOption>;
        // 开放接口：授权 - OpenAPI/Authorization
        authorizeAsync(option?: WxAsync.PromisifiedOption<AuthorizeOption>): WxAsync.PromisifiedResult<AuthorizeOption>;
        authorizeForMiniProgramAsync(option?: WxAsync.PromisifiedOption<AuthorizeForMiniProgramOption>): WxAsync.PromisifiedResult<AuthorizeForMiniProgramOption>;
        // 开放接口：设置 - OpenAPI/Setting
        openSettingAsync(option?: WxAsync.PromisifiedOption<OpenSettingOption>): WxAsync.PromisifiedResult<OpenSettingOption>;
        getSettingAsync(option?: WxAsync.PromisifiedOption<GetSettingOption>): WxAsync.PromisifiedResult<GetSettingOption>;
        // 开放接口：收货地址 - OpenAPI/Address
        chooseAddressAsync(option?: WxAsync.PromisifiedOption<ChooseAddressOption>): WxAsync.PromisifiedResult<ChooseAddressOption>;
        // 开放接口：卡券 - OpenAPI/Card
        openCardAsync(option?: WxAsync.PromisifiedOption<OpenCardOption>): WxAsync.PromisifiedResult<OpenCardOption>;
        addCardAsync(option?: WxAsync.PromisifiedOption<AddCardOption>): WxAsync.PromisifiedResult<AddCardOption>;
        // 开放接口：发票 - OpenAPI/Invoice
        chooseInvoiceTitleAsync(option?: WxAsync.PromisifiedOption<ChooseInvoiceTitleOption>): WxAsync.PromisifiedResult<ChooseInvoiceTitleOption>;
        chooseInvoiceAsync(option?: WxAsync.PromisifiedOption<ChooseInvoiceOption>): WxAsync.PromisifiedResult<ChooseInvoiceOption>;
        // 开放接口：生物认证 - OpenAPI/SoterAuthentication
        startSoterAuthenticationAsync(option?: WxAsync.PromisifiedOption<StartSoterAuthenticationOption>): WxAsync.PromisifiedResult<StartSoterAuthenticationOption>;
        checkIsSupportSoterAuthenticationAsync(option?: WxAsync.PromisifiedOption<CheckIsSupportSoterAuthenticationOption>): Promise<CheckIsSupportSoterAuthenticationOption>;
        checkIsSoterEnrolledInDeviceAsync(option?: WxAsync.PromisifiedOption<CheckIsSoterEnrolledInDeviceOption>): WxAsync.PromisifiedResult<CheckIsSoterEnrolledInDeviceOption>;
        // 开放接口：微信运动 - OpenAPI/RunData
        shareToWeRunAsync(option?: WxAsync.PromisifiedOption<ShareToWeRunOption>): WxAsync.PromisifiedResult<ShareToWeRunOption>;
        getWeRunDataAsync(option?: WxAsync.PromisifiedOption<GetWeRunDataOption>): WxAsync.PromisifiedResult<GetWeRunDataOption>;
        // 开放接口：订阅消息 - OpenAPI/SubscribeMessage
        requestSubscribeMessageAsync(option?: WxAsync.PromisifiedOption<RequestSubscribeMessageOption>): WxAsync.PromisifiedResult<RequestSubscribeMessageOption>;
        requestSubscribeDeviceMessageAsync(option?: WxAsync.PromisifiedOption<RequestSubscribeDeviceMessageOption>): WxAsync.PromisifiedResult<RequestSubscribeDeviceMessageOption>;
        // 开放接口：微信红包 - OpenAPI/RedPackage
        showRedPackgeAsync(option?: WxAsync.PromisifiedOption<ShowRedPackageOption>): WxAsync.PromisifiedResult<ShowRedPackageOption>;
        // 开放接口：收藏 - OpenAPI/Favorites
        addVideoToFavoritesAsync(option?: WxAsync.PromisifiedOption<AddVideoToFavoritesOption>): WxAsync.PromisifiedResult<AddVideoToFavoritesOption>;
        addFileToFavoritesAsync(option?: WxAsync.PromisifiedOption<AddFileToFavoritesOption>): WxAsync.PromisifiedResult<AddFileToFavoritesOption>;
        // 开放接口：车牌 - LicensePlate
        chooseLicensePlateAsync(option?: WxAsync.PromisifiedOption<ChooseLicensePlateOption>): WxAsync.PromisifiedResult<ChooseLicensePlateOption>;
        // 开放接口：视频号 - OpenAPI/Channels
        openChannelsUserProfileAsync(option?: WxAsync.PromisifiedOption<OpenChannelsUserProfileOption>): WxAsync.PromisifiedResult<OpenChannelsUserProfileOption>;
        openChannelsLiveAsync(option?: WxAsync.PromisifiedOption<OpenChannelsLiveOption>): WxAsync.PromisifiedResult<OpenChannelsLiveOption>;
        openChannelsEventAsync(option?: WxAsync.PromisifiedOption<OpenChannelsEventOption>): WxAsync.PromisifiedResult<OpenChannelsEventOption>;
        openChannelsActivityAsync(option?: WxAsync.PromisifiedOption<OpenChannelsActivityOption>): WxAsync.PromisifiedResult<OpenChannelsActivityOption>;
        getChannelsLiveNoticeInfoAsync(option?: WxAsync.PromisifiedOption<GetChannelsLiveNoticeInfoOption>): WxAsync.PromisifiedResult<GetChannelsLiveNoticeInfoOption>;
        getChannelsLiveInfoAsync(option?: WxAsync.PromisifiedOption<GetChannelsLiveInfoOption>): WxAsync.PromisifiedResult<GetChannelsLiveInfoOption>;
        // 开放接口：微信群 - OpenAPI/Group
        getGroupEnterInfoAsync(option?: WxAsync.PromisifiedOption<GetGroupEnterInfoOption>): WxAsync.PromisifiedResult<GetGroupEnterInfoOption>;
        // 开放接口：微信客服 - ServiceChat
        openCustomerServiceChatAsync(option?: WxAsync.PromisifiedOption<OpenCustomerServiceChatOption>): WxAsync.PromisifiedResult<OpenCustomerServiceChatOption>;

        // 设备：iBeacon - Device/iBeacon
        stopBeaconDiscoveryAsync(option?: WxAsync.PromisifiedOption<StopBeaconDiscoveryOption>): WxAsync.PromisifiedResult<StopBeaconDiscoveryOption>;
        startBeaconDiscoveryAsync(option?: WxAsync.PromisifiedOption<StartBeaconDiscoveryOption>): WxAsync.PromisifiedResult<StartBeaconDiscoveryOption>;
        getBeaconsAsync(option?: WxAsync.PromisifiedOption<GetBeaconsOption>): WxAsync.PromisifiedResult<GetBeaconsOption>;
        // 设备：NFC - Device/NFC
        stopHCEAsync(option?: WxAsync.PromisifiedOption<StopHCEOption>): WxAsync.PromisifiedResult<StopHCEOption>;
        startHCEAsync(option?: WxAsync.PromisifiedOption<StartHCEOption>): WxAsync.PromisifiedResult<StartHCEOption>;
        sendHCEMessageAsync(option?: WxAsync.PromisifiedOption<SendHCEMessageOption>): WxAsync.PromisifiedResult<SendHCEMessageOption>;
        getHCEStateAsync(option?: WxAsync.PromisifiedOption<GetHCEStateOption>): WxAsync.PromisifiedResult<GetHCEStateOption>;
        // 设备：WiFi - Device/WiFi
        stopWifiAsync(option?: WxAsync.PromisifiedOption<StopWifiOption>): WxAsync.PromisifiedResult<StopWifiOption>;
        startWifiAsync(option?: WxAsync.PromisifiedOption<StartWifiOption>): WxAsync.PromisifiedResult<StartWifiOption>;
        setWifiListAsync(option?: WxAsync.PromisifiedOption<SetWifiListOption>): WxAsync.PromisifiedResult<SetWifiListOption>;
        getWifiListAsync(option?: WxAsync.PromisifiedOption<GetWifiListOption>): WxAsync.PromisifiedResult<GetWifiListOption>;
        getConnectedWifiAsync(option?: WxAsync.PromisifiedOption<GetConnectedWifiOption>): WxAsync.PromisifiedResult<GetConnectedWifiOption>;
        connectWifiAsync(option?: WxAsync.PromisifiedOption<ConnectWifiOption>): WxAsync.PromisifiedResult<ConnectWifiOption>;
        // 设备：日历 - Device/Calendar
        addPhoneRepeatCalendarAsync(option?: WxAsync.PromisifiedOption<AddPhoneRepeatCalendarOption>): WxAsync.PromisifiedResult<AddPhoneRepeatCalendarOption>;
        addPhoneCalendarAsync(option?: WxAsync.PromisifiedOption<AddPhoneCalendarOption>): WxAsync.PromisifiedResult<AddPhoneCalendarOption>;
        // 设备：联系人 - Device/Contact
        chooseContactAsync(option?: WxAsync.PromisifiedOption<ChooseContactOption>): WxAsync.PromisifiedResult<ChooseContactOption>;
        addPhoneContactAsync(option?: WxAsync.PromisifiedOption<AddPhoneContactOption>): WxAsync.PromisifiedResult<AddPhoneContactOption>;
        // 设备：无障碍 - Device/Accessibility
        checkIsOpenAccessibilityAsync(option?: WxAsync.PromisifiedOption<CheckIsOpenAccessibilityOption>): WxAsync.PromisifiedResult<CheckIsOpenAccessibilityOption>;
        // 设备：低功耗蓝牙 - Device/BLE
        setBLEMTUAsync(option?: WxAsync.PromisifiedOption<SetBLEMTUOption>): WxAsync.PromisifiedResult<SetBLEMTUOption>;
        makeBluetoothPairAsync(option?: WxAsync.PromisifiedOption<MakeBluetoothPairOption>): WxAsync.PromisifiedResult<MakeBluetoothPairOption>;
        writeBLECharacteristicValueAsync(option?: WxAsync.PromisifiedOption<WriteBLECharacteristicValueOption>): WxAsync.PromisifiedResult<WriteBLECharacteristicValueOption>;
        readBLECharacteristicValueAsync(option?: WxAsync.PromisifiedOption<ReadBLECharacteristicValueOption>): WxAsync.PromisifiedResult<ReadBLECharacteristicValueOption>;
        notifyBLECharacteristicValueChangeAsync(option?: WxAsync.PromisifiedOption<NotifyBLECharacteristicValueChangeOption>): WxAsync.PromisifiedResult<NotifyBLECharacteristicValueChangeOption>;
        getBLEMTUAsync(option?: WxAsync.PromisifiedOption<GetBLEMTUOption>): WxAsync.PromisifiedResult<GetBLEMTUOption>;
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
        isBluetoothDevicePairedAsync(option?: WxAsync.PromisifiedOption<IsBluetoothDevicePairedOption>): WxAsync.PromisifiedResult<IsBluetoothDevicePairedOption>;
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
        getLocalIPAddressAsync(option?: WxAsync.PromisifiedOption<GetLocalIPAddressOption>): WxAsync.PromisifiedResult<GetLocalIPAddressOption>;
        // 设备：加密 - Device/Crypto
        getRandomValuesAsync(option?: WxAsync.PromisifiedOption<GetRandomValuesOption>): WxAsync.PromisifiedResult<GetRandomValuesOption>;
        // 设备：屏幕 - Device/Screen
        setVisualEffectOnCaptureAsync(option?: WxAsync.PromisifiedOption<SetVisualEffectOnCaptureOption>): WxAsync.PromisifiedResult<SetVisualEffectOnCaptureOption>;
        setScreenBrightnessAsync(option?: WxAsync.PromisifiedOption<SetScreenBrightnessOption>): WxAsync.PromisifiedResult<SetScreenBrightnessOption>;
        setKeepScreenOnAsync(option?: WxAsync.PromisifiedOption<SetKeepScreenOnOption>): WxAsync.PromisifiedResult<SetKeepScreenOnOption>;
        getScreenRecordingStateAsync(option?: WxAsync.PromisifiedOption<GetScreenRecordingStateOption>): WxAsync.PromisifiedResult<GetScreenRecordingStateOption>;
        getScreenBrightnessAsync(option?: WxAsync.PromisifiedOption<GetScreenBrightnessOption>): WxAsync.PromisifiedResult<GetScreenBrightnessOption>;
        // 设备：键盘 - Device/Keyword
        hideKeyboardAsync(option?: WxAsync.PromisifiedOption<HideKeyboardOption>): WxAsync.PromisifiedResult<HideKeyboardOption>;
        getSelectedTextRangeAsync(option?: WxAsync.PromisifiedOption<GetSelectedTextRangeOption>): WxAsync.PromisifiedResult<GetSelectedTextRangeOption>;
        // 设备：电话 - Device/Call
        makePhoneCallAsync(option?: WxAsync.PromisifiedOption<MakePhoneCallOption>): WxAsync.PromisifiedResult<MakePhoneCallOption>;
        // 设备：加速计 - Device/Accelerometer
        stopAccelerometerAsync(option?: WxAsync.PromisifiedOption<StopAccelerometerOption>): WxAsync.PromisifiedResult<StopAccelerometerOption>;
        startAccelerometerAsync(option?: WxAsync.PromisifiedOption<StartAccelerometerOption>): WxAsync.PromisifiedResult<StartAccelerometerOption>;
        // 设备：罗盘 - Device/Compass
        stopCompassAsync(option?: WxAsync.PromisifiedOption<StopCompassOption>): WxAsync.PromisifiedResult<StopCompassOption>;
        startCompassAsync(option?: WxAsync.PromisifiedOption<StartCompassOption>): WxAsync.PromisifiedResult<StartCompassOption>;
        // 设备：设备方向 - Device/Motion
        stopDeviceMotionListeningAsync(option?: WxAsync.PromisifiedOption<StopDeviceMotionListeningOption>): WxAsync.PromisifiedResult<StopDeviceMotionListeningOption>;
        startDeviceMotionListeningAsync(option?: WxAsync.PromisifiedOption<StartDeviceMotionListeningOption>): WxAsync.PromisifiedResult<StartDeviceMotionListeningOption>;
        // 设备：陀螺仪 - Device/Gyroscope
        stopGyroscopeAsync(option?: WxAsync.PromisifiedOption<StopGyroscopeOption>): WxAsync.PromisifiedResult<StopGyroscopeOption>;
        startGyroscopeAsync(option?: WxAsync.PromisifiedOption<StartGyroscopeOption>): WxAsync.PromisifiedResult<StartGyroscopeOption>;
        // 设备：扫码 - Device/ScanCode
        scanCodeAsync(option?: WxAsync.PromisifiedOption<ScanCodeOption>): WxAsync.PromisifiedResult<ScanCodeOption>;
        // 设备：振动 - Device/Vibration
        vibrateShortAsync(option?: WxAsync.PromisifiedOption<VibrateShortOption>): WxAsync.PromisifiedResult<VibrateShortOption>;
        vibrateLongAsync(option?: WxAsync.PromisifiedOption<VibrateLongOption>): WxAsync.PromisifiedResult<VibrateLongOption>;

        // AI：人脸识别 - AI/Face
        stopFaceDetectAsync(option?: WxAsync.PromisifiedOption<StopFaceDetectOption>): WxAsync.PromisifiedResult<StopFaceDetectOption>;
        initFaceDetectAsync(option?: WxAsync.PromisifiedOption<InitFaceDetectOption>): WxAsync.PromisifiedResult<InitFaceDetectOption>;
        faceDetectAsync(option?: WxAsync.PromisifiedOption<FaceDetectOption>): WxAsync.PromisifiedResult<FaceDetectOption>;

        // 第三方平台 - Ext
        getExtConfigAsync(option?: WxAsync.PromisifiedOption<GetExtConfigOption>): WxAsync.PromisifiedResult<GetExtConfigOption>;
    }

    interface QyAsync {
        loginAsync(option?: WxAsync.PromisifiedOption<Qy.LoginOption>): WxAsync.PromisifiedResult<Qy.LoginOption>;
        checkSessionAsync(option?: WxAsync.PromisifiedOption<Qy.CheckSessionOption>): WxAsync.PromisifiedResult<Qy.CheckSessionOption>;

        getSystemInfoAsync(option?: WxAsync.PromisifiedOption<Qy.GetSystemInfoOption>): WxAsync.PromisifiedResult<Qy.GetSystemInfoOption>;
        getContextAsync(option?: WxAsync.PromisifiedOption<Qy.GetContextOption>): WxAsync.PromisifiedResult<Qy.GetContextOption>;
        setShareAttrAsync(option?: WxAsync.PromisifiedOption<Qy.SetShareAttrOption>): WxAsync.PromisifiedResult<Qy.SetShareAttrOption>;
        getShareInfoAsync(option?: WxAsync.PromisifiedOption<Qy.GetShareInfoOption>): WxAsync.PromisifiedResult<Qy.GetShareInfoOption>;

        selectEnterpriseContactAsync(option?: WxAsync.PromisifiedOption<Qy.SelectEnterpriseContactOption>): WxAsync.PromisifiedResult<Qy.SelectEnterpriseContactOption>;
        openUserProfileAsync(option?: WxAsync.PromisifiedOption<Qy.OpenUserProfileOption>): WxAsync.PromisifiedResult<Qy.OpenUserProfileOption>;
        getEnterpriseUserInfoAsync(option?: WxAsync.PromisifiedOption<Qy.GetEnterpriseUserInfoOption>): WxAsync.PromisifiedResult<Qy.GetEnterpriseUserInfoOption>;
        getAvatarAsync(option?: WxAsync.PromisifiedOption<Qy.GetAvatarOption>): WxAsync.PromisifiedResult<Qy.GetAvatarOption>;
        getQrCodeAsync(option?: WxAsync.PromisifiedOption<Qy.GetQrCodeOption>): WxAsync.PromisifiedResult<Qy.GetQrCodeOption>;
        selectCorpGroupContactAsync(option?: WxAsync.PromisifiedOption<Qy.SelectCorpGroupContactOption>): WxAsync.PromisifiedResult<Qy.SelectCorpGroupContactOption>;
        claimClassAdminAsync(option?: WxAsync.PromisifiedOption<Qy.ClaimClassAdminOption>): WxAsync.PromisifiedResult<Qy.ClaimClassAdminOption>;
        selectPrivilegedContactAsync(option?: WxAsync.PromisifiedOption<Qy.SelectPrivilegedContactOption>): WxAsync.PromisifiedResult<Qy.SelectPrivilegedContactOption>;

        openEnterpriseChatAsync(option?: WxAsync.PromisifiedOption<Qy.OpenEnterpriseChatOption>): WxAsync.PromisifiedResult<Qy.OpenEnterpriseChatOption>;
        updateEnterpriseChatAsync(option?: WxAsync.PromisifiedOption<Qy.UpdateEnterpriseChatOption>): WxAsync.PromisifiedResult<Qy.UpdateEnterpriseChatOption>;
        sendChatMessageAsync(option?: WxAsync.PromisifiedOption<Qy.SendChatMessageOption>): WxAsync.PromisifiedResult<Qy.SendChatMessageOption>;
        createCorpGroupChatAsync(option?: WxAsync.PromisifiedOption<Qy.CreateCorpGroupChatOption>): WxAsync.PromisifiedResult<Qy.CreateCorpGroupChatOption>;
        updateCorpGroupChatAsync(option?: WxAsync.PromisifiedOption<Qy.UpdateCorpGroupChatOption>): WxAsync.PromisifiedResult<Qy.UpdateCorpGroupChatOption>;

        selectExternalContactAsync(option?: WxAsync.PromisifiedOption<Qy.SelectExternalContactOption>): WxAsync.PromisifiedResult<Qy.SelectExternalContactOption>;
        getCurExternalContactAsync(option?: WxAsync.PromisifiedOption<Qy.GetCurExternalContactOption>): WxAsync.PromisifiedResult<Qy.GetCurExternalContactOption>;
        getCurExternalChatAsync(option?: WxAsync.PromisifiedOption<Qy.GetCurExternalChatOption>): WxAsync.PromisifiedResult<Qy.GetCurExternalChatOption>;
        shareToExternalContactAsync(option?: WxAsync.PromisifiedOption<Qy.ShareToExternalContactOption>): WxAsync.PromisifiedResult<Qy.ShareToExternalContactOption>;
        shareToExternalChatAsync(option?: WxAsync.PromisifiedOption<Qy.ShareToExternalChatOption>): WxAsync.PromisifiedResult<Qy.ShareToExternalChatOption>;
        navigateToAddCustomerAsync(option?: WxAsync.PromisifiedOption<Qy.NavigateToAddCustomerOption>): WxAsync.PromisifiedResult<Qy.NavigateToAddCustomerOption>;
        shareToExternalMomentsAsync(option?: WxAsync.PromisifiedOption<Qy.ShareToExternalMomentsOption>): WxAsync.PromisifiedResult<Qy.ShareToExternalMomentsOption>;

        navigateToKfChatAsync(option?: WxAsync.PromisifiedOption<Qy.NavigateToKfChatOption>): WxAsync.PromisifiedResult<Qy.NavigateToKfChatOption>;

        startLivingAsync(option?: WxAsync.PromisifiedOption<Qy.StartLivingOption>): WxAsync.PromisifiedResult<Qy.StartLivingOption>;
        replayLivingAsync(option?: WxAsync.PromisifiedOption<Qy.ReplayLivingOption>): WxAsync.PromisifiedResult<Qy.ReplayLivingOption>;
        downloadLivingReplayAsync(option?: WxAsync.PromisifiedOption<Qy.DownloadLivingReplayOption>): WxAsync.PromisifiedResult<Qy.DownloadLivingReplayOption>;

        createSchoolPaymentAsync(option?: WxAsync.PromisifiedOption<Qy.CreateSchoolPaymentOption>): WxAsync.PromisifiedResult<Qy.CreateSchoolPaymentOption>;

        getNFCReaderStateAsync(option?: WxAsync.PromisifiedOption<Qy.GetNFCReaderStateOption>): WxAsync.PromisifiedResult<Qy.GetNFCReaderStateOption>;
        startNFCReaderAsync(option?: WxAsync.PromisifiedOption<Qy.StartNFCReaderOption>): WxAsync.PromisifiedResult<Qy.StartNFCReaderOption>;
        stopNFCReaderAsync(option?: WxAsync.PromisifiedOption<Qy.StopNFCReaderOption>): WxAsync.PromisifiedResult<Qy.StopNFCReaderOption>;

        openThirdAppServiceChatAsync(option?: WxAsync.PromisifiedOption<Qy.OpenThirdAppServiceChatOption>): WxAsync.PromisifiedResult<Qy.OpenThirdAppServiceChatOption>;
        openAppManageAsync(option?: WxAsync.PromisifiedOption<Qy.OpenAppManageOption>): WxAsync.PromisifiedResult<Qy.OpenAppManageOption>;
        openAppCommentAsync(option?: WxAsync.PromisifiedOption<Qy.OpenAppCommentOption>): WxAsync.PromisifiedResult<Qy.OpenAppCommentOption>;

        translateVoiceAsync(option?: WxAsync.PromisifiedOption<Qy.TranslateVoiceOption>): WxAsync.PromisifiedResult<Qy.TranslateVoiceOption>;
        chooseMessageFileAsync(option?: WxAsync.PromisifiedOption<Qy.ChooseMessageFileOption>): WxAsync.PromisifiedResult<Qy.ChooseMessageFileOption>;

        createExternalPaymentAsync(option?: WxAsync.PromisifiedOption<Qy.CreateExternalPaymentOption>): WxAsync.PromisifiedResult<Qy.CreateExternalPaymentOption>;
        refundExternalPaymentAsync(option?: WxAsync.PromisifiedOption<Qy.RefundExternalPaymentOption>): WxAsync.PromisifiedResult<Qy.RefundExternalPaymentOption>;
    }

    // @ts-ignore
    interface Wx extends WxAsync {}

    // @ts-ignore
    interface Qy extends QyAsync {}
}

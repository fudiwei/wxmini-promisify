declare namespace WechatMiniprogram.Page {
    interface IUserOpStatisticOption {
        op: string;
        path: string;
    }

    interface ILifetime {
        onUserOpStatistic(options: IUserOpStatisticOption): void;
    }
}

declare namespace WechatMiniprogram.Qy {
    interface LoginOption {
        complete?: LoginCompleteCallback;
        fail?: LoginFailCallback;
        success?: LoginSuccessCallback;
        timeout?: number;
    }
    interface LoginSuccessCallbackResult {
        code: string;
        errMsg: string;
    }
    type LoginCompleteCallback = (res: GeneralCallbackResult) => void;
    type LoginFailCallback = (res: GeneralCallbackResult) => void;
    type LoginSuccessCallback = (res: LoginSuccessCallbackResult) => void;

    interface CheckSessionOption {
        complete?: CheckSessionCompleteCallback;
        fail?: CheckSessionFailCallback;
        success?: CheckSessionSuccessCallback;
    }
    type CheckSessionCompleteCallback = (res: GeneralCallbackResult) => void;
    type CheckSessionFailCallback = (res: GeneralCallbackResult) => void;
    type CheckSessionSuccessCallback = (res: GeneralCallbackResult) => void;

    interface GetSystemInfoOption {
        complete?: GetSystemInfoCompleteCallback;
        fail?: GetSystemInfoFailCallback;
        success?: GetSystemInfoSuccessCallback;
    }
    interface GetSystemInfoSuccessCallbackResult {
        version: string;
        errMsg: string;
    }
    type GetSystemInfoCompleteCallback = (res: GeneralCallbackResult) => void;
    type GetSystemInfoFailCallback = (res: GeneralCallbackResult) => void;
    type GetSystemInfoSuccessCallback = (res: GetSystemInfoSuccessCallbackResult) => void;

    interface GetContextOption {
        complete?: GetContextCompleteCallback;
        fail?: GetContextFailCallback;
        success?: GetContextSuccessCallback;
    }
    interface GetContextSuccessCallbackResult {
        entry: string;
        shareTicket?: string;
        errMsg: string;
    }
    type GetContextCompleteCallback = (res: GeneralCallbackResult) => void;
    type GetContextFailCallback = (res: GeneralCallbackResult) => void;
    type GetContextSuccessCallback = (res: GetContextSuccessCallbackResult) => void;

    interface SetShareAttrOption {
        complete?: SetShareAttrCompleteCallback;
        fail?: SetShareAttrFailCallback;
        success?: SetShareAttrSuccessCallback;
        withShareTicket?: boolean;
        state?: string;
    }
    type SetShareAttrCompleteCallback = (res: GeneralCallbackResult) => void;
    type SetShareAttrFailCallback = (res: GeneralCallbackResult) => void;
    type SetShareAttrSuccessCallback = (res: GeneralCallbackResult) => void;

    interface GetShareInfoOption {
        complete?: GetShareInfoCompleteCallback;
        fail?: GetShareInfoFailCallback;
        success?: GetShareInfoSuccessCallback;
        shareTicket: string;
    }
    interface GetShareInfoSuccessCallbackResult {
        encryptedData: string;
        iv: string;
        errMsg: string;
    }
    type GetShareInfoCompleteCallback = (res: GeneralCallbackResult) => void;
    type GetShareInfoFailCallback = (res: GeneralCallbackResult) => void;
    type GetShareInfoSuccessCallback = (res: GetShareInfoSuccessCallbackResult) => void;

    interface SelectEnterpriseContactOption {
        complete?: SelectEnterpriseContactCompleteCallback;
        fail?: SelectEnterpriseContactFailCallback;
        success?: SelectEnterpriseContactSuccessCallback;
        fromDepartmentId: number;
        mode: "single" | "multi";
        type: string[];
        selectedDepartmentIds?: string[];
        selectedUserIds?: string[];
    }
    interface SelectEnterpriseContactSuccessCallbackResult {
        selectedDepartmentList?: { id: string; name: string }[];
        selectedUserList?: { id: string; name: string; avatar: string }[];
        errMsg: string;
    }
    type SelectEnterpriseContactCompleteCallback = (res: GeneralCallbackResult) => void;
    type SelectEnterpriseContactFailCallback = (res: GeneralCallbackResult) => void;
    type SelectEnterpriseContactSuccessCallback = (res: SelectEnterpriseContactSuccessCallbackResult) => void;

    interface OpenUserProfileOption {
        complete?: OpenUserProfileCompleteCallback;
        fail?: OpenUserProfileFailCallback;
        success?: OpenUserProfileSuccessCallback;
        type?: number;
        userid?: string;
    }
    type OpenUserProfileCompleteCallback = (res: GeneralCallbackResult) => void;
    type OpenUserProfileFailCallback = (res: GeneralCallbackResult) => void;
    type OpenUserProfileSuccessCallback = (res: GeneralCallbackResult) => void;

    interface GetEnterpriseUserInfoOption {
        complete?: GetEnterpriseUserInfoCompleteCallback;
        fail?: GetEnterpriseUserInfoFailCallback;
        success?: GetEnterpriseUserInfoSuccessCallback;
        timeout?: number;
    }
    interface GetEnterpriseUserInfoSuccessCallbackResult {
        encryptedData: string;
        iv: string;
        rawData: string;
        signature: string;
        userInfo: {
            name: string;
            gender: 0 | 1 | 2;
            language: string;
        };
        errMsg: string;
    }
    type GetEnterpriseUserInfoCompleteCallback = (res: GeneralCallbackResult) => void;
    type GetEnterpriseUserInfoFailCallback = (res: GeneralCallbackResult) => void;
    type GetEnterpriseUserInfoSuccessCallback = (res: GetEnterpriseUserInfoSuccessCallbackResult) => void;

    interface GetAvatarOption {
        complete?: GetAvatarCompleteCallback;
        fail?: GetAvatarFailCallback;
        success?: GetAvatarSuccessCallback;
        timeout?: number;
    }
    interface GetAvatarSuccessCallbackResult {
        avatar: string;
        errMsg: string;
    }
    type GetAvatarCompleteCallback = (res: GeneralCallbackResult) => void;
    type GetAvatarFailCallback = (res: GeneralCallbackResult) => void;
    type GetAvatarSuccessCallback = (res: GetAvatarSuccessCallbackResult) => void;

    interface GetQrCodeOption {
        complete?: GetQrCodeCompleteCallback;
        fail?: GetQrCodeFailCallback;
        success?: GetQrCodeSuccessCallback;
        timeout?: number;
    }
    interface GetQrCodeSuccessCallbackResult {
        qrCode: string;
        errMsg: string;
    }
    type GetQrCodeCompleteCallback = (res: GeneralCallbackResult) => void;
    type GetQrCodeFailCallback = (res: GeneralCallbackResult) => void;
    type GetQrCodeSuccessCallback = (res: GetQrCodeSuccessCallbackResult) => void;

    interface SelectCorpGroupContactOption {
        complete?: SelectCorpGroupContactCompleteCallback;
        fail?: SelectCorpGroupContactFailCallback;
        success?: SelectCorpGroupContactSuccessCallback;
        fromDepartmentId: number;
        mode: "single" | "multi";
        type: string[];
        selectedDepartmentIds?: string[];
        selectedUserIds?: string[];
        selectedOpenUserIds?: string[];
        selectedChainDepartmentIds?: { corpId: string; departmentId: string }[];
        selectedChainUserIds?: { corpId: string; userId?: string; openUserId?: string }[];
        selectedCorpGroupDepartmentIds?: { corpId: string; departmentId: string }[];
        selectedCorpGroupUserIds?: { corpId: string; userId?: string; openUserId?: string }[];
    }
    interface SelectCorpGroupContactSuccessCallbackResult {
        result: {
            departmentList?: { id: string }[];
            userList?: { id?: string; openUserId?: string }[];
            corpGroupDepartmentList?: { corpId: string; id: string }[];
            corpGroupUserList?: { corpId: string; id?: string; openUserId?: string }[];
            chainDepartmentList?: { corpId: string; id: string }[];
            chainUserList?: { corpId: string; id?: string; openUserId?: string }[];
        };
        errMsg: string;
    }
    type SelectCorpGroupContactCompleteCallback = (res: GeneralCallbackResult) => void;
    type SelectCorpGroupContactFailCallback = (res: GeneralCallbackResult) => void;
    type SelectCorpGroupContactSuccessCallback = (res: SelectCorpGroupContactSuccessCallbackResult) => void;

    interface ClaimClassAdminOption {
        complete?: ClaimClassAdminCompleteCallback;
        fail?: ClaimClassAdminFailCallback;
        success?: ClaimClassAdminSuccessCallback;
    }
    interface ClaimClassAdminSuccessCallbackResult {
        departmentIds: string[];
        errMsg: string;
    }
    type ClaimClassAdminCompleteCallback = (res: GeneralCallbackResult) => void;
    type ClaimClassAdminFailCallback = (res: GeneralCallbackResult) => void;
    type ClaimClassAdminSuccessCallback = (res: ClaimClassAdminSuccessCallbackResult) => void;

    interface SelectPrivilegedContactOption {
        complete?: SelectPrivilegedContactCompleteCallback;
        fail?: SelectPrivilegedContactFailCallback;
        success?: SelectPrivilegedContactSuccessCallback;
        fromDepartmentId: number;
        mode: "single" | "multi";
        selectedContextContact?: 0 | 1;
        selectedOpenUserIds?: string[];
        selectedTickets?: string[];
    }
    interface SelectPrivilegedContactSuccessCallbackResult {
        result: {
            userList?: { openUserId: string }[];
            selectedTicket: string;
            expiresIn: number;
            selectedUserCount: number;
        };
        errMsg: string;
    }
    type SelectPrivilegedContactCompleteCallback = (res: GeneralCallbackResult) => void;
    type SelectPrivilegedContactFailCallback = (res: GeneralCallbackResult) => void;
    type SelectPrivilegedContactSuccessCallback = (res: SelectPrivilegedContactSuccessCallbackResult) => void;

    interface OpenEnterpriseChatOption {
        complete?: OpenEnterpriseChatCompleteCallback;
        fail?: OpenEnterpriseChatFailCallback;
        success?: OpenEnterpriseChatSuccessCallback;
        userIds?: string;
        externalUserIds?: string;
        groupName?: string;
        chatId?: string;
    }
    interface OpenEnterpriseChatSuccessCallbackResult {
        chatId: string;
        errMsg: string;
    }
    type OpenEnterpriseChatCompleteCallback = (res: GeneralCallbackResult) => void;
    type OpenEnterpriseChatFailCallback = (res: GeneralCallbackResult) => void;
    type OpenEnterpriseChatSuccessCallback = (res: OpenEnterpriseChatSuccessCallbackResult) => void;

    interface UpdateEnterpriseChatOption {
        complete?: UpdateEnterpriseChatCompleteCallback;
        fail?: UpdateEnterpriseChatFailCallback;
        success?: UpdateEnterpriseChatSuccessCallback;
        chatId?: string;
        userIdsToAdd?: string;
    }
    type UpdateEnterpriseChatCompleteCallback = (res: GeneralCallbackResult) => void;
    type UpdateEnterpriseChatFailCallback = (res: GeneralCallbackResult) => void;
    type UpdateEnterpriseChatSuccessCallback = (res: GeneralCallbackResult) => void;

    interface SelectExternalContactOption {
        complete?: SelectExternalContactCompleteCallback;
        fail?: SelectExternalContactFailCallback;
        success?: SelectExternalContactSuccessCallback;
        filterType?: number;
    }
    interface SelectExternalContactSuccessCallbackResult {
        userIds: string[];
        errMsg: string;
    }
    type SelectExternalContactCompleteCallback = (res: GeneralCallbackResult) => void;
    type SelectExternalContactFailCallback = (res: GeneralCallbackResult) => void;
    type SelectExternalContactSuccessCallback = (res: SelectExternalContactSuccessCallbackResult) => void;

    interface SendChatMessageOption {
        complete?: SendChatMessageCompleteCallback;
        fail?: SendChatMessageFailCallback;
        success?: SendChatMessageSuccessCallback;
        msgtype: string;
        enterChat?: boolean;
        text?: {
            content: string;
        };
        image?: {
            mediaid: string;
        };
        video?: {
            mediaid: string;
        };
        file?: {
            mediaid: string;
        };
        news?: {
            link: string;
            title: string;
            desc: string;
            imgUrl: string;
        };
        miniprogram?: {
            appid: string;
            title: string;
            imgUrl: string;
            page: string;
        };
        msgmenu?: {
            head_content?: string;
            tail_content?: string;
            list?: {
                type: string;
                click?: { id: string; content: string };
                view?: { url: string; content: string };
                miniprogram?: { appid: string; page: string; content: string };
            }[];
        };
    }
    type SendChatMessageCompleteCallback = (res: GeneralCallbackResult) => void;
    type SendChatMessageFailCallback = (res: GeneralCallbackResult) => void;
    type SendChatMessageSuccessCallback = (res: GeneralCallbackResult) => void;

    interface CreateCorpGroupChatOption {
        complete?: CreateCorpGroupChatCompleteCallback;
        fail?: CreateCorpGroupChatFailCallback;
        success?: CreateCorpGroupChatSuccessCallback;
        groupName?: string;
        userIds?: string[];
        openUserIds?: string[];
        externalUserIds?: string[];
        corpGroupUserIds?: { corpId: string; userId?: string; openUserId?: string }[];
    }
    interface CreateCorpGroupChatSuccessCallbackResult {
        chatId: string;
        errMsg: string;
    }
    type CreateCorpGroupChatCompleteCallback = (res: GeneralCallbackResult) => void;
    type CreateCorpGroupChatFailCallback = (res: GeneralCallbackResult) => void;
    type CreateCorpGroupChatSuccessCallback = (res: CreateCorpGroupChatSuccessCallbackResult) => void;

    interface UpdateCorpGroupChatOption {
        complete?: UpdateCorpGroupChatCompleteCallback;
        fail?: UpdateCorpGroupChatFailCallback;
        success?: UpdateCorpGroupChatSuccessCallback;
        chatId: string;
        userIdsToAdd?: string[];
        openUserIdsToAdd?: string[];
        corpGroupUserIdsToAdd?: { corpId: string; userId?: string; openUserId?: string }[];
    }
    interface UpdateCorpGroupChatSuccessCallbackResult {
        chatId: string;
        errMsg: string;
    }
    type UpdateCorpGroupChatCompleteCallback = (res: GeneralCallbackResult) => void;
    type UpdateCorpGroupChatFailCallback = (res: GeneralCallbackResult) => void;
    type UpdateCorpGroupChatSuccessCallback = (res: UpdateCorpGroupChatSuccessCallbackResult) => void;

    interface GetNFCReaderStateOption {
        complete?: GetNFCReaderStateCompleteCallback;
        fail?: GetNFCReaderStateFailCallback;
        success?: GetNFCReaderStateSuccessCallback;
    }
    type GetNFCReaderStateCompleteCallback = (res: GeneralCallbackResult) => void;
    type GetNFCReaderStateFailCallback = (res: GeneralCallbackResult) => void;
    type GetNFCReaderStateSuccessCallback = (res: GeneralCallbackResult) => void;

    interface StartNFCReaderOption {
        complete?: StartNFCReaderCompleteCallback;
        fail?: StartNFCReaderFailCallback;
        success?: StartNFCReaderSuccessCallback;
    }
    type StartNFCReaderCompleteCallback = (res: GeneralCallbackResult) => void;
    type StartNFCReaderFailCallback = (res: GeneralCallbackResult) => void;
    type StartNFCReaderSuccessCallback = (res: GeneralCallbackResult) => void;

    interface StopNFCReaderOption {
        complete?: StopNFCReaderCompleteCallback;
        fail?: StopNFCReaderFailCallback;
        success?: StopNFCReaderSuccessCallback;
    }
    type StopNFCReaderCompleteCallback = (res: GeneralCallbackResult) => void;
    type StopNFCReaderFailCallback = (res: GeneralCallbackResult) => void;
    type StopNFCReaderSuccessCallback = (res: GeneralCallbackResult) => void;

    interface OnNFCReadMessageCallback {
        messageType: number;
        data?: {
            hex: string;
            reversed_hex: string;
            dec: number;
            reversed_dec: number;
        };
    }

    interface TranslateVoiceOption {
        complete?: TranslateVoiceCompleteCallback;
        fail?: TranslateVoiceFailCallback;
        success?: TranslateVoiceSuccessCallback;
        filePath: string;
        isShowProgressTips?: 0 | 1;
    }
    interface TranslateVoiceSuccessCallbackResult {
        translateResult: string;
        errMsg: string;
    }
    type TranslateVoiceCompleteCallback = (res: GeneralCallbackResult) => void;
    type TranslateVoiceFailCallback = (res: GeneralCallbackResult) => void;
    type TranslateVoiceSuccessCallback = (res: TranslateVoiceSuccessCallbackResult) => void;

    interface ChooseMessageFileOption {
        complete?: ChooseMessageFileCompleteCallback;
        fail?: ChooseMessageFileFailCallback;
        success?: ChooseMessageFileSuccessCallback;
        count: number;
        type?: string;
    }
    interface ChooseMessageFileSuccessCallbackResult {
        tempFiles: { path: string; size: number; name: string; type: string; time: number }[];
        errMsg: string;
    }
    type ChooseMessageFileCompleteCallback = (res: GeneralCallbackResult) => void;
    type ChooseMessageFileFailCallback = (res: GeneralCallbackResult) => void;
    type ChooseMessageFileSuccessCallback = (res: ChooseMessageFileSuccessCallbackResult) => void;

    interface GetCurExternalContactOption {
        complete?: GetCurExternalContactCompleteCallback;
        fail?: GetCurExternalContactFailCallback;
        success?: GetCurExternalContactSuccessCallback;
    }
    interface GetCurExternalContactSuccessCallbackResult {
        userId: string;
        errMsg: string;
    }
    type GetCurExternalContactCompleteCallback = (res: GeneralCallbackResult) => void;
    type GetCurExternalContactFailCallback = (res: GeneralCallbackResult) => void;
    type GetCurExternalContactSuccessCallback = (res: GetCurExternalContactSuccessCallbackResult) => void;

    interface GetCurExternalChatOption {
        complete?: GetCurExternalChatCompleteCallback;
        fail?: GetCurExternalChatFailCallback;
        success?: GetCurExternalChatSuccessCallback;
    }
    interface GetCurExternalChatSuccessCallbackResult {
        chatId: string;
        errMsg: string;
    }
    type GetCurExternalChatCompleteCallback = (res: GeneralCallbackResult) => void;
    type GetCurExternalChatFailCallback = (res: GeneralCallbackResult) => void;
    type GetCurExternalChatSuccessCallback = (res: GetCurExternalChatSuccessCallbackResult) => void;

    interface ShareToExternalContactOption {
        complete?: ShareToExternalContactCompleteCallback;
        fail?: ShareToExternalContactFailCallback;
        success?: ShareToExternalContactSuccessCallback;
        text?: {
            content: string;
        };
        attachments?: {
            msgtype: string;
            image?: {
                mediaid?: string;
                imgUrl?: string;
            };
            link?: {
                title: string;
                desc: string;
                url: string;
                imgUrl: string;
            };
            miniprogram?: {
                appid: string;
                title: string;
                imgUrl: string;
                page: string;
            };
            video?: {
                mediaid: string;
            };
            file?: {
                mediaid: string;
            };
        }[];
    }
    type ShareToExternalContactCompleteCallback = (res: GeneralCallbackResult) => void;
    type ShareToExternalContactFailCallback = (res: GeneralCallbackResult) => void;
    type ShareToExternalContactSuccessCallback = (res: GeneralCallbackResult) => void;

    interface ShareToExternalChatOption {
        complete?: ShareToExternalChatCompleteCallback;
        fail?: ShareToExternalChatFailCallback;
        success?: ShareToExternalChatSuccessCallback;
        text?: {
            content: string;
        };
        attachments?: {
            msgtype: string;
            image?: {
                mediaid?: string;
                imgUrl?: string;
            };
            link?: {
                title: string;
                desc: string;
                url: string;
                imgUrl: string;
            };
            miniprogram?: {
                appid: string;
                title: string;
                imgUrl: string;
                page: string;
            };
            video?: {
                mediaid: string;
            };
            file?: {
                mediaid: string;
            };
        }[];
    }
    type ShareToExternalChatCompleteCallback = (res: GeneralCallbackResult) => void;
    type ShareToExternalChatFailCallback = (res: GeneralCallbackResult) => void;
    type ShareToExternalChatSuccessCallback = (res: GeneralCallbackResult) => void;

    interface NavigateToAddCustomerOption {
        complete?: NavigateToAddCustomerCompleteCallback;
        fail?: NavigateToAddCustomerFailCallback;
        success?: NavigateToAddCustomerSuccessCallback;
    }
    type NavigateToAddCustomerCompleteCallback = (res: GeneralCallbackResult) => void;
    type NavigateToAddCustomerFailCallback = (res: GeneralCallbackResult) => void;
    type NavigateToAddCustomerSuccessCallback = (res: GeneralCallbackResult) => void;

    interface ShareToExternalMomentsOption {
        complete?: ShareToExternalMomentsCompleteCallback;
        fail?: ShareToExternalMomentsFailCallback;
        success?: ShareToExternalMomentsSuccessCallback;
        text?: {
            content: string;
        };
        attachments?: {
            msgtype: string;
            image?: {
                mediaid?: string;
                imgUrl?: string;
            };
            link?: {
                title: string;
                url: string;
                imgUrl: string;
            };
            video?: {
                mediaid: string;
            };
        }[];
    }
    type ShareToExternalMomentsCompleteCallback = (res: GeneralCallbackResult) => void;
    type ShareToExternalMomentsFailCallback = (res: GeneralCallbackResult) => void;
    type ShareToExternalMomentsSuccessCallback = (res: GeneralCallbackResult) => void;

    interface UpdateMomentsSettingOption {
        signature?: string;
        imgUrl?: string;
    }
    type UpdateMomentsSettingCompleteCallback = (res: GeneralCallbackResult) => void;

    interface NavigateToKfChatOption {
        complete?: NavigateToKfChatCompleteCallback;
        fail?: NavigateToKfChatFailCallback;
        success?: NavigateToKfChatSuccessCallback;
        openKfId: string;
        externalUserId?: string;
    }
    type NavigateToKfChatCompleteCallback = (res: GeneralCallbackResult) => void;
    type NavigateToKfChatFailCallback = (res: GeneralCallbackResult) => void;
    type NavigateToKfChatSuccessCallback = (res: GeneralCallbackResult) => void;

    interface CreateExternalPaymentOption {
        complete?: CreateExternalPaymentCompleteCallback;
        fail?: CreateExternalPaymentFailCallback;
        success?: CreateExternalPaymentSuccessCallback;
        paymentType?: number;
        totalFee?: number;
        description?: string;
    }
    interface CreateExternalPaymentSuccessCallbackResult {
        paymentId: string;
        errMsg: string;
    }
    type CreateExternalPaymentCompleteCallback = (res: GeneralCallbackResult) => void;
    type CreateExternalPaymentFailCallback = (res: GeneralCallbackResult) => void;
    type CreateExternalPaymentSuccessCallback = (res: CreateExternalPaymentSuccessCallbackResult) => void;

    interface RefundExternalPaymentOption {
        complete?: RefundExternalPaymentCompleteCallback;
        fail?: RefundExternalPaymentFailCallback;
        success?: RefundExternalPaymentSuccessCallback;
        paymentId: string;
        outTradeNo: string;
        refundFee?: number;
        refundComment?: string;
    }
    interface RefundExternalPaymentSuccessCallbackResult {
        errMsg: string;
    }
    type RefundExternalPaymentCompleteCallback = (res: GeneralCallbackResult) => void;
    type RefundExternalPaymentFailCallback = (res: GeneralCallbackResult) => void;
    type RefundExternalPaymentSuccessCallback = (res: RefundExternalPaymentSuccessCallbackResult) => void;

    interface CreateSchoolPaymentOption {
        complete?: CreateSchoolPaymentCompleteCallback;
        fail?: CreateSchoolPaymentFailCallback;
        success?: CreateSchoolPaymentSuccessCallback;
        projectName?: string;
        amount?: number;
        payers?: {
            students?: string[];
            departments?: number[];
        };
    }
    interface CreateSchoolPaymentSuccessCallbackResult {
        paymentId: string;
        errMsg: string;
    }
    type CreateSchoolPaymentCompleteCallback = (res: GeneralCallbackResult) => void;
    type CreateSchoolPaymentFailCallback = (res: GeneralCallbackResult) => void;
    type CreateSchoolPaymentSuccessCallback = (res: CreateSchoolPaymentSuccessCallbackResult) => void;

    interface CreateDocOption {
        complete?: CreateDocCompleteCallback;
        fail?: CreateDocFailCallback;
        success?: CreateDocSuccessCallback;
        docType: number;
    }
    type CreateDocCompleteCallback = (res: GeneralCallbackResult) => void;
    type CreateDocFailCallback = (res: GeneralCallbackResult) => void;
    type CreateDocSuccessCallback = (res: GeneralCallbackResult) => void;

    interface CheckScheduleOption {
        complete?: CheckScheduleCompleteCallback;
        fail?: CheckScheduleFailCallback;
        success?: CheckScheduleSuccessCallback;
        start_time: number;
        end_time: number;
        users?: string[];
    }
    type CheckScheduleCompleteCallback = (res: GeneralCallbackResult) => void;
    type CheckScheduleFailCallback = (res: GeneralCallbackResult) => void;
    type CheckScheduleSuccessCallback = (res: GeneralCallbackResult) => void;

    interface StartMeetingOption {
        complete?: StartMeetingCompleteCallback;
        fail?: StartMeetingFailCallback;
        success?: StartMeetingSuccessCallback;
        meetingId?: string;
    }
    type StartMeetingCompleteCallback = (res: GeneralCallbackResult) => void;
    type StartMeetingFailCallback = (res: GeneralCallbackResult) => void;
    type StartMeetingSuccessCallback = (res: GeneralCallbackResult) => void;

    interface WedriveSelectDirOption {
        complete?: WedriveSelectDirCompleteCallback;
        fail?: WedriveSelectDirFailCallback;
        success?: WedriveSelectDirSuccessCallback;
    }
    interface WedriveSelectDirSuccessCallbackResult {
        result: {
            selectedTicket: string;
        };
        errMsg: string;
    }
    type WedriveSelectDirCompleteCallback = (res: GeneralCallbackResult) => void;
    type WedriveSelectDirFailCallback = (res: GeneralCallbackResult) => void;
    type WedriveSelectDirSuccessCallback = (res: WedriveSelectDirSuccessCallbackResult) => void;

    interface WedriveSelectFileForShareOption {
        complete?: WedriveSelectFileForShareCompleteCallback;
        fail?: WedriveSelectFileForShareFailCallback;
        success?: WedriveSelectFileForShareSuccessCallback;
        selectedFileNum: number;
    }
    interface WedriveSelectFileForShareSuccessCallbackResult {
        result: {
            selectedFileUrls: string[];
        };
        errMsg: string;
    }
    type WedriveSelectFileForShareCompleteCallback = (res: GeneralCallbackResult) => void;
    type WedriveSelectFileForShareFailCallback = (res: GeneralCallbackResult) => void;
    type WedriveSelectFileForShareSuccessCallback = (res: WedriveSelectFileForShareSuccessCallbackResult) => void;

    interface WedriveSelectFileForDownloadOption {
        complete?: WedriveSelectFileForDownloadCompleteCallback;
        fail?: WedriveSelectFileForDownloadFailCallback;
        success?: WedriveSelectFileForDownloadSuccessCallback;
        selectedFileNum: number;
    }
    interface WedriveSelectFileForDownloadSuccessCallbackResult {
        result: {
            selectedTickets: string[];
        };
        errMsg: string;
    }
    type WedriveSelectFileForDownloadCompleteCallback = (res: GeneralCallbackResult) => void;
    type WedriveSelectFileForDownloadFailCallback = (res: GeneralCallbackResult) => void;
    type WedriveSelectFileForDownloadSuccessCallback = (res: WedriveSelectFileForDownloadSuccessCallbackResult) => void;

    interface WedocSelectDocOption {
        complete?: WedocSelectDocCompleteCallback;
        fail?: WedocSelectDocFailCallback;
        success?: WedocSelectDocSuccessCallback;
        selectedFileNum: number;
    }
    interface WedocSelectDocSuccessCallbackResult {
        result: {
            selectedFileUrls: string[];
        };
        errMsg: string;
    }
    type WedocSelectDocCompleteCallback = (res: GeneralCallbackResult) => void;
    type WedocSelectDocFailCallback = (res: GeneralCallbackResult) => void;
    type WedocSelectDocSuccessCallback = (res: WedocSelectDocSuccessCallbackResult) => void;

    interface StartLivingOption {
        complete?: StartLivingCompleteCallback;
        fail?: StartLivingFailCallback;
        success?: StartLivingSuccessCallback;
        livingId?: string;
        liveType?: number;
        theme?: string;
        departmentIds?: number[];
    }
    interface StartLivingSuccessCallbackResult {
        livingId?: string;
        errMsg: string;
    }
    type StartLivingCompleteCallback = (res: GeneralCallbackResult) => void;
    type StartLivingFailCallback = (res: GeneralCallbackResult) => void;
    type StartLivingSuccessCallback = (res: StartLivingSuccessCallbackResult) => void;

    interface ReplayLivingOption {
        complete?: ReplayLivingCompleteCallback;
        fail?: ReplayLivingFailCallback;
        success?: ReplayLivingSuccessCallback;
        livingId: string;
    }
    type ReplayLivingCompleteCallback = (res: GeneralCallbackResult) => void;
    type ReplayLivingFailCallback = (res: GeneralCallbackResult) => void;
    type ReplayLivingSuccessCallback = (res: GeneralCallbackResult) => void;

    interface DownloadLivingReplayOption {
        complete?: DownloadLivingReplayCompleteCallback;
        fail?: DownloadLivingReplayFailCallback;
        success?: DownloadLivingReplaySuccessCallback;
        livingId: string;
    }
    type DownloadLivingReplayCompleteCallback = (res: GeneralCallbackResult) => void;
    type DownloadLivingReplayFailCallback = (res: GeneralCallbackResult) => void;
    type DownloadLivingReplaySuccessCallback = (res: GeneralCallbackResult) => void;

    interface OpenThirdAppServiceChatOption {
        complete?: OpenThirdAppServiceChatCompleteCallback;
        fail?: OpenThirdAppServiceChatFailCallback;
        success?: OpenThirdAppServiceChatSuccessCallback;
    }
    type OpenThirdAppServiceChatCompleteCallback = (res: GeneralCallbackResult) => void;
    type OpenThirdAppServiceChatFailCallback = (res: GeneralCallbackResult) => void;
    type OpenThirdAppServiceChatSuccessCallback = (res: GeneralCallbackResult) => void;

    interface OpenAppManageOption {
        complete?: OpenAppManageCompleteCallback;
        fail?: OpenAppManageFailCallback;
        success?: OpenAppManageSuccessCallback;
    }
    type OpenAppManageCompleteCallback = (res: GeneralCallbackResult) => void;
    type OpenAppManageFailCallback = (res: GeneralCallbackResult) => void;
    type OpenAppManageSuccessCallback = (res: GeneralCallbackResult) => void;

    interface OpenAppCommentOption {
        complete?: OpenAppCommentCompleteCallback;
        fail?: OpenAppCommentFailCallback;
        success?: OpenAppCommentSuccessCallback;
    }
    type OpenAppCommentCompleteCallback = (res: GeneralCallbackResult) => void;
    type OpenAppCommentFailCallback = (res: GeneralCallbackResult) => void;
    type OpenAppCommentSuccessCallback = (res: GeneralCallbackResult) => void;

    interface OpenAppDeviceDataAuthOption {
        complete?: OpenAppDeviceDataAuthCompleteCallback;
        fail?: OpenAppDeviceDataAuthFailCallback;
        success?: OpenAppDeviceDataAuthSuccessCallback;
    }
    type OpenAppDeviceDataAuthCompleteCallback = (res: GeneralCallbackResult) => void;
    type OpenAppDeviceDataAuthFailCallback = (res: GeneralCallbackResult) => void;
    type OpenAppDeviceDataAuthSuccessCallback = (res: GeneralCallbackResult) => void;

    interface AddDeviceOption {
        complete?: AddDeviceCompleteCallback;
        fail?: AddDeviceFailCallback;
        success?: AddDeviceSuccessCallback;
        type: string;
        qrcode_url?: string;
        sn?: string;
    }
    type AddDeviceCompleteCallback = (res: GeneralCallbackResult) => void;
    type AddDeviceFailCallback = (res: GeneralCallbackResult) => void;
    type AddDeviceSuccessCallback = (res: GeneralCallbackResult) => void;

    interface OpenDeviceProfileOption {
        complete?: OpenDeviceProfileCompleteCallback;
        fail?: OpenDeviceProfileFailCallback;
        success?: OpenDeviceProfileSuccessCallback;
        deviceSn: string;
    }
    type OpenDeviceProfileCompleteCallback = (res: GeneralCallbackResult) => void;
    type OpenDeviceProfileFailCallback = (res: GeneralCallbackResult) => void;
    type OpenDeviceProfileSuccessCallback = (res: GeneralCallbackResult) => void;

    interface QueryCurrHWOpenTalkOption {
        complete?: QueryCurrHWOpenTalkCompleteCallback;
        fail?: QueryCurrHWOpenTalkFailCallback;
        success?: QueryCurrHWOpenTalkSuccessCallback;
    }
    interface QueryCurrHWOpenTalkSuccessCallbackResult {
        inTalkType?: string;
        ticket?: string;
        errMsg: string;
    }
    type QueryCurrHWOpenTalkCompleteCallback = (res: GeneralCallbackResult) => void;
    type QueryCurrHWOpenTalkFailCallback = (res: GeneralCallbackResult) => void;
    type QueryCurrHWOpenTalkSuccessCallback = (res: QueryCurrHWOpenTalkSuccessCallbackResult) => void;

    interface EnterHWOpenTalkOption {
        complete?: EnterHWOpenTalkCompleteCallback;
        fail?: EnterHWOpenTalkFailCallback;
        success?: EnterHWOpenTalkSuccessCallback;
        code: string;
        ticket?: string;
    }
    type EnterHWOpenTalkCompleteCallback = (res: GeneralCallbackResult) => void;
    type EnterHWOpenTalkFailCallback = (res: GeneralCallbackResult) => void;
    type EnterHWOpenTalkSuccessCallback = (res: GeneralCallbackResult) => void;

    interface StartWecastOption {
        complete?: StartWecastCompleteCallback;
        fail?: StartWecastFailCallback;
        success?: StartWecastSuccessCallback;
    }
    type StartWecastCompleteCallback = (res: GeneralCallbackResult) => void;
    type StartWecastFailCallback = (res: GeneralCallbackResult) => void;
    type StartWecastSuccessCallback = (res: GeneralCallbackResult) => void;

    interface PrintFileOption {
        complete?: PrintFileCompleteCallback;
        fail?: PrintFileFailCallback;
        success?: PrintFileSuccessCallback;
        fileId: string;
        fileIdType: string;
        fileName?: string;
    }
    type PrintFileCompleteCallback = (res: GeneralCallbackResult) => void;
    type PrintFileFailCallback = (res: GeneralCallbackResult) => void;
    type PrintFileSuccessCallback = (res: GeneralCallbackResult) => void;

}

declare namespace WechatMiniprogram {
    interface Qy {
        // 基础：登录
        login<T extends WechatMiniprogram.Qy.LoginOption = WechatMiniprogram.Qy.LoginOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.LoginOption>;
        checkSession<T extends WechatMiniprogram.Qy.CheckSessionOption = WechatMiniprogram.Qy.CheckSessionOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.CheckSessionOption>;

        // 基础：基础接口
        getSystemInfo<T extends WechatMiniprogram.Qy.GetSystemInfoOption = WechatMiniprogram.Qy.GetSystemInfoOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.GetSystemInfoOption>;
        canIUse(schema: string): boolean;
        getContext<T extends WechatMiniprogram.Qy.GetContextOption = WechatMiniprogram.Qy.GetContextOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.GetContextOption>;
        setShareAttr<T extends WechatMiniprogram.Qy.SetShareAttrOption = WechatMiniprogram.Qy.SetShareAttrOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.SetShareAttrOption>;
        getShareInfo<T extends WechatMiniprogram.Qy.GetShareInfoOption = WechatMiniprogram.Qy.GetShareInfoOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.GetShareInfoOption>;

        // 基础：企业通讯录
        selectEnterpriseContact<T extends WechatMiniprogram.Qy.SelectEnterpriseContactOption = WechatMiniprogram.Qy.SelectEnterpriseContactOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.SelectEnterpriseContactOption>;
        openUserProfile<T extends WechatMiniprogram.Qy.OpenUserProfileOption = WechatMiniprogram.Qy.OpenUserProfileOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.OpenUserProfileOption>;
        getEnterpriseUserInfo<T extends WechatMiniprogram.Qy.GetEnterpriseUserInfoOption = WechatMiniprogram.Qy.GetEnterpriseUserInfoOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.GetEnterpriseUserInfoOption>;
        getAvatar<T extends WechatMiniprogram.Qy.GetAvatarOption = WechatMiniprogram.Qy.GetAvatarOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.GetAvatarOption>;
        getQrCode<T extends WechatMiniprogram.Qy.GetQrCodeOption = WechatMiniprogram.Qy.GetQrCodeOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.GetQrCodeOption>;
        selectCorpGroupContact<T extends WechatMiniprogram.Qy.SelectCorpGroupContactOption = WechatMiniprogram.Qy.SelectCorpGroupContactOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.SelectCorpGroupContactOption>;
        claimClassAdmin<T extends WechatMiniprogram.Qy.ClaimClassAdminOption = WechatMiniprogram.Qy.ClaimClassAdminOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.ClaimClassAdminOption>;
        selectPrivilegedContact<T extends WechatMiniprogram.Qy.SelectPrivilegedContactOption = WechatMiniprogram.Qy.SelectPrivilegedContactOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.SelectPrivilegedContactOption>;

        // 基础：会话接口
        openEnterpriseChat<T extends WechatMiniprogram.Qy.OpenEnterpriseChatOption = WechatMiniprogram.Qy.OpenEnterpriseChatOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.OpenEnterpriseChatOption>;
        updateEnterpriseChat<T extends WechatMiniprogram.Qy.UpdateEnterpriseChatOption = WechatMiniprogram.Qy.UpdateEnterpriseChatOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.UpdateEnterpriseChatOption>;
        sendChatMessage<T extends WechatMiniprogram.Qy.SendChatMessageOption = WechatMiniprogram.Qy.SendChatMessageOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.SendChatMessageOption>;
        createCorpGroupChat<T extends WechatMiniprogram.Qy.CreateCorpGroupChatOption = WechatMiniprogram.Qy.CreateCorpGroupChatOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.CreateCorpGroupChatOption>;
        updateCorpGroupChat<T extends WechatMiniprogram.Qy.UpdateCorpGroupChatOption = WechatMiniprogram.Qy.UpdateCorpGroupChatOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.UpdateCorpGroupChatOption>;

        // 基础：NFC 接口
        getNFCReaderState<T extends WechatMiniprogram.Qy.GetNFCReaderStateOption = WechatMiniprogram.Qy.GetNFCReaderStateOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.GetNFCReaderStateOption>;
        startNFCReader<T extends WechatMiniprogram.Qy.StopNFCReaderOption = WechatMiniprogram.Qy.StartNFCReaderOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.StartNFCReaderOption>;
        stopNFCReader<T extends WechatMiniprogram.Qy.StopNFCReaderOption = WechatMiniprogram.Qy.StopNFCReaderOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.StopNFCReaderOption>;
        onNFCReadMessage(callback: WechatMiniprogram.Qy.OnNFCReadMessageCallback): void;

        // 基础：更多
        translateVoice<T extends WechatMiniprogram.Qy.TranslateVoiceOption = WechatMiniprogram.Qy.TranslateVoiceOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.TranslateVoiceOption>;
        chooseMessageFile<T extends WechatMiniprogram.Qy.ChooseMessageFileOption = WechatMiniprogram.Qy.ChooseMessageFileOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.ChooseMessageFileOption>;

        // 连接微信：客户联系
        selectExternalContact<T extends WechatMiniprogram.Qy.SelectExternalContactOption = WechatMiniprogram.Qy.SelectExternalContactOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.SelectExternalContactOption>;
        getCurExternalContact<T extends WechatMiniprogram.Qy.GetCurExternalContactOption = WechatMiniprogram.Qy.GetCurExternalContactOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.GetCurExternalContactOption>;
        getCurExternalChat<T extends WechatMiniprogram.Qy.GetCurExternalChatOption = WechatMiniprogram.Qy.GetCurExternalChatOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.GetCurExternalChatOption>;
        shareToExternalContact<T extends WechatMiniprogram.Qy.ShareToExternalContactOption = WechatMiniprogram.Qy.ShareToExternalContactOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.ShareToExternalContactOption>;
        shareToExternalChat<T extends WechatMiniprogram.Qy.ShareToExternalChatOption = WechatMiniprogram.Qy.ShareToExternalChatOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.ShareToExternalChatOption>;
        navigateToAddCustomer<T extends WechatMiniprogram.Qy.NavigateToAddCustomerOption = WechatMiniprogram.Qy.NavigateToAddCustomerOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.NavigateToAddCustomerOption>;
        shareToExternalMoments<T extends WechatMiniprogram.Qy.ShareToExternalMomentsOption = WechatMiniprogram.Qy.ShareToExternalMomentsOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.ShareToExternalMomentsOption>;
        updateMomentsSetting<T extends WechatMiniprogram.Qy.UpdateMomentsSettingOption = WechatMiniprogram.Qy.UpdateMomentsSettingOption>(option?: T, callback?: WechatMiniprogram.Qy.UpdateMomentsSettingCompleteCallback): void;

        // 连接微信：微信客服
        navigateToKfChat<T extends WechatMiniprogram.Qy.NavigateToKfChatOption = WechatMiniprogram.Qy.NavigateToKfChatOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.NavigateToKfChatOption>;

        // 连接微信：对外收款
        createExternalPayment<T extends WechatMiniprogram.Qy.CreateExternalPaymentOption = WechatMiniprogram.Qy.CreateExternalPaymentOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.CreateExternalPaymentOption>;
        refundExternalPayment<T extends WechatMiniprogram.Qy.RefundExternalPaymentOption = WechatMiniprogram.Qy.RefundExternalPaymentOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.RefundExternalPaymentOption>;

        // 连接微信：家校沟通
        createSchoolPayment<T extends WechatMiniprogram.Qy.CreateSchoolPaymentOption = WechatMiniprogram.Qy.CreateSchoolPaymentOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.CreateSchoolPaymentOption>;

        // 办公：文档
        createDoc<T extends WechatMiniprogram.Qy.CreateDocOption = WechatMiniprogram.Qy.CreateDocOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.CreateDocOption>;

        // 办公：日程
        checkSchedule<T extends WechatMiniprogram.Qy.CheckScheduleOption = WechatMiniprogram.Qy.CheckScheduleOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.CheckScheduleOption>;

        // 办公：会议
        startMeeting<T extends WechatMiniprogram.Qy.StartMeetingOption = WechatMiniprogram.Qy.StartMeetingOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.StartMeetingOption>;

        // 办公：微盘
        wedriveSelectDir<T extends WechatMiniprogram.Qy.WedriveSelectDirOption = WechatMiniprogram.Qy.WedriveSelectDirOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.WedriveSelectDirOption>;
        wedriveSelectFileForShare<T extends WechatMiniprogram.Qy.WedriveSelectFileForShareOption = WechatMiniprogram.Qy.WedriveSelectFileForShareOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.WedriveSelectFileForShareOption>;
        wedriveSelectFileForDownload<T extends WechatMiniprogram.Qy.WedriveSelectFileForDownloadOption = WechatMiniprogram.Qy.WedriveSelectFileForDownloadOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.WedriveSelectFileForDownloadOption>;
        wedocSelectDoc<T extends WechatMiniprogram.Qy.WedocSelectDocOption = WechatMiniprogram.Qy.WedocSelectDocOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.WedocSelectDocOption>;

        // 办公：直播
        startLiving<T extends WechatMiniprogram.Qy.StartLivingOption = WechatMiniprogram.Qy.StartLivingOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.StartLivingOption>;
        replayLiving<T extends WechatMiniprogram.Qy.ReplayLivingOption = WechatMiniprogram.Qy.ReplayLivingOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.ReplayLivingOption>;
        downloadLivingReplay<T extends WechatMiniprogram.Qy.DownloadLivingReplayOption = WechatMiniprogram.Qy.DownloadLivingReplayOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.DownloadLivingReplayOption>;

        // 第三方服务
        openThirdAppServiceChat<T extends WechatMiniprogram.Qy.OpenThirdAppServiceChatOption = WechatMiniprogram.Qy.OpenThirdAppServiceChatOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.OpenThirdAppServiceChatOption>;
        openAppManage<T extends WechatMiniprogram.Qy.OpenAppManageOption = WechatMiniprogram.Qy.OpenAppManageOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.OpenAppManageOption>;
        openAppComment<T extends WechatMiniprogram.Qy.OpenAppCommentOption = WechatMiniprogram.Qy.OpenAppCommentOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.OpenAppCommentOption>;

        // 智慧硬件
        openAppDeviceDataAuth<T extends WechatMiniprogram.Qy.OpenAppDeviceDataAuthOption = WechatMiniprogram.Qy.OpenAppDeviceDataAuthOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.OpenAppDeviceDataAuthOption>;
        addDevice<T extends WechatMiniprogram.Qy.AddDeviceOption = WechatMiniprogram.Qy.AddDeviceOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.AddDeviceOption>;
        openDeviceProfile<T extends WechatMiniprogram.Qy.OpenDeviceProfileOption = WechatMiniprogram.Qy.OpenDeviceProfileOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.OpenDeviceProfileOption>;
        queryCurrHWOpenTalk<T extends WechatMiniprogram.Qy.QueryCurrHWOpenTalkOption = WechatMiniprogram.Qy.QueryCurrHWOpenTalkOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.QueryCurrHWOpenTalkOption>;
        enterHWOpenTalk<T extends WechatMiniprogram.Qy.EnterHWOpenTalkOption = WechatMiniprogram.Qy.EnterHWOpenTalkOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.EnterHWOpenTalkOption>;
        startWecast<T extends WechatMiniprogram.Qy.StartWecastOption = WechatMiniprogram.Qy.StartWecastOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.StartWecastOption>;
        printFile<T extends WechatMiniprogram.Qy.PrintFileOption = WechatMiniprogram.Qy.PrintFileOption>(option?: T): WechatMiniprogram.PromisifySuccessResult<T, WechatMiniprogram.Qy.PrintFileOption>;
    }

    // @ts-ignore
    interface Wx {
        qy: Qy;
    }
}

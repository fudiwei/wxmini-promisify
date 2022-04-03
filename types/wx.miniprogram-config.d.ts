declare const __wxConfig: {
    wxAppInfo?: {
        maxDownloadConcurrent: number;
        maxRequestConcurrent: number;
        maxUploadConcurrent: number;
        maxWebsocketConnect: number;
        maxWorkerConcurrent: number;
    };

    accountInfo?: {
        appId: string;
        icon: string;
        nickname: string;
    };

    appLaunchInfo?: {
        path: string;
        query: Record<string, string>;
        referrerInfo?: Record<string, string>;
        scene: number;
        shareTicket?: string;
    };

    appType: number;

    debug?: boolean;

    ext?: Record<string, unknown>;

    extAppid?: string;

    platform: string;

    envVersion: "develop" | "trial" | "release";

    entryPagePath: string;

    pages: string[];

    networkTimeout: {
        connectSocket: number;
        downloadFile: number;
        request: number;
        uploadFile: number;
    };

    tabBar?: {
        borderStyle?: "black" | "white";
        color?: string;
        backgroundColor?: string;
        selectedColor?: string;
        list: Array<{
            pagePath: string;
            iconPath: string;
            selectedIconPath: string;
            text: string;
        }>;
    };
};

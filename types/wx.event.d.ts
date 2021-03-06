declare namespace WechatMiniprogram {
    interface WxEventMap {
        // 基础：应用级事件
        unhandledrejection: OnUnhandledRejectionCallback;
        themechange: OnThemeChangeCallback;
        pagenotfound: OnPageNotFoundCallback;
        error: OnAppErrorCallback;
        audiointerruptionend: OnAudioInterruptionEndCallback;
        audiointerruptionbegin: OnAudioInterruptionBeginCallback;
        appshow: OnAppShowCallback;
        apphide: OnAppHideCallback;

        // 转发
        copyurl: OnCopyUrlCallback;

        // 界面：窗口
        windowresize: OnWindowResizeCallbackResult;

        // 网络：WebSocket
        socketopen: OnSocketOpenCallback;
        socketmessage: OnSocketMessageCallback;
        socketerror: OnSocketErrorCallback;
        socketclose: OnSocketCloseCallback;
        // 网络：mDNS
        localserviceresolvefail: OnLocalServiceResolveFailCallback;
        localservicelost: OnLocalServiceLostCallback;
        localservicefound: OnLocalServiceFoundCallback;
        localservicediscoverystop: OnLocalServiceDiscoveryStopCallback;

        // 数据缓存
        backgroundfetchdata: OnBackgroundFetchDataCallback;

        // 媒体：背景音频
        backgroundaudiostop: OnBackgroundAudioStopCallback;
        backgroundaudioplay: OnBackgroundAudioPlayCallback;
        backgroundaudiopause: OnBackgroundAudioPauseCallback;
        // 媒体：实时语音
        voipvideomemberschanged: OnVoIPVideoMembersChangedCallback;
        voipchatstatechanged: OnVoIPChatStateChangedCallback;
        voipchatspeakerschanged: OnVoIPChatSpeakersChangedCallback;
        voipchatmemberschanged: OnVoIPChatMembersChangedCallback;
        voipchatinterrupted: OnVoIPChatInterruptedCallback;

        // 位置
        locationchange: OnLocationChangeCallback;

        // 设备：外围设备
        bleperipheralconnectionstatechanged: OnBLEPeripheralConnectionStateChangedCallback;
        // 设备：iBeacon
        beaconupdate: OnBeaconUpdateCallback;
        beaconservicechange: OnBeaconServiceChangeCallback;
        // 设备：NFC
        hcemessage: OnHCEMessageCallback;
        // 设备：WiFi
        wificonnected: OnWifiConnectedCallback;
        getwifilist: OnGetWifiListCallback;
        // 设备：低功耗蓝牙
        bleconnectionstatechange: OnBLEConnectionStateChangeCallback;
        blecharacteristicvaluechange: OnBLECharacteristicValueChangeCallback;
        // 设备：蓝牙
        bluetoothdevicefound: OnBluetoothDeviceFoundCallback;
        bluetoothadapterstatechange: OnBluetoothAdapterStateChangeCallback;
        // 设备：网络
        networkstatuschange: OnNetworkStatusChangeCallback;
        // 设备：屏幕
        usercapturescreen: OnUserCaptureScreenCallback;
        // 设备：键盘
        keyboardheightchange: OnKeyboardHeightChangeCallback;
        // 设备：加速计
        accelerometerchange: OnAccelerometerChangeCallback;
        // 设备：罗盘
        compasschange: OnCompassChangeCallback;
        // 设备：设备方向
        devicemotionchange: OnDeviceMotionChangeCallback;
        // 设备：陀螺仪
        gyroscopechange: OnGyroscopeChangeCallback;
        // 设备：内存
        memorywarning: OnMemoryWarningCallback;
    }

    interface Wx {
        /**
         * 添加事件句柄。
         * @param {String} event 事件名。
         * @param {Function} listener 事件触发时执行的函数。
         */
        addEventListener<K extends keyof WxEventMap>(event: K, listener: WxEventMap[K]): void;
        /**
         * 添加事件句柄。
         * @param {String} event 事件名。
         * @param {Function} listener 事件触发时执行的函数。
         */
        addEventListener(event: string, listener: Function): void;
        /**
         * 移除事件句柄。
         * @param {String} event 事件名。
         * @param {Function} listener 事件触发时执行的函数。
         */
        removeEventListener<K extends keyof WxEventMap>(event: K, listener: WxEventMap[K]): void;
        /**
         * 移除事件句柄。
         * @param {String} event 事件名。
         * @param {Function} listener 事件触发时执行的函数。
         */
        removeEventListener(event: string, listener: Function): void;
    }
}

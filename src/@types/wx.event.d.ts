declare namespace WechatMiniprogram {
    interface WxEventHandlersEventMap {
        // 基础：应用级事件
        "unhandledrejection": OnUnhandledRejectionCallback;
        "pagenotfound": OnPageNotFoundCallback;
        "error": OnAppErrorCallback;
        "audiointerruptionend": OnAudioInterruptionEndCallback;
        "audiointerruptionbegin": OnAudioInterruptionBeginCallback;
        "appshow": OnAppShowCallback;
        "apphide": OnAppHideCallback;
        // 界面：窗口
        "windowresize": OnWindowResizeCallbackResult;
        // 界面：键盘
        "keyboardheightchange": OnKeyboardHeightChangeCallback;
        // 网络：WebSocket
        "socketopen": OnSocketOpenCallback;
        "socketmessage": OnSocketMessageCallback;
        "socketerror": OnSocketErrorCallback;
        "socketclose": OnSocketCloseCallback;
        // 网络：mDNS
        "localserviceresolvefail": OnLocalServiceResolveFailCallback;
        "localservicelost": OnLocalServiceLostCallback;
        "localservicefound": OnLocalServiceFoundCallback;
        "localservicediscoverystop": OnLocalServiceDiscoveryStopCallback;
        // 媒体：背景音频
        "backgroundaudiostop": OnBackgroundAudioStopCallback;
        "backgroundaudioplay": OnBackgroundAudioPlayCallback;
        "backgroundaudiopause": OnBackgroundAudioPauseCallback;
        // 位置
        "locationchange": OnLocationChangeCallback;
        // 设备：Beacon
        "beaconupdate": OnBeaconUpdateCallback;
        "beaconservicechange": OnBeaconServiceChangeCallback;
        // 设备：WiFi
        "wificonnected": OnWifiConnectedCallback;
        "getwifilist": OnGetWifiListCallback;
        // 设备：低功耗蓝牙
        "bleconnectionstatechange": OnBLEConnectionStateChangeCallback;
        "blecharacteristicvaluechange": OnBLECharacteristicValueChangeCallback;
        // 设备：蓝牙
        "bluetoothdevicefound": OnBluetoothDeviceFoundCallback;
        "bluetoothadapterstatechange": OnBluetoothAdapterStateChangeCallback;
        // 设备：NFC
        "hcemessage": OnHCEMessageCallback;
        // 设备：网络
        "networkstatuschange": OnNetworkStatusChangeCallback;
        // 设备：屏幕
        "usercapturescreen": OnUserCaptureScreenCallback;
        // 设备：加速计
        "accelerometerchange": OnAccelerometerChangeCallback;
        // 设备：罗盘
        "compasschange": OnCompassChangeCallback;
        // 设备：设备方向
        "devicemotionchange": OnDeviceMotionChangeCallback;
        // 设备：陀螺仪
        "gyroscopechange": OnGyroscopeChangeCallback;
        // 设备：性能
        "memorywarning": OnMemoryWarningCallback;
    }

    interface Wx {
        /**
         * 添加事件句柄。
         * @param {String} event 事件名。
         * @param {Function} listener 事件触发时执行的函数。 
         */
        addEventListener<K extends keyof WxEventHandlersEventMap>(event: K, listener: (e: WxEventHandlersEventMap[K]) => any): void;
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
        removeEventListener<K extends keyof WxEventHandlersEventMap>(event: K, listener: (e: WxEventHandlersEventMap[K]) => any): void;
        /**
         * 移除事件句柄。
         * @param {String} event 事件名。
         * @param {Function} listener 事件触发时执行的函数。 
         */
        removeEventListener(event: string, listener: Function): void;
    }
}
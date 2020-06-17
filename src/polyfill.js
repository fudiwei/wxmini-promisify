const isCallable = (fn) => 'function' === typeof fn;
const noop = () => {};

/**
 * 
 */
module.exports = () => {
    if (null === wx || undefined === wx) {
        throw 'This muse be run at wx-miniprogram.';
    }

    /**
     * support after 1.0.1
     */
    if (!isCallable(wx.canIUse)) {
        wx.canIUse = () => false;
    }

    /**
     * support after 1.0.1
     */
    if (!isCallable(wx.reportAnalytics)) {
        wx.reportAnalytics = noop;
    }

    /**
     * support after 1.1.0
     */
    if (!isCallable(wx.reLaunch)) {
        wx.reLaunch = (options = {}) => {
            options = Object.assign({}, {
                url: '',
                success: noop,
                fail: noop,
                complete: noop
            }, options);

            const getCurrentPages = getCurrentPages || noop; // eslint-disable-line no-undef
            if (getCurrentPages()[0].route.startsWith(options.url)) {
                wx.navigateBack(
                    Object.assign({}, options, { delta: 99 })
                );
            } else {
                wx.redirectTo(options);
            }
        }
    }

    /**
     * support after 1.2.0
     */
    if (!isCallable(wx.getBackgroundAudioManager)) {
        const alert = () => wx.showModal({
            title: '微信客户端版本过低',
            content: '无法使用播放功能，请升级到最新微信版本后重试。',
            showCancel: false,
            confirmText: '好的'
        });
        wx.getBackgroundAudioManager = () => ({
            onPlay: noop,
            onPause: noop,
            onStop: noop,
            onEnded: noop,
            onError: noop,
            onTimeUpdate: noop,
            onWaiting: noop,
            onCanplay: noop,
            onPrev: noop,
            onNext: noop,
            play: alert,
            pause: alert,
            stop: alert,
            seek: alert,
            startTime: 0,
            duration: 0,
            currentTime: 0,
            buffered: false,
            paused: true,
            src: null,
            title: null
        });
    }

    /**
     * support after 1.6.0
     */
    if (!isCallable(wx.getRecorderManager)) {
        const alert = () => wx.showModal({
            title: '微信客户端版本过低',
            content: '无法使用录音功能，请升级到最新微信版本后重试。',
            showCancel: false,
            confirmText: '好的'
        });
        wx.getRecorderManager = () => ({
            onStart: noop,
            onPause: noop,
            onStop: noop,
            onFrameRecorded: noop,
            onError: noop,
            onWaiting: noop,
            onCanplay: noop,
            onPrev: noop,
            onNext: noop,
            onInterruptionBegin: noop,
            onInterruptionEnd: noop,
            start: alert,
            pause: alert,
            resume: alert,
            stop: alert
        });
    }

    /**
     * support after 1.9.90
     */
    if (!isCallable(wx.getUpdateManager)) {
        wx.getUpdateManager = () => ({
            onCheckForUpdate: noop,
            onUpdateReady: noop,
            onUpdateFailed: noop,
            applyUpdate: noop
        });
    }

    /**
     * support after 2.0.1
     */
    if (!isCallable(wx.reportMonitor)) {
        wx.reportMonitor = noop;
    }

    /**
     * support after 2.1.0
     */
    if (!isCallable(wx.getLogManager)) {
        wx.getLogManager = () => ({
            debug: () => console.debug(arguments),
            info: () => console.info(arguments),
            log: () => console.log(arguments),
            warn: () => console.warn(arguments)
        });
    }

    /**
     * support after 2.2.3
     */
    if (!isCallable(wx.nextTick)) {
        wx.nextTick = function(callback) {
            const _this = this;
            setTimeout(() => {
                isCallable(callback) && callback.apply(_this, arguments);
            });
        }
    }

    /**
     * support after 2.7.0
     */
    if (!isCallable(wx.createUDPSocket)) {
        const alert = () => wx.showModal({
            title: '微信客户端版本过低',
            content: '无法使用 UDP 功能，请升级到最新微信版本后重试。',
            showCancel: false,
            confirmText: '好的'
        });
        wx.createUDPSocket = () => ({
            offClose: noop,
            offError: noop,
            offListening: noop,
            offMessage: noop,
            onClose: noop,
            onError: noop,
            onListening: noop,
            onMessage: noop,
            bind: alert,
            close: alert,
            send: alert
        });
    }

    /**
     * support after 2.7.1
     */
    if (!isCallable(wx.getRealtimeLogManager)) {
        wx.getRealtimeLogManager = () => ({
            debug: () => console.debug(arguments),
            info: () => console.info(arguments),
            log: () => console.log(arguments),
            warn: () => console.warn(arguments),
            error: () => console.warn(arguments),
            setFilterMsg: noop,
            addFilterMsg: noop
        });
    } else {
        const logManager = wx.getRealtimeLogManager();
        if (!isCallable(logManager.addFilterMsg)) {
            wx.getRealtimeLogManager = () => ({
                debug: () => logManager.debug.apply(logManager, arguments),
                info: () => logManager.info.apply(logManager, arguments),
                log: () => logManager.log.apply(logManager, arguments),
                warn: () => logManager.warn.apply(logManager, arguments),
                error: () => logManager.error.apply(logManager, arguments),
                setFilterMsg: (msg) => {
                    if ('string' !== typeof msg)
                        return;
                    logManager.setFilterMsg(msg);
                },
                addFilterMsg: noop
            });
        } else if (!isCallable(logManager.setFilterMsg)) {
            wx.getRealtimeLogManager = () => ({
                debug: () => logManager.debug.apply(logManager, arguments),
                info: () => logManager.info.apply(logManager, arguments),
                log: () => logManager.log.apply(logManager, arguments),
                warn: () => logManager.warn.apply(logManager, arguments),
                error: () => logManager.error.apply(logManager, arguments),
                setFilterMsg: noop,
                addFilterMsg: noop
            });
        }
    }

    /**
     * support after 2.9.2
     */
    if (!isCallable(wx.reportPerformance)) {
        wx.reportPerformance = noop;
    }
}
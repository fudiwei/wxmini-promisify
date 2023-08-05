; (function () {
    promisifyAll({});

    const pendings = [];

    Object.keys(wx).forEach(function (key) {
        if (key.endsWith('Async')) {
            return;
        }

        if (typeof wx[key] !== 'function' || typeof wx[key + 'Async'] === 'function') {
            return;
        }

        try {
            wx[key]({
                complete: function () {
                    pendings.push(key);
                }
            });
        } catch (_) { }
    });


    if (pendings.length > 0) {
        console.info('尚未支持的 API：', pendings.sort());
    }
})();

; (function () {
    const apis = _apis;
    const obsoleteds = [];

    apis.forEach(function (key) {
        if (key.includes('.')) {
            return;
        }

        if (typeof wx[key] === 'function' && typeof wx[key + 'Async'] === 'function') {
            return;
        }

        obsoleteds.push(key);
    });


    if (obsoleteds.length > 0) {
        console.info('已废弃的 API：', obsoleteds.sort());
    }
})();

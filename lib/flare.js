'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isObj = function (obj) {
    return typeof obj === 'object' && !!obj;
};
var isWindow = function () {
    return window !== undefined;
};

function readySendErrReport(onReport) {
    if (!onReport) {
        console.error('required onReport in auto mode.');
        return;
    }
}

var initOneError = function () { return installOneError(); };
function installOneError() {
    window.onerror = function (message, url, lineNo, columnNo, errorObj) {
        //     console.log(message, url, lineNo, columnNo, errorObj)
        console.log('meesage: ', message);
        console.log('url: ', url);
        console.log('lineNo: ', lineNo);
        console.log('columnNo: ', columnNo);
        console.log('errorObj: ', errorObj);
    };
}

function Init(initObj) {
    var config = initObj.config, onReport = initObj.onReport;
    if (!isWindow()) {
        console.error('not in web');
        return;
    }
    if (isObj(config) && isWindow) {
        var locationHref = config.locationHref;
        _config.locationHref = locationHref || window.location.href;
    }
    readySendErrReport(onReport);
    initOneError();
}
var _config = {
    auto: false
};

var flare = {
    Init: Init,
    config: _config
};

exports.flare = flare;
//# sourceMappingURL=flare.js.map

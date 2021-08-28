'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var oneErrorTypeMap = {
    referenceError: 'Uncaught ReferenceError',
    typeError: 'Uncaught TypeError',
    rangeError: 'Uncaught TypeError'
};
var isObj = function (obj) {
    return typeof obj === 'object' && !!obj;
};
var isWindow = function () {
    return window !== undefined;
};
var getOnerrorType = function (message) {
    var typeKey = Object.keys(oneErrorTypeMap).find(function (i) {
        return message.startsWith(oneErrorTypeMap[i]);
    });
    return typeKey || 'unknownError';
};

var errorListenr = null;
function addError(errObj) {
    doChange('add', errObj);
}
var initListenr = function (callback) {
    errorListenr = callback;
};
function doChange(method, errObj) {
    if (errorListenr)
        errorListenr(method, errObj);
}

var _onReport = sendErrReport;
/**
 * init send service, if not have onReport, use default method
 * @param {ReportSub} onReport error callback
 **/
function initSendErrReport(onReport) {
    if (onReport)
        _onReport = onReport;
    watchTheError();
}
/**
 * default send error method
 * @param {string} errJsonData
 **/
function sendErrReport(errJsonData) {
    console.log(errJsonData);
}
/**
 * listen error observer
 **/
function watchTheError() {
    initListenr(function (method, errObj) {
        console.log('监听errlist, 获得消息了', method, errObj);
        if (method === 'add' && errObj !== null) {
            _onReport(JSON.stringify(errObj));
        }
    });
}

var INITONERROR = false;
/**
 * init all of error event
 **/
function installOneError() {
    if (INITONERROR) {
        throw new Error('onerror is inited.');
    }
    addOneErrorEvent();
    addPromiseEvent();
    addNetworkOrSrcEvent();
    INITONERROR = true;
}
/**
 * check network reject or src reject
 **/
function addNetworkOrSrcEvent() {
    window.addEventListener('error', function (error) {
        console.log('捕获到异常：', error);
        var _a = error.target, tagName = _a.tagName, src = _a.src, href = _a.href;
        var path = error.composedPath().map(function (value) {
            var nodeName = value.nodeName;
            return nodeName || 'Window';
        });
        if (tagName !== undefined &&
            ['IMG', 'LINK', 'SCRIPT'].includes(tagName)) {
            var networkOrSrcParams = {
                url: window.location.href,
                type: 'resourceError',
                srcUrl: src || href,
                tagName: tagName,
                path: path
            };
            console.log(path);
            computedErrorObject(networkOrSrcParams);
        }
        return true;
    }, true);
}
/**
 * check onerror callback of error
 **/
function addOneErrorEvent() {
    window.onerror = function (message, url, lineNo, columnNo, errorObj) {
        console.log(message, url, lineNo, columnNo, errorObj);
        var oneErrorParams = {
            message: (errorObj === null || errorObj === void 0 ? void 0 : errorObj.message) || message,
            lineNo: lineNo,
            columnNo: columnNo,
            url: url,
            type: getOnerrorType(message)
        };
        computedErrorObject(oneErrorParams);
    };
}
/**
 * check promise reject
 **/
function addPromiseEvent() {
    window.addEventListener('unhandledrejection', function (error) {
        console.log('捕获到异常：', error);
        //       const { tagName, src, href } = error.target as NetworkOrSrcEventTarget
        //       if (
        //         tagName !== undefined &&
        //         ['IMG', 'LINK', 'SCRIPT'].includes(tagName)
        //       ) {
        //         const networkOrSrcParams: ErrObj = {
        //           url: window.location.href,
        //           type: 'resourceError',
        //           srcUrl: src || href,
        //           tagName
        //         }
        //         computedErrorObject(networkOrSrcParams)
        //       }
        return true;
    }, true);
}
/**
 * get all error and add
 * @param {OneErrorParams} oneErrorParams  error data from event
 **/
function computedErrorObject(oneErrorParams) {
    //.....
    console.log(oneErrorParams);
    var errObj = Object.assign({}, oneErrorParams, {
        id: 11
    });
    addError(errObj);
}
var initOneError = function () { return installOneError(); };

function init(initObj) {
    var config = initObj.config, onReport = initObj.onReport;
    if (!isWindow()) {
        throw new Error('not in web');
    }
    if (isObj(config) && isWindow) {
        config.locationHref;
    }
    initSendErrReport(onReport);
    initOneError();
}

var flare = {
    init: init
};

exports.flare = flare;
//# sourceMappingURL=flare.js.map

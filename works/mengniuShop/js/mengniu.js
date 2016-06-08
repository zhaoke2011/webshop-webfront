/*!
 *
 * UniclickTracking JavaScript tracking client
 *
 */
var _utmengniu = _utmengniu || [];
_utmengniu.push(["trackPageView"]);
_utmengniu.push(["enableLinkTracking"]);
window.OPENUTHEATMAPOPEN = true;
(function () {
    var utu_mn = (("https:" == document.location.protocol) ? "https" : "http") + "://sit.gentags.net/";
    _utmengniu.push(["setTrackerUrl", utu_mn + "site/unids.gif"]);
    _utmengniu.push(["setSiteId", "737"]);
    if (window.UNI_UT_SWF === true) {
        return;
    }
    try {
        var utd = document, ut = utd.createElement("script"), s = utd.getElementsByTagName("script")[0];
        ut.type = "text/javascript";
        ut.defer = true;
        ut.async = true;
        ut.src = utu_mn + "adagent/js/gunic.js";
        s.parentNode.insertBefore(ut, s);
    } catch (e) {
    }
    window.UNI_UT_SWF = true;
})();
if (!this.JSON2) {
    this.JSON2 = {}
}
(function () {
    function f(n) {
        return n < 10 ? "0" + n : n
    }

    function objectToJSON(value, key) {
        var objectType = Object.prototype.toString.apply(value);
        if (objectType === "[object Date]") {
            return isFinite(value.valueOf()) ? value.getUTCFullYear() + "-" + f(value.getUTCMonth() + 1) + "-" + f(value.getUTCDate()) + "T" + f(value.getUTCHours()) + ":" + f(value.getUTCMinutes()) + ":" + f(value.getUTCSeconds()) + "Z" : null
        }
        if (objectType === "[object String]" || objectType === "[object Number]" || objectType === "[object Boolean]") {
            return value.valueOf()
        }
        if (objectType !== "[object Array]" && typeof value.toJSON === "function") {
            return value.toJSON(key)
        }
        return value
    }

    var cx = new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]", "g"), pattern = '\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]', escapable = new RegExp("[" + pattern, "g"), gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object") {
            value = objectToJSON(value, key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
            case"string":
                return quote(value);
            case"number":
                return isFinite(value) ? String(value) : "null";
            case"boolean":
            case"null":
                return String(value);
            case"object":
                if (!value) {
                    return "null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v
        }
    }

    if (typeof JSON2.stringify !== "function") {
        JSON2.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else {
                if (typeof space === "string") {
                    indent = space
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {"": value})
        }
    }
    if (typeof JSON2.parse !== "function") {
        JSON2.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if ((new RegExp("^[\\],:{}\\s]*$")).test(text.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})', "g"), "@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', "g"), "]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+", "g"), ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());
var _utmengniu = _utmengniu || [], UniclickTracking = UniclickTracking || (function () {
        var expireDateTime, plugins = {}, documentAlias = document, navigatorAlias = navigator, screenAlias = screen, windowAlias = window, hasLoaded = false, registeredOnLoadHandlers = [], encodeWrapper = windowAlias.encodeURIComponent, decodeWrapper = windowAlias.decodeURIComponent, urldecode = unescape, asyncTracker, i;

        function isDefined(property) {
            return typeof property !== "undefined"
        }

        function isFunction(property) {
            return typeof property === "function"
        }

        function isObject(property) {
            return typeof property === "object"
        }

        function isString(property) {
            return typeof property === "string" || property instanceof String
        }

        function apply() {
            var i, f, parameterArray;
            for (i = 0; i < arguments.length; i += 1) {
                parameterArray = arguments[i];
                f = parameterArray.shift();
                if (isString(f)) {
                    asyncTracker[f].apply(asyncTracker, parameterArray)
                } else {
                    f.apply(asyncTracker, parameterArray)
                }
            }
        }

        function addEventListener(element, eventType, eventHandler, useCapture) {
            if (element.addEventListener) {
                element.addEventListener(eventType, eventHandler, useCapture);
                return true
            }
            if (element.attachEvent) {
                return element.attachEvent("on" + eventType, eventHandler)
            }
            element["on" + eventType] = eventHandler
        }

        function executePluginMethod(methodName, callback) {
            var result = "", i, pluginMethod;
            for (i in plugins) {
                if (Object.prototype.hasOwnProperty.call(plugins, i)) {
                    pluginMethod = plugins[i][methodName];
                    if (isFunction(pluginMethod)) {
                        result += pluginMethod(callback)
                    }
                }
            }
            return result
        }

        function beforeUnloadHandler() {
            var now;
            executePluginMethod("unload");
            if (expireDateTime) {
                do {
                    now = new Date()
                } while (now.getTimeAlias() < expireDateTime)
            }
        }

        function loadHandler() {
            var i;
            if (!hasLoaded) {
                hasLoaded = true;
                executePluginMethod("load");
                for (i = 0; i < registeredOnLoadHandlers.length; i++) {
                    registeredOnLoadHandlers[i]()
                }
            }
            return true
        }

        function addReadyListener() {
            var _timer;
            if (documentAlias.addEventListener) {
                addEventListener(documentAlias, "DOMContentLoaded", function ready() {
                    documentAlias.removeEventListener("DOMContentLoaded", ready, false);
                    loadHandler()
                })
            } else {
                if (documentAlias.attachEvent) {
                    documentAlias.attachEvent("onreadystatechange", function ready() {
                        if (documentAlias.readyState === "complete") {
                            documentAlias.detachEvent("onreadystatechange", ready);
                            loadHandler()
                        }
                    });
                    if (documentAlias.documentElement.doScroll && windowAlias === windowAlias.top) {
                        (function ready() {
                            if (!hasLoaded) {
                                try {
                                    documentAlias.documentElement.doScroll("left")
                                } catch (error) {
                                    setTimeout(ready, 0);
                                    return
                                }
                                loadHandler()
                            }
                        }())
                    }
                }
            }
            if ((new RegExp("WebKit")).test(navigatorAlias.userAgent)) {
                _timer = setInterval(function () {
                    if (hasLoaded || /loaded|complete/.test(documentAlias.readyState)) {
                        clearInterval(_timer);
                        loadHandler()
                    }
                }, 10)
            }
            addEventListener(windowAlias, "load", loadHandler, false)
        }

        function getReferrer() {
            var referrer = "";
            try {
                referrer = windowAlias.top.document.referrer
            } catch (e) {
                if (windowAlias.parent) {
                    try {
                        referrer = windowAlias.parent.document.referrer
                    } catch (e2) {
                        referrer = ""
                    }
                }
            }
            if (referrer === "") {
                referrer = documentAlias.referrer
            }
            return referrer
        }

        function getProtocolScheme(url) {
            var e = new RegExp("^([a-z]+):"), matches = e.exec(url);
            return matches ? matches[1] : null
        }

        function getHostName(url) {
            var e = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"), matches = e.exec(url);
            return matches ? matches[1] : url
        }

        function getParameter(url, name) {
            var e = new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"), matches = e.exec(url), f = new RegExp("(?:^|&)" + name + "=([^&]*)"), result = matches ? f.exec(matches[1]) : 0;
            return result ? decodeWrapper(result[1]) : ""
        }

        function setCookie(cookieName, value, msToExpire, path, domain, secure) {
            var expiryDate;
            if (msToExpire) {
                expiryDate = new Date();
                expiryDate.setTime(expiryDate.getTime() + msToExpire)
            }
            documentAlias.cookie = cookieName + "=" + encodeWrapper(value) + (msToExpire ? ";expires=" + expiryDate.toGMTString() : "") + ";path=" + (path || "/") + (domain ? ";domain=" + domain : "") + (secure ? ";secure" : "")
        }

        function getCookie(cookieName) {
            var cookiePattern = new RegExp("(^|;)[ ]*" + cookieName + "=([^;]*)"), cookieMatch = cookiePattern.exec(documentAlias.cookie);
            return cookieMatch ? decodeWrapper(cookieMatch[2]) : 0
        }

        function utf8_encode(argString) {
            return urldecode(encodeWrapper(argString))
        }

        function sha1(str) {
            var rotate_left = function (n, s) {
                return (n << s) | (n >>> (32 - s))
            }, cvt_hex = function (val) {
                var str = "", i, v;
                for (i = 7; i >= 0; i--) {
                    v = (val >>> (i * 4)) & 15;
                    str += v.toString(16)
                }
                return str
            }, blockstart, i, j, W = [], H0 = 1732584193, H1 = 4023233417, H2 = 2562383102, H3 = 271733878, H4 = 3285377520, A, B, C, D, E, temp, str_len, word_array = [];
            str = utf8_encode(str);
            str_len = str.length;
            for (i = 0; i < str_len - 3; i += 4) {
                j = str.charCodeAt(i) << 24 | str.charCodeAt(i + 1) << 16 | str.charCodeAt(i + 2) << 8 | str.charCodeAt(i + 3);
                word_array.push(j)
            }
            switch (str_len & 3) {
                case 0:
                    i = 2147483648;
                    break;
                case 1:
                    i = str.charCodeAt(str_len - 1) << 24 | 8388608;
                    break;
                case 2:
                    i = str.charCodeAt(str_len - 2) << 24 | str.charCodeAt(str_len - 1) << 16 | 32768;
                    break;
                case 3:
                    i = str.charCodeAt(str_len - 3) << 24 | str.charCodeAt(str_len - 2) << 16 | str.charCodeAt(str_len - 1) << 8 | 128;
                    break
            }
            word_array.push(i);
            while ((word_array.length & 15) !== 14) {
                word_array.push(0)
            }
            word_array.push(str_len >>> 29);
            word_array.push((str_len << 3) & 4294967295);
            for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
                for (i = 0; i < 16; i++) {
                    W[i] = word_array[blockstart + i]
                }
                for (i = 16; i <= 79; i++) {
                    W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1)
                }
                A = H0;
                B = H1;
                C = H2;
                D = H3;
                E = H4;
                for (i = 0; i <= 19; i++) {
                    temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 1518500249) & 4294967295;
                    E = D;
                    D = C;
                    C = rotate_left(B, 30);
                    B = A;
                    A = temp
                }
                for (i = 20; i <= 39; i++) {
                    temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 1859775393) & 4294967295;
                    E = D;
                    D = C;
                    C = rotate_left(B, 30);
                    B = A;
                    A = temp
                }
                for (i = 40; i <= 59; i++) {
                    temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 2400959708) & 4294967295;
                    E = D;
                    D = C;
                    C = rotate_left(B, 30);
                    B = A;
                    A = temp
                }
                for (i = 60; i <= 79; i++) {
                    temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 3395469782) & 4294967295;
                    E = D;
                    D = C;
                    C = rotate_left(B, 30);
                    B = A;
                    A = temp
                }
                H0 = (H0 + A) & 4294967295;
                H1 = (H1 + B) & 4294967295;
                H2 = (H2 + C) & 4294967295;
                H3 = (H3 + D) & 4294967295;
                H4 = (H4 + E) & 4294967295
            }
            temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
            return temp.toLowerCase()
        }

        function urlFixup(hostName, href, referrer) {
            if (hostName === "translate.googleusercontent.com") {
                if (referrer === "") {
                    referrer = href
                }
                href = getParameter(href, "u");
                hostName = getHostName(href)
            } else {
                if (hostName === "cc.bingj.com" || hostName === "webcache.googleusercontent.com" || hostName.slice(0, 5) === "74.6.") {
                    href = documentAlias.links[0].href;
                    hostName = getHostName(href)
                }
            }
            var uni_ref = getParameter(href, "uni_ref");
            if (uni_ref != "") {
                referrer = uni_ref
            }
            return [hostName, href, referrer]
        }

        function domainFixup(domain) {
            var dl = domain.length;
            if (domain.charAt(--dl) === ".") {
                domain = domain.slice(0, dl)
            }
            if (domain.slice(0, 2) === "*.") {
                domain = domain.slice(1)
            }
            return domain
        }

        function titleFixup(title) {
            if (!isString(title)) {
                title = title.text || "";
                var tmp = documentAlias.getElementsByTagName("title");
                if (tmp && isDefined(tmp[0])) {
                    title = tmp[0].text
                }
            }
            return title
        }

        function Tracker(trackerUrl, siteId) {
            var registeredHooks = {}, locationArray = urlFixup(documentAlias.domain, windowAlias.location.href, getReferrer()), domainAlias = domainFixup(locationArray[0]), locationHrefAlias = locationArray[1], configReferrerUrl = locationArray[2], configRequestMethod = "GET", configTrackerUrl = trackerUrl || "", configTrackerSiteId = siteId || "", configCustomUrl, configTitle = documentAlias.title, configDownloadExtensions = "7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip", configHostsAlias = [domainAlias], configIgnoreClasses = [], configDownloadClasses = [], configLinkClasses = [], configTrackerPause = 500, configMinimumVisitTime, configHeartBeatTimer, configDiscardHashTag, configCustomData, configCampaignNameParameters = ["pk_campaign", "ds_campaign", "utm_campaign", "utm_source", "utm_medium"], configCampaignKeywordParameters = ["pk_kwd", "ds_kwd", "utm_term"], configCookieNamePrefix = "_pk_", configCookieDomain, configCookiePath, configDoNotTrack, configCountPreRendered, configConversionAttributionFirstReferrer, configVisitorCookieTimeout = 63072000000, configSessionCookieTimeout = 1800000, configReferralCookieTimeout = 15768000000, cookieSecure = documentAlias.location.protocol === "https", customVariables = false, customVariablesPage = {}, customVariableMaximumLength = 200, ecommerceItems = {}, browserFeatures = {}, linkTrackingInstalled = false, activityTrackingInstalled = false, lastActivityTime, lastButton, lastTarget, hash = sha1, domainHash, visitorUUID;

            function purify(url) {
                var targetPattern;
                if (configDiscardHashTag) {
                    targetPattern = new RegExp("#.*");
                    return url.replace(targetPattern, "")
                }
                return url
            }

            function resolveRelativeReference(baseUrl, url) {
                var protocol = getProtocolScheme(url), i;
                if (protocol) {
                    return url
                }
                if (url.slice(0, 1) === "/") {
                    return getProtocolScheme(baseUrl) + "://" + getHostName(baseUrl) + url
                }
                baseUrl = purify(baseUrl);
                if ((i = baseUrl.indexOf("?")) >= 0) {
                    baseUrl = baseUrl.slice(0, i)
                }
                if ((i = baseUrl.lastIndexOf("/")) !== baseUrl.length - 1) {
                    baseUrl = baseUrl.slice(0, i + 1)
                }
                return baseUrl + url
            }

            function isSiteHostName(hostName) {
                var i, alias, offset;
                for (i = 0; i < configHostsAlias.length; i++) {
                    alias = domainFixup(configHostsAlias[i].toLowerCase());
                    if (hostName === alias) {
                        return true
                    }
                    if (alias.slice(0, 1) === ".") {
                        if (hostName === alias.slice(1)) {
                            return true
                        }
                        offset = hostName.length - alias.length;
                        if ((offset > 0) && (hostName.slice(offset) === alias)) {
                            return true
                        }
                    }
                }
                return false
            }

            function getImage(request, setCustomUrl) {
                var image = new Image(1, 1);
                image.onload = function () {
                };
                if (setCustomUrl) {
                    image.src = setCustomUrl + (setCustomUrl.indexOf("?") < 0 ? "?" : "&") + request
                } else {
                    image.src = configTrackerUrl + (configTrackerUrl.indexOf("?") < 0 ? "?" : "&") + request
                }
            }

            function sendXmlHttpRequest(request) {
                try {
                    var xhr = windowAlias.XDomainRequest ? new windowAlias.XDomainRequest() : windowAlias.XMLHttpRequest ? new windowAlias.XMLHttpRequest() : windowAlias.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                    xhr.open("POST", configTrackerUrl, true);
                    xhr.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status !== 200) {
                            getImage(request)
                        }
                    };
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
                    xhr.send(request)
                } catch (e) {
                    getImage(request)
                }
            }

            function sendRequest(request, delay) {
                var now = new Date();
                if (!configDoNotTrack) {
                    if (configRequestMethod === "POST") {
                        sendXmlHttpRequest(request)
                    } else {
                        getImage(request)
                    }
                    expireDateTime = now.getTime() + delay
                }
            }

            function getCookieName(baseName) {
                return configCookieNamePrefix + baseName + "." + configTrackerSiteId + "." + domainHash
            }

            function hasCookies() {
                var testCookieName = getCookieName("testcookie");
                if (!isDefined(navigatorAlias.cookieEnabled)) {
                    setCookie(testCookieName, "1");
                    return getCookie(testCookieName) === "1" ? "1" : "0"
                }
                return navigatorAlias.cookieEnabled ? "1" : "0"
            }

            function updateDomainHash() {
                domainHash = hash((configCookieDomain || domainAlias) + (configCookiePath || "/")).slice(0, 4)
            }

            function getCustomVariablesFromCookie() {
                var cookieName = "UCVAR", cookie = getCookie(cookieName);
                if (cookie.length) {
                    cookie = JSON2.parse(cookie);
                    if (isObject(cookie)) {
                        return cookie
                    }
                }
                return {}
            }

            function loadCustomVariables() {
                if (customVariables === false) {
                    customVariables = getCustomVariablesFromCookie()
                }
            }

            function activityHandler() {
                var now = new Date();
                lastActivityTime = now.getTime()
            }

            function setVisitorIdCookie(uuid, createTs, visitCount, nowTs, lastVisitTs, lastEcommerceOrderTs) {
                setCookie(getCookieName("id"), uuid + "." + createTs + "." + visitCount + "." + nowTs + "." + lastVisitTs + "." + lastEcommerceOrderTs, configVisitorCookieTimeout, configCookiePath, configCookieDomain, cookieSecure)
            }

            function loadVisitorIdCookie() {
                var now = new Date(), nowTs = Math.round(now.getTime() / 1000), id = getCookie(getCookieName("id")), tmpContainer;
                if (id) {
                    tmpContainer = id.split(".");
                    tmpContainer.unshift("0")
                } else {
                    if (!visitorUUID) {
                        visitorUUID = hash((navigatorAlias.userAgent || "") + (navigatorAlias.platform || "") + JSON2.stringify(browserFeatures) + nowTs).slice(0, 16)
                    }
                    tmpContainer = ["1", visitorUUID, nowTs, 0, nowTs, "", ""]
                }
                return tmpContainer
            }

            function loadReferrerAttributionCookie() {
                var cookie = getCookie(getCookieName("ref"));
                if (cookie.length) {
                    try {
                        cookie = JSON2.parse(cookie);
                        if (isObject(cookie)) {
                            return cookie
                        }
                    } catch (err) {
                    }
                }
                return ["", "", 0, ""]
            }

            function getRequest(request, customData, pluginMethod, currentEcommerceOrderTs) {
                var i, now = new Date(), randNum = Math.round(now.getTime() / 1000) + 1 + Math.floor(Math.random() * 1000000), currentReferrerHostName, originalReferrerHostName, customVariablesCopy = customVariables, cvarname = "UCVAR", currentUrl = configCustomUrl || locationHrefAlias, currentUri, campaignNameDetected, campaignKeywordDetected;
                if (configDoNotTrack) {
                    return ""
                }
                if (!isDefined(currentEcommerceOrderTs)) {
                    currentEcommerceOrderTs = ""
                }
                if (!configConversionAttributionFirstReferrer || !campaignNameDetected.length) {
                    for (i in configCampaignNameParameters) {
                        if (Object.prototype.hasOwnProperty.call(configCampaignNameParameters, i)) {
                            campaignNameDetected = getParameter(currentUrl, configCampaignNameParameters[i]);
                            if (campaignNameDetected.length) {
                                break
                            }
                        }
                    }
                    for (i in configCampaignKeywordParameters) {
                        if (Object.prototype.hasOwnProperty.call(configCampaignKeywordParameters, i)) {
                            campaignKeywordDetected = getParameter(currentUrl, configCampaignKeywordParameters[i]);
                            if (campaignKeywordDetected.length) {
                                break
                            }
                        }
                    }
                }
                currentReferrerHostName = getHostName(configReferrerUrl);
                currentUri = currentUrl.indexOf("?") == -1 ? encodeWrapper(purify(currentUrl)) : encodeWrapper(purify(currentUrl.substr(0, currentUrl.indexOf("?"))));
                request += "&rand=" + randNum + "&site=" + configTrackerSiteId + "&url=" + encodeWrapper(purify(currentUrl)) + (configReferrerUrl.length ? "&urlref=" + encodeWrapper(purify(configReferrerUrl)) : "") + "&uri=" + currentUri + (campaignNameDetected.length ? "&_rcn=" + encodeWrapper(campaignNameDetected) : "") + (campaignKeywordDetected.length ? "&_rck=" + encodeWrapper(campaignKeywordDetected) : "");
                var customVariablesPageStringified = JSON2.stringify(customVariablesPage);
                if (customVariablesPageStringified.length > 2) {
                    request += "&cvar=" + encodeWrapper(customVariablesPageStringified)
                }
                for (i in browserFeatures) {
                    if (Object.prototype.hasOwnProperty.call(browserFeatures, i)) {
                        request += "&" + i + "=" + browserFeatures[i]
                    }
                }
                if (customData) {
                    request += "&data=" + encodeWrapper(JSON2.stringify(customData))
                } else {
                    if (configCustomData) {
                        request += "&data=" + encodeWrapper(JSON2.stringify(configCustomData))
                    }
                }
                if (customVariables) {
                    var customVariablesStringified = JSON2.stringify(customVariables);
                    if (customVariablesStringified.length > 2) {
                        request += "&_cvar=" + encodeWrapper(customVariablesStringified)
                    }
                    for (i in customVariablesCopy) {
                        if (Object.prototype.hasOwnProperty.call(customVariablesCopy, i)) {
                            if (customVariables[i][0] === "" || customVariables[i][1] === "") {
                                delete customVariables[i]
                            }
                        }
                    }
                    setCookie(cvarname, JSON2.stringify(customVariables), configSessionCookieTimeout, configCookiePath, configCookieDomain, cookieSecure)
                }
                request += executePluginMethod(pluginMethod);
                return request
            }

            function logEcommerce(orderId, grandTotal, subTotal, tax, shipping, discount) {
                var request = "goal=0&title=" + encodeWrapper(titleFixup(configTitle)), lastEcommerceOrderTs, now = new Date(), items = [], sku;
                if (String(orderId).length) {
                    request += "&ec_id=" + encodeWrapper(orderId);
                    lastEcommerceOrderTs = Math.round(now.getTime() / 1000)
                }
                request += "&revenue=" + grandTotal;
                if (String(subTotal).length) {
                    request += "&ec_st=" + subTotal
                }
                if (String(tax).length) {
                    request += "&ec_tx=" + tax
                }
                if (String(shipping).length) {
                    request += "&ec_sh=" + shipping
                }
                if (String(discount).length) {
                    request += "&ec_dt=" + discount
                }
                if (ecommerceItems) {
                    for (sku in ecommerceItems) {
                        if (Object.prototype.hasOwnProperty.call(ecommerceItems, sku)) {
                            if (!isDefined(ecommerceItems[sku][1])) {
                                ecommerceItems[sku][1] = ""
                            }
                            if (!isDefined(ecommerceItems[sku][2])) {
                                ecommerceItems[sku][2] = ""
                            }
                            if (!isDefined(ecommerceItems[sku][3]) || String(ecommerceItems[sku][3]).length === 0) {
                                ecommerceItems[sku][3] = 0
                            }
                            if (!isDefined(ecommerceItems[sku][4]) || String(ecommerceItems[sku][4]).length === 0) {
                                ecommerceItems[sku][4] = 1
                            }
                            items.push(ecommerceItems[sku])
                        }
                    }
                    request += "&ec_items=" + encodeWrapper(JSON2.stringify(items));
                    loadCustomVariables()
                }
                request = getRequest(request, configCustomData, "ecommerce", lastEcommerceOrderTs);
                sendRequest(request, configTrackerPause)
            }

            function logEcommerceOrder(orderId, grandTotal, subTotal, tax, shipping, discount) {
                if (String(orderId).length && isDefined(grandTotal)) {
                    logEcommerce(orderId, grandTotal, subTotal, tax, shipping, discount)
                }
            }

            function logEcommerceCartUpdate(grandTotal) {
                if (isDefined(grandTotal)) {
                    logEcommerce("", grandTotal, "", "", "", "")
                }
            }

            function logPageView(customTitle, customData) {
                var now = new Date(), request = getRequest("title=" + encodeWrapper(titleFixup(customTitle || configTitle)), customData, "log");
                sendRequest(request, configTrackerPause);
                if (configMinimumVisitTime && configHeartBeatTimer && !activityTrackingInstalled) {
                    activityTrackingInstalled = true;
                    addEventListener(documentAlias, "click", activityHandler);
                    addEventListener(documentAlias, "mouseup", activityHandler);
                    addEventListener(documentAlias, "mousedown", activityHandler);
                    addEventListener(documentAlias, "mousemove", activityHandler);
                    addEventListener(documentAlias, "mousewheel", activityHandler);
                    addEventListener(windowAlias, "DOMMouseScroll", activityHandler);
                    addEventListener(windowAlias, "scroll", activityHandler);
                    addEventListener(documentAlias, "keypress", activityHandler);
                    addEventListener(documentAlias, "keydown", activityHandler);
                    addEventListener(documentAlias, "keyup", activityHandler);
                    addEventListener(windowAlias, "resize", activityHandler);
                    addEventListener(windowAlias, "focus", activityHandler);
                    addEventListener(windowAlias, "blur", activityHandler);
                    lastActivityTime = now.getTime();
                    setTimeout(function heartBeat() {
                        var now = new Date(), request;
                        if ((lastActivityTime + configHeartBeatTimer) > now.getTime()) {
                            if (configMinimumVisitTime < now.getTime()) {
                                request = getRequest("ping=1", customData, "ping");
                                sendRequest(request, configTrackerPause)
                            }
                            setTimeout(heartBeat, configHeartBeatTimer)
                        }
                    }, configHeartBeatTimer)
                }
            }

            function logGoal(idGoal, customRevenue, customData) {
                var request = getRequest("goal=" + idGoal + (customRevenue ? "&revenue=" + customRevenue : ""), customData, "goal");
                sendRequest(request, configTrackerPause)
            }

            function logLink(url, linkType, customData) {
                var requestStr = linkType + "=" + encodeWrapper(purify(url)) + "&title=" + encodeWrapper(titleFixup(configTitle));
                var request = getRequest(requestStr, customData, "link");
                sendRequest(request, configTrackerPause)
            }

            function prefixPropertyName(prefix, propertyName) {
                if (prefix !== "") {
                    return prefix + propertyName.charAt(0).toUpperCase() + propertyName.slice(1)
                }
                return propertyName
            }

            function trackCallback(callback) {
                var isPreRendered, i, prefixes = ["", "webkit", "ms", "moz"], prefix;
                if (!configCountPreRendered) {
                    for (i = 0; i < prefixes.length; i++) {
                        prefix = prefixes[i];
                        if (Object.prototype.hasOwnProperty.call(documentAlias, prefixPropertyName(prefix, "hidden"))) {
                            if (documentAlias[prefixPropertyName(prefix, "visibilityState")] === "prerender") {
                                isPreRendered = true
                            }
                            break
                        }
                    }
                }
                if (isPreRendered) {
                    addEventListener(documentAlias, prefix + "visibilitychange", function ready() {
                        documentAlias.removeEventListener(prefix + "visibilitychange", ready, false);
                        callback()
                    });
                    return
                }
                callback()
            }

            function getClassesRegExp(configClasses, defaultClass) {
                var i, classesRegExp = "(^| )(ds[_-]" + defaultClass;
                if (configClasses) {
                    for (i = 0; i < configClasses.length; i++) {
                        classesRegExp += "|" + configClasses[i]
                    }
                }
                classesRegExp += ")( |$)";
                return new RegExp(classesRegExp)
            }

            function getLinkType(className, href, isInLink) {
                if (!isInLink) {
                    return "link"
                }
                var downloadPattern = getClassesRegExp(configDownloadClasses, "download"), linkPattern = getClassesRegExp(configLinkClasses, "link"), downloadExtensionsPattern = new RegExp("\\.(" + configDownloadExtensions + ")([?&#]|$)", "i");
                return linkPattern.test(className) ? "link" : (downloadPattern.test(className) || downloadExtensionsPattern.test(href) ? "download" : 0)
            }

            function processClick(sourceElement) {
                var parentElement, tag, linkType;
                while ((parentElement = sourceElement.parentNode) !== null && isDefined(parentElement) && ((tag = sourceElement.tagName.toUpperCase()) !== "A" && tag !== "AREA")) {
                    sourceElement = parentElement
                }
                if (isDefined(sourceElement.href)) {
                    var originalSourceHostName = sourceElement.hostname || getHostName(sourceElement.href), sourceHostName = originalSourceHostName.toLowerCase(), sourceHref = sourceElement.href.replace(originalSourceHostName, sourceHostName), scriptProtocol = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i");
                    if (!scriptProtocol.test(sourceHref)) {
                        linkType = getLinkType(sourceElement.className, sourceHref, isSiteHostName(sourceHostName));
                        if (linkType) {
                            sourceHref = urldecode(sourceHref);
                            logLink(sourceHref, linkType)
                        }
                    }
                }
            }

            function clickHandler(evt) {
                var button, target;
                evt = evt || windowAlias.event;
                button = evt.which || evt.button;
                target = evt.target || evt.srcElement;
                if (evt.type === "click") {
                    if (target) {
                        processClick(target)
                    }
                } else {
                    if (evt.type === "mousedown") {
                        if ((button === 1 || button === 2) && target) {
                            lastButton = button;
                            lastTarget = target
                        } else {
                            lastButton = lastTarget = null
                        }
                    } else {
                        if (evt.type === "mouseup") {
                            if (button === lastButton && target === lastTarget) {
                                processClick(target)
                            }
                            lastButton = lastTarget = null
                        }
                    }
                }
            }

            function addClickListener(element, enable) {
                if (enable) {
                    addEventListener(element, "mouseup", clickHandler, false);
                    addEventListener(element, "mousedown", clickHandler, false)
                } else {
                    addEventListener(element, "click", clickHandler, false)
                }
            }

            function addClickListeners(enable) {
                if (!linkTrackingInstalled) {
                    linkTrackingInstalled = true;
                    var i, ignorePattern = getClassesRegExp(configIgnoreClasses, "ignore"), linkElements = documentAlias.links;
                    if (linkElements) {
                        for (i = 0; i < linkElements.length; i++) {
                            if (!ignorePattern.test(linkElements[i].className)) {
                                addClickListener(linkElements[i], enable)
                            }
                        }
                    }
                }
            }

            function detectBrowserFeatures() {
                var i, mimeType, pluginMap = {
                    pdf: "application/pdf",
                    qt: "video/quicktime",
                    realp: "audio/x-pn-realaudio-plugin",
                    wma: "application/x-mplayer2",
                    dir: "application/x-director",
                    fla: "application/x-shockwave-flash",
                    java: "application/x-java-vm",
                    gears: "application/x-googlegears",
                    ag: "application/x-silverlight"
                };
                var plugins = [];
                if (navigatorAlias.mimeTypes && navigatorAlias.mimeTypes.length) {
                    for (i in pluginMap) {
                        if (Object.prototype.hasOwnProperty.call(pluginMap, i)) {
                            mimeType = navigatorAlias.mimeTypes[pluginMap[i]];
                            if (mimeType && mimeType.enabledPlugin) {
                                plugins.push(i)
                            }
                        }
                    }
                }
                if (typeof navigator.javaEnabled !== "unknown" && isDefined(navigatorAlias.javaEnabled) && navigatorAlias.javaEnabled()) {
                    var isHJava = false;
                    for (var j in plugins) {
                        if (plugins[j] == "java") {
                            isHJava = true;
                            break
                        }
                    }
                    if (!isHJava) {
                        plugins.push("java")
                    }
                }
                if (isFunction(windowAlias.GearsFactory)) {
                    var isHGears = false;
                    for (var j in plugins) {
                        if (plugins[j] == "gears") {
                            isHGears = true;
                            break
                        }
                    }
                    if (!isHGears) {
                        plugins.push("gears")
                    }
                }
                browserFeatures.plugin = encodeWrapper(purify(plugins.join("|")));
                browserFeatures.res = screenAlias.width + "x" + screenAlias.height;
                browserFeatures.cookie = hasCookies()
            }

            function registerHook(hookName, userHook) {
                var hookObj = null;
                if (isString(hookName) && !isDefined(registeredHooks[hookName]) && userHook) {
                    if (isObject(userHook)) {
                        hookObj = userHook
                    } else {
                        if (isString(userHook)) {
                            try {
                                eval("hookObj =" + userHook)
                            } catch (e) {
                            }
                        }
                    }
                    registeredHooks[hookName] = hookObj
                }
                return hookObj
            }

            detectBrowserFeatures();
            updateDomainHash();
            executePluginMethod("run", registerHook);
            return {
                hook: registeredHooks, getHook: function (hookName) {
                    return registeredHooks[hookName]
                }, getVisitorId: function () {
                    return (loadVisitorIdCookie())[1]
                }, getVisitorInfo: function () {
                    return loadVisitorIdCookie()
                }, getAttributionInfo: function () {
                    return loadReferrerAttributionCookie()
                }, getAttributionCampaignName: function () {
                    return loadReferrerAttributionCookie()[0]
                }, getAttributionCampaignKeyword: function () {
                    return loadReferrerAttributionCookie()[1]
                }, getAttributionReferrerTimestamp: function () {
                    return loadReferrerAttributionCookie()[2]
                }, getAttributionReferrerUrl: function () {
                    return loadReferrerAttributionCookie()[3]
                }, setTrackerUrl: function (trackerUrl) {
                    configTrackerUrl = trackerUrl
                }, setSiteId: function (siteId) {
                    configTrackerSiteId = siteId
                }, setUtHeatMapOpen: function (isOpen) {
                    window.openUtHeatMapOpen = isOpen
                }, setCustomData: function (key_or_obj, opt_value) {
                    if (isObject(key_or_obj)) {
                        configCustomData = key_or_obj
                    } else {
                        if (!configCustomData) {
                            configCustomData = []
                        }
                        configCustomData[key_or_obj] = opt_value
                    }
                }, getCustomData: function () {
                    return configCustomData
                }, setCustomVariable: function (index, name, value, scope) {
                    var toRecord;
                    if (!isDefined(scope)) {
                        scope = "visit"
                    }
                    if (index > 0) {
                        name = isDefined(name) && !isString(name) ? String(name) : name;
                        value = isDefined(value) && !isString(value) ? String(value) : value;
                        toRecord = [name.slice(0, customVariableMaximumLength), value.slice(0, customVariableMaximumLength)];
                        if (scope === "visit" || scope === 2) {
                            loadCustomVariables();
                            customVariables[index] = toRecord
                        } else {
                            if (scope === "page" || scope === 3) {
                                customVariablesPage[index] = toRecord
                            }
                        }
                    }
                }, getCustomVariable: function (index, scope) {
                    var cvar;
                    if (!isDefined(scope)) {
                        scope = "visit"
                    }
                    if (scope === "page" || scope === 3) {
                        cvar = customVariablesPage[index]
                    } else {
                        if (scope === "visit" || scope === 2) {
                            loadCustomVariables();
                            cvar = customVariables[index]
                        }
                    }
                    if (!isDefined(cvar) || (cvar && cvar[0] === "")) {
                        return false
                    }
                    return cvar
                }, deleteCustomVariable: function (index, scope) {
                    if (this.getCustomVariable(index, scope)) {
                        this.setCustomVariable(index, "", "", scope)
                    }
                }, setLinkTrackingTimer: function (delay) {
                    configTrackerPause = delay
                }, setDownloadExtensions: function (extensions) {
                    configDownloadExtensions = extensions
                }, addDownloadExtensions: function (extensions) {
                    configDownloadExtensions += "|" + extensions
                }, setDomains: function (hostsAlias) {
                    configHostsAlias = isString(hostsAlias) ? [hostsAlias] : hostsAlias;
                    configHostsAlias.push(domainAlias)
                }, setIgnoreClasses: function (ignoreClasses) {
                    configIgnoreClasses = isString(ignoreClasses) ? [ignoreClasses] : ignoreClasses
                }, setRequestMethod: function (method) {
                    configRequestMethod = method || "GET"
                }, setReferrerUrl: function (url) {
                    configReferrerUrl = url
                }, setCustomUrl: function (url) {
                    configCustomUrl = resolveRelativeReference(locationHrefAlias, url)
                }, setDocumentTitle: function (title) {
                    configTitle = title
                }, setDownloadClasses: function (downloadClasses) {
                    configDownloadClasses = isString(downloadClasses) ? [downloadClasses] : downloadClasses
                }, setLinkClasses: function (linkClasses) {
                    configLinkClasses = isString(linkClasses) ? [linkClasses] : linkClasses
                }, setCampaignNameKey: function (campaignNames) {
                    configCampaignNameParameters = isString(campaignNames) ? [campaignNames] : campaignNames
                }, setCampaignKeywordKey: function (campaignKeywords) {
                    configCampaignKeywordParameters = isString(campaignKeywords) ? [campaignKeywords] : campaignKeywords
                }, discardHashTag: function (enableFilter) {
                    configDiscardHashTag = enableFilter
                }, setCookieNamePrefix: function (cookieNamePrefix) {
                    configCookieNamePrefix = cookieNamePrefix;
                    customVariables = getCustomVariablesFromCookie()
                }, setCookieDomain: function (domain) {
                    configCookieDomain = domainFixup(domain);
                    updateDomainHash()
                }, setCookiePath: function (path) {
                    configCookiePath = path;
                    updateDomainHash()
                }, setVisitorCookieTimeout: function (timeout) {
                    configVisitorCookieTimeout = timeout * 1000
                }, setSessionCookieTimeout: function (timeout) {
                    configSessionCookieTimeout = timeout * 1000
                }, setReferralCookieTimeout: function (timeout) {
                    configReferralCookieTimeout = timeout * 1000
                }, setConversionAttributionFirstReferrer: function (enable) {
                    configConversionAttributionFirstReferrer = enable
                }, setDoNotTrack: function (enable) {
                    var dnt = navigatorAlias.doNotTrack || navigatorAlias.msDoNotTrack;
                    configDoNotTrack = enable && (dnt === "yes" || dnt === "1")
                }, addListener: function (element, enable) {
                    addClickListener(element, enable)
                }, enableLinkTracking: function (enable) {
                    if (hasLoaded) {
                        addClickListeners(enable)
                    } else {
                        registeredOnLoadHandlers.push(function () {
                            addClickListeners(enable)
                        })
                    }
                }, setHeartBeatTimer: function (minimumVisitLength, heartBeatDelay) {
                    var now = new Date();
                    configMinimumVisitTime = now.getTime() + minimumVisitLength * 1000;
                    configHeartBeatTimer = heartBeatDelay * 1000
                }, killFrame: function () {
                    if (windowAlias.location !== windowAlias.top.location) {
                        windowAlias.top.location = windowAlias.location
                    }
                }, redirectFile: function (url) {
                    if (windowAlias.location.protocol === "file:") {
                        windowAlias.location = url
                    }
                }, setCountPreRendered: function (enable) {
                    configCountPreRendered = enable
                }, trackGoal: function (idGoal, customRevenue, customData) {
                    trackCallback(function () {
                        logGoal(idGoal, customRevenue, customData)
                    })
                }, trackLink: function (sourceUrl, linkType, customData) {
                    trackCallback(function () {
                        logLink(sourceUrl, linkType, customData)
                    })
                }, trackPageView: function (customTitle, customData) {
                    trackCallback(function () {
                        logPageView(customTitle, customData)
                    })
                }, trackEvent: function (eventName, targetUrl, targetType) {
                    var eventData = [eventName, targetUrl, targetType];
                    trackCallback(function () {
                        configCustomUrl = eventName;
                        logPageView(eventName, eventData)
                    });
                    var regExp = /(http[s]?|ftp):\/\/[^\/\.]+?\..+\w$/i;
                    if (targetUrl && regExp.test(targetUrl)) {
                        if (targetType) {
                            window.open(targetUrl)
                        } else {
                            setTimeout(function () {
                                window.location.href = targetUrl
                            }, 300)
                        }
                    }
                }, trackCustomEvent: function (trackUrl, trackParams, targetUrl, targetType) {
                    trackUrl = getProtocolScheme(configTrackerUrl) + "://" + getHostName(configTrackerUrl) + "/" + trackUrl;
                    var now = new Date();
                    var randNum = Math.round(now.getTime() / 1000) + 1 + Math.floor(Math.random() * 1000000);
                    trackParams += "&rand=" + randNum;
                    getImage(trackParams, trackUrl);
                    var regExp = /(http[s]?|ftp):\/\/[^\/\.]+?\..+\w$/i;
                    if (targetUrl && regExp.test(targetUrl)) {
                        if (targetType) {
                            window.open(targetUrl)
                        } else {
                            setTimeout(function () {
                                window.location.href = targetUrl
                            }, 300)
                        }
                    }
                }, setEcommerceView: function (sku, name, category, price) {
                    if (!isDefined(category) || !category.length) {
                        category = ""
                    } else {
                        if (category instanceof Array) {
                            category = JSON2.stringify(category)
                        }
                    }
                    customVariablesPage[5] = ["_pkc", category];
                    if (isDefined(price) && String(price).length) {
                        customVariablesPage[2] = ["_pkp", price]
                    }
                    if ((!isDefined(sku) || !sku.length) && (!isDefined(name) || !name.length)) {
                        return
                    }
                    if (isDefined(sku) && sku.length) {
                        customVariablesPage[3] = ["_pks", sku]
                    }
                    if (!isDefined(name) || !name.length) {
                        name = ""
                    }
                    customVariablesPage[4] = ["_pkn", name]
                }, addEcommerceItem: function (sku, name, category, price, quantity) {
                    if (sku.length) {
                        ecommerceItems[sku] = [sku, name, category, price, quantity]
                    }
                }, trackEcommerceOrder: function (orderId, grandTotal, subTotal, tax, shipping, discount) {
                    logEcommerceOrder(orderId, grandTotal, subTotal, tax, shipping, discount)
                }, trackEcommerceCartUpdate: function (grandTotal) {
                    logEcommerceCartUpdate(grandTotal)
                }
            }
        }

        function TrackerProxy() {
            return {push: apply}
        }

        addEventListener(windowAlias, "beforeunload", beforeUnloadHandler, false);
        addReadyListener();
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        asyncTracker = new Tracker();
        for (i = 0; i < _utmengniu.length; i++) {
            if (_utmengniu[i][0] === "setTrackerUrl" || _utmengniu[i][0] === "setSiteId" || _utmengniu[i][0] === "setCustomVariable" || _utmengniu[i][0] === "trackEvent" || _utmengniu[i][0] === "trackGoal" || _utmengniu[i][0] === "deleteCustomVariable" || _utmengniu[i][0] === "trackCustomEvent") {
                apply(_utmengniu[i]);
                delete _utmengniu[i]
            }
        }
        for (i = 0; i < _utmengniu.length; i++) {
            if (_utmengniu[i] && _utmengniu[i][0] === "openUtHeatMapOpen") {
                window.openUtHeatMapOpen = true;
                continue
            }
            if (_utmengniu[i]) {
                apply(_utmengniu[i])
            }
        }
        _utmengniu = new TrackerProxy();
        return {
            addPlugin: function (pluginName, pluginObj) {
                plugins[pluginName] = pluginObj
            }, getTracker: function (piwikUrl, siteId) {
                return new Tracker(piwikUrl, siteId)
            }, getAsyncTracker: function () {
                return asyncTracker
            }
        }
    }()), deepsight_log = function (documentTitle, siteId, piwikUrl, customData) {
    function getOption(optionName) {
        try {
            return eval("deepsight_" + optionName)
        } catch (e) {
        }
        return
    }

    var option, utTracker = UniclickTracking.getTracker(piwikUrl, siteId);
    utTracker.setDocumentTitle(documentTitle);
    utTracker.setCustomData(customData);
    option = getOption("tracker_pause");
    if (option) {
        utTracker.setLinkTrackingTimer(option)
    }
    option = getOption("download_extensions");
    if (option) {
        utTracker.setDownloadExtensions(option)
    }
    option = getOption("hosts_alias");
    if (option) {
        utTracker.setDomains(option)
    }
    option = getOption("ignore_classes");
    if (option) {
        utTracker.setIgnoreClasses(option)
    }
    utTracker.trackPageView();
    if (getOption("install_tracker")) {
        deepsight_track = function (sourceUrl, siteId, piwikUrl, linkType) {
            utTracker.setSiteId(siteId);
            utTracker.setTrackerUrl(piwikUrl);
            utTracker.trackLink(sourceUrl, linkType)
        };
        utTracker.enableLinkTracking()
    }
};
(function (f, g) {
    if (f.UNC_HT_TRACK) {
        return
    }
    var a = false;
    var c = f.location.href.split("http");
    if (c.length > 1 && c[1] && (c[1].indexOf("mengniu.com.cn") > 0)) {
        a = true
    }
    if (typeof(f.OPENUTHEATMAPOPEN) !== "undefined" && f.OPENUTHEATMAPOPEN === true) {
        a = true
    }
    if (!a) {
        return
    }
    function e(j, i, h) {
        if (j.addEventListener) {
            j.addEventListener(i, h, false)
        } else {
            if (j.attachEvent) {
                j.attachEvent("on" + i, h)
            } else {
                j["on" + i] = h
            }
        }
    }

    var d = "http://heatmap.gentags.net/collectht/uniut.gif";
    var b = function (i) {
        var h = new Image();
        h.src = i
    };
    e(document, "mousedown", function (l) {
        var q = f, n = "inner";
        if (!("innerWidth" in f)) {
            q = document.documentElement || document.body
        }
        var o = l.pageX ? l.pageX : l.offsetX;
        var m = l.pageY ? l.pageY : l.offsetY;
        var i = q[n + "Width"];
        var p = q[n + "Height"];
        var h = f.location.href;
        var k = "&x=" + parseInt(o) + "&y=" + parseInt(m) + "&width=" + parseInt(i) + "&height=" + parseInt(p) + "&site=" + encodeURIComponent(h);
        var j = d + "?" + k + "&rnd=" + Math.floor(Math.random() * 100000);
        b(j)
    });
    f.UNC_HT_TRACK = true
})(window);
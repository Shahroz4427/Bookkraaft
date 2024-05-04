window.FontAwesomeKitConfig = {
    asyncLoading: {enabled: !1},
    autoA11y: {enabled: !0},
    baseUrl: "https://ka-f.fontawesome.com",
    baseUrlKit: "https://kit.fontawesome.com",
    detectConflictsUntil: null,
    iconUploads: {},
    id: 115878527,
    license: "pro",
    method: "css",
    minify: {enabled: !0},
    token: "78a439b331",
    v4FontFaceShim: {enabled: !0},
    v4shim: {enabled: !0},
    v5FontFaceShim: {enabled: !0},
    version: "6.0.0"
}, function (t) {
    "function" == typeof define && define.amd ? define("kit-loader", t) : t()
}(function () {
    "use strict";

    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(e)
    }

    function e(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function n(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, o)
        }
        return n
    }

    function o(t) {
        for (var o = 1; o < arguments.length; o++) {
            var r = null != arguments[o] ? arguments[o] : {};
            o % 2 ? n(Object(r), !0).forEach(function (n) {
                e(t, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }

    function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
        return o
    }

    function i(t, e) {
        var n = e && e.addOn || "", o = e && e.baseFilename || t.license + n, r = e && e.minify ? ".min" : "",
            i = e && e.fileSuffix || t.method, a = e && e.subdir || t.method;
        return t.baseUrl + "/releases/" + ("latest" === t.version ? "latest" : "v".concat(t.version)) + "/" + a + "/" + o + r + "." + i
    }

    function a(t, e) {
        var n = "." + Array.prototype.join.call(e || ["fa"], ",."), o = t.querySelectorAll(n);
        Array.prototype.forEach.call(o, function (e) {
            var n = e.getAttribute("title");
            e.setAttribute("aria-hidden", "true");
            var o = !e.nextElementSibling || !e.nextElementSibling.classList.contains("sr-only");
            if (n && o) {
                var r = t.createElement("span");
                r.innerHTML = n, r.classList.add("sr-only"), e.parentNode.insertBefore(r, e.nextSibling)
            }
        })
    }

    var c, f = function () {
        }, s = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
        u = "undefined" == typeof setImmediate ? setTimeout : setImmediate, d = [];

    function l() {
        for (var t = 0; t < d.length; t++) d[t][0](d[t][1]);
        d = [], c = !1
    }

    function h(t, e) {
        d.push([t, e]), c || (c = !0, u(l, 0))
    }

    function p(t) {
        var e = t.owner, n = e._state, o = e._data, r = t[n], i = t.then;
        if ("function" == typeof r) {
            n = "fulfilled";
            try {
                o = r(o)
            } catch (a) {
                b(i, a)
            }
        }
        v(i, o) || ("fulfilled" === n && m(i, o), "rejected" === n && b(i, o))
    }

    function v(e, n) {
        var o;
        try {
            if (e === n) throw TypeError("A promises callback cannot return that same promise.");
            if (n && ("function" == typeof n || "object" === t(n))) {
                var r = n.then;
                if ("function" == typeof r) return r.call(n, function (t) {
                    o || (o = !0, n === t ? y(e, t) : m(e, t))
                }, function (t) {
                    o || (o = !0, b(e, t))
                }), !0
            }
        } catch (i) {
            return o || b(e, i), !0
        }
        return !1
    }

    function m(t, e) {
        t !== e && v(t, e) || y(t, e)
    }

    function y(t, e) {
        "pending" === t._state && (t._state = "settled", t._data = e, h($, t))
    }

    function b(t, e) {
        "pending" === t._state && (t._state = "settled", t._data = e, h(A, t))
    }

    function g(t) {
        t._then = t._then.forEach(p)
    }

    function $(t) {
        t._state = "fulfilled", g(t)
    }

    function A(t) {
        t._state = "rejected", g(t), !t._handled && s && global.process.emit("unhandledRejection", t._data, t)
    }

    function w(t) {
        global.process.emit("rejectionHandled", t)
    }

    function _(t) {
        if ("function" != typeof t) throw TypeError("Promise resolver " + t + " is not a function");
        if (this instanceof _ == !1) throw TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this._then = [], function (t, e) {
            function n(t) {
                b(e, t)
            }

            try {
                t(function (t) {
                    m(e, t)
                }, n)
            } catch (o) {
                n(o)
            }
        }(t, this)
    }

    _.prototype = {
        constructor: _, _state: "pending", _then: null, _data: void 0, _handled: !1, then: function (t, e) {
            var n = {owner: this, then: new this.constructor(f), fulfilled: t, rejected: e};
            return !e && !t || this._handled || (this._handled = !0, "rejected" === this._state && s && h(w, this)), "fulfilled" === this._state || "rejected" === this._state ? h(p, n) : this._then.push(n), n.then
        }, catch: function (t) {
            return this.then(null, t)
        }
    }, _.all = function (t) {
        if (!Array.isArray(t)) throw TypeError("You must pass an array to Promise.all().");
        return new _(function (e, n) {
            var o = [], r = 0;

            function i(t) {
                return r++, function (n) {
                    o[t] = n, --r || e(o)
                }
            }

            for (var a, c = 0; c < t.length; c++) (a = t[c]) && "function" == typeof a.then ? a.then(i(c), n) : o[c] = a;
            r || e(o)
        })
    }, _.race = function (t) {
        if (!Array.isArray(t)) throw TypeError("You must pass an array to Promise.race().");
        return new _(function (e, n) {
            for (var o, r = 0; r < t.length; r++) (o = t[r]) && "function" == typeof o.then ? o.then(e, n) : e(o)
        })
    }, _.resolve = function (e) {
        return e && "object" === t(e) && e.constructor === _ ? e : new _(function (t) {
            t(e)
        })
    }, _.reject = function (t) {
        return new _(function (e, n) {
            n(t)
        })
    };
    var S = "function" == typeof Promise ? Promise : _;

    function F(t, e) {
        var n = e.fetch, o = e.XMLHttpRequest, r = e.token, i = t;
        return "URLSearchParams" in window ? (i = new URL(t)).searchParams.set("token", r) : i = i + "?token=" + encodeURIComponent(r), i = i.toString(), new S(function (t, e) {
            if ("function" == typeof n) n(i, {mode: "cors", cache: "default"}).then(function (t) {
                if (t.ok) return t.text();
                throw Error("")
            }).then(function (e) {
                t(e)
            }).catch(e); else if ("function" == typeof o) {
                var r = new o;
                r.addEventListener("loadend", function () {
                    this.responseText ? t(this.responseText) : e(Error(""))
                }), ["abort", "error", "timeout"].map(function (t) {
                    r.addEventListener(t, function () {
                        e(Error(""))
                    })
                }), r.open("GET", i), r.send()
            } else e(Error(""))
        })
    }

    function C(t, e) {
        var n = document.createElement("SCRIPT"), o = document.createTextNode(t);
        return n.appendChild(o), n.referrerPolicy = "strict-origin", e.id && n.setAttribute("id", e.id), e && e.detectingConflicts && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), n
    }

    function k(t) {
        var e, n = [], o = document,
            r = (o.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
        r || o.addEventListener("DOMContentLoaded", e = function () {
            for (o.removeEventListener("DOMContentLoaded", e), r = 1; e = n.shift();) e()
        }), r ? setTimeout(t, 0) : n.push(t)
    }

    try {
        if (window.FontAwesomeKitConfig) {
            var E = window.FontAwesomeKitConfig, P = {
                detectingConflicts: E.detectConflictsUntil && new Date <= new Date(E.detectConflictsUntil),
                detectionIgnoreAttr: "data-fa-detection-ignore",
                fetch: window.fetch,
                token: E.token,
                XMLHttpRequest: window.XMLHttpRequest,
                document: document
            }, U = document.currentScript, j = U ? U.parentElement : document.head;
            (function () {
                var t, e, n, c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return "js" === c.method ? (t = c, (e = f).autoA11y = t.autoA11y.enabled, "pro" === t.license && (e.autoFetchSvg = !0, e.fetchSvgFrom = t.baseUrl + "/releases/" + ("latest" === t.version ? "latest" : "v".concat(t.version)) + "/svgs", e.fetchUploadedSvgFrom = t.uploadsUrl), n = [], t.v4shim.enabled && n.push(new S(function (n, r) {
                    F(i(t, {addOn: "-v4-shims", minify: t.minify.enabled}), e).then(function (t) {
                        n(C(t, o(o({}, e), {}, {id: "fa-v4-shims"})))
                    }).catch(r)
                })), n.push(new S(function (n, r) {
                    F(i(t, {minify: t.minify.enabled}), e).then(function (t) {
                        var r, i, a, c;
                        n((r = C(t, o(o({}, e), {}, {id: "fa-main"})), a = (i = e) && void 0 !== i.autoFetchSvg ? i.autoFetchSvg : void 0, c = i && void 0 !== i.autoA11y ? i.autoA11y : void 0, void 0 !== c && r.setAttribute("data-auto-a11y", c ? "true" : "false"), a && (r.setAttributeNode(document.createAttribute("data-auto-fetch-svg")), r.setAttribute("data-fetch-svg-from", i.fetchSvgFrom), r.setAttribute("data-fetch-uploaded-svg-from", i.fetchUploadedSvgFrom)), r))
                    }).catch(r)
                })), S.all(n)) : "css" === c.method ? function t(e, n) {
                    var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {
                        }, f = n.document || f, s = a.bind(a, f, ["fa", "fab", "fas", "far", "fal", "fad", "fak"]),
                        u = Object.keys(e.iconUploads || {}).length > 0;
                    e.autoA11y.enabled && c(s);
                    var d = [{id: "fa-main", addOn: void 0}];
                    e.v4shim && e.v4shim.enabled && d.push({
                        id: "fa-v4-shims",
                        addOn: "-v4-shims"
                    }), e.v5FontFaceShim && e.v5FontFaceShim.enabled && d.push({
                        id: "fa-v5-font-face",
                        addOn: "-v5-font-face"
                    }), e.v4FontFaceShim && e.v4FontFaceShim.enabled && d.push({
                        id: "fa-v4-font-face",
                        addOn: "-v4-font-face"
                    }), u && d.push({id: "fa-kit-upload", customCss: !0});
                    var l = d.map(function (t) {
                        return new S(function (a, c) {
                            var f;
                            F(t.customCss ? (f = e).baseUrlKit + "/" + f.token + "/" + f.id + "/kit-upload.css" : i(e, {
                                addOn: t.addOn,
                                minify: e.minify.enabled
                            }), n).then(function (i) {
                                var c, f, s, u, d;
                                a((c = i, f = o(o({}, n), {}, {
                                    baseUrl: e.baseUrl, version: e.version, id: t.id, contentFilter: function (t, e) {
                                        var n, o, i, a;
                                        return n = t, o = e.baseUrl, i = e.version, a = n, [[/(url\("?)\.\.\/\.\.\/\.\./g, function (t, e) {
                                            return "".concat(e).concat(o)
                                        }], [/(url\("?)\.\.\/webfonts/g, function (t, e) {
                                            return "".concat(e).concat(o, "/releases/v").concat(i, "/webfonts")
                                        }], [/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g, function (t, e) {
                                            return "".concat(e).concat(o)
                                        }]].forEach(function (t) {
                                            var e, n = (e = t, function (t) {
                                                if (Array.isArray(t)) return t
                                            }(e) || function (t, e) {
                                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                                                    var n = [], o = !0, r = !1, i = void 0;
                                                    try {
                                                        for (var a, c = t[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); o = !0) ;
                                                    } catch (f) {
                                                        r = !0, i = f
                                                    } finally {
                                                        try {
                                                            o || null == c.return || c.return()
                                                        } finally {
                                                            if (r) throw i
                                                        }
                                                    }
                                                    return n
                                                }
                                            }(e, 2) || function (t, e) {
                                                if (t) {
                                                    if ("string" == typeof t) return r(t, e);
                                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                                    if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e)
                                                }
                                            }(e, 2) || function () {
                                                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }()), o = n[0], i = n[1];
                                            a = a.replace(o, i)
                                        }), a
                                    }
                                }), s = f.contentFilter || function (t, e) {
                                    return t
                                }, u = document.createElement("style"), d = document.createTextNode(s(c, f)), u.appendChild(d), u.media = "all", f.id && u.setAttribute("id", f.id), f && f.detectingConflicts && f.detectionIgnoreAttr && u.setAttributeNode(document.createAttribute(f.detectionIgnoreAttr)), u))
                            }).catch(c)
                        })
                    });
                    return S.all(l)
                }(c, f, function (t) {
                    var e;
                    k(t), e = t, "undefined" != typeof MutationObserver && new MutationObserver(e).observe(document, {
                        childList: !0,
                        subtree: !0
                    })
                }) : void 0
            })(E, P).then(function (t) {
                t.map(function (t) {
                    try {
                        j.insertBefore(t, U ? U.nextSibling : null)
                    } catch (e) {
                        j.appendChild(t)
                    }
                }), P.detectingConflicts && U && k(function () {
                    U.setAttributeNode(document.createAttribute(P.detectionIgnoreAttr));
                    var t, e, n,
                        o = (t = E, e = P, n = document.createElement("script"), e && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), n.src = i(t, {
                            baseFilename: "conflict-detection",
                            fileSuffix: "js",
                            subdir: "js",
                            minify: t.minify.enabled
                        }), n);
                    document.body.appendChild(o)
                })
            }).catch(function (t) {
                console.error("".concat("Font Awesome Kit:", " ").concat(t))
            })
        }
    } catch (O) {
        console.error("".concat("Font Awesome Kit:", " ").concat(O))
    }
});

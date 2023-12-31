(this.__LOADABLE_LOADED_CHUNKS__ = this.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [31], {
        1721: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.getClass = void 0;
            var a = r(1758).getClass;
            t.getClass = a
        },
        1763: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = void 0;
            var a;
            ! function(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = n(t);
                if (r && r.has(e)) return r.get(e);
                var a = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                        var u = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                        u && (u.get || u.set) ? Object.defineProperty(a, l, u) : a[l] = e[l]
                    }
                a.default = e;
                r && r.set(e, a)
            }(r(1));

            function n(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (n = function(e) {
                    return e ? r : t
                })(e)
            }

            function o(e, t, r, n) {
                a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    l = arguments.length - 3;
                if (t || 0 === l || (t = {
                        children: void 0
                    }), 1 === l) t.children = n;
                else if (l > 1) {
                    for (var u = new Array(l), f = 0; f < l; f++) u[f] = arguments[f + 3];
                    t.children = u
                }
                if (t && o)
                    for (var i in o) void 0 === t[i] && (t[i] = o[i]);
                else t || (t = o || {});
                return {
                    $$typeof: a,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            t.default = function(e) {
                var t = e.width,
                    r = void 0 === t ? 32 : t,
                    a = e.height,
                    n = void 0 === a ? 32 : a,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l;
                return o("svg", {
                    width: r,
                    height: n,
                    viewBox: "0 0 32 32",
                    fill: "none",
                    className: e.className
                }, void 0, o("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z",
                    fill: u,
                    className: e.foreground
                }))
            }
        },
        2218: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                switch (e) {
                    case o.default.WINDOWS:
                        return n.Images.REFRESH_DOWNLOAD_WINDOWS;
                    case o.default.MAC:
                        return n.Images.REFRESH_DOWNLOAD_MAC;
                    case o.default.ANDROID:
                        return n.Images.REFRESH_DOWNLOAD_ANDROID;
                    case o.default.IOS:
                        return n.Images.REFRESH_DOWNLOAD_IOS;
                    default:
                        return n.Images.REFRESH_DOWNLOAD_LINUX
                }
            };
            var a, n = r(80),
                o = (a = r(60)) && a.__esModule ? a : {
                    default: a
                }
        },
        2571: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = _;
            y(r(1));
            var a, n = r(20),
                o = O(r(456)),
                l = O(r(166)),
                u = y(r(448)),
                f = O(r(60)),
                i = r(107),
                d = r(445),
                s = y(r(57)),
                c = O(r(2218)),
                p = O(r(19)),
                v = O(r(1674));

            function O(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (m = function(e) {
                    return e ? r : t
                })(e)
            }

            function y(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = m(t);
                if (r && r.has(e)) return r.get(e);
                var a = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o]
                    }
                a.default = e;
                r && r.set(e, a);
                return a
            }

            function D(e, t, r, n) {
                a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    l = arguments.length - 3;
                if (t || 0 === l || (t = {
                        children: void 0
                    }), 1 === l) t.children = n;
                else if (l > 1) {
                    for (var u = new Array(l), f = 0; f < l; f++) u[f] = arguments[f + 3];
                    t.children = u
                }
                if (t && o)
                    for (var i in o) void 0 === t[i] && (t[i] = o[i]);
                else t || (t = o || {});
                return {
                    $$typeof: a,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function _() {
                var e = (0, n.useStateFromStores)([f.default], (function() {
                        return f.default.platform
                    })),
                    t = (0, o.default)(e, !1);
                return D(i.Grid, {
                    className: v.default.outerContainer
                }, void 0, D(u.default, {
                    colorScheme: u.HeaderColorSchemes.WHITE
                }), D(i.Row, {
                    className: v.default.container
                }, void 0, D("div", {
                    className: v.default.body
                }, void 0, D("div", {
                    className: v.default.text
                }, void 0, D(d.H1, {}, void 0, p.default.Messages.DOWNLOAD_HERO_TITLE), D(s.default, {
                    className: v.default.subtitle,
                    type: s.TextTypes.LARGE
                }, void 0, p.default.Messages.DOWNLOAD_HERO_SUBTITLE)), D("div", {
                    className: v.default.buttonContainer
                }, void 0, D(l.default, {
                    className: v.default.downloadButton,
                    analyticsLocation: "Downloads Page"
                }), D(s.default, {
                    className: v.default.infoText,
                    type: s.TextTypes.SMALL
                }, void 0, t.main.info))), D("div", {
                    className: v.default.imageContainer
                }, void 0, D("img", {
                    className: v.default.image,
                    src: (0, c.default)(e),
                    alt: ""
                }))))
            }
            _.displayName = "Hero"
        },
        2572: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = P;
            var a, n = L(r(1)),
                o = N(r(17)),
                l = r(20),
                u = N(r(1763)),
                f = L(r(456)),
                i = N(r(463)),
                d = N(r(60)),
                s = r(58),
                c = r(107),
                p = r(445),
                v = N(r(57)),
                O = r(1721),
                m = N(r(462)),
                y = N(r(2218)),
                D = N(r(19)),
                _ = N(r(1675));

            function N(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function g(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (g = function(e) {
                    return e ? r : t
                })(e)
            }

            function L(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = g(t);
                if (r && r.has(e)) return r.get(e);
                var a = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o]
                    }
                a.default = e;
                r && r.set(e, a);
                return a
            }

            function b(e, t, r, n) {
                a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    l = arguments.length - 3;
                if (t || 0 === l || (t = {
                        children: void 0
                    }), 1 === l) t.children = n;
                else if (l > 1) {
                    for (var u = new Array(l), f = 0; f < l; f++) u[f] = arguments[f + 3];
                    t.children = u
                }
                if (t && o)
                    for (var i in o) void 0 === t[i] && (t[i] = o[i]);
                else t || (t = o || {});
                return {
                    $$typeof: a,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            var w = "Download Page",
                h = [d.default.IOS, d.default.ANDROID, d.default.LINUX, d.default.WINDOWS, d.default.MAC];

            function M(e) {
                return n.useMemo((function() {
                    return h.filter((function(t) {
                        return t !== e
                    }))
                }), [e])
            }

            function A(e) {
                switch (e) {
                    case d.default.WINDOWS:
                        return D.default.Messages.DOWNLOAD_WINDOWS;
                    case d.default.MAC:
                        return D.default.Messages.DOWNLOAD_MAC;
                    case d.default.LINUX:
                        return D.default.Messages.DOWNLOAD_LINUX;
                    case d.default.ANDROID:
                        return D.default.Messages.DOWNLOAD_ANDROID;
                    case d.default.IOS:
                        return D.default.Messages.DOWNLOAD_IOS;
                    default:
                        return "unknown FIXME"
                }
            }

            function S(e, t) {
                var r = (0, f.getAppDetails)(t, !0);
                if (!r.main.hasPTBText) return [];
                if (null == r.formats) {
                    var a = e.getDownloadLink(t, !0, "");
                    return [{
                        key: t,
                        name: A(t),
                        link: a,
                        onClick: function() {
                            return (0, i.default)(t, !0, w, a, !1)
                        }
                    }]
                }
                return r.formats.map((function(e) {
                    var r = d.default.getDownloadLink(t, !0, e.value);
                    return {
                        key: "" + t + e.label,
                        name: A(t) + " " + e.label,
                        link: r,
                        onClick: function() {
                            return (0, i.default)(t, !0, w, r, !1)
                        }
                    }
                }))
            }

            function W(e) {
                var t, r = e.className,
                    a = e.platform,
                    n = (0, f.default)(a);
                if (null != n.formats) {
                    var l = n.formats.map((function(e) {
                        var t = d.default.getDownloadLink(a, !1, e.value);
                        return {
                            key: e.value,
                            name: e.value,
                            link: t,
                            onClick: function() {
                                return (0, i.default)(a, !1, w, t, !1)
                            }
                        }
                    }));
                    t = b(m.default, {
                        className: _.default.platformButton,
                        items: l,
                        color: s.ButtonColors.DARK,
                        navId: a + "-dropdown"
                    }, void 0, D.default.Messages.DOWNLOAD_DOWNLOAD, b(u.default, {
                        className: _.default.dropdownArrow,
                        width: 24,
                        height: 24
                    }))
                } else t = b(s.LinkButton, {
                    className: _.default.platformButton,
                    color: s.ButtonColors.DARK,
                    href: n.url,
                    onClick: function() {
                        return (0, i.default)(a, !1, w, n.url, !1)
                    },
                    alt: n.other.header
                }, void 0, D.default.Messages.DOWNLOAD_DOWNLOAD);
                return b("div", {
                    className: (0, o.default)(_.default.card, r)
                }, void 0, b("div", {
                    className: _.default.cardTextContainer
                }, void 0, b(p.H3, {
                    className: _.default.platformName
                }, void 0, A(a)), t), b("img", {
                    className: _.default.platformImage,
                    src: (0, y.default)(a),
                    alt: ""
                }))
            }
            W.displayName = "PlatformCard";

            function I(e) {
                var t = e.current,
                    r = M(t),
                    a = (0, l.useStateFromStores)([d.default], (function() {
                        return function(e, t, r) {
                            var a = S(e, t);
                            r.forEach((function(t) {
                                a = a.concat(S(e, t))
                            }));
                            return a
                        }(d.default, t, r)
                    }), [t, r]);
                return b("div", {
                    className: _.default.ptbCard,
                    id: "ptb-card"
                }, void 0, b(p.H3, {}, void 0, D.default.Messages.DOWNLOAD_PUBLIC_TEST_BUILD_TITLE), b(v.default, {
                    className: _.default.ptbSubtitle
                }, void 0, D.default.Messages.DOWNLOAD_PUBLIC_TEST_BUILD_SUBTITLE), b(m.default, {
                    color: s.ButtonColors.DARK,
                    items: a,
                    navId: "ptb-dropdown"
                }, void 0, D.default.Messages.DOWNLOAD_PUBLIC_TEST_BUILD_DOWNLOAD, b(u.default, {
                    className: _.default.dropdownArrow,
                    width: 24,
                    height: 24
                })))
            }
            I.displayName = "PTBCard";

            function P() {
                var e = (0, l.useStateFromStores)([d.default], (function() {
                        return d.default.platform
                    })),
                    t = M(e);
                return b(c.Grid, {
                    className: _.default.container
                }, void 0, b(c.Row, {}, void 0, b("div", {
                    className: _.default.cardContainer
                }, void 0, t.map((function(e, t) {
                    return b(W, {
                        className: (0, O.getClass)(_.default, "card" + t),
                        platform: e
                    }, e)
                })), b(I, {
                    current: e
                }))))
            }
            P.displayName = "OtherPlatforms"
        },
        472: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = D;
            var a, n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = p(t);
                    if (r && r.has(e)) return r.get(e);
                    var a = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                            l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o]
                        }
                    a.default = e;
                    r && r.set(e, a);
                    return a
                }(r(1)),
                o = c(r(446)),
                l = r(80),
                u = c(r(449)),
                f = c(r(447)),
                i = r(164),
                d = c(r(2571)),
                s = c(r(2572));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (p = function(e) {
                    return e ? r : t
                })(e)
            }

            function v(e, t, r, n) {
                a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    l = arguments.length - 3;
                if (t || 0 === l || (t = {
                        children: void 0
                    }), 1 === l) t.children = n;
                else if (l > 1) {
                    for (var u = new Array(l), f = 0; f < l; f++) u[f] = arguments[f + 3];
                    t.children = u
                }
                if (t && o)
                    for (var i in o) void 0 === t[i] && (t[i] = o[i]);
                else t || (t = o || {});
                return {
                    $$typeof: a,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            var O = v(d.default, {}),
                m = v(s.default, {}),
                y = v(u.default, {});

            function D() {
                return v(f.default, {}, void 0, n.createElement(o.default, (0, i.getMetadataRefresh)(i.MetaPage.Download, l.ImageMetaData.DOWNLOAD)), O, m, y)
            }
            D.displayName = "Download"
        }
    }
]);
//# sourceMappingURL=5c00383c70efc5cfd309.js.map
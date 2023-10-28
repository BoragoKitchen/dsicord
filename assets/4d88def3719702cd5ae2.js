(this.__LOADABLE_LOADED_CHUNKS__ = this.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [36], {
        2014: function(e, t, n) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                t.default = void 0;
                var r, o, a = function(e, t) {
                        if (!t && e && e.__esModule) return e;
                        if (null === e || "object" != typeof e && "function" != typeof e) return {
                            default: e
                        };
                        var n = u(t);
                        if (n && n.has(e)) return n.get(e);
                        var r = {},
                            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var a in e)
                            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                                var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                                i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                            }
                        r.default = e;
                        n && n.set(e, r);
                        return r
                    }(n(1)),
                    i = n(1756),
                    l = (r = n(2015)) && r.__esModule ? r : {
                        default: r
                    };

                function u(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap,
                        n = new WeakMap;
                    return (u = function(e) {
                        return e ? n : t
                    })(e)
                }

                function c(e, t, n, r) {
                    o || (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                    var a = e && e.defaultProps,
                        i = arguments.length - 3;
                    if (t || 0 === i || (t = {
                            children: void 0
                        }), 1 === i) t.children = r;
                    else if (i > 1) {
                        for (var l = new Array(i), u = 0; u < i; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    if (t && a)
                        for (var c in a) void 0 === t[c] && (t[c] = a[c]);
                    else t || (t = a || {});
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }

                function s(e, t) {
                    s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        e.__proto__ = t;
                        return e
                    };
                    return s(e, t)
                }
                var f = function(t) {
                    ! function(e, t) {
                        e.prototype = Object.create(t.prototype);
                        e.prototype.constructor = e;
                        s(e, t)
                    }(n, t);

                    function n() {
                        for (var n, r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        (n = t.call.apply(t, [this].concat(o)) || this).anim = null;
                        n.animationContainer = null;
                        n.isVisible = !1;
                        n.rafId = null;
                        n.loadAnimation = function() {
                            var e = n.props,
                                t = e.animationData,
                                r = e.loop,
                                o = e.renderer,
                                a = e.rendererSettings,
                                i = e.setAnimationInstance;
                            n.anim = l.default.loadAnimation({
                                animationData: t,
                                container: n.animationContainer,
                                autoplay: !1,
                                loop: r,
                                renderer: o,
                                rendererSettings: a
                            });
                            i && i(n.anim);
                            n.maybePlayAnimation()
                        };
                        n.maybePlayAnimation = function() {
                            n.isVisible && n.anim && n.props.autoplay && "complete" === e.document.readyState && (n.rafId = e.requestAnimationFrame((function() {
                                return n.anim.play()
                            })))
                        };
                        n.handleReadyStateChange = function() {
                            n.maybePlayAnimation()
                        };
                        n.handleVisibilityChange = function(t) {
                            var r = n.props,
                                o = r.autoplay,
                                a = r.onVisibilityChange;
                            a && a(t);
                            if (o && n.anim && "complete" === e.document.readyState) {
                                var i = t ? "play" : "pause";
                                n.rafId = e.requestAnimationFrame((function() {
                                    return n.anim[i]()
                                }))
                            }
                            n.isVisible = t
                        };
                        n.setRef = function(e) {
                            n.animationContainer = e;
                            var t = n.props.setContainerRef;
                            t && t(e)
                        };
                        return n
                    }
                    var r = n.prototype;
                    r.componentDidMount = function() {
                        e.document.addEventListener("readystatechange", this.handleReadyStateChange);
                        this.rafId = e.requestAnimationFrame(this.loadAnimation)
                    };
                    r.componentWillUnmount = function() {
                        e.document.removeEventListener("readystatechange", this.handleReadyStateChange);
                        e.cancelAnimationFrame(this.rafId);
                        null != this.anim && this.anim.destroy()
                    };
                    r.render = function() {
                        var e = this.props["aria-label"];
                        return c(i.VisibilitySensor, {
                            onChange: this.handleVisibilityChange
                        }, void 0, a.createElement("div", {
                            ref: this.setRef,
                            className: this.props.className,
                            "aria-label": e
                        }))
                    };
                    return n
                }(a.PureComponent);
                t.default = f;
                f.displayName = "AnimationWrapper";
                f.defaultProps = {
                    autoplay: !0,
                    loop: !0,
                    renderer: "svg",
                    rendererSettings: {
                        preserveAspectRatio: "xMinYMid meet"
                    }
                }
            }).call(this, n(8))
        },
        2015: function(e, t, n) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                t.default = void 0;
                var r = e.isServerRendering ? {
                    loadAnimation: function() {
                        return {
                            playAnimation: function() {}
                        }
                    }
                } : n(2016);
                t.default = r
            }).call(this, n(8))
        },
        2029: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = void 0;
            var r = s(n(110)),
                o = s(n(69)),
                a = s(n(455)),
                i = s(n(168)),
                l = s(n(2030)),
                u = s(n(451)),
                c = n(67);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, (o = r.key, a = void 0, "symbol" == typeof(a = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, t || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(o, "string")) ? a : String(a)), r)
                }
                var o, a
            }

            function d(e, t) {
                d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var p = c.RPC_STARTING_PORT + c.RPC_PORT_RANGE - 1;

            function y(e, t) {
                if (null == e || null == t) throw new Error("cmd and name required");
                return e + ":" + t
            }
            var _, R = a.default.parse(location.search.slice(1)),
                v = parseInt(R.rpc || c.RPC_STARTING_PORT, 10),
                m = function(e) {
                    ! function(e, t) {
                        e.prototype = Object.create(t.prototype);
                        e.prototype.constructor = e;
                        d(e, t)
                    }(t, e);

                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    var n = t.prototype;
                    n.connect = function() {
                        var e = this;
                        if (null == _)
                            if (v > p) {
                                v = c.RPC_STARTING_PORT;
                                this.emit("disconnected")
                            } else {
                                try {
                                    _ = new WebSocket("ws://127.0.0.1:" + this.port + "/?v=" + c.RPC_VERSION)
                                } catch (e) {
                                    this.disconnect({
                                        code: c.RPCCloseCodes.CLOSE_ABNORMAL
                                    });
                                    return
                                }
                                if (null != _) {
                                    _.onmessage = function(t) {
                                        var n;
                                        try {
                                            if ("string" != typeof t.data) throw new Error("payload data not a string");
                                            n = JSON.parse(t.data)
                                        } catch (t) {
                                            e.emit("error", t);
                                            e.disconnect();
                                            return
                                        }
                                        var r = n,
                                            o = r.cmd,
                                            a = r.evt,
                                            i = r.nonce,
                                            u = r.data;
                                        if (o !== c.RPCCommands.DISPATCH) {
                                            var s = null;
                                            if (a === c.RPCEvents.ERROR) {
                                                s = new l.default(u.code, u.message);
                                                u = null
                                            }
                                            e.emit(y(o, i), s, u)
                                        } else {
                                            if (a === c.RPCEvents.READY) {
                                                e.emit("connected");
                                                return
                                            }
                                            if (a === c.RPCEvents.ERROR) {
                                                e.emit("error", new l.default(u.code, u.message));
                                                e.disconnect();
                                                return
                                            }
                                            e.emit(y(o, a), u)
                                        }
                                    };
                                    _.onclose = _.onerror = function(t) {
                                        return e.disconnect(t)
                                    }
                                }
                            }
                    };
                    n.disconnect = function(e) {
                        if (null != e && null != e.code && [c.RPCCloseCodes.CLOSE_ABNORMAL, c.RPCCloseCodes.INVALID_CLIENTID].includes(e.code)) {
                            v++;
                            _ = null;
                            this.connect()
                        } else if (null != _) {
                            this.emit("disconnected");
                            _.close();
                            _ = null
                        }
                    };
                    n.subscribe = function(e, t, n) {
                        this.on(y(c.RPCCommands.DISPATCH, e), n);
                        return this.request(c.RPCCommands.SUBSCRIBE, t, e)
                    };
                    n.unsubscribe = function(e, t, n) {
                        this.removeListener(y(c.RPCCommands.DISPATCH, e), n);
                        return this.request(c.RPCCommands.UNSUBSCRIBE, t, e)
                    };
                    n.request = function(e, t, n) {
                        var r = this;
                        return new Promise((function(o, a) {
                            if (r.connected) {
                                var l = i.default.v4(),
                                    u = JSON.stringify({
                                        cmd: e,
                                        args: t,
                                        evt: n,
                                        nonce: l
                                    });
                                r.once(y(e, l), (function(e, t) {
                                    return null != e ? a(e) : o(t)
                                }));
                                _ && _.send(u)
                            } else {
                                r.once("connected", (function() {
                                    r.removeAllListeners("disconnected");
                                    o(r.request(e, t, n))
                                }));
                                r.once("disconnected", (function() {
                                    r.removeAllListeners("connected");
                                    a(new Error("disconnected during request"))
                                }));
                                r.connect()
                            }
                        }))
                    };
                    n.requestOnce = function(e, t, n) {
                        return u.default.post({
                            url: "http://127.0.0.1:" + this.port + "/rpc?v=" + c.RPC_VERSION,
                            body: {
                                cmd: e,
                                args: t,
                                evt: n,
                                nonce: i.default.v4()
                            }
                        }).then((function(e) {
                            var t = e.body,
                                n = t.evt,
                                r = t.data;
                            if (n === c.RPCEvents.ERROR) throw new l.default(r.code, r.message);
                            return r
                        }))
                    };
                    n.requestRedirect = function(e, t, n) {
                        if ("Chrome" === o.default.name && parseInt(o.default.version, 10) >= 58) return this.requestOnce(e, t, n);
                        var r = encodeURIComponent(JSON.stringify({
                                cmd: e,
                                args: t,
                                evt: n,
                                nonce: i.default.v4()
                            })),
                            a = encodeURIComponent(location.protocol + "//" + location.host + location.pathname + "?done=true");
                        window.open("http://127.0.0.1:" + this.port + "/rpc?v=" + c.RPC_VERSION + "&payload=" + r + "&callback=" + a, "_self");
                        return new Promise((function() {
                            return null
                        }))
                    };
                    ! function(e, t, n) {
                        t && f(e.prototype, t);
                        n && f(e, n);
                        Object.defineProperty(e, "prototype", {
                            writable: !1
                        })
                    }(t, [{
                        key: "port",
                        get: function() {
                            return v
                        }
                    }, {
                        key: "connected",
                        get: function() {
                            return null != _ && _.readyState === WebSocket.OPEN
                        }
                    }]);
                    return t
                }(r.default),
                O = new m;
            t.default = O
        },
        2039: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = s;
            ! function(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = l(t);
                if (n && n.has(e)) return n.get(e);
                var r = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                    }
                r.default = e;
                n && n.set(e, r)
            }(n(1));
            var r, o = i(n(19)),
                a = i(n(1693));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (l = function(e) {
                    return e ? n : t
                })(e)
            }

            function u(e, t, n, o) {
                r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var a = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = o;
                else if (i > 1) {
                    for (var l = new Array(i), u = 0; u < i; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && a)
                    for (var c in a) void 0 === t[c] && (t[c] = a[c]);
                else t || (t = a || {});
                return {
                    $$typeof: r,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            var c = 16;

            function s() {
                return u("div", {
                    className: a.default.pill
                }, void 0, o.default.Messages.NITRO_REFRESH_PRICE_YEARLY_DISCOUNT.format({
                    yearlyDiscount: c
                }))
            }
            s.displayName = "DiscountPill"
        },
        2643: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                var t = e.onCtaClick,
                    n = p.default.getLocale();
                return o.createElement(o.Fragment, null, m(c.Grid, {
                    className: y.default.container
                }, void 0, m(c.Row, {}, void 0, m("div", {
                    className: y.default.body
                }, void 0, m("img", {
                    className: y.default.title,
                    src: i.Images.REBRAND_NITRO_CLASSIC_LOGO,
                    alt: p.default.Messages.NITRO_NITRO_CLASSIC
                }), m(s.default, {
                    className: y.default.subtitle
                }, void 0, p.default.Messages.NITRO_NITRO_CLASSIC_SUBHEADING), m("div", {
                    className: y.default.ctaContainer
                }, void 0, m(u.default, {
                    className: y.default.ctaButton,
                    color: u.ButtonColors.DARK,
                    onClick: function() {
                        return t(d.WebAnalyticsObjectLocation.FOOTER, d.WebAnalyticsObjectType.YEARLY)
                    }
                }, void 0, p.default.Messages.NITRO_REFRESH_PRICE_YEARLY.format({
                    price: (0, a.formatPrice)(d.NITRO_CLASSIC_PRICE_USD_YEARLY, d.CurrencyCodes.USD, n)
                }), S), m(u.default, {
                    className: y.default.ctaButton,
                    color: u.ButtonColors.DARK,
                    onClick: function() {
                        return t(d.WebAnalyticsObjectLocation.FOOTER, d.WebAnalyticsObjectType.MONTHLY)
                    }
                }, void 0, p.default.Messages.NITRO_REFRESH_PRICE_MONTHLY.format({
                    price: (0, a.formatPrice)(d.NITRO_CLASSIC_PRICE_USD_MONTHLY, d.CurrencyCodes.USD, n)
                }))))), P))
            };
            var r, o = v(n(1)),
                a = n(2038),
                i = n(80),
                l = _(n(2014)),
                u = v(n(58)),
                c = n(107),
                s = _(n(57)),
                f = _(n(2039)),
                d = n(12),
                p = _(n(19)),
                y = _(n(1694));

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function R(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (R = function(e) {
                    return e ? n : t
                })(e)
            }

            function v(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = R(t);
                if (n && n.has(e)) return n.get(e);
                var r = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                    }
                r.default = e;
                n && n.set(e, r);
                return r
            }

            function m(e, t, n, o) {
                r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var a = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = o;
                else if (i > 1) {
                    for (var l = new Array(i), u = 0; u < i; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && a)
                    for (var c in a) void 0 === t[c] && (t[c] = a[c]);
                else t || (t = a || {});
                return {
                    $$typeof: r,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a, i, l = [],
                            u = !0,
                            c = !1;
                        try {
                            if (a = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                u = !1
                            } else
                                for (; !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
                        } catch (e) {
                            c = !0, o = e
                        } finally {
                            try {
                                if (!u && null != n.return && (i = n.return(), Object(i) !== i)) return
                            } finally {
                                if (c) throw o
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b() {
                var e = O(o.useState(null), 2),
                    t = e[0],
                    r = e[1];
                o.useEffect((function() {
                    n.e(4).then(n.t.bind(null, 1982, 7)).then((function(e) {
                        var t = e.default;
                        r(t)
                    }))
                }));
                return null == t ? null : m(l.default, {
                    animationData: t,
                    className: y.default.animation,
                    "aria-label": p.default.Messages.NITRO_REFRESH_CLASSIC_ANIMATION_LABEL
                })
            }
            b.displayName = "ClassicAnimation";
            var S = m(f.default, {}),
                P = m(b, {})
        },
        2645: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = E;
            v(n(1));
            var r, o = n(2038),
                a = n(80),
                i = v(n(448)),
                l = v(n(2646)),
                u = v(n(58)),
                c = n(107),
                s = v(n(57)),
                f = _(n(2039)),
                d = n(12),
                p = _(n(19)),
                y = _(n(1695));

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function R(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (R = function(e) {
                    return e ? n : t
                })(e)
            }

            function v(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = R(t);
                if (n && n.has(e)) return n.get(e);
                var r = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                    }
                r.default = e;
                n && n.set(e, r);
                return r
            }

            function m(e, t, n, o) {
                r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var a = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = o;
                else if (i > 1) {
                    for (var l = new Array(i), u = 0; u < i; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && a)
                    for (var c in a) void 0 === t[c] && (t[c] = a[c]);
                else t || (t = a || {});
                return {
                    $$typeof: r,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            var O = m(f.default, {});

            function E(e) {
                var t = e.onCtaClick,
                    n = p.default.getLocale();
                return m("div", {
                    className: y.default.outerContainer
                }, void 0, m(c.Grid, {
                    className: y.default.background
                }, void 0, m(i.default, {
                    colorScheme: i.HeaderColorSchemes.WHITE
                }), m(c.Row, {
                    className: y.default.container
                }, void 0, m("div", {
                    className: y.default.titleContainer
                }, void 0, m("img", {
                    className: y.default.staticWumpus,
                    src: a.Images.NITRO_WUMPUS_FLYING_MECH,
                    alt: ""
                }), m("img", {
                    className: y.default.title,
                    src: a.Images.REBRAND_NITRO_LOGO,
                    alt: p.default.Messages.NITRO_NITRO
                })), m(s.default, {
                    type: s.TextTypes.LARGE,
                    className: y.default.subtitle
                }, void 0, p.default.Messages.NITRO_REFRESH_HERO_SUBTITLE), m("div", {
                    className: y.default.ctaContainer
                }, void 0, m(u.default, {
                    className: y.default.ctaButton,
                    color: u.ButtonColors.DARK,
                    onClick: function() {
                        return t(d.WebAnalyticsObjectLocation.HERO, d.WebAnalyticsObjectType.YEARLY)
                    }
                }, void 0, p.default.Messages.NITRO_REFRESH_PRICE_YEARLY.format({
                    price: (0, o.formatPrice)(d.NITRO_PRICE_USD_YEARLY, d.CurrencyCodes.USD, n)
                }), O), m(u.default, {
                    className: y.default.ctaButton,
                    color: u.ButtonColors.DARK,
                    onClick: function() {
                        return t(d.WebAnalyticsObjectLocation.HERO, d.WebAnalyticsObjectType.MONTHLY)
                    }
                }, void 0, p.default.Messages.NITRO_REFRESH_PRICE_MONTHLY.format({
                    price: (0, o.formatPrice)(d.NITRO_PRICE_USD_MONTHLY, d.CurrencyCodes.USD, n)
                })))), m("div", {
                    className: y.default.videoWrapper
                }, void 0, m(l.default, {
                    loop: !0,
                    muted: !0,
                    autoPlay: !0,
                    className: y.default.video
                }, void 0, m(l.ResponsiveVideoSources, {
                    media: "(min-width: 1920px)"
                }, void 0, m("source", {
                    src: a.Videos.NITRO_HERO_2560_WEBM,
                    type: "video/webm"
                }), m("source", {
                    src: a.Videos.NITRO_HERO_2560_MP4,
                    type: "video/mp4"
                })), m(l.ResponsiveVideoSources, {
                    media: "(min-width: 1440px) and (max-width: 1920px)"
                }, void 0, m("source", {
                    src: a.Videos.NITRO_HERO_1920_WEBM,
                    type: "video/webm"
                }), m("source", {
                    src: a.Videos.NITRO_HERO_1920_MP4,
                    type: "video/mp4"
                })), m(l.ResponsiveVideoSources, {
                    media: "(min-width: 1024px) and (max-width: 1440px)"
                }, void 0, m("source", {
                    src: a.Videos.NITRO_HERO_1440_WEBM,
                    type: "video/webm"
                }), m("source", {
                    src: a.Videos.NITRO_HERO_1440_MP4,
                    type: "video/mp4"
                }))))))
            }
            E.displayName = "Hero"
        },
        2646: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = t.ResponsiveVideoSources = void 0;
            var r, o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e;
                    n && n.set(e, r);
                    return r
                }(n(1)),
                a = (r = n(1776)) && r.__esModule ? r : {
                    default: r
                },
                i = ["forwardedRef", "onBreakpointChange"];

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (l = function(e) {
                    return e ? n : t
                })(e)
            }

            function u() {
                u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };
                return u.apply(this, arguments)
            }

            function c(e, t) {
                c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }
            t.ResponsiveVideoSources = function(e) {
                return e.children
            };
            var s = function(e) {
                    if (null == window.matchMedia) return null;
                    var t = o.Children.toArray(e).findIndex((function(e) {
                        return window.matchMedia(e.props.media).matches
                    }));
                    return t > -1 ? t : null
                },
                f = function(e) {
                    ! function(e, t) {
                        e.prototype = Object.create(t.prototype);
                        e.prototype.constructor = e;
                        c(e, t)
                    }(t, e);

                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            activeVideoIndex: s(t.props.children)
                        };
                        t.handleResize = (0, a.default)((function() {
                            var e = s(t.props.children);
                            e !== t.state.activeVideoIndex && t.setState({
                                activeVideoIndex: e
                            })
                        }), 50);
                        return t
                    }
                    var n = t.prototype;
                    n.componentDidMount = function() {
                        window.addEventListener("resize", this.handleResize)
                    };
                    n.componentDidUpdate = function(e, t) {
                        var n = this.props.onBreakpointChange;
                        null != n && t.activeVideoIndex !== this.state.activeVideoIndex && n()
                    };
                    n.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.handleResize)
                    };
                    n.renderResponsiveVideoSources = function() {
                        var e = this.state.activeVideoIndex,
                            t = o.Children.toArray(this.props.children);
                        return null == e || null == t[e] ? null : t[e]
                    };
                    n.render = function() {
                        var e = this.state.activeVideoIndex,
                            t = this.props,
                            n = t.forwardedRef,
                            r = (t.onBreakpointChange, function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) {
                                    n = a[r];
                                    t.indexOf(n) >= 0 || (o[n] = e[n])
                                }
                                return o
                            }(t, i));
                        return o.createElement("video", u({
                            key: e,
                            ref: n
                        }, r), this.renderResponsiveVideoSources())
                    };
                    return t
                }(o.Component);
            f.displayName = "ResponsiveVideo";
            var d = o.forwardRef((function(e, t) {
                return o.createElement(f, u({}, e, {
                    forwardedRef: t
                }))
            }));
            t.default = d
        },
        2647: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = S;
            v(n(1));
            var r, o = _(n(17)),
                a = n(2038),
                i = n(80),
                l = v(n(58)),
                u = n(107),
                c = n(445),
                s = v(n(57)),
                f = _(n(2039)),
                d = n(12),
                p = _(n(19)),
                y = _(n(1696));

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function R(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (R = function(e) {
                    return e ? n : t
                })(e)
            }

            function v(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = R(t);
                if (n && n.has(e)) return n.get(e);
                var r = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                    }
                r.default = e;
                n && n.set(e, r);
                return r
            }

            function m(e, t, n, o) {
                r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var a = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = o;
                else if (i > 1) {
                    for (var l = new Array(i), u = 0; u < i; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && a)
                    for (var c in a) void 0 === t[c] && (t[c] = a[c]);
                else t || (t = a || {});
                return {
                    $$typeof: r,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function O(e) {
                var t = e.className,
                    n = e.title,
                    r = e.subtitle,
                    a = e.imgSrc;
                return m("div", {
                    className: (0, o.default)(y.default.perkTile, t)
                }, void 0, m("div", {}, void 0, m(s.default, {
                    type: s.TextTypes.LARGE,
                    className: y.default.perkTitle
                }, void 0, n), m(s.default, {
                    type: s.TextTypes.SMALL,
                    className: y.default.perkSubtitle
                }, void 0, r)), m("img", {
                    className: y.default.perkImage,
                    src: a,
                    alt: ""
                }))
            }
            O.displayName = "PerkTile";
            var E = m(f.default, {});

            function b(e) {
                var t = e.onCtaClick,
                    n = p.default.getLocale();
                return m(u.Row, {
                    className: y.default.ctaContainer
                }, void 0, m(c.H3, {
                    className: y.default.ctaTitle,
                    "aria-label": p.default.Messages.NITRO_READY_TO_PLAY_HEADING_LABEL
                }, void 0, p.default.Messages.NITRO_READY_TO_PLAY_HEADING), m(l.default, {
                    className: y.default.ctaButton,
                    color: l.ButtonColors.DARK,
                    onClick: function() {
                        return t(d.WebAnalyticsObjectLocation.BODY, d.WebAnalyticsObjectType.YEARLY)
                    }
                }, void 0, p.default.Messages.NITRO_REFRESH_PRICE_YEARLY.format({
                    price: (0, a.formatPrice)(d.NITRO_PRICE_USD_YEARLY, d.CurrencyCodes.USD, n)
                }), E), m(l.default, {
                    className: y.default.ctaButton,
                    color: l.ButtonColors.DARK,
                    onClick: function() {
                        return t(d.WebAnalyticsObjectLocation.BODY, d.WebAnalyticsObjectType.MONTHLY)
                    }
                }, void 0, p.default.Messages.NITRO_REFRESH_PRICE_MONTHLY.format({
                    price: (0, a.formatPrice)(d.NITRO_PRICE_USD_MONTHLY, d.CurrencyCodes.USD, n)
                })))
            }
            b.displayName = "Cta";

            function S(e) {
                var t = e.onCtaClick;
                return m(u.Grid, {}, void 0, m(u.Row, {
                    className: y.default.container
                }, void 0, m(c.H2, {
                    headline: !0,
                    className: y.default.title
                }, void 0, p.default.Messages.NITRO_REFRESH_PERKS_TITLE), m(s.default, {
                    type: s.TextTypes.LARGE,
                    className: y.default.subtitle
                }, void 0, p.default.Messages.NITRO_REFRESH_PERKS_SUBTITLE)), m(u.Row, {
                    className: y.default.perksContainer
                }, void 0, m(O, {
                    className: y.default.perkActivies,
                    title: p.default.Messages.NITRO_REFRESH_PERKS_ACTIVITIES,
                    subtitle: p.default.Messages.NITRO_REFRESH_PERKS_ACTIVITIES_SUBTITLE,
                    imgSrc: i.Images.REFRESH_NITRO_ACTIVITIES
                }), m(O, {
                    className: y.default.perkBetterEmoji,
                    title: p.default.Messages.NITRO_REFRESH_PERKS_BETTER_EMOJI_TITLE,
                    subtitle: p.default.Messages.NITRO_REFRESH_PERKS_BETTER_EMOJI_SUBTITLE,
                    imgSrc: i.Images.REFRESH_NITRO_BETTER_EMOJIS
                }), m(O, {
                    className: y.default.perkPersonalProfile,
                    title: p.default.Messages.NITRO_REFRESH_PERKS_PERSONAL_PROFILE_TITLE,
                    subtitle: p.default.Messages.NITRO_REFRESH_PERKS_PERSONAL_PROFILE_SUBTITLE,
                    imgSrc: i.Images.REFRESH_NITRO_PERSONAL_PROFILE
                }), m(O, {
                    className: y.default.perkSupportServer,
                    title: p.default.Messages.NITRO_REFRESH_PERKS_SUPPORT_SERVER_TITLE,
                    subtitle: p.default.Messages.NITRO_REFRESH_PERKS_SUPPORT_SERVER_SUBTITLE,
                    imgSrc: i.Images.REFRESH_NITRO_SUPPORT_SERVER
                }), m(O, {
                    className: y.default.perkRepSupport,
                    title: p.default.Messages.NITRO_REFRESH_PERKS_REP_SUPPORT_TITLE,
                    subtitle: p.default.Messages.NITRO_REFRESH_PERKS_REP_SUPPORT_SUBTITLE,
                    imgSrc: i.Images.REFRESH_NITRO_REP_SUPPORT
                }), m(O, {
                    className: y.default.perkBiggerMemes,
                    title: p.default.Messages.NITRO_REFRESH_PERKS_BIGGER_MEMES_TITLE,
                    subtitle: p.default.Messages.NITRO_REFRESH_PERKS_BIGGER_MEMES_SUBTITLE,
                    imgSrc: i.Images.REFRESH_NITRO_BIGGER_MEMES
                }), m(O, {
                    className: y.default.perkHDVideo,
                    title: p.default.Messages.NITRO_REFRESH_PERKS_HD_VIDEO_TITLE,
                    subtitle: p.default.Messages.NITRO_REFRESH_PERKS_HD_VIDEO_SUBTITLE,
                    imgSrc: i.Images.REFRESH_NITRO_HD_VIDEO
                })), m(b, {
                    onCtaClick: t
                }))
            }
            S.displayName = "Perks"
        },
        2648: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function() {
                var e = f(r.useState(null), 2),
                    t = e[0],
                    n = e[1],
                    c = f(r.useState(!1), 2),
                    s = c[0],
                    d = c[1],
                    v = (0, o.useLocation)();
                r.useEffect((function() {
                    Promise.race([new Promise((function(e) {
                        a.default.once("connected", (function() {
                            n(a.default);
                            d(!0);
                            e()
                        }));
                        a.default.once("disconnected", (function() {
                            n(null)
                        }));
                        a.default.connect()
                    })), new Promise((function(e) {
                        setTimeout(e, 3e3)
                    }))])
                }), []);
                return r.useCallback((function(e, n) {
                    (null != t ? Promise.resolve(t) : Promise.reject(t)).then((function(e) {
                        return e.request(p, {
                            type: y,
                            params: {
                                section: _,
                                fingerprint: i.default.fingerprint
                            }
                        })
                    }), R).then((function(t) {
                        l.default.track(u.WebAnalyticsEvents.MKTG_PAGE_CTA_CLICKED, {
                            rpc_connected: s,
                            location_page: v.pathname.substring(1),
                            location_section: e,
                            location_object: u.WebAnalyticsObject.BUTTON_CTA,
                            location_object_type: n
                        });
                        l.default.trackEventExternally("Click-" + n + "-" + e);
                        "function" == typeof t && t()
                    }))
                }), [v, t, s])
            };
            var r = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e;
                    n && n.set(e, r);
                    return r
                }(n(1)),
                o = n(68),
                a = c(n(2029)),
                i = c(n(45)),
                l = c(n(30)),
                u = n(12);

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (s = function(e) {
                    return e ? n : t
                })(e)
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a, i, l = [],
                            u = !0,
                            c = !1;
                        try {
                            if (a = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                u = !1
                            } else
                                for (; !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
                        } catch (e) {
                            c = !0, o = e
                        } finally {
                            try {
                                if (!u && null != n.return && (i = n.return(), Object(i) !== i)) return
                            } finally {
                                if (c) throw o
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var p = "DEEP_LINK",
                y = "USER_SETTINGS",
                _ = "PREMIUM",
                R = function() {
                    window.location = u.AppRoutes.SETTINGS(_.toLowerCase())
                }
        },
        477: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = v;
            var r, o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e;
                    n && n.set(e, r);
                    return r
                }(n(1)),
                a = p(n(446)),
                i = p(n(449)),
                l = p(n(447)),
                u = n(164),
                c = p(n(2643)),
                s = p(n(2645)),
                f = p(n(2647)),
                d = p(n(2648));

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function y(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (y = function(e) {
                    return e ? n : t
                })(e)
            }

            function _(e, t, n, o) {
                r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var a = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = o;
                else if (i > 1) {
                    for (var l = new Array(i), u = 0; u < i; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && a)
                    for (var c in a) void 0 === t[c] && (t[c] = a[c]);
                else t || (t = a || {});
                return {
                    $$typeof: r,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            var R = _(i.default, {});

            function v() {
                var e = (0, d.default)();
                return _(l.default, {}, void 0, o.createElement(a.default, (0, u.getMetadataRefresh)(u.MetaPage.Nitro)), _(s.default, {
                    onCtaClick: e
                }), _(f.default, {
                    onCtaClick: e
                }), _(c.default, {
                    onCtaClick: e
                }), R)
            }
            v.displayName = "Nitro"
        }
    }
]);
//# sourceMappingURL=4d88def3719702cd5ae2.js.map
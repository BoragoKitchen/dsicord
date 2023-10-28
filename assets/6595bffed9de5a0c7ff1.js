(this.__LOADABLE_LOADED_CHUNKS__ = this.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [33], {
        1721: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.getClass = void 0;
            var n = r(1758).getClass;
            t.getClass = n
        },
        1724: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = t.SpinnerTypes = void 0;
            var n, a, i = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = f(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    n.default = e;
                    r && r.set(e, n);
                    return n
                }(r(1)),
                o = s(r(17)),
                l = r(1721),
                u = s(r(1589)),
                c = ["type", "className", "itemClassName"];

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (f = function(e) {
                    return e ? r : t
                })(e)
            }

            function d() {
                d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                };
                return d.apply(this, arguments)
            }

            function p(e, t, r, a) {
                n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = e && e.defaultProps,
                    o = arguments.length - 3;
                if (t || 0 === o || (t = {
                        children: void 0
                    }), 1 === o) t.children = a;
                else if (o > 1) {
                    for (var l = new Array(o), u = 0; u < o; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && i)
                    for (var c in i) void 0 === t[c] && (t[c] = i[c]);
                else t || (t = i || {});
                return {
                    $$typeof: n,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            t.SpinnerTypes = a;
            ! function(e) {
                e.WANDERING_CUBES = "wanderingCubes";
                e.CHASING_DOTS = "chasingDots";
                e.PULSING_ELLIPSIS = "pulsingEllipsis";
                e.SPINNING_CIRCLE = "spinningCircle"
            }(a || (t.SpinnerTypes = a = {}));
            var y = function(e) {
                var t = e.type,
                    r = void 0 === t ? a.WANDERING_CUBES : t,
                    n = e.className,
                    s = e.itemClassName,
                    f = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) {
                            r = i[n];
                            t.indexOf(r) >= 0 || (a[r] = e[r])
                        }
                        return a
                    }(e, c);
                if (r === a.SPINNING_CIRCLE) return i.createElement("div", d({
                    className: (0, o.default)(u.default.spinner, u.default[r], n)
                }, f), p("div", {
                    className: u.default.spinningCircleInner
                }, void 0, p("svg", {
                    className: u.default.circular,
                    viewBox: "25 25 50 50"
                }, void 0, p("circle", {
                    className: (0, o.default)(u.default.path, u.default.path3),
                    cx: "50",
                    cy: "50",
                    r: "20"
                }), p("circle", {
                    className: (0, o.default)(u.default.path, u.default.path2),
                    cx: "50",
                    cy: "50",
                    r: "20"
                }), p("circle", {
                    className: u.default.path,
                    cx: "50",
                    cy: "50",
                    r: "20"
                }))));
                var y = (0, o.default)((0, l.getClass)(u.default, r, "item"), s);
                return i.createElement("span", d({
                    className: (0, o.default)(u.default.spinner, n)
                }, f), p("span", {
                    className: (0, o.default)(u.default.inner, u.default[r])
                }, void 0, p("span", {
                    className: y
                }), p("span", {
                    className: y
                }), r === a.PULSING_ELLIPSIS ? p("span", {
                    className: y
                }) : null))
            };
            y.displayName = "Spinner";
            y.Type = a;
            var v = y;
            t.default = v
        },
        2031: function(e, t, r) {
            e.exports = r.p + "a188414ce83f2454b9d71a47c3d95909.svg"
        },
        2556: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.FeatureTileLayout = void 0;
            t.default = _;
            var n, a, i, o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = p(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    n.default = e;
                    r && r.set(e, n);
                    return n
                }(r(1)),
                l = d(r(17)),
                u = r(107),
                c = r(445),
                s = d(r(57)),
                f = d(r(1667));

            function d(e) {
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

            function y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, i, o, l = [],
                            u = !0,
                            c = !1;
                        try {
                            if (i = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                u = !1
                            } else
                                for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0);
                        } catch (e) {
                            c = !0, a = e
                        } finally {
                            try {
                                if (!u && null != r.return && (o = r.return(), Object(o) !== o)) return
                            } finally {
                                if (c) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function h(e, t, r, n) {
                a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = e && e.defaultProps,
                    o = arguments.length - 3;
                if (t || 0 === o || (t = {
                        children: void 0
                    }), 1 === o) t.children = n;
                else if (o > 1) {
                    for (var l = new Array(o), u = 0; u < o; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && i)
                    for (var c in i) void 0 === t[c] && (t[c] = i[c]);
                else t || (t = i || {});
                return {
                    $$typeof: a,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function m(e) {
                var t = e.title,
                    r = e.subtitle,
                    n = e.headline;
                return o.createElement(o.Fragment, null, h(c.H2, {
                    headline: n
                }, void 0, t), h(s.default, {
                    className: f.default.subtitle
                }, void 0, r))
            }
            t.FeatureTileLayout = i;
            ! function(e) {
                e.IMAGE_LEFT = "image_left";
                e.IMAGE_RIGHT = "image_right";
                e.IMAGE_BOTTOM = "image_bottom"
            }(i || (t.FeatureTileLayout = i = {}));
            var b = ((n = {})[i.IMAGE_LEFT] = f.default.imageLeft, n[i.IMAGE_RIGHT] = f.default.imageRight, n[i.IMAGE_BOTTOM] = f.default.imageBottom, n);

            function _(e) {
                var t, r = e.className,
                    n = e.innerClassName,
                    a = e.imgSrc,
                    c = e.imgAlt,
                    s = e.imgClassName,
                    d = e.title,
                    p = e.subtitle,
                    v = e.layout,
                    _ = e.headline,
                    g = o.useRef(null),
                    O = y(o.useState(!1), 2),
                    N = O[0],
                    E = O[1];
                o.useEffect((function() {
                    if (!N) {
                        e();
                        window.addEventListener("scroll", e);
                        window.addEventListener("resize", e);
                        return function() {
                            window.removeEventListener("scroll", e);
                            window.removeEventListener("resize", e)
                        }
                    }

                    function e() {
                        var e = g.current.getBoundingClientRect().top <= .8 * window.innerHeight;
                        E(e)
                    }
                }), [N]);
                return o.createElement(u.Grid, {
                    ref: g,
                    className: r
                }, h(u.Row, {
                    className: (0, l.default)(f.default.container, b[v], n, (t = {}, t[f.default.visible] = N, t))
                }, void 0, v !== i.IMAGE_BOTTOM ? h("img", {
                    className: (0, l.default)(f.default.image, s),
                    alt: c,
                    src: a
                }) : null, h("div", {
                    className: f.default.description
                }, void 0, h(m, {
                    title: d,
                    subtitle: p,
                    headline: _
                })), v === i.IMAGE_BOTTOM ? h("img", {
                    className: (0, l.default)(f.default.image, s),
                    alt: c,
                    src: a
                }) : null))
            }
            _.displayName = "FeatureTile"
        },
        2557: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = p;
            ! function(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = f(t);
                if (r && r.has(e)) return r.get(e);
                var n = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                    }
                n.default = e;
                r && r.set(e, n)
            }(r(1));
            var n, a = s(r(17)),
                i = s(r(166)),
                o = r(107),
                l = r(445),
                u = s(r(19)),
                c = s(r(1668));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (f = function(e) {
                    return e ? r : t
                })(e)
            }

            function d(e, t, r, a) {
                n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = e && e.defaultProps,
                    o = arguments.length - 3;
                if (t || 0 === o || (t = {
                        children: void 0
                    }), 1 === o) t.children = a;
                else if (o > 1) {
                    for (var l = new Array(o), u = 0; u < o; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && i)
                    for (var c in i) void 0 === t[c] && (t[c] = i[c]);
                else t || (t = i || {});
                return {
                    $$typeof: n,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function p(e) {
                var t = e.analyticsLocation,
                    n = e.className;
                return d(o.Row, {
                    className: (0, a.default)(c.default.container, n)
                }, void 0, d("div", {
                    "aria-hidden": !0,
                    className: c.default.sparklesContainer
                }, void 0, d("img", {
                    className: c.default.sparkles,
                    src: r(2031),
                    alt: ""
                })), d(l.H4, {
                    className: c.default.title
                }, void 0, u.default.Messages.LANDING_CTA_TITLE), d(i.default, {
                    className: c.default.downloadButton,
                    analyticsLocation: t
                }))
            }
            p.displayName = "BottomCTA"
        },
        2558: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = O;
            var n, a = h(r(1)),
                i = y(r(17)),
                o = r(1756),
                l = h(r(448)),
                u = r(107),
                c = r(445),
                s = y(r(57)),
                f = y(r(2559)),
                d = y(r(19)),
                p = y(r(1672));

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function v(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (v = function(e) {
                    return e ? r : t
                })(e)
            }

            function h(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = v(t);
                if (r && r.has(e)) return r.get(e);
                var n = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                    }
                n.default = e;
                r && r.set(e, n);
                return n
            }

            function m(e, t, r, a) {
                n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = e && e.defaultProps,
                    o = arguments.length - 3;
                if (t || 0 === o || (t = {
                        children: void 0
                    }), 1 === o) t.children = a;
                else if (o > 1) {
                    for (var l = new Array(o), u = 0; u < o; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && i)
                    for (var c in i) void 0 === t[c] && (t[c] = i[c]);
                else t || (t = i || {});
                return {
                    $$typeof: n,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, i, o, l = [],
                            u = !0,
                            c = !1;
                        try {
                            if (i = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                u = !1
                            } else
                                for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0);
                        } catch (e) {
                            c = !0, a = e
                        } finally {
                            try {
                                if (!u && null != r.return && (o = r.return(), Object(o) !== o)) return
                            } finally {
                                if (c) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var g = m(f.default, {});

            function O() {
                var e, t = b(a.useState(!0), 2),
                    n = t[0],
                    f = t[1];
                return m(o.VisibilitySensor, {
                    onChange: f
                }, void 0, m(u.Grid, {
                    className: p.default.heroBackground
                }, void 0, m(l.default, {
                    colorScheme: l.HeaderColorSchemes.WHITE
                }), m(u.Row, {
                    className: p.default.heroContainer
                }, void 0, m("div", {
                    className: p.default.heroBody
                }, void 0, m("div", {
                    className: p.default.heroText
                }, void 0, m(c.H1, {}, void 0, d.default.Messages.LANDING_REBRAND_HERO_TITLE), m(s.default, {
                    className: p.default.heroSubtitle
                }, void 0, d.default.Messages.LANDING_REBRAND_HERO_SUBTITLE)), g)), m("div", {
                    "aria-hidden": !0,
                    className: (0, i.default)(p.default.heroImageContainer, (e = {}, e[p.default.animationPaused] = !n, e))
                }, void 0, m("img", {
                    src: r(2567),
                    className: (0, i.default)(p.default.backgroundImages, p.default.clouds),
                    alt: ""
                }), m("img", {
                    src: r(2568),
                    className: p.default.foregroundLeft,
                    alt: ""
                }), m("img", {
                    src: r(2569),
                    className: p.default.foregroundRight,
                    alt: ""
                }))))
            }
            O.displayName = "Hero"
        },
        2559: function(e, t, r) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                t.default = U;
                var n, a = R(r(1)),
                    i = E(r(17)),
                    o = E(r(111)),
                    l = r(20),
                    u = E(r(70)),
                    c = E(r(46)),
                    s = E(r(2560)),
                    f = E(r(166)),
                    d = E(r(176)),
                    p = r(2564),
                    y = E(r(453)),
                    v = E(r(1724)),
                    h = R(r(58)),
                    m = E(r(2565)),
                    b = R(r(57)),
                    _ = E(r(30)),
                    g = r(12),
                    O = E(r(19)),
                    N = E(r(1671));

                function E(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function A(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap,
                        r = new WeakMap;
                    return (A = function(e) {
                        return e ? r : t
                    })(e)
                }

                function R(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = A(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    n.default = e;
                    r && r.set(e, n);
                    return n
                }

                function w() {
                    w = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    };
                    return w.apply(this, arguments)
                }

                function I(e, t, r, n, a, i, o) {
                    try {
                        var l = e[i](o),
                            u = l.value
                    } catch (e) {
                        r(e);
                        return
                    }
                    l.done ? t(u) : Promise.resolve(u).then(n, a)
                }

                function T(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != r) {
                            var n, a, i, o, l = [],
                                u = !0,
                                c = !1;
                            try {
                                if (i = (r = r.call(e)).next, 0 === t) {
                                    if (Object(r) !== r) return;
                                    u = !1
                                } else
                                    for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0);
                            } catch (e) {
                                c = !0, a = e
                            } finally {
                                try {
                                    if (!u && null != r.return && (o = r.return(), Object(o) !== o)) return
                                } finally {
                                    if (c) throw a
                                }
                            }
                            return l
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return M(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return M(e, t)
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function M(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n
                }

                function S(e, t, r, a) {
                    n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                    var i = e && e.defaultProps,
                        o = arguments.length - 3;
                    if (t || 0 === o || (t = {
                            children: void 0
                        }), 1 === o) t.children = a;
                    else if (o > 1) {
                        for (var l = new Array(o), u = 0; u < o; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    if (t && i)
                        for (var c in i) void 0 === t[c] && (t[c] = i[c]);
                    else t || (t = i || {});
                    return {
                        $$typeof: n,
                        type: e,
                        key: void 0 === r ? null : "" + r,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }

                function j() {
                    return "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + g.Endpoints.APP
                }

                function k() {
                    window.location.href = "" + g.AppRoutes.WELCOME
                }

                function L(e) {
                    var t, r = e.onOpenInBrowser,
                        n = (0, d.default)();
                    return a.createElement(a.Fragment, null, S(f.default, {
                        className: (0,
                            i.default)(N.default.marginTop24, (t = {}, t[N.default.marginRight24] = n, t)),
                        color: h.ButtonColors.WHITE,
                        analyticsLocation: "Landing Hero"
                    }), n ? S(h.default, {
                        className: (0, i.default)("gtm-click-class-open-button", N.default.marginTop24),
                        color: h.ButtonColors.DARK,
                        onClick: r,
                        "data-testid": "button-open-discord-in-browser"
                    }, void 0, O.default.Messages.LANDING_OPEN_DISCORD_IN_BROWSER) : null)
                }

                function P(e) {
                    var t = e.hasAcceptedTerms,
                        r = e.setHasAcceptedTerms,
                        n = (0, l.useStateFromStores)([y.default], (function() {
                            return y.default.isConsentRequired
                        }));
                    a.useEffect((function() {
                        n || r(!0)
                    }), [n, t, r]);
                    return n ? S("div", {
                        className: N.default.termsContainer
                    }, void 0, S(m.default, {
                        className: N.default.termsCheckbox,
                        id: "terms-checkbox",
                        checked: t,
                        onChange: function(e) {
                            return r(e.target.checked)
                        }
                    }), S("label", {
                        htmlFor: "terms-checkbox"
                    }, void 0, S(b.default, {
                        type: b.TextTypes.EXTRA_SMALL,
                        className: N.default.termsText
                    }, void 0, O.default.Messages.LANDING_TERMS_PRIVACY_OPT_IN.format({
                        termsURL: g.WebRoutes.TERMS,
                        privacyURL: g.WebRoutes.PRIVACY
                    })))) : S("div", {
                        className: N.default.termsContainer
                    }, void 0, S(b.default, {
                        type: b.TextTypes.EXTRA_SMALL,
                        className: N.default.termsText
                    }, void 0, O.default.Messages.LANDING_TERMS_PRIVACY.format({
                        termsURL: g.WebRoutes.TERMS,
                        privacyURL: g.WebRoutes.PRIVACY
                    })))
                }
                P.displayName = "Terms";
                var C = S("path", {
                    d: "M7.99986 9L0.803711 0H15.196L7.99986 9Z",
                    fill: "#FFFFFF"
                });

                function D(e) {
                    var t, r = e.errors;
                    if ("username" in r) {
                        var n, a;
                        t = null !== (n = null === (a = r.username._errors[0]) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "Unknown Error"
                    } else t = "captcha_key" in r ? null : "message" in r ? r.message : Object.keys(r).map((function(e) {
                        var t;
                        return null === (t = r[e]._errors[0]) || void 0 === t ? void 0 : t.message
                    })).filter((function(e) {
                        return null != e
                    })).join(", ");
                    return null != t && "" !== t ? S("div", {
                        className: N.default.errorTooltip
                    }, void 0, S("div", {
                        className: N.default.error
                    }, void 0, S(b.default, {
                        type: b.TextTypes.EXTRA_SMALL
                    }, void 0, t)), S("svg", {
                        width: "16",
                        height: "9",
                        viewBox: "0 0 16 9",
                        className: N.default.errorArrow
                    }, void 0, C)) : null
                }

                function x() {
                    var t = T(a.useState(""), 2),
                        n = t[0],
                        l = t[1],
                        f = T(a.useState(!1), 2),
                        d = f[0],
                        y = f[1],
                        m = T(a.useState(!1), 2),
                        b = m[0],
                        E = m[1],
                        A = T(a.useState({}), 2),
                        R = A[0],
                        M = A[1],
                        j = (0, p.useUniqueUsernameRegistrationExperiment)(),
                        L = a.useCallback(function() {
                            var t, r = (t = regeneratorRuntime.mark((function t(r) {
                                var a, i, l, s, f;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (null != n && "" !== n) {
                                                t.next = 3;
                                                break
                                            }
                                            M({
                                                message: j ? O.default.Messages.LANDING_DISPLAY_NAME_FIELD_REQUIRED : O.default.Messages.LANDING_USERNAME_FIELD_REQUIRED
                                            });
                                            return t.abrupt("return");
                                        case 3:
                                            if (d) {
                                                t.next = 6;
                                                break
                                            }
                                            M({
                                                message: O.default.Messages.LANDING_TERMS_PRIVACY_OPT_IN_TOOLTIP
                                            });
                                            return t.abrupt("return");
                                        case 6:
                                            if (!b) {
                                                t.next = 8;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 8:
                                            E(!0);
                                            t.prev = 9;
                                            t.next = 12;
                                            return u.default.post({
                                                url: g.Endpoints.REGISTER,
                                                body: w({
                                                    consent: d,
                                                    fingerprint: c.default.get("fingerprint"),
                                                    captcha_key: r
                                                }, !j && {
                                                    username: n
                                                }, {}, j && {
                                                    global_name: n,
                                                    unique_username_registration: !0
                                                })
                                            });
                                        case 12:
                                            if ((a = t.sent).ok) {
                                                o.default.setToken(a.body.token);
                                                _.default.trackEventExternally("CompleteRegistration");
                                                e.nextTick(k)
                                            } else {
                                                E(!1);
                                                M(null !== (i = a.body.errors) && void 0 !== i ? i : a.body)
                                            }
                                            t.next = 20;
                                            break;
                                        case 16:
                                            t.prev = 16;
                                            t.t0 = t.catch(9);
                                            E(!1);
                                            M(null !== (l = null !== (s = null === (f = t.t0.body) || void 0 === f ? void 0 : f.errors) && void 0 !== s ? s : t.t0.body) && void 0 !== l ? l : {
                                                message: t.t0.message
                                            });
                                        case 20:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [9, 16]
                                ])
                            })), function() {
                                var e = this,
                                    r = arguments;
                                return new Promise((function(n, a) {
                                    var i = t.apply(e, r);

                                    function o(e) {
                                        I(i, n, a, o, l, "next", e)
                                    }

                                    function l(e) {
                                        I(i, n, a, o, l, "throw", e)
                                    }
                                    o(void 0)
                                }))
                            });
                            return function(e) {
                                return r.apply(this, arguments)
                            }
                        }(), [n, b, d, j]),
                        C = a.useCallback((function(e) {
                            e.preventDefault();
                            L()
                        }), [L]);
                    return "captcha_key" in R ? S("div", {
                        className: N.default.formContainer
                    }, void 0, S(s.default, {
                        sitekey: null != R.captcha_sitekey && "" !== R.captcha_sitekey ? R.captcha_sitekey : void 0,
                        captchaService: null != R.captcha_service && "" !== R.captcha_service ? R.captcha_service : void 0,
                        onVerify: function(e) {
                            L(e)
                        }
                    })) : S("div", {
                        className: N.default.formContainer
                    }, void 0, S("form", {
                        className: N.default.form,
                        onSubmit: C
                    }, void 0, S(D, {
                        errors: R
                    }), S("input", {
                        type: "text",
                        className: N.default.username,
                        placeholder: j ? O.default.Messages.COMMON_ENTER_DISPLAY_NAME : O.default.Messages.COMMON_ENTER_USERNAME,
                        onChange: function(e) {
                            return l(e.target.value)
                        },
                        value: n,
                        autoFocus: !0
                    }), S(h.default, {
                        className: (0, i.default)("gtm-click-class-register-button", N.default.tryButton),
                        disabled: b,
                        onClick: C,
                        title: O.default.Messages.COMMON_SUBMIT
                    }, void 0, b ? S(v.default, {
                        itemClassName: N.default.spinnerItem,
                        className: N.default.spinner
                    }) : S("img", {
                        className: N.default.arrow,
                        src: r(2566),
                        alt: ""
                    }))), S(P, {
                        hasAcceptedTerms: d,
                        setHasAcceptedTerms: y
                    }))
                }
                x.displayName = "TryDiscord";

                function G(e) {
                    var t = e.setShowUnclaimedInput,
                        r = T(a.useState(null), 2),
                        n = r[0],
                        i = r[1];
                    a.useEffect((function() {
                        i(o.default.getToken())
                    }), []);
                    var l = a.useCallback((function() {
                        _.default.track(g.WebAnalyticsEvents.CLICK_LANDING_CTA, w({
                            buttonstate: null != n ? "has session" : "no session"
                        }, _.default.getStaticExperimentAttributes()));
                        if (null != n) {
                            _.default.trackOutboundLink(j());
                            window.location.href = j()
                        } else {
                            t(!0);
                            _.default.trackEventExternally("BeginRegistration")
                        }
                    }), [t, n]);
                    return S("div", {
                        className: N.default.ctaContainer
                    }, void 0, S(L, {
                        onOpenInBrowser: l
                    }))
                }
                G.displayName = "DownloadOrTry";
                var B = S(x, {});

                function U() {
                    var e = T(a.useState(!1), 2),
                        t = e[0],
                        r = e[1];
                    return t ? B : S(G, {
                        setShowUnclaimedInput: r
                    })
                }
                U.displayName = "CTA"
            }).call(this, r(83))
        },
        2560: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = void 0;
            var n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = s(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    n.default = e;
                    r && r.set(e, n);
                    return n
                }(r(1)),
                a = c(r(2561)),
                i = r(459),
                o = c(r(2562)),
                l = r(12),
                u = ["captchaService", "sitekey", "className"];

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (s = function(e) {
                    return e ? r : t
                })(e)
            }

            function f() {
                f = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                };
                return f.apply(this, arguments)
            }
            var d = function(e) {
                var t = e.captchaService,
                    r = void 0 === t ? i.CaptchaTypes.RECAPTCHA : t,
                    c = e.sitekey,
                    s = e.className,
                    d = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) {
                            r = i[n];
                            t.indexOf(r) >= 0 || (a[r] = e[r])
                        }
                        return a
                    }(e, u);
                return null != c && "" !== c && r === i.CaptchaTypes.RECAPTCHA ? n.createElement(o.default, f({
                    sitekey: c,
                    className: s
                }, d)) : null != c && "" !== c && r === i.CaptchaTypes.HCAPTCHA ? n.createElement(a.default, f({
                    sitekey: c
                }, d)) : n.createElement(o.default, f({
                    sitekey: l.RECAPTCHA_SITE_KEY,
                    className: s
                }, d))
            };
            d.displayName = "Captcha";
            var p = d;
            t.default = p
        },
        2561: function(e, t, r) {
            "use strict";
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                a = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1;
                            n.configurable = !0;
                            "value" in n && (n.writable = !0);
                            Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        r && e(t.prototype, r);
                        n && e(t, n);
                        return t
                    }
                }();
            var i = r(1),
                o = function() {
                    for (var e = "", t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21; t--;) e += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
                    return e
                },
                l = [],
                u = !1,
                c = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e);

                    function t(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var r = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
                            n = e.id,
                            a = void 0 === n ? null : n;
                        r.renderCaptcha = r.renderCaptcha.bind(r);
                        r.resetCaptcha = r.resetCaptcha.bind(r);
                        r.removeCaptcha = r.removeCaptcha.bind(r);
                        r.handleOnLoad = r.handleOnLoad.bind(r);
                        r.handleSubmit = r.handleSubmit.bind(r);
                        r.handleExpire = r.handleExpire.bind(r);
                        r.handleError = r.handleError.bind(r);
                        var i = "undefined" != typeof hcaptcha;
                        i || (u = !1);
                        r.state = {
                            isApiReady: i,
                            isRemoved: !1,
                            elementId: a || "hcaptcha-" + o(),
                            captchaId: ""
                        };
                        return r
                    }
                    a(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.languageOverride,
                                r = e.reCaptchaCompat,
                                n = this.state,
                                a = n.isApiReady;
                            n.elementId;
                            if (a) this.renderCaptcha();
                            else {
                                if (!u) {
                                    u = !0;
                                    ! function(e, t) {
                                        window.hcaptchaOnLoad = function() {
                                            l = l.filter((function(e) {
                                                e();
                                                return !1
                                            }))
                                        };
                                        var r = document.createElement("script");
                                        r.src = "https://hcaptcha.com/1/api.js?render=explicit&onload=hcaptchaOnLoad";
                                        r.async = !0;
                                        e && (r.src += "&hl=" + e);
                                        !1 === t && (r.src += "&recaptchacompat=off");
                                        document.head.appendChild(r)
                                    }(t, r)
                                }
                                l.push(this.handleOnLoad)
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.state,
                                t = e.isApiReady,
                                r = e.isRemoved,
                                n = e.captchaId;
                            if (t && !r) {
                                hcaptcha.reset(n);
                                hcaptcha.remove(n)
                            }
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(e, t) {
                            return this.state.isApiReady === t.isApiReady && this.state.isRemoved === t.isRemoved
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this;
                            this.props.endpoint;
                            if (!["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"].every((function(r) {
                                    return e[r] === t.props[r]
                                }))) {
                                this.removeCaptcha();
                                this.renderCaptcha()
                            }
                        }
                    }, {
                        key: "renderCaptcha",
                        value: function() {
                            var e = this.state,
                                t = e.isApiReady,
                                r = e.elementId;
                            if (t) {
                                var a = hcaptcha.render(document.getElementById(r), n({}, this.props, {
                                    "error-callback": this.handleError,
                                    "expired-callback": this.handleExpire,
                                    callback: this.handleSubmit
                                }));
                                this.setState({
                                    isRemoved: !1,
                                    captchaId: a
                                })
                            }
                        }
                    }, {
                        key: "resetCaptcha",
                        value: function() {
                            var e = this.state,
                                t = e.isApiReady,
                                r = e.isRemoved,
                                n = e.captchaId;
                            t && !r && hcaptcha.reset(n)
                        }
                    }, {
                        key: "removeCaptcha",
                        value: function() {
                            var e = this.state,
                                t = e.isApiReady,
                                r = e.isRemoved,
                                n = e.captchaId;
                            t && !r && this.setState({
                                isRemoved: !0
                            }, (function() {
                                hcaptcha.remove(n)
                            }))
                        }
                    }, {
                        key: "handleOnLoad",
                        value: function() {
                            var e = this;
                            this.setState({
                                isApiReady: !0
                            }, (function() {
                                e.renderCaptcha()
                            }))
                        }
                    }, {
                        key: "handleSubmit",
                        value: function(e) {
                            var t = this.props.onVerify,
                                r = this.state,
                                n = r.isRemoved,
                                a = r.captchaId;
                            if ("undefined" != typeof hcaptcha && !n) {
                                t(hcaptcha.getResponse(a))
                            }
                        }
                    }, {
                        key: "handleExpire",
                        value: function() {
                            var e = this.props.onExpire,
                                t = this.state,
                                r = t.isApiReady,
                                n = t.isRemoved,
                                a = t.captchaId;
                            if (r && !n) {
                                hcaptcha.reset(a);
                                e && e()
                            }
                        }
                    }, {
                        key: "handleError",
                        value: function(e) {
                            var t = this.props.onError,
                                r = this.state,
                                n = r.isApiReady,
                                a = r.isRemoved,
                                i = r.captchaId;
                            if (n && !a) {
                                hcaptcha.reset(i);
                                t && t(e)
                            }
                        }
                    }, {
                        key: "execute",
                        value: function() {
                            var e = this.state,
                                t = e.isApiReady,
                                r = e.isRemoved,
                                n = e.captchaId;
                            t && !r && hcaptcha.execute(n)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.elementId;
                            return i.createElement("div", {
                                id: e
                            })
                        }
                    }]);
                    return t
                }(i.Component);
            e.exports = c
        },
        2562: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = void 0;
            var n, a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = s(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    n.default = e;
                    r && r.set(e, n);
                    return n
                }(r(1)),
                i = c(r(17)),
                o = c(r(2563)),
                l = c(r(1669)),
                u = ["className", "error", "sitekey"];

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (s = function(e) {
                    return e ? r : t
                })(e)
            }

            function f(e, t, r, a) {
                n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = e && e.defaultProps,
                    o = arguments.length - 3;
                if (t || 0 === o || (t = {
                        children: void 0
                    }), 1 === o) t.children = a;
                else if (o > 1) {
                    for (var l = new Array(o), u = 0; u < o; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && i)
                    for (var c in i) void 0 === t[c] && (t[c] = i[c]);
                else t || (t = i || {});
                return {
                    $$typeof: n,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function d() {
                d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                };
                return d.apply(this, arguments)
            }
            t.default = function(e) {
                var t = e.className,
                    r = e.error,
                    n = e.sitekey,
                    c = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) {
                            r = i[n];
                            t.indexOf(r) >= 0 || (a[r] = e[r])
                        }
                        return a
                    }(e, u);
                return f("div", {
                    className: (0, i.default)(null != r ? l.default.recaptchaError : null, t)
                }, void 0, a.createElement(o.default, d({
                    sitekey: n
                }, c)))
            }
        },
        2563: function(e, t, r) {
            (function(t) {
                n = function(e) {
                    return function(e) {
                        var t = {};

                        function r(n) {
                            if (t[n]) return t[n].exports;
                            var a = t[n] = {
                                i: n,
                                l: !1,
                                exports: {}
                            };
                            e[n].call(a.exports, a, a.exports, r);
                            a.l = !0;
                            return a.exports
                        }
                        r.m = e;
                        r.c = t;
                        r.d = function(e, t, n) {
                            r.o(e, t) || Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: n
                            })
                        };
                        r.r = function(e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            });
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        };
                        r.t = function(e, t) {
                            1 & t && (e = r(e));
                            if (8 & t) return e;
                            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                            var n = Object.create(null);
                            r.r(n);
                            Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: e
                            });
                            if (2 & t && "string" != typeof e)
                                for (var a in e) r.d(n, a, function(t) {
                                    return e[t]
                                }.bind(null, a));
                            return n
                        };
                        r.n = function(e) {
                            var t = e && e.__esModule ? function() {
                                return e.default
                            } : function() {
                                return e
                            };
                            r.d(t, "a", t);
                            return t
                        };
                        r.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        };
                        r.p = "";
                        return r(r.s = 2)
                    }([function(e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = function(e) {
                            return function(e) {
                                return Array.from(document.scripts).filter((function(t) {
                                    return t.src.indexOf(e) > -1
                                }))
                            }(e).length > 0
                        };
                        t.isAnyScriptPresent = function(e) {
                            return e.reduce((function(e, t) {
                                return e || n(t)
                            }), !1)
                        }, t.injectScript = function(e) {
                            var t = document.createElement("script");
                            t.async = !0;
                            t.defer = !0;
                            t.src = e;
                            document.head && document.head.appendChild(t)
                        }
                    }, function(t, r) {
                        t.exports = e
                    }, function(e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n, a = r(1),
                            i = (n = a) && n.__esModule ? n : {
                                default: n
                            },
                            o = r(0),
                            l = ["https://google.com/recaptcha", "https://recaptcha.net/recaptcha", "https://www.gstatic.com/recaptcha"],
                            u = function(e) {
                                ! function(e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                    e.prototype = Object.create(t && t.prototype, {
                                        constructor: {
                                            value: e,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    });
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                                }(t, e);

                                function t(e) {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, t);
                                    var r = function(e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                                    r.container = null;
                                    r._isAvailable = function() {
                                        return Boolean(window && window.grecaptcha && window.grecaptcha.ready)
                                    };
                                    r._inject = function() {
                                        r.props.inject && !(0, o.isAnyScriptPresent)(l) && (0, o.injectScript)("https://recaptcha.net/recaptcha/api.js?render=explicit")
                                    };
                                    r._prepare = function() {
                                        var e = r.props,
                                            t = e.explicit,
                                            n = e.onLoad;
                                        window.grecaptcha.ready((function() {
                                            r.setState({
                                                ready: !0
                                            }, (function() {
                                                t || r.renderExplicitly();
                                                n && n()
                                            }))
                                        }))
                                    };
                                    r._renderRecaptcha = function(e, t) {
                                        return window.grecaptcha.render(e, t)
                                    };
                                    r._resetRecaptcha = function() {
                                        return window.grecaptcha.reset(r.state.instanceId)
                                    };
                                    r._executeRecaptcha = function() {
                                        return window.grecaptcha.execute(r.state.instanceId)
                                    };
                                    r._stopTimer = function() {
                                        r.state.timer && clearInterval(r.state.timer)
                                    };
                                    r.componentDidMount = function() {
                                        r._inject();
                                        if (r._isAvailable()) r._prepare();
                                        else {
                                            var e = setInterval((function() {
                                                if (r._isAvailable()) {
                                                    r._prepare();
                                                    r._stopTimer()
                                                }
                                            }), 500);
                                            r.setState({
                                                timer: e
                                            })
                                        }
                                    };
                                    r.shouldComponentUpdate = function() {
                                        return !r.state.rendered
                                    };
                                    r.componentWillUnmount = function() {
                                        r._stopTimer();
                                        r.state.rendered && r._resetRecaptcha()
                                    };
                                    r.renderExplicitly = function() {
                                        return new Promise((function(e, t) {
                                            if (r.state.rendered) return t("This recaptcha instance has been already rendered.");
                                            if (!r.state.ready || !r.container) return t("Recaptcha is not ready for rendering yet.");
                                            var n = r._renderRecaptcha(r.container, {
                                                sitekey: r.props.sitekey,
                                                theme: r.state.invisible ? null : r.props.theme,
                                                size: r.props.size,
                                                badge: r.state.invisible ? r.props.badge : null,
                                                tabindex: r.props.tabindex,
                                                callback: r.props.onVerify,
                                                "expired-callback": r.props.onExpire,
                                                "error-callback": r.props.onError,
                                                isolated: r.state.invisible ? r.props.isolated : null,
                                                hl: r.state.invisible ? null : r.props.hl
                                            });
                                            r.setState({
                                                instanceId: n,
                                                rendered: !0
                                            }, (function() {
                                                r.props.onRender && r.props.onRender();
                                                e()
                                            }))
                                        }))
                                    };
                                    r.reset = function() {
                                        return new Promise((function(e, t) {
                                            if (r.state.rendered) {
                                                r._resetRecaptcha();
                                                return e()
                                            }
                                            t("This recaptcha instance did not render yet.")
                                        }))
                                    };
                                    r.execute = function() {
                                        return new Promise((function(e, t) {
                                            if (!r.state.invisible) return t("Manual execution is only available for invisible size.");
                                            if (r.state.rendered) {
                                                r._executeRecaptcha();
                                                e()
                                            }
                                            return t("This recaptcha instance did not render yet.")
                                        }))
                                    };
                                    r.render = function() {
                                        return i.default.createElement("div", {
                                            id: r.props.id,
                                            className: r.props.className,
                                            ref: function(e) {
                                                return r.container = e
                                            }
                                        })
                                    };
                                    r.state = {
                                        instanceId: null,
                                        ready: !1,
                                        rendered: !1,
                                        invisible: "invisible" === r.props.size,
                                        timer: null
                                    };
                                    return r
                                }
                                return t
                            }(a.Component);
                        u.defaultProps = {
                            id: "",
                            className: "g-recaptcha",
                            theme: "light",
                            size: "normal",
                            badge: "bottomright",
                            tabindex: 0,
                            explicit: !1,
                            inject: !0,
                            isolated: !1,
                            hl: ""
                        };
                        t.default = u
                    }]).default
                }, e.exports = n(r(1));
                var n
            }).call(this, r(8))
        },
        2564: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.useUniqueUsernameRegistrationExperiment = function() {
                var e = (0, a.useStateFromStores)([i.default], (function() {
                    return i.default.getEligibleExperiment(o.Experiments.UNIQUE_USERNAME_REGISTRATION)
                }));
                if (null != e) return (null == e ? void 0 : e.bucket) > o.ExperimentBuckets.CONTROL;
                return !1
            };
            var n, a = r(20),
                i = (n = r(173)) && n.__esModule ? n : {
                    default: n
                },
                o = r(12)
        },
        2565: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.CheckboxTypes = void 0;
            t.default = _;
            var n, a, i, o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = d(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    n.default = e;
                    r && r.set(e, n);
                    return n
                }(r(1)),
                l = f(r(17)),
                u = f(r(452)),
                c = f(r(1670)),
                s = ["id", "type", "className", "checked", "onChange"];

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (d = function(e) {
                    return e ? r : t
                })(e)
            }

            function p(e, t, r, n) {
                a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = e && e.defaultProps,
                    o = arguments.length - 3;
                if (t || 0 === o || (t = {
                        children: void 0
                    }), 1 === o) t.children = n;
                else if (o > 1) {
                    for (var l = new Array(o), u = 0; u < o; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && i)
                    for (var c in i) void 0 === t[c] && (t[c] = i[c]);
                else t || (t = i || {});
                return {
                    $$typeof: a,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function y() {
                y = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                };
                return y.apply(this, arguments)
            }
            t.CheckboxTypes = i;
            ! function(e) {
                e[e.BRAND_LIGHT = 0] = "BRAND_LIGHT"
            }(i || (t.CheckboxTypes = i = {}));
            var v = ((n = {})[i.BRAND_LIGHT] = c.default.brandLight, n),
                h = p("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, void 0, p("path", {
                    d: "M5.95745 14L0 9L1.78723 6.33333L5.3617 9.33333L11.617 0L14 2L5.95745 14Z",
                    fill: "#7289DA"
                }));

            function m() {
                return h
            }
            m.displayName = "Checkmark";
            var b = p(m, {});

            function _(e) {
                var t = e.id,
                    r = e.type,
                    n = void 0 === r ? i.BRAND_LIGHT : r,
                    a = e.className,
                    f = e.checked,
                    d = e.onChange,
                    h = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) {
                            r = i[n];
                            t.indexOf(r) >= 0 || (a[r] = e[r])
                        }
                        return a
                    }(e, s),
                    m = o.useRef(null),
                    _ = o.useCallback((function() {
                        var e;
                        null === (e = m.current) || void 0 === e || e.click()
                    }), [m]);
                return p(u.default, {
                    className: (0, l.default)(c.default.container, v[n], a),
                    onClick: _
                }, void 0, o.createElement("input", y({
                    id: t,
                    type: "checkbox",
                    ref: m,
                    className: c.default.input
                }, h, {
                    checked: f,
                    onChange: d
                })), p("div", {
                    className: c.default.checkbox
                }, void 0, f && b))
            }
            _.displayName = "Checkbox"
        },
        2566: function(e, t, r) {
            e.exports = r.p + "cd784686ed3f8081f9ffd2ebca329a5b.svg"
        },
        2567: function(e, t, r) {
            e.exports = r.p + "e6d57714479874c665b36c7adee76b1d.svg"
        },
        2568: function(e, t, r) {
            e.exports = r.p + "8a8375ab7908384e1fd6efe408284203.svg"
        },
        2569: function(e, t, r) {
            e.exports = r.p + "c40c84ca18d84633a9d86b4046a91437.svg"
        },
        470: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = I;
            var n, a = O(r(1)),
                i = _(r(446)),
                o = r(20),
                l = r(80),
                u = O(r(2556)),
                c = _(r(449)),
                s = _(r(447)),
                f = _(r(45)),
                d = r(107),
                p = _(r(30)),
                y = r(164),
                v = _(r(2557)),
                h = _(r(2558)),
                m = _(r(19)),
                b = _(r(1673));

            function _(e) {
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

            function O(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = g(t);
                if (r && r.has(e)) return r.get(e);
                var n = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                    }
                n.default = e;
                r && r.set(e, n);
                return n
            }

            function N(e, t, r, a) {
                n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = e && e.defaultProps,
                    o = arguments.length - 3;
                if (t || 0 === o || (t = {
                        children: void 0
                    }), 1 === o) t.children = a;
                else if (o > 1) {
                    for (var l = new Array(o), u = 0; u < o; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                if (t && i)
                    for (var c in i) void 0 === t[c] && (t[c] = i[c]);
                else t || (t = i || {});
                return {
                    $$typeof: n,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }

            function E() {
                return N("div", {}, void 0, N(u.default, {
                    imgSrc: l.Images.REBRAND_LANDING_REFRESH_INVITE_ONLY,
                    imgClassName: b.default.featureImage,
                    imgAlt: m.default.Messages.LANDING_REBRAND_FEATURE_INVITE_ONLY_IMG_ALT,
                    title: m.default.Messages.LANDING_REBRAND_FEATURE_INVITE_ONLY_TITLE,
                    subtitle: m.default.Messages.LANDING_REBRAND_FEATURE_INVITE_ONLY_BODY,
                    layout: u.FeatureTileLayout.IMAGE_LEFT
                }), N(u.default, {
                    className: b.default.greyBackground,
                    imgSrc: l.Images.REBRAND_LANDING_REFRESH_HANGOUT,
                    imgClassName: b.default.featureImage,
                    imgAlt: m.default.Messages.LANDING_REBRAND_FEATURE_HANGOUT_IMG_ALT,
                    title: m.default.Messages.LANDING_REBRAND_FEATURE_HANGOUT_TITLE,
                    subtitle: m.default.Messages.LANDING_REBRAND_FEATURE_HANGOUT_BODY,
                    layout: u.FeatureTileLayout.IMAGE_RIGHT
                }), N(u.default, {
                    imgSrc: l.Images.REBRAND_LANDING_REFRESH_BIG_GROUPS,
                    imgClassName: b.default.featureImage,
                    imgAlt: m.default.Messages.LANDING_REBRAND_FEATURE_BIG_GROUPS_IMG_ALT,
                    title: m.default.Messages.LANDING_REBRAND_FEATURE_BIG_GROUPS_TITLE,
                    subtitle: m.default.Messages.LANDING_REBRAND_FEATURE_BIG_GROUPS_BODY,
                    layout: u.FeatureTileLayout.IMAGE_LEFT
                }), N(u.default, {
                    className: b.default.greyBackground,
                    innerClassName: b.default.lastFeatureTile,
                    imgSrc: l.Images.REBRAND_LANDING_REFRESH_RELIABLE,
                    imgAlt: m.default.Messages.LANDING_REBRAND_FEATURE_RELIABLE_IMG_ALT,
                    title: m.default.Messages.LANDING_REBRAND_FEATURE_RELIABLE_TITLE,
                    subtitle: m.default.Messages.LANDING_REBRAND_FEATURE_RELIABLE_BODY,
                    layout: u.FeatureTileLayout.IMAGE_BOTTOM,
                    headline: !0
                }), N(d.Grid, {
                    className: b.default.greyBackground
                }, void 0, N(v.default, {
                    className: b.default.cta,
                    analyticsLocation: "Landing Bottom CTA"
                })))
            }
            E.displayName = "Content";
            var A = N(h.default, {}),
                R = N(E, {}),
                w = N(c.default, {});

            function I(e) {
                var t = e.ottEventType,
                    r = (0, o.useStateFromStores)([f.default], (function() {
                        return f.default.fingerprint
                    }));
                a.useEffect((function() {
                    p.default.trackOtt(t, r)
                }), [r, t]);
                return N(s.default, {}, void 0, a.createElement(i.default, (0, y.getMetadataRefresh)(y.MetaPage.Landing)), A, R, w)
            }
            I.displayName = "Landing"
        }
    }
]);
//# sourceMappingURL=6595bffed9de5a0c7ff1.js.map
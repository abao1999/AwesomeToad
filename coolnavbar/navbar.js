!function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = t.length, n = re.type(t);
        return"function" === n || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function i(t, e, n) {
        if (re.isFunction(e))
            return re.grep(t, function (t, i) {
                return!!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return re.grep(t, function (t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (he.test(e))
                return re.filter(e, t, n);
            e = re.filter(e, t)
        }
        return re.grep(t, function (t) {
            return re.inArray(t, e) >= 0 !== n
        })
    }
    function r(t, e) {
        do
            t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function s(t) {
        var e = be[t] = {};
        return re.each(t.match(ye) || [], function (t, n) {
            e[n] = !0
        }), e
    }
    function o() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }
    function a() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (o(), re.ready())
    }
    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Se, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? re.parseJSON(n) : n
                } catch (r) {
                }
                re.data(t, e, n)
            } else
                n = void 0
        }
        return n
    }
    function c(t) {
        var e;
        for (e in t)
            if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e)
                return!1;
        return!0
    }
    function u(t, e, n, i) {
        if (re.acceptData(t)) {
            var r, s, o = re.expando, a = t.nodeType, l = a ? re.cache : t, c = a ? t[o] : t[o] && o;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e)
                return c || (c = a ? t[o] = U.pop() || re.guid++ : o), l[c] || (l[c] = a ? {} : {toJSON: re.noop}), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = re.extend(l[c], e) : l[c].data = re.extend(l[c].data, e)), s = l[c], i || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[re.camelCase(e)] = n), "string" == typeof e ? (r = s[e], null == r && (r = s[re.camelCase(e)])) : r = s, r
        }
    }
    function d(t, e, n) {
        if (re.acceptData(t)) {
            var i, r, s = t.nodeType, o = s ? re.cache : t, a = s ? t[re.expando] : re.expando;
            if (o[a]) {
                if (e && (i = n ? o[a] : o[a].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in i ? e = [e] : (e = re.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                    for (; r--; )
                        delete i[e[r]];
                    if (n ? !c(i) : !re.isEmptyObject(i))
                        return
                }
                (n || (delete o[a].data, c(o[a]))) && (s ? re.cleanData([t], !0) : ne.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
            }
        }
    }
    function h() {
        return!0
    }
    function p() {
        return!1
    }
    function f() {
        try {
            return fe.activeElement
        } catch (t) {
        }
    }
    function g(t) {
        var e = $e.split("|"), n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length; )
                n.createElement(e.pop());
        return n
    }
    function m(t, e) {
        var n, i, r = 0, s = typeof t.getElementsByTagName !== ke ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== ke ? t.querySelectorAll(e || "*") : void 0;
        if (!s)
            for (s = [], n = t.childNodes || t; null != (i = n[r]); r++)
                !e || re.nodeName(i, e) ? s.push(i) : re.merge(s, m(i, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], s) : s
    }
    function v(t) {
        Ae.test(t.type) && (t.defaultChecked = t.checked)
    }
    function _(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function y(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
    }
    function b(t) {
        var e = Qe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }
    function x(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++)
            re._data(n, "globalEval", !e || re._data(e[i], "globalEval"))
    }
    function w(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var n, i, r, s = re._data(t), o = re._data(e, s), a = s.events;
            if (a) {
                delete o.handle, o.events = {};
                for (n in a)
                    for (i = 0, r = a[n].length; r > i; i++)
                        re.event.add(e, n, a[n][i])
            }
            o.data && (o.data = re.extend({}, o.data))
        }
    }
    function k(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[re.expando]) {
                r = re._data(e);
                for (i in r.events)
                    re.removeEvent(e, i, r.handle);
                e.removeAttribute(re.expando)
            }
            "script" === n && e.text !== t.text ? (y(e).text = t.text, b(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }
    function C(e, n) {
        var i, r = re(n.createElement(e)).appendTo(n.body), s = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
        return r.detach(), s
    }
    function S(t) {
        var e = fe, n = Je[t];
        return n || (n = C(t, e), "none" !== n && n || (Ke = (Ke || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ke[0].contentWindow || Ke[0].contentDocument).document, e.write(), e.close(), n = C(t, e), Ke.detach()), Je[t] = n), n
    }
    function T(t, e) {
        return{get: function () {
                var n = t();
                if (null != n)
                    return n ? void delete this.get : (this.get = e).apply(this, arguments)
            }}
    }
    function j(t, e) {
        if (e in t)
            return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = pn.length; r--; )
            if (e = pn[r] + n, e in t)
                return e;
        return i
    }
    function E(t, e) {
        for (var n, i, r, s = [], o = 0, a = t.length; a > o; o++)
            i = t[o], i.style && (s[o] = re._data(i, "olddisplay"), n = i.style.display, e ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ee(i) && (s[o] = re._data(i, "olddisplay", S(i.nodeName)))) : (r = Ee(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
        for (o = 0; a > o; o++)
            i = t[o], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[o] || "" : "none"));
        return t
    }
    function F(t, e, n) {
        var i = cn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function A(t, e, n, i, r) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2)
            "margin" === n && (o += re.css(t, n + je[s], !0, r)), i ? ("content" === n && (o -= re.css(t, "padding" + je[s], !0, r)), "margin" !== n && (o -= re.css(t, "border" + je[s] + "Width", !0, r))) : (o += re.css(t, "padding" + je[s], !0, r), "padding" !== n && (o += re.css(t, "border" + je[s] + "Width", !0, r)));
        return o
    }
    function N(t, e, n) {
        var i = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, s = tn(t), o = ne.boxSizing && "border-box" === re.css(t, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if (r = en(t, e, s), (0 > r || null == r) && (r = t.style[e]), rn.test(r))
                return r;
            i = o && (ne.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + A(t, e, n || (o ? "border" : "content"), i, s) + "px"
    }
    function D(t, e, n, i, r) {
        return new D.prototype.init(t, e, n, i, r)
    }
    function O() {
        return setTimeout(function () {
            fn = void 0
        }), fn = re.now()
    }
    function M(t, e) {
        var n, i = {height: t}, r = 0;
        for (e = e?1:0; 4 > r; r += 2 - e)
            n = je[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }
    function H(t, e, n) {
        for (var i, r = (bn[e] || []).concat(bn["*"]), s = 0, o = r.length; o > s; s++)
            if (i = r[s].call(n, e, t))
                return i
    }
    function $(t, e, n) {
        var i, r, s, o, a, l, c, u, d = this, h = {}, p = t.style, f = t.nodeType && Ee(t), g = re._data(t, "fxshow");
        n.queue || (a = re._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, d.always(function () {
            d.always(function () {
                a.unqueued--, re.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = re.css(t, "display"), u = "none" === c ? re._data(t, "olddisplay") || S(t.nodeName) : c, "inline" === u && "none" === re.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], mn.exec(r)) {
                if (delete e[i], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i])
                        continue;
                    f = !0
                }
                h[i] = g && g[i] || re.style(t, i)
            } else
                c = void 0;
        if (re.isEmptyObject(h))
            "inline" === ("none" === c ? S(t.nodeName) : c) && (p.display = c);
        else {
            g ? "hidden"in g && (f = g.hidden) : g = re._data(t, "fxshow", {}), s && (g.hidden = !f), f ? re(t).show() : d.done(function () {
                re(t).hide()
            }), d.done(function () {
                var e;
                re._removeData(t, "fxshow");
                for (e in h)
                    re.style(t, e, h[e])
            });
            for (i in h)
                o = H(f ? g[i] : 0, i, d), i in g || (g[i] = o.start, f && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function q(t, e) {
        var n, i, r, s, o;
        for (n in t)
            if (i = re.camelCase(n), r = e[i], s = t[n], re.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), o = re.cssHooks[i], o && "expand"in o) {
                s = o.expand(s), delete t[i];
                for (n in s)
                    n in t || (t[n] = s[n], e[n] = r)
            } else
                e[i] = r
    }
    function L(t, e, n) {
        var i, r, s = 0, o = yn.length, a = re.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r)
                return!1;
            for (var e = fn || O(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, s = 1 - i, o = 0, l = c.tweens.length; l > o; o++)
                c.tweens[o].run(s);
            return a.notifyWith(t, [c, s, n]), 1 > s && l ? n : (a.resolveWith(t, [c]), !1)
        }, c = a.promise({elem: t, props: re.extend({}, e), opts: re.extend(!0, {specialEasing: {}}, n), originalProperties: e, originalOptions: n, startTime: fn || O(), duration: n.duration, tweens: [], createTween: function (e, n) {
                var i = re.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(i), i
            }, stop: function (e) {
                var n = 0, i = e ? c.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; i > n; n++)
                    c.tweens[n].run(1);
                return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
            }}), u = c.props;
        for (q(u, c.opts.specialEasing); o > s; s++)
            if (i = yn[s].call(c, t, u, c.opts))
                return i;
        return re.map(u, H, c), re.isFunction(c.opts.start) && c.opts.start.call(t, c), re.fx.timer(re.extend(l, {elem: t, anim: c, queue: c.opts.queue})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function z(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0, s = e.toLowerCase().match(ye) || [];
            if (re.isFunction(n))
                for (; i = s[r++]; )
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function P(t, e, n, i) {
        function r(a) {
            var l;
            return s[a] = !0, re.each(t[a] || [], function (t, a) {
                var c = a(e, n, i);
                return"string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var s = {}, o = t === Wn;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }
    function B(t, e) {
        var n, i, r = re.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && re.extend(!0, t, n), t
    }
    function R(t, e, n) {
        for (var i, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0]; )
            l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (o in a)
                if (a[o] && a[o].test(r)) {
                    l.unshift(o);
                    break
                }
        if (l[0]in n)
            s = l[0];
        else {
            for (o in n) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                i || (i = o)
            }
            s = s || i
        }
        return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
    }
    function I(t, e, n, i) {
        var r, s, o, a, l, c = {}, u = t.dataTypes.slice();
        if (u[1])
            for (o in t.converters)
                c[o.toLowerCase()] = t.converters[o];
        for (s = u.shift(); s; )
            if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
                if ("*" === s)
                    s = l;
                else if ("*" !== l && l !== s) {
                    if (o = c[l + " " + s] || c["* " + s], !o)
                        for (r in c)
                            if (a = r.split(" "), a[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                o === !0 ? o = c[r] : c[r] !== !0 && (s = a[0], u.unshift(a[1]));
                                break
                            }
                    if (o !== !0)
                        if (o && t["throws"])
                            e = o(e);
                        else
                            try {
                                e = o(e)
                            } catch (d) {
                                return{state: "parsererror", error: o ? d : "No conversion from " + l + " to " + s}
                            }
                }
        return{state: "success", data: e}
    }
    function W(t, e, n, i) {
        var r;
        if (re.isArray(e))
            re.each(e, function (e, r) {
                n || Un.test(t) ? i(t, r) : W(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            });
        else if (n || "object" !== re.type(e))
            i(t, e);
        else
            for (r in e)
                W(t + "[" + r + "]", e[r], n, i)
    }
    function G() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    }
    function X() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }
    function Q(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var U = [], V = U.slice, Y = U.concat, Z = U.push, K = U.indexOf, J = {}, te = J.toString, ee = J.hasOwnProperty, ne = {}, ie = "1.11.1", re = function (t, e) {
        return new re.fn.init(t, e)
    }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, oe = /^-ms-/, ae = /-([\da-z])/gi, le = function (t, e) {
        return e.toUpperCase()
    };
    re.fn = re.prototype = {jquery: ie, constructor: re, selector: "", length: 0, toArray: function () {
            return V.call(this)
        }, get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : V.call(this)
        }, pushStack: function (t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (t, e) {
            return re.each(this, t, e)
        }, map: function (t) {
            return this.pushStack(re.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        }, slice: function () {
            return this.pushStack(V.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Z, sort: U.sort, splice: U.splice}, re.extend = re.fn.extend = function () {
        var t, e, n, i, r, s, o = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || re.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
            if (null != (r = arguments[a]))
                for (i in r)
                    t = o[i], n = r[i], o !== n && (c && n && (re.isPlainObject(n) || (e = re.isArray(n))) ? (e ? (e = !1, s = t && re.isArray(t) ? t : []) : s = t && re.isPlainObject(t) ? t : {}, o[i] = re.extend(c, s, n)) : void 0 !== n && (o[i] = n));
        return o
    }, re.extend({expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return"function" === re.type(t)
        }, isArray: Array.isArray || function (t) {
            return"array" === re.type(t)
        }, isWindow: function (t) {
            return null != t && t == t.window
        }, isNumeric: function (t) {
            return!re.isArray(t) && t - parseFloat(t) >= 0
        }, isEmptyObject: function (t) {
            var e;
            for (e in t)
                return!1;
            return!0
        }, isPlainObject: function (t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t))
                return!1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))
                    return!1
            } catch (n) {
                return!1
            }
            if (ne.ownLast)
                for (e in t)
                    return ee.call(t, e);
            for (e in t)
                ;
            return void 0 === e || ee.call(t, e)
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? J[te.call(t)] || "object" : typeof t
        }, globalEval: function (e) {
            e && re.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        }, camelCase: function (t) {
            return t.replace(oe, "ms-").replace(ae, le)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e, i) {
            var r, s = 0, o = t.length, a = n(t);
            if (i) {
                if (a)
                    for (; o > s && (r = e.apply(t[s], i), r !== !1); s++)
                        ;
                else
                    for (s in t)
                        if (r = e.apply(t[s], i), r === !1)
                            break
            } else if (a)
                for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++)
                    ;
            else
                for (s in t)
                    if (r = e.call(t[s], s, t[s]), r === !1)
                        break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(se, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? re.merge(i, "string" == typeof t ? [t] : t) : Z.call(i, t)), i
        }, inArray: function (t, e, n) {
            var i;
            if (e) {
                if (K)
                    return K.call(e, t, n);
                for (i = e.length, n = n?0 > n?Math.max(0, i + n):n:0; i > n; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        }, merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; )
                t[r++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i]; )
                    t[r++] = e[i++];
            return t.length = r, t
        }, grep: function (t, e, n) {
            for (var i, r = [], s = 0, o = t.length, a = !n; o > s; s++)
                i = !e(t[s], s), i !== a && r.push(t[s]);
            return r
        }, map: function (t, e, i) {
            var r, s = 0, o = t.length, a = n(t), l = [];
            if (a)
                for (; o > s; s++)
                    r = e(t[s], s, i), null != r && l.push(r);
            else
                for (s in t)
                    r = e(t[s], s, i), null != r && l.push(r);
            return Y.apply([], l)
        }, guid: 1, proxy: function (t, e) {
            var n, i, r;
            return"string" == typeof e && (r = t[e], e = t, t = r), re.isFunction(t) ? (n = V.call(arguments, 2), i = function () {
                return t.apply(e || this, n.concat(V.call(arguments)))
            }, i.guid = t.guid = t.guid || re.guid++, i) : void 0
        }, now: function () {
            return +new Date
        }, support: ne}), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        J["[object " + e + "]"] = e.toLowerCase()
    });
    var ce = function (t) {
        function e(t, e, n, i) {
            var r, s, o, a, l, c, d, p, f, g;
            if ((e ? e.ownerDocument || e : P) !== D && N(e), e = e || D, n = n || [], !t || "string" != typeof t)
                return n;
            if (1 !== (a = e.nodeType) && 9 !== a)
                return[];
            if (M && !i) {
                if (r = _e.exec(t))
                    if (o = r[1]) {
                        if (9 === a) {
                            if (s = e.getElementById(o), !s || !s.parentNode)
                                return n;
                            if (s.id === o)
                                return n.push(s), n
                        } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && L(e, s) && s.id === o)
                            return n.push(s), n
                    } else {
                        if (r[2])
                            return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((o = r[3]) && x.getElementsByClassName && e.getElementsByClassName)
                            return J.apply(n, e.getElementsByClassName(o)), n
                    }
                if (x.qsa && (!H || !H.test(t))) {
                    if (p = d = z, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (c = S(t), (d = e.getAttribute("id"))?p = d.replace(be, "\\$&"):e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--; )
                            c[l] = p + h(c[l]);
                        f = ye.test(t) && u(e.parentNode) || e, g = c.join(",")
                    }
                    if (g)
                        try {
                            return J.apply(n, f.querySelectorAll(g)), n
                        } catch (m) {
                        } finally {
                            d || e.removeAttribute("id")
                        }
                }
            }
            return j(t.replace(le, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[z] = !0, t
        }
        function r(t) {
            var e = D.createElement("div");
            try {
                return!!t(e)
            } catch (n) {
                return!1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }
        function s(t, e) {
            for (var n = t.split("|"), i = t.length; i--; )
                w.attrHandle[n[i]] = e
        }
        function o(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return"input" === n && e.type === t
            }
        }
        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return("input" === n || "button" === n) && e.type === t
            }
        }
        function c(t) {
            return i(function (e) {
                return e = +e, i(function (n, i) {
                    for (var r, s = t([], n.length, e), o = s.length; o--; )
                        n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function u(t) {
            return t && typeof t.getElementsByTagName !== Q && t
        }
        function d() {
        }
        function h(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }
        function p(t, e, n) {
            var i = e.dir, r = n && "parentNode" === i, s = R++;
            return e.first ? function (e, n, s) {
                for (; e = e[i]; )
                    if (1 === e.nodeType || r)
                        return t(e, n, s)
            } : function (e, n, o) {
                var a, l, c = [B, s];
                if (o) {
                    for (; e = e[i]; )
                        if ((1 === e.nodeType || r) && t(e, n, o))
                            return!0
                } else
                    for (; e = e[i]; )
                        if (1 === e.nodeType || r) {
                            if (l = e[z] || (e[z] = {}), (a = l[i]) && a[0] === B && a[1] === s)
                                return c[2] = a[2];
                            if (l[i] = c, c[2] = t(e, n, o))
                                return!0
                        }
            }
        }
        function f(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var r = t.length; r--; )
                    if (!t[r](e, n, i))
                        return!1;
                return!0
            } : t[0]
        }
        function g(t, n, i) {
            for (var r = 0, s = n.length; s > r; r++)
                e(t, n[r], i);
            return i
        }
        function m(t, e, n, i, r) {
            for (var s, o = [], a = 0, l = t.length, c = null != e; l > a; a++)
                (s = t[a]) && (!n || n(s, i, r)) && (o.push(s), c && e.push(a));
            return o
        }
        function v(t, e, n, r, s, o) {
            return r && !r[z] && (r = v(r)), s && !s[z] && (s = v(s, o)), i(function (i, o, a, l) {
                var c, u, d, h = [], p = [], f = o.length, v = i || g(e || "*", a.nodeType ? [a] : a, []), _ = !t || !i && e ? v : m(v, h, t, a, l), y = n ? s || (i ? t : f || r) ? [] : o : _;
                if (n && n(_, y, a, l), r)
                    for (c = m(y, p), r(c, [], a, l), u = c.length; u--; )
                        (d = c[u]) && (y[p[u]] = !(_[p[u]] = d));
                if (i) {
                    if (s || t) {
                        if (s) {
                            for (c = [], u = y.length; u--; )
                                (d = y[u]) && c.push(_[u] = d);
                            s(null, y = [], c, l)
                        }
                        for (u = y.length; u--; )
                            (d = y[u]) && (c = s ? ee.call(i, d) : h[u]) > -1 && (i[c] = !(o[c] = d))
                    }
                } else
                    y = m(y === o ? y.splice(f, y.length) : y), s ? s(null, o, y, l) : J.apply(o, y)
            })
        }
        function _(t) {
            for (var e, n, i, r = t.length, s = w.relative[t[0].type], o = s || w.relative[" "], a = s ? 1 : 0, l = p(function (t) {
                return t === e
            }, o, !0), c = p(function (t) {
                return ee.call(e, t) > -1
            }, o, !0), u = [function (t, n, i) {
                    return!s && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))
                }]; r > a; a++)
                if (n = w.relative[t[a].type])
                    u = [p(f(u), n)];
                else {
                    if (n = w.filter[t[a].type].apply(null, t[a].matches), n[z]) {
                        for (i = ++a; r > i && !w.relative[t[i].type]; i++)
                            ;
                        return v(a > 1 && f(u), a > 1 && h(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(le, "$1"), n, i > a && _(t.slice(a, i)), r > i && _(t = t.slice(i)), r > i && h(t))
                    }
                    u.push(n)
                }
            return f(u)
        }
        function y(t, n) {
            var r = n.length > 0, s = t.length > 0, o = function (i, o, a, l, c) {
                var u, d, h, p = 0, f = "0", g = i && [], v = [], _ = E, y = i || s && w.find.TAG("*", c), b = B += null == _ ? 1 : Math.random() || .1, x = y.length;
                for (c && (E = o !== D && o); f !== x && null != (u = y[f]); f++) {
                    if (s && u) {
                        for (d = 0; h = t[d++]; )
                            if (h(u, o, a)) {
                                l.push(u);
                                break
                            }
                        c && (B = b)
                    }
                    r && ((u = !h && u) && p--, i && g.push(u))
                }
                if (p += f, r && f !== p) {
                    for (d = 0; h = n[d++]; )
                        h(g, v, o, a);
                    if (i) {
                        if (p > 0)
                            for (; f--; )
                                g[f] || v[f] || (v[f] = Z.call(l));
                        v = m(v)
                    }
                    J.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                }
                return c && (B = b, E = _), g
            };
            return r ? i(o) : o
        }
        var b, x, w, k, C, S, T, j, E, F, A, N, D, O, M, H, $, q, L, z = "sizzle" + -new Date, P = t.document, B = 0, R = 0, I = n(), W = n(), G = n(), X = function (t, e) {
            return t === e && (A = !0), 0
        }, Q = "undefined", U = 1 << 31, V = {}.hasOwnProperty, Y = [], Z = Y.pop, K = Y.push, J = Y.push, te = Y.slice, ee = Y.indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (this[e] === t)
                    return e;
            return -1
        }, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", se = re.replace("w", "w#"), oe = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + se + "))|)" + ie + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"), ce = new RegExp("^" + ie + "*," + ie + "*"), ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"), he = new RegExp(ae), pe = new RegExp("^" + se + "$"), fe = {ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re.replace("w", "w*") + ")"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + ae), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"), bool: new RegExp("^(?:" + ne + ")$", "i"), needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")}, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, _e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), we = function (t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        };
        try {
            J.apply(Y = te.call(P.childNodes), P.childNodes), Y[P.childNodes.length].nodeType
        } catch (ke) {
            J = {apply: Y.length ? function (t, e) {
                    K.apply(t, te.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; )
                        ;
                    t.length = n - 1
                }}
        }
        x = e.support = {}, C = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, N = e.setDocument = function (t) {
            var e, n = t ? t.ownerDocument || t : P, i = n.defaultView;
            return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, O = n.documentElement, M = !C(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
                N()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function () {
                N()
            })), x.attributes = r(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = r(function (t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function (t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), x.getById = r(function (t) {
                return O.appendChild(t).id = z, !n.getElementsByName || !n.getElementsByName(z).length
            }), x.getById ? (w.find.ID = function (t, e) {
                if (typeof e.getElementById !== Q && M) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, w.filter.ID = function (t) {
                var e = t.replace(xe, we);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete w.find.ID, w.filter.ID = function (t) {
                var e = t.replace(xe, we);
                return function (t) {
                    var n = typeof t.getAttributeNode !== Q && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), w.find.TAG = x.getElementsByTagName ? function (t, e) {
                return typeof e.getElementsByTagName !== Q ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
                var n, i = [], r = 0, s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = s[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, w.find.CLASS = x.getElementsByClassName && function (t, e) {
                return typeof e.getElementsByClassName !== Q && M ? e.getElementsByClassName(t) : void 0
            }, $ = [], H = [], (x.qsa = ve.test(n.querySelectorAll)) && (r(function (t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && H.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || H.push(":checked")
            }), r(function (t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
            })), (x.matchesSelector = ve.test(q = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function (t) {
                x.disconnectedMatch = q.call(t, "div"), q.call(t, "[s!='']:x"), $.push("!=", ae)
            }), H = H.length && new RegExp(H.join("|")), $ = $.length && new RegExp($.join("|")), e = ve.test(O.compareDocumentPosition), L = e || ve.test(O.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return!0;
                return!1
            }, X = e ? function (t, e) {
                if (t === e)
                    return A = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === P && L(P, t) ? -1 : e === n || e.ownerDocument === P && L(P, e) ? 1 : F ? ee.call(F, t) - ee.call(F, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e)
                    return A = !0, 0;
                var i, r = 0, s = t.parentNode, a = e.parentNode, l = [t], c = [e];
                if (!s || !a)
                    return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : F ? ee.call(F, t) - ee.call(F, e) : 0;
                if (s === a)
                    return o(t, e);
                for (i = t; i = i.parentNode; )
                    l.unshift(i);
                for (i = e; i = i.parentNode; )
                    c.unshift(i);
                for (; l[r] === c[r]; )
                    r++;
                return r ? o(l[r], c[r]) : l[r] === P ? -1 : c[r] === P ? 1 : 0
            }, n) : D
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== D && N(t), n = n.replace(de, "='$1']"), !(!x.matchesSelector || !M || $ && $.test(n) || H && H.test(n)))
                try {
                    var i = q.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (r) {
                }
            return e(n, D, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return(t.ownerDocument || t) !== D && N(t), L(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== D && N(t);
            var n = w.attrHandle[e.toLowerCase()], i = n && V.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !M) : void 0;
            return void 0 !== i ? i : x.attributes || !M ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [], i = 0, r = 0;
            if (A = !x.detectDuplicates, F = !x.sortStable && t.slice(0), t.sort(X), A) {
                for (; e = t[r++]; )
                    e === t[r] && (i = n.push(r));
                for (; i--; )
                    t.splice(n[i], 1)
            }
            return F = null, t
        }, k = e.getText = function (t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += k(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[i++]; )
                    n += k(e);
            return n
        }, w = e.selectors = {cacheLength: 50, createPseudo: i, match: fe, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (t) {
                    return t[1] = t[1].replace(xe, we), t[3] = (t[3] || t[4] || t[5] || "").replace(xe, we), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && he.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }}, filter: {TAG: function (t) {
                    var e = t.replace(xe, we).toLowerCase();
                    return"*" === t ? function () {
                        return!0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = I[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && I(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Q && t.getAttribute("class") || "")
                    })
                }, ATTR: function (t, n, i) {
                    return function (r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === n : n ? (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s + " ").indexOf(i) > -1 : "|=" === n ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                }, CHILD: function (t, e, n, i, r) {
                    var s = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === i && 0 === r ? function (t) {
                        return!!t.parentNode
                    } : function (e, n, l) {
                        var c, u, d, h, p, f, g = s !== o ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), _ = !l && !a;
                        if (m) {
                            if (s) {
                                for (; g; ) {
                                    for (d = e; d = d[g]; )
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return!1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return!0
                            }
                            if (f = [o ? m.firstChild : m.lastChild], o && _) {
                                for (u = m[z] || (m[z] = {}), c = u[t] || [], p = c[0] === B && c[1], h = c[0] === B && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (h = p = 0) || f.pop(); )
                                    if (1 === d.nodeType && ++h && d === e) {
                                        u[t] = [B, p, h];
                                        break
                                    }
                            } else if (_ && (c = (e[z] || (e[z] = {}))[t]) && c[0] === B)
                                h = c[1];
                            else
                                for (; (d = ++p && d && d[g] || (h = p = 0) || f.pop()) && ((a?d.nodeName.toLowerCase() !== v:1 !== d.nodeType) || !++h || (_ && ((d[z] || (d[z] = {}))[t] = [B, h]), d !== e)); )
                                    ;
                            return h -= r, h === i || h % i === 0 && h / i >= 0
                        }
                    }
                }, PSEUDO: function (t, n) {
                    var r, s = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[z] ? s(n) : s.length > 1 ? (r = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                        for (var i, r = s(t, n), o = r.length; o--; )
                            i = ee.call(t, r[o]), t[i] = !(e[i] = r[o])
                    }) : function (t) {
                        return s(t, 0, r)
                    }) : s
                }}, pseudos: {not: i(function (t) {
                    var e = [], n = [], r = T(t.replace(le, "$1"));
                    return r[z] ? i(function (t, e, n, i) {
                        for (var s, o = r(t, null, i, []), a = t.length; a--; )
                            (s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function (t, i, s) {
                        return e[0] = t, r(e, null, s, n), !n.pop()
                    }
                }), has: i(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }), contains: i(function (t) {
                    return function (e) {
                        return(e.textContent || e.innerText || k(e)).indexOf(t) > -1
                    }
                }), lang: i(function (t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, we).toLowerCase(), function (e) {
                        var n;
                        do
                            if (n = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return!1
                    }
                }), target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                }, root: function (t) {
                    return t === O
                }, focus: function (t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: function (t) {
                    return t.disabled === !1
                }, disabled: function (t) {
                    return t.disabled === !0
                }, checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return"input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return!1;
                    return!0
                }, parent: function (t) {
                    return!w.pseudos.empty(t)
                }, header: function (t) {
                    return me.test(t.nodeName)
                }, input: function (t) {
                    return ge.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return"input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return"input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: c(function () {
                    return[0]
                }), last: c(function (t, e) {
                    return[e - 1]
                }), eq: c(function (t, e, n) {
                    return[0 > n ? n + e : n]
                }), even: c(function (t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }), odd: c(function (t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }), lt: c(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0; )
                        t.push(i);
                    return t
                }), gt: c(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e; )
                        t.push(i);
                    return t
                })}}, w.pseudos.nth = w.pseudos.eq;
        for (b in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0})
            w.pseudos[b] = a(b);
        for (b in{submit:!0, reset:!0})
            w.pseudos[b] = l(b);
        return d.prototype = w.filters = w.pseudos, w.setFilters = new d, S = e.tokenize = function (t, n) {
            var i, r, s, o, a, l, c, u = W[t + " "];
            if (u)
                return n ? 0 : u.slice(0);
            for (a = t, l = [], c = w.preFilter; a; ) {
                (!i || (r = ce.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = ue.exec(a)) && (i = r.shift(), s.push({value: i, type: r[0].replace(le, " ")}), a = a.slice(i.length));
                for (o in w.filter)
                    !(r = fe[o].exec(a)) || c[o] && !(r = c[o](r)) || (i = r.shift(), s.push({value: i, type: o, matches: r}), a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? e.error(t) : W(t, l).slice(0)
        }, T = e.compile = function (t, e) {
            var n, i = [], r = [], s = G[t + " "];
            if (!s) {
                for (e || (e = S(t)), n = e.length; n--; )
                    s = _(e[n]), s[z] ? i.push(s) : r.push(s);
                s = G(t, y(r, i)), s.selector = t
            }
            return s
        }, j = e.select = function (t, e, n, i) {
            var r, s, o, a, l, c = "function" == typeof t && t, d = !i && S(t = c.selector || t);
            if (n = n || [], 1 === d.length) {
                if (s = d[0] = d[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && x.getById && 9 === e.nodeType && M && w.relative[s[1].type]) {
                    if (e = (w.find.ID(o.matches[0].replace(xe, we), e) || [])[0], !e)
                        return n;
                    c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = fe.needsContext.test(t)?0:s.length; r-- && (o = s[r], !w.relative[a = o.type]); )
                    if ((l = w.find[a]) && (i = l(o.matches[0].replace(xe, we), ye.test(s[0].type) && u(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = i.length && h(s), !t)
                            return J.apply(n, i), n;
                        break
                    }
            }
            return(c || T(t, d))(i, e, !M, n, ye.test(t) && u(e.parentNode) || e), n
        }, x.sortStable = z.split("").sort(X).join("") === z, x.detectDuplicates = !!A, N(), x.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }), r(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function (t) {
            return null == t.getAttribute("disabled")
        }) || s(ne, function (t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
    var ue = re.expr.match.needsContext, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, he = /^.[^:#\[\.,]*$/;
    re.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? re.find.matchesSelector(i, t) ? [i] : [] : re.find.matches(t, re.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, re.fn.extend({find: function (t) {
            var e, n = [], i = this, r = i.length;
            if ("string" != typeof t)
                return this.pushStack(re(t).filter(function () {
                    for (e = 0; r > e; e++)
                        if (re.contains(i[e], this))
                            return!0
                }));
            for (e = 0; r > e; e++)
                re.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        }, filter: function (t) {
            return this.pushStack(i(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(i(this, t || [], !0))
        }, is: function (t) {
            return!!i(this, "string" == typeof t && ue.test(t) ? re(t) : t || [], !1).length
        }});
    var pe, fe = t.document, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, me = re.fn.init = function (t, e) {
        var n, i;
        if (!t)
            return this;
        if ("string" == typeof t) {
            if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !n || !n[1] && e)
                return!e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), de.test(n[1]) && re.isPlainObject(e))
                    for (n in e)
                        re.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            if (i = fe.getElementById(n[2]), i && i.parentNode) {
                if (i.id !== n[2])
                    return pe.find(t);
                this.length = 1, this[0] = i
            }
            return this.context = fe, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
    };
    me.prototype = re.fn, pe = re(fe);
    var ve = /^(?:parents|prev(?:Until|All))/, _e = {children: !0, contents: !0, next: !0, prev: !0};
    re.extend({dir: function (t, e, n) {
            for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n)); )
                1 === r.nodeType && i.push(r), r = r[e];
            return i
        }, sibling: function (t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }}), re.fn.extend({has: function (t) {
            var e, n = re(t, this), i = n.length;
            return this.filter(function () {
                for (e = 0; i > e; e++)
                    if (re.contains(this, n[e]))
                        return!0
            })
        }, closest: function (t, e) {
            for (var n, i = 0, r = this.length, s = [], o = ue.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, t))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? re.unique(s) : s)
        }, index: function (t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }}), re.each({parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return re.dir(t, "parentNode")
        }, parentsUntil: function (t, e, n) {
            return re.dir(t, "parentNode", n)
        }, next: function (t) {
            return r(t, "nextSibling")
        }, prev: function (t) {
            return r(t, "previousSibling")
        }, nextAll: function (t) {
            return re.dir(t, "nextSibling")
        }, prevAll: function (t) {
            return re.dir(t, "previousSibling")
        }, nextUntil: function (t, e, n) {
            return re.dir(t, "nextSibling", n)
        }, prevUntil: function (t, e, n) {
            return re.dir(t, "previousSibling", n)
        }, siblings: function (t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return re.sibling(t.firstChild)
        }, contents: function (t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
        }}, function (t, e) {
        re.fn[t] = function (n, i) {
            var r = re.map(this, e, n);
            return"Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (_e[t] || (r = re.unique(r)), ve.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var ye = /\S+/g, be = {};
    re.Callbacks = function (t) {
        t = "string" == typeof t ? be[t] || s(t) : re.extend({}, t);
        var e, n, i, r, o, a, l = [], c = !t.once && [], u = function (s) {
            for (n = t.memory && s, i = !0, o = a || 0, a = 0, r = l.length, e = !0; l && r > o; o++)
                if (l[o].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                    n = !1;
                    break
                }
            e = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
        }, d = {add: function () {
                if (l) {
                    var i = l.length;
                    !function s(e) {
                        re.each(e, function (e, n) {
                            var i = re.type(n);
                            "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && s(n)
                        })
                    }(arguments), e ? r = l.length : n && (a = i, u(n))
                }
                return this
            }, remove: function () {
                return l && re.each(arguments, function (t, n) {
                    for (var i; (i = re.inArray(n, l, i)) > - 1; )
                        l.splice(i, 1), e && (r >= i && r--, o >= i && o--)
                }), this
            }, has: function (t) {
                return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], r = 0, this
            }, disable: function () {
                return l = c = n = void 0, this
            }, disabled: function () {
                return!l
            }, lock: function () {
                return c = void 0, n || d.disable(), this
            }, locked: function () {
                return!c
            }, fireWith: function (t, n) {
                return!l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : u(n)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return!!i
            }};
        return d
    }, re.extend({Deferred: function (t) {
            var e = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]], n = "pending", i = {state: function () {
                    return n
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, then: function () {
                    var t = arguments;
                    return re.Deferred(function (n) {
                        re.each(e, function (e, s) {
                            var o = re.isFunction(t[e]) && t[e];
                            r[s[1]](function () {
                                var t = o && o.apply(this, arguments);
                                t && re.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, o ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, promise: function (t) {
                    return null != t ? re.extend(t, i) : i
                }}, r = {};
            return i.pipe = i.then, re.each(e, function (t, s) {
                var o = s[2], a = s[3];
                i[s[1]] = o.add, a && o.add(function () {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function () {
                    return r[s[0] + "With"](this === r ? i : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), i.promise(r), t && t.call(r, r), r
        }, when: function (t) {
            var e, n, i, r = 0, s = V.call(arguments), o = s.length, a = 1 !== o || t && re.isFunction(t.promise) ? o : 0, l = 1 === a ? t : re.Deferred(), c = function (t, n, i) {
                return function (r) {
                    n[t] = this, i[t] = arguments.length > 1 ? V.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (o > 1)
                for (e = new Array(o), n = new Array(o), i = new Array(o); o > r; r++)
                    s[r] && re.isFunction(s[r].promise) ? s[r].promise().done(c(r, i, s)).fail(l.reject).progress(c(r, n, e)) : --a;
            return a || l.resolveWith(i, s), l.promise()
        }});
    var xe;
    re.fn.ready = function (t) {
        return re.ready.promise().done(t), this
    }, re.extend({isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? re.readyWait++ : re.ready(!0)
        }, ready: function (t) {
            if (t === !0 ? !--re.readyWait : !re.isReady) {
                if (!fe.body)
                    return setTimeout(re.ready);
                re.isReady = !0, t !== !0 && --re.readyWait > 0 || (xe.resolveWith(fe, [re]), re.fn.triggerHandler && (re(fe).triggerHandler("ready"), re(fe).off("ready")))
            }
        }}), re.ready.promise = function (e) {
        if (!xe)
            if (xe = re.Deferred(), "complete" === fe.readyState)
                setTimeout(re.ready);
            else if (fe.addEventListener)
                fe.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
            else {
                fe.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && fe.documentElement
                } catch (i) {
                }
                n && n.doScroll && !function r() {
                    if (!re.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(r, 50)
                        }
                        o(), re.ready()
                    }
                }()
            }
        return xe.promise(e)
    };
    var we, ke = "undefined";
    for (we in re(ne))
        break;
    ne.ownLast = "0" !== we, ne.inlineBlockNeedsLayout = !1, re(function () {
        var t, e, n, i;
        n = fe.getElementsByTagName("body")[0], n && n.style && (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
    }), function () {
        var t = fe.createElement("div");
        if (null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ne.deleteExpando = !1
            }
        }
        t = null
    }(), re.acceptData = function (t) {
        var e = re.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Se = /([A-Z])/g;
    re.extend({cache: {}, noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !c(t)
        }, data: function (t, e, n) {
            return u(t, e, n)
        }, removeData: function (t, e) {
            return d(t, e)
        }, _data: function (t, e, n) {
            return u(t, e, n, !0)
        }, _removeData: function (t, e) {
            return d(t, e, !0)
        }}), re.fn.extend({data: function (t, e) {
            var n, i, r, s = this[0], o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = re.data(s), 1 === s.nodeType && !re._data(s, "parsedAttrs"))) {
                    for (n = o.length; n--; )
                        o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(s, i, r[i])));
                    re._data(s, "parsedAttrs", !0)
                }
                return r
            }
            return"object" == typeof t ? this.each(function () {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                re.data(this, t, e)
            }) : s ? l(s, t, re.data(s, t)) : void 0
        }, removeData: function (t) {
            return this.each(function () {
                re.removeData(this, t)
            })
        }}), re.extend({queue: function (t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = re._data(t, e), n && (!i || re.isArray(n) ? i = re._data(t, e, re.makeArray(n)) : i.push(n)), i || []) : void 0
        }, dequeue: function (t, e) {
            e = e || "fx";
            var n = re.queue(t, e), i = n.length, r = n.shift(), s = re._queueHooks(t, e), o = function () {
                re.dequeue(t, e)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
        }, _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return re._data(t, n) || re._data(t, n, {empty: re.Callbacks("once memory").add(function () {
                    re._removeData(t, e + "queue"), re._removeData(t, n)
                })})
        }}), re.fn.extend({queue: function (t, e) {
            var n = 2;
            return"string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? re.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = re.queue(this, t, e);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && re.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                re.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var n, i = 1, r = re.Deferred(), s = this, o = this.length, a = function () {
                --i || r.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--; )
                n = re._data(s[o], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }});
    var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, je = ["Top", "Right", "Bottom", "Left"], Ee = function (t, e) {
        return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
    }, Fe = re.access = function (t, e, n, i, r, s, o) {
        var a = 0, l = t.length, c = null == n;
        if ("object" === re.type(n)) {
            r = !0;
            for (a in n)
                re.access(t, e, a, n[a], !0, s, o)
        } else if (void 0 !== i && (r = !0, re.isFunction(i) || (o = !0), c && (o ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
            return c.call(re(t), n)
        })), e))
            for (; l > a; a++)
                e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : c ? e.call(t) : l ? e(t[0], n) : s
    }, Ae = /^(?:checkbox|radio)$/i;
    !function () {
        var t = fe.createElement("input"), e = fe.createElement("div"), n = fe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ne.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
            ne.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(), function () {
        var e, n, i = fe.createElement("div");
        for (e in{submit:!0, change:!0, focusin:!0})
            n = "on" + e, (ne[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ne[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Ne = /^(?:input|select|textarea)$/i, De = /^key/, Oe = /^(?:mouse|pointer|contextmenu)|click/, Me = /^(?:focusinfocus|focusoutblur)$/, He = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {global: {}, add: function (t, e, n, i, r) {
            var s, o, a, l, c, u, d, h, p, f, g, m = re._data(t);
            if (m) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (o = m.events) || (o = m.events = {}), (u = m.handle) || (u = m.handle = function (t) {
                    return typeof re === ke || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(u.elem, arguments)
                }, u.elem = t), e = (e || "").match(ye) || [""], a = e.length; a--; )
                    s = He.exec(e[a]) || [], p = g = s[1], f = (s[2] || "").split(".").sort(), p && (c = re.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = re.event.special[p] || {}, d = re.extend({type: p, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && re.expr.match.needsContext.test(r), namespace: f.join(".")}, l), (h = o[p]) || (h = o[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, i, f, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), re.event.global[p] = !0);
                t = null
            }
        }, remove: function (t, e, n, i, r) {
            var s, o, a, l, c, u, d, h, p, f, g, m = re.hasData(t) && re._data(t);
            if (m && (u = m.events)) {
                for (e = (e || "").match(ye) || [""], c = e.length; c--; )
                    if (a = He.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (d = re.event.special[p] || {}, p = (i?d.delegateType:d.bindType) || p, h = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--; )
                            o = h[s], !r && g !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, d.remove && d.remove.call(t, o));
                        l && !h.length && (d.teardown && d.teardown.call(t, f, m.handle) !== !1 || re.removeEvent(t, p, m.handle), delete u[p])
                    } else
                        for (p in u)
                            re.event.remove(t, p + e[c], n, i, !0);
                re.isEmptyObject(u) && (delete m.handle, re._removeData(t, "events"))
            }
        }, trigger: function (e, n, i, r) {
            var s, o, a, l, c, u, d, h = [i || fe], p = ee.call(e, "type") ? e.type : e, f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = i = i || fe, 3 !== i.nodeType && 8 !== i.nodeType && !Me.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[re.expando] ? e : new re.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : re.makeArray(n, [e]), c = re.event.special[p] || {}, r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!r && !c.noBubble && !re.isWindow(i)) {
                    for (l = c.delegateType || p, Me.test(l + p) || (a = a.parentNode); a; a = a.parentNode)
                        h.push(a), u = a;
                    u === (i.ownerDocument || fe) && h.push(u.defaultView || u.parentWindow || t)
                }
                for (d = 0; (a = h[d++]) && !e.isPropagationStopped(); )
                    e.type = d > 1 ? l : c.bindType || p, s = (re._data(a, "events") || {})[e.type] && re._data(a, "handle"), s && s.apply(a, n), s = o && a[o], s && s.apply && re.acceptData(a) && (e.result = s.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = p, !r && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && re.acceptData(i) && o && i[p] && !re.isWindow(i)) {
                    u = i[o], u && (i[o] = null), re.event.triggered = p;
                    try {
                        i[p]()
                    } catch (g) {
                    }
                    re.event.triggered = void 0, u && (i[o] = u)
                }
                return e.result
            }
        }, dispatch: function (t) {
            t = re.event.fix(t);
            var e, n, i, r, s, o = [], a = V.call(arguments), l = (re._data(this, "events") || {})[t.type] || [], c = re.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (o = re.event.handlers.call(this, t, l), e = 0; (r = o[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = r.elem, s = 0; (i = r.handlers[s++]) && !t.isImmediatePropagationStopped(); )
                        (!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        }, handlers: function (t, e) {
            var n, i, r, s, o = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], s = 0; a > s; s++)
                            i = e[s], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && o.push({elem: l, handlers: r})
                    }
            return a < e.length && o.push({elem: this, handlers: e.slice(a)}), o
        }, fix: function (t) {
            if (t[re.expando])
                return t;
            var e, n, i, r = t.type, s = t, o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Oe.test(r)?this.mouseHooks:De.test(r)?this.keyHooks:{}), i = o.props?this.props.concat(o.props):this.props, t = new re.Event(s), e = i.length; e--; )
                n = i[e], t[n] = s[n];
            return t.target || (t.target = s.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (t, e) {
                var n, i, r, s = e.button, o = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || fe, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }}, special: {load: {noBubble: !0}, focus: {trigger: function () {
                    if (this !== f() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (t) {
                        }
                }, delegateType: "focusin"}, blur: {trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"}, click: {trigger: function () {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (t) {
                    return re.nodeName(t.target, "a")
                }}, beforeunload: {postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }}}, simulate: function (t, e, n, i) {
            var r = re.extend(new re.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
            i ? re.event.trigger(r, null, e) : re.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }}, re.removeEvent = fe.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === ke && (t[i] = null), t.detachEvent(i, n))
    }, re.Event = function (t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : p) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(t, e)
    }, re.Event.prototype = {isDefaultPrevented: p, isPropagationStopped: p, isImmediatePropagationStopped: p, preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        }, stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = h, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }}, re.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (t, e) {
        re.event.special[t] = {delegateType: e, bindType: e, handle: function (t) {
                var n, i = this, r = t.relatedTarget, s = t.handleObj;
                return(!r || r !== i && !re.contains(i, r)) && (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
            }}
    }), ne.submitBubbles || (re.event.special.submit = {setup: function () {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target, n = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), re._data(n, "submitBubbles", !0))
            })
        }, postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        }, teardown: function () {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }}), ne.changeBubbles || (re.event.special.change = {setup: function () {
            return Ne.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Ne.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }), re._data(e, "changeBubbles", !0))
            })
        }, handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return re.event.remove(this, "._change"), !Ne.test(this.nodeName)
        }}), ne.focusinBubbles || re.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var n = function (t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {setup: function () {
                var i = this.ownerDocument || this, r = re._data(i, e);
                r || i.addEventListener(t, n, !0), re._data(i, e, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = re._data(i, e) - 1;
                r ? re._data(i, e, r) : (i.removeEventListener(t, n, !0), re._removeData(i, e))
            }}
    }), re.fn.extend({on: function (t, e, n, i, r) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (s in t)
                    this.on(s, e, n, t[s], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1)
                i = p;
            else if (!i)
                return this;
            return 1 === r && (o = i, i = function (t) {
                return re().off(t), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = re.guid++)), this.each(function () {
                re.event.add(this, t, i, n, e)
            })
        }, one: function (t, e, n, i) {
            return this.on(t, e, n, i, 1)
        }, off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj, re(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            }
            return(e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = p), this.each(function () {
                re.event.remove(this, t, n, e)
            })
        }, trigger: function (t, e) {
            return this.each(function () {
                re.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var n = this[0];
            return n ? re.event.trigger(t, e, n, !0) : void 0
        }});
    var $e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", qe = / jQuery\d+="(?:null|\d+)"/g, Le = new RegExp("<(?:" + $e + ")[\\s/>]", "i"), ze = /^\s+/, Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Be = /<([\w:]+)/, Re = /<tbody/i, Ie = /<|&#?\w+;/, We = /<(?:script|style|link)/i, Ge = /checked\s*(?:[^=]|=\s*.checked.)/i, Xe = /^$|\/(?:java|ecma)script/i, Qe = /^true\/(.*)/, Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ve = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, Ye = g(fe), Ze = Ye.appendChild(fe.createElement("div"));
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, re.extend({clone: function (t, e, n) {
            var i, r, s, o, a, l = re.contains(t.ownerDocument, t);
            if (ne.html5Clone || re.isXMLDoc(t) || !Le.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Ze.innerHTML = t.outerHTML, Ze.removeChild(s = Ze.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                for (i = m(s), a = m(t), o = 0; null != (r = a[o]); ++o)
                    i[o] && k(r, i[o]);
            if (e)
                if (n)
                    for (a = a || m(t), i = i || m(s), o = 0; null != (r = a[o]); o++)
                        w(r, i[o]);
                else
                    w(t, s);
            return i = m(s, "script"), i.length > 0 && x(i, !l && m(t, "script")), i = a = r = null, s
        }, buildFragment: function (t, e, n, i) {
            for (var r, s, o, a, l, c, u, d = t.length, h = g(e), p = [], f = 0; d > f; f++)
                if (s = t[f], s || 0 === s)
                    if ("object" === re.type(s))
                        re.merge(p, s.nodeType ? [s] : s);
                    else if (Ie.test(s)) {
                        for (a = a || h.appendChild(e.createElement("div")), l = (Be.exec(s) || ["", ""])[1].toLowerCase(), u = Ve[l] || Ve._default, a.innerHTML = u[1] + s.replace(Pe, "<$1></$2>") + u[2], r = u[0]; r--; )
                            a = a.lastChild;
                        if (!ne.leadingWhitespace && ze.test(s) && p.push(e.createTextNode(ze.exec(s)[0])), !ne.tbody)
                            for (s = "table" !== l || Re.test(s)?"<table>" !== u[1] || Re.test(s)?0:a:a.firstChild, r = s && s.childNodes.length; r--; )
                                re.nodeName(c = s.childNodes[r], "tbody") && !c.childNodes.length && s.removeChild(c);
                        for (re.merge(p, a.childNodes), a.textContent = ""; a.firstChild; )
                            a.removeChild(a.firstChild);
                        a = h.lastChild
                    } else
                        p.push(e.createTextNode(s));
            for (a && h.removeChild(a), ne.appendChecked || re.grep(m(p, "input"), v), f = 0; s = p[f++]; )
                if ((!i || -1 === re.inArray(s, i)) && (o = re.contains(s.ownerDocument, s), a = m(h.appendChild(s), "script"), o && x(a), n))
                    for (r = 0; s = a[r++]; )
                        Xe.test(s.type || "") && n.push(s);
            return a = null, h
        }, cleanData: function (t, e) {
            for (var n, i, r, s, o = 0, a = re.expando, l = re.cache, c = ne.deleteExpando, u = re.event.special; null != (n = t[o]); o++)
                if ((e || re.acceptData(n)) && (r = n[a], s = r && l[r])) {
                    if (s.events)
                        for (i in s.events)
                            u[i] ? re.event.remove(n, i) : re.removeEvent(n, i, s.handle);
                    l[r] && (delete l[r], c ? delete n[a] : typeof n.removeAttribute !== ke ? n.removeAttribute(a) : n[a] = null, U.push(r))
                }
        }}), re.fn.extend({text: function (t) {
            return Fe(this, function (t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
            }, null, t, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, remove: function (t, e) {
            for (var n, i = t ? re.filter(t, this) : this, r = 0; null != (n = i[r]); r++)
                e || 1 !== n.nodeType || re.cleanData(m(n)), n.parentNode && (e && re.contains(n.ownerDocument, n) && x(m(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && re.cleanData(m(t, !1)); t.firstChild; )
                    t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        }, clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return re.clone(this, t, e)
            })
        }, html: function (t) {
            return Fe(this, function (t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t)
                    return 1 === e.nodeType ? e.innerHTML.replace(qe, "") : void 0;
                if (!("string" != typeof t || We.test(t) || !ne.htmlSerialize && Le.test(t) || !ne.leadingWhitespace && ze.test(t) || Ve[(Be.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Pe, "<$1></$2>");
                    try {
                        for (; i > n; n++)
                            e = this[n] || {}, 1 === e.nodeType && (re.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, re.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        }, detach: function (t) {
            return this.remove(t, !0)
        }, domManip: function (t, e) {
            t = Y.apply([], t);
            var n, i, r, s, o, a, l = 0, c = this.length, u = this, d = c - 1, h = t[0], p = re.isFunction(h);
            if (p || c > 1 && "string" == typeof h && !ne.checkClone && Ge.test(h))
                return this.each(function (n) {
                    var i = u.eq(n);
                    p && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
                });
            if (c && (a = re.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (s = re.map(m(a, "script"), y), r = s.length; c > l; l++)
                    i = a, l !== d && (i = re.clone(i, !0, !0), r && re.merge(s, m(i, "script"))), e.call(this[l], i, l);
                if (r)
                    for (o = s[s.length - 1].ownerDocument, re.map(s, b), l = 0; r > l; l++)
                        i = s[l], Xe.test(i.type || "") && !re._data(i, "globalEval") && re.contains(o, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ue, "")));
                a = n = null
            }
            return this
        }}), re.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (t, e) {
        re.fn[t] = function (t) {
            for (var n, i = 0, r = [], s = re(t), o = s.length - 1; o >= i; i++)
                n = i === o ? this : this.clone(!0), re(s[i])[e](n), Z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ke, Je = {};
    !function () {
        var t;
        ne.shrinkWrapBlocks = function () {
            if (null != t)
                return t;
            t = !1;
            var e, n, i;
            return n = fe.getElementsByTagName("body")[0], n && n.style ? (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    }();
    var tn, en, nn = /^margin/, rn = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"), sn = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (tn = function (t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }, en = function (t, e, n) {
        var i, r, s, o, a = t.style;
        return n = n || tn(t), o = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== o || re.contains(t.ownerDocument, t) || (o = re.style(t, e)), rn.test(o) && nn.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 === o ? o : o + ""
    }) : fe.documentElement.currentStyle && (tn = function (t) {
        return t.currentStyle
    }, en = function (t, e, n) {
        var i, r, s, o, a = t.style;
        return n = n || tn(t), o = n ? n[e] : void 0, null == o && a && a[e] && (o = a[e]), rn.test(o) && !sn.test(e) && (i = a.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = i, s && (r.left = s)), void 0 === o ? o : o + "" || "auto"
    }), function () {
        function e() {
            var e, n, i, r;
            n = fe.getElementsByTagName("body")[0], n && n.style && (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = o = !1, l = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(e, null) || {}).top, o = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, r = e.appendChild(fe.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), n.removeChild(i))
        }
        var n, i, r, s, o, a, l;
        n = fe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {reliableHiddenOffsets: function () {
                return null == a && e(), a
            }, boxSizingReliable: function () {
                return null == o && e(), o
            }, pixelPosition: function () {
                return null == s && e(), s
            }, reliableMarginRight: function () {
                return null == l && e(), l
            }}))
    }(), re.swap = function (t, e, n, i) {
        var r, s, o = {};
        for (s in e)
            o[s] = t.style[s], t.style[s] = e[s];
        r = n.apply(t, i || []);
        for (s in e)
            t.style[s] = o[s];
        return r
    };
    var on = /alpha\([^)]*\)/i, an = /opacity\s*=\s*([^)]*)/, ln = /^(none|table(?!-c[ea]).+)/, cn = new RegExp("^(" + Te + ")(.*)$", "i"), un = new RegExp("^([+-])=(" + Te + ")", "i"), dn = {position: "absolute", visibility: "hidden", display: "block"}, hn = {letterSpacing: "0", fontWeight: "400"}, pn = ["Webkit", "O", "Moz", "ms"];
    re.extend({cssHooks: {opacity: {get: function (t, e) {
                    if (e) {
                        var n = en(t, "opacity");
                        return"" === n ? "1" : n
                    }
                }}}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": ne.cssFloat ? "cssFloat" : "styleFloat"}, style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = re.camelCase(e), l = t.style;
                if (e = re.cssProps[a] || (re.cssProps[a] = j(l, a)), o = re.cssHooks[e] || re.cssHooks[a], void 0 === n)
                    return o && "get"in o && void 0 !== (r = o.get(t, !1, i)) ? r : l[e];
                if (s = typeof n, "string" === s && (r = un.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(t, e)), s = "number"), null != n && n === n && ("number" !== s || re.cssNumber[a] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set"in o && void 0 === (n = o.set(t, n, i)))))
                    try {
                        l[e] = n
                    } catch (c) {
                    }
            }
        }, css: function (t, e, n, i) {
            var r, s, o, a = re.camelCase(e);
            return e = re.cssProps[a] || (re.cssProps[a] = j(t.style, a)), o = re.cssHooks[e] || re.cssHooks[a], o && "get"in o && (s = o.get(t, !0, n)), void 0 === s && (s = en(t, e, i)), "normal" === s && e in hn && (s = hn[e]), "" === n || n ? (r = parseFloat(s), n === !0 || re.isNumeric(r) ? r || 0 : s) : s
        }}), re.each(["height", "width"], function (t, e) {
        re.cssHooks[e] = {get: function (t, n, i) {
                return n ? ln.test(re.css(t, "display")) && 0 === t.offsetWidth ? re.swap(t, dn, function () {
                    return N(t, e, i)
                }) : N(t, e, i) : void 0
            }, set: function (t, n, i) {
                var r = i && tn(t);
                return F(t, n, i ? A(t, e, i, ne.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r), r) : 0)
            }}
    }), ne.opacity || (re.cssHooks.opacity = {get: function (t, e) {
            return an.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        }, set: function (t, e) {
            var n = t.style, i = t.currentStyle, r = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", s = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(s.replace(on, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = on.test(s) ? s.replace(on, r) : s + " " + r)
        }}), re.cssHooks.marginRight = T(ne.reliableMarginRight, function (t, e) {
        return e ? re.swap(t, {display: "inline-block"}, en, [t, "marginRight"]) : void 0
    }), re.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        re.cssHooks[t + e] = {expand: function (n) {
                for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    r[t + je[i] + e] = s[i] || s[i - 2] || s[0];
                return r
            }}, nn.test(t) || (re.cssHooks[t + e].set = F)
    }), re.fn.extend({css: function (t, e) {
            return Fe(this, function (t, e, n) {
                var i, r, s = {}, o = 0;
                if (re.isArray(e)) {
                    for (i = tn(t), r = e.length; r > o; o++)
                        s[e[o]] = re.css(t, e[o], !1, i);
                    return s
                }
                return void 0 !== n ? re.style(t, e, n) : re.css(t, e)
            }, t, e, arguments.length > 1)
        }, show: function () {
            return E(this, !0)
        }, hide: function () {
            return E(this)
        }, toggle: function (t) {
            return"boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Ee(this) ? re(this).show() : re(this).hide()
            })
        }}), re.Tween = D, D.prototype = {constructor: D, init: function (t, e, n, i, r, s) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (re.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var t = D.propHooks[this.prop];
            return t && t.get ? t.get(this) : D.propHooks._default.get(this)
        }, run: function (t) {
            var e, n = D.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }}, D.prototype.init.prototype = D.prototype, D.propHooks = {_default: {get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            }, set: function (t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }}}, D.propHooks.scrollTop = D.propHooks.scrollLeft = {set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }}, re.easing = {linear: function (t) {
            return t
        }, swing: function (t) {
            return.5 - Math.cos(t * Math.PI) / 2
        }}, re.fx = D.prototype.init, re.fx.step = {};
    var fn, gn, mn = /^(?:toggle|show|hide)$/, vn = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"), _n = /queueHooks$/, yn = [$], bn = {"*": [function (t, e) {
                var n = this.createTween(t, e), i = n.cur(), r = vn.exec(e), s = r && r[3] || (re.cssNumber[t] ? "" : "px"), o = (re.cssNumber[t] || "px" !== s && +i) && vn.exec(re.css(n.elem, t)), a = 1, l = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], r = r || [], o = +i || 1;
                    do
                        a = a || ".5", o /= a, re.style(n.elem, t, o + s);
                    while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return r && (o = n.start = +o || +i || 0, n.unit = s, n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), n
            }]};
    re.Animation = re.extend(L, {tweener: function (t, e) {
            re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, r = t.length; r > i; i++)
                n = t[i], bn[n] = bn[n] || [], bn[n].unshift(e)
        }, prefilter: function (t, e) {
            e ? yn.unshift(t) : yn.push(t)
        }}), re.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? re.extend({}, t) : {complete: n || !n && e || re.isFunction(t) && t, duration: t, easing: n && e || e && !re.isFunction(e) && e};
        return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
        }, i
    }, re.fn.extend({fadeTo: function (t, e, n, i) {
            return this.filter(Ee).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
        }, animate: function (t, e, n, i) {
            var r = re.isEmptyObject(t), s = re.speed(e, n, i), o = function () {
                var e = L(this, re.extend({}, t), s);
                (r || re._data(this, "finish")) && e.stop(!0)
            };
            return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        }, stop: function (t, e, n) {
            var i = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return"string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, r = null != t && t + "queueHooks", s = re.timers, o = re._data(this);
                if (r)
                    o[r] && o[r].stop && i(o[r]);
                else
                    for (r in o)
                        o[r] && o[r].stop && _n.test(r) && i(o[r]);
                for (r = s.length; r--; )
                    s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                (e || !n) && re.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, n = re._data(this), i = n[t + "queue"], r = n[t + "queueHooks"], s = re.timers, o = i ? i.length : 0;
                for (n.finish = !0, re.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--; )
                    s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; o > e; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }}), re.each(["toggle", "show", "hide"], function (t, e) {
        var n = re.fn[e];
        re.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(M(e, !0), t, i, r)
        }
    }), re.each({slideDown: M("show"), slideUp: M("hide"), slideToggle: M("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (t, e) {
        re.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), re.timers = [], re.fx.tick = function () {
        var t, e = re.timers, n = 0;
        for (fn = re.now(); n < e.length; n++)
            t = e[n], t() || e[n] !== t || e.splice(n--, 1);
        e.length || re.fx.stop(), fn = void 0
    }, re.fx.timer = function (t) {
        re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
    }, re.fx.interval = 13, re.fx.start = function () {
        gn || (gn = setInterval(re.fx.tick, re.fx.interval))
    }, re.fx.stop = function () {
        clearInterval(gn), gn = null
    }, re.fx.speeds = {slow: 600, fast: 200, _default: 400}, re.fn.delay = function (t, e) {
        return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
            var i = setTimeout(e, t);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    }, function () {
        var t, e, n, i, r;
        e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = fe.createElement("select"), r = n.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== e.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = r.selected, ne.enctype = !!fe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value
    }();
    var xn = /\r/g;
    re.fn.extend({val: function (t) {
            var e, n, i, r = this[0];
            {
                if (arguments.length)
                    return i = re.isFunction(t), this.each(function (n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, re(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function (t) {
                            return null == t ? "" : t + ""
                        })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                if (r)
                    return e = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xn, "") : null == n ? "" : n)
            }
        }}), re.extend({valHooks: {option: {get: function (t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e : re.trim(re.text(t))
                }}, select: {get: function (t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : i.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (e = re(n).val(), s)
                                return e;
                            o.push(e)
                        }
                    return o
                }, set: function (t, e) {
                    for (var n, i, r = t.options, s = re.makeArray(e), o = r.length; o--; )
                        if (i = r[o], re.inArray(re.valHooks.option.get(i), s) >= 0)
                            try {
                                i.selected = n = !0
                            } catch (a) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (t.selectedIndex = -1), r
                }}}}), re.each(["radio", "checkbox"], function () {
        re.valHooks[this] = {set: function (t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }}, ne.checkOn || (re.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var wn, kn, Cn = re.expr.attrHandle, Sn = /^(?:checked|selected)$/i, Tn = ne.getSetAttribute, jn = ne.input;
    re.fn.extend({attr: function (t, e) {
            return Fe(this, re.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                re.removeAttr(this, t)
            })
        }}), re.extend({attr: function (t, e, n) {
            var i, r, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s)
                return typeof t.getAttribute === ke ? re.prop(t, e, n) : (1 === s && re.isXMLDoc(t) || (e = e.toLowerCase(), i = re.attrHooks[e] || (re.expr.match.bool.test(e) ? kn : wn)), void 0 === n ? i && "get"in i && null !== (r = i.get(t, e)) ? r : (r = re.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void re.removeAttr(t, e))
        }, removeAttr: function (t, e) {
            var n, i, r = 0, s = e && e.match(ye);
            if (s && 1 === t.nodeType)
                for (; n = s[r++]; )
                    i = re.propFix[n] || n, re.expr.match.bool.test(n) ? jn && Tn || !Sn.test(n) ? t[i] = !1 : t[re.camelCase("default-" + n)] = t[i] = !1 : re.attr(t, n, ""), t.removeAttribute(Tn ? n : i)
        }, attrHooks: {type: {set: function (t, e) {
                    if (!ne.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }}}}), kn = {set: function (t, e, n) {
            return e === !1 ? re.removeAttr(t, n) : jn && Tn || !Sn.test(n) ? t.setAttribute(!Tn && re.propFix[n] || n, n) : t[re.camelCase("default-" + n)] = t[n] = !0, n
        }}, re.each(re.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = Cn[e] || re.find.attr;
        Cn[e] = jn && Tn || !Sn.test(e) ? function (t, e, i) {
            var r, s;
            return i || (s = Cn[e], Cn[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Cn[e] = s), r
        } : function (t, e, n) {
            return n ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), jn && Tn || (re.attrHooks.value = {set: function (t, e, n) {
            return re.nodeName(t, "input") ? void(t.defaultValue = e) : wn && wn.set(t, e, n)
        }}), Tn || (wn = {set: function (t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }}, Cn.id = Cn.name = Cn.coords = function (t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {get: function (t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        }, set: wn.set}, re.attrHooks.contenteditable = {set: function (t, e, n) {
            wn.set(t, "" === e ? !1 : e, n)
        }}, re.each(["width", "height"], function (t, e) {
        re.attrHooks[e] = {set: function (t, n) {
                return"" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }}
    })), ne.style || (re.attrHooks.style = {get: function (t) {
            return t.style.cssText || void 0
        }, set: function (t, e) {
            return t.style.cssText = e + ""
        }});
    var En = /^(?:input|select|textarea|button|object)$/i, Fn = /^(?:a|area)$/i;
    re.fn.extend({prop: function (t, e) {
            return Fe(this, re.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return t = re.propFix[t] || t, this.each(function () {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {
                }
            })
        }}), re.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
            var i, r, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o)
                return s = 1 !== o || !re.isXMLDoc(t), s && (e = re.propFix[e] || e, r = re.propHooks[e]), void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
        }, propHooks: {tabIndex: {get: function (t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : En.test(t.nodeName) || Fn.test(t.nodeName) && t.href ? 0 : -1
                }}}}), ne.hrefNormalized || re.each(["href", "src"], function (t, e) {
        re.propHooks[e] = {get: function (t) {
                return t.getAttribute(e, 4)
            }}
    }), ne.optSelected || (re.propHooks.selected = {get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }}), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        re.propFix[this.toLowerCase()] = this
    }), ne.enctype || (re.propFix.enctype = "encoding");
    var An = /[\t\r\n\f]/g;
    re.fn.extend({addClass: function (t) {
            var e, n, i, r, s, o, a = 0, l = this.length, c = "string" == typeof t && t;
            if (re.isFunction(t))
                return this.each(function (e) {
                    re(this).addClass(t.call(this, e, this.className))
                });
            if (c)
                for (e = (t || "").match(ye) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                        for (s = 0; r = e[s++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o = re.trim(i), n.className !== o && (n.className = o)
                    }
            return this
        }, removeClass: function (t) {
            var e, n, i, r, s, o, a = 0, l = this.length, c = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t))
                return this.each(function (e) {
                    re(this).removeClass(t.call(this, e, this.className))
                });
            if (c)
                for (e = (t || "").match(ye) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                        for (s = 0; r = e[s++]; )
                            for (; i.indexOf(" " + r + " ") >= 0; )
                                i = i.replace(" " + r + " ", " ");
                        o = t ? re.trim(i) : "", n.className !== o && (n.className = o)
                    }
            return this
        }, toggleClass: function (t, e) {
            var n = typeof t;
            return"boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function (n) {
                re(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function () {
                if ("string" === n)
                    for (var e, i = 0, r = re(this), s = t.match(ye) || []; e = s[i++]; )
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else
                    (n === ke || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
            })
        }, hasClass: function (t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(e) >= 0)
                    return!0;
            return!1
        }}), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        re.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), re.fn.extend({hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }, bind: function (t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        }, undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }});
    var Nn = re.now(), Dn = /\?/, On = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var n, i = null, r = re.trim(e + "");
        return r && !re.trim(r.replace(On, function (t, e, r, s) {
            return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !s - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function (e) {
        var n, i;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), n
    };
    var Mn, Hn, $n = /#.*$/, qn = /([?&])_=[^&]*/, Ln = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, zn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Pn = /^(?:GET|HEAD)$/, Bn = /^\/\//, Rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, In = {}, Wn = {}, Gn = "*/".concat("*");
    try {
        Hn = location.href
    } catch (Xn) {
        Hn = fe.createElement("a"), Hn.href = "", Hn = Hn.href
    }
    Mn = Rn.exec(Hn.toLowerCase()) || [], re.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Hn, type: "GET", isLocal: zn.test(Mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Gn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": re.parseJSON, "text xml": re.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (t, e) {
            return e ? B(B(t, re.ajaxSettings), e) : B(re.ajaxSettings, t)
        }, ajaxPrefilter: z(In), ajaxTransport: z(Wn), ajax: function (t, e) {
            function n(t, e, n, i) {
                var r, u, v, _, b, w = e;
                2 !== y && (y = 2, a && clearTimeout(a), c = void 0, o = i || "", x.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (_ = R(d, x, n)), _ = I(d, _, x, r), r ? (d.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (re.lastModified[s] = b), b = x.getResponseHeader("etag"), b && (re.etag[s] = b)), 204 === t || "HEAD" === d.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = _.state, u = _.data, v = _.error, r = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || w) + "", r ? f.resolveWith(h, [u, w, x]) : f.rejectWith(h, [x, w, v]), x.statusCode(m), m = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [x, d, r ? u : v]), g.fireWith(h, [x, w]), l && (p.trigger("ajaxComplete", [x, d]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, s, o, a, l, c, u, d = re.ajaxSetup({}, e), h = d.context || d, p = d.context && (h.nodeType || h.jquery) ? re(h) : re.event, f = re.Deferred(), g = re.Callbacks("once memory"), m = d.statusCode || {}, v = {}, _ = {}, y = 0, b = "canceled", x = {readyState: 0, getResponseHeader: function (t) {
                    var e;
                    if (2 === y) {
                        if (!u)
                            for (u = {}; e = Ln.exec(o); )
                                u[e[1].toLowerCase()] = e[2];
                        e = u[t.toLowerCase()]
                    }
                    return null == e ? null : e
                }, getAllResponseHeaders: function () {
                    return 2 === y ? o : null
                }, setRequestHeader: function (t, e) {
                    var n = t.toLowerCase();
                    return y || (t = _[n] = _[n] || t, v[t] = e), this
                }, overrideMimeType: function (t) {
                    return y || (d.mimeType = t), this
                }, statusCode: function (t) {
                    var e;
                    if (t)
                        if (2 > y)
                            for (e in t)
                                m[e] = [m[e], t[e]];
                        else
                            x.always(t[x.status]);
                    return this
                }, abort: function (t) {
                    var e = t || b;
                    return c && c.abort(e), n(0, e), this
                }};
            if (f.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Hn) + "").replace($n, "").replace(Bn, Mn[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(ye) || [""], null == d.crossDomain && (i = Rn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Mn[1] && i[2] === Mn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Mn[3] || ("http:" === Mn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), P(In, d, e, x), 2 === y)
                return x;
            l = d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pn.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (Dn.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = qn.test(s) ? s.replace(qn, "$1_=" + Nn++) : s + (Dn.test(s) ? "&" : "?") + "_=" + Nn++)), d.ifModified && (re.lastModified[s] && x.setRequestHeader("If-Modified-Since", re.lastModified[s]), re.etag[s] && x.setRequestHeader("If-None-Match", re.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Gn + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers)
                x.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(h, x, d) === !1 || 2 === y))
                return x.abort();
            b = "abort";
            for (r in{success:1, error:1, complete:1})
                x[r](d[r]);
            if (c = P(Wn, d, e, x)) {
                x.readyState = 1, l && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function () {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    y = 1, c.send(v, n)
                } catch (w) {
                    if (!(2 > y))
                        throw w;
                    n(-1, w)
                }
            } else
                n(-1, "No Transport");
            return x
        }, getJSON: function (t, e, n) {
            return re.get(t, e, n, "json")
        }, getScript: function (t, e) {
            return re.get(t, void 0, e, "script")
        }}), re.each(["get", "post"], function (t, e) {
        re[e] = function (t, n, i, r) {
            return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({url: t, type: e, dataType: r, data: n, success: i})
        }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        re.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), re._evalUrl = function (t) {
        return re.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, re.fn.extend({wrapAll: function (t) {
            if (re.isFunction(t))
                return this.each(function (e) {
                    re(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        }, wrapInner: function (t) {
            return this.each(re.isFunction(t) ? function (e) {
                re(this).wrapInner(t.call(this, e))
            } : function () {
                var e = re(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = re.isFunction(t);
            return this.each(function (n) {
                re(this).wrapAll(e ? t.call(this, n) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }}), re.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }, re.expr.filters.visible = function (t) {
        return!re.expr.filters.hidden(t)
    };
    var Qn = /%20/g, Un = /\[\]$/, Vn = /\r?\n/g, Yn = /^(?:submit|button|image|reset|file)$/i, Zn = /^(?:input|select|textarea|keygen)/i;
    re.param = function (t, e) {
        var n, i = [], r = function (t, e) {
            e = re.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t))
            re.each(t, function () {
                r(this.name, this.value)
            });
        else
            for (n in t)
                W(n, t[n], e, r);
        return i.join("&").replace(Qn, "+")
    }, re.fn.extend({serialize: function () {
            return re.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Zn.test(this.nodeName) && !Yn.test(t) && (this.checked || !Ae.test(t))
            }).map(function (t, e) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function (t) {
                    return{name: e.name, value: t.replace(Vn, "\r\n")}
                }) : {name: e.name, value: n.replace(Vn, "\r\n")}
            }).get()
        }}), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && G() || X()
    } : G;
    var Kn = 0, Jn = {}, ti = re.ajaxSettings.xhr();
    t.ActiveXObject && re(t).on("unload", function () {
        for (var t in Jn)
            Jn[t](void 0, !0)
    }), ne.cors = !!ti && "withCredentials"in ti, ti = ne.ajax = !!ti, ti && re.ajaxTransport(function (t) {
        if (!t.crossDomain || ne.cors) {
            var e;
            return{send: function (n, i) {
                    var r, s = t.xhr(), o = ++Kn;
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields)
                            s[r] = t.xhrFields[r];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)
                        void 0 !== n[r] && s.setRequestHeader(r, n[r] + "");
                    s.send(t.hasContent && t.data || null), e = function (n, r) {
                        var a, l, c;
                        if (e && (r || 4 === s.readyState))
                            if (delete Jn[o], e = void 0, s.onreadystatechange = re.noop, r)
                                4 !== s.readyState && s.abort();
                            else {
                                c = {}, a = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (u) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                        c && i(a, l, c, s.getAllResponseHeaders())
                    }, t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = Jn[o] = e : e()
                }, abort: function () {
                    e && e(void 0, !0)
                }}
        }
    }), re.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (t) {
                return re.globalEval(t), t
            }}}), re.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), re.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n = fe.head || re("head")[0] || fe.documentElement;
            return{send: function (i, r) {
                    e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                }, abort: function () {
                    e && e.onload(void 0, !0)
                }}
        }
    });
    var ei = [], ni = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
            var t = ei.pop() || re.expando + "_" + Nn++;
            return this[t] = !0, t
        }}), re.ajaxPrefilter("json jsonp", function (e, n, i) {
        var r, s, o, a = e.jsonp !== !1 && (ni.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ni, "$1" + r) : e.jsonp !== !1 && (e.url += (Dn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || re.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function () {
            o = arguments
        }, i.always(function () {
            t[r] = s, e[r] && (e.jsonpCallback = n.jsonpCallback, ei.push(r)), o && re.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), re.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || fe;
        var i = de.exec(t), r = !n && [];
        return i ? [e.createElement(i[1])] : (i = re.buildFragment([t], e, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
    };
    var ii = re.fn.load;
    re.fn.load = function (t, e, n) {
        if ("string" != typeof t && ii)
            return ii.apply(this, arguments);
        var i, r, s, o = this, a = t.indexOf(" ");
        return a >= 0 && (i = re.trim(t.slice(a, t.length)), t = t.slice(0, a)), re.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (s = "POST"), o.length > 0 && re.ajax({url: t, type: s, dataType: "html", data: e}).done(function (t) {
            r = arguments, o.html(i ? re("<div>").append(re.parseHTML(t)).find(i) : t)
        }).complete(n && function (t, e) {
            o.each(n, r || [t.responseText, e, t])
        }), this
    }, re.expr.filters.animated = function (t) {
        return re.grep(re.timers, function (e) {
            return t === e.elem
        }).length
    };
    var ri = t.document.documentElement;
    re.offset = {setOffset: function (t, e, n) {
            var i, r, s, o, a, l, c, u = re.css(t, "position"), d = re(t), h = {};
            "static" === u && (t.style.position = "relative"), a = d.offset(), s = re.css(t, "top"), l = re.css(t, "left"), c = ("absolute" === u || "fixed" === u) && re.inArray("auto", [s, l]) > -1, c ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + r), "using"in e ? e.using.call(t, h) : d.css(h)
        }}, re.fn.extend({offset: function (t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function (e) {
                    re.offset.setOffset(this, t, e)
                });
            var e, n, i = {top: 0, left: 0}, r = this[0], s = r && r.ownerDocument;
            if (s)
                return e = s.documentElement, re.contains(e, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = Q(s), {top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)}) : i
        }, position: function () {
            if (this[0]) {
                var t, e, n = {top: 0, left: 0}, i = this[0];
                return"fixed" === re.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (n = t.offset()), n.top += re.css(t[0], "borderTopWidth", !0), n.left += re.css(t[0], "borderLeftWidth", !0)), {top: e.top - n.top - re.css(i, "marginTop", !0), left: e.left - n.left - re.css(i, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || ri; t && !re.nodeName(t, "html") && "static" === re.css(t, "position"); )
                    t = t.offsetParent;
                return t || ri
            })
        }}), re.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var n = /Y/.test(e);
        re.fn[t] = function (i) {
            return Fe(this, function (t, i, r) {
                var s = Q(t);
                return void 0 === r ? s ? e in s ? s[e] : s.document.documentElement[i] : t[i] : void(s ? s.scrollTo(n ? re(s).scrollLeft() : r, n ? r : re(s).scrollTop()) : t[i] = r)
            }, t, i, arguments.length, null)
        }
    }), re.each(["top", "left"], function (t, e) {
        re.cssHooks[e] = T(ne.pixelPosition, function (t, n) {
            return n ? (n = en(t, e), rn.test(n) ? re(t).position()[e] + "px" : n) : void 0
        })
    }), re.each({Height: "height", Width: "width"}, function (t, e) {
        re.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
            re.fn[i] = function (i, r) {
                var s = arguments.length && (n || "boolean" != typeof i), o = n || (i === !0 || r === !0 ? "margin" : "border");
                return Fe(this, function (e, n, i) {
                    var r;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? re.css(e, n, o) : re.style(e, n, i, o)
                }, e, s ? i : void 0, s, null)
            }
        })
    }), re.fn.size = function () {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return re
    });
    var si = t.jQuery, oi = t.$;
    return re.noConflict = function (e) {
        return t.$ === re && (t.$ = oi), e && t.jQuery === re && (t.jQuery = si), re
    }, typeof e === ke && (t.jQuery = t.$ = re), re
}), function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]", buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])", disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled", requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])", fileInputSelector: "input[type=file]", linkDisableSelector: "a[data-disable-with], a[data-disable]", buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]", CSRFProtection: function (e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        }, refreshCSRFTokens: function () {
            var e = t("meta[name=csrf-token]").attr("content"), n = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + n + '"]').val(e)
        }, fire: function (e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), r.result !== !1
        }, confirm: function (t) {
            return confirm(t)
        }, ajax: function (e) {
            return t.ajax(e)
        }, href: function (t) {
            return t.attr("href")
        }, handleRemote: function (i) {
            var r, s, o, a, l, c, u, d;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("cross-domain"), l = a === e ? null : a, c = i.data("with-credentials") || null, u = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.attr("method"), s = i.attr("action"), o = i.serializeArray();
                    var h = i.data("ujs:submit-button");
                    h && (o.push(h), i.data("ujs:submit-button", null))
                } else
                    i.is(n.inputChangeSelector) ? (r = i.data("method"), s = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", s = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : (r = i.data("method"), s = n.href(i), o = i.data("params") || null);
                return d = {type: r || "GET", data: o, dataType: u, beforeSend: function (t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r]) ? void i.trigger("ajax:send", t) : !1
                    }, success: function (t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    }, complete: function (t, e) {
                        i.trigger("ajax:complete", [t, e])
                    }, error: function (t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    }, crossDomain: l}, c && (d.xhrFields = {withCredentials: c}), s && (d.url = s), n.ajax(d)
            }
            return!1
        }, handleMethod: function (i) {
            var r = n.href(i), s = i.data("method"), o = i.attr("target"), a = t("meta[name=csrf-token]").attr("content"), l = t("meta[name=csrf-param]").attr("content"), c = t('<form method="post" action="' + r + '"></form>'), u = '<input name="_method" value="' + s + '" type="hidden" />';
            l !== e && a !== e && (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'), o && c.attr("target", o), c.hide().append(u).appendTo("body"), c.submit()
        }, formElements: function (e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        }, disableFormElements: function (e) {
            n.formElements(e, n.disableSelector).each(function () {
                n.disableFormElement(t(this))
            })
        }, disableFormElement: function (t) {
            var n, i;
            n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
        }, enableFormElements: function (e) {
            n.formElements(e, n.enableSelector).each(function () {
                n.enableFormElement(t(this))
            })
        }, enableFormElement: function (t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
        }, allowAction: function (t) {
            var e, i = t.data("confirm"), r = !1;
            return i ? (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e) : !0
        }, blankInputs: function (e, n, i) {
            var r, s, o = t(), a = n || "input,textarea", l = e.find(a);
            return l.each(function () {
                if (r = t(this), s = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !s == !i) {
                    if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length)
                        return!0;
                    o = o.add(r)
                }
            }), o.length ? o : !1
        }, nonBlankInputs: function (t, e) {
            return n.blankInputs(t, e, !0)
        }, stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        }, disableElement: function (t) {
            var i = t.data("disable-with");
            t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function (t) {
                return n.stopEverything(t)
            })
        }, enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }}, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(t(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function () {
        n.enableFormElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function (i) {
        var r = t(this), s = r.data("method"), o = r.data("params"), a = i.metaKey || i.ctrlKey;
        if (!n.allowAction(r))
            return n.stopEverything(i);
        if (!a && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e) {
            if (a && (!s || "GET" === s) && !o)
                return!0;
            var l = n.handleRemote(r);
            return l === !1 ? n.enableElement(r) : l.error(function () {
                n.enableElement(r)
            }), !1
        }
        return r.data("method") ? (n.handleMethod(r), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function (e) {
        var i = t(this);
        if (!n.allowAction(i))
            return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r === !1 ? n.enableFormElement(i) : r.error(function () {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function (e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
        var r, s, o = t(this), a = o.data("remote") !== e;
        if (!n.allowAction(o))
            return n.stopEverything(i);
        if (o.attr("novalidate") == e && (r = n.blankInputs(o, n.requiredInputSelector), r && n.fire(o, "ajax:aborted:required", [r])))
            return n.stopEverything(i);
        if (a) {
            if (s = n.nonBlankInputs(o, n.fileInputSelector)) {
                setTimeout(function () {
                    n.disableFormElements(o)
                }, 13);
                var l = n.fire(o, "ajax:aborted:file", [s]);
                return l || setTimeout(function () {
                    n.enableFormElements(o)
                }, 13), l
            }
            return n.handleRemote(o), !1
        }
        setTimeout(function () {
            n.disableFormElements(o)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function (e) {
        var i = t(this);
        if (!n.allowAction(i))
            return n.stopEverything(e);
        var r = i.attr("name"), s = r ? {name: r, value: i.val()} : null;
        i.closest("form").data("ujs:submit-button", s)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function (e) {
        this == e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function () {
        n.refreshCSRFTokens()
    }))
}(jQuery), function (t, e, n, i) {
    "use strict";
    function r(t) {
        return("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), t
    }
    var s = function (e) {
        for (var n = e.length, i = t("head"); n--; )
            0 === i.has("." + e[n]).length && i.append('<meta class="' + e[n] + '" />')
    };
    s(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), t(function () {
        "undefined" != typeof FastClick && "undefined" != typeof n.body && FastClick.attach(n.body)
    });
    var o = function (e, i) {
        if ("string" == typeof e) {
            if (i) {
                var r;
                if (i.jquery) {
                    if (r = i[0], !r)
                        return i
                } else
                    r = i;
                return t(r.querySelectorAll(e))
            }
            return t(n.querySelectorAll(e))
        }
        return t(e, i)
    }, a = function (t) {
        var e = [];
        return t || e.push("data"), this.namespace.length > 0 && e.push(this.namespace), e.push(this.name), e.join("-")
    }, l = function (t) {
        for (var e = t.split("-"), n = e.length, i = []; n--; )
            0 !== n ? i.push(e[n]) : this.namespace.length > 0 ? i.push(this.namespace, e[n]) : i.push(e[n]);
        return i.reverse().join("-")
    }, c = function (e, n) {
        var i = this, r = !o(this).data(this.attr_name(!0));
        return o(this.scope).is("[" + this.attr_name() + "]") ? (o(this.scope).data(this.attr_name(!0) + "-init", t.extend({}, this.settings, n || e, this.data_options(o(this.scope)))), r && this.events(this.scope)) : o("[" + this.attr_name() + "]", this.scope).each(function () {
            var r = !o(this).data(i.attr_name(!0) + "-init");
            o(this).data(i.attr_name(!0) + "-init", t.extend({}, i.settings, n || e, i.data_options(o(this)))), r && i.events(this)
        }), "string" == typeof e ? this[e].call(this, n) : void 0
    }, u = function (t, e) {
        function n() {
            e(t[0])
        }
        function i() {
            if (this.one("load", n), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var t = this.attr("src"), e = t.match(/\?/) ? "&" : "?";
                e += "random=" + (new Date).getTime(), this.attr("src", t + e)
            }
        }
        return t.attr("src") ? void(t[0].complete || 4 === t[0].readyState ? n() : i.call(t)) : void n()
    };
    e.matchMedia = e.matchMedia || function (t) {
        var e, n = t.documentElement, i = n.firstElementChild || n.firstChild, r = t.createElement("body"), s = t.createElement("div");
        return s.id = "mq-test-1", s.style.cssText = "position:absolute;top:-100em", r.style.background = "none", r.appendChild(s), function (t) {
            return s.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(r, i), e = 42 === s.offsetWidth, n.removeChild(r), {matches: e, media: t}
        }
    }(n), function () {
        function t() {
            n && (s(t), a && jQuery.fx.tick())
        }
        for (var n, i = 0, r = ["webkit", "moz"], s = e.requestAnimationFrame, o = e.cancelAnimationFrame, a = "undefined" != typeof jQuery.fx; i < r.length && !s; i++)
            s = e[r[i] + "RequestAnimationFrame"], o = o || e[r[i] + "CancelAnimationFrame"] || e[r[i] + "CancelRequestAnimationFrame"];
        s ? (e.requestAnimationFrame = s, e.cancelAnimationFrame = o, a && (jQuery.fx.timer = function (e) {
            e() && jQuery.timers.push(e) && !n && (n = !0, t())
        }, jQuery.fx.stop = function () {
            n = !1
        })) : (e.requestAnimationFrame = function (t) {
            var n = (new Date).getTime(), r = Math.max(0, 16 - (n - i)), s = e.setTimeout(function () {
                t(n + r)
            }, r);
            return i = n + r, s
        }, e.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        })
    }(jQuery), e.Foundation = {name: "Foundation", version: "5.4.5", media_queries: {small: o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), medium: o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), large: o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), xlarge: o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), xxlarge: o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")}, stylesheet: t("<style></style>").appendTo("head")[0].sheet, global: {namespace: i}, init: function (t, n, i, r, s) {
            var a = [t, i, r, s], l = [];
            if (this.rtl = /rtl/i.test(o("html").attr("dir")), this.scope = t || this.scope, this.set_namespace(), n && "string" == typeof n && !/reflow/i.test(n))
                this.libs.hasOwnProperty(n) && l.push(this.init_lib(n, a));
            else
                for (var c in this.libs)
                    l.push(this.init_lib(c, n));
            return o(e).load(function () {
                o(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
            }), t
        }, init_lib: function (e, n) {
            return this.libs.hasOwnProperty(e) ? (this.patch(this.libs[e]), n && n.hasOwnProperty(e) ? ("undefined" != typeof this.libs[e].settings ? t.extend(!0, this.libs[e].settings, n[e]) : "undefined" != typeof this.libs[e].defaults && t.extend(!0, this.libs[e].defaults, n[e]), this.libs[e].init.apply(this.libs[e], [this.scope, n[e]])) : (n = n instanceof Array ? n : new Array(n), this.libs[e].init.apply(this.libs[e], n))) : function () {
            }
        }, patch: function (t) {
            t.scope = this.scope, t.namespace = this.global.namespace, t.rtl = this.rtl, t.data_options = this.utils.data_options, t.attr_name = a, t.add_namespace = l, t.bindings = c, t.S = this.utils.S
        }, inherit: function (t, e) {
            for (var n = e.split(" "), i = n.length; i--; )
                this.utils.hasOwnProperty(n[i]) && (t[n[i]] = this.utils[n[i]])
        }, set_namespace: function () {
            var e = this.global.namespace === i ? t(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = e === i || /false/i.test(e) ? "" : e
        }, libs: {}, utils: {S: o, throttle: function (t, e) {
                var n = null;
                return function () {
                    var i = this, r = arguments;
                    null == n && (n = setTimeout(function () {
                        t.apply(i, r), n = null
                    }, e))
                }
            }, debounce: function (t, e, n) {
                var i, r;
                return function () {
                    var s = this, o = arguments, a = function () {
                        i = null, n || (r = t.apply(s, o))
                    }, l = n && !i;
                    return clearTimeout(i), i = setTimeout(a, e), l && (r = t.apply(s, o)), r
                }
            }, data_options: function (e, n) {
                function i(t) {
                    return!isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0
                }
                function r(e) {
                    return"string" == typeof e ? t.trim(e) : e
                }
                n = n || "options";
                var s, o, a, l = {}, c = function (t) {
                    var e = Foundation.global.namespace;
                    return t.data(e.length > 0 ? e + "-" + n : n)
                }, u = c(e);
                if ("object" == typeof u)
                    return u;
                for (a = (u || ":").split(";"), s = a.length; s--; )
                    o = a[s].split(":"), o = [o[0], o.slice(1).join(":")], /true/i.test(o[1]) && (o[1] = !0), /false/i.test(o[1]) && (o[1] = !1), i(o[1]) && (o[1] = -1 === o[1].indexOf(".") ? parseInt(o[1], 10) : parseFloat(o[1])), 2 === o.length && o[0].length > 0 && (l[r(o[0])] = r(o[1]));
                return l
            }, register_media: function (e, n) {
                Foundation.media_queries[e] === i && (t("head").append('<meta class="' + n + '"/>'), Foundation.media_queries[e] = r(t("." + n).css("font-family")))
            }, add_custom_rule: function (t, e) {
                if (e === i && Foundation.stylesheet)
                    Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length);
                else {
                    var n = Foundation.media_queries[e];
                    n !== i && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }")
                }
            }, image_loaded: function (t, e) {
                var n = this, i = t.length;
                0 === i && e(t), t.each(function () {
                    u(n.S(this), function () {
                        i -= 1, 0 === i && e(t)
                    })
                })
            }, random_str: function () {
                return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
            }}}, t.fn.foundation = function () {
        var t = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            return Foundation.init.apply(Foundation, [this].concat(t)), this
        })
    }
}(jQuery, window, window.document), function (t, e, n) {
    "use strict";
    Foundation.libs.abide = {name: "abide", version: "5.4.5", settings: {live_validate: !0, focus_on_invalid: !0, error_labels: !0, timeout: 1e3, patterns: {alpha: /^[a-zA-Z]+$/, alpha_numeric: /^[a-zA-Z0-9]+$/, integer: /^[-+]?\d+$/, number: /^[-+]?\d*(?:[\.\,]\d+)?$/, card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, cvv: /^([0-9]){3,4}$/, email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/, url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/, domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/, datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/, date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/, time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/, dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/, month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/, day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/, color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/}, validators: {equalTo: function (t) {
                    var e = n.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value, i = t.value, r = e === i;
                    return r
                }}}, timer: null, init: function (t, e, n) {
            this.bindings(e, n)
        }, events: function (e) {
            var n = this, i = n.S(e).attr("novalidate", "novalidate"), r = i.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid"), i.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function (t) {
                var e = /ajax/i.test(n.S(this).attr(n.attr_name()));
                return n.validate(n.S(this).find("input, textarea, select").get(), t, e)
            }).on("reset", function () {
                return n.reset(t(this))
            }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function (t) {
                n.validate([this], t)
            }).on("keydown.fndtn.abide", function (t) {
                r.live_validate === !0 && (clearTimeout(n.timer), n.timer = setTimeout(function () {
                    n.validate([this], t)
                }.bind(this), r.timeout))
            })
        }, reset: function (e) {
            e.removeAttr(this.invalid_attr), t(this.invalid_attr, e).removeAttr(this.invalid_attr), t(".error", e).not("small").removeClass("error")
        }, validate: function (t, e, n) {
            for (var i = this.parse_patterns(t), r = i.length, s = this.S(t[0]).closest("form"), o = /submit/.test(e.type), a = 0; r > a; a++)
                if (!i[a] && (o || n))
                    return this.settings.focus_on_invalid && t[a].focus(), s.trigger("invalid"), this.S(t[a]).closest("form").attr(this.invalid_attr, ""), !1;
            return(o || n) && s.trigger("valid"), s.removeAttr(this.invalid_attr), n ? !1 : !0
        }, parse_patterns: function (t) {
            for (var e = t.length, n = []; e--; )
                n.push(this.pattern(t[e]));
            return this.check_validation_and_apply_styles(n)
        }, pattern: function (t) {
            var e = t.getAttribute("type"), n = "string" == typeof t.getAttribute("required"), i = t.getAttribute("pattern") || "";
            return this.settings.patterns.hasOwnProperty(i) && i.length > 0 ? [t, this.settings.patterns[i], n] : i.length > 0 ? [t, new RegExp(i), n] : this.settings.patterns.hasOwnProperty(e) ? [t, this.settings.patterns[e], n] : (i = /.*/, [t, i, n])
        }, check_validation_and_apply_styles: function (e) {
            var n = e.length, i = [], r = this.S(e[0][0]).closest("[data-" + this.attr_name(!0) + "]");
            for (r.data(this.attr_name(!0) + "-init") || {}; n--; ) {
                var s, o, a = e[n][0], l = e[n][2], c = a.value.trim(), u = this.S(a).parent(), d = a.getAttribute(this.add_namespace("data-abide-validator")), h = "radio" === a.type, p = "checkbox" === a.type, f = this.S('label[for="' + a.getAttribute("id") + '"]'), g = l ? a.value.length > 0 : !0, m = [];
                if (a.getAttribute(this.add_namespace("data-equalto")) && (d = "equalTo"), s = u.is("label") ? u.parent() : u, d && (o = this.settings.validators[d].apply(this, [a, l, s]), m.push(o)), h && l)
                    m.push(this.valid_radio(a, l));
                else if (p && l)
                    m.push(this.valid_checkbox(a, l));
                else {
                    if (m.push(e[n][1].test(c) && g || !l && a.value.length < 1 || t(a).attr("disabled") ? !0 : !1), m = [m.every(function (t) {
                            return t
                        })], m[0])
                        this.S(a).removeAttr(this.invalid_attr), a.setAttribute("aria-invalid", "false"), a.removeAttribute("aria-describedby"), s.removeClass("error"), f.length > 0 && this.settings.error_labels && f.removeClass("error").removeAttr("role"), t(a).triggerHandler("valid");
                    else {
                        this.S(a).attr(this.invalid_attr, ""), a.setAttribute("aria-invalid", "true");
                        var v = s.find("small.error, span.error"), _ = v.length > 0 ? v[0].id : "";
                        _.length > 0 && a.setAttribute("aria-describedby", _), s.addClass("error"), f.length > 0 && this.settings.error_labels && f.addClass("error").attr("role", "alert"), t(a).triggerHandler("invalid")
                    }
                    i.push(m[0])
                }
            }
            return i = [i.every(function (t) {
                    return t
                })]
        }, valid_checkbox: function (t, e) {
            var t = this.S(t), n = t.is(":checked") || !e;
            return n ? t.removeAttr(this.invalid_attr).parent().removeClass("error") : t.attr(this.invalid_attr, "").parent().addClass("error"), n
        }, valid_radio: function (t) {
            for (var e = t.getAttribute("name"), n = this.S(t).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + e + "']"), i = n.length, r = !1, s = 0; i > s; s++)
                n[s].checked && (r = !0);
            for (var s = 0; i > s; s++)
                r ? this.S(n[s]).removeAttr(this.invalid_attr).parent().removeClass("error") : this.S(n[s]).attr(this.invalid_attr, "").parent().addClass("error");
            return r
        }, valid_equal: function (t, e, i) {
            var r = n.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value, s = t.value, o = r === s;
            return o ? (this.S(t).removeAttr(this.invalid_attr), i.removeClass("error"), label.length > 0 && settings.error_labels && label.removeClass("error")) : (this.S(t).attr(this.invalid_attr, ""), i.addClass("error"), label.length > 0 && settings.error_labels && label.addClass("error")), o
        }, valid_oneof: function (t, e, n, i) {
            var t = this.S(t), r = this.S("[" + this.add_namespace("data-oneof") + "]"), s = r.filter(":checked").length > 0;
            if (s ? t.removeAttr(this.invalid_attr).parent().removeClass("error") : t.attr(this.invalid_attr, "").parent().addClass("error"), !i) {
                var o = this;
                r.each(function () {
                    o.valid_oneof.call(o, this, null, null, !0)
                })
            }
            return s
        }}
}(jQuery, window, window.document), function (t) {
    "use strict";
    Foundation.libs.accordion = {name: "accordion", version: "5.4.5", settings: {active_class: "active", multi_expand: !1, toggleable: !0, callback: function () {
            }}, init: function (t, e, n) {
            this.bindings(e, n)
        }, events: function () {
            var e = this, n = this.S;
            n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a", function (i) {
                var r = n(this).closest("[" + e.attr_name() + "]"), s = e.attr_name() + "=" + r.attr(e.attr_name()), o = r.data(e.attr_name(!0) + "-init"), a = n("#" + this.href.split("#")[1]), l = t("> dd", r), c = l.children(".content"), u = c.filter("." + o.active_class);
                return i.preventDefault(), r.attr(e.attr_name()) && (c = c.add("[" + s + "] dd > .content"), l = l.add("[" + s + "] dd")), o.toggleable && a.is(u) ? (a.parent("dd").toggleClass(o.active_class, !1), a.toggleClass(o.active_class, !1), o.callback(a), a.triggerHandler("toggled", [r]), void r.triggerHandler("toggled", [a])) : (o.multi_expand || (c.removeClass(o.active_class), l.removeClass(o.active_class)), a.addClass(o.active_class).parent().addClass(o.active_class), o.callback(a), a.triggerHandler("toggled", [r]), void r.triggerHandler("toggled", [a]))
            })
        }, off: function () {
        }, reflow: function () {
        }}
}(jQuery, window, window.document), function (t) {
    "use strict";
    Foundation.libs.alert = {name: "alert", version: "5.4.5", settings: {callback: function () {
            }}, init: function (t, e, n) {
            this.bindings(e, n)
        }, events: function () {
            var e = this, n = this.S;
            t(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function (t) {
                var i = n(this).closest("[" + e.attr_name() + "]"), r = i.data(e.attr_name(!0) + "-init") || e.settings;
                t.preventDefault(), Modernizr.csstransitions ? (i.addClass("alert-close"), i.on("transitionend webkitTransitionEnd oTransitionEnd", function () {
                    n(this).trigger("close").trigger("close.fndtn.alert").remove(), r.callback()
                })) : i.fadeOut(300, function () {
                    n(this).trigger("close").trigger("close.fndtn.alert").remove(), r.callback()
                })
            })
        }, reflow: function () {
        }}
}(jQuery, window, window.document), function (t, e, n, i) {
    "use strict";
    Foundation.libs.clearing = {name: "clearing", version: "5.4.5", settings: {templates: {viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'}, close_selectors: ".clearing-close, div.clearing-blackout", open_selectors: "", skip_selector: "", touch_label: "", init: !1, locked: !1}, init: function (t, e, n) {
            var i = this;
            Foundation.inherit(this, "throttle image_loaded"), this.bindings(e, n), i.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(i.S("li", this.scope)) : i.S("[" + this.attr_name() + "]", this.scope).each(function () {
                i.assemble(i.S("li", this))
            })
        }, events: function (i) {
            var r = this, s = r.S, o = t(".scroll-container");
            o.length > 0 && (this.scope = o), s(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function (t, e, n) {
                var e = e || s(this), n = n || e, i = e.next("li"), o = e.closest("[" + r.attr_name() + "]").data(r.attr_name(!0) + "-init"), a = s(t.target);
                t.preventDefault(), o || (r.init(), o = e.closest("[" + r.attr_name() + "]").data(r.attr_name(!0) + "-init")), n.hasClass("visible") && e[0] === n[0] && i.length > 0 && r.is_open(e) && (n = i, a = s("img", n)), r.open(a, e, n), r.update_paddles(n)
            }).on("click.fndtn.clearing", ".clearing-main-next", function (t) {
                r.nav(t, "next")
            }).on("click.fndtn.clearing", ".clearing-main-prev", function (t) {
                r.nav(t, "prev")
            }).on("click.fndtn.clearing", this.settings.close_selectors, function (t) {
                Foundation.libs.clearing.close(t, this)
            }), t(n).on("keydown.fndtn.clearing", function (t) {
                r.keydown(t)
            }), s(e).off(".clearing").on("resize.fndtn.clearing", function () {
                r.resize()
            }), this.swipe_events(i)
        }, swipe_events: function () {
            var t = this, e = t.S;
            e(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function (t) {
                t.touches || (t = t.originalEvent);
                var n = {start_page_x: t.touches[0].pageX, start_page_y: t.touches[0].pageY, start_time: (new Date).getTime(), delta_x: 0, is_scrolling: i};
                e(this).data("swipe-transition", n), t.stopPropagation()
            }).on("touchmove.fndtn.clearing", ".visible-img", function (n) {
                if (n.touches || (n = n.originalEvent), !(n.touches.length > 1 || n.scale && 1 !== n.scale)) {
                    var i = e(this).data("swipe-transition");
                    if ("undefined" == typeof i && (i = {}), i.delta_x = n.touches[0].pageX - i.start_page_x, Foundation.rtl && (i.delta_x = -i.delta_x), "undefined" == typeof i.is_scrolling && (i.is_scrolling = !!(i.is_scrolling || Math.abs(i.delta_x) < Math.abs(n.touches[0].pageY - i.start_page_y))), !i.is_scrolling && !i.active) {
                        n.preventDefault();
                        var r = i.delta_x < 0 ? "next" : "prev";
                        i.active = !0, t.nav(n, r)
                    }
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function (t) {
                e(this).data("swipe-transition", {}), t.stopPropagation()
            })
        }, assemble: function (e) {
            var n = e.parent();
            if (!n.parent().hasClass("carousel")) {
                n.after('<div id="foundationClearingHolder"></div>');
                var i = n.detach(), r = "";
                if (null != i[0]) {
                    r = i[0].outerHTML;
                    var s = this.S("#foundationClearingHolder"), o = n.data(this.attr_name(!0) + "-init"), a = {grid: '<div class="carousel">' + r + "</div>", viewing: o.templates.viewing}, l = '<div class="clearing-assembled"><div>' + a.viewing + a.grid + "</div></div>", c = this.settings.touch_label;
                    Modernizr.touch && (l = t(l).find(".clearing-touch-label").html(c).end()), s.after(l).remove()
                }
            }
        }, open: function (e, i, r) {
            function s() {
                setTimeout(function () {
                    this.image_loaded(h, function () {
                        1 !== h.outerWidth() || f ? o.call(this, h) : s.call(this)
                    }.bind(this))
                }.bind(this), 100)
            }
            function o(e) {
                var n = t(e);
                n.css("visibility", "visible"), l.css("overflow", "hidden"), c.addClass("clearing-blackout"), u.addClass("clearing-container"), d.show(), this.fix_height(r).caption(a.S(".clearing-caption", d), a.S("img", r)).center_and_label(e, p).shift(i, r, function () {
                    r.closest("li").siblings().removeClass("visible"), r.closest("li").addClass("visible")
                }), d.trigger("opened.fndtn.clearing")
            }
            var a = this, l = t(n.body), c = r.closest(".clearing-assembled"), u = a.S("div", c).first(), d = a.S(".visible-img", u), h = a.S("img", d).not(e), p = a.S(".clearing-touch-label", u), f = !1;
            t("body").on("touchmove", function (t) {
                t.preventDefault()
            }), h.error(function () {
                f = !0
            }), this.locked() || (d.trigger("open.fndtn.clearing"), h.attr("src", this.load(e)).css("visibility", "hidden"), s.call(this))
        }, close: function (e, i) {
            e.preventDefault();
            var r, s, o = function (t) {
                return/blackout/.test(t.selector) ? t : t.closest(".clearing-blackout")
            }(t(i)), a = t(n.body);
            return i === e.target && o && (a.css("overflow", ""), r = t("div", o).first(), s = t(".visible-img", r), s.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, t("ul[" + this.attr_name() + "]", o).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), r.removeClass("clearing-container"), s.hide(), s.trigger("closed.fndtn.clearing")), t("body").off("touchmove"), !1
        }, is_open: function (t) {
            return t.parent().prop("style").length > 0
        }, keydown: function (e) {
            var n = t(".clearing-blackout ul[" + this.attr_name() + "]"), i = this.rtl ? 37 : 39, r = this.rtl ? 39 : 37, s = 27;
            e.which === i && this.go(n, "next"), e.which === r && this.go(n, "prev"), e.which === s && this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")
        }, nav: function (e, n) {
            var i = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
            e.preventDefault(), this.go(i, n)
        }, resize: function () {
            var e = t("img", ".clearing-blackout .visible-img"), n = t(".clearing-touch-label", ".clearing-blackout");
            e.length && (this.center_and_label(e, n), e.trigger("resized.fndtn.clearing"))
        }, fix_height: function (t) {
            var e = t.parent().children(), n = this;
            return e.each(function () {
                var t = n.S(this), e = t.find("img");
                t.height() > e.outerHeight() && t.addClass("fix-height")
            }).closest("ul").width(100 * e.length + "%"), this
        }, update_paddles: function (t) {
            t = t.closest("li");
            var e = t.closest(".carousel").siblings(".visible-img");
            t.next().length > 0 ? this.S(".clearing-main-next", e).removeClass("disabled") : this.S(".clearing-main-next", e).addClass("disabled"), t.prev().length > 0 ? this.S(".clearing-main-prev", e).removeClass("disabled") : this.S(".clearing-main-prev", e).addClass("disabled")
        }, center_and_label: function (t, e) {
            return this.rtl ? (t.css({marginRight: -(t.outerWidth() / 2), marginTop: -(t.outerHeight() / 2), left: "auto", right: "50%"}), e.length > 0 && e.css({marginRight: -(e.outerWidth() / 2), marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10, left: "auto", right: "50%"})) : (t.css({marginLeft: -(t.outerWidth() / 2), marginTop: -(t.outerHeight() / 2)}), e.length > 0 && e.css({marginLeft: -(e.outerWidth() / 2), marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10})), this
        }, load: function (t) {
            var e;
            return e = "A" === t[0].nodeName ? t.attr("href") : t.parent().attr("href"), this.preload(t), e ? e : t.attr("src")
        }, preload: function (t) {
            this.img(t.closest("li").next()).img(t.closest("li").prev())
        }, img: function (t) {
            if (t.length) {
                var e = new Image, n = this.S("a", t);
                e.src = n.length ? n.attr("href") : this.S("img", t).attr("src")
            }
            return this
        }, caption: function (t, e) {
            var n = e.attr("data-caption");
            return n ? t.html(n).show() : t.text("").hide(), this
        }, go: function (t, e) {
            var n = this.S(".visible", t), i = n[e]();
            this.settings.skip_selector && 0 != i.find(this.settings.skip_selector).length && (i = i[e]()), i.length && this.S("img", i).trigger("click", [n, i]).trigger("click.fndtn.clearing", [n, i]).trigger("change.fndtn.clearing")
        }, shift: function (t, e, n) {
            var i, r = e.parent(), s = this.settings.prev_index || e.index(), o = this.direction(r, t, e), a = this.rtl ? "right" : "left", l = parseInt(r.css("left"), 10), c = e.outerWidth(), u = {};
            e.index() === s || /skip/.test(o) ? /skip/.test(o) && (i = e.index() - this.settings.up_count, this.lock(), i > 0 ? (u[a] = -(i * c), r.animate(u, 300, this.unlock())) : (u[a] = 0, r.animate(u, 300, this.unlock()))) : /left/.test(o) ? (this.lock(), u[a] = l + c, r.animate(u, 300, this.unlock())) : /right/.test(o) && (this.lock(), u[a] = l - c, r.animate(u, 300, this.unlock())), n()
        }, direction: function (t, e, n) {
            var i, r = this.S("li", t), s = r.outerWidth() + r.outerWidth() / 4, o = Math.floor(this.S(".clearing-container").outerWidth() / s) - 1, a = r.index(n);
            return this.settings.up_count = o, i = this.adjacent(this.settings.prev_index, a) ? a > o && a > this.settings.prev_index ? "right" : a > o - 1 && a <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = a, i
        }, adjacent: function (t, e) {
            for (var n = e + 1; n >= e - 1; n--)
                if (n === t)
                    return!0;
            return!1
        }, lock: function () {
            this.settings.locked = !0
        }, unlock: function () {
            this.settings.locked = !1
        }, locked: function () {
            return this.settings.locked
        }, off: function () {
            this.S(this.scope).off(".fndtn.clearing"), this.S(e).off(".fndtn.clearing")
        }, reflow: function () {
            this.init()
        }}
}(jQuery, window, window.document), function (t, e) {
    "use strict";
    Foundation.libs.dropdown = {name: "dropdown", version: "5.4.5", settings: {active_class: "open", mega_class: "mega", align: "bottom", is_hover: !1, opened: function () {
            }, closed: function () {
            }}, init: function (t, e, n) {
            Foundation.inherit(this, "throttle"), this.bindings(e, n)
        }, events: function () {
            var n = this, i = n.S;
            i(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function (e) {
                var r = i(this).data(n.attr_name(!0) + "-init") || n.settings;
                (!r.is_hover || Modernizr.touch) && (e.preventDefault(), n.toggle(t(this)))
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function (t) {
                var e, r, s = i(this);
                clearTimeout(n.timeout), s.data(n.data_attr()) ? (e = i("#" + s.data(n.data_attr())), r = s) : (e = s, r = i("[" + n.attr_name() + "='" + e.attr("id") + "']"));
                var o = r.data(n.attr_name(!0) + "-init") || n.settings;
                i(t.target).data(n.data_attr()) && o.is_hover && n.closeall.call(n), o.is_hover && n.open.apply(n, [e, r])
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function () {
                var t = i(this);
                n.timeout = setTimeout(function () {
                    if (t.data(n.data_attr())) {
                        var e = t.data(n.data_attr(!0) + "-init") || n.settings;
                        e.is_hover && n.close.call(n, i("#" + t.data(n.data_attr())))
                    } else {
                        var r = i("[" + n.attr_name() + '="' + i(this).attr("id") + '"]'), e = r.data(n.attr_name(!0) + "-init") || n.settings;
                        e.is_hover && n.close.call(n, t)
                    }
                }.bind(this), 150)
            }).on("click.fndtn.dropdown", function (e) {
                var r = i(e.target).closest("[" + n.attr_name() + "-content]");
                if (!(i(e.target).closest("[" + n.attr_name() + "]").length > 0))
                    return!i(e.target).data("revealId") && r.length > 0 && (i(e.target).is("[" + n.attr_name() + "-content]") || t.contains(r.first()[0], e.target)) ? void e.stopPropagation() : void n.close.call(n, i("[" + n.attr_name() + "-content]"))
            }).on("opened.fndtn.dropdown", "[" + n.attr_name() + "-content]", function () {
                n.settings.opened.call(this)
            }).on("closed.fndtn.dropdown", "[" + n.attr_name() + "-content]", function () {
                n.settings.closed.call(this)
            }), i(e).off(".dropdown").on("resize.fndtn.dropdown", n.throttle(function () {
                n.resize.call(n)
            }, 50)), this.resize()
        }, close: function (e) {
            var n = this;
            e.each(function () {
                var i = t("[" + n.attr_name() + "=" + e[0].id + "]") || t("aria-controls=" + e[0].id + "]");
                i.attr("aria-expanded", "false"), n.S(this).hasClass(n.settings.active_class) && (n.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(n.settings.active_class).prev("[" + n.attr_name() + "]").removeClass(n.settings.active_class).removeData("target"), n.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [e]))
            })
        }, closeall: function () {
            var e = this;
            t.each(e.S("[" + this.attr_name() + "-content]"), function () {
                e.close.call(e, e.S(this))
            })
        }, open: function (t, e) {
            this.css(t.addClass(this.settings.active_class), e), t.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), t.data("target", e.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [t, e]), t.attr("aria-hidden", "false"), e.attr("aria-expanded", "true"), t.focus()
        }, data_attr: function () {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
        }, toggle: function (t) {
            var e = this.S("#" + t.data(this.data_attr()));
            0 !== e.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(e)), e.hasClass(this.settings.active_class) ? (this.close.call(this, e), e.data("target") !== t.get(0) && this.open.call(this, e, t)) : this.open.call(this, e, t))
        }, resize: function () {
            var t = this.S("[" + this.attr_name() + "-content].open"), e = this.S("[" + this.attr_name() + "='" + t.attr("id") + "']");
            t.length && e.length && this.css(t, e)
        }, css: function (t, e) {
            var n = Math.max((e.width() - t.width()) / 2, 8), i = e.data(this.attr_name(!0) + "-init") || this.settings;
            if (this.clear_idx(), this.small()) {
                var r = this.dirs.bottom.call(t, e, i);
                t.attr("style", "").removeClass("drop-left drop-right drop-top").css({position: "absolute", width: "95%", "max-width": "none", top: r.top}), t.css(Foundation.rtl ? "right" : "left", n)
            } else
                this.style(t, e, i);
            return t
        }, style: function (e, n, i) {
            var r = t.extend({position: "absolute"}, this.dirs[i.align].call(e, n, i));
            e.attr("style", "").css(r)
        }, dirs: {_base: function (t) {
                var e = this.offsetParent(), n = e.offset(), i = t.offset();
                return i.top -= n.top, i.left -= n.left, i
            }, top: function (t, e) {
                var n = Foundation.libs.dropdown, i = n.dirs._base.call(this, t);
                return this.addClass("drop-top"), (t.outerWidth() < this.outerWidth() || n.small() || this.hasClass(e.mega_menu)) && n.adjust_pip(this, t, e, i), Foundation.rtl ? {left: i.left - this.outerWidth() + t.outerWidth(), top: i.top - this.outerHeight()} : {left: i.left, top: i.top - this.outerHeight()}
            }, bottom: function (t, e) {
                var n = Foundation.libs.dropdown, i = n.dirs._base.call(this, t);
                return(t.outerWidth() < this.outerWidth() || n.small() || this.hasClass(e.mega_menu)) && n.adjust_pip(this, t, e, i), n.rtl ? {left: i.left - this.outerWidth() + t.outerWidth(), top: i.top + t.outerHeight()} : {left: i.left, top: i.top + t.outerHeight()}
            }, left: function (t) {
                var e = Foundation.libs.dropdown.dirs._base.call(this, t);
                return this.addClass("drop-left"), {left: e.left - this.outerWidth(), top: e.top}
            }, right: function (t) {
                var e = Foundation.libs.dropdown.dirs._base.call(this, t);
                return this.addClass("drop-right"), {left: e.left + t.outerWidth(), top: e.top}
            }}, adjust_pip: function (t, e, n, i) {
            var r = Foundation.stylesheet, s = 8;
            t.hasClass(n.mega_class) ? s = i.left + e.outerWidth() / 2 - 8 : this.small() && (s += i.left - 8), this.rule_idx = r.cssRules.length;
            var o = ".f-dropdown.open:before", a = ".f-dropdown.open:after", l = "left: " + s + "px;", c = "left: " + (s - 1) + "px;";
            r.insertRule ? (r.insertRule([o, "{", l, "}"].join(" "), this.rule_idx), r.insertRule([a, "{", c, "}"].join(" "), this.rule_idx + 1)) : (r.addRule(o, l, this.rule_idx), r.addRule(a, c, this.rule_idx + 1))
        }, clear_idx: function () {
            var t = Foundation.stylesheet;
            this.rule_idx && (t.deleteRule(this.rule_idx), t.deleteRule(this.rule_idx), delete this.rule_idx)
        }, small: function () {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        }, off: function () {
            this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(e).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
        }, reflow: function () {
        }}
}(jQuery, window, window.document), function (t, e) {
    "use strict";
    Foundation.libs.interchange = {name: "interchange", version: "5.4.5", cache: {}, images_loaded: !1, nodes_loaded: !1, settings: {load_attr: "interchange", named_queries: {"default": "only screen", small: Foundation.media_queries.small, medium: Foundation.media_queries.medium, large: Foundation.media_queries.large, xlarge: Foundation.media_queries.xlarge, xxlarge: Foundation.media_queries.xxlarge, landscape: "only screen and (orientation: landscape)", portrait: "only screen and (orientation: portrait)", retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"}, directives: {replace: function (e, n, i) {
                    if (/IMG/.test(e[0].nodeName)) {
                        var r = e[0].src;
                        if (new RegExp(n, "i").test(r))
                            return;
                        return e[0].src = n, i(e[0].src)
                    }
                    var s = e.data(this.data_attr + "-last-path"), o = this;
                    if (s != n)
                        return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(n) ? (t(e).css("background-image", "url(" + n + ")"), e.data("interchange-last-path", n), i(n)) : t.get(n, function (t) {
                            e.html(t), e.data(o.data_attr + "-last-path", n), i()
                        })
                }}}, init: function (e, n, i) {
            Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), t.extend(!0, this.settings, n, i), this.bindings(n, i), this.load("images"), this.load("nodes")
        }, get_media_hash: function () {
            var t = "";
            for (var e in this.settings.named_queries)
                t += matchMedia(this.settings.named_queries[e]).matches.toString();
            return t
        }, events: function () {
            var n, i = this;
            return t(e).off(".interchange").on("resize.fndtn.interchange", i.throttle(function () {
                var t = i.get_media_hash();
                t !== n && i.resize(), n = t
            }, 50)), this
        }, resize: function () {
            var e = this.cache;
            if (!this.images_loaded || !this.nodes_loaded)
                return void setTimeout(t.proxy(this.resize, this), 50);
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var i = this.results(n, e[n]);
                    i && this.settings.directives[i.scenario[1]].call(this, i.el, i.scenario[0], function () {
                        if (arguments[0]instanceof Array)
                            var t = arguments[0];
                        else
                            var t = Array.prototype.slice.call(arguments, 0);
                        i.el.trigger(i.scenario[1], t)
                    })
                }
        }, results: function (t, e) {
            var n = e.length;
            if (n > 0)
                for (var i = this.S("[" + this.add_namespace("data-uuid") + '="' + t + '"]'); n--; ) {
                    var r, s = e[n][2];
                    if (r = matchMedia(this.settings.named_queries.hasOwnProperty(s) ? this.settings.named_queries[s] : s), r.matches)
                        return{el: i, scenario: e[n]}
                }
            return!1
        }, load: function (t, e) {
            return("undefined" == typeof this["cached_" + t] || e) && this["update_" + t](), this["cached_" + t]
        }, update_images: function () {
            var t = this.S("img[" + this.data_attr + "]"), e = t.length, n = e, i = 0, r = this.data_attr;
            for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === e; n--; ) {
                if (i++, t[n]) {
                    var s = t[n].getAttribute(r) || "";
                    s.length > 0 && this.cached_images.push(t[n])
                }
                i === e && (this.images_loaded = !0, this.enhance("images"))
            }
            return this
        }, update_nodes: function () {
            var t = this.S("[" + this.data_attr + "]").not("img"), e = t.length, n = e, i = 0, r = this.data_attr;
            for (this.cached_nodes = [], this.nodes_loaded = 0 === e; n--; ) {
                i++;
                var s = t[n].getAttribute(r) || "";
                s.length > 0 && this.cached_nodes.push(t[n]), i === e && (this.nodes_loaded = !0, this.enhance("nodes"))
            }
            return this
        }, enhance: function (n) {
            for (var i = this["cached_" + n].length; i--; )
                this.object(t(this["cached_" + n][i]));
            return t(e).trigger("resize").trigger("resize.fndtn.interchange")
        }, convert_directive: function (t) {
            var e = this.trim(t);
            return e.length > 0 ? e : "replace"
        }, parse_scenario: function (t) {
            var e = t[0].match(/(.+),\s*(\w+)\s*$/), n = t[1];
            if (e)
                var i = e[1], r = e[2];
            else
                var s = t[0].split(/,\s*$/), i = s[0], r = "";
            return[this.trim(i), this.convert_directive(r), this.trim(n)]
        }, object: function (t) {
            var e = this.parse_data_attr(t), n = [], i = e.length;
            if (i > 0)
                for (; i--; ) {
                    var r = e[i].split(/\((.*?)(\))$/);
                    if (r.length > 1) {
                        var s = this.parse_scenario(r);
                        n.push(s)
                    }
                }
            return this.store(t, n)
        }, store: function (t, e) {
            var n = this.random_str(), i = t.data(this.add_namespace("uuid", !0));
            return this.cache[i] ? this.cache[i] : (t.attr(this.add_namespace("data-uuid"), n), this.cache[n] = e)
        }, trim: function (e) {
            return"string" == typeof e ? t.trim(e) : e
        }, set_data_attr: function (t) {
            return t ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
        }, parse_data_attr: function (t) {
            for (var e = t.attr(this.attr_name()).split(/\[(.*?)\]/), n = e.length, i = []; n--; )
                e[n].replace(/[\W\d]+/, "").length > 4 && i.push(e[n]);
            return i
        }, reflow: function () {
            this.load("images", !0), this.load("nodes", !0)
        }}
}(jQuery, window, window.document), function (t, e, n, i) {
    "use strict";
    Foundation.libs.joyride = {name: "joyride", version: "5.4.5", defaults: {expose: !1, modal: !0, keyboard: !0, tip_location: "bottom", nub_position: "auto", scroll_speed: 1500, scroll_animation: "linear", timer: 0, start_timer_on_click: !0, start_offset: 0, next_button: !0, prev_button: !0, tip_animation: "fade", pause_after: [], exposed: [], tip_animation_fade_speed: 300, cookie_monster: !1, cookie_name: "joyride", cookie_domain: !1, cookie_expires: 365, tip_container: "body", abort_on_close: !0, tip_location_patterns: {top: ["bottom"], bottom: [], left: ["right", "top", "bottom"], right: ["left", "top", "bottom"]}, post_ride_callback: function () {
            }, post_step_callback: function () {
            }, pre_step_callback: function () {
            }, pre_ride_callback: function () {
            }, post_expose_callback: function () {
            }, template: {link: '<a href="#close" class="joyride-close-tip">&times;</a>', timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>', tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>', wrapper: '<div class="joyride-content-wrapper"></div>', button: '<a href="#" class="small button joyride-next-tip"></a>', prev_button: '<a href="#" class="small button joyride-prev-tip"></a>', modal: '<div class="joyride-modal-bg"></div>', expose: '<div class="joyride-expose-wrapper"></div>', expose_cover: '<div class="joyride-expose-cover"></div>'}, expose_add_class: ""}, init: function (e, n, i) {
            Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || t.extend({}, this.defaults, i || n), this.bindings(n, i)
        }, go_next: function () {
            this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
        }, go_prev: function () {
            this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)))
        }, events: function () {
            var n = this;
            t(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function (t) {
                t.preventDefault(), this.go_next()
            }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function (t) {
                t.preventDefault(), this.go_prev()
            }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function (t) {
                t.preventDefault(), this.end(this.settings.abort_on_close)
            }.bind(this)).on("keyup.joyride", function (t) {
                if (this.settings.keyboard)
                    switch (t.which) {
                        case 39:
                            t.preventDefault(), this.go_next();
                            break;
                        case 37:
                            t.preventDefault(), this.go_prev();
                            break;
                        case 27:
                            t.preventDefault(), this.end(this.settings.abort_on_close)
                        }
            }.bind(this)), t(e).off(".joyride").on("resize.fndtn.joyride", n.throttle(function () {
                if (t("[" + n.attr_name() + "]").length > 0 && n.settings.$next_tip && n.settings.riding) {
                    if (n.settings.exposed.length > 0) {
                        var e = t(n.settings.exposed);
                        e.each(function () {
                            var e = t(this);
                            n.un_expose(e), n.expose(e)
                        })
                    }
                    n.is_phone() ? n.pos_phone() : n.pos_default(!1)
                }
            }, 100))
        }, start: function () {
            var e = this, n = t("[" + this.attr_name() + "]", this.scope), i = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"], r = i.length;
            !n.length > 0 || (this.settings.init || this.events(), this.settings = n.data(this.attr_name(!0) + "-init"), this.settings.$content_el = n, this.settings.$body = t(this.settings.tip_container), this.settings.body_offset = t(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, this.settings.riding = !0, "function" != typeof t.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !t.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function (n) {
                var s = t(this);
                this.settings = t.extend({}, e.defaults, e.data_options(s));
                for (var o = r; o--; )
                    e.settings[i[o]] = parseInt(e.settings[i[o]], 10);
                e.create({$li: s, index: n})
            }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
        }, resume: function () {
            this.set_li(), this.show()
        }, tip_template: function (e) {
            var n, i;
            return e.tip_class = e.tip_class || "", n = t(this.settings.template.tip).addClass(e.tip_class), i = t.trim(t(e.li).html()) + this.prev_button_text(e.prev_button_text, e.index) + this.button_text(e.button_text) + this.settings.template.link + this.timer_instance(e.index), n.append(t(this.settings.template.wrapper)), n.first().attr(this.add_namespace("data-index"), e.index), t(".joyride-content-wrapper", n).append(i), n[0]
        }, timer_instance: function (e) {
            var n;
            return n = 0 === e && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : t(this.settings.template.timer)[0].outerHTML
        }, button_text: function (e) {
            return this.settings.tip_settings.next_button ? (e = t.trim(e) || "Next", e = t(this.settings.template.button).append(e)[0].outerHTML) : e = "", e
        }, prev_button_text: function (e, n) {
            return this.settings.tip_settings.prev_button ? (e = t.trim(e) || "Previous", e = 0 == n ? t(this.settings.template.prev_button).append(e).addClass("disabled")[0].outerHTML : t(this.settings.template.prev_button).append(e)[0].outerHTML) : e = "", e
        }, create: function (e) {
            this.settings.tip_settings = t.extend({}, this.settings, this.data_options(e.$li));
            var n = e.$li.attr(this.add_namespace("data-button")) || e.$li.attr(this.add_namespace("data-text")), i = e.$li.attr(this.add_namespace("data-button-prev")) || e.$li.attr(this.add_namespace("data-prev-text")), r = e.$li.attr("class"), s = t(this.tip_template({tip_class: r, index: e.index, button_text: n, prev_button_text: i, li: e.$li}));
            t(this.settings.tip_container).append(s)
        }, show: function (e, n) {
            var r = null;
            this.settings.$li === i || -1 === t.inArray(this.settings.$li.index(), this.settings.pause_after) ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(e, n), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (e && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = t.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), r = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (r.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function () {
                r.animate({width: r.parent().width()}, this.settings.timer, "linear")
            }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (r.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function () {
                r.animate({width: r.parent().width()}, this.settings.timer, "linear")
            }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show() : this.end()) : this.settings.paused = !0
        }, is_phone: function () {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        }, hide: function () {
            this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || t(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(t.proxy(function () {
                this.hide(), this.css("visibility", "visible")
            }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
        }, set_li: function (t, e) {
            t ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = e ? this.settings.$li.prev() : this.settings.$li.next(), this.set_next_tip()), this.set_target()
        }, set_next_tip: function () {
            this.settings.$next_tip = t(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
        }, set_target: function () {
            var e = this.settings.$li.attr(this.add_namespace("data-class")), i = this.settings.$li.attr(this.add_namespace("data-id")), r = function () {
                return i ? t(n.getElementById(i)) : e ? t("." + e).first() : t("body")
            };
            this.settings.$target = r()
        }, scroll_to: function () {
            var n, i;
            n = t(e).height() / 2, i = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight()), 0 != i && t("html, body").stop().animate({scrollTop: i}, this.settings.scroll_speed, "swing")
        }, paused: function () {
            return -1 === t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
        }, restart: function () {
            this.hide(), this.settings.$li = i, this.show("init")
        }, pos_default: function (t) {
            var e = this.settings.$next_tip.find(".joyride-nub"), n = Math.ceil(e.outerWidth() / 2), i = Math.ceil(e.outerHeight() / 2), r = t || !1;
            if (r && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector))
                this.settings.$li.length && this.pos_modal(e);
            else {
                var s = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0, o = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {top: this.settings.$target.offset().top + i + this.settings.$target.outerHeight() + s, left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + o} : {top: this.settings.$target.offset().top + i + this.settings.$target.outerHeight() + s, left: this.settings.$target.offset().left + o}), this.nub_position(e, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - i + s, left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()} : {top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - i + s, left: this.settings.$target.offset().left + o}), this.nub_position(e, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({top: this.settings.$target.offset().top + s, left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + n + o}), this.nub_position(e, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({top: this.settings.$target.offset().top + s, left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - n + o}), this.nub_position(e, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
            }
            r && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        }, pos_phone: function (e) {
            var n = this.settings.$next_tip.outerHeight(), i = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()), r = t(".joyride-nub", this.settings.$next_tip), s = Math.ceil(r.outerHeight() / 2), o = e || !1;
            r.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), o && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(r) : this.top() ? (this.settings.$next_tip.offset({top: this.settings.$target.offset().top - n - s}), r.addClass("bottom")) : (this.settings.$next_tip.offset({top: this.settings.$target.offset().top + i + s}), r.addClass("top")), o && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        }, pos_modal: function (t) {
            this.center(), t.hide(), this.show_modal()
        }, show_modal: function () {
            if (!this.settings.$next_tip.data("closed")) {
                var e = t(".joyride-modal-bg");
                e.length < 1 && t("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? e.show() : e.fadeIn(this.settings.tip_animation_fade_speed)
            }
        }, expose: function () {
            var n, i, r, s, o, a = "expose-" + this.random_str(6);
            if (arguments.length > 0 && arguments[0]instanceof t)
                r = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector))
                    return!1;
                r = this.settings.$target
            }
            return r.length < 1 ? (e.console && console.error("element not valid", r), !1) : (n = t(this.settings.template.expose), this.settings.$body.append(n), n.css({top: r.offset().top, left: r.offset().left, width: r.outerWidth(!0), height: r.outerHeight(!0)}), i = t(this.settings.template.expose_cover), s = {zIndex: r.css("z-index"), position: r.css("position")}, o = null == r.attr("class") ? "" : r.attr("class"), r.css("z-index", parseInt(n.css("z-index")) + 1), "static" == s.position && r.css("position", "relative"), r.data("expose-css", s), r.data("orig-class", o), r.attr("class", o + " " + this.settings.expose_add_class), i.css({top: r.offset().top, left: r.offset().left, width: r.outerWidth(!0), height: r.outerHeight(!0)}), this.settings.modal && this.show_modal(), this.settings.$body.append(i), n.addClass(a), i.addClass(a), r.data("expose", a), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, r), void this.add_exposed(r))
        }, un_expose: function () {
            var n, i, r, s, o, a = !1;
            if (arguments.length > 0 && arguments[0]instanceof t)
                i = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector))
                    return!1;
                i = this.settings.$target
            }
            return i.length < 1 ? (e.console && console.error("element not valid", i), !1) : (n = i.data("expose"), r = t("." + n), arguments.length > 1 && (a = arguments[1]), a === !0 ? t(".joyride-expose-wrapper,.joyride-expose-cover").remove() : r.remove(), s = i.data("expose-css"), "auto" == s.zIndex ? i.css("z-index", "") : i.css("z-index", s.zIndex), s.position != i.css("position") && ("static" == s.position ? i.css("position", "") : i.css("position", s.position)), o = i.data("orig-class"), i.attr("class", o), i.removeData("orig-classes"), i.removeData("expose"), i.removeData("expose-z-index"), void this.remove_exposed(i))
        }, add_exposed: function (e) {
            this.settings.exposed = this.settings.exposed || [], e instanceof t || "object" == typeof e ? this.settings.exposed.push(e[0]) : "string" == typeof e && this.settings.exposed.push(e)
        }, remove_exposed: function (e) {
            var n, i;
            for (e instanceof t?n = e[0]:"string" == typeof e && (n = e), this.settings.exposed = this.settings.exposed || [], i = this.settings.exposed.length; i--; )
                if (this.settings.exposed[i] == n)
                    return void this.settings.exposed.splice(i, 1)
        }, center: function () {
            var n = t(e);
            return this.settings.$next_tip.css({top: (n.height() - this.settings.$next_tip.outerHeight()) / 2 + n.scrollTop(), left: (n.width() - this.settings.$next_tip.outerWidth()) / 2 + n.scrollLeft()}), !0
        }, bottom: function () {
            return/bottom/i.test(this.settings.tip_settings.tip_location)
        }, top: function () {
            return/top/i.test(this.settings.tip_settings.tip_location)
        }, right: function () {
            return/right/i.test(this.settings.tip_settings.tip_location)
        }, left: function () {
            return/left/i.test(this.settings.tip_settings.tip_location)
        }, corners: function (n) {
            var i = t(e), r = i.height() / 2, s = Math.ceil(this.settings.$target.offset().top - r + this.settings.$next_tip.outerHeight()), o = i.width() + i.scrollLeft(), a = i.height() + s, l = i.height() + i.scrollTop(), c = i.scrollTop();
            return c > s && (c = 0 > s ? 0 : s), a > l && (l = a), [n.offset().top < c, o < n.offset().left + n.outerWidth(), l < n.offset().top + n.outerHeight(), i.scrollLeft() > n.offset().left]
        }, visible: function (t) {
            for (var e = t.length; e--; )
                if (t[e])
                    return!1;
            return!0
        }, nub_position: function (t, e, n) {
            t.addClass("auto" === e ? n : e)
        }, startTimer: function () {
            this.settings.$li.length ? this.settings.automate = setTimeout(function () {
                this.hide(), this.show(), this.startTimer()
            }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
        }, end: function (e) {
            this.settings.cookie_monster && t.cookie(this.settings.cookie_name, "ridden", {expires: this.settings.cookie_expires, domain: this.settings.cookie_domain}), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), t(this.scope).off("keyup.joyride"), this.settings.$next_tip.data("closed", !0), this.settings.riding = !1, t(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), ("undefined" == typeof e || e === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), t(".joyride-tip-guide").remove()
        }, off: function () {
            t(this.scope).off(".joyride"), t(e).off(".joyride"), t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), t(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
        }, reflow: function () {
        }}
}(jQuery, window, window.document), function (t, e) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {name: "magellan-expedition", version: "5.4.5", settings: {active_class: "active", threshold: 0, destination_threshold: 20, throttle_delay: 30, fixed_top: 0}, init: function (t, e, n) {
            Foundation.inherit(this, "throttle"), this.bindings(e, n)
        }, events: function () {
            var n = this, i = n.S, r = n.settings;
            n.set_expedition_position(), i(n.scope).off(".magellan").on("click.fndtn.magellan", "[" + n.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function (e) {
                e.preventDefault();
                var i = t(this).closest("[" + n.attr_name() + "]"), r = i.data("magellan-expedition-init"), s = this.hash.split("#").join(""), o = t("a[name='" + s + "']");
                0 === o.length && (o = t("#" + s));
                var a = o.offset().top - r.destination_threshold + 1;
                a -= i.outerHeight(), t("html, body").stop().animate({scrollTop: a}, 700, "swing", function () {
                    history.pushState ? history.pushState(null, null, "#" + s) : location.hash = "#" + s
                })
            }).on("scroll.fndtn.magellan", n.throttle(this.check_for_arrivals.bind(this), r.throttle_delay)), t(e).on("resize.fndtn.magellan", n.throttle(this.set_expedition_position.bind(this), r.throttle_delay))
        }, check_for_arrivals: function () {
            var t = this;
            t.update_arrivals(), t.update_expedition_positions()
        }, set_expedition_position: function () {
            var e = this;
            t("[" + this.attr_name() + "=fixed]", e.scope).each(function () {
                var n, i, r = t(this), s = r.data("magellan-expedition-init"), o = r.attr("styles");
                r.attr("style", ""), n = r.offset().top + s.threshold, i = parseInt(r.data("magellan-fixed-top")), isNaN(i) || (e.settings.fixed_top = i), r.data(e.data_attr("magellan-top-offset"), n), r.attr("style", o)
            })
        }, update_expedition_positions: function () {
            var n = this, i = t(e).scrollTop();
            t("[" + this.attr_name() + "=fixed]", n.scope).each(function () {
                var e = t(this), r = e.data("magellan-expedition-init"), s = e.attr("style"), o = e.data("magellan-top-offset");
                if (i + n.settings.fixed_top >= o) {
                    var a = e.prev("[" + n.add_namespace("data-magellan-expedition-clone") + "]");
                    0 === a.length && (a = e.clone(), a.removeAttr(n.attr_name()), a.attr(n.add_namespace("data-magellan-expedition-clone"), ""), e.before(a)), e.css({position: "fixed", top: r.fixed_top}).addClass("fixed")
                } else
                    e.prev("[" + n.add_namespace("data-magellan-expedition-clone") + "]").remove(), e.attr("style", s).css("position", "").css("top", "").removeClass("fixed")
            })
        }, update_arrivals: function () {
            var n = this, i = t(e).scrollTop();
            t("[" + this.attr_name() + "]", n.scope).each(function () {
                var e = t(this), r = e.data(n.attr_name(!0) + "-init"), s = n.offsets(e, i), o = e.find("[" + n.add_namespace("data-magellan-arrival") + "]"), a = !1;
                s.each(function (t, i) {
                    if (i.viewport_offset >= i.top_offset) {
                        var s = e.find("[" + n.add_namespace("data-magellan-arrival") + "]");
                        return s.not(i.arrival).removeClass(r.active_class), i.arrival.addClass(r.active_class), a = !0, !0
                    }
                }), a || o.removeClass(r.active_class)
            })
        }, offsets: function (e, n) {
            var i = this, r = e.data(i.attr_name(!0) + "-init"), s = n;
            return e.find("[" + i.add_namespace("data-magellan-arrival") + "]").map(function () {
                var n = t(this).data(i.data_attr("magellan-arrival")), o = t("[" + i.add_namespace("data-magellan-destination") + "=" + n + "]");
                if (o.length > 0) {
                    var a = Math.floor(o.offset().top - r.destination_threshold - e.outerHeight());
                    return{destination: o, arrival: t(this), top_offset: a, viewport_offset: s}
                }
            }).sort(function (t, e) {
                return t.top_offset < e.top_offset ? -1 : t.top_offset > e.top_offset ? 1 : 0
            })
        }, data_attr: function (t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        }, off: function () {
            this.S(this.scope).off(".magellan"), this.S(e).off(".magellan")
        }, reflow: function () {
            var e = this;
            t("[" + e.add_namespace("data-magellan-expedition-clone") + "]", e.scope).remove()
        }}
}(jQuery, window, window.document), function (t) {
    "use strict";
    Foundation.libs.offcanvas = {name: "offcanvas", version: "5.4.5", settings: {open_method: "move", close_on_click: !1}, init: function (t, e, n) {
            this.bindings(e, n)
        }, events: function () {
            var e = this, n = e.S, i = "", r = "", s = "";
            "move" === this.settings.open_method ? (i = "move-", r = "right", s = "left") : "overlap_single" === this.settings.open_method ? (i = "offcanvas-overlap-", r = "right", s = "left") : "overlap" === this.settings.open_method && (i = "offcanvas-overlap"), n(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function (s) {
                e.click_toggle_class(s, i + r), "overlap" !== e.settings.open_method && n(".left-submenu").removeClass(i + r), t(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function (s) {
                var o = e.get_settings(s), a = n(this).parent();
                !o.close_on_click || a.hasClass("has-submenu") || a.hasClass("back") ? n(this).parent().hasClass("has-submenu") ? (s.preventDefault(), n(this).siblings(".left-submenu").toggleClass(i + r)) : a.hasClass("back") && (s.preventDefault(), a.parent().removeClass(i + r)) : (e.hide.call(e, i + r, e.get_wrapper(s)), a.parent().removeClass(i + r)), t(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function (r) {
                e.click_toggle_class(r, i + s), "overlap" !== e.settings.open_method && n(".right-submenu").removeClass(i + s), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function (r) {
                var o = e.get_settings(r), a = n(this).parent();
                !o.close_on_click || a.hasClass("has-submenu") || a.hasClass("back") ? n(this).parent().hasClass("has-submenu") ? (r.preventDefault(), n(this).siblings(".right-submenu").toggleClass(i + s)) : a.hasClass("back") && (r.preventDefault(), a.parent().removeClass(i + s)) : (e.hide.call(e, i + s, e.get_wrapper(r)), a.parent().removeClass(i + s)), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function (o) {
                e.click_remove_class(o, i + s), n(".right-submenu").removeClass(i + s), r && (e.click_remove_class(o, i + r), n(".left-submenu").removeClass(i + s)), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function (n) {
                e.click_remove_class(n, i + s), t(".left-off-canvas-toggle").attr("aria-expanded", "false"), r && (e.click_remove_class(n, i + r), t(".right-off-canvas-toggle").attr("aria-expanded", "false"))
            })
        }, toggle: function (t, e) {
            e = e || this.get_wrapper(), e.is("." + t) ? this.hide(t, e) : this.show(t, e)
        }, show: function (t, e) {
            e = e || this.get_wrapper(), e.trigger("open").trigger("open.fndtn.offcanvas"), e.addClass(t)
        }, hide: function (t, e) {
            e = e || this.get_wrapper(), e.trigger("close").trigger("close.fndtn.offcanvas"), e.removeClass(t)
        }, click_toggle_class: function (t, e) {
            t.preventDefault();
            var n = this.get_wrapper(t);
            this.toggle(e, n)
        }, click_remove_class: function (t, e) {
            t.preventDefault();
            var n = this.get_wrapper(t);
            this.hide(e, n)
        }, get_settings: function (t) {
            var e = this.S(t.target).closest("[" + this.attr_name() + "]");
            return e.data(this.attr_name(!0) + "-init") || this.settings
        }, get_wrapper: function (t) {
            var e = this.S(t ? t.target : this.scope).closest(".off-canvas-wrap");
            return 0 === e.length && (e = this.S(".off-canvas-wrap")), e
        }, reflow: function () {
        }}
}(jQuery, window, window.document), function (t, e, n, i) {
    "use strict";
    var r = function () {
    }, s = function (r, s) {
        if (r.hasClass(s.slides_container_class))
            return this;
        var c, u, d, h, p, f, g = this, m = r, v = 0, _ = !1;
        g.slides = function () {
            return m.children(s.slide_selector)
        }, g.slides().first().addClass(s.active_slide_class), g.update_slide_number = function (e) {
            s.slide_number && (u.find("span:first").text(parseInt(e) + 1), u.find("span:last").text(g.slides().length)), s.bullets && (d.children().removeClass(s.bullets_active_class), t(d.children().get(e)).addClass(s.bullets_active_class))
        }, g.update_active_link = function (e) {
            var n = t('[data-orbit-link="' + g.slides().eq(e).attr("data-orbit-slide") + '"]');
            n.siblings().removeClass(s.bullets_active_class), n.addClass(s.bullets_active_class)
        }, g.build_markup = function () {
            m.wrap('<div class="' + s.container_class + '"></div>'), c = m.parent(), m.addClass(s.slides_container_class), s.stack_on_small && c.addClass(s.stack_on_small_class), s.navigation_arrows && (c.append(t('<a href="#"><span></span></a>').addClass(s.prev_class)), c.append(t('<a href="#"><span></span></a>').addClass(s.next_class))), s.timer && (h = t("<div>").addClass(s.timer_container_class), h.append("<span>"), h.append(t("<div>").addClass(s.timer_progress_class)), h.addClass(s.timer_paused_class), c.append(h)), s.slide_number && (u = t("<div>").addClass(s.slide_number_class), u.append("<span></span> " + s.slide_number_text + " <span></span>"), c.append(u)), s.bullets && (d = t("<ol>").addClass(s.bullets_container_class), c.append(d), d.wrap('<div class="orbit-bullets-container"></div>'), g.slides().each(function (e) {
                var n = t("<li>").attr("data-orbit-slide", e).on("click", g.link_bullet);
                d.append(n)
            }))
        }, g._goto = function (e, n) {
            if (e === v)
                return!1;
            "object" == typeof f && f.restart();
            var i = g.slides(), r = "next";
            if (_ = !0, v > e && (r = "prev"), e >= i.length) {
                if (!s.circular)
                    return!1;
                e = 0
            } else if (0 > e) {
                if (!s.circular)
                    return!1;
                e = i.length - 1
            }
            var o = t(i.get(v)), a = t(i.get(e));
            o.css("zIndex", 2), o.removeClass(s.active_slide_class), a.css("zIndex", 4).addClass(s.active_slide_class), m.trigger("before-slide-change.fndtn.orbit"), s.before_slide_change(), g.update_active_link(e);
            var l = function () {
                var t = function () {
                    v = e, _ = !1, n === !0 && (f = g.create_timer(), f.start()), g.update_slide_number(v), m.trigger("after-slide-change.fndtn.orbit", [{slide_number: v, total_slides: i.length}]), s.after_slide_change(v, i.length)
                };
                m.height() != a.height() && s.variable_height ? m.animate({height: a.height()}, 250, "linear", t) : t()
            };
            if (1 === i.length)
                return l(), !1;
            var c = function () {
                "next" === r && p.next(o, a, l), "prev" === r && p.prev(o, a, l)
            };
            a.height() > m.height() && s.variable_height ? m.animate({height: a.height()}, 250, "linear", c) : c()
        }, g.next = function (t) {
            t.stopImmediatePropagation(), t.preventDefault(), g._goto(v + 1)
        }, g.prev = function (t) {
            t.stopImmediatePropagation(), t.preventDefault(), g._goto(v - 1)
        }, g.link_custom = function (e) {
            e.preventDefault();
            var n = t(this).attr("data-orbit-link");
            if ("string" == typeof n && "" != (n = t.trim(n))) {
                var i = c.find("[data-orbit-slide=" + n + "]");
                -1 != i.index() && g._goto(i.index())
            }
        }, g.link_bullet = function () {
            var e = t(this).attr("data-orbit-slide");
            if ("string" == typeof e && "" != (e = t.trim(e)))
                if (isNaN(parseInt(e))) {
                    var n = c.find("[data-orbit-slide=" + e + "]");
                    -1 != n.index() && g._goto(n.index() + 1)
                } else
                    g._goto(parseInt(e))
        }, g.timer_callback = function () {
            g._goto(v + 1, !0)
        }, g.compute_dimensions = function () {
            var e = t(g.slides().get(v)), n = e.height();
            s.variable_height || g.slides().each(function () {
                t(this).height() > n && (n = t(this).height())
            }), m.height(n)
        }, g.create_timer = function () {
            var t = new o(c.find("." + s.timer_container_class), s, g.timer_callback);
            return t
        }, g.stop_timer = function () {
            "object" == typeof f && f.stop()
        }, g.toggle_timer = function () {
            var t = c.find("." + s.timer_container_class);
            t.hasClass(s.timer_paused_class) ? ("undefined" == typeof f && (f = g.create_timer()), f.start()) : "object" == typeof f && f.stop()
        }, g.init = function () {
            g.build_markup(), s.timer && (f = g.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), f.start)), p = new l(s, m), "slide" === s.animation && (p = new a(s, m)), c.on("click", "." + s.next_class, g.next), c.on("click", "." + s.prev_class, g.prev), s.next_on_click && c.on("click", "." + s.slides_container_class + " [data-orbit-slide]", g.link_bullet), c.on("click", g.toggle_timer), s.swipe && c.on("touchstart.fndtn.orbit", function (t) {
                t.touches || (t = t.originalEvent);
                var e = {start_page_x: t.touches[0].pageX, start_page_y: t.touches[0].pageY, start_time: (new Date).getTime(), delta_x: 0, is_scrolling: i};
                c.data("swipe-transition", e), t.stopPropagation()
            }).on("touchmove.fndtn.orbit", function (t) {
                if (t.touches || (t = t.originalEvent), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                    var e = c.data("swipe-transition");
                    if ("undefined" == typeof e && (e = {}), e.delta_x = t.touches[0].pageX - e.start_page_x, "undefined" == typeof e.is_scrolling && (e.is_scrolling = !!(e.is_scrolling || Math.abs(e.delta_x) < Math.abs(t.touches[0].pageY - e.start_page_y))), !e.is_scrolling && !e.active) {
                        t.preventDefault();
                        var n = e.delta_x < 0 ? v + 1 : v - 1;
                        e.active = !0, g._goto(n)
                    }
                }
            }).on("touchend.fndtn.orbit", function (t) {
                c.data("swipe-transition", {}), t.stopPropagation()
            }), c.on("mouseenter.fndtn.orbit", function () {
                s.timer && s.pause_on_hover && g.stop_timer()
            }).on("mouseleave.fndtn.orbit", function () {
                s.timer && s.resume_on_mouseout && f.start()
            }), t(n).on("click", "[data-orbit-link]", g.link_custom), t(e).on("load resize", g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function () {
                c.prev("." + s.preloader_class).css("display", "none"), g.update_slide_number(0), g.update_active_link(0), m.trigger("ready.fndtn.orbit")
            })
        }, g.init()
    }, o = function (t, e, n) {
        var i, r, s = this, o = e.timer_speed, a = t.find("." + e.timer_progress_class), l = -1;
        this.update_progress = function (t) {
            var e = a.clone();
            e.attr("style", ""), e.css("width", t + "%"), a.replaceWith(e), a = e
        }, this.restart = function () {
            clearTimeout(r), t.addClass(e.timer_paused_class), l = -1, s.update_progress(0)
        }, this.start = function () {
            return t.hasClass(e.timer_paused_class) ? (l = -1 === l ? o : l, t.removeClass(e.timer_paused_class), i = (new Date).getTime(), a.animate({width: "100%"}, l, "linear"), r = setTimeout(function () {
                s.restart(), n()
            }, l), void t.trigger("timer-started.fndtn.orbit")) : !0
        }, this.stop = function () {
            if (t.hasClass(e.timer_paused_class))
                return!0;
            clearTimeout(r), t.addClass(e.timer_paused_class);
            var n = (new Date).getTime();
            l -= n - i;
            var a = 100 - l / o * 100;
            s.update_progress(a), t.trigger("timer-stopped.fndtn.orbit")
        }
    }, a = function (e) {
        var n = e.animation_speed, i = 1 === t("html[dir=rtl]").length, r = i ? "marginRight" : "marginLeft", s = {};
        s[r] = "0%", this.next = function (t, e, i) {
            t.animate({marginLeft: "-100%"}, n), e.animate(s, n, function () {
                t.css(r, "100%"), i()
            })
        }, this.prev = function (t, e, i) {
            t.animate({marginLeft: "100%"}, n), e.css(r, "-100%"), e.animate(s, n, function () {
                t.css(r, "100%"), i()
            })
        }
    }, l = function (e) {
        {
            var n = e.animation_speed;
            1 === t("html[dir=rtl]").length
        }
        this.next = function (t, e, i) {
            e.css({margin: "0%", opacity: "0.01"}), e.animate({opacity: "1"}, n, "linear", function () {
                t.css("margin", "100%"), i()
            })
        }, this.prev = function (t, e, i) {
            e.css({margin: "0%", opacity: "0.01"}), e.animate({opacity: "1"}, n, "linear", function () {
                t.css("margin", "100%"), i()
            })
        }
    };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {name: "orbit", version: "5.4.5", settings: {animation: "slide", timer_speed: 1e4, pause_on_hover: !0, resume_on_mouseout: !1, next_on_click: !0, animation_speed: 500, stack_on_small: !1, navigation_arrows: !0, slide_number: !0, slide_number_text: "of", container_class: "orbit-container", stack_on_small_class: "orbit-stack-on-small", next_class: "orbit-next", prev_class: "orbit-prev", timer_container_class: "orbit-timer", timer_paused_class: "paused", timer_progress_class: "orbit-progress", slides_container_class: "orbit-slides-container", preloader_class: "preloader", slide_selector: "*", bullets_container_class: "orbit-bullets", bullets_active_class: "active", slide_number_class: "orbit-slide-number", caption_class: "orbit-caption", active_slide_class: "active", orbit_transition_class: "orbit-transitioning", bullets: !0, circular: !0, timer: !0, variable_height: !1, swipe: !0, before_slide_change: r, after_slide_change: r}, init: function (t, e, n) {
            this.bindings(e, n)
        }, events: function (t) {
            var e = new s(this.S(t), this.S(t).data("orbit-init"));
            this.S(t).data(this.name + "-instance", e)
        }, reflow: function () {
            var t = this;
            if (t.S(t.scope).is("[data-orbit]")) {
                var e = t.S(t.scope), n = e.data(t.name + "-instance");
                n.compute_dimensions()
            } else
                t.S("[data-orbit]", t.scope).each(function (e, n) {
                    var i = t.S(n), r = (t.data_options(i), i.data(t.name + "-instance"));
                    r.compute_dimensions()
                })
        }}
}(jQuery, window, window.document), function (t, e, n, i) {
    "use strict";
    function r(t) {
        var e = /fade/i.test(t), n = /pop/i.test(t);
        return{animate: e || n, pop: n, fade: e}
    }
    Foundation.libs.reveal = {name: "reveal", version: "5.4.5", locked: !1, settings: {animation: "fadeAndPop", animation_speed: 250, close_on_background_click: !0, close_on_esc: !0, dismiss_modal_class: "close-reveal-modal", bg_class: "reveal-modal-bg", root_element: "body", open: function () {
            }, opened: function () {
            }, close: function () {
            }, closed: function () {
            }, bg: t(".reveal-modal-bg"), css: {open: {opacity: 0, visibility: "visible", display: "block"}, close: {opacity: 1, visibility: "hidden", display: "none"}}}, init: function (e, n, i) {
            t.extend(!0, this.settings, n, i), this.bindings(n, i)
        }, events: function () {
            var t = this, e = t.S;
            return e(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function (n) {
                if (n.preventDefault(), !t.locked) {
                    var i = e(this), r = i.data(t.data_attr("reveal-ajax"));
                    if (t.locked = !0, "undefined" == typeof r)
                        t.open.call(t, i);
                    else {
                        var s = r === !0 ? i.attr("href") : r;
                        t.open.call(t, i, {url: s})
                    }
                }
            }), e(n).on("click.fndtn.reveal", this.close_targets(), function (n) {
                if (n.preventDefault(), !t.locked) {
                    var i = e("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init"), r = e(n.target)[0] === e("." + i.bg_class)[0];
                    if (r) {
                        if (!i.close_on_background_click)
                            return;
                        n.stopPropagation()
                    }
                    t.locked = !0, t.close.call(t, r ? e("[" + t.attr_name() + "].open") : e(this).closest("[" + t.attr_name() + "]"))
                }
            }), e("[" + t.attr_name() + "]", this.scope).length > 0 ? e(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : e(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
        }, key_up_on: function () {
            var t = this;
            return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function (e) {
                var n = t.S("[" + t.attr_name() + "].open"), i = n.data(t.attr_name(!0) + "-init") || t.settings;
                i && 27 === e.which && i.close_on_esc && !t.locked && t.close.call(t, n)
            }), !0
        }, key_up_off: function () {
            return this.S("body").off("keyup.fndtn.reveal"), !0
        }, open: function (n, i) {
            var r, s = this;
            n ? "undefined" != typeof n.selector ? r = s.S("#" + n.data(s.data_attr("reveal-id"))).first() : (r = s.S(this.scope), i = n) : r = s.S(this.scope);
            var o = r.data(s.attr_name(!0) + "-init");
            if (o = o || this.settings, r.hasClass("open") && n.attr("data-reveal-id") == r.attr("id"))
                return s.close(r);
            if (!r.hasClass("open")) {
                var a = s.S("[" + s.attr_name() + "].open");
                if ("undefined" == typeof r.data("css-top") && r.data("css-top", parseInt(r.css("top"), 10)).data("offset", this.cache_offset(r)), this.key_up_on(r), r.trigger("open").trigger("open.fndtn.reveal"), a.length < 1 && this.toggle_bg(r, !0), "string" == typeof i && (i = {url: i}), "undefined" != typeof i && i.url) {
                    var l = "undefined" != typeof i.success ? i.success : null;
                    t.extend(i, {success: function (e, n, i) {
                            t.isFunction(l) && l(e, n, i), r.html(e), s.S(r).foundation("section", "reflow"), s.S(r).children().foundation(), a.length > 0 && s.hide(a, o.css.close), s.show(r, o.css.open)
                        }}), t.ajax(i)
                } else
                    a.length > 0 && this.hide(a, o.css.close), this.show(r, o.css.open)
            }
            s.S(e).trigger("resize")
        }, close: function (t) {
            var t = t && t.length ? t : this.S(this.scope), e = this.S("[" + this.attr_name() + "].open"), n = t.data(this.attr_name(!0) + "-init") || this.settings;
            e.length > 0 && (this.locked = !0, this.key_up_off(t), t.trigger("close").trigger("close.fndtn.reveal"), this.toggle_bg(t, !1), this.hide(e, n.css.close, n))
        }, close_targets: function () {
            var t = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? t + ", ." + this.settings.bg_class : t
        }, toggle_bg: function (e, n) {
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = t("<div />", {"class": this.settings.bg_class}).appendTo("body").hide());
            var r = this.settings.bg.filter(":visible").length > 0;
            n != r && ((n == i ? r : !n) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        }, show: function (n, i) {
            if (i) {
                var s = n.data(this.attr_name(!0) + "-init") || this.settings, o = s.root_element;
                if (0 === n.parent(o).length) {
                    var a = n.wrap('<div style="display: none;" />').parent();
                    n.on("closed.fndtn.reveal.wrapped", function () {
                        n.detach().appendTo(a), n.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    }), n.detach().appendTo(o)
                }
                var l = r(s.animation);
                if (l.animate || (this.locked = !1), l.pop) {
                    i.top = t(e).scrollTop() - n.data("offset") + "px";
                    var c = {top: t(e).scrollTop() + n.data("css-top") + "px", opacity: 1};
                    return setTimeout(function () {
                        return n.css(i).animate(c, s.animation_speed, "linear", function () {
                            this.locked = !1, n.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), s.animation_speed / 2)
                }
                if (l.fade) {
                    i.top = t(e).scrollTop() + n.data("css-top") + "px";
                    var c = {opacity: 1};
                    return setTimeout(function () {
                        return n.css(i).animate(c, s.animation_speed, "linear", function () {
                            this.locked = !1, n.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), s.animation_speed / 2)
                }
                return n.css(i).show().css({opacity: 1}).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
            }
            var s = this.settings;
            return r(s.animation).fade ? n.fadeIn(s.animation_speed / 2) : (this.locked = !1, n.show())
        }, hide: function (n, i) {
            if (i) {
                var s = n.data(this.attr_name(!0) + "-init");
                s = s || this.settings;
                var o = r(s.animation);
                if (o.animate || (this.locked = !1), o.pop) {
                    var a = {top: -t(e).scrollTop() - n.data("offset") + "px", opacity: 0};
                    return setTimeout(function () {
                        return n.animate(a, s.animation_speed, "linear", function () {
                            this.locked = !1, n.css(i).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), s.animation_speed / 2)
                }
                if (o.fade) {
                    var a = {opacity: 0};
                    return setTimeout(function () {
                        return n.animate(a, s.animation_speed, "linear", function () {
                            this.locked = !1, n.css(i).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), s.animation_speed / 2)
                }
                return n.hide().css(i).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
            }
            var s = this.settings;
            return r(s.animation).fade ? n.fadeOut(s.animation_speed / 2) : n.hide()
        }, close_video: function (e) {
            var n = t(".flex-video", e.target), i = t("iframe", n);
            i.length > 0 && (i.attr("data-src", i[0].src), i.attr("src", i.attr("src")), n.hide())
        }, open_video: function (e) {
            var n = t(".flex-video", e.target), r = n.find("iframe");
            if (r.length > 0) {
                var s = r.attr("data-src");
                if ("string" == typeof s)
                    r[0].src = r.attr("data-src");
                else {
                    var o = r[0].src;
                    r[0].src = i, r[0].src = o
                }
                n.show()
            }
        }, data_attr: function (t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        }, cache_offset: function (t) {
            var e = t.show().height() + parseInt(t.css("top"), 10);
            return t.hide(), e
        }, off: function () {
            t(this.scope).off(".fndtn.reveal")
        }, reflow: function () {
        }}
}(jQuery, window, window.document), function (t, e) {
    "use strict";
    Foundation.libs.slider = {name: "slider", version: "5.4.5", settings: {start: 0, end: 100, step: 1, initial: null, display_selector: "", vertical: !1, on_change: function () {
            }}, cache: {}, init: function (t, e, n) {
            Foundation.inherit(this, "throttle"), this.bindings(e, n), this.reflow()
        }, events: function () {
            var n = this;
            t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + n.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function (e) {
                n.cache.active || (e.preventDefault(), n.set_active_slider(t(e.target)))
            }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function (i) {
                if (n.cache.active)
                    if (i.preventDefault(), t.data(n.cache.active[0], "settings").vertical) {
                        var r = 0;
                        i.pageY || (r = e.scrollY), n.calculate_position(n.cache.active, (i.pageY || i.originalEvent.clientY || i.originalEvent.touches[0].clientY || i.currentPoint.y) + r)
                    } else
                        n.calculate_position(n.cache.active, i.pageX || i.originalEvent.clientX || i.originalEvent.touches[0].clientX || i.currentPoint.x)
            }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function () {
                n.remove_active_slider()
            }).on("change.fndtn.slider", function () {
                n.settings.on_change()
            }), n.S(e).on("resize.fndtn.slider", n.throttle(function () {
                n.reflow()
            }, 300))
        }, set_active_slider: function (t) {
            this.cache.active = t
        }, remove_active_slider: function () {
            this.cache.active = null
        }, calculate_position: function (e, n) {
            var i = this, r = t.data(e[0], "settings"), s = (t.data(e[0], "handle_l"), t.data(e[0], "handle_o"), t.data(e[0], "bar_l")), o = t.data(e[0], "bar_o");
            requestAnimationFrame(function () {
                var t;
                t = Foundation.rtl && !r.vertical ? i.limit_to((o + s - n) / s, 0, 1) : i.limit_to((n - o) / s, 0, 1), t = r.vertical ? 1 - t : t;
                var a = i.normalized_value(t, r.start, r.end, r.step);
                i.set_ui(e, a)
            })
        }, set_ui: function (e, n) {
            var i = t.data(e[0], "settings"), r = t.data(e[0], "handle_l"), s = t.data(e[0], "bar_l"), o = this.normalized_percentage(n, i.start, i.end), a = o * (s - r) - 1, l = 100 * o;
            Foundation.rtl && !i.vertical && (a = -a), a = i.vertical ? -a + s - r + 1 : a, this.set_translate(e, a, i.vertical), i.vertical ? e.siblings(".range-slider-active-segment").css("height", l + "%") : e.siblings(".range-slider-active-segment").css("width", l + "%"), e.parent().attr(this.attr_name(), n).trigger("change").trigger("change.fndtn.slider"), e.parent().children("input[type=hidden]").val(n), e[0].hasAttribute("aria-valuemin") || e.attr({"aria-valuemin": i.start, "aria-valuemax": i.end}), e.attr("aria-valuenow", n)
        }, normalized_percentage: function (t, e, n) {
            return Math.min(1, (t - e) / (n - e))
        }, normalized_value: function (t, e, n, i) {
            var r = n - e, s = t * r, o = (s - s % i) / i, a = s % i, l = a >= .5 * i ? i : 0;
            return o * i + l + e
        }, set_translate: function (e, n, i) {
            i ? t(e).css("-webkit-transform", "translateY(" + n + "px)").css("-moz-transform", "translateY(" + n + "px)").css("-ms-transform", "translateY(" + n + "px)").css("-o-transform", "translateY(" + n + "px)").css("transform", "translateY(" + n + "px)") : t(e).css("-webkit-transform", "translateX(" + n + "px)").css("-moz-transform", "translateX(" + n + "px)").css("-ms-transform", "translateX(" + n + "px)").css("-o-transform", "translateX(" + n + "px)").css("transform", "translateX(" + n + "px)")
        }, limit_to: function (t, e, n) {
            return Math.min(Math.max(t, e), n)
        }, initialize_settings: function (e) {
            var n = t.extend({}, this.settings, this.data_options(t(e).parent()));
            n.vertical ? (t.data(e, "bar_o", t(e).parent().offset().top), t.data(e, "bar_l", t(e).parent().outerHeight()), t.data(e, "handle_o", t(e).offset().top), t.data(e, "handle_l", t(e).outerHeight())) : (t.data(e, "bar_o", t(e).parent().offset().left), t.data(e, "bar_l", t(e).parent().outerWidth()), t.data(e, "handle_o", t(e).offset().left), t.data(e, "handle_l", t(e).outerWidth())), t.data(e, "bar", t(e).parent()), t.data(e, "settings", n)
        }, set_initial_position: function (e) {
            var n = t.data(e.children(".range-slider-handle")[0], "settings"), i = n.initial ? n.initial : Math.floor(.5 * (n.end - n.start) / n.step) * n.step + n.start, r = e.children(".range-slider-handle");
            this.set_ui(r, i)
        }, set_value: function (e) {
            var n = this;
            t("[" + n.attr_name() + "]", this.scope).each(function () {
                t(this).attr(n.attr_name(), e)
            }), t(this.scope).attr(n.attr_name()) && t(this.scope).attr(n.attr_name(), e), n.reflow()
        }, reflow: function () {
            var e = this;
            e.S("[" + this.attr_name() + "]").each(function () {
                var n = t(this).children(".range-slider-handle")[0], i = t(this).attr(e.attr_name());
                e.initialize_settings(n), i ? e.set_ui(t(n), parseFloat(i)) : e.set_initial_position(t(this))
            })
        }}
}(jQuery, window, window.document), function (t, e, n, i) {
    "use strict";
    Foundation.libs.tab = {name: "tab", version: "5.4.5", settings: {active_class: "active", callback: function () {
            }, deep_linking: !1, scroll_to_content: !0, is_hover: !1}, default_tab_hashes: [], init: function (t, e, n) {
            var i = this, r = this.S;
            this.bindings(e, n), this.handle_location_hash_change(), r("[" + this.attr_name() + "] > .active > a", this.scope).each(function () {
                i.default_tab_hashes.push(this.hash)
            })
        }, events: function () {
            var t = this, n = this.S, i = function (e) {
                var i = n(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                (!i.is_hover || Modernizr.touch) && (e.preventDefault(), e.stopPropagation(), t.toggle_active_tab(n(this).parent()))
            };
            n(this.scope).off(".tab").on("focus.fndtn.tab", "[" + this.attr_name() + "] > * > a", i).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", i).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function () {
                var e = n(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                e.is_hover && t.toggle_active_tab(n(this).parent())
            }), n(e).on("hashchange.fndtn.tab", function (e) {
                e.preventDefault(), t.handle_location_hash_change()
            })
        }, handle_location_hash_change: function () {
            var e = this, n = this.S;
            n("[" + this.attr_name() + "]", this.scope).each(function () {
                var r = n(this).data(e.attr_name(!0) + "-init");
                if (r.deep_linking) {
                    var s;
                    if (s = r.scroll_to_content ? e.scope.location.hash : e.scope.location.hash.replace("fndtn-", ""), "" != s) {
                        var o = n(s);
                        if (o.hasClass("content") && o.parent().hasClass("tab-content"))
                            e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + s + "]").parent());
                        else {
                            var a = o.closest(".content").attr("id");
                            a != i && e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=#" + a + "]").parent(), s)
                        }
                    } else
                        for (var l in e.default_tab_hashes)
                            e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + e.default_tab_hashes[l] + "]").parent())
                }
            })
        }, toggle_active_tab: function (r, s) {
            var o = this.S, a = r.closest("[" + this.attr_name() + "]"), l = r.find("a"), c = r.children("a").first(), u = "#" + c.attr("href").split("#")[1], d = o(u), h = r.siblings(), p = a.data(this.attr_name(!0) + "-init"), f = function (e) {
                var i, r = t(this), s = t(this).parents("li").prev().children('[role="tab"]'), o = t(this).parents("li").next().children('[role="tab"]');
                switch (e.keyCode) {
                    case 37:
                        i = s;
                        break;
                    case 39:
                        i = o;
                        break;
                    default:
                        i = !1
                }
                i.length && (r.attr({tabindex: "-1", "aria-selected": null}), i.attr({tabindex: "0", "aria-selected": !0}).focus()), t('[role="tabpanel"]').attr("aria-hidden", "true"), t("#" + t(n.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
            };
            o(this).data(this.data_attr("tab-content")) && (u = "#" + o(this).data(this.data_attr("tab-content")).split("#")[1], d = o(u)), p.deep_linking && (p.scroll_to_content ? (e.location.hash = s || u, s == i || s == u ? r.parent()[0].scrollIntoView() : o(u)[0].scrollIntoView()) : e.location.hash = s != i ? "fndtn-" + s.replace("#", "") : "fndtn-" + u.replace("#", "")), r.addClass(p.active_class).triggerHandler("opened"), l.attr({"aria-selected": "true", tabindex: 0}), h.removeClass(p.active_class), h.find("a").attr({"aria-selected": "false", tabindex: -1}), d.siblings().removeClass(p.active_class).attr({"aria-hidden": "true", tabindex: -1}).end().addClass(p.active_class).attr("aria-hidden", "false").find(":first-child").attr("tabindex", 0), p.callback(r), d.children().attr("tab-index", 0), d.triggerHandler("toggled", [r]), a.triggerHandler("toggled", [d]), l.on("keydown", f)
        }, data_attr: function (t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        }, off: function () {
        }, reflow: function () {
        }}
}(jQuery, window, window.document), function (t, e) {
    "use strict";
    Foundation.libs.tooltip = {name: "tooltip", version: "5.4.5", settings: {additional_inheritable_classes: [], tooltip_class: ".tooltip", append_to: "body", touch_close_text: "Tap To Close", disable_for_touch: !1, hover_delay: 200, show_on: "all", tip_template: function (t, e) {
                return'<span data-selector="' + t + '" id="' + t + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + e + '<span class="nub"></span></span>'
            }}, cache: {}, init: function (t, e, n) {
            Foundation.inherit(this, "random_str"), this.bindings(e, n)
        }, should_show: function (e) {
            var n = t.extend({}, this.settings, this.data_options(e));
            return"all" === n.show_on ? !0 : this.small() && "small" === n.show_on ? !0 : this.medium() && "medium" === n.show_on ? !0 : this.large() && "large" === n.show_on ? !0 : !1
        }, medium: function () {
            return matchMedia(Foundation.media_queries.medium).matches
        }, large: function () {
            return matchMedia(Foundation.media_queries.large).matches
        }, events: function (e) {
            var n = this, i = n.S;
            n.create(this.S(e)), t(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function (e) {
                var r = i(this), s = t.extend({}, n.settings, n.data_options(r)), o = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && i(e.target).is("a"))
                    return!1;
                if (/mouse/i.test(e.type) && n.ie_touch(e))
                    return!1;
                if (r.hasClass("open"))
                    Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && e.preventDefault(), n.hide(r);
                else {
                    if (s.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type))
                        return;
                    !s.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && (e.preventDefault(), i(s.tooltip_class + ".open").hide(), o = !0), /enter|over/i.test(e.type) ? this.timer = setTimeout(function () {
                        n.showTip(r)
                    }.bind(this), n.settings.hover_delay) : "mouseout" === e.type || "mouseleave" === e.type ? (clearTimeout(this.timer), n.hide(r)) : n.showTip(r)
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function (e) {
                return/mouse/i.test(e.type) && n.ie_touch(e) ? !1 : void(("touch" != t(this).data("tooltip-open-event-type") || "mouseleave" != e.type) && ("mouse" == t(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(e.type) ? n.convert_to_touch(t(this)) : n.hide(t(this))))
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function () {
                n.hide(i(this))
            })
        }, ie_touch: function () {
            return!1
        }, showTip: function (t) {
            var e = this.getTip(t);
            return this.should_show(t, e) ? this.show(t) : void 0
        }, getTip: function (e) {
            var n = this.selector(e), i = t.extend({}, this.settings, this.data_options(e)), r = null;
            return n && (r = this.S('span[data-selector="' + n + '"]' + i.tooltip_class)), "object" == typeof r ? r : !1
        }, selector: function (t) {
            var e = t.attr("id"), n = t.attr(this.attr_name()) || t.attr("data-selector");
            return(e && e.length < 1 || !e) && "string" != typeof n && (n = this.random_str(6), t.attr("data-selector", n).attr("aria-describedby", n)), e && e.length > 0 ? e : n
        }, create: function (n) {
            var i = this, r = t.extend({}, this.settings, this.data_options(n)), s = this.settings.tip_template;
            "string" == typeof r.tip_template && e.hasOwnProperty(r.tip_template) && (s = e[r.tip_template]);
            var o = t(s(this.selector(n), t("<div></div>").html(n.attr("title")).html())), a = this.inheritable_classes(n);
            o.addClass(a).appendTo(r.append_to), Modernizr.touch && (o.append('<span class="tap-to-close">' + r.touch_close_text + "</span>"), o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function () {
                i.hide(n)
            })), n.removeAttr("title").attr("title", "")
        }, reposition: function (e, n, i) {
            var r, s, o, a, l;
            if (n.css("visibility", "hidden").show(), r = e.data("width"), s = n.children(".nub"), o = s.outerHeight(), a = s.outerHeight(), n.css(this.small() ? {width: "100%"} : {width: r ? r : "auto"}), l = function (t, e, n, i, r) {
                return t.css({top: e ? e : "auto", bottom: i ? i : "auto", left: r ? r : "auto", right: n ? n : "auto"}).end()
            }, l(n, e.offset().top + e.outerHeight() + 10, "auto", "auto", e.offset().left), this.small())
                l(n, e.offset().top + e.outerHeight() + 10, "auto", "auto", 12.5, t(this.scope).width()), n.addClass("tip-override"), l(s, -o, "auto", "auto", e.offset().left);
            else {
                var c = e.offset().left;
                Foundation.rtl && (s.addClass("rtl"), c = e.offset().left + e.outerWidth() - n.outerWidth()), l(n, e.offset().top + e.outerHeight() + 10, "auto", "auto", c), n.removeClass("tip-override"), i && i.indexOf("tip-top") > -1 ? (Foundation.rtl && s.addClass("rtl"), l(n, e.offset().top - n.outerHeight(), "auto", "auto", c).removeClass("tip-override")) : i && i.indexOf("tip-left") > -1 ? (l(n, e.offset().top + e.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", e.offset().left - n.outerWidth() - o).removeClass("tip-override"), s.removeClass("rtl")) : i && i.indexOf("tip-right") > -1 && (l(n, e.offset().top + e.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", e.offset().left + e.outerWidth() + o).removeClass("tip-override"), s.removeClass("rtl"))
            }
            n.css("visibility", "visible").hide()
        }, small: function () {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        }, inheritable_classes: function (e) {
            var n = t.extend({}, this.settings, this.data_options(e)), i = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(n.additional_inheritable_classes), r = e.attr("class"), s = r ? t.map(r.split(" "), function (e) {
                return -1 !== t.inArray(e, i) ? e : void 0
            }).join(" ") : "";
            return t.trim(s)
        }, convert_to_touch: function (e) {
            var n = this, i = n.getTip(e), r = t.extend({}, n.settings, n.data_options(e));
            0 === i.find(".tap-to-close").length && (i.append('<span class="tap-to-close">' + r.touch_close_text + "</span>"), i.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function () {
                n.hide(e)
            })), e.data("tooltip-open-event-type", "touch")
        }, show: function (t) {
            var e = this.getTip(t);
            "touch" == t.data("tooltip-open-event-type") && this.convert_to_touch(t), this.reposition(t, e, t.attr("class")), t.addClass("open"), e.fadeIn(150)
        }, hide: function (t) {
            var e = this.getTip(t);
            e.fadeOut(150, function () {
                e.find(".tap-to-close").remove(), e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), t.removeClass("open")
            })
        }, off: function () {
            var e = this;
            this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function (n) {
                t("[" + e.attr_name() + "]").eq(n).attr("title", t(this).text())
            }).remove()
        }, reflow: function () {
        }}
}(jQuery, window, window.document), function (t, e, n) {
    "use strict";
    Foundation.libs.topbar = {name: "topbar", version: "5.4.5", settings: {index: 0, sticky_class: "sticky", custom_back_text: !0, back_text: "Back", mobile_show_parent_link: !0, is_hover: !0, scrolltop: !0, sticky_on: "all"}, init: function (e, n, i) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var r = this;
            r.register_media("topbar", "foundation-mq-topbar"), this.bindings(n, i), r.S("[" + this.attr_name() + "]", this.scope).each(function () {
                {
                    var e = t(this), n = e.data(r.attr_name(!0) + "-init");
                    r.S("section, .top-bar-section", this)
                }
                e.data("index", 0);
                var i = e.parent();
                i.hasClass("fixed") || r.is_sticky(e, i, n) ? (r.settings.sticky_class = n.sticky_class, r.settings.sticky_topbar = e, e.data("height", i.outerHeight()), e.data("stickyoffset", i.offset().top)) : e.data("height", e.outerHeight()), n.assembled || r.assemble(e), n.is_hover ? r.S(".has-dropdown", e).addClass("not-click") : r.S(".has-dropdown", e).removeClass("not-click"), r.add_custom_rule(".f-topbar-fixed { padding-top: " + e.data("height") + "px }"), i.hasClass("fixed") && r.S("body").addClass("f-topbar-fixed")
            })
        }, is_sticky: function (t, e, n) {
            var i = e.hasClass(n.sticky_class);
            return i && "all" === n.sticky_on ? !0 : i && this.small() && "small" === n.sticky_on ? matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : i && this.medium() && "medium" === n.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : i && this.large() && "large" === n.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && matchMedia(Foundation.media_queries.large).matches : !1
        }, toggle: function (n) {
            var i, r = this;
            i = n ? r.S(n).closest("[" + this.attr_name() + "]") : r.S("[" + this.attr_name() + "]");
            var s = i.data(this.attr_name(!0) + "-init"), o = r.S("section, .top-bar-section", i);
            r.breakpoint() && (r.rtl ? (o.css({right: "0%"}), t(">.name", o).css({right: "100%"})) : (o.css({left: "0%"}), t(">.name", o).css({left: "100%"})), r.S("li.moved", o).removeClass("moved"), i.data("index", 0), i.toggleClass("expanded").css("height", "")), s.scrolltop ? i.hasClass("expanded") ? i.parent().hasClass("fixed") && (s.scrolltop ? (i.parent().removeClass("fixed"), i.addClass("fixed"), r.S("body").removeClass("f-topbar-fixed"), e.scrollTo(0, 0)) : i.parent().removeClass("expanded")) : i.hasClass("fixed") && (i.parent().addClass("fixed"), i.removeClass("fixed"), r.S("body").addClass("f-topbar-fixed")) : (r.is_sticky(i, i.parent(), s) && i.parent().addClass("fixed"), i.parent().hasClass("fixed") && (i.hasClass("expanded") ? (i.addClass("fixed"), i.parent().addClass("expanded"), r.S("body").addClass("f-topbar-fixed")) : (i.removeClass("fixed"), i.parent().removeClass("expanded"), r.update_sticky_positioning())))
        }, timer: null, events: function () {
            var n = this, i = this.S;
            i(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function (t) {
                t.preventDefault(), n.toggle(this)
            }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function () {
                var e = t(this).closest("li");
                !n.breakpoint() || e.hasClass("back") || e.hasClass("has-dropdown") || n.toggle()
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function (e) {
                var r = i(this), s = i(e.target), o = r.closest("[" + n.attr_name() + "]"), a = o.data(n.attr_name(!0) + "-init");
                return s.data("revealId") ? void n.toggle() : void(n.breakpoint() || (!a.is_hover || Modernizr.touch) && (e.stopImmediatePropagation(), r.hasClass("hover") ? (r.removeClass("hover").find("li").removeClass("hover"), r.parents("li.hover").removeClass("hover")) : (r.addClass("hover"), t(r).siblings().removeClass("hover"), "A" === s[0].nodeName && s.parent().hasClass("has-dropdown") && e.preventDefault())))
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function (t) {
                if (n.breakpoint()) {
                    t.preventDefault();
                    var e = i(this), r = e.closest("[" + n.attr_name() + "]"), s = r.find("section, .top-bar-section"), o = (e.next(".dropdown").outerHeight(), e.closest("li"));
                    r.data("index", r.data("index") + 1), o.addClass("moved"), n.rtl ? (s.css({right: -(100 * r.data("index")) + "%"}), s.find(">.name").css({right: 100 * r.data("index") + "%"})) : (s.css({left: -(100 * r.data("index")) + "%"}), s.find(">.name").css({left: 100 * r.data("index") + "%"})), r.css("height", e.siblings("ul").outerHeight(!0) + r.data("height"))
                }
            }), i(e).off(".topbar").on("resize.fndtn.topbar", n.throttle(function () {
                n.resize.call(n)
            }, 50)).trigger("resize").trigger("resize.fndtn.topbar").load(function () {
                i(this).trigger("resize.fndtn.topbar")
            }), i("body").off(".topbar").on("click.fndtn.topbar", function (t) {
                var e = i(t.target).closest("li").closest("li.hover");
                e.length > 0 || i("[" + n.attr_name() + "] li.hover").removeClass("hover")
            }), i(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function (t) {
                t.preventDefault();
                var e = i(this), r = e.closest("[" + n.attr_name() + "]"), s = r.find("section, .top-bar-section"), o = (r.data(n.attr_name(!0) + "-init"), e.closest("li.moved")), a = o.parent();
                r.data("index", r.data("index") - 1), n.rtl ? (s.css({right: -(100 * r.data("index")) + "%"}), s.find(">.name").css({right: 100 * r.data("index") + "%"})) : (s.css({left: -(100 * r.data("index")) + "%"}), s.find(">.name").css({left: 100 * r.data("index") + "%"})), 0 === r.data("index") ? r.css("height", "") : r.css("height", a.outerHeight(!0) + r.data("height")), setTimeout(function () {
                    o.removeClass("moved")
                }, 300)
            }), i(this.scope).find(".dropdown a").focus(function () {
                t(this).parents(".has-dropdown").addClass("hover")
            }).blur(function () {
                t(this).parents(".has-dropdown").removeClass("hover")
            })
        }, resize: function () {
            var t = this;
            t.S("[" + this.attr_name() + "]").each(function () {
                var e, i = t.S(this), r = i.data(t.attr_name(!0) + "-init"), s = i.parent("." + t.settings.sticky_class);
                if (!t.breakpoint()) {
                    var o = i.hasClass("expanded");
                    i.css("height", "").removeClass("expanded").find("li").removeClass("hover"), o && t.toggle(i)
                }
                t.is_sticky(i, s, r) && (s.hasClass("fixed") ? (s.removeClass("fixed"), e = s.offset().top, t.S(n.body).hasClass("f-topbar-fixed") && (e -= i.data("height")), i.data("stickyoffset", e), s.addClass("fixed")) : (e = s.offset().top, i.data("stickyoffset", e)))
            })
        }, breakpoint: function () {
            return!matchMedia(Foundation.media_queries.topbar).matches
        }, small: function () {
            return matchMedia(Foundation.media_queries.small).matches
        }, medium: function () {
            return matchMedia(Foundation.media_queries.medium).matches
        }, large: function () {
            return matchMedia(Foundation.media_queries.large).matches
        }, assemble: function (e) {
            var n = this, i = e.data(this.attr_name(!0) + "-init"), r = n.S("section, .top-bar-section", e);
            r.detach(), n.S(".has-dropdown>a", r).each(function () {
                var e, r = n.S(this), s = r.siblings(".dropdown"), o = r.attr("href");
                s.find(".title.back").length || (e = t(1 == i.mobile_show_parent_link && o ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="' + o + '">' + r.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), t("h5>a", e).html(1 == i.custom_back_text ? i.back_text : "&laquo; " + r.html()), s.prepend(e))
            }), r.appendTo(e), this.sticky(), this.assembled(e)
        }, assembled: function (e) {
            e.data(this.attr_name(!0), t.extend({}, e.data(this.attr_name(!0)), {assembled: !0}))
        }, height: function (e) {
            var n = 0, i = this;
            return t("> li", e).each(function () {
                n += i.S(this).outerHeight(!0)
            }), n
        }, sticky: function () {
            var t = this;
            this.S(e).on("scroll", function () {
                t.update_sticky_positioning()
            })
        }, update_sticky_positioning: function () {
            var t = "." + this.settings.sticky_class, n = this.S(e), i = this;
            if (i.settings.sticky_topbar && i.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var r = this.settings.sticky_topbar.data("stickyoffset");
                i.S(t).hasClass("expanded") || (n.scrollTop() > r ? i.S(t).hasClass("fixed") || (i.S(t).addClass("fixed"), i.S("body").addClass("f-topbar-fixed")) : n.scrollTop() <= r && i.S(t).hasClass("fixed") && (i.S(t).removeClass("fixed"), i.S("body").removeClass("f-topbar-fixed")))
            }
        }, off: function () {
            this.S(this.scope).off(".fndtn.topbar"), this.S(e).off(".fndtn.topbar")
        }, reflow: function () {
        }}
}(jQuery, window, window.document), function (t, e) {
    "use strict";
    Foundation.libs.equalizer = {name: "equalizer", version: "5.4.5", settings: {use_tallest: !0, before_height_change: t.noop, after_height_change: t.noop, equalize_on_stack: !1}, init: function (t, e, n) {
            Foundation.inherit(this, "image_loaded"), this.bindings(e, n), this.reflow()
        }, events: function () {
            this.S(e).off(".equalizer").on("resize.fndtn.equalizer", function () {
                this.reflow()
            }.bind(this))
        }, equalize: function (e) {
            var n = !1, i = e.find("[" + this.attr_name() + "-watch]:visible"), r = e.data(this.attr_name(!0) + "-init");
            if (0 !== i.length) {
                var s = i.first().offset().top;
                if (r.before_height_change(), e.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"), i.height("inherit"), i.each(function () {
                    var e = t(this);
                    e.offset().top !== s && (n = !0)
                }), r.equalize_on_stack !== !1 || !n) {
                    var o = i.map(function () {
                        return t(this).outerHeight(!1)
                    }).get();
                    if (r.use_tallest) {
                        var a = Math.max.apply(null, o);
                        i.css("height", a)
                    } else {
                        var l = Math.min.apply(null, o);
                        i.css("height", l)
                    }
                    r.after_height_change(), e.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")
                }
            }
        }, reflow: function () {
            var e = this;
            this.S("[" + this.attr_name() + "]", this.scope).each(function () {
                var n = t(this);
                e.image_loaded(e.S("img", this), function () {
                    e.equalize(n)
                })
            })
        }}
}(jQuery, window, window.document), function () {
    var t, e, n, i, r, s, o, a, l, c, u, d, h, p, f, g, m, v, _, y, b, x, w, k, C, S, T, j, E, F, A, N, D, O, M, H, $, q, L, z, P, B, R, I, W, G, X, Q, U, V, Y, Z, K, J, te, ee, ne = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++)
            if (e in this && this[e] === t)
                return e;
        return -1
    }, ie = {}.hasOwnProperty, re = function (t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e)
            ie.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, se = [].slice, oe = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    };
    O = {}, h = 10, Y = !1, L = null, _ = null, N = null, P = null, te = null, i = {BEFORE_CHANGE: "page:before-change", FETCH: "page:fetch", RECEIVE: "page:receive", CHANGE: "page:change", UPDATE: "page:update", LOAD: "page:load", RESTORE: "page:restore", BEFORE_UNLOAD: "page:before-unload", EXPIRE: "page:expire"}, k = function (t) {
        var e;
        return t = new n(t), G(), d(), null != L && L.start(), Y && (e = Z(t.absolute)) ? (C(e), S(t, null, !1)) : S(t, U)
    }, Z = function (t) {
        var e;
        return e = O[t], e && !e.transitionCacheDisabled ? e : void 0
    }, b = function (t) {
        return null == t && (t = !0), Y = t
    }, y = function (t) {
        return null == t && (t = !0), c ? t ? null != L ? L : L = new s("html") : (null != L && L.uninstall(), L = null) : void 0
    }, S = function (t, e, n) {
        return null == n && (n = !0), K(i.FETCH, {url: t.absolute}), null != te && te.abort(), te = new XMLHttpRequest, te.open("GET", t.withoutHashForIE10compatibility(), !0), te.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), te.setRequestHeader("X-XHR-Referer", P), te.onload = function () {
            var n;
            return K(i.RECEIVE, {url: t.absolute}), (n = q()) ? (B(t), R(), p.apply(null, w(n)), D(), "function" == typeof e && e(), K(i.LOAD)) : document.location.href = v() || t.absolute
        }, L && n && (te.onprogress = function () {
            return function (t) {
                var e;
                return e = t.lengthComputable ? t.loaded / t.total * 100 : L.value + (100 - L.value) / 10, L.advanceTo(e)
            }
        }(this)), te.onloadend = function () {
            return te = null
        }, te.onerror = function () {
            return document.location.href = t.absolute
        }, te.send()
    }, C = function (t) {
        return null != te && te.abort(), p(t.title, t.body), z(t), K(i.RESTORE)
    }, d = function () {
        var t;
        return t = new n(_.url), O[t.absolute] = {url: t.relative, body: document.body, title: document.title, positionY: window.pageYOffset, positionX: window.pageXOffset, cachedAt: (new Date).getTime(), transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")}, g(h)
    }, H = function (t) {
        return null == t && (t = h), /^[\d]+$/.test(t) ? h = parseInt(t) : void 0
    }, g = function (t) {
        var e, n, r, s, o, a;
        for (r = Object.keys(O), e = r.map(function (t) {
            return O[t].cachedAt
        }).sort(function (t, e) {
            return e - t
        }), a = [], s = 0, o = r.length; o > s; s++)
            n = r[s], O[n].cachedAt <= e[t] && (K(i.EXPIRE, O[n]), a.push(delete O[n]));
        return a
    }, p = function (e, n, r, s) {
        return K(i.BEFORE_UNLOAD), document.title = e, document.documentElement.replaceChild(n, document.body), null != r && t.update(r), V(), s && x(), _ = window.history.state, null != L && L.done(), K(i.CHANGE), K(i.UPDATE)
    }, x = function () {
        var t, e, n, i, r, s, o, a, l, c, u, d;
        for (s = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), o = 0, l = s.length; l > o; o++)
            if (r = s[o], "" === (u = r.type) || "text/javascript" === u) {
                for (e = document.createElement("script"), d = r.attributes, a = 0, c = d.length; c > a; a++)
                    t = d[a], e.setAttribute(t.name, t.value);
                r.hasAttribute("async") || (e.async = !1), e.appendChild(document.createTextNode(r.innerHTML)), i = r.parentNode, n = r.nextSibling, i.removeChild(r), i.insertBefore(e, n)
            }
    }, X = function (t) {
        return t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), t
    }, V = function () {
        var t, e;
        return t = (e = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length - 1], t && document.activeElement !== t ? t.focus() : void 0
    }, B = function (t) {
        return(t = new n(t)).absolute !== P ? window.history.pushState({turbolinks: !0, url: t.absolute}, "", t.absolute) : void 0
    }, R = function () {
        var t, e;
        return(t = te.getResponseHeader("X-XHR-Redirected-To")) ? (t = new n(t), e = t.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", t.href + e)) : void 0
    }, v = function () {
        var t;
        return null != (t = te.getResponseHeader("Location")) && new n(t).crossOrigin() ? t : void 0
    }, G = function () {
        return P = document.location.href
    }, W = function () {
        return window.history.replaceState({turbolinks: !0, url: document.location.href}, "", document.location.href)
    }, I = function () {
        return _ = window.history.state
    }, D = function () {
        var t;
        return navigator.userAgent.match(/Firefox/) && !(t = new n).hasNoHash() ? (window.history.replaceState(_, "", t.withoutHash()), document.location.hash = t.hash) : void 0
    }, z = function (t) {
        return window.scrollTo(t.positionX, t.positionY)
    }, U = function () {
        return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
    }, f = function (t) {
        var e, n, i;
        if (null == t || "object" != typeof t)
            return t;
        e = new t.constructor;
        for (n in t)
            i = t[n], e[n] = f(i);
        return e
    }, $ = function (t) {
        var e, n;
        return e = (null != (n = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? n[1].toUpperCase() : void 0) || "", document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", e
    }, K = function (t, e) {
        var n;
        return"undefined" != typeof Prototype && Event.fire(document, t, e, !0), n = document.createEvent("Events"), e && (n.data = e), n.initEvent(t, !0, !0), document.dispatchEvent(n)
    }, M = function (t) {
        return!K(i.BEFORE_CHANGE, {url: t})
    }, q = function () {
        var t, e, n, i, r, s;
        return e = function () {
            var t;
            return 400 <= (t = te.status) && 600 > t
        }, s = function () {
            var t;
            return null != (t = te.getResponseHeader("Content-Type")) && t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
        }, i = function (t) {
            var e, n, i, r, s;
            for (r = t.querySelector("head").childNodes, s = [], n = 0, i = r.length; i > n; n++)
                e = r[n], null != ("function" == typeof e.getAttribute ? e.getAttribute("data-turbolinks-track") : void 0) && s.push(e.getAttribute("src") || e.getAttribute("href"));
            return s
        }, t = function (t) {
            var e;
            return N || (N = i(document)), e = i(t), e.length !== N.length || r(e, N).length !== N.length
        }, r = function (t, e) {
            var n, i, r, s, o;
            for (t.length > e.length && (s = [e, t], t = s[0], e = s[1]), o = [], i = 0, r = t.length; r > i; i++)
                n = t[i], ne.call(e, n) >= 0 && o.push(n);
            return o
        }, !e() && s() && (n = m(te.responseText), n && !t(n)) ? n : void 0
    }, w = function (e) {
        var n;
        return n = e.querySelector("title"), [null != n ? n.textContent : void 0, X(e.querySelector("body")), t.get(e).token, "runScripts"]
    }, t = {get: function (t) {
            var e;
            return null == t && (t = document), {node: e = t.querySelector('meta[name="csrf-token"]'), token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0}
        }, update: function (t) {
            var e;
            return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
        }}, m = function (t) {
        var e;
        return e = document.documentElement.cloneNode(), e.innerHTML = t, e.head = e.querySelector("head"), e.body = e.querySelector("body"), e
    }, n = function () {
        function t(e) {
            return this.original = null != e ? e : document.location.href, this.original.constructor === t ? this.original : void this._parse()
        }
        return t.prototype.withoutHash = function () {
            return this.href.replace(this.hash, "").replace("#", "")
        }, t.prototype.withoutHashForIE10compatibility = function () {
            return this.withoutHash()
        }, t.prototype.hasNoHash = function () {
            return 0 === this.hash.length
        }, t.prototype.crossOrigin = function () {
            return this.origin !== (new t).origin
        }, t.prototype._parse = function () {
            var t;
            return(null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, t = this.link, this.href = t.href, this.protocol = t.protocol, this.host = t.host, this.hostname = t.hostname, this.port = t.port, this.pathname = t.pathname, this.search = t.search, this.hash = t.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
        }, t
    }(), r = function (t) {
        function e(t) {
            return this.link = t, this.link.constructor === e ? this.link : (this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), void e.__super__.constructor.apply(this, arguments))
        }
        return re(e, t), e.HTML_EXTENSIONS = ["html"], e.allowExtensions = function () {
            var t, n, i, r;
            for (n = 1 <= arguments.length?se.call(arguments, 0):[], i = 0, r = n.length; r > i; i++)
                t = n[i], e.HTML_EXTENSIONS.push(t);
            return e.HTML_EXTENSIONS
        }, e.prototype.shouldIgnore = function () {
            return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
        }, e.prototype._anchored = function () {
            return(this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new n).withoutHash()
        }, e.prototype._nonHtml = function () {
            return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"))
        }, e.prototype._optOut = function () {
            var t, e;
            for (e = this.originalElement; !t && e !== document; )
                t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
            return t
        }, e.prototype._target = function () {
            return 0 !== this.link.target.length
        }, e
    }(n), e = function () {
        function t(t) {
            this.event = t, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (M(this.link.absolute) || J(this.link.href), this.event.preventDefault()))
        }
        return t.installHandlerLast = function (e) {
            return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1))
        }, t.handle = function (e) {
            return new t(e)
        }, t.prototype._extractLink = function () {
            var t;
            for (t = this.event.target; t.parentNode && "A" !== t.nodeName; )
                t = t.parentNode;
            return"A" === t.nodeName && 0 !== t.href.length ? this.link = new r(t) : void 0
        }, t.prototype._validForTurbolinks = function () {
            return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
        }, t.prototype._nonStandardClick = function () {
            return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
        }, t
    }(), s = function () {
        function t(t) {
            this.elementSelector = t, this._trickle = oe(this._trickle, this), this.value = 0, this.content = "", this.speed = 300, this.opacity = .99, this.install()
        }
        var e;
        return e = "turbolinks-progress-bar", t.prototype.install = function () {
            return this.element = document.querySelector(this.elementSelector), this.element.classList.add(e), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle()
        }, t.prototype.uninstall = function () {
            return this.element.classList.remove(e), document.head.removeChild(this.styleElement)
        }, t.prototype.start = function () {
            return this.advanceTo(5)
        }, t.prototype.advanceTo = function (t) {
            var e;
            if (t > (e = this.value) && 100 >= e) {
                if (this.value = t, this._updateStyle(), 100 === this.value)
                    return this._stopTrickle();
                if (this.value > 0)
                    return this._startTrickle()
            }
        }, t.prototype.done = function () {
            return this.value > 0 ? (this.advanceTo(100), this._reset()) : void 0
        }, t.prototype._reset = function () {
            var t;
            return t = this.opacity, setTimeout(function (t) {
                return function () {
                    return t.opacity = 0, t._updateStyle()
                }
            }(this), this.speed / 2), setTimeout(function (e) {
                return function () {
                    return e.value = 0, e.opacity = t, e._withSpeed(0, function () {
                        return e._updateStyle(!0)
                    })
                }
            }(this), this.speed)
        }, t.prototype._startTrickle = function () {
            return this.trickling ? void 0 : (this.trickling = !0, setTimeout(this._trickle, this.speed))
        }, t.prototype._stopTrickle = function () {
            return delete this.trickling
        }, t.prototype._trickle = function () {
            return this.trickling ? (this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed)) : void 0
        }, t.prototype._withSpeed = function (t, e) {
            var n, i;
            return n = this.speed, this.speed = t, i = e(), this.speed = n, i
        }, t.prototype._updateStyle = function (t) {
            return null == t && (t = !1), t && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule()
        }, t.prototype._changeContentToForceRepaint = function () {
            return this.content = "" === this.content ? " " : ""
        }, t.prototype._createCSSRule = function () {
            return"" + this.elementSelector + "." + e + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
        }, t
    }(), u = function (t) {
        return setTimeout(t, 500)
    }, E = function () {
        return document.addEventListener("DOMContentLoaded", function () {
            return K(i.CHANGE), K(i.UPDATE)
        }, !0)
    }, A = function () {
        return"undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function (t, e) {
            return jQuery.trim(e.responseText) ? K(i.UPDATE) : void 0
        }) : void 0
    }, F = function (t) {
        var e, i;
        return(null != (i = t.state) ? i.turbolinks : void 0) ? (e = O[new n(t.state.url).absolute]) ? (d(), C(e)) : J(t.target.location.href) : void 0
    }, j = function () {
        return W(), I(), document.addEventListener("click", e.installHandlerLast, !0), window.addEventListener("hashchange", function () {
            return W(), I()
        }, !1), u(function () {
            return window.addEventListener("popstate", F, !1)
        })
    }, T = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), l = window.history && window.history.pushState && window.history.replaceState && T, o = !navigator.userAgent.match(/CriOS\//), Q = "GET" === (ee = $("request_method")) || "" === ee, c = l && o && Q, a = document.addEventListener && document.createEvent, a && (E(), A()), c ? (J = k, j()) : J = function (t) {
        return document.location.href = t
    }, this.Turbolinks = {visit: J, pagesCached: H, enableTransitionCache: b, enableProgressBar: y, allowLinkExtensions: r.allowExtensions, supported: c, EVENTS: f(i)}
}.call(this), function () {
    var t = this, e = t._, n = Array.prototype, i = Object.prototype, r = Function.prototype, s = n.push, o = n.slice, a = n.concat, l = i.toString, c = i.hasOwnProperty, u = Array.isArray, d = Object.keys, h = r.bind, p = function (t) {
        return t instanceof p ? t : this instanceof p ? void(this._wrapped = t) : new p(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), exports._ = p) : t._ = p, p.VERSION = "1.7.0";
    var f = function (t, e, n) {
        if (void 0 === e)
            return t;
        switch (null == n ? 3 : n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function (n, i, r) {
                    return t.call(e, n, i, r)
                };
            case 4:
                return function (n, i, r, s) {
                    return t.call(e, n, i, r, s)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    };
    p.iteratee = function (t, e, n) {
        return null == t ? p.identity : p.isFunction(t) ? f(t, e, n) : p.isObject(t) ? p.matches(t) : p.property(t)
    }, p.each = p.forEach = function (t, e, n) {
        if (null == t)
            return t;
        e = f(e, n);
        var i, r = t.length;
        if (r === +r)
            for (i = 0; r > i; i++)
                e(t[i], i, t);
        else {
            var s = p.keys(t);
            for (i = 0, r = s.length; r > i; i++)
                e(t[s[i]], s[i], t)
        }
        return t
    }, p.map = p.collect = function (t, e, n) {
        if (null == t)
            return[];
        e = p.iteratee(e, n);
        for (var i, r = t.length !== +t.length && p.keys(t), s = (r || t).length, o = Array(s), a = 0; s > a; a++)
            i = r ? r[a] : a, o[a] = e(t[i], i, t);
        return o
    };
    var g = "Reduce of empty array with no initial value";
    p.reduce = p.foldl = p.inject = function (t, e, n, i) {
        null == t && (t = []), e = f(e, i, 4);
        var r, s = t.length !== +t.length && p.keys(t), o = (s || t).length, a = 0;
        if (arguments.length < 3) {
            if (!o)
                throw new TypeError(g);
            n = t[s ? s[a++] : a++]
        }
        for (; o > a; a++)
            r = s ? s[a] : a, n = e(n, t[r], r, t);
        return n
    }, p.reduceRight = p.foldr = function (t, e, n, i) {
        null == t && (t = []), e = f(e, i, 4);
        var r, s = t.length !== +t.length && p.keys(t), o = (s || t).length;
        if (arguments.length < 3) {
            if (!o)
                throw new TypeError(g);
            n = t[s ? s[--o] : --o]
        }
        for (; o--; )
            r = s ? s[o] : o, n = e(n, t[r], r, t);
        return n
    }, p.find = p.detect = function (t, e, n) {
        var i;
        return e = p.iteratee(e, n), p.some(t, function (t, n, r) {
            return e(t, n, r) ? (i = t, !0) : void 0
        }), i
    }, p.filter = p.select = function (t, e, n) {
        var i = [];
        return null == t ? i : (e = p.iteratee(e, n), p.each(t, function (t, n, r) {
            e(t, n, r) && i.push(t)
        }), i)
    }, p.reject = function (t, e, n) {
        return p.filter(t, p.negate(p.iteratee(e)), n)
    }, p.every = p.all = function (t, e, n) {
        if (null == t)
            return!0;
        e = p.iteratee(e, n);
        var i, r, s = t.length !== +t.length && p.keys(t), o = (s || t).length;
        for (i = 0; o > i; i++)
            if (r = s ? s[i] : i, !e(t[r], r, t))
                return!1;
        return!0
    }, p.some = p.any = function (t, e, n) {
        if (null == t)
            return!1;
        e = p.iteratee(e, n);
        var i, r, s = t.length !== +t.length && p.keys(t), o = (s || t).length;
        for (i = 0; o > i; i++)
            if (r = s ? s[i] : i, e(t[r], r, t))
                return!0;
        return!1
    }, p.contains = p.include = function (t, e) {
        return null == t ? !1 : (t.length !== +t.length && (t = p.values(t)), p.indexOf(t, e) >= 0)
    }, p.invoke = function (t, e) {
        var n = o.call(arguments, 2), i = p.isFunction(e);
        return p.map(t, function (t) {
            return(i ? e : t[e]).apply(t, n)
        })
    }, p.pluck = function (t, e) {
        return p.map(t, p.property(e))
    }, p.where = function (t, e) {
        return p.filter(t, p.matches(e))
    }, p.findWhere = function (t, e) {
        return p.find(t, p.matches(e))
    }, p.max = function (t, e, n) {
        var i, r, s = -1 / 0, o = -1 / 0;
        if (null == e && null != t) {
            t = t.length === +t.length ? t : p.values(t);
            for (var a = 0, l = t.length; l > a; a++)
                i = t[a], i > s && (s = i)
        } else
            e = p.iteratee(e, n), p.each(t, function (t, n, i) {
                r = e(t, n, i), (r > o || r === -1 / 0 && s === -1 / 0) && (s = t, o = r)
            });
        return s
    }, p.min = function (t, e, n) {
        var i, r, s = 1 / 0, o = 1 / 0;
        if (null == e && null != t) {
            t = t.length === +t.length ? t : p.values(t);
            for (var a = 0, l = t.length; l > a; a++)
                i = t[a], s > i && (s = i)
        } else
            e = p.iteratee(e, n), p.each(t, function (t, n, i) {
                r = e(t, n, i), (o > r || 1 / 0 === r && 1 / 0 === s) && (s = t, o = r)
            });
        return s
    }, p.shuffle = function (t) {
        for (var e, n = t && t.length === +t.length ? t : p.values(t), i = n.length, r = Array(i), s = 0; i > s; s++)
            e = p.random(0, s), e !== s && (r[s] = r[e]), r[e] = n[s];
        return r
    }, p.sample = function (t, e, n) {
        return null == e || n ? (t.length !== +t.length && (t = p.values(t)), t[p.random(t.length - 1)]) : p.shuffle(t).slice(0, Math.max(0, e))
    }, p.sortBy = function (t, e, n) {
        return e = p.iteratee(e, n), p.pluck(p.map(t, function (t, n, i) {
            return{value: t, index: n, criteria: e(t, n, i)}
        }).sort(function (t, e) {
            var n = t.criteria, i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n)
                    return 1;
                if (i > n || void 0 === i)
                    return -1
            }
            return t.index - e.index
        }), "value")
    };
    var m = function (t) {
        return function (e, n, i) {
            var r = {};
            return n = p.iteratee(n, i), p.each(e, function (i, s) {
                var o = n(i, s, e);
                t(r, i, o)
            }), r
        }
    };
    p.groupBy = m(function (t, e, n) {
        p.has(t, n) ? t[n].push(e) : t[n] = [e]
    }), p.indexBy = m(function (t, e, n) {
        t[n] = e
    }), p.countBy = m(function (t, e, n) {
        p.has(t, n) ? t[n]++ : t[n] = 1
    }), p.sortedIndex = function (t, e, n, i) {
        n = p.iteratee(n, i, 1);
        for (var r = n(e), s = 0, o = t.length; o > s; ) {
            var a = s + o >>> 1;
            n(t[a]) < r ? s = a + 1 : o = a
        }
        return s
    }, p.toArray = function (t) {
        return t ? p.isArray(t) ? o.call(t) : t.length === +t.length ? p.map(t, p.identity) : p.values(t) : []
    }, p.size = function (t) {
        return null == t ? 0 : t.length === +t.length ? t.length : p.keys(t).length
    }, p.partition = function (t, e, n) {
        e = p.iteratee(e, n);
        var i = [], r = [];
        return p.each(t, function (t, n, s) {
            (e(t, n, s) ? i : r).push(t)
        }), [i, r]
    }, p.first = p.head = p.take = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[0] : 0 > e ? [] : o.call(t, 0, e)
    }, p.initial = function (t, e, n) {
        return o.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    }, p.last = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[t.length - 1] : o.call(t, Math.max(t.length - e, 0))
    }, p.rest = p.tail = p.drop = function (t, e, n) {
        return o.call(t, null == e || n ? 1 : e)
    }, p.compact = function (t) {
        return p.filter(t, p.identity)
    };
    var v = function (t, e, n, i) {
        if (e && p.every(t, p.isArray))
            return a.apply(i, t);
        for (var r = 0, o = t.length; o > r; r++) {
            var l = t[r];
            p.isArray(l) || p.isArguments(l) ? e ? s.apply(i, l) : v(l, e, n, i) : n || i.push(l)
        }
        return i
    };
    p.flatten = function (t, e) {
        return v(t, e, !1, [])
    }, p.without = function (t) {
        return p.difference(t, o.call(arguments, 1))
    }, p.uniq = p.unique = function (t, e, n, i) {
        if (null == t)
            return[];
        p.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = p.iteratee(n, i));
        for (var r = [], s = [], o = 0, a = t.length; a > o; o++) {
            var l = t[o];
            if (e)
                o && s === l || r.push(l), s = l;
            else if (n) {
                var c = n(l, o, t);
                p.indexOf(s, c) < 0 && (s.push(c), r.push(l))
            } else
                p.indexOf(r, l) < 0 && r.push(l)
        }
        return r
    }, p.union = function () {
        return p.uniq(v(arguments, !0, !0, []))
    }, p.intersection = function (t) {
        if (null == t)
            return[];
        for (var e = [], n = arguments.length, i = 0, r = t.length; r > i; i++) {
            var s = t[i];
            if (!p.contains(e, s)) {
                for (var o = 1; n > o && p.contains(arguments[o], s); o++)
                    ;
                o === n && e.push(s)
            }
        }
        return e
    }, p.difference = function (t) {
        var e = v(o.call(arguments, 1), !0, !0, []);
        return p.filter(t, function (t) {
            return!p.contains(e, t)
        })
    }, p.zip = function (t) {
        if (null == t)
            return[];
        for (var e = p.max(arguments, "length").length, n = Array(e), i = 0; e > i; i++)
            n[i] = p.pluck(arguments, i);
        return n
    }, p.object = function (t, e) {
        if (null == t)
            return{};
        for (var n = {}, i = 0, r = t.length; r > i; i++)
            e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n
    }, p.indexOf = function (t, e, n) {
        if (null == t)
            return -1;
        var i = 0, r = t.length;
        if (n) {
            if ("number" != typeof n)
                return i = p.sortedIndex(t, e), t[i] === e ? i : -1;
            i = 0 > n ? Math.max(0, r + n) : n
        }
        for (; r > i; i++)
            if (t[i] === e)
                return i;
        return -1
    }, p.lastIndexOf = function (t, e, n) {
        if (null == t)
            return -1;
        var i = t.length;
        for ("number" == typeof n && (i = 0 > n?i + n + 1:Math.min(i, n + 1)); --i >= 0; )
            if (t[i] === e)
                return i;
        return -1
    }, p.range = function (t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0), n = n || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), s = 0; i > s; s++, t += n)
            r[s] = t;
        return r
    };
    var _ = function () {
    };
    p.bind = function (t, e) {
        var n, i;
        if (h && t.bind === h)
            return h.apply(t, o.call(arguments, 1));
        if (!p.isFunction(t))
            throw new TypeError("Bind must be called on a function");
        return n = o.call(arguments, 2), i = function () {
            if (!(this instanceof i))
                return t.apply(e, n.concat(o.call(arguments)));
            _.prototype = t.prototype;
            var r = new _;
            _.prototype = null;
            var s = t.apply(r, n.concat(o.call(arguments)));
            return p.isObject(s) ? s : r
        }
    }, p.partial = function (t) {
        var e = o.call(arguments, 1);
        return function () {
            for (var n = 0, i = e.slice(), r = 0, s = i.length; s > r; r++)
                i[r] === p && (i[r] = arguments[n++]);
            for (; n < arguments.length; )
                i.push(arguments[n++]);
            return t.apply(this, i)
        }
    }, p.bindAll = function (t) {
        var e, n, i = arguments.length;
        if (1 >= i)
            throw new Error("bindAll must be passed function names");
        for (e = 1; i > e; e++)
            n = arguments[e], t[n] = p.bind(t[n], t);
        return t
    }, p.memoize = function (t, e) {
        var n = function (i) {
            var r = n.cache, s = e ? e.apply(this, arguments) : i;
            return p.has(r, s) || (r[s] = t.apply(this, arguments)), r[s]
        };
        return n.cache = {}, n
    }, p.delay = function (t, e) {
        var n = o.call(arguments, 2);
        return setTimeout(function () {
            return t.apply(null, n)
        }, e)
    }, p.defer = function (t) {
        return p.delay.apply(p, [t, 1].concat(o.call(arguments, 1)))
    }, p.throttle = function (t, e, n) {
        var i, r, s, o = null, a = 0;
        n || (n = {});
        var l = function () {
            a = n.leading === !1 ? 0 : p.now(), o = null, s = t.apply(i, r), o || (i = r = null)
        };
        return function () {
            var c = p.now();
            a || n.leading !== !1 || (a = c);
            var u = e - (c - a);
            return i = this, r = arguments, 0 >= u || u > e ? (clearTimeout(o), o = null, a = c, s = t.apply(i, r), o || (i = r = null)) : o || n.trailing === !1 || (o = setTimeout(l, u)), s
        }
    }, p.debounce = function (t, e, n) {
        var i, r, s, o, a, l = function () {
            var c = p.now() - o;
            e > c && c > 0 ? i = setTimeout(l, e - c) : (i = null, n || (a = t.apply(s, r), i || (s = r = null)))
        };
        return function () {
            s = this, r = arguments, o = p.now();
            var c = n && !i;
            return i || (i = setTimeout(l, e)), c && (a = t.apply(s, r), s = r = null), a
        }
    }, p.wrap = function (t, e) {
        return p.partial(e, t)
    }, p.negate = function (t) {
        return function () {
            return!t.apply(this, arguments)
        }
    }, p.compose = function () {
        var t = arguments, e = t.length - 1;
        return function () {
            for (var n = e, i = t[e].apply(this, arguments); n--; )
                i = t[n].call(this, i);
            return i
        }
    }, p.after = function (t, e) {
        return function () {
            return--t < 1 ? e.apply(this, arguments) : void 0
        }
    }, p.before = function (t, e) {
        var n;
        return function () {
            return--t > 0 ? n = e.apply(this, arguments) : e = null, n
        }
    }, p.once = p.partial(p.before, 2), p.keys = function (t) {
        if (!p.isObject(t))
            return[];
        if (d)
            return d(t);
        var e = [];
        for (var n in t)
            p.has(t, n) && e.push(n);
        return e
    }, p.values = function (t) {
        for (var e = p.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++)
            i[r] = t[e[r]];
        return i
    }, p.pairs = function (t) {
        for (var e = p.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++)
            i[r] = [e[r], t[e[r]]];
        return i
    }, p.invert = function (t) {
        for (var e = {}, n = p.keys(t), i = 0, r = n.length; r > i; i++)
            e[t[n[i]]] = n[i];
        return e
    }, p.functions = p.methods = function (t) {
        var e = [];
        for (var n in t)
            p.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, p.extend = function (t) {
        if (!p.isObject(t))
            return t;
        for (var e, n, i = 1, r = arguments.length; r > i; i++) {
            e = arguments[i];
            for (n in e)
                c.call(e, n) && (t[n] = e[n])
        }
        return t
    }, p.pick = function (t, e, n) {
        var i, r = {};
        if (null == t)
            return r;
        if (p.isFunction(e)) {
            e = f(e, n);
            for (i in t) {
                var s = t[i];
                e(s, i, t) && (r[i] = s)
            }
        } else {
            var l = a.apply([], o.call(arguments, 1));
            t = new Object(t);
            for (var c = 0, u = l.length; u > c; c++)
                i = l[c], i in t && (r[i] = t[i])
        }
        return r
    }, p.omit = function (t, e, n) {
        if (p.isFunction(e))
            e = p.negate(e);
        else {
            var i = p.map(a.apply([], o.call(arguments, 1)), String);
            e = function (t, e) {
                return!p.contains(i, e)
            }
        }
        return p.pick(t, e, n)
    }, p.defaults = function (t) {
        if (!p.isObject(t))
            return t;
        for (var e = 1, n = arguments.length; n > e; e++) {
            var i = arguments[e];
            for (var r in i)
                void 0 === t[r] && (t[r] = i[r])
        }
        return t
    }, p.clone = function (t) {
        return p.isObject(t) ? p.isArray(t) ? t.slice() : p.extend({}, t) : t
    }, p.tap = function (t, e) {
        return e(t), t
    };
    var y = function (t, e, n, i) {
        if (t === e)
            return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e)
            return t === e;
        t instanceof p && (t = t._wrapped), e instanceof p && (e = e._wrapped);
        var r = l.call(t);
        if (r !== l.call(e))
            return!1;
        switch (r) {
            case"[object RegExp]":
            case"[object String]":
                return"" + t == "" + e;
            case"[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case"[object Date]":
            case"[object Boolean]":
                return +t === +e
        }
        if ("object" != typeof t || "object" != typeof e)
            return!1;
        for (var s = n.length; s--; )
            if (n[s] === t)
                return i[s] === e;
        var o = t.constructor, a = e.constructor;
        if (o !== a && "constructor"in t && "constructor"in e && !(p.isFunction(o) && o instanceof o && p.isFunction(a) && a instanceof a))
            return!1;
        n.push(t), i.push(e);
        var c, u;
        if ("[object Array]" === r) {
            if (c = t.length, u = c === e.length)
                for (; c-- && (u = y(t[c], e[c], n, i)); )
                    ;
        } else {
            var d, h = p.keys(t);
            if (c = h.length, u = p.keys(e).length === c)
                for (; c-- && (d = h[c], u = p.has(e, d) && y(t[d], e[d], n, i)); )
                    ;
        }
        return n.pop(), i.pop(), u
    };
    p.isEqual = function (t, e) {
        return y(t, e, [], [])
    }, p.isEmpty = function (t) {
        if (null == t)
            return!0;
        if (p.isArray(t) || p.isString(t) || p.isArguments(t))
            return 0 === t.length;
        for (var e in t)
            if (p.has(t, e))
                return!1;
        return!0
    }, p.isElement = function (t) {
        return!(!t || 1 !== t.nodeType)
    }, p.isArray = u || function (t) {
        return"[object Array]" === l.call(t)
    }, p.isObject = function (t) {
        var e = typeof t;
        return"function" === e || "object" === e && !!t
    }, p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
        p["is" + t] = function (e) {
            return l.call(e) === "[object " + t + "]"
        }
    }), p.isArguments(arguments) || (p.isArguments = function (t) {
        return p.has(t, "callee")
    }), "function" != typeof /./ && (p.isFunction = function (t) {
        return"function" == typeof t || !1
    }), p.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, p.isNaN = function (t) {
        return p.isNumber(t) && t !== +t
    }, p.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" === l.call(t)
    }, p.isNull = function (t) {
        return null === t
    }, p.isUndefined = function (t) {
        return void 0 === t
    }, p.has = function (t, e) {
        return null != t && c.call(t, e)
    }, p.noConflict = function () {
        return t._ = e, this
    }, p.identity = function (t) {
        return t
    }, p.constant = function (t) {
        return function () {
            return t
        }
    }, p.noop = function () {
    }, p.property = function (t) {
        return function (e) {
            return e[t]
        }
    }, p.matches = function (t) {
        var e = p.pairs(t), n = e.length;
        return function (t) {
            if (null == t)
                return!n;
            t = new Object(t);
            for (var i = 0; n > i; i++) {
                var r = e[i], s = r[0];
                if (r[1] !== t[s] || !(s in t))
                    return!1
            }
            return!0
        }
    }, p.times = function (t, e, n) {
        var i = Array(Math.max(0, t));
        e = f(e, n, 1);
        for (var r = 0; t > r; r++)
            i[r] = e(r);
        return i
    }, p.random = function (t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, p.now = Date.now || function () {
        return(new Date).getTime()
    };
    var b = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, x = p.invert(b), w = function (t) {
        var e = function (e) {
            return t[e]
        }, n = "(?:" + p.keys(t).join("|") + ")", i = RegExp(n), r = RegExp(n, "g");
        return function (t) {
            return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t
        }
    };
    p.escape = w(b), p.unescape = w(x), p.result = function (t, e) {
        if (null == t)
            return void 0;
        var n = t[e];
        return p.isFunction(n) ? t[e]() : n
    };
    var k = 0;
    p.uniqueId = function (t) {
        var e = ++k + "";
        return t ? t + e : e
    }, p.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var C = /(.)^/, S = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"}, T = /\\|'|\r|\n|\u2028|\u2029/g, j = function (t) {
        return"\\" + S[t]
    };
    p.template = function (t, e, n) {
        !e && n && (e = n), e = p.defaults({}, e, p.templateSettings);
        var i = RegExp([(e.escape || C).source, (e.interpolate || C).source, (e.evaluate || C).source].join("|") + "|$", "g"), r = 0, s = "__p+='";
        t.replace(i, function (e, n, i, o, a) {
            return s += t.slice(r, a).replace(T, j), r = a + e.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), e
        }), s += "';\n", e.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(e.variable || "obj", "_", s)
        } catch (a) {
            throw a.source = s, a
        }
        var l = function (t) {
            return o.call(this, t, p)
        }, c = e.variable || "obj";
        return l.source = "function(" + c + "){\n" + s + "}", l
    }, p.chain = function (t) {
        var e = p(t);
        return e._chain = !0, e
    };
    var E = function (t) {
        return this._chain ? p(t).chain() : t
    };
    p.mixin = function (t) {
        p.each(p.functions(t), function (e) {
            var n = p[e] = t[e];
            p.prototype[e] = function () {
                var t = [this._wrapped];
                return s.apply(t, arguments), E.call(this, n.apply(p, t))
            }
        })
    }, p.mixin(p), p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = n[t];
        p.prototype[t] = function () {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], E.call(this, n)
        }
    }), p.each(["concat", "join", "slice"], function (t) {
        var e = n[t];
        p.prototype[t] = function () {
            return E.call(this, e.apply(this._wrapped, arguments))
        }
    }), p.prototype.value = function () {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return p
    })
}.call(this), function () {
    this.Gmaps = {build: function (t, e) {
            var n;
            return null == e && (e = {}), new (n = _.isFunction(e.handler) ? e.handler : Gmaps.Objects.Handler)(t, e)
        }, Builders: {}, Objects: {}, Google: {Objects: {}, Builders: {}}}
}.call(this), function () {
    var t, e = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++)
            if (e in this && this[e] === t)
                return e;
        return -1
    };
    t = ["extended", "included"], this.Gmaps.Base = function () {
        function n() {
        }
        return n.extend = function (n) {
            var i, r, s;
            for (i in n)
                r = n[i], e.call(t, i) < 0 && (this[i] = r);
            return null != (s = n.extended) && s.apply(this), this
        }, n.include = function (n) {
            var i, r, s;
            for (i in n)
                r = n[i], e.call(t, i) < 0 && (this.prototype[i] = r);
            return null != (s = n.included) && s.apply(this), this
        }, n
    }()
}.call(this), function () {
    this.Gmaps.Objects.BaseBuilder = function () {
        function t() {
        }
        return t.prototype.build = function () {
            return new (this.model_class())(this.serviceObject)
        }, t.prototype.before_init = function () {
        }, t.prototype.after_init = function () {
        }, t.prototype.addListener = function (t, e) {
            return this.primitives().addListener(this.getServiceObject(), t, e)
        }, t.prototype.getServiceObject = function () {
            return this.serviceObject
        }, t.prototype.primitives = function () {
            return this.constructor.PRIMITIVES
        }, t.prototype.model_class = function () {
            return this.constructor.OBJECT
        }, t
    }()
}.call(this), function () {
    this.Gmaps.Objects.Builders = function (t, e, n) {
        return{build: function (i, r, s) {
                var o;
                return e.PRIMITIVES = n, t.OBJECT = e, t.PRIMITIVES = n, o = new t(i, r, s), o.build()
            }}
    }
}.call(this), function () {
    this.Gmaps.Objects.Handler = function () {
        function t(t, e) {
            this.type = t, null == e && (e = {}), this.setPrimitives(e), this.setOptions(e), this._cacheAllBuilders(), this.resetBounds()
        }
        return t.prototype.buildMap = function (t, e) {
            return null == e && (e = function () {
            }), this.map = this._builder("Map").build(t, function (t) {
                return function () {
                    return t._createClusterer(), e()
                }
            }(this))
        }, t.prototype.addMarkers = function (t, e) {
            return _.map(t, function (t) {
                return function (n) {
                    return t.addMarker(n, e)
                }
            }(this))
        }, t.prototype.addMarker = function (t, e) {
            var n;
            return n = this._builder("Marker").build(t, e, this.marker_options), n.setMap(this.getMap()), this.clusterer.addMarker(n), n
        }, t.prototype.addCircles = function (t, e) {
            return _.map(t, function (t) {
                return function (n) {
                    return t.addCircle(n, e)
                }
            }(this))
        }, t.prototype.addCircle = function (t, e) {
            return this._addResource("circle", t, e)
        }, t.prototype.addPolylines = function (t, e) {
            return _.map(t, function (t) {
                return function (n) {
                    return t.addPolyline(n, e)
                }
            }(this))
        }, t.prototype.addPolyline = function (t, e) {
            return this._addResource("polyline", t, e)
        }, t.prototype.addPolygons = function (t, e) {
            return _.map(t, function (t) {
                return function (n) {
                    return t.addPolygon(n, e)
                }
            }(this))
        }, t.prototype.addPolygon = function (t, e) {
            return this._addResource("polygon", t, e)
        }, t.prototype.addKmls = function (t, e) {
            return _.map(t, function (t) {
                return function (n) {
                    return t.addKml(n, e)
                }
            }(this))
        }, t.prototype.addKml = function (t, e) {
            return this._addResource("kml", t, e)
        }, t.prototype.removeMarkers = function (t) {
            return _.map(t, function (t) {
                return function (e) {
                    return t.removeMarker(e)
                }
            }(this))
        }, t.prototype.removeMarker = function (t) {
            return t.clear(), this.clusterer.removeMarker(t)
        }, t.prototype.fitMapToBounds = function () {
            return this.map.fitToBounds(this.bounds.getServiceObject())
        }, t.prototype.getMap = function () {
            return this.map.getServiceObject()
        }, t.prototype.setOptions = function (t) {
            return this.marker_options = _.extend(this._default_marker_options(), t.markers), this.builders = _.extend(this._default_builders(), t.builders), this.models = _.extend(this._default_models(), t.models)
        }, t.prototype.resetBounds = function () {
            return this.bounds = this._builder("Bound").build()
        }, t.prototype.setPrimitives = function (t) {
            return this.primitives = void 0 === t.primitives ? this._rootModule().Primitives() : _.isFunction(t.primitives) ? t.primitives() : t.primitives
        }, t.prototype.currentInfowindow = function () {
            return this.builders.Marker.CURRENT_INFOWINDOW
        }, t.prototype._addResource = function (t, e, n) {
            var i;
            return i = this._builder(t).build(e, n), i.setMap(this.getMap()), i
        }, t.prototype._cacheAllBuilders = function () {
            var t;
            return t = this, _.each(["Bound", "Circle", "Clusterer", "Kml", "Map", "Marker", "Polygon", "Polyline"], function (e) {
                return t._builder(e)
            })
        }, t.prototype._clusterize = function () {
            return _.isObject(this.marker_options.clusterer)
        }, t.prototype._createClusterer = function () {
            return this.clusterer = this._builder("Clusterer").build({map: this.getMap()}, this.marker_options.clusterer)
        }, t.prototype._default_marker_options = function () {
            return _.clone({singleInfowindow: !0, maxRandomDistance: 0, clusterer: {maxZoom: 5, gridSize: 50}})
        }, t.prototype._builder = function (t) {
            var e;
            return t = this._capitalize(t), null == this[e = "__builder" + t] && (this[e] = Gmaps.Objects.Builders(this.builders[t], this.models[t], this.primitives)), this["__builder" + t]
        }, t.prototype._default_models = function () {
            var t;
            return t = _.clone(this._rootModule().Objects), this._clusterize() ? t : (t.Clusterer = Gmaps.Objects.NullClusterer, t)
        }, t.prototype._capitalize = function (t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }, t.prototype._default_builders = function () {
            return _.clone(this._rootModule().Builders)
        }, t.prototype._rootModule = function () {
            return null == this.__rootModule && (this.__rootModule = Gmaps[this.type]), this.__rootModule
        }, t
    }()
}.call(this), window.onload = function () {
    $(document).foundation()
};
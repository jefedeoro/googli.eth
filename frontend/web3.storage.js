/*! For license information please see main.bundle.js.LICENSE.txt */
(() => { var __webpack_modules__ = { 9824: (t, e) => { "use strict"; const r = "undefined" != typeof BigUint64Array,
                        n = Symbol(),
                        o = 1024;

                    function i(t, e) { const r = new Uint32Array(t),
                            n = new Uint16Array(t); var i = r[e + -4 >>> 2] >>> 1,
                            s = e >>> 1; if (i <= o) return String.fromCharCode.apply(String, n.subarray(s, s + i)); const a = [];
                        do { const t = n[s + o - 1],
                                e = t >= 55296 && t < 56320 ? 1023 : o;
                            a.push(String.fromCharCode.apply(String, n.subarray(s, s += e))), i -= e } while (i > o); return a.join("") + String.fromCharCode.apply(String, n.subarray(s, s + i)) }

                    function s(t) { const e = {};

                        function r(t, e) { return t ? i(t.buffer, e) : "<yet unknown>" } const n = t.env = t.env || {}; return n.abort = n.abort || function(t, o, i, s) { const a = e.memory || n.memory; throw Error("abort: " + r(a, t) + " at " + r(a, o) + ":" + i + ":" + s) }, n.trace = n.trace || function(t, o) { const i = e.memory || n.memory;
                            console.log("trace: " + r(i, t) + (o ? " " : "") + Array.prototype.slice.call(arguments, 2, 2 + o).join(", ")) }, t.Math = t.Math || Math, t.Date = t.Date || Date, e }

                    function a(t, e) { const n = e.exports,
                            o = n.memory,
                            s = n.table,
                            a = n.__alloc,
                            c = n.__retain,
                            u = n.__rtti_base || -1;

                        function h(t) { const e = new Uint32Array(o.buffer); if ((t >>>= 0) >= e[u >>> 2]) throw Error("invalid id: " + t); return e[(u + 4 >>> 2) + 2 * t] }

                        function l(t) { const e = new Uint32Array(o.buffer); if ((t >>>= 0) >= e[u >>> 2]) throw Error("invalid id: " + t); return e[(u + 4 >>> 2) + 2 * t + 1] }

                        function p(t) { return 31 - Math.clz32(t >>> 5 & 31) }

                        function d(t, e, r) { const n = o.buffer; if (r) switch (t) {
                                case 2:
                                    return new Float32Array(n);
                                case 3:
                                    return new Float64Array(n) } else switch (t) {
                                case 0:
                                    return new(e ? Int8Array : Uint8Array)(n);
                                case 1:
                                    return new(e ? Int16Array : Uint16Array)(n);
                                case 2:
                                    return new(e ? Int32Array : Uint32Array)(n);
                                case 3:
                                    return new(e ? BigInt64Array : BigUint64Array)(n) }
                            throw Error("unsupported align: " + t) }

                        function y(t) { const e = new Uint32Array(o.buffer),
                                r = e[t + -8 >>> 2],
                                n = h(r); if (!(1 & n)) throw Error("not an array: " + r); const i = p(n); var s = e[t + 4 >>> 2]; const a = 2 & n ? e[t + 12 >>> 2] : e[s + -4 >>> 2] >>> i; return d(i, 1024 & n, 2048 & n).subarray(s >>>= i, s + a) }

                        function g(t, e, r) { return new t(w(t, e, r)) }

                        function w(t, e, r) { const n = o.buffer,
                                i = new Uint32Array(n),
                                s = i[r + 4 >>> 2]; return new t(n, s, i[s + -4 >>> 2] >>> e) } return t.__allocString = function(t) { const e = t.length,
                                r = a(e << 1, 1),
                                n = new Uint16Array(o.buffer); for (var i = 0, s = r >>> 1; i < e; ++i) n[s + i] = t.charCodeAt(i); return r }, t.__getString = function(t) { const e = o.buffer; if (1 !== new Uint32Array(e)[t + -8 >>> 2]) throw Error("not a string: " + t); return i(e, t) }, t.__allocArray = function(t, e) { const r = h(t); if (!(3 & r)) throw Error("not an array: " + t + " @ " + r); const n = p(r),
                                i = e.length,
                                s = a(i << n, 0),
                                u = a(2 & r ? 16 : 12, t),
                                f = new Uint32Array(o.buffer);
                            f[u + 0 >>> 2] = c(s), f[u + 4 >>> 2] = s, f[u + 8 >>> 2] = i << n, 2 & r && (f[u + 12 >>> 2] = i); const l = d(n, 1024 & r, 2048 & r); if (8192 & r)
                                for (let t = 0; t < i; ++t) l[(s >>> n) + t] = c(e[t]);
                            else l.set(e, s >>> n); return u }, t.__getArrayView = y, t.__getArray = function(t) { const e = y(t),
                                r = e.length,
                                n = new Array(r); for (let t = 0; t < r; t++) n[t] = e[t]; return n }, t.__getArrayBuffer = function(t) { const e = o.buffer,
                                r = new Uint32Array(e)[t + -4 >>> 2]; return e.slice(t, t + r) }, t.__getInt8Array = g.bind(null, Int8Array, 0), t.__getInt8ArrayView = w.bind(null, Int8Array, 0), t.__getUint8Array = g.bind(null, Uint8Array, 0), t.__getUint8ArrayView = w.bind(null, Uint8Array, 0), t.__getUint8ClampedArray = g.bind(null, Uint8ClampedArray, 0), t.__getUint8ClampedArrayView = w.bind(null, Uint8ClampedArray, 0), t.__getInt16Array = g.bind(null, Int16Array, 1), t.__getInt16ArrayView = w.bind(null, Int16Array, 1), t.__getUint16Array = g.bind(null, Uint16Array, 1), t.__getUint16ArrayView = w.bind(null, Uint16Array, 1), t.__getInt32Array = g.bind(null, Int32Array, 2), t.__getInt32ArrayView = w.bind(null, Int32Array, 2), t.__getUint32Array = g.bind(null, Uint32Array, 2), t.__getUint32ArrayView = w.bind(null, Uint32Array, 2), r && (t.__getInt64Array = g.bind(null, BigInt64Array, 3), t.__getInt64ArrayView = w.bind(null, BigInt64Array, 3), t.__getUint64Array = g.bind(null, BigUint64Array, 3), t.__getUint64ArrayView = w.bind(null, BigUint64Array, 3)), t.__getFloat32Array = g.bind(null, Float32Array, 2), t.__getFloat32ArrayView = w.bind(null, Float32Array, 2), t.__getFloat64Array = g.bind(null, Float64Array, 3), t.__getFloat64ArrayView = w.bind(null, Float64Array, 3), t.__instanceof = function(t, e) { const r = new Uint32Array(o.buffer); var n = r[t + -8 >>> 2]; if (n <= r[u >>> 2])
                                do { if (n == e) return !0 } while (n = l(n)); return !1 }, t.memory = t.memory || o, t.table = t.table || s, f(n, t) }

                    function c(t) { return "undefined" != typeof Response && t instanceof Response }
                    async function u(t, e) { return c(t = await t) ? h(t, e) : a(s(e || (e = {})), await WebAssembly.instantiate(t instanceof WebAssembly.Module ? t : await WebAssembly.compile(t), e)) }
                    async function h(t, e) { return WebAssembly.instantiateStreaming ? a(s(e || (e = {})), (await WebAssembly.instantiateStreaming(t, e)).instance) : u(c(t = await t) ? t.arrayBuffer() : t, e) }

                    function f(t, e) { var r = e ? Object.create(e) : {},
                            o = t.__argumentsLength ? function(e) { t.__argumentsLength.value = e } : t.__setArgumentsLength || t.__setargc || function() {}; for (let e in t) { if (!Object.prototype.hasOwnProperty.call(t, e)) continue; const i = t[e]; let s = e.split("."),
                                a = r; for (; s.length > 1;) { let t = s.shift();
                                Object.prototype.hasOwnProperty.call(a, t) || (a[t] = {}), a = a[t] } let c = s[0],
                                u = c.indexOf("#"); if (u >= 0) { let r = c.substring(0, u),
                                    s = a[r]; if (void 0 === s || !s.prototype) { let t = function(...e) { return t.wrap(t.prototype.constructor(0, ...e)) };
                                    t.prototype = { valueOf: function() { return this[n] } }, t.wrap = function(e) { return Object.create(t.prototype, {
                                            [n]: { value: e, writable: !1 } }) }, s && Object.getOwnPropertyNames(s).forEach((e => Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e)))), a[r] = t } if (c = c.substring(u + 1), a = a[r].prototype, /^(get|set):/.test(c)) { if (!Object.prototype.hasOwnProperty.call(a, c = c.substring(4))) { let r = t[e.replace("set:", "get:")],
                                            o = t[e.replace("get:", "set:")];
                                        Object.defineProperty(a, c, { get: function() { return r(this[n]) }, set: function(t) { o(this[n], t) }, enumerable: !0 }) } } else "constructor" === c ? (a[c] = (...t) => (o(t.length), i(...t))).original = i : (a[c] = function(...t) { return o(t.length), i(this[n], ...t) }).original = i } else /^(get|set):/.test(c) ? Object.prototype.hasOwnProperty.call(a, c = c.substring(4)) || Object.defineProperty(a, c, { get: t[e.replace("set:", "get:")], set: t[e.replace("get:", "set:")], enumerable: !0 }) : "function" == typeof i && i !== o ? (a[c] = (...t) => (o(t.length), i(...t))).original = i : a[c] = i } return r }
                    e.instantiate = u, e.instantiateSync = function(t, e) { return a(s(e || (e = {})), new WebAssembly.Instance(t instanceof WebAssembly.Module ? t : new WebAssembly.Module(t), e)) }, e.instantiateStreaming = h, e.demangle = f }, 4537: t => { "use strict";
                    t.exports = function(t, e) { for (var r = new Array(arguments.length - 1), n = 0, o = 2, i = !0; o < arguments.length;) r[n++] = arguments[o++]; return new Promise((function(o, s) { r[n] = function(t) { if (i)
                                    if (i = !1, t) s(t);
                                    else { for (var e = new Array(arguments.length - 1), r = 0; r < e.length;) e[r++] = arguments[r];
                                        o.apply(null, e) } }; try { t.apply(e || null, r) } catch (t) { i && (i = !1, s(t)) } })) } }, 7419: (t, e) => { "use strict"; var r = e;
                    r.length = function(t) { var e = t.length; if (!e) return 0; for (var r = 0; --e % 4 > 1 && "=" === t.charAt(e);) ++r; return Math.ceil(3 * t.length) / 4 - r }; for (var n = new Array(64), o = new Array(123), i = 0; i < 64;) o[n[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
                    r.encode = function(t, e, r) { for (var o, i = null, s = [], a = 0, c = 0; e < r;) { var u = t[e++]; switch (c) {
                                case 0:
                                    s[a++] = n[u >> 2], o = (3 & u) << 4, c = 1; break;
                                case 1:
                                    s[a++] = n[o | u >> 4], o = (15 & u) << 2, c = 2; break;
                                case 2:
                                    s[a++] = n[o | u >> 6], s[a++] = n[63 & u], c = 0 }
                            a > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, s)), a = 0) } return c && (s[a++] = n[o], s[a++] = 61, 1 === c && (s[a++] = 61)), i ? (a && i.push(String.fromCharCode.apply(String, s.slice(0, a))), i.join("")) : String.fromCharCode.apply(String, s.slice(0, a)) }; var s = "invalid encoding";
                    r.decode = function(t, e, r) { for (var n, i = r, a = 0, c = 0; c < t.length;) { var u = t.charCodeAt(c++); if (61 === u && a > 1) break; if (void 0 === (u = o[u])) throw Error(s); switch (a) {
                                case 0:
                                    n = u, a = 1; break;
                                case 1:
                                    e[r++] = n << 2 | (48 & u) >> 4, n = u, a = 2; break;
                                case 2:
                                    e[r++] = (15 & n) << 4 | (60 & u) >> 2, n = u, a = 3; break;
                                case 3:
                                    e[r++] = (3 & n) << 6 | u, a = 0 } } if (1 === a) throw Error(s); return r - i }, r.test = function(t) { return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t) } }, 9211: t => { "use strict";

                    function e() { this._listeners = {} }
                    t.exports = e, e.prototype.on = function(t, e, r) { return (this._listeners[t] || (this._listeners[t] = [])).push({ fn: e, ctx: r || this }), this }, e.prototype.off = function(t, e) { if (void 0 === t) this._listeners = {};
                        else if (void 0 === e) this._listeners[t] = [];
                        else
                            for (var r = this._listeners[t], n = 0; n < r.length;) r[n].fn === e ? r.splice(n, 1) : ++n; return this }, e.prototype.emit = function(t) { var e = this._listeners[t]; if (e) { for (var r = [], n = 1; n < arguments.length;) r.push(arguments[n++]); for (n = 0; n < e.length;) e[n].fn.apply(e[n++].ctx, r) } return this } }, 945: t => { "use strict";

                    function e(t) { return "undefined" != typeof Float32Array ? function() { var e = new Float32Array([-0]),
                                r = new Uint8Array(e.buffer),
                                n = 128 === r[3];

                            function o(t, n, o) { e[0] = t, n[o] = r[0], n[o + 1] = r[1], n[o + 2] = r[2], n[o + 3] = r[3] }

                            function i(t, n, o) { e[0] = t, n[o] = r[3], n[o + 1] = r[2], n[o + 2] = r[1], n[o + 3] = r[0] }

                            function s(t, n) { return r[0] = t[n], r[1] = t[n + 1], r[2] = t[n + 2], r[3] = t[n + 3], e[0] }

                            function a(t, n) { return r[3] = t[n], r[2] = t[n + 1], r[1] = t[n + 2], r[0] = t[n + 3], e[0] }
                            t.writeFloatLE = n ? o : i, t.writeFloatBE = n ? i : o, t.readFloatLE = n ? s : a, t.readFloatBE = n ? a : s }() : function() {
                            function e(t, e, r, n) { var o = e < 0 ? 1 : 0; if (o && (e = -e), 0 === e) t(1 / e > 0 ? 0 : 2147483648, r, n);
                                else if (isNaN(e)) t(2143289344, r, n);
                                else if (e > 34028234663852886e22) t((o << 31 | 2139095040) >>> 0, r, n);
                                else if (e < 11754943508222875e-54) t((o << 31 | Math.round(e / 1401298464324817e-60)) >>> 0, r, n);
                                else { var i = Math.floor(Math.log(e) / Math.LN2);
                                    t((o << 31 | i + 127 << 23 | 8388607 & Math.round(e * Math.pow(2, -i) * 8388608)) >>> 0, r, n) } }

                            function s(t, e, r) { var n = t(e, r),
                                    o = 2 * (n >> 31) + 1,
                                    i = n >>> 23 & 255,
                                    s = 8388607 & n; return 255 === i ? s ? NaN : o * (1 / 0) : 0 === i ? 1401298464324817e-60 * o * s : o * Math.pow(2, i - 150) * (s + 8388608) }
                            t.writeFloatLE = e.bind(null, r), t.writeFloatBE = e.bind(null, n), t.readFloatLE = s.bind(null, o), t.readFloatBE = s.bind(null, i) }(), "undefined" != typeof Float64Array ? function() { var e = new Float64Array([-0]),
                                r = new Uint8Array(e.buffer),
                                n = 128 === r[7];

                            function o(t, n, o) { e[0] = t, n[o] = r[0], n[o + 1] = r[1], n[o + 2] = r[2], n[o + 3] = r[3], n[o + 4] = r[4], n[o + 5] = r[5], n[o + 6] = r[6], n[o + 7] = r[7] }

                            function i(t, n, o) { e[0] = t, n[o] = r[7], n[o + 1] = r[6], n[o + 2] = r[5], n[o + 3] = r[4], n[o + 4] = r[3], n[o + 5] = r[2], n[o + 6] = r[1], n[o + 7] = r[0] }

                            function s(t, n) { return r[0] = t[n], r[1] = t[n + 1], r[2] = t[n + 2], r[3] = t[n + 3], r[4] = t[n + 4], r[5] = t[n + 5], r[6] = t[n + 6], r[7] = t[n + 7], e[0] }

                            function a(t, n) { return r[7] = t[n], r[6] = t[n + 1], r[5] = t[n + 2], r[4] = t[n + 3], r[3] = t[n + 4], r[2] = t[n + 5], r[1] = t[n + 6], r[0] = t[n + 7], e[0] }
                            t.writeDoubleLE = n ? o : i, t.writeDoubleBE = n ? i : o, t.readDoubleLE = n ? s : a, t.readDoubleBE = n ? a : s }() : function() {
                            function e(t, e, r, n, o, i) { var s = n < 0 ? 1 : 0; if (s && (n = -n), 0 === n) t(0, o, i + e), t(1 / n > 0 ? 0 : 2147483648, o, i + r);
                                else if (isNaN(n)) t(0, o, i + e), t(2146959360, o, i + r);
                                else if (n > 17976931348623157e292) t(0, o, i + e), t((s << 31 | 2146435072) >>> 0, o, i + r);
                                else { var a; if (n < 22250738585072014e-324) t((a = n / 5e-324) >>> 0, o, i + e), t((s << 31 | a / 4294967296) >>> 0, o, i + r);
                                    else { var c = Math.floor(Math.log(n) / Math.LN2);
                                        1024 === c && (c = 1023), t(4503599627370496 * (a = n * Math.pow(2, -c)) >>> 0, o, i + e), t((s << 31 | c + 1023 << 20 | 1048576 * a & 1048575) >>> 0, o, i + r) } } }

                            function s(t, e, r, n, o) { var i = t(n, o + e),
                                    s = t(n, o + r),
                                    a = 2 * (s >> 31) + 1,
                                    c = s >>> 20 & 2047,
                                    u = 4294967296 * (1048575 & s) + i; return 2047 === c ? u ? NaN : a * (1 / 0) : 0 === c ? 5e-324 * a * u : a * Math.pow(2, c - 1075) * (u + 4503599627370496) }
                            t.writeDoubleLE = e.bind(null, r, 0, 4), t.writeDoubleBE = e.bind(null, n, 4, 0), t.readDoubleLE = s.bind(null, o, 0, 4), t.readDoubleBE = s.bind(null, i, 4, 0) }(), t }

                    function r(t, e, r) { e[r] = 255 & t, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 }

                    function n(t, e, r) { e[r] = t >>> 24, e[r + 1] = t >>> 16 & 255, e[r + 2] = t >>> 8 & 255, e[r + 3] = 255 & t }

                    function o(t, e) { return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0 }

                    function i(t, e) { return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0 }
                    t.exports = e(e) }, 7199: module => { "use strict";

                    function inquire(moduleName) { try { var mod = eval("quire".replace(/^/, "re"))(moduleName); if (mod && (mod.length || Object.keys(mod).length)) return mod } catch (t) {} return null }
                    module.exports = inquire }, 6662: t => { "use strict";
                    t.exports = function(t, e, r) { var n = r || 8192,
                            o = n >>> 1,
                            i = null,
                            s = n; return function(r) { if (r < 1 || r > o) return t(r);
                            s + r > n && (i = t(n), s = 0); var a = e.call(i, s, s += r); return 7 & s && (s = 1 + (7 | s)), a } } }, 4997: (t, e) => { "use strict"; var r = e;
                    r.length = function(t) { for (var e = 0, r = 0, n = 0; n < t.length; ++n)(r = t.charCodeAt(n)) < 128 ? e += 1 : r < 2048 ? e += 2 : 55296 == (64512 & r) && 56320 == (64512 & t.charCodeAt(n + 1)) ? (++n, e += 4) : e += 3; return e }, r.read = function(t, e, r) { if (r - e < 1) return ""; for (var n, o = null, i = [], s = 0; e < r;)(n = t[e++]) < 128 ? i[s++] = n : n > 191 && n < 224 ? i[s++] = (31 & n) << 6 | 63 & t[e++] : n > 239 && n < 365 ? (n = ((7 & n) << 18 | (63 & t[e++]) << 12 | (63 & t[e++]) << 6 | 63 & t[e++]) - 65536, i[s++] = 55296 + (n >> 10), i[s++] = 56320 + (1023 & n)) : i[s++] = (15 & n) << 12 | (63 & t[e++]) << 6 | 63 & t[e++], s > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, i)), s = 0); return o ? (s && o.push(String.fromCharCode.apply(String, i.slice(0, s))), o.join("")) : String.fromCharCode.apply(String, i.slice(0, s)) }, r.write = function(t, e, r) { for (var n, o, i = r, s = 0; s < t.length; ++s)(n = t.charCodeAt(s)) < 128 ? e[r++] = n : n < 2048 ? (e[r++] = n >> 6 | 192, e[r++] = 63 & n | 128) : 55296 == (64512 & n) && 56320 == (64512 & (o = t.charCodeAt(s + 1))) ? (n = 65536 + ((1023 & n) << 10) + (1023 & o), ++s, e[r++] = n >> 18 | 240, e[r++] = n >> 12 & 63 | 128, e[r++] = n >> 6 & 63 | 128, e[r++] = 63 & n | 128) : (e[r++] = n >> 12 | 224, e[r++] = n >> 6 & 63 | 128, e[r++] = 63 & n | 128); return r - i } }, 9742: (t, e) => { "use strict";
                    e.byteLength = function(t) { var e = c(t),
                            r = e[0],
                            n = e[1]; return 3 * (r + n) / 4 - n }, e.toByteArray = function(t) { var e, r, i = c(t),
                            s = i[0],
                            a = i[1],
                            u = new o(function(t, e, r) { return 3 * (e + r) / 4 - r }(0, s, a)),
                            h = 0,
                            f = a > 0 ? s - 4 : s; for (r = 0; r < f; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], u[h++] = e >> 16 & 255, u[h++] = e >> 8 & 255, u[h++] = 255 & e; return 2 === a && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, u[h++] = 255 & e), 1 === a && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, u[h++] = e >> 8 & 255, u[h++] = 255 & e), u }, e.fromByteArray = function(t) { for (var e, n = t.length, o = n % 3, i = [], s = 16383, a = 0, c = n - o; a < c; a += s) i.push(u(t, a, a + s > c ? c : a + s)); return 1 === o ? (e = t[n - 1], i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), i.join("") }; for (var r = [], n = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = i.length; s < a; ++s) r[s] = i[s], n[i.charCodeAt(s)] = s;

                    function c(t) { var e = t.length; if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var r = t.indexOf("="); return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4] }

                    function u(t, e, n) { for (var o, i, s = [], a = e; a < n; a += 3) o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]); return s.join("") }
                    n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63 }, 9668: (t, e, r) => { "use strict"; const { Buffer: n } = r(8764), o = Symbol.for("BufferList");

                    function i(t) { if (!(this instanceof i)) return new i(t);
                        i._init.call(this, t) }
                    i._init = function(t) { Object.defineProperty(this, o, { value: !0 }), this._bufs = [], this.length = 0, t && this.append(t) }, i.prototype._new = function(t) { return new i(t) }, i.prototype._offset = function(t) { if (0 === t) return [0, 0]; let e = 0; for (let r = 0; r < this._bufs.length; r++) { const n = e + this._bufs[r].length; if (t < n || r === this._bufs.length - 1) return [r, t - e];
                                e = n } }, i.prototype._reverseOffset = function(t) { const e = t[0]; let r = t[1]; for (let t = 0; t < e; t++) r += this._bufs[t].length; return r }, i.prototype.get = function(t) { if (t > this.length || t < 0) return; const e = this._offset(t); return this._bufs[e[0]][e[1]] }, i.prototype.slice = function(t, e) { return "number" == typeof t && t < 0 && (t += this.length), "number" == typeof e && e < 0 && (e += this.length), this.copy(null, 0, t, e) }, i.prototype.copy = function(t, e, r, o) { if (("number" != typeof r || r < 0) && (r = 0), ("number" != typeof o || o > this.length) && (o = this.length), r >= this.length) return t || n.alloc(0); if (o <= 0) return t || n.alloc(0); const i = !!t,
                                s = this._offset(r),
                                a = o - r; let c = a,
                                u = i && e || 0,
                                h = s[1]; if (0 === r && o === this.length) { if (!i) return 1 === this._bufs.length ? this._bufs[0] : n.concat(this._bufs, this.length); for (let e = 0; e < this._bufs.length; e++) this._bufs[e].copy(t, u), u += this._bufs[e].length; return t } if (c <= this._bufs[s[0]].length - h) return i ? this._bufs[s[0]].copy(t, e, h, h + c) : this._bufs[s[0]].slice(h, h + c);
                            i || (t = n.allocUnsafe(a)); for (let e = s[0]; e < this._bufs.length; e++) { const r = this._bufs[e].length - h; if (!(c > r)) { this._bufs[e].copy(t, u, h, h + c), u += r; break }
                                this._bufs[e].copy(t, u, h), u += r, c -= r, h && (h = 0) } return t.length > u ? t.slice(0, u) : t }, i.prototype.shallowSlice = function(t, e) { if (t = t || 0, e = "number" != typeof e ? this.length : e, t < 0 && (t += this.length), e < 0 && (e += this.length), t === e) return this._new(); const r = this._offset(t),
                                n = this._offset(e),
                                o = this._bufs.slice(r[0], n[0] + 1); return 0 === n[1] ? o.pop() : o[o.length - 1] = o[o.length - 1].slice(0, n[1]), 0 !== r[1] && (o[0] = o[0].slice(r[1])), this._new(o) }, i.prototype.toString = function(t, e, r) { return this.slice(e, r).toString(t) }, i.prototype.consume = function(t) { if (t = Math.trunc(t), Number.isNaN(t) || t <= 0) return this; for (; this._bufs.length;) { if (!(t >= this._bufs[0].length)) { this._bufs[0] = this._bufs[0].slice(t), this.length -= t; break }
                                t -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift() } return this }, i.prototype.duplicate = function() { const t = this._new(); for (let e = 0; e < this._bufs.length; e++) t.append(this._bufs[e]); return t }, i.prototype.append = function(t) { if (null == t) return this; if (t.buffer) this._appendBuffer(n.from(t.buffer, t.byteOffset, t.byteLength));
                            else if (Array.isArray(t))
                                for (let e = 0; e < t.length; e++) this.append(t[e]);
                            else if (this._isBufferList(t))
                                for (let e = 0; e < t._bufs.length; e++) this.append(t._bufs[e]);
                            else "number" == typeof t && (t = t.toString()), this._appendBuffer(n.from(t)); return this }, i.prototype._appendBuffer = function(t) { this._bufs.push(t), this.length += t.length }, i.prototype.indexOf = function(t, e, r) { if (void 0 === r && "string" == typeof e && (r = e, e = void 0), "function" == typeof t || Array.isArray(t)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.'); if ("number" == typeof t ? t = n.from([t]) : "string" == typeof t ? t = n.from(t, r) : this._isBufferList(t) ? t = t.slice() : Array.isArray(t.buffer) ? t = n.from(t.buffer, t.byteOffset, t.byteLength) : n.isBuffer(t) || (t = n.from(t)), e = Number(e || 0), isNaN(e) && (e = 0), e < 0 && (e = this.length + e), e < 0 && (e = 0), 0 === t.length) return e > this.length ? this.length : e; const o = this._offset(e); let i = o[0],
                                s = o[1]; for (; i < this._bufs.length; i++) { const e = this._bufs[i]; for (; s < e.length;)
                                    if (e.length - s >= t.length) { const r = e.indexOf(t, s); if (-1 !== r) return this._reverseOffset([i, r]);
                                        s = e.length - t.length + 1 } else { const e = this._reverseOffset([i, s]); if (this._match(e, t)) return e;
                                        s++ }
                                s = 0 } return -1 }, i.prototype._match = function(t, e) { if (this.length - t < e.length) return !1; for (let r = 0; r < e.length; r++)
                                if (this.get(t + r) !== e[r]) return !1;
                            return !0 },
                        function() { const t = { readDoubleBE: 8, readDoubleLE: 8, readFloatBE: 4, readFloatLE: 4, readInt32BE: 4, readInt32LE: 4, readUInt32BE: 4, readUInt32LE: 4, readInt16BE: 2, readInt16LE: 2, readUInt16BE: 2, readUInt16LE: 2, readInt8: 1, readUInt8: 1, readIntBE: null, readIntLE: null, readUIntBE: null, readUIntLE: null }; for (const e in t) ! function(e) { i.prototype[e] = null === t[e] ? function(t, r) { return this.slice(t, t + r)[e](0, r) } : function(r = 0) { return this.slice(r, r + t[e])[e](0) } }(e) }(), i.prototype._isBufferList = function(t) { return t instanceof i || i.isBufferList(t) }, i.isBufferList = function(t) { return null != t && t[o] }, t.exports = i }, 3294: (t, e, r) => { "use strict"; const n = r(6154);
                    t.exports = function(t) { return "function" == typeof t.stream ? n(t.stream()) : n(new Response(t).body) } }, 6154: t => { "use strict";
                    t.exports = async function*(t, e = {}) { const r = t.getReader(); try { for (;;) { const t = await r.read(); if (t.done) return;
                                yield t.value } } finally {!0 !== e.preventCancel && r.cancel(), r.releaseLock() } } }, 8764: (t, e, r) => { "use strict"; const n = r(9742),
                        o = r(645),
                        i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                    e.Buffer = c, e.SlowBuffer = function(t) { return +t != t && (t = 0), c.alloc(+t) }, e.INSPECT_MAX_BYTES = 50; const s = 2147483647;

                    function a(t) { if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"'); const e = new Uint8Array(t); return Object.setPrototypeOf(e, c.prototype), e }

                    function c(t, e, r) { if ("number" == typeof t) { if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number'); return f(t) } return u(t, e, r) }

                    function u(t, e, r) { if ("string" == typeof t) return function(t, e) { if ("string" == typeof e && "" !== e || (e = "utf8"), !c.isEncoding(e)) throw new TypeError("Unknown encoding: " + e); const r = 0 | y(t, e); let n = a(r); const o = n.write(t, e); return o !== r && (n = n.slice(0, o)), n }(t, e); if (ArrayBuffer.isView(t)) return function(t) { if (K(t, Uint8Array)) { const e = new Uint8Array(t); return p(e.buffer, e.byteOffset, e.byteLength) } return l(t) }(t); if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t); if (K(t, ArrayBuffer) || t && K(t.buffer, ArrayBuffer)) return p(t, e, r); if ("undefined" != typeof SharedArrayBuffer && (K(t, SharedArrayBuffer) || t && K(t.buffer, SharedArrayBuffer))) return p(t, e, r); if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number'); const n = t.valueOf && t.valueOf(); if (null != n && n !== t) return c.from(n, e, r); const o = function(t) { if (c.isBuffer(t)) { const e = 0 | d(t.length),
                                    r = a(e); return 0 === r.length || t.copy(r, 0, 0, e), r } return void 0 !== t.length ? "number" != typeof t.length || X(t.length) ? a(0) : l(t) : "Buffer" === t.type && Array.isArray(t.data) ? l(t.data) : void 0 }(t); if (o) return o; if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return c.from(t[Symbol.toPrimitive]("string"), e, r); throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t) }

                    function h(t) { if ("number" != typeof t) throw new TypeError('"size" argument must be of type number'); if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"') }

                    function f(t) { return h(t), a(t < 0 ? 0 : 0 | d(t)) }

                    function l(t) { const e = t.length < 0 ? 0 : 0 | d(t.length),
                            r = a(e); for (let n = 0; n < e; n += 1) r[n] = 255 & t[n]; return r }

                    function p(t, e, r) { if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds'); if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds'); let n; return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), Object.setPrototypeOf(n, c.prototype), n }

                    function d(t) { if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes"); return 0 | t }

                    function y(t, e) { if (c.isBuffer(t)) return t.length; if (ArrayBuffer.isView(t) || K(t, ArrayBuffer)) return t.byteLength; if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t); const r = t.length,
                            n = arguments.length > 2 && !0 === arguments[2]; if (!n && 0 === r) return 0; let o = !1; for (;;) switch (e) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return r;
                            case "utf8":
                            case "utf-8":
                                return G(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * r;
                            case "hex":
                                return r >>> 1;
                            case "base64":
                                return W(t).length;
                            default:
                                if (o) return n ? -1 : G(t).length;
                                e = ("" + e).toLowerCase(), o = !0 } }

                    function g(t, e, r) { let n = !1; if ((void 0 === e || e < 0) && (e = 0), e > this.length) return ""; if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return ""; if ((r >>>= 0) <= (e >>>= 0)) return ""; for (t || (t = "utf8");;) switch (t) {
                            case "hex":
                                return C(this, e, r);
                            case "utf8":
                            case "utf-8":
                                return B(this, e, r);
                            case "ascii":
                                return I(this, e, r);
                            case "latin1":
                            case "binary":
                                return T(this, e, r);
                            case "base64":
                                return x(this, e, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return O(this, e, r);
                            default:
                                if (n) throw new TypeError("Unknown encoding: " + t);
                                t = (t + "").toLowerCase(), n = !0 } }

                    function w(t, e, r) { const n = t[e];
                        t[e] = t[r], t[r] = n }

                    function b(t, e, r, n, o) { if (0 === t.length) return -1; if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), X(r = +r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) { if (o) return -1;
                            r = t.length - 1 } else if (r < 0) { if (!o) return -1;
                            r = 0 } if ("string" == typeof e && (e = c.from(e, n)), c.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, r, n, o); if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : m(t, [e], r, n, o); throw new TypeError("val must be string, number or Buffer") }

                    function m(t, e, r, n, o) { let i, s = 1,
                            a = t.length,
                            c = e.length; if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) { if (t.length < 2 || e.length < 2) return -1;
                            s = 2, a /= 2, c /= 2, r /= 2 }

                        function u(t, e) { return 1 === s ? t[e] : t.readUInt16BE(e * s) } if (o) { let n = -1; for (i = r; i < a; i++)
                                if (u(t, i) === u(e, -1 === n ? 0 : i - n)) { if (-1 === n && (n = i), i - n + 1 === c) return n * s } else -1 !== n && (i -= i - n), n = -1 } else
                            for (r + c > a && (r = a - c), i = r; i >= 0; i--) { let r = !0; for (let n = 0; n < c; n++)
                                    if (u(t, i + n) !== u(e, n)) { r = !1; break }
                                if (r) return i }
                        return -1 }

                    function _(t, e, r, n) { r = Number(r) || 0; const o = t.length - r;
                        n ? (n = Number(n)) > o && (n = o) : n = o; const i = e.length; let s; for (n > i / 2 && (n = i / 2), s = 0; s < n; ++s) { const n = parseInt(e.substr(2 * s, 2), 16); if (X(n)) return s;
                            t[r + s] = n } return s }

                    function v(t, e, r, n) { return J(G(e, t.length - r), t, r, n) }

                    function E(t, e, r, n) { return J(function(t) { const e = []; for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r)); return e }(e), t, r, n) }

                    function k(t, e, r, n) { return J(W(e), t, r, n) }

                    function A(t, e, r, n) { return J(function(t, e) { let r, n, o; const i = []; for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n); return i }(e, t.length - r), t, r, n) }

                    function x(t, e, r) { return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r)) }

                    function B(t, e, r) { r = Math.min(t.length, r); const n = []; let o = e; for (; o < r;) { const e = t[o]; let i = null,
                                s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1; if (o + s <= r) { let r, n, a, c; switch (s) {
                                    case 1:
                                        e < 128 && (i = e); break;
                                    case 2:
                                        r = t[o + 1], 128 == (192 & r) && (c = (31 & e) << 6 | 63 & r, c > 127 && (i = c)); break;
                                    case 3:
                                        r = t[o + 1], n = t[o + 2], 128 == (192 & r) && 128 == (192 & n) && (c = (15 & e) << 12 | (63 & r) << 6 | 63 & n, c > 2047 && (c < 55296 || c > 57343) && (i = c)); break;
                                    case 4:
                                        r = t[o + 1], n = t[o + 2], a = t[o + 3], 128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && (c = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, c > 65535 && c < 1114112 && (i = c)) } }
                            null === i ? (i = 65533, s = 1) : i > 65535 && (i -= 65536, n.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), n.push(i), o += s } return function(t) { const e = t.length; if (e <= S) return String.fromCharCode.apply(String, t); let r = "",
                                n = 0; for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += S)); return r }(n) }
                    e.kMaxLength = s, c.TYPED_ARRAY_SUPPORT = function() { try { const t = new Uint8Array(1),
                                e = { foo: function() { return 42 } }; return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo() } catch (t) { return !1 } }(), c.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", { enumerable: !0, get: function() { if (c.isBuffer(this)) return this.buffer } }), Object.defineProperty(c.prototype, "offset", { enumerable: !0, get: function() { if (c.isBuffer(this)) return this.byteOffset } }), c.poolSize = 8192, c.from = function(t, e, r) { return u(t, e, r) }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(t, e, r) { return function(t, e, r) { return h(t), t <= 0 ? a(t) : void 0 !== e ? "string" == typeof r ? a(t).fill(e, r) : a(t).fill(e) : a(t) }(t, e, r) }, c.allocUnsafe = function(t) { return f(t) }, c.allocUnsafeSlow = function(t) { return f(t) }, c.isBuffer = function(t) { return null != t && !0 === t._isBuffer && t !== c.prototype }, c.compare = function(t, e) { if (K(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), K(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'); if (t === e) return 0; let r = t.length,
                            n = e.length; for (let o = 0, i = Math.min(r, n); o < i; ++o)
                            if (t[o] !== e[o]) { r = t[o], n = e[o]; break }
                        return r < n ? -1 : n < r ? 1 : 0 }, c.isEncoding = function(t) { switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1 } }, c.concat = function(t, e) { if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === t.length) return c.alloc(0); let r; if (void 0 === e)
                            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length; const n = c.allocUnsafe(e); let o = 0; for (r = 0; r < t.length; ++r) { let e = t[r]; if (K(e, Uint8Array)) o + e.length > n.length ? (c.isBuffer(e) || (e = c.from(e)), e.copy(n, o)) : Uint8Array.prototype.set.call(n, e, o);
                            else { if (!c.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                                e.copy(n, o) }
                            o += e.length } return n }, c.byteLength = y, c.prototype._isBuffer = !0, c.prototype.swap16 = function() { const t = this.length; if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (let e = 0; e < t; e += 2) w(this, e, e + 1); return this }, c.prototype.swap32 = function() { const t = this.length; if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (let e = 0; e < t; e += 4) w(this, e, e + 3), w(this, e + 1, e + 2); return this }, c.prototype.swap64 = function() { const t = this.length; if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (let e = 0; e < t; e += 8) w(this, e, e + 7), w(this, e + 1, e + 6), w(this, e + 2, e + 5), w(this, e + 3, e + 4); return this }, c.prototype.toString = function() { const t = this.length; return 0 === t ? "" : 0 === arguments.length ? B(this, 0, t) : g.apply(this, arguments) }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(t) { if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); return this === t || 0 === c.compare(this, t) }, c.prototype.inspect = function() { let t = ""; const r = e.INSPECT_MAX_BYTES; return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">" }, i && (c.prototype[i] = c.prototype.inspect), c.prototype.compare = function(t, e, r, n, o) { if (K(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), !c.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t); if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index"); if (n >= o && e >= r) return 0; if (n >= o) return -1; if (e >= r) return 1; if (this === t) return 0; let i = (o >>>= 0) - (n >>>= 0),
                            s = (r >>>= 0) - (e >>>= 0); const a = Math.min(i, s),
                            u = this.slice(n, o),
                            h = t.slice(e, r); for (let t = 0; t < a; ++t)
                            if (u[t] !== h[t]) { i = u[t], s = h[t]; break }
                        return i < s ? -1 : s < i ? 1 : 0 }, c.prototype.includes = function(t, e, r) { return -1 !== this.indexOf(t, e, r) }, c.prototype.indexOf = function(t, e, r) { return b(this, t, e, r, !0) }, c.prototype.lastIndexOf = function(t, e, r) { return b(this, t, e, r, !1) }, c.prototype.write = function(t, e, r, n) { if (void 0 === e) n = "utf8", r = this.length, e = 0;
                        else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                        else { if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0) } const o = this.length - e; if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8"); let i = !1; for (;;) switch (n) {
                            case "hex":
                                return _(this, t, e, r);
                            case "utf8":
                            case "utf-8":
                                return v(this, t, e, r);
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return E(this, t, e, r);
                            case "base64":
                                return k(this, t, e, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return A(this, t, e, r);
                            default:
                                if (i) throw new TypeError("Unknown encoding: " + n);
                                n = ("" + n).toLowerCase(), i = !0 } }, c.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } }; const S = 4096;

                    function I(t, e, r) { let n = "";
                        r = Math.min(t.length, r); for (let o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]); return n }

                    function T(t, e, r) { let n = "";
                        r = Math.min(t.length, r); for (let o = e; o < r; ++o) n += String.fromCharCode(t[o]); return n }

                    function C(t, e, r) { const n = t.length;
                        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n); let o = ""; for (let n = e; n < r; ++n) o += Y[t[n]]; return o }

                    function O(t, e, r) { const n = t.slice(e, r); let o = ""; for (let t = 0; t < n.length - 1; t += 2) o += String.fromCharCode(n[t] + 256 * n[t + 1]); return o }

                    function N(t, e, r) { if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint"); if (t + e > r) throw new RangeError("Trying to access beyond buffer length") }

                    function U(t, e, r, n, o, i) { if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (e > o || e < i) throw new RangeError('"value" argument is out of bounds'); if (r + n > t.length) throw new RangeError("Index out of range") }

                    function D(t, e, r, n, o) { $(e, n, o, t, r, 7); let i = Number(e & BigInt(4294967295));
                        t[r++] = i, i >>= 8, t[r++] = i, i >>= 8, t[r++] = i, i >>= 8, t[r++] = i; let s = Number(e >> BigInt(32) & BigInt(4294967295)); return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r }

                    function R(t, e, r, n, o) { $(e, n, o, t, r, 7); let i = Number(e & BigInt(4294967295));
                        t[r + 7] = i, i >>= 8, t[r + 6] = i, i >>= 8, t[r + 5] = i, i >>= 8, t[r + 4] = i; let s = Number(e >> BigInt(32) & BigInt(4294967295)); return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8 }

                    function L(t, e, r, n, o, i) { if (r + n > t.length) throw new RangeError("Index out of range"); if (r < 0) throw new RangeError("Index out of range") }

                    function z(t, e, r, n, i) { return e = +e, r >>>= 0, i || L(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4 }

                    function j(t, e, r, n, i) { return e = +e, r >>>= 0, i || L(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8 }
                    c.prototype.slice = function(t, e) { const r = this.length;
                        (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t); const n = this.subarray(t, e); return Object.setPrototypeOf(n, c.prototype), n }, c.prototype.readUintLE = c.prototype.readUIntLE = function(t, e, r) { t >>>= 0, e >>>= 0, r || N(t, e, this.length); let n = this[t],
                            o = 1,
                            i = 0; for (; ++i < e && (o *= 256);) n += this[t + i] * o; return n }, c.prototype.readUintBE = c.prototype.readUIntBE = function(t, e, r) { t >>>= 0, e >>>= 0, r || N(t, e, this.length); let n = this[t + --e],
                            o = 1; for (; e > 0 && (o *= 256);) n += this[t + --e] * o; return n }, c.prototype.readUint8 = c.prototype.readUInt8 = function(t, e) { return t >>>= 0, e || N(t, 1, this.length), this[t] }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(t, e) { return t >>>= 0, e || N(t, 2, this.length), this[t] | this[t + 1] << 8 }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(t, e) { return t >>>= 0, e || N(t, 2, this.length), this[t] << 8 | this[t + 1] }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(t, e) { return t >>>= 0, e || N(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3] }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(t, e) { return t >>>= 0, e || N(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]) }, c.prototype.readBigUInt64LE = Z((function(t) { q(t >>>= 0, "offset"); const e = this[t],
                            r = this[t + 7];
                        void 0 !== e && void 0 !== r || H(t, this.length - 8); const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                            o = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24; return BigInt(n) + (BigInt(o) << BigInt(32)) })), c.prototype.readBigUInt64BE = Z((function(t) { q(t >>>= 0, "offset"); const e = this[t],
                            r = this[t + 7];
                        void 0 !== e && void 0 !== r || H(t, this.length - 8); const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                            o = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r; return (BigInt(n) << BigInt(32)) + BigInt(o) })), c.prototype.readIntLE = function(t, e, r) { t >>>= 0, e >>>= 0, r || N(t, e, this.length); let n = this[t],
                            o = 1,
                            i = 0; for (; ++i < e && (o *= 256);) n += this[t + i] * o; return o *= 128, n >= o && (n -= Math.pow(2, 8 * e)), n }, c.prototype.readIntBE = function(t, e, r) { t >>>= 0, e >>>= 0, r || N(t, e, this.length); let n = e,
                            o = 1,
                            i = this[t + --n]; for (; n > 0 && (o *= 256);) i += this[t + --n] * o; return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i }, c.prototype.readInt8 = function(t, e) { return t >>>= 0, e || N(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t] }, c.prototype.readInt16LE = function(t, e) { t >>>= 0, e || N(t, 2, this.length); const r = this[t] | this[t + 1] << 8; return 32768 & r ? 4294901760 | r : r }, c.prototype.readInt16BE = function(t, e) { t >>>= 0, e || N(t, 2, this.length); const r = this[t + 1] | this[t] << 8; return 32768 & r ? 4294901760 | r : r }, c.prototype.readInt32LE = function(t, e) { return t >>>= 0, e || N(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24 }, c.prototype.readInt32BE = function(t, e) { return t >>>= 0, e || N(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3] }, c.prototype.readBigInt64LE = Z((function(t) { q(t >>>= 0, "offset"); const e = this[t],
                            r = this[t + 7];
                        void 0 !== e && void 0 !== r || H(t, this.length - 8); const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24); return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24) })), c.prototype.readBigInt64BE = Z((function(t) { q(t >>>= 0, "offset"); const e = this[t],
                            r = this[t + 7];
                        void 0 !== e && void 0 !== r || H(t, this.length - 8); const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]; return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r) })), c.prototype.readFloatLE = function(t, e) { return t >>>= 0, e || N(t, 4, this.length), o.read(this, t, !0, 23, 4) }, c.prototype.readFloatBE = function(t, e) { return t >>>= 0, e || N(t, 4, this.length), o.read(this, t, !1, 23, 4) }, c.prototype.readDoubleLE = function(t, e) { return t >>>= 0, e || N(t, 8, this.length), o.read(this, t, !0, 52, 8) }, c.prototype.readDoubleBE = function(t, e) { return t >>>= 0, e || N(t, 8, this.length), o.read(this, t, !1, 52, 8) }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function(t, e, r, n) { t = +t, e >>>= 0, r >>>= 0, n || U(this, t, e, r, Math.pow(2, 8 * r) - 1, 0); let o = 1,
                            i = 0; for (this[e] = 255 & t; ++i < r && (o *= 256);) this[e + i] = t / o & 255; return e + r }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(t, e, r, n) { t = +t, e >>>= 0, r >>>= 0, n || U(this, t, e, r, Math.pow(2, 8 * r) - 1, 0); let o = r - 1,
                            i = 1; for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255; return e + r }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(t, e, r) { return t = +t, e >>>= 0, r || U(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1 }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(t, e, r) { return t = +t, e >>>= 0, r || U(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2 }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(t, e, r) { return t = +t, e >>>= 0, r || U(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2 }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(t, e, r) { return t = +t, e >>>= 0, r || U(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4 }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(t, e, r) { return t = +t, e >>>= 0, r || U(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4 }, c.prototype.writeBigUInt64LE = Z((function(t, e = 0) { return D(this, t, e, BigInt(0), BigInt("0xffffffffffffffff")) })), c.prototype.writeBigUInt64BE = Z((function(t, e = 0) { return R(this, t, e, BigInt(0), BigInt("0xffffffffffffffff")) })), c.prototype.writeIntLE = function(t, e, r, n) { if (t = +t, e >>>= 0, !n) { const n = Math.pow(2, 8 * r - 1);
                            U(this, t, e, r, n - 1, -n) } let o = 0,
                            i = 1,
                            s = 0; for (this[e] = 255 & t; ++o < r && (i *= 256);) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / i >> 0) - s & 255; return e + r }, c.prototype.writeIntBE = function(t, e, r, n) { if (t = +t, e >>>= 0, !n) { const n = Math.pow(2, 8 * r - 1);
                            U(this, t, e, r, n - 1, -n) } let o = r - 1,
                            i = 1,
                            s = 0; for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / i >> 0) - s & 255; return e + r }, c.prototype.writeInt8 = function(t, e, r) { return t = +t, e >>>= 0, r || U(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1 }, c.prototype.writeInt16LE = function(t, e, r) { return t = +t, e >>>= 0, r || U(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2 }, c.prototype.writeInt16BE = function(t, e, r) { return t = +t, e >>>= 0, r || U(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2 }, c.prototype.writeInt32LE = function(t, e, r) { return t = +t, e >>>= 0, r || U(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4 }, c.prototype.writeInt32BE = function(t, e, r) { return t = +t, e >>>= 0, r || U(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4 }, c.prototype.writeBigInt64LE = Z((function(t, e = 0) { return D(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff")) })), c.prototype.writeBigInt64BE = Z((function(t, e = 0) { return R(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff")) })), c.prototype.writeFloatLE = function(t, e, r) { return z(this, t, e, !0, r) }, c.prototype.writeFloatBE = function(t, e, r) { return z(this, t, e, !1, r) }, c.prototype.writeDoubleLE = function(t, e, r) { return j(this, t, e, !0, r) }, c.prototype.writeDoubleBE = function(t, e, r) { return j(this, t, e, !1, r) }, c.prototype.copy = function(t, e, r, n) { if (!c.isBuffer(t)) throw new TypeError("argument should be a Buffer"); if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0; if (0 === t.length || 0 === this.length) return 0; if (e < 0) throw new RangeError("targetStart out of bounds"); if (r < 0 || r >= this.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r); const o = n - r; return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), o }, c.prototype.fill = function(t, e, r, n) { if ("string" == typeof t) { if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string"); if ("string" == typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n); if (1 === t.length) { const e = t.charCodeAt(0);
                                ("utf8" === n && e < 128 || "latin1" === n) && (t = e) } } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t)); if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index"); if (r <= e) return this; let o; if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                            for (o = e; o < r; ++o) this[o] = t;
                        else { const i = c.isBuffer(t) ? t : c.from(t, n),
                                s = i.length; if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"'); for (o = 0; o < r - e; ++o) this[o + e] = i[o % s] } return this }; const P = {};

                    function M(t, e, r) { P[t] = class extends r { constructor() { super(), Object.defineProperty(this, "message", { value: e.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${t}]`, this.stack, delete this.name }
                            get code() { return t }
                            set code(t) { Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: t, writable: !0 }) }
                            toString() { return `${this.name} [${t}]: ${this.message}` } } }

                    function F(t) { let e = "",
                            r = t.length; const n = "-" === t[0] ? 1 : 0; for (; r >= n + 4; r -= 3) e = `_${t.slice(r-3,r)}${e}`; return `${t.slice(0,r)}${e}` }

                    function $(t, e, r, n, o, i) { if (t > r || t < e) { const n = "bigint" == typeof e ? "n" : ""; let o; throw o = i > 3 ? 0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8*(i+1)}${n}` : `>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}` : `>= ${e}${n} and <= ${r}${n}`, new P.ERR_OUT_OF_RANGE("value", o, t) }! function(t, e, r) { q(e, "offset"), void 0 !== t[e] && void 0 !== t[e + r] || H(e, t.length - (r + 1)) }(n, o, i) }

                    function q(t, e) { if ("number" != typeof t) throw new P.ERR_INVALID_ARG_TYPE(e, "number", t) }

                    function H(t, e, r) { if (Math.floor(t) !== t) throw q(t, r), new P.ERR_OUT_OF_RANGE(r || "offset", "an integer", t); if (e < 0) throw new P.ERR_BUFFER_OUT_OF_BOUNDS; throw new P.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${e}`, t) }
                    M("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) { return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds" }), RangeError), M("ERR_INVALID_ARG_TYPE", (function(t, e) { return `The "${t}" argument must be of type number. Received type ${typeof e}` }), TypeError), M("ERR_OUT_OF_RANGE", (function(t, e, r) { let n = `The value of "${t}" is out of range.`,
                            o = r; return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? o = F(String(r)) : "bigint" == typeof r && (o = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (o = F(o)), o += "n"), n += ` It must be ${e}. Received ${o}`, n }), RangeError); const V = /[^+/0-9A-Za-z-_]/g;

                    function G(t, e) { let r;
                        e = e || 1 / 0; const n = t.length; let o = null; const i = []; for (let s = 0; s < n; ++s) { if (r = t.charCodeAt(s), r > 55295 && r < 57344) { if (!o) { if (r > 56319) {
                                        (e -= 3) > -1 && i.push(239, 191, 189); continue } if (s + 1 === n) {
                                        (e -= 3) > -1 && i.push(239, 191, 189); continue }
                                    o = r; continue } if (r < 56320) {
                                    (e -= 3) > -1 && i.push(239, 191, 189), o = r; continue }
                                r = 65536 + (o - 55296 << 10 | r - 56320) } else o && (e -= 3) > -1 && i.push(239, 191, 189); if (o = null, r < 128) { if ((e -= 1) < 0) break;
                                i.push(r) } else if (r < 2048) { if ((e -= 2) < 0) break;
                                i.push(r >> 6 | 192, 63 & r | 128) } else if (r < 65536) { if ((e -= 3) < 0) break;
                                i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128) } else { if (!(r < 1114112)) throw new Error("Invalid code point"); if ((e -= 4) < 0) break;
                                i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128) } } return i }

                    function W(t) { return n.toByteArray(function(t) { if ((t = (t = t.split("=")[0]).trim().replace(V, "")).length < 2) return ""; for (; t.length % 4 != 0;) t += "="; return t }(t)) }

                    function J(t, e, r, n) { let o; for (o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o]; return o }

                    function K(t, e) { return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name }

                    function X(t) { return t != t } const Y = function() { const t = "0123456789abcdef",
                            e = new Array(256); for (let r = 0; r < 16; ++r) { const n = 16 * r; for (let o = 0; o < 16; ++o) e[n + o] = t[r] + t[o] } return e }();

                    function Z(t) { return "undefined" == typeof BigInt ? Q : t }

                    function Q() { throw new Error("BigInt not supported") } }, 2114: t => { "use strict";

                    function e(t, e) { for (const r in e) Object.defineProperty(t, r, { value: e[r], enumerable: !0, configurable: !0 }); return t }
                    t.exports = function(t, r, n) { if (!t || "string" == typeof t) throw new TypeError("Please pass an Error to err-code");
                        n || (n = {}), "object" == typeof r && (n = r, r = ""), r && (n.code = r); try { return e(t, n) } catch (r) { n.message = t.message, n.stack = t.stack; const o = function() {}; return o.prototype = Object.create(Object.getPrototypeOf(t)), e(new o, n) } } }, 43: (t, e, r) => { "use strict"; const n = r(544),
                        o = r(7962);
                    class i { constructor(t, e, r = 0) { this._options = t, this._popCount = 0, this._parent = e, this._posAtParent = r, this._children = new n, this.key = null }
                        async put(t, e) { const r = await this._findNewBucketAndPos(t);
                            await r.bucket._putAt(r, t, e) }
                        async get(t) { const e = await this._findChild(t); if (e) return e.value }
                        async del(t) { const e = await this._findPlace(t),
                                r = e.bucket._at(e.pos);
                            r && r.key === t && e.bucket._delAt(e.pos) }
                        leafCount() { return this._children.compactArray().reduce(((t, e) => e instanceof i ? t + e.leafCount() : t + 1), 0) }
                        childrenCount() { return this._children.length }
                        onlyChild() { return this._children.get(0) } * eachLeafSeries() { const t = this._children.compactArray(); for (const e of t) e instanceof i ? yield* e.eachLeafSeries() : yield e; return [] }
                        serialize(t, e) { return e(this._children.reduce(((r, n, o) => (n && (n instanceof i ? r.push(n.serialize(t, e)) : r.push(t(n, o))), r)), [])) }
                        asyncTransform(t, e) { return u(this, t, e) }
                        toJSON() { return this.serialize(a, c) }
                        prettyPrint() { return JSON.stringify(this.toJSON(), null, "  ") }
                        tableSize() { return Math.pow(2, this._options.bits) }
                        async _findChild(t) { const e = await this._findPlace(t),
                                r = e.bucket._at(e.pos); if (!(r instanceof i)) return r && r.key === t ? r : void 0 }
                        async _findPlace(t) { const e = this._options.hash("string" == typeof t ? o(t) : t),
                                r = await e.take(this._options.bits),
                                n = this._children.get(r); return n instanceof i ? n._findPlace(e) : { bucket: this, pos: r, hash: e, existingChild: n } }
                        async _findNewBucketAndPos(t) { const e = await this._findPlace(t); if (e.existingChild && e.existingChild.key !== t) { const t = new i(this._options, e.bucket, e.pos);
                                e.bucket._putObjectAt(e.pos, t); const r = await t._findPlace(e.existingChild.hash); return r.bucket._putAt(r, e.existingChild.key, e.existingChild.value), t._findNewBucketAndPos(e.hash) } return e }
                        _putAt(t, e, r) { this._putObjectAt(t.pos, { key: e, value: r, hash: t.hash }) }
                        _putObjectAt(t, e) { this._children.get(t) || this._popCount++, this._children.set(t, e) }
                        _delAt(t) { if (-1 === t) throw new Error("Invalid position");
                            this._children.get(t) && this._popCount--, this._children.unset(t), this._level() }
                        _level() { if (this._parent && this._popCount <= 1)
                                if (1 === this._popCount) { const t = this._children.find(s); if (t && !(t instanceof i)) { const e = t.hash;
                                        e.untake(this._options.bits); const r = { pos: this._posAtParent, hash: e, bucket: this._parent };
                                        this._parent._putAt(r, t.key, t.value) } } else this._parent._delAt(this._posAtParent) }
                        _at(t) { return this._children.get(t) } }

                    function s(t) { return Boolean(t) }

                    function a(t, e) { return t.key }

                    function c(t) { return t }
                    async function u(t, e, r) { const n = []; for (const o of t._children.compactArray())
                            if (o instanceof i) await u(o, e, r);
                            else { const r = await e(o);
                                n.push({ bitField: t._children.bitField(), children: r }) }
                        return r(n) }
                    t.exports = i }, 1536: t => { "use strict"; const e = [255, 254, 252, 248, 240, 224, 192, 128],
                        r = [1, 3, 7, 15, 31, 63, 127, 255];

                    function n(t, n, o) { return (t & function(t, n) { return e[t] & r[Math.min(n + t - 1, 7)] }(n, o)) >>> n }
                    t.exports = class { constructor(t) { this._value = t, this._currentBytePos = t.length - 1, this._currentBitPos = 7 }
                        availableBits() { return this._currentBitPos + 1 + 8 * this._currentBytePos }
                        totalBits() { return 8 * this._value.length }
                        take(t) { let e = t,
                                r = 0; for (; e && this._haveBits();) { const t = this._value[this._currentBytePos],
                                    o = this._currentBitPos + 1,
                                    i = Math.min(o, e);
                                r = (r << i) + n(t, o - i, i), e -= i, this._currentBitPos -= i, this._currentBitPos < 0 && (this._currentBitPos = 7, this._currentBytePos--) } return r }
                        untake(t) { for (this._currentBitPos += t; this._currentBitPos > 7;) this._currentBitPos -= 8, this._currentBytePos += 1 }
                        _haveBits() { return this._currentBytePos >= 0 } } }, 1712: (t, e, r) => { "use strict"; const n = r(1536),
                        o = r(6643);
                    class i { constructor(t, e) { if (!(t instanceof Uint8Array)) throw new Error("can only hash Uint8Arrays");
                            this._value = t, this._hashFn = e, this._depth = -1, this._availableBits = 0, this._currentBufferIndex = 0, this._buffers = [] }
                        async take(t) { let e = t; for (; this._availableBits < e;) await this._produceMoreBits(); let r = 0; for (; e > 0;) { const t = this._buffers[this._currentBufferIndex],
                                    n = Math.min(t.availableBits(), e);
                                r = (r << n) + t.take(n), e -= n, this._availableBits -= n, 0 === t.availableBits() && this._currentBufferIndex++ } return r }
                        untake(t) { let e = t; for (; e > 0;) { const t = this._buffers[this._currentBufferIndex],
                                    r = Math.min(t.totalBits() - t.availableBits(), e);
                                t.untake(r), e -= r, this._availableBits += r, this._currentBufferIndex > 0 && t.totalBits() === t.availableBits() && (this._depth--, this._currentBufferIndex--) } }
                        async _produceMoreBits() { this._depth++; const t = this._depth ? o([this._value, Uint8Array.from([this._depth])]) : this._value,
                                e = await this._hashFn(t),
                                r = new n(e);
                            this._buffers.push(r), this._availableBits += r.availableBits() } }
                    t.exports = function(t) { return function(e) { return e instanceof i ? e : new i(e, t) } }, t.exports.InfiniteHash = i }, 4563: (t, e, r) => { "use strict"; const n = r(43),
                        o = r(1712);
                    t.exports = { createHAMT: function(t) { if (!t || !t.hashFn) throw new Error("please define an options.hashFn"); const e = { bits: t.bits || 8, hash: o(t.hashFn) }; return new n(e) }, Bucket: n } }, 645: (t, e) => { e.read = function(t, e, r, n, o) { var i, s, a = 8 * o - n - 1,
                            c = (1 << a) - 1,
                            u = c >> 1,
                            h = -7,
                            f = r ? o - 1 : 0,
                            l = r ? -1 : 1,
                            p = t[e + f]; for (f += l, i = p & (1 << -h) - 1, p >>= -h, h += a; h > 0; i = 256 * i + t[e + f], f += l, h -= 8); for (s = i & (1 << -h) - 1, i >>= -h, h += n; h > 0; s = 256 * s + t[e + f], f += l, h -= 8); if (0 === i) i = 1 - u;
                        else { if (i === c) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                            s += Math.pow(2, n), i -= u } return (p ? -1 : 1) * s * Math.pow(2, i - n) }, e.write = function(t, e, r, n, o, i) { var s, a, c, u = 8 * i - o - 1,
                            h = (1 << u) - 1,
                            f = h >> 1,
                            l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                            p = n ? 0 : i - 1,
                            d = n ? 1 : -1,
                            y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0; for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (e += s + f >= 1 ? l / c : l * Math.pow(2, 1 - f)) * c >= 2 && (s++, c /= 2), s + f >= h ? (a = 0, s = h) : s + f >= 1 ? (a = (e * c - 1) * Math.pow(2, o), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; t[r + p] = 255 & a, p += d, a /= 256, o -= 8); for (s = s << o | a, u += o; u > 0; t[r + p] = 255 & s, p += d, s /= 256, u -= 8);
                        t[r + p - d] |= 128 * y } }, 8369: (t, e, r) => { "use strict"; const n = r(4593),
                        o = r(5565),
                        i = r(7939),
                        s = r(1303),
                        a = (t, e) => async function*() { const r = await s(t);
                            yield* r.sort(e) }();
                    t.exports = class { open() { return Promise.reject(new Error(".open is not implemented")) }
                        close() { return Promise.reject(new Error(".close is not implemented")) }
                        put(t, e, r) { return Promise.reject(new Error(".put is not implemented")) }
                        get(t, e) { return Promise.reject(new Error(".get is not implemented")) }
                        has(t, e) { return Promise.reject(new Error(".has is not implemented")) }
                        delete(t, e) { return Promise.reject(new Error(".delete is not implemented")) }
                        async * putMany(t, e = {}) { for await (const { key: r, value: n }
                                of t) await this.put(r, n, e), yield { key: r, value: n } }
                        async * getMany(t, e = {}) { for await (const r of t) yield this.get(r, e) }
                        async * deleteMany(t, e = {}) { for await (const r of t) await this.delete(r, e), yield r }
                        batch() { let t = [],
                                e = []; return { put(e, r) { t.push({ key: e, value: r }) }, delete(t) { e.push(t) }, commit: async r => { await n(this.putMany(t, r)), t = [], await n(this.deleteMany(e, r)), e = [] } } }
                        async * _all(t, e) { throw new Error("._all is not implemented") }
                        async * _allKeys(t, e) { throw new Error("._allKeys is not implemented") }
                        query(t, e) { let r = this._all(t, e); if (null != t.prefix && (r = o(r, (e => e.key.toString().startsWith(t.prefix || "")))), Array.isArray(t.filters) && (r = t.filters.reduce(((t, e) => o(t, e)), r)), Array.isArray(t.orders) && (r = t.orders.reduce(((t, e) => a(t, e)), r)), null != t.offset) { let e = 0;
                                r = o(r, (() => e++ >= (t.offset || 0))) } return null != t.limit && (r = i(r, t.limit)), r }
                        queryKeys(t, e) { let r = this._allKeys(t, e); if (null != t.prefix && (r = o(r, (e => e.toString().startsWith(t.prefix || "")))), Array.isArray(t.filters) && (r = t.filters.reduce(((t, e) => o(t, e)), r)), Array.isArray(t.orders) && (r = t.orders.reduce(((t, e) => a(t, e)), r)), null != t.offset) { let e = 0;
                                r = o(r, (() => e++ >= t.offset)) } return null != t.limit && (r = i(r, t.limit)), r } } }, 7224: (t, e, r) => { "use strict"; const n = r(2114);
                    t.exports = { notFoundError: function(t) { return t = t || new Error("Not Found"), n(t, "ERR_NOT_FOUND") } } }, 8645: (t, e, r) => { "use strict"; const n = r(8369),
                        o = r(4787);
                    t.exports = { BlockstoreAdapter: n, MemoryBlockstore: o } }, 4787: (t, e, r) => { "use strict"; const n = r(8369),
                        { base32: o } = r(2817),
                        i = r(6945),
                        { CID: s } = r(1362),
                        a = r(8924),
                        c = r(7224);
                    t.exports = class extends n { constructor() { super(), this.data = {} }
                        open() { return Promise.resolve() }
                        close() { return Promise.resolve() }
                        async put(t, e) { this.data[o.encode(t.multihash.bytes)] = e }
                        async get(t) { if (!await this.has(t)) throw c.notFoundError(); return this.data[o.encode(t.multihash.bytes)] }
                        async has(t) { return void 0 !== this.data[o.encode(t.multihash.bytes)] }
                        async delete(t) { delete this.data[o.encode(t.multihash.bytes)] }
                        async * _all() { yield* Object.entries(this.data).map((([t, e]) => ({ key: s.createV1(i.code, a.decode(o.decode(t))), value: e }))) }
                        async * _allKeys() { yield* Object.entries(this.data).map((([t]) => s.createV1(i.code, a.decode(o.decode(t))))) } } }, 5021: (t, e, r) => { "use strict"; const n = r(452),
                        o = r(7194);
                    t.exports = t => o(t, n) }, 452: (t, e, r) => { "use strict"; const n = r(2114),
                        o = r(7962),
                        i = r(6154),
                        s = r(3294),
                        a = r(8132),
                        c = r(1303),
                        u = r(2121),
                        { isBytes: h, isReadableStream: f, isBlob: l } = r(8058);

                    function p(t) { return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t instanceof ArrayBuffer ? new Uint8Array(t) : Array.isArray(t) ? Uint8Array.from(t) : o(t.toString()) }
                    t.exports = async function*(t) { if (h(t)) yield p(t);
                        else if ("string" == typeof t || t instanceof String) yield p(t.toString());
                        else { if (!l(t)) { if (f(t) && (t = i(t)), Symbol.iterator in t || Symbol.asyncIterator in t) { const e = a(t),
                                        { value: r, done: n } = await e.peek(); if (n) return void(yield*[]); if (e.push(r), Number.isInteger(r)) return void(yield Uint8Array.from(await c(e))); if (h(r) || "string" == typeof r || r instanceof String) return void(yield* u(e, p)) } throw n(new Error(`Unexpected input: ${t}`), "ERR_UNEXPECTED_INPUT") }
                            yield* s(t) } } }, 7194: (t, e, r) => { "use strict"; const n = r(2114),
                        o = r(6154),
                        i = r(8132),
                        s = r(2121),
                        { isBytes: a, isBlob: c, isReadableStream: u, isFileObject: h } = r(8058),
                        { parseMtime: f, parseMode: l } = r(9862);
                    async function p(t, e) { const { path: r, mode: n, mtime: o, content: i } = t, s = { path: r || "", mode: l(n), mtime: f(o) }; return i ? s.content = await e(i) : r || (s.content = await e(t)), s }
                    t.exports = async function*(t, e) { if (null != t)
                            if ("string" == typeof t || t instanceof String) yield p(t.toString(), e);
                            else if (a(t) || c(t)) yield p(t, e);
                        else { if (u(t) && (t = o(t)), Symbol.iterator in t || Symbol.asyncIterator in t) { const r = i(t),
                                    { value: n, done: o } = await r.peek(); if (o) return void(yield*[]); if (r.push(n), Number.isInteger(n) || a(n)) return void(yield p(r, e)); if (h(n) || c(n) || "string" == typeof n || n instanceof String) return void(yield* s(r, (t => p(t, e)))); if (n[Symbol.iterator] || n[Symbol.asyncIterator] || u(n)) return void(yield* s(r, (t => p(t, e)))) } if (!h(t)) throw n(new Error("Unexpected input: " + typeof t), "ERR_UNEXPECTED_INPUT");
                            yield p(t, e) } } }, 8058: t => { "use strict";
                    t.exports = { isBytes: function(t) { return ArrayBuffer.isView(t) || t instanceof ArrayBuffer }, isBlob: function(t) { return t.constructor && ("Blob" === t.constructor.name || "File" === t.constructor.name) && "function" == typeof t.stream }, isFileObject: function(t) { return "object" == typeof t && (t.path || t.content) }, isReadableStream: t => t && "function" == typeof t.getReader } }, 4923: (t, e, r) => { "use strict"; const n = r(2114),
                        { CID: o } = r(1362),
                        i = r(4501),
                        s = r(3093);
                    async function* a(t, e, r = {}) { let { cid: s, toResolve: a } = (t => { if (t instanceof Uint8Array) return { cid: o.decode(t), toResolve: [] }; const e = o.asCID(t); if (e) return { cid: e, toResolve: [] }; if ("string" == typeof t) { 0 === t.indexOf("/ipfs/") && (t = t.substring(6)); const e = ((t = "") => (t.trim().match(/([^\\^/]|\\\/)+/g) || []).filter(Boolean))(t); return { cid: o.parse(e[0]), toResolve: e.slice(1) } } throw n(new Error(`Unknown path type ${t}`), "ERR_BAD_PATH") })(t), c = s.toString(), u = c; const h = a.length; for (;;) { const o = await i(s, c, u, a, h, e, r); if (!o.entry && !o.next) throw n(new Error(`Could not resolve ${t}`), "ERR_NOT_FOUND"); if (o.entry && (yield o.entry), !o.next) return;
                            a = o.next.toResolve, s = o.next.cid, c = o.next.name, u = o.next.path } }
                    async function c(t, e, r = {}) { const o = await s(a(t, e, r)); if (!o) throw n(new Error(`Could not resolve ${t}`), "ERR_NOT_FOUND"); return o }
                    t.exports = { exporter: c, walkPath: a, recursive: async function*(t, e, r = {}) { const n = await c(t, e, r); if (n && (yield n, "directory" === n.type))
                                for await (const t of async function* t(e, r) { for await (const n of e.content(r)) yield n, n instanceof Uint8Array || "directory" === n.type && (yield* t(n, r)) }(n, r)) yield t } } }, 6769: (t, e, r) => { "use strict"; const { CID: n } = r(1362), o = r(2114), i = r(1082);
                    t.exports = async(t, e, r, s, a, c, u, h) => { const f = await u.get(t),
                            l = i.decode(f); let p = l,
                            d = r; for (; s.length;) { const i = s[0]; if (!(i in p)) throw o(new Error(`No property named ${i} found in cbor node ${t}`), "ERR_NO_PROP"); { s.shift(), d = `${d}/${i}`; const o = n.asCID(p[i]); if (o) return { entry: { type: "object", name: e, path: r, cid: t, node: f, depth: c, size: f.length, content: async function*() { yield l } }, next: { cid: o, name: i, path: d, toResolve: s } };
                                p = p[i] } } return { entry: { type: "object", name: e, path: r, cid: t, node: f, depth: c, size: f.length, content: async function*() { yield l } } } } }, 7257: (t, e, r) => { "use strict"; const n = r(2114),
                        o = r(13),
                        i = r(5426),
                        s = r(8924);
                    t.exports = async(t, e, r, a, c, u, h, f) => { if (a.length) throw n(new Error(`No link named ${r} found in raw node ${t}`), "ERR_NOT_FOUND"); const l = await s.decode(t.multihash.bytes); return { entry: { type: "identity", name: e, path: r, cid: t, content: (p = l.digest, async function*(t = {}) { const { offset: e, length: r } = i(p.length, t.offset, t.length);
                                    yield o(p, 0, e, e + r) }), depth: u, size: l.digest.length, node: l.digest } }; var p } }, 4501: (t, e, r) => { "use strict"; const n = r(2114),
                        o = r(3925),
                        i = r(1082),
                        s = r(6945),
                        { identity: a } = r(8103),
                        c = {
                            [o.code]: r(8562), [s.code]: r(3650), [i.code]: r(6769), [a.code]: r(7257) };
                    t.exports = function t(e, r, o, i, s, a, u) { const h = c[e.code]; if (!h) throw n(new Error(`No resolver for code ${e.code}`), "ERR_NO_RESOLVER"); return h(e, r, o, i, t, s, a, u) } }, 3650: (t, e, r) => { "use strict"; const n = r(2114),
                        o = r(13),
                        i = r(5426);
                    t.exports = async(t, e, r, s, a, c, u, h) => { if (s.length) throw n(new Error(`No link named ${r} found in raw node ${t}`), "ERR_NOT_FOUND"); const f = await u.get(t, h); return { entry: { type: "raw", name: e, path: r, cid: t, content: (l = f, async function*(t = {}) { const { offset: e, length: r } = i(l.length, t.offset, t.length);
                                    yield o(l, 0, e, e + r) }), depth: c, size: f.length, node: f } }; var l } }, 6226: t => { "use strict";
                    t.exports = (t, e, r, n, o, i, s) => async function*(t = {}) { const r = t.offset || 0,
                            a = t.length || e.Links.length,
                            c = e.Links.slice(r, a); for (const e of c) { const r = await o(e.Hash, e.Name || "", `${n}/${e.Name||""}`, [], i + 1, s, t);
                            r.entry && (yield r.entry) } } }, 6670: (t, e, r) => { "use strict"; const n = r(13),
                        o = r(5426),
                        { UnixFS: i } = r(9862),
                        s = r(2114),
                        a = r(3925),
                        c = r(1082),
                        u = r(6945);
                    async function* h(t, e, r, o, f = 0, l) { if (e instanceof Uint8Array) { const t = n(e, f, r, o); return t.length && (yield t), f + t.length } if (null == e.Data) throw s(new Error("no data in PBNode"), "ERR_NOT_UNIXFS"); let p; try { p = i.unmarshal(e.Data) } catch (t) { throw s(t, "ERR_NOT_UNIXFS") } if (p.data && p.data.length) { const t = n(p.data, f, r, o);
                            t.length && (yield t), f += p.data.length } let d = f; for (let n = 0; n < e.Links.length; n++) { const i = e.Links[n],
                                s = f + p.blockSizes[n]; if (r >= d && r < s || o > d && o <= s || r < d && o > s) { const e = await t.get(i.Hash, { signal: l.signal }); let n; switch (i.Hash.code) {
                                    case a.code:
                                        n = await a.decode(e); break;
                                    case u.code:
                                        n = e; break;
                                    case c.code:
                                        n = await c.decode(e); break;
                                    default:
                                        throw Error(`Unsupported codec: ${i.Hash.code}`) } for await (const e of h(t, n, r, o, f, l)) f += e.length, yield e }
                            f = s, d = s + 1 } }
                    t.exports = (t, e, r, n, i, s, a) => function(t = {}) { const n = r.fileSize(); if (void 0 === n) throw new Error("File was a directory"); const { offset: i, length: s } = o(n, t.offset, t.length); return h(a, e, i, i + s, 0, t) } }, 511: (t, e, r) => { "use strict"; const { decode: n } = r(3925);
                    async function* o(t, e, r, i, s, a) { const c = t.Links; for (const u of c) { const c = null != u.Name ? u.Name.substring(2) : null; if (c) { const t = await r(u.Hash, c, `${e}/${c}`, [], i + 1, s, a);
                                yield t.entry } else { const c = await s.get(u.Hash);
                                t = n(c); for await (const n of o(t, e, r, i, s, a)) yield n } } }
                    t.exports = (t, e, r, n, i, s, a) => function(t = {}) { return o(e, n, i, s, a, t) } }, 8562: (t, e, r) => { "use strict"; const n = r(2114),
                        { UnixFS: o } = r(9862),
                        i = r(2169),
                        { decode: s } = r(3925),
                        a = { raw: r(6670), file: r(6670), directory: r(6226), "hamt-sharded-directory": r(511), metadata: (t, e, r, n, o, i, s) => () => [], symlink: (t, e, r, n, o, i, s) => () => [] };
                    t.exports = async(t, e, r, c, u, h, f, l) => { const p = await f.get(t, l),
                            d = s(p); let y, g; if (e || (e = t.toString()), null == d.Data) throw n(new Error("no data in PBNode"), "ERR_NOT_UNIXFS"); try { y = o.unmarshal(d.Data) } catch (t) { throw n(t, "ERR_NOT_UNIXFS") } if (r || (r = e), c.length) { let t; if (t = y && "hamt-sharded-directory" === y.type ? await i(d, c[0], f) : ((t, e) => { const r = t.Links.find((t => t.Name === e)); return r && r.Hash })(d, c[0]), !t) throw n(new Error("file does not exist"), "ERR_NOT_FOUND"); const e = c.shift();
                            g = { cid: t, toResolve: c, name: e || "", path: `${r}/${e}` } } return { entry: { type: y.isDirectory() ? "directory" : "file", name: e, path: r, cid: t, content: a[y.type](t, d, y, r, u, h, f), unixfs: y, depth: h, node: d, size: y.fileSize() }, next: g } } }, 13: t => { "use strict";
                    t.exports = function(t, e, r, n) { const o = e + t.length; return r >= o || n < e ? new Uint8Array(0) : (n >= e && n < o && (t = t.slice(0, n - e)), r >= e && r < o && (t = t.slice(r - e)), t) } }, 2169: (t, e, r) => { "use strict"; const { Bucket: n, createHAMT: o } = r(4563), { decode: i } = r(3925), s = r(469), a = r(7962), c = async function(t) { return a(s.x64.hash128(t), "base16").slice(0, 8).reverse() }, u = t => t.toString(16).toUpperCase().padStart(2, "0").substring(0, 2), h = async(t, e, r, s, a) => { if (!s) { const t = o({ hashFn: c });
                            s = { rootBucket: t, hamtDepth: 1, lastBucket: t } } var f, l, p;
                        await (f = t.Links, l = s.lastBucket, p = s.rootBucket, Promise.all(f.map((t => { if (null == t.Name) throw new Error("Unexpected Link without a Name"); if (2 === t.Name.length) { const e = parseInt(t.Name, 16); return l._putObjectAt(e, new n({ hash: p._options.hash, bits: p._options.bits }, l, e)) } return p.put(t.Name.substring(2), !0) })))); const d = await s.rootBucket._findNewBucketAndPos(e); let y = u(d.pos); const g = (t => { let e = t.bucket; const r = []; for (; e._parent;) r.push(e), e = e._parent; return r.push(e), r.reverse() })(d);
                        g.length > s.hamtDepth && (s.lastBucket = g[s.hamtDepth], y = u(s.lastBucket._posAtParent)); const w = t.Links.find((t => { if (null == t.Name) return !1; const r = t.Name.substring(0, 2),
                                n = t.Name.substring(2); return r === y && (!n || n === e) })); if (!w) return null; if (null != w.Name && w.Name.substring(2) === e) return w.Hash;
                        s.hamtDepth++; const b = await r.get(w.Hash, a); return t = i(b), h(t, e, r, s, a) };
                    t.exports = h }, 5426: (t, e, r) => { "use strict"; const n = r(2114);
                    t.exports = (t, e, r) => { if (e || (e = 0), e < 0) throw n(new Error("Offset must be greater than or equal to 0"), "ERR_INVALID_PARAMS"); if (e > t) throw n(new Error("Offset must be less than the file size"), "ERR_INVALID_PARAMS"); if (r || 0 === r || (r = t - e), r < 0) throw n(new Error("Length must be greater than or equal to 0"), "ERR_INVALID_PARAMS"); return e + r > t && (r = t - e), { offset: e, length: r } } }, 1262: (t, e, r) => { "use strict"; const n = r(9668);
                    t.exports = async function*(t, e) { let r = new n,
                            o = 0,
                            i = !1; const s = e.maxChunkSize; for await (const e of t) for (r.append(e), o += e.length; o >= s;)
                            if (yield r.slice(0, s), i = !0, s === r.length) r = new n, o = 0;
                            else { const t = new n;
                                t.append(r.shallowSlice(s)), r = t, o -= s }
                        i && !o || (yield r.slice(0, o)) } }, 7446: (t, e, r) => { "use strict"; const n = r(9668),
                        { create: o } = r(3060),
                        i = r(2114);
                    t.exports = async function*(t, e) { let r, s, a; if (e.minChunkSize && e.maxChunkSize && e.avgChunkSize) a = e.avgChunkSize, r = e.minChunkSize, s = e.maxChunkSize;
                        else { if (!e.avgChunkSize) throw i(new Error("please specify an average chunk size"), "ERR_INVALID_AVG_CHUNK_SIZE");
                            a = e.avgChunkSize, r = a / 3, s = a + a / 2 } if (r < 16) throw i(new Error("rabin min must be greater than 16"), "ERR_INVALID_MIN_CHUNK_SIZE");
                        s < r && (s = r), a < r && (a = r); const c = Math.floor(Math.log2(a)); for await (const i of async function*(t, e) { const r = await o(e.bits, e.min, e.max, e.window),
                                i = new n; for await (const e of t) { i.append(e); const t = r.fingerprint(e); for (let e = 0; e < t.length; e++) { const r = t[e],
                                        n = i.slice(0, r);
                                    i.consume(r), yield n } }
                            i.length && (yield i.slice(0)) }(t, { min: r, max: s, bits: c, window: e.window, polynomial: e.polynomial })) yield i } }, 8955: (t, e, r) => { "use strict"; const { UnixFS: n } = r(9862), o = r(9045), { encode: i, prepare: s } = r(3925);
                    t.exports = async(t, e, r) => { const a = new n({ type: "directory", mtime: t.mtime, mode: t.mode }),
                            c = i(s({ Data: a.marshal() })); return { cid: await o(c, e, r), path: t.path, unixfs: a, size: c.length } } }, 3884: (t, e, r) => { "use strict"; const n = r(8165);
                    async function o(t, e, r) { const i = []; for await (const o of n(t, r.maxChildrenPerNode)) i.push(await e(o)); return i.length > 1 ? o(i, e, r) : i[0] }
                    t.exports = function(t, e, r) { return o(t, e, r) } }, 3341: (t, e, r) => { "use strict"; const { UnixFS: n } = r(9862), o = r(9045), i = r(3925), s = r(6945);
                    t.exports = async function*(t, e, r) { for await (let a of t.content) yield async() => { let c;
                            r.progress(a.length, t.path); const u = { codec: i, cidVersion: r.cidVersion, hasher: r.hasher, onlyHash: r.onlyHash }; return r.rawLeaves ? (u.codec = s, u.cidVersion = 1) : (c = new n({ type: r.leafType, data: a, mtime: t.mtime, mode: t.mode }), a = i.encode({ Data: c.marshal(), Links: [] })), { cid: await o(a, e, u), unixfs: c, size: a.length } } } }, 9242: (t, e, r) => { "use strict"; const n = r(1303);
                    t.exports = async function(t, e) { return e(await n(t)) } }, 8059: (t, e, r) => { "use strict"; const n = r(2114),
                        { UnixFS: o } = r(9862),
                        i = r(9045),
                        { encode: s, prepare: a } = r(3925),
                        c = r(4810),
                        u = r(6945),
                        h = r(3925),
                        f = { flat: r(9242), balanced: r(3884), trickle: r(5960) };
                    t.exports = function(t, e, l) { const p = f[l.strategy]; if (!p) throw n(new Error(`Unknown importer build strategy name: ${l.strategy}`), "ERR_BAD_STRATEGY"); return p(async function*(t, e, n) { let o, i, s = -1;
                            i = "function" == typeof n.bufferImporter ? n.bufferImporter : r(3341); for await (const r of c(i(t, e, n), n.blockWriteConcurrency)) s++, 0 !== s ? (1 === s && o && (yield o, o = null), yield r) : o = r;
                            o && (o.single = !0, yield o) }(t, e, l), ((t, e, r) => async function(n) { if (1 === n.length && n[0].single && r.reduceSingleLeafToSelf) { const c = n[0]; if (c.cid.code === u.code && (void 0 !== t.mtime || void 0 !== t.mode)) { let n = await e.get(c.cid);
                                    c.unixfs = new o({ type: "file", mtime: t.mtime, mode: t.mode, data: n }), n = s(a({ Data: c.unixfs.marshal() })), c.cid = await i(n, e, {...r, codec: h, hasher: r.hasher, cidVersion: r.cidVersion }), c.size = n.length } return { cid: c.cid, path: t.path, unixfs: c.unixfs, size: c.size } } const c = new o({ type: "file", mtime: t.mtime, mode: t.mode }),
                                f = n.filter((t => !(t.cid.code !== u.code || !t.size) || !(!t.unixfs || t.unixfs.data || !t.unixfs.fileSize()) || Boolean(t.unixfs && t.unixfs.data && t.unixfs.data.length))).map((t => t.cid.code === u.code ? (c.addBlockSize(t.size), { Name: "", Tsize: t.size, Hash: t.cid }) : (t.unixfs && t.unixfs.data ? c.addBlockSize(t.unixfs.data.length) : c.addBlockSize(t.unixfs && t.unixfs.fileSize() || 0), { Name: "", Tsize: t.size, Hash: t.cid }))),
                                l = { Data: c.marshal(), Links: f },
                                p = s(a(l)); return { cid: await i(p, e, r), path: t.path, unixfs: c, size: p.length + l.Links.reduce(((t, e) => t + e.Tsize), 0) } })(t, e, l), l) } }, 5960: (t, e, r) => { "use strict"; const n = r(8165);
                    t.exports = async function(t, e, r) { const s = new i(r.layerRepeat); let a = 0,
                            c = 1,
                            u = s; for await (const i of n(t, r.maxChildrenPerNode)) u.isFull() && (u !== s && s.addChild(await u.reduce(e)), a && a % r.layerRepeat == 0 && c++, u = new o(c, r.layerRepeat, a), a++), u.append(i); return u && u !== s && s.addChild(await u.reduce(e)), s.reduce(e) };
                    class o { constructor(t, e, r = 0) { this.maxDepth = t, this.layerRepeat = e, this.currentDepth = 1, this.iteration = r, this.root = this.node = this.parent = { children: [], depth: this.currentDepth, maxDepth: t, maxChildren: (this.maxDepth - this.currentDepth) * this.layerRepeat } }
                        isFull() { if (!this.root.data) return !1; if (this.currentDepth < this.maxDepth && this.node.maxChildren) return this._addNextNodeToParent(this.node), !1; const t = this._findParent(this.node, this.currentDepth); return !t || (this._addNextNodeToParent(t), !1) }
                        _addNextNodeToParent(t) { this.parent = t; const e = { children: [], depth: t.depth + 1, parent: t, maxDepth: this.maxDepth, maxChildren: Math.floor(t.children.length / this.layerRepeat) * this.layerRepeat };
                            t.children.push(e), this.currentDepth = e.depth, this.node = e }
                        append(t) { this.node.data = t }
                        reduce(t) { return this._reduce(this.root, t) }
                        async _reduce(t, e) { let r = []; return t.children.length && (r = await Promise.all(t.children.filter((t => t.data)).map((t => this._reduce(t, e))))), e((t.data || []).concat(r)) }
                        _findParent(t, e) { const r = t.parent; if (r && 0 !== r.depth) return r.children.length !== r.maxChildren && r.maxChildren ? r : this._findParent(r, e) } }
                    class i extends o { constructor(t) { super(0, t), this.root.depth = 0, this.currentDepth = 1 }
                        addChild(t) { this.root.children.push(t) }
                        reduce(t) { return t((this.root.data || []).concat(this.root.children)) } } }, 8085: (t, e, r) => { "use strict"; const n = r(8955),
                        o = r(8059),
                        i = r(2114);

                    function s(t) { try { if (t instanceof Uint8Array) return async function*() { yield t }(); if (e = t, Symbol.iterator in e) return async function*() { yield* t }(); if (function(t) { return Symbol.asyncIterator in t }(t)) return t } catch { throw i(new Error("Content was invalid"), "ERR_INVALID_CONTENT") } var e; throw i(new Error("Content was invalid"), "ERR_INVALID_CONTENT") }
                    t.exports = async function*(t, e, i) { for await (const a of t) if (a.path && ("./" === a.path.substring(0, 2) && (i.wrapWithDirectory = !0), a.path = a.path.split("/").filter((t => t && "." !== t)).join("/")), a.content) { let t, n;
                            t = "function" == typeof i.chunker ? i.chunker : "rabin" === i.chunker ? r(7446) : r(1262), n = "function" == typeof i.chunkValidator ? i.chunkValidator : r(9518); const c = { path: a.path, mtime: a.mtime, mode: a.mode, content: t(n(s(a.content), i), i) };
                            yield() => o(c, e, i) } else { if (!a.path) throw new Error("Import candidate must have content or path or both"); { const t = { path: a.path, mtime: a.mtime, mode: a.mode };
                                yield() => n(t, e, i) } } } }, 9518: (t, e, r) => { "use strict"; const n = r(2114),
                        o = r(7962);
                    t.exports = async function*(t) { for await (const e of t) { if (void 0 === e.length) throw n(new Error("Content was invalid"), "ERR_INVALID_CONTENT"); if ("string" == typeof e || e instanceof String) yield o(e.toString());
                            else if (Array.isArray(e)) yield Uint8Array.from(e);
                            else { if (!(e instanceof Uint8Array)) throw n(new Error("Content was invalid"), "ERR_INVALID_CONTENT");
                                yield e } } } }, 3445: (t, e, r) => { "use strict"; const { encode: n, prepare: o } = r(3925), { UnixFS: i } = r(9862), s = r(7720), a = r(9045);
                    t.exports = class extends s { constructor(t, e) { super(t, e), this._children = {} }
                        async put(t, e) { this.cid = void 0, this.size = void 0, this._children[t] = e }
                        get(t) { return Promise.resolve(this._children[t]) }
                        childCount() { return Object.keys(this._children).length }
                        directChildrenCount() { return this.childCount() }
                        onlyChild() { return this._children[Object.keys(this._children)[0]] }
                        async * eachChildSeries() { const t = Object.keys(this._children); for (let e = 0; e < t.length; e++) { const r = t[e];
                                yield { key: r, child: this._children[r] } } }
                        async * flush(t) { const e = Object.keys(this._children),
                                r = []; for (let n = 0; n < e.length; n++) { let o = this._children[e[n]]; if (o instanceof s)
                                    for await (const e of o.flush(t)) o = e, yield o;
                                null != o.size && o.cid && r.push({ Name: e[n], Tsize: o.size, Hash: o.cid }) } const c = new i({ type: "directory", mtime: this.mtime, mode: this.mode }),
                                u = { Data: c.marshal(), Links: r },
                                h = n(o(u)),
                                f = await a(h, t, this.options),
                                l = h.length + u.Links.reduce(((t, e) => t + (null == e.Tsize ? 0 : e.Tsize)), 0);
                            this.cid = f, this.size = l, yield { cid: f, unixfs: c, path: this.path, size: l } } } }, 3581: (t, e, r) => { "use strict"; const { encode: n, prepare: o } = r(3925), { UnixFS: i } = r(9862), s = r(7720), a = r(9045), { createHAMT: c, Bucket: u } = r(4563);
                    async function* h(t, e, r, s) { const c = t._children,
                            f = []; let l = 0; for (let t = 0; t < c.length; t++) { const r = c.get(t); if (!r) continue; const n = t.toString(16).toUpperCase().padStart(2, "0"); if (r instanceof u) { let t; for await (const n of await h(r, e, null, s)) t = n; if (!t) throw new Error("Could not flush sharded directory, no subshard found");
                                f.push({ Name: n, Tsize: t.size, Hash: t.cid }), l += t.size } else if ("function" == typeof r.value.flush) { const t = r.value; let o; for await (const r of t.flush(e)) o = r, yield o; const i = n + r.key;
                                f.push({ Name: i, Tsize: o.size, Hash: o.cid }), l += o.size } else { const t = r.value; if (!t.cid) continue; const e = n + r.key,
                                    o = t.size;
                                f.push({ Name: e, Tsize: o, Hash: t.cid }), l += o } } const p = Uint8Array.from(c.bitField().reverse()),
                            d = new i({ type: "hamt-sharded-directory", data: p, fanout: t.tableSize(), hashType: s.hamtHashCode, mtime: r && r.mtime, mode: r && r.mode }),
                            y = { Data: d.marshal(), Links: f },
                            g = n(o(y)),
                            w = await a(g, e, s),
                            b = g.length + l;
                        yield { cid: w, unixfs: d, size: b } }
                    t.exports = class extends s { constructor(t, e) { super(t, e), this._bucket = c({ hashFn: e.hamtHashFn, bits: e.hamtBucketBits }) }
                        async put(t, e) { await this._bucket.put(t, e) }
                        get(t) { return this._bucket.get(t) }
                        childCount() { return this._bucket.leafCount() }
                        directChildrenCount() { return this._bucket.childrenCount() }
                        onlyChild() { return this._bucket.onlyChild() }
                        async * eachChildSeries() { for await (const { key: t, value: e }
                                of this._bucket.eachLeafSeries()) yield { key: t, child: e } }
                        async * flush(t) { for await (const e of h(this._bucket, t, this, this.options)) yield {...e, path: this.path } } } }, 7720: t => { "use strict";
                    t.exports = class { constructor(t, e) { this.options = e || {}, this.root = t.root, this.dir = t.dir, this.path = t.path, this.dirty = t.dirty, this.flat = t.flat, this.parent = t.parent, this.parentKey = t.parentKey, this.unixfs = t.unixfs, this.mode = t.mode, this.mtime = t.mtime, this.cid = void 0, this.size = void 0 }
                        async put(t, e) {}
                        get(t) { return Promise.resolve(this) }
                        async * eachChildSeries() {}
                        async * flush(t) {} } }, 2691: (t, e, r) => { "use strict"; const n = r(3581),
                        o = r(3445);
                    t.exports = async function t(e, r, i, s) { let a = r;
                        r instanceof o && r.directChildrenCount() >= i && (a = await async function(t, e) { const r = new n({ root: t.root, dir: !0, parent: t.parent, parentKey: t.parentKey, path: t.path, dirty: t.dirty, flat: !1, mtime: t.mtime, mode: t.mode }, e); for await (const { key: e, child: n }
                                of t.eachChildSeries()) await r.put(e, n); return r }(r, s)); const c = a.parent; if (c) { if (a !== r) { if (e && (e.parent = a), !a.parentKey) throw new Error("No parent key found");
                                await c.put(a.parentKey, a) } return t(a, c, i, s) } return a } }, 493: (t, e, r) => { "use strict"; const n = r(4810),
                        o = r(4182);
                    t.exports = { importer: async function*(t, e, i = {}) { const s = o(i); let a, c, u;
                            a = "function" == typeof i.dagBuilder ? i.dagBuilder : r(8085), c = "function" == typeof i.treeBuilder ? i.treeBuilder : r(9160), u = Symbol.asyncIterator in t || Symbol.iterator in t ? t : [t]; for await (const t of c(n(a(u, e, s), s.fileImportConcurrency), e, s)) yield { cid: t.cid, path: t.path, unixfs: t.unixfs, size: t.size } } } }, 4182: (t, e, r) => { "use strict"; const n = r(942).bind({ ignoreUndefined: !0 }),
                        { sha256: o } = r(6155),
                        i = r(469),
                        s = r(7962),
                        a = { chunker: "fixed", strategy: "balanced", rawLeaves: !1, onlyHash: !1, reduceSingleLeafToSelf: !0, hasher: o, leafType: "file", cidVersion: 0, progress: () => () => {}, shardSplitThreshold: 1e3, fileImportConcurrency: 50, blockWriteConcurrency: 10, minChunkSize: 262144, maxChunkSize: 262144, avgChunkSize: 262144, window: 16, polynomial: 0x3df305dfb2a804, maxChildrenPerNode: 174, layerRepeat: 4, wrapWithDirectory: !1, recursive: !1, hidden: !1, timeout: void 0, hamtHashFn: async function(t) { return s(i.x64.hash128(t), "base16").slice(0, 8).reverse() }, hamtHashCode: 34, hamtBucketBits: 8 };
                    t.exports = function(t = {}) { return n(a, t) } }, 9160: (t, e, r) => { "use strict"; const n = r(3445),
                        o = r(2691),
                        i = r(7720),
                        s = r(4281);
                    async function a(t, e, r) { const a = s(t.path || ""),
                            c = a.length - 1; let u = e,
                            h = ""; for (let s = 0; s < a.length; s++) { const f = a[s];
                            h += `${h?"/":""}${f}`; const l = s === c; if (u.dirty = !0, u.cid = void 0, u.size = void 0, l) await u.put(f, t), e = await o(null, u, r.shardSplitThreshold, r);
                            else { let t = await u.get(f);
                                t && t instanceof i || (t = new n({ root: !1, dir: !0, parent: u, parentKey: f, path: h, dirty: !0, flat: !0, mtime: t && t.unixfs && t.unixfs.mtime, mode: t && t.unixfs && t.unixfs.mode }, r)), await u.put(f, t), u = t } } return e }
                    async function* c(t, e) { t instanceof i ? yield* t.flush(e) : t && t.unixfs && t.unixfs.isDirectory() && (yield t) }
                    t.exports = async function*(t, e, r) { let o = new n({ root: !0, dir: !0, path: "", dirty: !0, flat: !0 }, r); for await (const e of t) e && (o = await a(e, o, r), e.unixfs && e.unixfs.isDirectory() || (yield e)); if (r.wrapWithDirectory) yield* c(o, e);
                        else
                            for await (const t of o.eachChildSeries()) t && (yield* c(t.child, e)) } }, 9045: (t, e, r) => { "use strict"; const { CID: n } = r(1362), o = r(3925), { sha256: i } = r(6155);
                    t.exports = async(t, e, r) => { r.codec || (r.codec = o), r.hasher || (r.hasher = i), void 0 === r.cidVersion && (r.cidVersion = 1), r.codec === o && r.hasher !== i && (r.cidVersion = 1); const s = await r.hasher.digest(t),
                            a = n.create(r.cidVersion, r.codec.code, s); return r.onlyHash || await e.put(a, t, { signal: r.signal }), a } }, 4281: t => { "use strict";
                    t.exports = (t = "") => (t.trim().match(/([^\\^/]|\\\/)+/g) || []).filter(Boolean) }, 9862: (t, e, r) => { "use strict"; const { Data: n } = r(4692), o = r(2114), i = ["raw", "directory", "file", "metadata", "symlink", "hamt-sharded-directory"], s = ["directory", "hamt-sharded-directory"], a = parseInt("0644", 8), c = parseInt("0755", 8);

                    function u(t) { if (null != t) return "number" == typeof t ? 4095 & t : "0" === (t = t.toString()).substring(0, 1) ? 4095 & parseInt(t, 8) : 4095 & parseInt(t, 10) }

                    function h(t) { if (null == t) return; let e; if (null != t.secs && (e = { secs: t.secs, nsecs: t.nsecs }), null != t.Seconds && (e = { secs: t.Seconds, nsecs: t.FractionalNanoseconds }), Array.isArray(t) && (e = { secs: t[0], nsecs: t[1] }), t instanceof Date) { const r = t.getTime(),
                                n = Math.floor(r / 1e3);
                            e = { secs: n, nsecs: 1e3 * (r - 1e3 * n) } } if (Object.prototype.hasOwnProperty.call(e, "secs")) { if (null != e && null != e.nsecs && (e.nsecs < 0 || e.nsecs > 999999999)) throw o(new Error("mtime-nsecs must be within the range [0,999999999]"), "ERR_INVALID_MTIME_NSECS"); return e } }
                    class f { static unmarshal(t) { const e = n.decode(t),
                                r = n.toObject(e, { defaults: !1, arrays: !0, longs: Number, objects: !1 }),
                                o = new f({ type: i[r.Type], data: r.Data, blockSizes: r.blocksizes, mode: r.mode, mtime: r.mtime ? { secs: r.mtime.Seconds, nsecs: r.mtime.FractionalNanoseconds } : void 0 }); return o._originalMode = r.mode || 0, o }
                        constructor(t = { type: "file" }) { const { type: e, data: r, blockSizes: n, hashType: s, fanout: a, mtime: c, mode: f } = t; if (e && !i.includes(e)) throw o(new Error("Type: " + e + " is not valid"), "ERR_INVALID_TYPE");
                            this.type = e || "file", this.data = r, this.hashType = s, this.fanout = a, this.blockSizes = n || [], this._originalMode = 0, this.mode = u(f), c && (this.mtime = h(c), this.mtime && !this.mtime.nsecs && (this.mtime.nsecs = 0)) }
                        set mode(t) { this._mode = this.isDirectory() ? c : a; const e = u(t);
                            void 0 !== e && (this._mode = e) }
                        get mode() { return this._mode }
                        isDirectory() { return Boolean(this.type && s.includes(this.type)) }
                        addBlockSize(t) { this.blockSizes.push(t) }
                        removeBlockSize(t) { this.blockSizes.splice(t, 1) }
                        fileSize() { if (this.isDirectory()) return 0; let t = 0; return this.blockSizes.forEach((e => { t += e })), this.data && (t += this.data.length), t }
                        marshal() { let t; switch (this.type) {
                                case "raw":
                                    t = n.DataType.Raw; break;
                                case "directory":
                                    t = n.DataType.Directory; break;
                                case "file":
                                    t = n.DataType.File; break;
                                case "metadata":
                                    t = n.DataType.Metadata; break;
                                case "symlink":
                                    t = n.DataType.Symlink; break;
                                case "hamt-sharded-directory":
                                    t = n.DataType.HAMTShard; break;
                                default:
                                    throw o(new Error("Type: " + t + " is not valid"), "ERR_INVALID_TYPE") } let e, r, i = this.data; if (this.data && this.data.length || (i = void 0), null != this.mode && (e = 4294963200 & this._originalMode | (u(this.mode) || 0), e !== a || this.isDirectory() || (e = void 0), e === c && this.isDirectory() && (e = void 0)), null != this.mtime) { const t = h(this.mtime);
                                t && (r = { Seconds: t.secs, FractionalNanoseconds: t.nsecs }, 0 === r.FractionalNanoseconds && delete r.FractionalNanoseconds) } const s = { Type: t, Data: i, filesize: this.isDirectory() ? void 0 : this.fileSize(), blocksizes: this.blockSizes, hashType: this.hashType, fanout: this.fanout, mode: e, mtime: r }; return n.encode(s).finish() } }
                    t.exports = { UnixFS: f, parseMode: u, parseMtime: h } }, 4692: (t, e, r) => { "use strict"; var n = r(2100),
                        o = n.Reader,
                        i = n.Writer,
                        s = n.util,
                        a = n.roots["ipfs-unixfs"] || (n.roots["ipfs-unixfs"] = {});
                    a.Data = function() {
                        function t(t) { if (this.blocksizes = [], t)
                                for (var e = Object.keys(t), r = 0; r < e.length; ++r) null != t[e[r]] && (this[e[r]] = t[e[r]]) } var e, r; return t.prototype.Type = 0, t.prototype.Data = s.newBuffer([]), t.prototype.filesize = s.Long ? s.Long.fromBits(0, 0, !0) : 0, t.prototype.blocksizes = s.emptyArray, t.prototype.hashType = s.Long ? s.Long.fromBits(0, 0, !0) : 0, t.prototype.fanout = s.Long ? s.Long.fromBits(0, 0, !0) : 0, t.prototype.mode = 0, t.prototype.mtime = null, t.encode = function(t, e) { if (e || (e = i.create()), e.uint32(8).int32(t.Type), null != t.Data && Object.hasOwnProperty.call(t, "Data") && e.uint32(18).bytes(t.Data), null != t.filesize && Object.hasOwnProperty.call(t, "filesize") && e.uint32(24).uint64(t.filesize), null != t.blocksizes && t.blocksizes.length)
                                for (var r = 0; r < t.blocksizes.length; ++r) e.uint32(32).uint64(t.blocksizes[r]); return null != t.hashType && Object.hasOwnProperty.call(t, "hashType") && e.uint32(40).uint64(t.hashType), null != t.fanout && Object.hasOwnProperty.call(t, "fanout") && e.uint32(48).uint64(t.fanout), null != t.mode && Object.hasOwnProperty.call(t, "mode") && e.uint32(56).uint32(t.mode), null != t.mtime && Object.hasOwnProperty.call(t, "mtime") && a.UnixTime.encode(t.mtime, e.uint32(66).fork()).ldelim(), e }, t.decode = function(t, e) { t instanceof o || (t = o.create(t)); for (var r = void 0 === e ? t.len : t.pos + e, n = new a.Data; t.pos < r;) { var i = t.uint32(); switch (i >>> 3) {
                                    case 1:
                                        n.Type = t.int32(); break;
                                    case 2:
                                        n.Data = t.bytes(); break;
                                    case 3:
                                        n.filesize = t.uint64(); break;
                                    case 4:
                                        if (n.blocksizes && n.blocksizes.length || (n.blocksizes = []), 2 == (7 & i))
                                            for (var c = t.uint32() + t.pos; t.pos < c;) n.blocksizes.push(t.uint64());
                                        else n.blocksizes.push(t.uint64()); break;
                                    case 5:
                                        n.hashType = t.uint64(); break;
                                    case 6:
                                        n.fanout = t.uint64(); break;
                                    case 7:
                                        n.mode = t.uint32(); break;
                                    case 8:
                                        n.mtime = a.UnixTime.decode(t, t.uint32()); break;
                                    default:
                                        t.skipType(7 & i) } } if (!n.hasOwnProperty("Type")) throw s.ProtocolError("missing required 'Type'", { instance: n }); return n }, t.fromObject = function(t) { if (t instanceof a.Data) return t; var e = new a.Data; switch (t.Type) {
                                case "Raw":
                                case 0:
                                    e.Type = 0; break;
                                case "Directory":
                                case 1:
                                    e.Type = 1; break;
                                case "File":
                                case 2:
                                    e.Type = 2; break;
                                case "Metadata":
                                case 3:
                                    e.Type = 3; break;
                                case "Symlink":
                                case 4:
                                    e.Type = 4; break;
                                case "HAMTShard":
                                case 5:
                                    e.Type = 5 } if (null != t.Data && ("string" == typeof t.Data ? s.base64.decode(t.Data, e.Data = s.newBuffer(s.base64.length(t.Data)), 0) : t.Data.length && (e.Data = t.Data)), null != t.filesize && (s.Long ? (e.filesize = s.Long.fromValue(t.filesize)).unsigned = !0 : "string" == typeof t.filesize ? e.filesize = parseInt(t.filesize, 10) : "number" == typeof t.filesize ? e.filesize = t.filesize : "object" == typeof t.filesize && (e.filesize = new s.LongBits(t.filesize.low >>> 0, t.filesize.high >>> 0).toNumber(!0))), t.blocksizes) { if (!Array.isArray(t.blocksizes)) throw TypeError(".Data.blocksizes: array expected");
                                e.blocksizes = []; for (var r = 0; r < t.blocksizes.length; ++r) s.Long ? (e.blocksizes[r] = s.Long.fromValue(t.blocksizes[r])).unsigned = !0 : "string" == typeof t.blocksizes[r] ? e.blocksizes[r] = parseInt(t.blocksizes[r], 10) : "number" == typeof t.blocksizes[r] ? e.blocksizes[r] = t.blocksizes[r] : "object" == typeof t.blocksizes[r] && (e.blocksizes[r] = new s.LongBits(t.blocksizes[r].low >>> 0, t.blocksizes[r].high >>> 0).toNumber(!0)) } if (null != t.hashType && (s.Long ? (e.hashType = s.Long.fromValue(t.hashType)).unsigned = !0 : "string" == typeof t.hashType ? e.hashType = parseInt(t.hashType, 10) : "number" == typeof t.hashType ? e.hashType = t.hashType : "object" == typeof t.hashType && (e.hashType = new s.LongBits(t.hashType.low >>> 0, t.hashType.high >>> 0).toNumber(!0))), null != t.fanout && (s.Long ? (e.fanout = s.Long.fromValue(t.fanout)).unsigned = !0 : "string" == typeof t.fanout ? e.fanout = parseInt(t.fanout, 10) : "number" == typeof t.fanout ? e.fanout = t.fanout : "object" == typeof t.fanout && (e.fanout = new s.LongBits(t.fanout.low >>> 0, t.fanout.high >>> 0).toNumber(!0))), null != t.mode && (e.mode = t.mode >>> 0), null != t.mtime) { if ("object" != typeof t.mtime) throw TypeError(".Data.mtime: object expected");
                                e.mtime = a.UnixTime.fromObject(t.mtime) } return e }, t.toObject = function(t, e) { e || (e = {}); var r = {}; if ((e.arrays || e.defaults) && (r.blocksizes = []), e.defaults) { if (r.Type = e.enums === String ? "Raw" : 0, e.bytes === String ? r.Data = "" : (r.Data = [], e.bytes !== Array && (r.Data = s.newBuffer(r.Data))), s.Long) { var n = new s.Long(0, 0, !0);
                                    r.filesize = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n } else r.filesize = e.longs === String ? "0" : 0;
                                s.Long ? (n = new s.Long(0, 0, !0), r.hashType = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n) : r.hashType = e.longs === String ? "0" : 0, s.Long ? (n = new s.Long(0, 0, !0), r.fanout = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n) : r.fanout = e.longs === String ? "0" : 0, r.mode = 0, r.mtime = null } if (null != t.Type && t.hasOwnProperty("Type") && (r.Type = e.enums === String ? a.Data.DataType[t.Type] : t.Type), null != t.Data && t.hasOwnProperty("Data") && (r.Data = e.bytes === String ? s.base64.encode(t.Data, 0, t.Data.length) : e.bytes === Array ? Array.prototype.slice.call(t.Data) : t.Data), null != t.filesize && t.hasOwnProperty("filesize") && ("number" == typeof t.filesize ? r.filesize = e.longs === String ? String(t.filesize) : t.filesize : r.filesize = e.longs === String ? s.Long.prototype.toString.call(t.filesize) : e.longs === Number ? new s.LongBits(t.filesize.low >>> 0, t.filesize.high >>> 0).toNumber(!0) : t.filesize), t.blocksizes && t.blocksizes.length) { r.blocksizes = []; for (var o = 0; o < t.blocksizes.length; ++o) "number" == typeof t.blocksizes[o] ? r.blocksizes[o] = e.longs === String ? String(t.blocksizes[o]) : t.blocksizes[o] : r.blocksizes[o] = e.longs === String ? s.Long.prototype.toString.call(t.blocksizes[o]) : e.longs === Number ? new s.LongBits(t.blocksizes[o].low >>> 0, t.blocksizes[o].high >>> 0).toNumber(!0) : t.blocksizes[o] } return null != t.hashType && t.hasOwnProperty("hashType") && ("number" == typeof t.hashType ? r.hashType = e.longs === String ? String(t.hashType) : t.hashType : r.hashType = e.longs === String ? s.Long.prototype.toString.call(t.hashType) : e.longs === Number ? new s.LongBits(t.hashType.low >>> 0, t.hashType.high >>> 0).toNumber(!0) : t.hashType), null != t.fanout && t.hasOwnProperty("fanout") && ("number" == typeof t.fanout ? r.fanout = e.longs === String ? String(t.fanout) : t.fanout : r.fanout = e.longs === String ? s.Long.prototype.toString.call(t.fanout) : e.longs === Number ? new s.LongBits(t.fanout.low >>> 0, t.fanout.high >>> 0).toNumber(!0) : t.fanout), null != t.mode && t.hasOwnProperty("mode") && (r.mode = t.mode), null != t.mtime && t.hasOwnProperty("mtime") && (r.mtime = a.UnixTime.toObject(t.mtime, e)), r }, t.prototype.toJSON = function() { return this.constructor.toObject(this, n.util.toJSONOptions) }, t.DataType = (e = {}, (r = Object.create(e))[e[0] = "Raw"] = 0, r[e[1] = "Directory"] = 1, r[e[2] = "File"] = 2, r[e[3] = "Metadata"] = 3, r[e[4] = "Symlink"] = 4, r[e[5] = "HAMTShard"] = 5, r), t }(), a.UnixTime = function() {
                        function t(t) { if (t)
                                for (var e = Object.keys(t), r = 0; r < e.length; ++r) null != t[e[r]] && (this[e[r]] = t[e[r]]) } return t.prototype.Seconds = s.Long ? s.Long.fromBits(0, 0, !1) : 0, t.prototype.FractionalNanoseconds = 0, t.encode = function(t, e) { return e || (e = i.create()), e.uint32(8).int64(t.Seconds), null != t.FractionalNanoseconds && Object.hasOwnProperty.call(t, "FractionalNanoseconds") && e.uint32(21).fixed32(t.FractionalNanoseconds), e }, t.decode = function(t, e) { t instanceof o || (t = o.create(t)); for (var r = void 0 === e ? t.len : t.pos + e, n = new a.UnixTime; t.pos < r;) { var i = t.uint32(); switch (i >>> 3) {
                                    case 1:
                                        n.Seconds = t.int64(); break;
                                    case 2:
                                        n.FractionalNanoseconds = t.fixed32(); break;
                                    default:
                                        t.skipType(7 & i) } } if (!n.hasOwnProperty("Seconds")) throw s.ProtocolError("missing required 'Seconds'", { instance: n }); return n }, t.fromObject = function(t) { if (t instanceof a.UnixTime) return t; var e = new a.UnixTime; return null != t.Seconds && (s.Long ? (e.Seconds = s.Long.fromValue(t.Seconds)).unsigned = !1 : "string" == typeof t.Seconds ? e.Seconds = parseInt(t.Seconds, 10) : "number" == typeof t.Seconds ? e.Seconds = t.Seconds : "object" == typeof t.Seconds && (e.Seconds = new s.LongBits(t.Seconds.low >>> 0, t.Seconds.high >>> 0).toNumber())), null != t.FractionalNanoseconds && (e.FractionalNanoseconds = t.FractionalNanoseconds >>> 0), e }, t.toObject = function(t, e) { e || (e = {}); var r = {}; if (e.defaults) { if (s.Long) { var n = new s.Long(0, 0, !1);
                                    r.Seconds = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n } else r.Seconds = e.longs === String ? "0" : 0;
                                r.FractionalNanoseconds = 0 } return null != t.Seconds && t.hasOwnProperty("Seconds") && ("number" == typeof t.Seconds ? r.Seconds = e.longs === String ? String(t.Seconds) : t.Seconds : r.Seconds = e.longs === String ? s.Long.prototype.toString.call(t.Seconds) : e.longs === Number ? new s.LongBits(t.Seconds.low >>> 0, t.Seconds.high >>> 0).toNumber() : t.Seconds), null != t.FractionalNanoseconds && t.hasOwnProperty("FractionalNanoseconds") && (r.FractionalNanoseconds = t.FractionalNanoseconds), r }, t.prototype.toJSON = function() { return this.constructor.toObject(this, n.util.toJSONOptions) }, t }(), a.Metadata = function() {
                        function t(t) { if (t)
                                for (var e = Object.keys(t), r = 0; r < e.length; ++r) null != t[e[r]] && (this[e[r]] = t[e[r]]) } return t.prototype.MimeType = "", t.encode = function(t, e) { return e || (e = i.create()), null != t.MimeType && Object.hasOwnProperty.call(t, "MimeType") && e.uint32(10).string(t.MimeType), e }, t.decode = function(t, e) { t instanceof o || (t = o.create(t)); for (var r = void 0 === e ? t.len : t.pos + e, n = new a.Metadata; t.pos < r;) { var i = t.uint32(); switch (i >>> 3) {
                                    case 1:
                                        n.MimeType = t.string(); break;
                                    default:
                                        t.skipType(7 & i) } } return n }, t.fromObject = function(t) { if (t instanceof a.Metadata) return t; var e = new a.Metadata; return null != t.MimeType && (e.MimeType = String(t.MimeType)), e }, t.toObject = function(t, e) { e || (e = {}); var r = {}; return e.defaults && (r.MimeType = ""), null != t.MimeType && t.hasOwnProperty("MimeType") && (r.MimeType = t.MimeType), r }, t.prototype.toJSON = function() { return this.constructor.toObject(this, n.util.toJSONOptions) }, t }(), t.exports = a }, 3310: t => { "use strict";
                    t.exports = t => { if ("[object Object]" !== Object.prototype.toString.call(t)) return !1; const e = Object.getPrototypeOf(t); return null === e || e === Object.prototype } }, 1303: t => { "use strict";
                    t.exports = async t => { const e = []; for await (const r of t) e.push(r); return e } }, 8165: t => { "use strict";
                    t.exports = async function*(t, e = 1) { let r = [];
                        e < 1 && (e = 1); for await (const n of t) for (r.push(n); r.length >= e;) yield r.slice(0, e), r = r.slice(e); for (; r.length;) yield r.slice(0, e), r = r.slice(e) } }, 4593: t => { "use strict";
                    t.exports = async t => { for await (const e of t); } }, 5565: t => { "use strict";
                    t.exports = async function*(t, e) { for await (const r of t) await e(r) && (yield r) } }, 3093: t => { "use strict";
                    t.exports = async t => { let e; for await (const r of t) e = r; return e } }, 2121: t => { "use strict";
                    t.exports = async function*(t, e) { for await (const r of t) yield e(r) } }, 4810: (t, e, r) => { "use strict"; const n = r(8165);
                    t.exports = async function*(t, e = 1) { for await (const r of n(t, e)) { const t = r.map((t => t().then((t => ({ ok: !0, value: t })), (t => ({ ok: !1, err: t }))))); for (let e = 0; e < t.length; e++) { const r = await t[e]; if (!r.ok) throw r.err;
                                yield r.value } } } }, 8132: t => { "use strict";
                    t.exports = function(t) { const [e, r] = t[Symbol.asyncIterator] ? [t[Symbol.asyncIterator](), Symbol.asyncIterator] : [t[Symbol.iterator](), Symbol.iterator], n = []; return { peek: () => e.next(), push: t => { n.push(t) }, next: () => n.length ? { done: !1, value: n.shift() } : e.next(), [r]() { return this } } } }, 618: t => { const e = (...t) => { let e; for (; t.length;) e = t.shift()(e); return e },
                        r = t => t && ("function" == typeof t[Symbol.asyncIterator] || "function" == typeof t[Symbol.iterator] || "function" == typeof t.next),
                        n = t => t && "function" == typeof t.sink && r(t.source),
                        o = t => e => (t.sink(e), t.source),
                        i = (...t) => { if (n(t[0])) { const e = t[0];
                                t[0] = () => e.source } else if (r(t[0])) { const e = t[0];
                                t[0] = () => e } if (t.length > 1 && n(t[t.length - 1]) && (t[t.length - 1] = t[t.length - 1].sink), t.length > 2)
                                for (let e = 1; e < t.length - 1; e++) n(t[e]) && (t[e] = o(t[e])); return e(...t) };
                    t.exports = i, t.exports.pipe = i, t.exports.rawPipe = e, t.exports.isIterable = r, t.exports.isDuplex = n }, 7939: t => { "use strict";
                    t.exports = async function*(t, e) { let r = 0; if (!(e < 1))
                            for await (const n of t) if (yield n, r++, r === e) return } }, 942: function(t, e, r) { "use strict"; const n = r(3310),
                        { hasOwnProperty: o } = Object.prototype,
                        { propertyIsEnumerable: i } = Object,
                        s = (t, e, r) => Object.defineProperty(t, e, { value: r, writable: !0, enumerable: !0, configurable: !0 }),
                        a = this,
                        c = { concatArrays: !1, ignoreUndefined: !1 },
                        u = t => { const e = []; for (const r in t) o.call(t, r) && e.push(r); if (Object.getOwnPropertySymbols) { const r = Object.getOwnPropertySymbols(t); for (const n of r) i.call(t, n) && e.push(n) } return e };

                    function h(t) { return Array.isArray(t) ? function(t) { const e = t.slice(0, 0); return u(t).forEach((r => { s(e, r, h(t[r])) })), e }(t) : n(t) ? function(t) { const e = null === Object.getPrototypeOf(t) ? Object.create(null) : {}; return u(t).forEach((r => { s(e, r, h(t[r])) })), e }(t) : t } const f = (t, e, r, n) => (r.forEach((r => { void 0 === e[r] && n.ignoreUndefined || (r in t && t[r] !== Object.getPrototypeOf(t) ? s(t, r, l(t[r], e[r], n)) : s(t, r, h(e[r]))) })), t);

                    function l(t, e, r) { return r.concatArrays && Array.isArray(t) && Array.isArray(e) ? ((t, e, r) => { let n = t.slice(0, 0),
                                i = 0; return [t, e].forEach((e => { const a = []; for (let r = 0; r < e.length; r++) o.call(e, r) && (a.push(String(r)), s(n, i++, e === t ? e[r] : h(e[r])));
                                n = f(n, e, u(e).filter((t => !a.includes(t))), r) })), n })(t, e, r) : n(e) && n(t) ? f(t, e, u(e), r) : h(e) }
                    t.exports = function(...t) { const e = l(h(c), this !== a && this || {}, c); let r = { _: {} }; for (const o of t)
                            if (void 0 !== o) { if (!n(o)) throw new TypeError("`" + o + "` is not an Option Object");
                                r = l(r, { _: o }, e) }
                        return r._ } }, 469: (t, e, r) => { t.exports = r(8027) }, 8027: function(t, e) {! function(r, n) { "use strict"; var o = { version: "3.0.0", x86: {}, x64: {}, inputValidation: !0 };

                        function i(t) { if (!Array.isArray(t) && !ArrayBuffer.isView(t)) return !1; for (var e = 0; e < t.length; e++)
                                if (!Number.isInteger(t[e]) || t[e] < 0 || t[e] > 255) return !1;
                            return !0 }

                        function s(t, e) { return (65535 & t) * e + (((t >>> 16) * e & 65535) << 16) }

                        function a(t, e) { return t << e | t >>> 32 - e }

                        function c(t) { return t = s(t ^= t >>> 16, 2246822507), (t = s(t ^= t >>> 13, 3266489909)) ^ t >>> 16 }

                        function u(t, e) { t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]; var r = [0, 0, 0, 0]; return r[3] += t[3] + e[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += t[2] + e[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += t[1] + e[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += t[0] + e[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]] }

                        function h(t, e) { t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]; var r = [0, 0, 0, 0]; return r[3] += t[3] * e[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += t[2] * e[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += t[3] * e[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += t[1] * e[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += t[2] * e[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += t[3] * e[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]] }

                        function f(t, e) { return 32 == (e %= 64) ? [t[1], t[0]] : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e]) }

                        function l(t, e) { return 0 == (e %= 64) ? t : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0] }

                        function p(t, e) { return [t[0] ^ e[0], t[1] ^ e[1]] }

                        function d(t) { return t = p(t, [0, t[0] >>> 1]), t = p(t = h(t, [4283543511, 3981806797]), [0, t[0] >>> 1]), p(t = h(t, [3301882366, 444984403]), [0, t[0] >>> 1]) }
                        o.x86.hash32 = function(t, e) { if (o.inputValidation && !i(t)) return n;
                            e = e || 0; for (var r = t.length % 4, u = t.length - r, h = e, f = 0, l = 3432918353, p = 461845907, d = 0; d < u; d += 4) f = s(f = t[d] | t[d + 1] << 8 | t[d + 2] << 16 | t[d + 3] << 24, l), f = s(f = a(f, 15), p), h = s(h = a(h ^= f, 13), 5) + 3864292196; switch (f = 0, r) {
                                case 3:
                                    f ^= t[d + 2] << 16;
                                case 2:
                                    f ^= t[d + 1] << 8;
                                case 1:
                                    f = s(f ^= t[d], l), h ^= f = s(f = a(f, 15), p) } return (h = c(h ^= t.length)) >>> 0 }, o.x86.hash128 = function(t, e) { if (o.inputValidation && !i(t)) return n;
                            e = e || 0; for (var r = t.length % 16, u = t.length - r, h = e, f = e, l = e, p = e, d = 0, y = 0, g = 0, w = 0, b = 597399067, m = 2869860233, _ = 951274213, v = 2716044179, E = 0; E < u; E += 16) d = t[E] | t[E + 1] << 8 | t[E + 2] << 16 | t[E + 3] << 24, y = t[E + 4] | t[E + 5] << 8 | t[E + 6] << 16 | t[E + 7] << 24, g = t[E + 8] | t[E + 9] << 8 | t[E + 10] << 16 | t[E + 11] << 24, w = t[E + 12] | t[E + 13] << 8 | t[E + 14] << 16 | t[E + 15] << 24, d = a(d = s(d, b), 15), h = a(h ^= d = s(d, m), 19), h = s(h += f, 5) + 1444728091, y = a(y = s(y, m), 16), f = a(f ^= y = s(y, _), 17), f = s(f += l, 5) + 197830471, g = a(g = s(g, _), 17), l = a(l ^= g = s(g, v), 15), l = s(l += p, 5) + 2530024501, w = a(w = s(w, v), 18), p = a(p ^= w = s(w, b), 13), p = s(p += h, 5) + 850148119; switch (d = 0, y = 0, g = 0, w = 0, r) {
                                case 15:
                                    w ^= t[E + 14] << 16;
                                case 14:
                                    w ^= t[E + 13] << 8;
                                case 13:
                                    w = s(w ^= t[E + 12], v), p ^= w = s(w = a(w, 18), b);
                                case 12:
                                    g ^= t[E + 11] << 24;
                                case 11:
                                    g ^= t[E + 10] << 16;
                                case 10:
                                    g ^= t[E + 9] << 8;
                                case 9:
                                    g = s(g ^= t[E + 8], _), l ^= g = s(g = a(g, 17), v);
                                case 8:
                                    y ^= t[E + 7] << 24;
                                case 7:
                                    y ^= t[E + 6] << 16;
                                case 6:
                                    y ^= t[E + 5] << 8;
                                case 5:
                                    y = s(y ^= t[E + 4], m), f ^= y = s(y = a(y, 16), _);
                                case 4:
                                    d ^= t[E + 3] << 24;
                                case 3:
                                    d ^= t[E + 2] << 16;
                                case 2:
                                    d ^= t[E + 1] << 8;
                                case 1:
                                    d = s(d ^= t[E], b), h ^= d = s(d = a(d, 15), m) } return h ^= t.length, h += f ^= t.length, h += l ^= t.length, f += h += p ^= t.length, l += h, p += h, h = c(h), h += f = c(f), h += l = c(l), f += h += p = c(p), l += h, p += h, ("00000000" + (h >>> 0).toString(16)).slice(-8) + ("00000000" + (f >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8) + ("00000000" + (p >>> 0).toString(16)).slice(-8) }, o.x64.hash128 = function(t, e) { if (o.inputValidation && !i(t)) return n;
                            e = e || 0; for (var r = t.length % 16, s = t.length - r, a = [0, e], c = [0, e], y = [0, 0], g = [0, 0], w = [2277735313, 289559509], b = [1291169091, 658871167], m = 0; m < s; m += 16) y = [t[m + 4] | t[m + 5] << 8 | t[m + 6] << 16 | t[m + 7] << 24, t[m] | t[m + 1] << 8 | t[m + 2] << 16 | t[m + 3] << 24], g = [t[m + 12] | t[m + 13] << 8 | t[m + 14] << 16 | t[m + 15] << 24, t[m + 8] | t[m + 9] << 8 | t[m + 10] << 16 | t[m + 11] << 24], y = f(y = h(y, w), 31), a = u(a = f(a = p(a, y = h(y, b)), 27), c), a = u(h(a, [0, 5]), [0, 1390208809]), g = f(g = h(g, b), 33), c = u(c = f(c = p(c, g = h(g, w)), 31), a), c = u(h(c, [0, 5]), [0, 944331445]); switch (y = [0, 0], g = [0, 0], r) {
                                case 15:
                                    g = p(g, l([0, t[m + 14]], 48));
                                case 14:
                                    g = p(g, l([0, t[m + 13]], 40));
                                case 13:
                                    g = p(g, l([0, t[m + 12]], 32));
                                case 12:
                                    g = p(g, l([0, t[m + 11]], 24));
                                case 11:
                                    g = p(g, l([0, t[m + 10]], 16));
                                case 10:
                                    g = p(g, l([0, t[m + 9]], 8));
                                case 9:
                                    g = h(g = p(g, [0, t[m + 8]]), b), c = p(c, g = h(g = f(g, 33), w));
                                case 8:
                                    y = p(y, l([0, t[m + 7]], 56));
                                case 7:
                                    y = p(y, l([0, t[m + 6]], 48));
                                case 6:
                                    y = p(y, l([0, t[m + 5]], 40));
                                case 5:
                                    y = p(y, l([0, t[m + 4]], 32));
                                case 4:
                                    y = p(y, l([0, t[m + 3]], 24));
                                case 3:
                                    y = p(y, l([0, t[m + 2]], 16));
                                case 2:
                                    y = p(y, l([0, t[m + 1]], 8));
                                case 1:
                                    y = h(y = p(y, [0, t[m]]), w), a = p(a, y = h(y = f(y, 31), b)) } return a = u(a = p(a, [0, t.length]), c = p(c, [0, t.length])), c = u(c, a), a = u(a = d(a), c = d(c)), c = u(c, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8) }, t.exports && (e = t.exports = o), e.murmurHash3 = o }() }, 2693: (t, e, r) => { "use strict"; const n = r(9353),
                        o = ["Failed to fetch", "NetworkError when attempting to fetch resource.", "The Internet connection appears to be offline.", "Network request failed"];
                    class i extends Error { constructor(t) { super(), t instanceof Error ? (this.originalError = t, ({ message: t } = t)) : (this.originalError = new Error(t), this.originalError.stack = this.stack), this.name = "AbortError", this.message = t } } const s = (t, e) => new Promise(((r, s) => { e = { onFailedAttempt: () => {}, retries: 10, ...e }; const a = n.operation(e);
                        a.attempt((async n => { try { r(await t(n)) } catch (t) { if (!(t instanceof Error)) return void s(new TypeError(`Non-error was thrown: "${t}". You should only throw errors.`)); if (t instanceof i) a.stop(), s(t.originalError);
                                else if (t instanceof TypeError && (c = t.message, !o.includes(c))) a.stop(), s(t);
                                else {
                                    ((t, e, r) => { const n = r.retries - (e - 1);
                                        t.attemptNumber = e, t.retriesLeft = n })(t, n, e); try { await e.onFailedAttempt(t) } catch (t) { return void s(t) }
                                    a.retry(t) || s(a.mainError()) } } var c })) }));
                    t.exports = s, t.exports.default = s, t.exports.AbortError = i }, 8490: (t, e, r) => { "use strict"; var n = r(7673),
                        o = r(8575),
                        i = r(7529);

                    function s(t) { return t && t.rel }

                    function a(t, e) { return e.rel.split(/\s+/).forEach((function(r) { t[r] = i(e, { rel: r }) })), t }

                    function c(t, e) { var r = e.match(/\s*(.+)\s*=\s*"?([^"]+)"?/); return r && (t[r[1]] = r[2]), t }

                    function u(t) { try { var e = t.match(/<?([^>]*)>(.*)/),
                                r = e[1],
                                s = e[2].split(";"),
                                a = o.parse(r),
                                u = n.parse(a.query);
                            s.shift(); var h = s.reduce(c, {}); return (h = i(u, h)).url = r, h } catch (t) { return null } }
                    t.exports = function(t) { return t ? t.split(/,\s*</).map(u).filter(s).reduce(a, {}) : null } }, 2100: (t, e, r) => { "use strict";
                    t.exports = r(9482) }, 9482: (t, e, r) => { "use strict"; var n = e;

                    function o() { n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader) }
                    n.build = "minimal", n.Writer = r(1173), n.BufferWriter = r(3155), n.Reader = r(1408), n.BufferReader = r(593), n.util = r(9693), n.rpc = r(5994), n.roots = r(5054), n.configure = o, o() }, 1408: (t, e, r) => { "use strict";
                    t.exports = c; var n, o = r(9693),
                        i = o.LongBits,
                        s = o.utf8;

                    function a(t, e) { return RangeError("index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len) }

                    function c(t) { this.buf = t, this.pos = 0, this.len = t.length } var u, h = "undefined" != typeof Uint8Array ? function(t) { if (t instanceof Uint8Array || Array.isArray(t)) return new c(t); throw Error("illegal buffer") } : function(t) { if (Array.isArray(t)) return new c(t); throw Error("illegal buffer") },
                        f = function() { return o.Buffer ? function(t) { return (c.create = function(t) { return o.Buffer.isBuffer(t) ? new n(t) : h(t) })(t) } : h };

                    function l() { var t = new i(0, 0),
                            e = 0; if (!(this.len - this.pos > 4)) { for (; e < 3; ++e) { if (this.pos >= this.len) throw a(this); if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t } return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0, t } for (; e < 4; ++e)
                            if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t;
                        if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t; if (e = 0, this.len - this.pos > 4) { for (; e < 5; ++e)
                                if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t } else
                            for (; e < 5; ++e) { if (this.pos >= this.len) throw a(this); if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t }
                        throw Error("invalid varint encoding") }

                    function p(t, e) { return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0 }

                    function d() { if (this.pos + 8 > this.len) throw a(this, 8); return new i(p(this.buf, this.pos += 4), p(this.buf, this.pos += 4)) }
                    c.create = f(), c.prototype._slice = o.Array.prototype.subarray || o.Array.prototype.slice, c.prototype.uint32 = (u = 4294967295, function() { if (u = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return u; if (u = (u | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return u; if (u = (u | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return u; if (u = (u | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return u; if (u = (u | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return u; if ((this.pos += 5) > this.len) throw this.pos = this.len, a(this, 10); return u }), c.prototype.int32 = function() { return 0 | this.uint32() }, c.prototype.sint32 = function() { var t = this.uint32(); return t >>> 1 ^ -(1 & t) | 0 }, c.prototype.bool = function() { return 0 !== this.uint32() }, c.prototype.fixed32 = function() { if (this.pos + 4 > this.len) throw a(this, 4); return p(this.buf, this.pos += 4) }, c.prototype.sfixed32 = function() { if (this.pos + 4 > this.len) throw a(this, 4); return 0 | p(this.buf, this.pos += 4) }, c.prototype.float = function() { if (this.pos + 4 > this.len) throw a(this, 4); var t = o.float.readFloatLE(this.buf, this.pos); return this.pos += 4, t }, c.prototype.double = function() { if (this.pos + 8 > this.len) throw a(this, 4); var t = o.float.readDoubleLE(this.buf, this.pos); return this.pos += 8, t }, c.prototype.bytes = function() { var t = this.uint32(),
                            e = this.pos,
                            r = this.pos + t; if (r > this.len) throw a(this, t); return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(e, r) : e === r ? new this.buf.constructor(0) : this._slice.call(this.buf, e, r) }, c.prototype.string = function() { var t = this.bytes(); return s.read(t, 0, t.length) }, c.prototype.skip = function(t) { if ("number" == typeof t) { if (this.pos + t > this.len) throw a(this, t);
                            this.pos += t } else
                            do { if (this.pos >= this.len) throw a(this) } while (128 & this.buf[this.pos++]); return this }, c.prototype.skipType = function(t) { switch (t) {
                            case 0:
                                this.skip(); break;
                            case 1:
                                this.skip(8); break;
                            case 2:
                                this.skip(this.uint32()); break;
                            case 3:
                                for (; 4 != (t = 7 & this.uint32());) this.skipType(t); break;
                            case 5:
                                this.skip(4); break;
                            default:
                                throw Error("invalid wire type " + t + " at offset " + this.pos) } return this }, c._configure = function(t) { n = t, c.create = f(), n._configure(); var e = o.Long ? "toLong" : "toNumber";
                        o.merge(c.prototype, { int64: function() { return l.call(this)[e](!1) }, uint64: function() { return l.call(this)[e](!0) }, sint64: function() { return l.call(this).zzDecode()[e](!1) }, fixed64: function() { return d.call(this)[e](!0) }, sfixed64: function() { return d.call(this)[e](!1) } }) } }, 593: (t, e, r) => { "use strict";
                    t.exports = i; var n = r(1408);
                    (i.prototype = Object.create(n.prototype)).constructor = i; var o = r(9693);

                    function i(t) { n.call(this, t) }
                    i._configure = function() { o.Buffer && (i.prototype._slice = o.Buffer.prototype.slice) }, i.prototype.string = function() { var t = this.uint32(); return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len)) }, i._configure() }, 5054: t => { "use strict";
                    t.exports = {} }, 5994: (t, e, r) => { "use strict";
                    e.Service = r(7948) }, 7948: (t, e, r) => { "use strict";
                    t.exports = o; var n = r(9693);

                    function o(t, e, r) { if ("function" != typeof t) throw TypeError("rpcImpl must be a function");
                        n.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = Boolean(e), this.responseDelimited = Boolean(r) }(o.prototype = Object.create(n.EventEmitter.prototype)).constructor = o, o.prototype.rpcCall = function t(e, r, o, i, s) { if (!i) throw TypeError("request must be specified"); var a = this; if (!s) return n.asPromise(t, a, e, r, o, i); if (a.rpcImpl) try { return a.rpcImpl(e, r[a.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), (function(t, r) { if (t) return a.emit("error", t, e), s(t); if (null !== r) { if (!(r instanceof o)) try { r = o[a.responseDelimited ? "decodeDelimited" : "decode"](r) } catch (t) { return a.emit("error", t, e), s(t) }
                                    return a.emit("data", r, e), s(null, r) }
                                a.end(!0) })) } catch (t) { return a.emit("error", t, e), void setTimeout((function() { s(t) }), 0) } else setTimeout((function() { s(Error("already ended")) }), 0) }, o.prototype.end = function(t) { return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this } }, 1945: (t, e, r) => { "use strict";
                    t.exports = o; var n = r(9693);

                    function o(t, e) { this.lo = t >>> 0, this.hi = e >>> 0 } var i = o.zero = new o(0, 0);
                    i.toNumber = function() { return 0 }, i.zzEncode = i.zzDecode = function() { return this }, i.length = function() { return 1 }; var s = o.zeroHash = "\0\0\0\0\0\0\0\0";
                    o.fromNumber = function(t) { if (0 === t) return i; var e = t < 0;
                        e && (t = -t); var r = t >>> 0,
                            n = (t - r) / 4294967296 >>> 0; return e && (n = ~n >>> 0, r = ~r >>> 0, ++r > 4294967295 && (r = 0, ++n > 4294967295 && (n = 0))), new o(r, n) }, o.from = function(t) { if ("number" == typeof t) return o.fromNumber(t); if (n.isString(t)) { if (!n.Long) return o.fromNumber(parseInt(t, 10));
                            t = n.Long.fromString(t) } return t.low || t.high ? new o(t.low >>> 0, t.high >>> 0) : i }, o.prototype.toNumber = function(t) { if (!t && this.hi >>> 31) { var e = 1 + ~this.lo >>> 0,
                                r = ~this.hi >>> 0; return e || (r = r + 1 >>> 0), -(e + 4294967296 * r) } return this.lo + 4294967296 * this.hi }, o.prototype.toLong = function(t) { return n.Long ? new n.Long(0 | this.lo, 0 | this.hi, Boolean(t)) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(t) } }; var a = String.prototype.charCodeAt;
                    o.fromHash = function(t) { return t === s ? i : new o((a.call(t, 0) | a.call(t, 1) << 8 | a.call(t, 2) << 16 | a.call(t, 3) << 24) >>> 0, (a.call(t, 4) | a.call(t, 5) << 8 | a.call(t, 6) << 16 | a.call(t, 7) << 24) >>> 0) }, o.prototype.toHash = function() { return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24) }, o.prototype.zzEncode = function() { var t = this.hi >> 31; return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this }, o.prototype.zzDecode = function() { var t = -(1 & this.lo); return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this }, o.prototype.length = function() { var t = this.lo,
                            e = (this.lo >>> 28 | this.hi << 4) >>> 0,
                            r = this.hi >>> 24; return 0 === r ? 0 === e ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : e < 16384 ? e < 128 ? 5 : 6 : e < 2097152 ? 7 : 8 : r < 128 ? 9 : 10 } }, 9693: function(t, e, r) { "use strict"; var n = e;

                    function o(t, e, r) { for (var n = Object.keys(e), o = 0; o < n.length; ++o) void 0 !== t[n[o]] && r || (t[n[o]] = e[n[o]]); return t }

                    function i(t) {
                        function e(t, r) { if (!(this instanceof e)) return new e(t, r);
                            Object.defineProperty(this, "message", { get: function() { return t } }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", { value: (new Error).stack || "" }), r && o(this, r) } return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", { get: function() { return t } }), e.prototype.toString = function() { return this.name + ": " + this.message }, e }
                    n.asPromise = r(4537), n.base64 = r(7419), n.EventEmitter = r(9211), n.float = r(945), n.inquire = r(7199), n.utf8 = r(4997), n.pool = r(6662), n.LongBits = r(1945), n.isNode = Boolean(void 0 !== r.g && r.g && r.g.process && r.g.process.versions && r.g.process.versions.node), n.global = n.isNode && r.g || "undefined" != typeof window && window || "undefined" != typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isInteger = Number.isInteger || function(t) { return "number" == typeof t && isFinite(t) && Math.floor(t) === t }, n.isString = function(t) { return "string" == typeof t || t instanceof String }, n.isObject = function(t) { return t && "object" == typeof t }, n.isset = n.isSet = function(t, e) { var r = t[e]; return !(null == r || !t.hasOwnProperty(e)) && ("object" != typeof r || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0) }, n.Buffer = function() { try { var t = n.inquire("buffer").Buffer; return t.prototype.utf8Write ? t : null } catch (t) { return null } }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(t) { return "number" == typeof t ? n.Buffer ? n._Buffer_allocUnsafe(t) : new n.Array(t) : n.Buffer ? n._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t) }, n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(t) { return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash }, n.longFromHash = function(t, e) { var r = n.LongBits.fromHash(t); return n.Long ? n.Long.fromBits(r.lo, r.hi, e) : r.toNumber(Boolean(e)) }, n.merge = o, n.lcFirst = function(t) { return t.charAt(0).toLowerCase() + t.substring(1) }, n.newError = i, n.ProtocolError = i("ProtocolError"), n.oneOfGetter = function(t) { for (var e = {}, r = 0; r < t.length; ++r) e[t[r]] = 1; return function() { for (var t = Object.keys(this), r = t.length - 1; r > -1; --r)
                                if (1 === e[t[r]] && void 0 !== this[t[r]] && null !== this[t[r]]) return t[r] } }, n.oneOfSetter = function(t) { return function(e) { for (var r = 0; r < t.length; ++r) t[r] !== e && delete this[t[r]] } }, n.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 }, n._configure = function() { var t = n.Buffer;
                        t ? (n._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, r) { return new t(e, r) }, n._Buffer_allocUnsafe = t.allocUnsafe || function(e) { return new t(e) }) : n._Buffer_from = n._Buffer_allocUnsafe = null } }, 1173: (t, e, r) => { "use strict";
                    t.exports = f; var n, o = r(9693),
                        i = o.LongBits,
                        s = o.base64,
                        a = o.utf8;

                    function c(t, e, r) { this.fn = t, this.len = e, this.next = void 0, this.val = r }

                    function u() {}

                    function h(t) { this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states }

                    function f() { this.len = 0, this.head = new c(u, 0, 0), this.tail = this.head, this.states = null } var l = function() { return o.Buffer ? function() { return (f.create = function() { return new n })() } : function() { return new f } };

                    function p(t, e, r) { e[r] = 255 & t }

                    function d(t, e) { this.len = t, this.next = void 0, this.val = e }

                    function y(t, e, r) { for (; t.hi;) e[r++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7; for (; t.lo > 127;) e[r++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
                        e[r++] = t.lo }

                    function g(t, e, r) { e[r] = 255 & t, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 }
                    f.create = l(), f.alloc = function(t) { return new o.Array(t) }, o.Array !== Array && (f.alloc = o.pool(f.alloc, o.Array.prototype.subarray)), f.prototype._push = function(t, e, r) { return this.tail = this.tail.next = new c(t, e, r), this.len += e, this }, d.prototype = Object.create(c.prototype), d.prototype.fn = function(t, e, r) { for (; t > 127;) e[r++] = 127 & t | 128, t >>>= 7;
                        e[r] = t }, f.prototype.uint32 = function(t) { return this.len += (this.tail = this.tail.next = new d((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this }, f.prototype.int32 = function(t) { return t < 0 ? this._push(y, 10, i.fromNumber(t)) : this.uint32(t) }, f.prototype.sint32 = function(t) { return this.uint32((t << 1 ^ t >> 31) >>> 0) }, f.prototype.uint64 = function(t) { var e = i.from(t); return this._push(y, e.length(), e) }, f.prototype.int64 = f.prototype.uint64, f.prototype.sint64 = function(t) { var e = i.from(t).zzEncode(); return this._push(y, e.length(), e) }, f.prototype.bool = function(t) { return this._push(p, 1, t ? 1 : 0) }, f.prototype.fixed32 = function(t) { return this._push(g, 4, t >>> 0) }, f.prototype.sfixed32 = f.prototype.fixed32, f.prototype.fixed64 = function(t) { var e = i.from(t); return this._push(g, 4, e.lo)._push(g, 4, e.hi) }, f.prototype.sfixed64 = f.prototype.fixed64, f.prototype.float = function(t) { return this._push(o.float.writeFloatLE, 4, t) }, f.prototype.double = function(t) { return this._push(o.float.writeDoubleLE, 8, t) }; var w = o.Array.prototype.set ? function(t, e, r) { e.set(t, r) } : function(t, e, r) { for (var n = 0; n < t.length; ++n) e[r + n] = t[n] };
                    f.prototype.bytes = function(t) { var e = t.length >>> 0; if (!e) return this._push(p, 1, 0); if (o.isString(t)) { var r = f.alloc(e = s.length(t));
                            s.decode(t, r, 0), t = r } return this.uint32(e)._push(w, e, t) }, f.prototype.string = function(t) { var e = a.length(t); return e ? this.uint32(e)._push(a.write, e, t) : this._push(p, 1, 0) }, f.prototype.fork = function() { return this.states = new h(this), this.head = this.tail = new c(u, 0, 0), this.len = 0, this }, f.prototype.reset = function() { return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new c(u, 0, 0), this.len = 0), this }, f.prototype.ldelim = function() { var t = this.head,
                            e = this.tail,
                            r = this.len; return this.reset().uint32(r), r && (this.tail.next = t.next, this.tail = e, this.len += r), this }, f.prototype.finish = function() { for (var t = this.head.next, e = this.constructor.alloc(this.len), r = 0; t;) t.fn(t.val, e, r), r += t.len, t = t.next; return e }, f._configure = function(t) { n = t, f.create = l(), n._configure() } }, 3155: (t, e, r) => { "use strict";
                    t.exports = i; var n = r(1173);
                    (i.prototype = Object.create(n.prototype)).constructor = i; var o = r(9693);

                    function i() { n.call(this) }

                    function s(t, e, r) { t.length < 40 ? o.utf8.write(t, e, r) : e.utf8Write ? e.utf8Write(t, r) : e.write(t, r) }
                    i._configure = function() { i.alloc = o._Buffer_allocUnsafe, i.writeBytesBuffer = o.Buffer && o.Buffer.prototype instanceof Uint8Array && "set" === o.Buffer.prototype.set.name ? function(t, e, r) { e.set(t, r) } : function(t, e, r) { if (t.copy) t.copy(e, r, 0, t.length);
                            else
                                for (var n = 0; n < t.length;) e[r++] = t[n++] } }, i.prototype.bytes = function(t) { o.isString(t) && (t = o._Buffer_from(t, "base64")); var e = t.length >>> 0; return this.uint32(e), e && this._push(i.writeBytesBuffer, e, t), this }, i.prototype.string = function(t) { var e = o.Buffer.byteLength(t); return this.uint32(e), e && this._push(s, e, t), this }, i._configure() }, 2587: t => { "use strict";

                    function e(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }
                    t.exports = function(t, r, n, o) { r = r || "&", n = n || "="; var i = {}; if ("string" != typeof t || 0 === t.length) return i; var s = /\+/g;
                        t = t.split(r); var a = 1e3;
                        o && "number" == typeof o.maxKeys && (a = o.maxKeys); var c = t.length;
                        a > 0 && c > a && (c = a); for (var u = 0; u < c; ++u) { var h, f, l, p, d = t[u].replace(s, "%20"),
                                y = d.indexOf(n);
                            y >= 0 ? (h = d.substr(0, y), f = d.substr(y + 1)) : (h = d, f = ""), l = decodeURIComponent(h), p = decodeURIComponent(f), e(i, l) ? Array.isArray(i[l]) ? i[l].push(p) : i[l] = [i[l], p] : i[l] = p } return i } }, 2361: t => { "use strict"; var e = function(t) { switch (typeof t) {
                            case "string":
                                return t;
                            case "boolean":
                                return t ? "true" : "false";
                            case "number":
                                return isFinite(t) ? t : "";
                            default:
                                return "" } };
                    t.exports = function(t, r, n, o) { return r = r || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? Object.keys(t).map((function(o) { var i = encodeURIComponent(e(o)) + n; return Array.isArray(t[o]) ? t[o].map((function(t) { return i + encodeURIComponent(e(t)) })).join(r) : i + encodeURIComponent(e(t[o])) })).join(r) : o ? encodeURIComponent(e(o)) + n + encodeURIComponent(e(t)) : "" } }, 7673: (t, e, r) => { "use strict";
                    e.decode = e.parse = r(2587), e.encode = e.stringify = r(2361) }, 3286: (t, e, r) => { const { instantiate: n } = r(9824);

                    function o(t = {}) { if (!o.supported) return null; var e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 78, 14, 96, 2, 127, 126, 0, 96, 1, 127, 1, 126, 96, 2, 127, 127, 0, 96, 1, 127, 1, 127, 96, 1, 127, 0, 96, 2, 127, 127, 1, 127, 96, 3, 127, 127, 127, 1, 127, 96, 0, 0, 96, 3, 127, 127, 127, 0, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 0, 96, 5, 127, 127, 127, 127, 127, 1, 127, 96, 1, 126, 1, 127, 96, 2, 126, 126, 1, 126, 2, 13, 1, 3, 101, 110, 118, 5, 97, 98, 111, 114, 116, 0, 10, 3, 54, 53, 2, 2, 8, 9, 3, 5, 2, 8, 6, 5, 3, 4, 2, 6, 9, 12, 13, 2, 5, 11, 3, 2, 3, 2, 3, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 6, 7, 7, 4, 4, 5, 3, 1, 0, 1, 6, 47, 9, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 0, 65, 3, 11, 127, 0, 65, 4, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 0, 65, 240, 2, 11, 127, 0, 65, 6, 11, 7, 240, 5, 41, 6, 109, 101, 109, 111, 114, 121, 2, 0, 7, 95, 95, 97, 108, 108, 111, 99, 0, 10, 8, 95, 95, 114, 101, 116, 97, 105, 110, 0, 11, 9, 95, 95, 114, 101, 108, 101, 97, 115, 101, 0, 12, 9, 95, 95, 99, 111, 108, 108, 101, 99, 116, 0, 51, 11, 95, 95, 114, 116, 116, 105, 95, 98, 97, 115, 101, 3, 7, 13, 73, 110, 116, 51, 50, 65, 114, 114, 97, 121, 95, 73, 68, 3, 2, 13, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 95, 73, 68, 3, 3, 6, 100, 101, 103, 114, 101, 101, 0, 16, 3, 109, 111, 100, 0, 17, 5, 82, 97, 98, 105, 110, 3, 8, 16, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 119, 105, 110, 100, 111, 119, 0, 21, 16, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 119, 105, 110, 100, 111, 119, 0, 22, 21, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 119, 105, 110, 100, 111, 119, 95, 115, 105, 122, 101, 0, 23, 21, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 119, 105, 110, 100, 111, 119, 95, 115, 105, 122, 101, 0, 24, 14, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 119, 112, 111, 115, 0, 25, 14, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 119, 112, 111, 115, 0, 26, 15, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 111, 117, 110, 116, 0, 27, 15, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 111, 117, 110, 116, 0, 28, 13, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 112, 111, 115, 0, 29, 13, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 112, 111, 115, 0, 30, 15, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 115, 116, 97, 114, 116, 0, 31, 15, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 115, 116, 97, 114, 116, 0, 32, 16, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 100, 105, 103, 101, 115, 116, 0, 33, 16, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 100, 105, 103, 101, 115, 116, 0, 34, 21, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 104, 117, 110, 107, 95, 115, 116, 97, 114, 116, 0, 35, 21, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 104, 117, 110, 107, 95, 115, 116, 97, 114, 116, 0, 36, 22, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 104, 117, 110, 107, 95, 108, 101, 110, 103, 116, 104, 0, 37, 22, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 104, 117, 110, 107, 95, 108, 101, 110, 103, 116, 104, 0, 38, 31, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 104, 117, 110, 107, 95, 99, 117, 116, 95, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 0, 39, 31, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 104, 117, 110, 107, 95, 99, 117, 116, 95, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 0, 40, 20, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 112, 111, 108, 121, 110, 111, 109, 105, 97, 108, 0, 41, 20, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 112, 111, 108, 121, 110, 111, 109, 105, 97, 108, 0, 42, 17, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 109, 105, 110, 115, 105, 122, 101, 0, 43, 17, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 109, 105, 110, 115, 105, 122, 101, 0, 44, 17, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 109, 97, 120, 115, 105, 122, 101, 0, 45, 17, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 109, 97, 120, 115, 105, 122, 101, 0, 46, 14, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 109, 97, 115, 107, 0, 47, 14, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 109, 97, 115, 107, 0, 48, 17, 82, 97, 98, 105, 110, 35, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 0, 20, 17, 82, 97, 98, 105, 110, 35, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 0, 49, 8, 1, 50, 10, 165, 31, 53, 199, 1, 1, 4, 127, 32, 1, 40, 2, 0, 65, 124, 113, 34, 2, 65, 128, 2, 73, 4, 127, 32, 2, 65, 4, 118, 33, 4, 65, 0, 5, 32, 2, 65, 31, 32, 2, 103, 107, 34, 3, 65, 4, 107, 118, 65, 16, 115, 33, 4, 32, 3, 65, 7, 107, 11, 33, 3, 32, 1, 40, 2, 20, 33, 2, 32, 1, 40, 2, 16, 34, 5, 4, 64, 32, 5, 32, 2, 54, 2, 20, 11, 32, 2, 4, 64, 32, 2, 32, 5, 54, 2, 16, 11, 32, 1, 32, 0, 32, 4, 32, 3, 65, 4, 116, 106, 65, 2, 116, 106, 40, 2, 96, 70, 4, 64, 32, 0, 32, 4, 32, 3, 65, 4, 116, 106, 65, 2, 116, 106, 32, 2, 54, 2, 96, 32, 2, 69, 4, 64, 32, 0, 32, 3, 65, 2, 116, 106, 32, 0, 32, 3, 65, 2, 116, 106, 40, 2, 4, 65, 1, 32, 4, 116, 65, 127, 115, 113, 34, 1, 54, 2, 4, 32, 1, 69, 4, 64, 32, 0, 32, 0, 40, 2, 0, 65, 1, 32, 3, 116, 65, 127, 115, 113, 54, 2, 0, 11, 11, 11, 11, 226, 2, 1, 6, 127, 32, 1, 40, 2, 0, 33, 3, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 34, 4, 40, 2, 0, 34, 5, 65, 1, 113, 4, 64, 32, 3, 65, 124, 113, 65, 16, 106, 32, 5, 65, 124, 113, 106, 34, 2, 65, 240, 255, 255, 255, 3, 73, 4, 64, 32, 0, 32, 4, 16, 1, 32, 1, 32, 2, 32, 3, 65, 3, 113, 114, 34, 3, 54, 2, 0, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 34, 4, 40, 2, 0, 33, 5, 11, 11, 32, 3, 65, 2, 113, 4, 64, 32, 1, 65, 4, 107, 40, 2, 0, 34, 2, 40, 2, 0, 34, 6, 65, 124, 113, 65, 16, 106, 32, 3, 65, 124, 113, 106, 34, 7, 65, 240, 255, 255, 255, 3, 73, 4, 64, 32, 0, 32, 2, 16, 1, 32, 2, 32, 7, 32, 6, 65, 3, 113, 114, 34, 3, 54, 2, 0, 32, 2, 33, 1, 11, 11, 32, 4, 32, 5, 65, 2, 114, 54, 2, 0, 32, 4, 65, 4, 107, 32, 1, 54, 2, 0, 32, 0, 32, 3, 65, 124, 113, 34, 2, 65, 128, 2, 73, 4, 127, 32, 2, 65, 4, 118, 33, 4, 65, 0, 5, 32, 2, 65, 31, 32, 2, 103, 107, 34, 2, 65, 4, 107, 118, 65, 16, 115, 33, 4, 32, 2, 65, 7, 107, 11, 34, 3, 65, 4, 116, 32, 4, 106, 65, 2, 116, 106, 40, 2, 96, 33, 2, 32, 1, 65, 0, 54, 2, 16, 32, 1, 32, 2, 54, 2, 20, 32, 2, 4, 64, 32, 2, 32, 1, 54, 2, 16, 11, 32, 0, 32, 4, 32, 3, 65, 4, 116, 106, 65, 2, 116, 106, 32, 1, 54, 2, 96, 32, 0, 32, 0, 40, 2, 0, 65, 1, 32, 3, 116, 114, 54, 2, 0, 32, 0, 32, 3, 65, 2, 116, 106, 32, 0, 32, 3, 65, 2, 116, 106, 40, 2, 4, 65, 1, 32, 4, 116, 114, 54, 2, 4, 11, 119, 1, 1, 127, 32, 2, 2, 127, 32, 0, 40, 2, 160, 12, 34, 2, 4, 64, 32, 2, 32, 1, 65, 16, 107, 70, 4, 64, 32, 2, 40, 2, 0, 33, 3, 32, 1, 65, 16, 107, 33, 1, 11, 11, 32, 1, 11, 107, 34, 2, 65, 48, 73, 4, 64, 15, 11, 32, 1, 32, 3, 65, 2, 113, 32, 2, 65, 32, 107, 65, 1, 114, 114, 54, 2, 0, 32, 1, 65, 0, 54, 2, 16, 32, 1, 65, 0, 54, 2, 20, 32, 1, 32, 2, 106, 65, 16, 107, 34, 2, 65, 2, 54, 2, 0, 32, 0, 32, 2, 54, 2, 160, 12, 32, 0, 32, 1, 16, 2, 11, 155, 1, 1, 3, 127, 35, 0, 34, 0, 69, 4, 64, 65, 1, 63, 0, 34, 0, 74, 4, 127, 65, 1, 32, 0, 107, 64, 0, 65, 0, 72, 5, 65, 0, 11, 4, 64, 0, 11, 65, 176, 3, 34, 0, 65, 0, 54, 2, 0, 65, 208, 15, 65, 0, 54, 2, 0, 3, 64, 32, 1, 65, 23, 73, 4, 64, 32, 1, 65, 2, 116, 65, 176, 3, 106, 65, 0, 54, 2, 4, 65, 0, 33, 2, 3, 64, 32, 2, 65, 16, 73, 4, 64, 32, 1, 65, 4, 116, 32, 2, 106, 65, 2, 116, 65, 176, 3, 106, 65, 0, 54, 2, 96, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 32, 1, 65, 1, 106, 33, 1, 12, 1, 11, 11, 65, 176, 3, 65, 224, 15, 63, 0, 65, 16, 116, 16, 3, 65, 176, 3, 36, 0, 11, 32, 0, 11, 45, 0, 32, 0, 65, 240, 255, 255, 255, 3, 79, 4, 64, 65, 32, 65, 224, 0, 65, 201, 3, 65, 29, 16, 0, 0, 11, 32, 0, 65, 15, 106, 65, 112, 113, 34, 0, 65, 16, 32, 0, 65, 16, 75, 27, 11, 169, 1, 1, 1, 127, 32, 0, 32, 1, 65, 128, 2, 73, 4, 127, 32, 1, 65, 4, 118, 33, 1, 65, 0, 5, 32, 1, 65, 248, 255, 255, 255, 1, 73, 4, 64, 32, 1, 65, 1, 65, 27, 32, 1, 103, 107, 116, 106, 65, 1, 107, 33, 1, 11, 32, 1, 65, 31, 32, 1, 103, 107, 34, 2, 65, 4, 107, 118, 65, 16, 115, 33, 1, 32, 2, 65, 7, 107, 11, 34, 2, 65, 2, 116, 106, 40, 2, 4, 65, 127, 32, 1, 116, 113, 34, 1, 4, 127, 32, 0, 32, 1, 104, 32, 2, 65, 4, 116, 106, 65, 2, 116, 106, 40, 2, 96, 5, 32, 0, 40, 2, 0, 65, 127, 32, 2, 65, 1, 106, 116, 113, 34, 1, 4, 127, 32, 0, 32, 0, 32, 1, 104, 34, 0, 65, 2, 116, 106, 40, 2, 4, 104, 32, 0, 65, 4, 116, 106, 65, 2, 116, 106, 40, 2, 96, 5, 65, 0, 11, 11, 11, 111, 1, 1, 127, 63, 0, 34, 2, 32, 1, 65, 248, 255, 255, 255, 1, 73, 4, 127, 32, 1, 65, 1, 65, 27, 32, 1, 103, 107, 116, 65, 1, 107, 106, 5, 32, 1, 11, 65, 16, 32, 0, 40, 2, 160, 12, 32, 2, 65, 16, 116, 65, 16, 107, 71, 116, 106, 65, 255, 255, 3, 106, 65, 128, 128, 124, 113, 65, 16, 118, 34, 1, 32, 2, 32, 1, 74, 27, 64, 0, 65, 0, 72, 4, 64, 32, 1, 64, 0, 65, 0, 72, 4, 64, 0, 11, 11, 32, 0, 32, 2, 65, 16, 116, 63, 0, 65, 16, 116, 16, 3, 11, 113, 1, 2, 127, 32, 1, 40, 2, 0, 34, 3, 65, 124, 113, 32, 2, 107, 34, 4, 65, 32, 79, 4, 64, 32, 1, 32, 2, 32, 3, 65, 2, 113, 114, 54, 2, 0, 32, 2, 32, 1, 65, 16, 106, 106, 34, 1, 32, 4, 65, 16, 107, 65, 1, 114, 54, 2, 0, 32, 0, 32, 1, 16, 2, 5, 32, 1, 32, 3, 65, 126, 113, 54, 2, 0, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 40, 2, 0, 65, 125, 113, 54, 2, 0, 11, 11, 91, 1, 2, 127, 32, 0, 32, 1, 16, 5, 34, 4, 16, 6, 34, 3, 69, 4, 64, 65, 1, 36, 1, 65, 0, 36, 1, 32, 0, 32, 4, 16, 6, 34, 3, 69, 4, 64, 32, 0, 32, 4, 16, 7, 32, 0, 32, 4, 16, 6, 33, 3, 11, 11, 32, 3, 65, 0, 54, 2, 4, 32, 3, 32, 2, 54, 2, 8, 32, 3, 32, 1, 54, 2, 12, 32, 0, 32, 3, 16, 1, 32, 0, 32, 3, 32, 4, 16, 8, 32, 3, 11, 13, 0, 16, 4, 32, 0, 32, 1, 16, 9, 65, 16, 106, 11, 33, 1, 1, 127, 32, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 0, 11, 18, 0, 32, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 16, 52, 11, 11, 140, 3, 1, 1, 127, 2, 64, 32, 1, 69, 13, 0, 32, 0, 65, 0, 58, 0, 0, 32, 0, 32, 1, 106, 65, 1, 107, 65, 0, 58, 0, 0, 32, 1, 65, 2, 77, 13, 0, 32, 0, 65, 1, 106, 65, 0, 58, 0, 0, 32, 0, 65, 2, 106, 65, 0, 58, 0, 0, 32, 0, 32, 1, 106, 34, 2, 65, 2, 107, 65, 0, 58, 0, 0, 32, 2, 65, 3, 107, 65, 0, 58, 0, 0, 32, 1, 65, 6, 77, 13, 0, 32, 0, 65, 3, 106, 65, 0, 58, 0, 0, 32, 0, 32, 1, 106, 65, 4, 107, 65, 0, 58, 0, 0, 32, 1, 65, 8, 77, 13, 0, 32, 1, 65, 0, 32, 0, 107, 65, 3, 113, 34, 1, 107, 33, 2, 32, 0, 32, 1, 106, 34, 0, 65, 0, 54, 2, 0, 32, 0, 32, 2, 65, 124, 113, 34, 1, 106, 65, 4, 107, 65, 0, 54, 2, 0, 32, 1, 65, 8, 77, 13, 0, 32, 0, 65, 4, 106, 65, 0, 54, 2, 0, 32, 0, 65, 8, 106, 65, 0, 54, 2, 0, 32, 0, 32, 1, 106, 34, 2, 65, 12, 107, 65, 0, 54, 2, 0, 32, 2, 65, 8, 107, 65, 0, 54, 2, 0, 32, 1, 65, 24, 77, 13, 0, 32, 0, 65, 12, 106, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 0, 65, 20, 106, 65, 0, 54, 2, 0, 32, 0, 65, 24, 106, 65, 0, 54, 2, 0, 32, 0, 32, 1, 106, 34, 2, 65, 28, 107, 65, 0, 54, 2, 0, 32, 2, 65, 24, 107, 65, 0, 54, 2, 0, 32, 2, 65, 20, 107, 65, 0, 54, 2, 0, 32, 2, 65, 16, 107, 65, 0, 54, 2, 0, 32, 0, 32, 0, 65, 4, 113, 65, 24, 106, 34, 2, 106, 33, 0, 32, 1, 32, 2, 107, 33, 1, 3, 64, 32, 1, 65, 32, 79, 4, 64, 32, 0, 66, 0, 55, 3, 0, 32, 0, 65, 8, 106, 66, 0, 55, 3, 0, 32, 0, 65, 16, 106, 66, 0, 55, 3, 0, 32, 0, 65, 24, 106, 66, 0, 55, 3, 0, 32, 1, 65, 32, 107, 33, 1, 32, 0, 65, 32, 106, 33, 0, 12, 1, 11, 11, 11, 11, 178, 1, 1, 3, 127, 32, 1, 65, 240, 255, 255, 255, 3, 32, 2, 118, 75, 4, 64, 65, 144, 1, 65, 192, 1, 65, 23, 65, 56, 16, 0, 0, 11, 32, 1, 32, 2, 116, 34, 3, 65, 0, 16, 10, 34, 2, 32, 3, 16, 13, 32, 0, 69, 4, 64, 65, 12, 65, 2, 16, 10, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 11, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 0, 54, 2, 4, 32, 0, 65, 0, 54, 2, 8, 32, 2, 34, 1, 32, 0, 40, 2, 0, 34, 4, 71, 4, 64, 32, 1, 65, 172, 3, 75, 4, 64, 32, 1, 65, 16, 107, 34, 5, 32, 5, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 4, 16, 12, 11, 32, 0, 32, 1, 54, 2, 0, 32, 0, 32, 2, 54, 2, 4, 32, 0, 32, 3, 54, 2, 8, 32, 0, 11, 46, 1, 2, 127, 65, 12, 65, 5, 16, 10, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 0, 65, 128, 2, 65, 3, 16, 14, 11, 9, 0, 65, 63, 32, 0, 121, 167, 107, 11, 49, 1, 2, 127, 65, 63, 32, 1, 121, 167, 107, 33, 2, 3, 64, 65, 63, 32, 0, 121, 167, 107, 32, 2, 107, 34, 3, 65, 0, 78, 4, 64, 32, 0, 32, 1, 32, 3, 172, 134, 133, 33, 0, 12, 1, 11, 11, 32, 0, 11, 40, 0, 32, 1, 32, 0, 40, 2, 8, 79, 4, 64, 65, 128, 2, 65, 192, 2, 65, 163, 1, 65, 44, 16, 0, 0, 11, 32, 1, 32, 0, 40, 2, 4, 106, 65, 0, 58, 0, 0, 11, 38, 0, 32, 1, 32, 0, 40, 2, 8, 79, 4, 64, 65, 128, 2, 65, 192, 2, 65, 152, 1, 65, 44, 16, 0, 0, 11, 32, 1, 32, 0, 40, 2, 4, 106, 45, 0, 0, 11, 254, 5, 2, 1, 127, 4, 126, 32, 0, 69, 4, 64, 65, 232, 0, 65, 6, 16, 10, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 5, 32, 5, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 11, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 0, 54, 2, 4, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 0, 55, 3, 24, 32, 0, 66, 0, 55, 3, 32, 32, 0, 66, 0, 55, 3, 40, 32, 0, 66, 0, 55, 3, 48, 32, 0, 66, 0, 55, 3, 56, 32, 0, 66, 0, 55, 3, 64, 32, 0, 66, 0, 55, 3, 72, 32, 0, 66, 0, 55, 3, 80, 32, 0, 66, 0, 55, 3, 88, 32, 0, 66, 0, 55, 3, 96, 32, 0, 32, 2, 173, 55, 3, 80, 32, 0, 32, 3, 173, 55, 3, 88, 65, 12, 65, 4, 16, 10, 34, 2, 65, 172, 3, 75, 4, 64, 32, 2, 65, 16, 107, 34, 3, 32, 3, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 2, 32, 4, 65, 0, 16, 14, 33, 2, 32, 0, 40, 2, 0, 16, 12, 32, 0, 32, 2, 54, 2, 0, 32, 0, 32, 4, 54, 2, 4, 32, 0, 66, 1, 32, 1, 173, 134, 66, 1, 125, 55, 3, 96, 32, 0, 66, 243, 130, 183, 218, 216, 230, 232, 30, 55, 3, 72, 35, 4, 69, 4, 64, 65, 0, 33, 2, 3, 64, 32, 2, 65, 128, 2, 72, 4, 64, 32, 2, 65, 255, 1, 113, 173, 33, 6, 32, 0, 41, 3, 72, 34, 7, 33, 8, 65, 63, 32, 7, 121, 167, 107, 33, 1, 3, 64, 65, 63, 32, 6, 121, 167, 107, 32, 1, 107, 34, 3, 65, 0, 78, 4, 64, 32, 6, 32, 8, 32, 3, 172, 134, 133, 33, 6, 12, 1, 11, 11, 65, 0, 33, 4, 3, 64, 32, 4, 32, 0, 40, 2, 4, 65, 1, 107, 72, 4, 64, 32, 6, 66, 8, 134, 33, 6, 32, 0, 41, 3, 72, 34, 7, 33, 8, 65, 63, 32, 7, 121, 167, 107, 33, 1, 3, 64, 65, 63, 32, 6, 121, 167, 107, 32, 1, 107, 34, 3, 65, 0, 78, 4, 64, 32, 6, 32, 8, 32, 3, 172, 134, 133, 33, 6, 12, 1, 11, 11, 32, 4, 65, 1, 106, 33, 4, 12, 1, 11, 11, 35, 6, 40, 2, 4, 32, 2, 65, 3, 116, 106, 32, 6, 55, 3, 0, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 65, 63, 32, 0, 41, 3, 72, 121, 167, 107, 172, 33, 7, 65, 0, 33, 2, 3, 64, 32, 2, 65, 128, 2, 72, 4, 64, 35, 5, 33, 1, 32, 2, 172, 32, 7, 134, 34, 8, 33, 6, 65, 63, 32, 0, 41, 3, 72, 34, 9, 121, 167, 107, 33, 3, 3, 64, 65, 63, 32, 6, 121, 167, 107, 32, 3, 107, 34, 4, 65, 0, 78, 4, 64, 32, 6, 32, 9, 32, 4, 172, 134, 133, 33, 6, 12, 1, 11, 11, 32, 1, 40, 2, 4, 32, 2, 65, 3, 116, 106, 32, 6, 32, 8, 132, 55, 3, 0, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 65, 1, 36, 4, 11, 32, 0, 66, 0, 55, 3, 24, 32, 0, 66, 0, 55, 3, 32, 65, 0, 33, 2, 3, 64, 32, 2, 32, 0, 40, 2, 4, 72, 4, 64, 32, 0, 40, 2, 0, 32, 2, 16, 18, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 32, 0, 66, 0, 55, 3, 40, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 0, 55, 3, 40, 32, 0, 40, 2, 0, 32, 0, 40, 2, 8, 16, 19, 33, 1, 32, 0, 40, 2, 8, 32, 0, 40, 2, 0, 40, 2, 4, 106, 65, 1, 58, 0, 0, 32, 0, 32, 0, 41, 3, 40, 35, 6, 40, 2, 4, 32, 1, 65, 3, 116, 106, 41, 3, 0, 133, 55, 3, 40, 32, 0, 32, 0, 40, 2, 8, 65, 1, 106, 32, 0, 40, 2, 4, 111, 54, 2, 8, 32, 0, 35, 5, 40, 2, 4, 32, 0, 41, 3, 40, 34, 6, 66, 45, 136, 167, 65, 3, 116, 106, 41, 3, 0, 32, 6, 66, 8, 134, 66, 1, 132, 133, 55, 3, 40, 32, 0, 11, 38, 1, 1, 127, 32, 0, 40, 2, 0, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 0, 11, 55, 1, 2, 127, 32, 1, 32, 0, 40, 2, 0, 34, 2, 71, 4, 64, 32, 1, 65, 172, 3, 75, 4, 64, 32, 1, 65, 16, 107, 34, 3, 32, 3, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 2, 16, 12, 11, 32, 0, 32, 1, 54, 2, 0, 11, 7, 0, 32, 0, 40, 2, 4, 11, 9, 0, 32, 0, 32, 1, 54, 2, 4, 11, 7, 0, 32, 0, 40, 2, 8, 11, 9, 0, 32, 0, 32, 1, 54, 2, 8, 11, 7, 0, 32, 0, 41, 3, 16, 11, 9, 0, 32, 0, 32, 1, 55, 3, 16, 11, 7, 0, 32, 0, 41, 3, 24, 11, 9, 0, 32, 0, 32, 1, 55, 3, 24, 11, 7, 0, 32, 0, 41, 3, 32, 11, 9, 0, 32, 0, 32, 1, 55, 3, 32, 11, 7, 0, 32, 0, 41, 3, 40, 11, 9, 0, 32, 0, 32, 1, 55, 3, 40, 11, 7, 0, 32, 0, 41, 3, 48, 11, 9, 0, 32, 0, 32, 1, 55, 3, 48, 11, 7, 0, 32, 0, 41, 3, 56, 11, 9, 0, 32, 0, 32, 1, 55, 3, 56, 11, 7, 0, 32, 0, 41, 3, 64, 11, 9, 0, 32, 0, 32, 1, 55, 3, 64, 11, 7, 0, 32, 0, 41, 3, 72, 11, 9, 0, 32, 0, 32, 1, 55, 3, 72, 11, 7, 0, 32, 0, 41, 3, 80, 11, 9, 0, 32, 0, 32, 1, 55, 3, 80, 11, 7, 0, 32, 0, 41, 3, 88, 11, 9, 0, 32, 0, 32, 1, 55, 3, 88, 11, 7, 0, 32, 0, 41, 3, 96, 11, 9, 0, 32, 0, 32, 1, 55, 3, 96, 11, 172, 4, 2, 5, 127, 1, 126, 32, 2, 65, 172, 3, 75, 4, 64, 32, 2, 65, 16, 107, 34, 4, 32, 4, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 2, 33, 4, 65, 0, 33, 2, 32, 1, 40, 2, 8, 33, 5, 32, 1, 40, 2, 4, 33, 6, 3, 64, 2, 127, 65, 0, 33, 3, 3, 64, 32, 3, 32, 5, 72, 4, 64, 32, 3, 32, 6, 106, 45, 0, 0, 33, 1, 32, 0, 40, 2, 0, 32, 0, 40, 2, 8, 16, 19, 33, 7, 32, 0, 40, 2, 8, 32, 0, 40, 2, 0, 40, 2, 4, 106, 32, 1, 58, 0, 0, 32, 0, 32, 0, 41, 3, 40, 35, 6, 40, 2, 4, 32, 7, 65, 3, 116, 106, 41, 3, 0, 133, 55, 3, 40, 32, 0, 32, 0, 40, 2, 8, 65, 1, 106, 32, 0, 40, 2, 4, 111, 54, 2, 8, 32, 0, 35, 5, 40, 2, 4, 32, 0, 41, 3, 40, 34, 8, 66, 45, 136, 167, 65, 3, 116, 106, 41, 3, 0, 32, 1, 173, 32, 8, 66, 8, 134, 132, 133, 55, 3, 40, 32, 0, 32, 0, 41, 3, 16, 66, 1, 124, 55, 3, 16, 32, 0, 32, 0, 41, 3, 24, 66, 1, 124, 55, 3, 24, 32, 0, 41, 3, 16, 32, 0, 41, 3, 80, 90, 4, 127, 32, 0, 41, 3, 40, 32, 0, 41, 3, 96, 131, 80, 5, 65, 0, 11, 4, 127, 65, 1, 5, 32, 0, 41, 3, 16, 32, 0, 41, 3, 88, 90, 11, 4, 64, 32, 0, 32, 0, 41, 3, 32, 55, 3, 48, 32, 0, 32, 0, 41, 3, 16, 55, 3, 56, 32, 0, 32, 0, 41, 3, 40, 55, 3, 64, 65, 0, 33, 1, 3, 64, 32, 1, 32, 0, 40, 2, 4, 72, 4, 64, 32, 0, 40, 2, 0, 32, 1, 16, 18, 32, 1, 65, 1, 106, 33, 1, 12, 1, 11, 11, 32, 0, 66, 0, 55, 3, 40, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 0, 55, 3, 40, 32, 0, 40, 2, 0, 32, 0, 40, 2, 8, 16, 19, 33, 1, 32, 0, 40, 2, 8, 32, 0, 40, 2, 0, 40, 2, 4, 106, 65, 1, 58, 0, 0, 32, 0, 32, 0, 41, 3, 40, 35, 6, 40, 2, 4, 32, 1, 65, 3, 116, 106, 41, 3, 0, 133, 55, 3, 40, 32, 0, 32, 0, 40, 2, 8, 65, 1, 106, 32, 0, 40, 2, 4, 111, 54, 2, 8, 32, 0, 35, 5, 40, 2, 4, 32, 0, 41, 3, 40, 34, 8, 66, 45, 136, 167, 65, 3, 116, 106, 41, 3, 0, 32, 8, 66, 8, 134, 66, 1, 132, 133, 55, 3, 40, 32, 3, 65, 1, 106, 12, 3, 11, 32, 3, 65, 1, 106, 33, 3, 12, 1, 11, 11, 65, 127, 11, 34, 1, 65, 0, 78, 4, 64, 32, 5, 32, 1, 107, 33, 5, 32, 1, 32, 6, 106, 33, 6, 32, 2, 34, 1, 65, 1, 106, 33, 2, 32, 4, 40, 2, 4, 32, 1, 65, 2, 116, 106, 32, 0, 41, 3, 56, 62, 2, 0, 12, 1, 11, 11, 32, 4, 11, 10, 0, 16, 15, 36, 5, 16, 15, 36, 6, 11, 3, 0, 1, 11, 73, 1, 2, 127, 32, 0, 40, 2, 4, 34, 1, 65, 255, 255, 255, 255, 0, 113, 34, 2, 65, 1, 70, 4, 64, 32, 0, 65, 16, 106, 16, 53, 32, 0, 32, 0, 40, 2, 0, 65, 1, 114, 54, 2, 0, 35, 0, 32, 0, 16, 2, 5, 32, 0, 32, 2, 65, 1, 107, 32, 1, 65, 128, 128, 128, 128, 127, 113, 114, 54, 2, 4, 11, 11, 58, 0, 2, 64, 2, 64, 2, 64, 32, 0, 65, 8, 107, 40, 2, 0, 14, 7, 0, 0, 1, 1, 1, 1, 1, 2, 11, 15, 11, 32, 0, 40, 2, 0, 34, 0, 4, 64, 32, 0, 65, 172, 3, 79, 4, 64, 32, 0, 65, 16, 107, 16, 52, 11, 11, 15, 11, 0, 11, 11, 137, 3, 7, 0, 65, 16, 11, 55, 40, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 40, 0, 0, 0, 97, 0, 108, 0, 108, 0, 111, 0, 99, 0, 97, 0, 116, 0, 105, 0, 111, 0, 110, 0, 32, 0, 116, 0, 111, 0, 111, 0, 32, 0, 108, 0, 97, 0, 114, 0, 103, 0, 101, 0, 65, 208, 0, 11, 45, 30, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 30, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 114, 0, 116, 0, 47, 0, 116, 0, 108, 0, 115, 0, 102, 0, 46, 0, 116, 0, 115, 0, 65, 128, 1, 11, 43, 28, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 28, 0, 0, 0, 73, 0, 110, 0, 118, 0, 97, 0, 108, 0, 105, 0, 100, 0, 32, 0, 108, 0, 101, 0, 110, 0, 103, 0, 116, 0, 104, 0, 65, 176, 1, 11, 53, 38, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 38, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 97, 0, 114, 0, 114, 0, 97, 0, 121, 0, 98, 0, 117, 0, 102, 0, 102, 0, 101, 0, 114, 0, 46, 0, 116, 0, 115, 0, 65, 240, 1, 11, 51, 36, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 36, 0, 0, 0, 73, 0, 110, 0, 100, 0, 101, 0, 120, 0, 32, 0, 111, 0, 117, 0, 116, 0, 32, 0, 111, 0, 102, 0, 32, 0, 114, 0, 97, 0, 110, 0, 103, 0, 101, 0, 65, 176, 2, 11, 51, 36, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 36, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 116, 0, 121, 0, 112, 0, 101, 0, 100, 0, 97, 0, 114, 0, 114, 0, 97, 0, 121, 0, 46, 0, 116, 0, 115, 0, 65, 240, 2, 11, 53, 7, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 145, 4, 0, 0, 2, 0, 0, 0, 49, 0, 0, 0, 2, 0, 0, 0, 17, 1, 0, 0, 2, 0, 0, 0, 16, 0, 34, 16, 115, 111, 117, 114, 99, 101, 77, 97, 112, 112, 105, 110, 103, 85, 82, 76, 16, 46, 47, 114, 97, 98, 105, 110, 46, 119, 97, 115, 109, 46, 109, 97, 112]); return n(new Response(new Blob([e], { type: "application/wasm" })), t) }
                    o.supported = "undefined" != typeof WebAssembly, t.exports = o }, 3060: (t, e, r) => { const n = r(7118),
                        o = r(3286);
                    t.exports = { Rabin: n, create: async(t, e, r, i, s) => { const a = await o(); return new n(a, t, e, r, i, s) } } }, 7118: t => { t.exports = class { constructor(t, e = 12, r = 8192, n = 32768, o = 64, i) { this.bits = e, this.min = r, this.max = n, this.asModule = t, this.rabin = new t.Rabin(e, r, n, o, i), this.polynomial = i }
                        fingerprint(t) { const { __retain: e, __release: r, __allocArray: n, __getInt32Array: o, Int32Array_ID: i, Uint8Array_ID: s } = this.asModule, a = e(n(i, new Int32Array(Math.ceil(t.length / this.min)))), c = e(n(s, t)), u = o(this.rabin.fingerprint(c, a));
                            r(c), r(a); const h = u.indexOf(0); return h >= 0 ? u.subarray(0, h) : u } } }, 9353: (t, e, r) => { t.exports = r(1846) }, 1846: (t, e, r) => { var n = r(1960);
                    e.operation = function(t) { var r = e.timeouts(t); return new n(r, { forever: t && (t.forever || t.retries === 1 / 0), unref: t && t.unref, maxRetryTime: t && t.maxRetryTime }) }, e.timeouts = function(t) { if (t instanceof Array) return [].concat(t); var e = { retries: 10, factor: 2, minTimeout: 1e3, maxTimeout: 1 / 0, randomize: !1 }; for (var r in t) e[r] = t[r]; if (e.minTimeout > e.maxTimeout) throw new Error("minTimeout is greater than maxTimeout"); for (var n = [], o = 0; o < e.retries; o++) n.push(this.createTimeout(o, e)); return t && t.forever && !n.length && n.push(this.createTimeout(o, e)), n.sort((function(t, e) { return t - e })), n }, e.createTimeout = function(t, e) { var r = e.randomize ? Math.random() + 1 : 1,
                            n = Math.round(r * Math.max(e.minTimeout, 1) * Math.pow(e.factor, t)); return Math.min(n, e.maxTimeout) }, e.wrap = function(t, r, n) { if (r instanceof Array && (n = r, r = null), !n)
                            for (var o in n = [], t) "function" == typeof t[o] && n.push(o); for (var i = 0; i < n.length; i++) { var s = n[i],
                                a = t[s];
                            t[s] = function(n) { var o = e.operation(r),
                                    i = Array.prototype.slice.call(arguments, 1),
                                    s = i.pop();
                                i.push((function(t) { o.retry(t) || (t && (arguments[0] = o.mainError()), s.apply(this, arguments)) })), o.attempt((function() { n.apply(t, i) })) }.bind(t, a), t[s].options = r } } }, 1960: t => {
                    function e(t, e) { "boolean" == typeof e && (e = { forever: e }), this._originalTimeouts = JSON.parse(JSON.stringify(t)), this._timeouts = t, this._options = e || {}, this._maxRetryTime = e && e.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._timer = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0)) }
                    t.exports = e, e.prototype.reset = function() { this._attempts = 1, this._timeouts = this._originalTimeouts.slice(0) }, e.prototype.stop = function() { this._timeout && clearTimeout(this._timeout), this._timer && clearTimeout(this._timer), this._timeouts = [], this._cachedTimeouts = null }, e.prototype.retry = function(t) { if (this._timeout && clearTimeout(this._timeout), !t) return !1; var e = (new Date).getTime(); if (t && e - this._operationStart >= this._maxRetryTime) return this._errors.push(t), this._errors.unshift(new Error("RetryOperation timeout occurred")), !1;
                        this._errors.push(t); var r = this._timeouts.shift(); if (void 0 === r) { if (!this._cachedTimeouts) return !1;
                            this._errors.splice(0, this._errors.length - 1), r = this._cachedTimeouts.slice(-1) } var n = this; return this._timer = setTimeout((function() { n._attempts++, n._operationTimeoutCb && (n._timeout = setTimeout((function() { n._operationTimeoutCb(n._attempts) }), n._operationTimeout), n._options.unref && n._timeout.unref()), n._fn(n._attempts) }), r), this._options.unref && this._timer.unref(), !0 }, e.prototype.attempt = function(t, e) { this._fn = t, e && (e.timeout && (this._operationTimeout = e.timeout), e.cb && (this._operationTimeoutCb = e.cb)); var r = this;
                        this._operationTimeoutCb && (this._timeout = setTimeout((function() { r._operationTimeoutCb() }), r._operationTimeout)), this._operationStart = (new Date).getTime(), this._fn(this._attempts) }, e.prototype.try = function(t) { console.log("Using RetryOperation.try() is deprecated"), this.attempt(t) }, e.prototype.start = function(t) { console.log("Using RetryOperation.start() is deprecated"), this.attempt(t) }, e.prototype.start = e.prototype.try, e.prototype.errors = function() { return this._errors }, e.prototype.attempts = function() { return this._attempts }, e.prototype.mainError = function() { if (0 === this._errors.length) return null; for (var t = {}, e = null, r = 0, n = 0; n < this._errors.length; n++) { var o = this._errors[n],
                                i = o.message,
                                s = (t[i] || 0) + 1;
                            t[i] = s, s >= r && (e = o, r = s) } return e } }, 544: t => { "use strict";

                    function e(t, e) { return t + r(e) }

                    function r(t) { let e = t; return e -= e >> 1 & 1431655765, e = (858993459 & e) + (e >> 2 & 858993459), 16843009 * (e + (e >> 4) & 252645135) >> 24 }

                    function n(t, e) { return t[0] - e[0] }

                    function o(t) { return t[1] }
                    t.exports = class { constructor() { this._bitArrays = [], this._data = [], this._length = 0, this._changedLength = !1, this._changedData = !1 }
                        set(t, e) { let r = this._internalPositionFor(t, !1); if (void 0 === e) - 1 !== r && (this._unsetInternalPos(r), this._unsetBit(t), this._changedLength = !0, this._changedData = !0);
                            else { let n = !1; - 1 === r ? (r = this._data.length, this._setBit(t), this._changedData = !0) : n = !0, this._setInternalPos(r, t, e, n), this._changedLength = !0 } }
                        unset(t) { this.set(t, void 0) }
                        get(t) { this._sortData(); const e = this._internalPositionFor(t, !0); if (-1 !== e) return this._data[e][1] }
                        push(t) { return this.set(this.length, t), this.length }
                        get length() { if (this._sortData(), this._changedLength) { const t = this._data[this._data.length - 1];
                                this._length = t ? t[0] + 1 : 0, this._changedLength = !1 } return this._length }
                        forEach(t) { let e = 0; for (; e < this.length;) t(this.get(e), e, this), e++ }
                        map(t) { let e = 0,
                                r = new Array(this.length); for (; e < this.length;) r[e] = t(this.get(e), e, this), e++; return r }
                        reduce(t, e) { let r = 0,
                                n = e; for (; r < this.length;) n = t(n, this.get(r), r), r++; return n }
                        find(t) { let e, r, n = 0; for (; n < this.length && !e;) r = this.get(n), e = t(r), n++; return e ? r : void 0 }
                        _internalPositionFor(t, n) { const o = this._bytePosFor(t, n); if (o >= this._bitArrays.length) return -1; const i = this._bitArrays[o],
                                s = t - 7 * o; return (i & 1 << s) > 0 ? this._bitArrays.slice(0, o).reduce(e, 0) + r(i & ~(4294967295 << s + 1)) - 1 : -1 }
                        _bytePosFor(t, e) { const r = Math.floor(t / 7),
                                n = r + 1; for (; !e && this._bitArrays.length < n;) this._bitArrays.push(0); return r }
                        _setBit(t) { const e = this._bytePosFor(t, !1);
                            this._bitArrays[e] |= 1 << t - 7 * e }
                        _unsetBit(t) { const e = this._bytePosFor(t, !1);
                            this._bitArrays[e] &= ~(1 << t - 7 * e) }
                        _setInternalPos(t, e, r, n) { const o = this._data,
                                i = [e, r]; if (n) this._sortData(), o[t] = i;
                            else { if (o.length)
                                    if (o[o.length - 1][0] >= e) o.push(i);
                                    else if (o[0][0] <= e) o.unshift(i);
                                else { const t = Math.round(o.length / 2);
                                    this._data = o.slice(0, t).concat(i).concat(o.slice(t)) } else this._data.push(i);
                                this._changedData = !0, this._changedLength = !0 } }
                        _unsetInternalPos(t) { this._data.splice(t, 1) }
                        _sortData() { this._changedData && this._data.sort(n), this._changedData = !1 }
                        bitField() { const t = []; let e, r = 8,
                                n = 0,
                                o = 0; const i = this._bitArrays.slice(); for (; i.length || n;) { 0 === n && (e = i.shift(), n = 7); const s = Math.min(n, r);
                                o |= (e & ~(255 << s)) << 8 - r, e >>>= s, n -= s, r -= s, r && (n || i.length) || (t.push(o), o = 0, r = 8) } for (var s = t.length - 1; s > 0 && 0 === t[s]; s--) t.pop(); return t }
                        compactArray() { return this._sortData(), this._data.map(o) } } }, 326: t => { "use strict";
                    t.exports = function(t, e) { for (let r = 0; r < t.byteLength; r++) { if (t[r] < e[r]) return -1; if (t[r] > e[r]) return 1 } return t.byteLength > e.byteLength ? 1 : t.byteLength < e.byteLength ? -1 : 0 } }, 6643: t => { "use strict";
                    t.exports = function(t, e) { e || (e = t.reduce(((t, e) => t + e.length), 0)); const r = new Uint8Array(e); let n = 0; for (const e of t) r.set(e, n), n += e.length; return r } }, 2142: t => { "use strict";
                    t.exports = function(t, e) { if (t === e) return !0; if (t.byteLength !== e.byteLength) return !1; for (let r = 0; r < t.byteLength; r++)
                            if (t[r] !== e[r]) return !1;
                        return !0 } }, 7962: (t, e, r) => { "use strict"; const n = r(5743);
                    t.exports = function(t, e = "utf8") { const r = n[e]; if (!r) throw new Error(`Unsupported encoding "${e}"`); return r.decoder.decode(`${r.prefix}${t}`) } }, 8161: (t, e, r) => { "use strict"; const n = r(326),
                        o = r(6643),
                        i = r(2142),
                        s = r(7962),
                        a = r(3071),
                        c = r(3474);
                    t.exports = { compare: n, concat: o, equals: i, fromString: s, toString: a, xor: c } }, 3071: (t, e, r) => { "use strict"; const n = r(5743);
                    t.exports = function(t, e = "utf8") { const r = n[e]; if (!r) throw new Error(`Unsupported encoding "${e}"`); return r.encoder.encode(t).substring(1) } }, 5743: (t, e, r) => { "use strict"; const { bases: n } = r(8750);

                    function o(t, e, r, n) { return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } } } const i = o("utf8", "u", (t => "u" + new TextDecoder("utf8").decode(t)), (t => (new TextEncoder).encode(t.substring(1)))),
                        s = o("ascii", "a", (t => { let e = "a"; for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]); return e }), (t => { t = t.substring(1); const e = new Uint8Array(t.length); for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r); return e })),
                        a = { utf8: i, "utf-8": i, hex: n.base16, latin1: s, ascii: s, binary: s, ...n };
                    t.exports = a }, 3474: t => { "use strict";
                    t.exports = function(t, e) { if (t.length !== e.length) throw new Error("Inputs should have the same length"); const r = new Uint8Array(t.length); for (let n = 0; n < t.length; n++) r[n] = t[n] ^ e[n]; return r } }, 2511: function(t, e, r) { var n;
                    t = r.nmd(t),
                        function(o) { e && e.nodeType, t && t.nodeType; var i = "object" == typeof r.g && r.g;
                            i.global !== i && i.window !== i && i.self; var s, a = 2147483647,
                                c = 36,
                                u = /^xn--/,
                                h = /[^\x20-\x7E]/,
                                f = /[\x2E\u3002\uFF0E\uFF61]/g,
                                l = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                                p = Math.floor,
                                d = String.fromCharCode;

                            function y(t) { throw RangeError(l[t]) }

                            function g(t, e) { for (var r = t.length, n = []; r--;) n[r] = e(t[r]); return n }

                            function w(t, e) { var r = t.split("@"),
                                    n = ""; return r.length > 1 && (n = r[0] + "@", t = r[1]), n + g((t = t.replace(f, ".")).split("."), e).join(".") }

                            function b(t) { for (var e, r, n = [], o = 0, i = t.length; o < i;)(e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (r = t.charCodeAt(o++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--) : n.push(e); return n }

                            function m(t) { return g(t, (function(t) { var e = ""; return t > 65535 && (e += d((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e + d(t) })).join("") }

                            function _(t, e) { return t + 22 + 75 * (t < 26) - ((0 != e) << 5) }

                            function v(t, e, r) { var n = 0; for (t = r ? p(t / 700) : t >> 1, t += p(t / e); t > 455; n += c) t = p(t / 35); return p(n + 36 * t / (t + 38)) }

                            function E(t) { var e, r, n, o, i, s, u, h, f, l, d, g = [],
                                    w = t.length,
                                    b = 0,
                                    _ = 128,
                                    E = 72; for ((r = t.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n) t.charCodeAt(n) >= 128 && y("not-basic"), g.push(t.charCodeAt(n)); for (o = r > 0 ? r + 1 : 0; o < w;) { for (i = b, s = 1, u = c; o >= w && y("invalid-input"), ((h = (d = t.charCodeAt(o++)) - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : c) >= c || h > p((a - b) / s)) && y("overflow"), b += h * s, !(h < (f = u <= E ? 1 : u >= E + 26 ? 26 : u - E)); u += c) s > p(a / (l = c - f)) && y("overflow"), s *= l;
                                    E = v(b - i, e = g.length + 1, 0 == i), p(b / e) > a - _ && y("overflow"), _ += p(b / e), b %= e, g.splice(b++, 0, _) } return m(g) }

                            function k(t) { var e, r, n, o, i, s, u, h, f, l, g, w, m, E, k, A = []; for (w = (t = b(t)).length, e = 128, r = 0, i = 72, s = 0; s < w; ++s)(g = t[s]) < 128 && A.push(d(g)); for (n = o = A.length, o && A.push("-"); n < w;) { for (u = a, s = 0; s < w; ++s)(g = t[s]) >= e && g < u && (u = g); for (u - e > p((a - r) / (m = n + 1)) && y("overflow"), r += (u - e) * m, e = u, s = 0; s < w; ++s)
                                        if ((g = t[s]) < e && ++r > a && y("overflow"), g == e) { for (h = r, f = c; !(h < (l = f <= i ? 1 : f >= i + 26 ? 26 : f - i)); f += c) k = h - l, E = c - l, A.push(d(_(l + k % E, 0))), h = p(k / E);
                                            A.push(d(_(h, 0))), i = v(r, m, n == o), r = 0, ++n }++r, ++e } return A.join("") }
                            s = { version: "1.3.2", ucs2: { decode: b, encode: m }, decode: E, encode: k, toASCII: function(t) { return w(t, (function(t) { return h.test(t) ? "xn--" + k(t) : t })) }, toUnicode: function(t) { return w(t, (function(t) { return u.test(t) ? E(t.slice(4).toLowerCase()) : t })) } }, void 0 === (n = function() { return s }.call(e, r, e, t)) || (t.exports = n) }() }, 8575: (t, e, r) => { "use strict"; var n = r(2511),
                        o = r(2502);

                    function i() { this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null }
                    e.parse = m, e.resolve = function(t, e) { return m(t, !1, !0).resolve(e) }, e.resolveObject = function(t, e) { return t ? m(t, !1, !0).resolveObject(e) : e }, e.format = function(t) { return o.isString(t) && (t = m(t)), t instanceof i ? t.format() : i.prototype.format.call(t) }, e.Url = i; var s = /^([a-z0-9.+-]+:)/i,
                        a = /:[0-9]*$/,
                        c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                        u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                        h = ["'"].concat(u),
                        f = ["%", "/", "?", ";", "#"].concat(h),
                        l = ["/", "?", "#"],
                        p = /^[+a-z0-9A-Z_-]{0,63}$/,
                        d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                        y = { javascript: !0, "javascript:": !0 },
                        g = { javascript: !0, "javascript:": !0 },
                        w = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
                        b = r(7673);

                    function m(t, e, r) { if (t && o.isObject(t) && t instanceof i) return t; var n = new i; return n.parse(t, e, r), n }
                    i.prototype.parse = function(t, e, r) { if (!o.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t); var i = t.indexOf("?"),
                            a = -1 !== i && i < t.indexOf("#") ? "?" : "#",
                            u = t.split(a);
                        u[0] = u[0].replace(/\\/g, "/"); var m = t = u.join(a); if (m = m.trim(), !r && 1 === t.split("#").length) { var _ = c.exec(m); if (_) return this.path = m, this.href = m, this.pathname = _[1], _[2] ? (this.search = _[2], this.query = e ? b.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this } var v = s.exec(m); if (v) { var E = (v = v[0]).toLowerCase();
                            this.protocol = E, m = m.substr(v.length) } if (r || v || m.match(/^\/\/[^@\/]+@[^@\/]+/)) { var k = "//" === m.substr(0, 2);!k || v && g[v] || (m = m.substr(2), this.slashes = !0) } if (!g[v] && (k || v && !w[v])) { for (var A, x, B = -1, S = 0; S < l.length; S++) - 1 !== (I = m.indexOf(l[S])) && (-1 === B || I < B) && (B = I); for (-1 !== (x = -1 === B ? m.lastIndexOf("@") : m.lastIndexOf("@", B)) && (A = m.slice(0, x), m = m.slice(x + 1), this.auth = decodeURIComponent(A)), B = -1, S = 0; S < f.length; S++) { var I; - 1 !== (I = m.indexOf(f[S])) && (-1 === B || I < B) && (B = I) } - 1 === B && (B = m.length), this.host = m.slice(0, B), m = m.slice(B), this.parseHost(), this.hostname = this.hostname || ""; var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1]; if (!T)
                                for (var C = this.hostname.split(/\./), O = (S = 0, C.length); S < O; S++) { var N = C[S]; if (N && !N.match(p)) { for (var U = "", D = 0, R = N.length; D < R; D++) N.charCodeAt(D) > 127 ? U += "x" : U += N[D]; if (!U.match(p)) { var L = C.slice(0, S),
                                                z = C.slice(S + 1),
                                                j = N.match(d);
                                            j && (L.push(j[1]), z.unshift(j[2])), z.length && (m = "/" + z.join(".") + m), this.hostname = L.join("."); break } } }
                            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), T || (this.hostname = n.toASCII(this.hostname)); var P = this.port ? ":" + this.port : "",
                                M = this.hostname || "";
                            this.host = M + P, this.href += this.host, T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== m[0] && (m = "/" + m)) } if (!y[E])
                            for (S = 0, O = h.length; S < O; S++) { var F = h[S]; if (-1 !== m.indexOf(F)) { var $ = encodeURIComponent(F);
                                    $ === F && ($ = escape(F)), m = m.split(F).join($) } }
                        var q = m.indexOf("#"); - 1 !== q && (this.hash = m.substr(q), m = m.slice(0, q)); var H = m.indexOf("?"); if (-1 !== H ? (this.search = m.substr(H), this.query = m.substr(H + 1), e && (this.query = b.parse(this.query)), m = m.slice(0, H)) : e && (this.search = "", this.query = {}), m && (this.pathname = m), w[E] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) { P = this.pathname || ""; var V = this.search || "";
                            this.path = P + V } return this.href = this.format(), this }, i.prototype.format = function() { var t = this.auth || "";
                        t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@"); var e = this.protocol || "",
                            r = this.pathname || "",
                            n = this.hash || "",
                            i = !1,
                            s = "";
                        this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (s = b.stringify(this.query)); var a = this.search || s && "?" + s || ""; return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || w[e]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), a && "?" !== a.charAt(0) && (a = "?" + a), e + i + (r = r.replace(/[?#]/g, (function(t) { return encodeURIComponent(t) }))) + (a = a.replace("#", "%23")) + n }, i.prototype.resolve = function(t) { return this.resolveObject(m(t, !1, !0)).format() }, i.prototype.resolveObject = function(t) { if (o.isString(t)) { var e = new i;
                            e.parse(t, !1, !0), t = e } for (var r = new i, n = Object.keys(this), s = 0; s < n.length; s++) { var a = n[s];
                            r[a] = this[a] } if (r.hash = t.hash, "" === t.href) return r.href = r.format(), r; if (t.slashes && !t.protocol) { for (var c = Object.keys(t), u = 0; u < c.length; u++) { var h = c[u]; "protocol" !== h && (r[h] = t[h]) } return w[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r } if (t.protocol && t.protocol !== r.protocol) { if (!w[t.protocol]) { for (var f = Object.keys(t), l = 0; l < f.length; l++) { var p = f[l];
                                    r[p] = t[p] } return r.href = r.format(), r } if (r.protocol = t.protocol, t.host || g[t.protocol]) r.pathname = t.pathname;
                            else { for (var d = (t.pathname || "").split("/"); d.length && !(t.host = d.shift()););
                                t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), r.pathname = d.join("/") } if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) { var y = r.pathname || "",
                                    b = r.search || "";
                                r.path = y + b } return r.slashes = r.slashes || t.slashes, r.href = r.format(), r } var m = r.pathname && "/" === r.pathname.charAt(0),
                            _ = t.host || t.pathname && "/" === t.pathname.charAt(0),
                            v = _ || m || r.host && t.pathname,
                            E = v,
                            k = r.pathname && r.pathname.split("/") || [],
                            A = (d = t.pathname && t.pathname.split("/") || [], r.protocol && !w[r.protocol]); if (A && (r.hostname = "", r.port = null, r.host && ("" === k[0] ? k[0] = r.host : k.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === d[0] ? d[0] = t.host : d.unshift(t.host)), t.host = null), v = v && ("" === d[0] || "" === k[0])), _) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, k = d;
                        else if (d.length) k || (k = []), k.pop(), k = k.concat(d), r.search = t.search, r.query = t.query;
                        else if (!o.isNullOrUndefined(t.search)) return A && (r.hostname = r.host = k.shift(), (T = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = T.shift(), r.host = r.hostname = T.shift())), r.search = t.search, r.query = t.query, o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r; if (!k.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r; for (var x = k.slice(-1)[0], B = (r.host || t.host || k.length > 1) && ("." === x || ".." === x) || "" === x, S = 0, I = k.length; I >= 0; I--) "." === (x = k[I]) ? k.splice(I, 1) : ".." === x ? (k.splice(I, 1), S++) : S && (k.splice(I, 1), S--); if (!v && !E)
                            for (; S--; S) k.unshift("..");!v || "" === k[0] || k[0] && "/" === k[0].charAt(0) || k.unshift(""), B && "/" !== k.join("/").substr(-1) && k.push(""); var T, C = "" === k[0] || k[0] && "/" === k[0].charAt(0); return A && (r.hostname = r.host = C ? "" : k.length ? k.shift() : "", (T = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = T.shift(), r.host = r.hostname = T.shift())), (v = v || r.host && k.length) && !C && k.unshift(""), k.length ? r.pathname = k.join("/") : (r.pathname = null, r.path = null), o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r }, i.prototype.parseHost = function() { var t = this.host,
                            e = a.exec(t);
                        e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t) } }, 2502: t => { "use strict";
                    t.exports = { isString: function(t) { return "string" == typeof t }, isObject: function(t) { return "object" == typeof t && null !== t }, isNull: function(t) { return null === t }, isNullOrUndefined: function(t) { return null == t } } }, 6988: t => { t.exports = function t(e, r) { var n, o = 0,
                            i = 0,
                            s = r = r || 0,
                            a = e.length;
                        do { if (s >= a || i > 49) throw t.bytes = 0, new RangeError("Could not decode varint");
                            n = e[s++], o += i < 28 ? (127 & n) << i : (127 & n) * Math.pow(2, i), i += 7 } while (n >= 128); return t.bytes = s - r, o } }, 1312: t => { t.exports = function t(r, n, o) { if (Number.MAX_SAFE_INTEGER && r > Number.MAX_SAFE_INTEGER) throw t.bytes = 0, new RangeError("Could not encode varint");
                        n = n || []; for (var i = o = o || 0; r >= e;) n[o++] = 255 & r | 128, r /= 128; for (; - 128 & r;) n[o++] = 255 & r | 128, r >>>= 7; return n[o] = 0 | r, t.bytes = o - i + 1, n }; var e = Math.pow(2, 31) }, 4676: (t, e, r) => { t.exports = { encode: r(1312), decode: r(6988), encodingLength: r(82) } }, 82: t => { var e = Math.pow(2, 7),
                        r = Math.pow(2, 14),
                        n = Math.pow(2, 21),
                        o = Math.pow(2, 28),
                        i = Math.pow(2, 35),
                        s = Math.pow(2, 42),
                        a = Math.pow(2, 49),
                        c = Math.pow(2, 56),
                        u = Math.pow(2, 63);
                    t.exports = function(t) { return t < e ? 1 : t < r ? 2 : t < n ? 3 : t < o ? 4 : t < i ? 5 : t < s ? 6 : t < a ? 7 : t < c ? 8 : t < u ? 9 : 10 } }, 7529: t => { t.exports = function() { for (var t = {}, r = 0; r < arguments.length; r++) { var n = arguments[r]; for (var o in n) e.call(n, o) && (t[o] = n[o]) } return t }; var e = Object.prototype.hasOwnProperty }, 1082: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { code: () => St, decode: () => Tt, encode: () => It, name: () => Bt }); const n = ["string", "number", "bigint", "symbol"],
                        o = ["Function", "Generator", "AsyncGenerator", "GeneratorFunction", "AsyncGeneratorFunction", "AsyncFunction", "Observable", "Array", "Buffer", "Object", "RegExp", "Date", "Error", "Map", "Set", "WeakMap", "WeakSet", "ArrayBuffer", "SharedArrayBuffer", "DataView", "Promise", "URL", "HTMLElement", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array"];
                    class i { constructor(t, e, r) { this.major = t, this.majorEncoded = t << 5, this.name = e, this.terminal = r }
                        toString() { return `Type[${this.major}].${this.name}` }
                        compare(t) { return this.major < t.major ? -1 : this.major > t.major ? 1 : 0 } }
                    i.uint = new i(0, "uint", !0), i.negint = new i(1, "negint", !0), i.bytes = new i(2, "bytes", !0), i.string = new i(3, "string", !0), i.array = new i(4, "array", !1), i.map = new i(5, "map", !1), i.tag = new i(6, "tag", !1), i.float = new i(7, "float", !0), i.false = new i(7, "false", !0), i.true = new i(7, "true", !0), i.null = new i(7, "null", !0), i.undefined = new i(7, "undefined", !0), i.break = new i(7, "break", !0);
                    class s { constructor(t, e, r) { this.type = t, this.value = e, this.encodedLength = r, this.encodedBytes = void 0 }
                        toString() { return `Token[${this.type}].${this.value}` } } const a = globalThis.process && !globalThis.process.browser && globalThis.Buffer && "function" == typeof globalThis.Buffer.isBuffer,
                        c = new TextDecoder,
                        u = new TextEncoder;

                    function h(t) { return a && globalThis.Buffer.isBuffer(t) }

                    function f(t) { return t instanceof Uint8Array ? h(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t : Uint8Array.from(t) } const l = a ? (t, e, r) => r - e > 64 ? globalThis.Buffer.from(t.subarray(e, r)).toString("utf8") : m(t, e, r) : (t, e, r) => r - e > 64 ? c.decode(t.subarray(e, r)) : m(t, e, r),
                        p = a ? t => t.length > 64 ? globalThis.Buffer.from(t) : b(t) : t => t.length > 64 ? u.encode(t) : b(t),
                        d = t => Uint8Array.from(t),
                        y = a ? (t, e, r) => h(t) ? new Uint8Array(t.subarray(e, r)) : t.slice(e, r) : (t, e, r) => t.slice(e, r),
                        g = a ? (t, e) => (t = t.map((t => t instanceof Uint8Array ? t : globalThis.Buffer.from(t))), f(globalThis.Buffer.concat(t, e))) : (t, e) => { const r = new Uint8Array(e); let n = 0; for (let e of t) n + e.length > r.length && (e = e.subarray(0, r.length - n)), r.set(e, n), n += e.length; return r },
                        w = a ? t => globalThis.Buffer.allocUnsafe(t) : t => new Uint8Array(t);

                    function b(t, e = 1 / 0) { let r; const n = t.length; let o = null; const i = []; for (let s = 0; s < n; ++s) { if (r = t.charCodeAt(s), r > 55295 && r < 57344) { if (!o) { if (r > 56319) {
                                        (e -= 3) > -1 && i.push(239, 191, 189); continue } if (s + 1 === n) {
                                        (e -= 3) > -1 && i.push(239, 191, 189); continue }
                                    o = r; continue } if (r < 56320) {
                                    (e -= 3) > -1 && i.push(239, 191, 189), o = r; continue }
                                r = 65536 + (o - 55296 << 10 | r - 56320) } else o && (e -= 3) > -1 && i.push(239, 191, 189); if (o = null, r < 128) { if ((e -= 1) < 0) break;
                                i.push(r) } else if (r < 2048) { if ((e -= 2) < 0) break;
                                i.push(r >> 6 | 192, 63 & r | 128) } else if (r < 65536) { if ((e -= 3) < 0) break;
                                i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128) } else { if (!(r < 1114112)) throw new Error("Invalid code point"); if ((e -= 4) < 0) break;
                                i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128) } } return i }

                    function m(t, e, r) { const n = []; for (; e < r;) { const o = t[e]; let i = null,
                                s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1; if (e + s <= r) { let r, n, a, c; switch (s) {
                                    case 1:
                                        o < 128 && (i = o); break;
                                    case 2:
                                        r = t[e + 1], 128 == (192 & r) && (c = (31 & o) << 6 | 63 & r, c > 127 && (i = c)); break;
                                    case 3:
                                        r = t[e + 1], n = t[e + 2], 128 == (192 & r) && 128 == (192 & n) && (c = (15 & o) << 12 | (63 & r) << 6 | 63 & n, c > 2047 && (c < 55296 || c > 57343) && (i = c)); break;
                                    case 4:
                                        r = t[e + 1], n = t[e + 2], a = t[e + 3], 128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && (c = (15 & o) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, c > 65535 && c < 1114112 && (i = c)) } }
                            null === i ? (i = 65533, s = 1) : i > 65535 && (i -= 65536, n.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), n.push(i), e += s } return function(t) { const e = t.length; if (e <= _) return String.fromCharCode.apply(String, t); let r = "",
                                n = 0; for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += _)); return r }(n) } const _ = 4096;
                    class v { constructor(t = 256) { this.chunkSize = t, this.cursor = 0, this.maxCursor = -1, this.chunks = [], this._initReuseChunk = null }
                        reset() { this.chunks = [], this.cursor = 0, this.maxCursor = -1, null !== this._initReuseChunk && (this.chunks.push(this._initReuseChunk), this.maxCursor = this._initReuseChunk.length - 1) }
                        push(t) { let e = this.chunks[this.chunks.length - 1]; if (this.cursor + t.length <= this.maxCursor + 1) { const r = e.length - (this.maxCursor - this.cursor) - 1;
                                e.set(t, r) } else { if (e) { const t = e.length - (this.maxCursor - this.cursor) - 1;
                                    t < e.length && (this.chunks[this.chunks.length - 1] = e.subarray(0, t), this.maxCursor = this.cursor - 1) }
                                t.length < 64 && t.length < this.chunkSize ? (e = w(this.chunkSize), this.chunks.push(e), this.maxCursor += e.length, null === this._initReuseChunk && (this._initReuseChunk = e), e.set(t, 0)) : (this.chunks.push(t), this.maxCursor += t.length) }
                            this.cursor += t.length }
                        toBytes(t = !1) { let e; if (1 === this.chunks.length) { const r = this.chunks[0];
                                t && this.cursor > r.length / 2 ? (e = this.cursor === r.length ? r : r.subarray(0, this.cursor), this._initReuseChunk = null, this.chunks = []) : e = y(r, 0, this.cursor) } else e = g(this.chunks, this.cursor); return t && this.reset(), e } } const E = [];

                    function k(t, e, r) { if (t.length - e < r) throw new Error("CBOR decode error: not enough data for type") }
                    E[23] = 1, E[24] = 2, E[25] = 3, E[26] = 5, E[27] = 9; const A = [24, 256, 65536, 4294967296, BigInt("18446744073709551616")];

                    function x(t, e, r) { k(t, e, 1); const n = t[e]; if (!0 === r.strict && n < A[0]) throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)"); return n }

                    function B(t, e, r) { k(t, e, 2); const n = t[e] << 8 | t[e + 1]; if (!0 === r.strict && n < A[1]) throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)"); return n }

                    function S(t, e, r) { k(t, e, 4); const n = 16777216 * t[e] + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3]; if (!0 === r.strict && n < A[2]) throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)"); return n }

                    function I(t, e, r) { k(t, e, 8); const n = 16777216 * t[e] + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3],
                            o = 16777216 * t[e + 4] + (t[e + 5] << 16) + (t[e + 6] << 8) + t[e + 7],
                            i = (BigInt(n) << BigInt(32)) + BigInt(o); if (!0 === r.strict && i < A[3]) throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)"); if (i <= Number.MAX_SAFE_INTEGER) return Number(i); if (!0 === r.allowBigInt) return i; throw new Error("CBOR decode error: integers outside of the safe integer range are not supported") }

                    function T(t, e) { return C(t, 0, e.value) }

                    function C(t, e, r) { if (r < A[0]) { const n = Number(r);
                            t.push([e | n]) } else if (r < A[1]) { const n = Number(r);
                            t.push([24 | e, n]) } else if (r < A[2]) { const n = Number(r);
                            t.push([25 | e, n >>> 8, 255 & n]) } else if (r < A[3]) { const n = Number(r);
                            t.push([26 | e, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n]) } else { const n = BigInt(r); if (!(n < A[4])) throw new Error("CBOR decode error: encountered BigInt larger than allowable range"); { const r = [27 | e, 0, 0, 0, 0, 0, 0, 0]; let o = Number(n & BigInt(4294967295)),
                                    i = Number(n >> BigInt(32) & BigInt(4294967295));
                                r[8] = 255 & o, o >>= 8, r[7] = 255 & o, o >>= 8, r[6] = 255 & o, o >>= 8, r[5] = 255 & o, r[4] = 255 & i, i >>= 8, r[3] = 255 & i, i >>= 8, r[2] = 255 & i, i >>= 8, r[1] = 255 & i, t.push(r) } } }
                    T.encodedSize = function(t) { return C.encodedSize(t.value) }, C.encodedSize = function(t) { return t < A[0] ? 1 : t < A[1] ? 2 : t < A[2] ? 3 : t < A[3] ? 5 : 9 }, T.compareTokens = function(t, e) { return t.value < e.value ? -1 : t.value > e.value ? 1 : 0 }; const O = BigInt(-1),
                        N = BigInt(1);

                    function U(t, e) { const r = e.value,
                            n = "bigint" == typeof r ? r * O - N : -1 * r - 1;
                        C(t, e.type.majorEncoded, n) }

                    function D(t, e, r, n) { k(t, e, r + n); const o = y(t, e + r, e + r + n); return new s(i.bytes, o, r + n) }

                    function R(t, e, r, n) { return D(t, e, 1, r) }

                    function L(t) { return void 0 === t.encodedBytes && (t.encodedBytes = t.type === i.string ? p(t.value) : t.value), t.encodedBytes }

                    function z(t, e) { const r = L(e);
                        C(t, e.type.majorEncoded, r.length), t.push(r) }

                    function j(t, e, r, n) { const o = r + n; return k(t, e, o), new s(i.string, l(t, e + r, e + o), o) }

                    function P(t, e, r, n) { return j(t, e, 1, r) }
                    U.encodedSize = function(t) { const e = t.value,
                            r = "bigint" == typeof e ? e * O - N : -1 * e - 1; return r < A[0] ? 1 : r < A[1] ? 2 : r < A[2] ? 3 : r < A[3] ? 5 : 9 }, U.compareTokens = function(t, e) { return t.value < e.value ? 1 : t.value > e.value ? -1 : 0 }, z.encodedSize = function(t) { const e = L(t); return C.encodedSize(e.length) + e.length }, z.compareTokens = function(t, e) { return r = L(t), n = L(e), r.length < n.length ? -1 : r.length > n.length ? 1 : function(t, e) { if (h(t) && h(e)) return t.compare(e); for (let r = 0; r < t.length; r++)
                                if (t[r] !== e[r]) return t[r] < e[r] ? -1 : 1;
                            return 0 }(r, n); var r, n }; const M = z;

                    function F(t, e, r, n) { return new s(i.array, n, r) }

                    function $(t, e, r, n) { return F(0, 0, 1, r) }

                    function q(t, e) { C(t, i.array.majorEncoded, e.value) }

                    function H(t, e, r, n) { return new s(i.map, n, r) }

                    function V(t, e, r, n) { return H(0, 0, 1, r) }

                    function G(t, e) { C(t, i.map.majorEncoded, e.value) }

                    function W(t, e, r, n) { return new s(i.tag, r, 1) }

                    function J(t, e) { C(t, i.tag.majorEncoded, e.value) }

                    function K(t, e, r) { if (r) { if (!1 === r.allowNaN && Number.isNaN(t)) throw new Error("CBOR decode error: NaN values are not supported"); if (!1 === r.allowInfinity && (t === 1 / 0 || t === -1 / 0)) throw new Error("CBOR decode error: Infinity values are not supported") } return new s(i.float, t, e) }

                    function X(t, e, r) { const n = e.value; if (!1 === n) t.push([20 | i.float.majorEncoded]);
                        else if (!0 === n) t.push([21 | i.float.majorEncoded]);
                        else if (null === n) t.push([22 | i.float.majorEncoded]);
                        else if (void 0 === n) t.push([23 | i.float.majorEncoded]);
                        else { let e, i = !1;
                            r && !0 === r.float64 || (tt(n), e = et(Q, 1), n === e || Number.isNaN(n) ? (Q[0] = 249, t.push(Q.slice(0, 3)), i = !0) : (rt(n), e = nt(Q, 1), n === e && (Q[0] = 250, t.push(Q.slice(0, 5)), i = !0))), i || (o = n, Z.setFloat64(0, o, !1), e = ot(Q, 1), Q[0] = 251, t.push(Q.slice(0, 9))) } var o }
                    q.compareTokens = T.compareTokens, G.compareTokens = T.compareTokens, J.compareTokens = T.compareTokens, X.encodedSize = function(t, e) { const r = t.value; if (!1 === r || !0 === r || null == r) return 1; let n; if (!e || !0 !== e.float64) { if (tt(r), n = et(Q, 1), r === n || Number.isNaN(r)) return 3; if (rt(r), n = nt(Q, 1), r === n) return 5 } return 9 }; const Y = new ArrayBuffer(9),
                        Z = new DataView(Y, 1),
                        Q = new Uint8Array(Y, 0);

                    function tt(t) { if (t === 1 / 0) Z.setUint16(0, 31744, !1);
                        else if (t === -1 / 0) Z.setUint16(0, 64512, !1);
                        else if (Number.isNaN(t)) Z.setUint16(0, 32256, !1);
                        else { Z.setFloat32(0, t); const e = Z.getUint32(0),
                                r = (2139095040 & e) >> 23,
                                n = 8388607 & e; if (255 === r) Z.setUint16(0, 31744, !1);
                            else if (0 === r) Z.setUint16(0, (2147483648 & t) >> 16 | n >> 13, !1);
                            else { const t = r - 127;
                                t < -24 ? Z.setUint16(0, 0) : t < -14 ? Z.setUint16(0, (2147483648 & e) >> 16 | 1 << 24 + t, !1) : Z.setUint16(0, (2147483648 & e) >> 16 | t + 15 << 10 | n >> 13, !1) } } }

                    function et(t, e) { if (t.length - e < 2) throw new Error("CBOR decode error: not enough data for float16"); const r = (t[e] << 8) + t[e + 1]; if (31744 === r) return 1 / 0; if (64512 === r) return -1 / 0; if (32256 === r) return NaN; const n = r >> 10 & 31,
                            o = 1023 & r; let i; return i = 0 === n ? o * 2 ** -24 : 31 !== n ? (o + 1024) * 2 ** (n - 25) : 0 === o ? 1 / 0 : NaN, 32768 & r ? -i : i }

                    function rt(t) { Z.setFloat32(0, t, !1) }

                    function nt(t, e) { if (t.length - e < 4) throw new Error("CBOR decode error: not enough data for float32"); const r = (t.byteOffset || 0) + e; return new DataView(t.buffer, r, 4).getFloat32(0, !1) }

                    function ot(t, e) { if (t.length - e < 8) throw new Error("CBOR decode error: not enough data for float64"); const r = (t.byteOffset || 0) + e; return new DataView(t.buffer, r, 8).getFloat64(0, !1) }

                    function it(t, e, r) { throw new Error(`CBOR decode error: encountered invalid minor (${r}) for major ${t[e]>>>5}`) }

                    function st(t) { return () => { throw new Error(`CBOR decode error: ${t}`) } }
                    X.compareTokens = T.compareTokens; const at = []; for (let t = 0; t <= 23; t++) at[t] = it;
                    at[24] = function(t, e, r, n) { return new s(i.uint, x(t, e + 1, n), 2) }, at[25] = function(t, e, r, n) { return new s(i.uint, B(t, e + 1, n), 3) }, at[26] = function(t, e, r, n) { return new s(i.uint, S(t, e + 1, n), 5) }, at[27] = function(t, e, r, n) { return new s(i.uint, I(t, e + 1, n), 9) }, at[28] = it, at[29] = it, at[30] = it, at[31] = it; for (let t = 32; t <= 55; t++) at[t] = it;
                    at[56] = function(t, e, r, n) { return new s(i.negint, -1 - x(t, e + 1, n), 2) }, at[57] = function(t, e, r, n) { return new s(i.negint, -1 - B(t, e + 1, n), 3) }, at[58] = function(t, e, r, n) { return new s(i.negint, -1 - S(t, e + 1, n), 5) }, at[59] = function(t, e, r, n) { const o = I(t, e + 1, n); if ("bigint" != typeof o) { const t = -1 - o; if (t >= Number.MIN_SAFE_INTEGER) return new s(i.negint, t, 9) } if (!0 !== n.allowBigInt) throw new Error("CBOR decode error: integers outside of the safe integer range are not supported"); return new s(i.negint, O - BigInt(o), 9) }, at[60] = it, at[61] = it, at[62] = it, at[63] = it; for (let t = 64; t <= 87; t++) at[t] = R;
                    at[88] = function(t, e, r, n) { return D(t, e, 2, x(t, e + 1, n)) }, at[89] = function(t, e, r, n) { return D(t, e, 3, B(t, e + 1, n)) }, at[90] = function(t, e, r, n) { return D(t, e, 5, S(t, e + 1, n)) }, at[91] = function(t, e, r, n) { const o = I(t, e + 1, n); if ("bigint" == typeof o) throw new Error("CBOR decode error: 64-bit integer bytes lengths not supported"); return D(t, e, 9, o) }, at[92] = it, at[93] = it, at[94] = it, at[95] = st("indefinite length bytes/strings are not supported"); for (let t = 96; t <= 119; t++) at[t] = P;
                    at[120] = function(t, e, r, n) { return j(t, e, 2, x(t, e + 1, n)) }, at[121] = function(t, e, r, n) { return j(t, e, 3, B(t, e + 1, n)) }, at[122] = function(t, e, r, n) { return j(t, e, 5, S(t, e + 1, n)) }, at[123] = function(t, e, r, n) { const o = I(t, e + 1, n); if ("bigint" == typeof o) throw new Error("CBOR decode error: 64-bit integer string lengths not supported"); return j(t, e, 9, o) }, at[124] = it, at[125] = it, at[126] = it, at[127] = st("indefinite length bytes/strings are not supported"); for (let t = 128; t <= 151; t++) at[t] = $;
                    at[152] = function(t, e, r, n) { return F(0, 0, 2, x(t, e + 1, n)) }, at[153] = function(t, e, r, n) { return F(0, 0, 3, B(t, e + 1, n)) }, at[154] = function(t, e, r, n) { return F(0, 0, 5, S(t, e + 1, n)) }, at[155] = function(t, e, r, n) { const o = I(t, e + 1, n); if ("bigint" == typeof o) throw new Error("CBOR decode error: 64-bit integer array lengths not supported"); return F(0, 0, 9, o) }, at[156] = it, at[157] = it, at[158] = it, at[159] = function(t, e, r, n) { if (!1 === n.allowIndefinite) throw new Error("CBOR decode error: indefinite length items not allowed"); return F(0, 0, 1, 1 / 0) }; for (let t = 160; t <= 183; t++) at[t] = V;
                    at[184] = function(t, e, r, n) { return H(0, 0, 2, x(t, e + 1, n)) }, at[185] = function(t, e, r, n) { return H(0, 0, 3, B(t, e + 1, n)) }, at[186] = function(t, e, r, n) { return H(0, 0, 5, S(t, e + 1, n)) }, at[187] = function(t, e, r, n) { const o = I(t, e + 1, n); if ("bigint" == typeof o) throw new Error("CBOR decode error: 64-bit integer map lengths not supported"); return H(0, 0, 9, o) }, at[188] = it, at[189] = it, at[190] = it, at[191] = function(t, e, r, n) { if (!1 === n.allowIndefinite) throw new Error("CBOR decode error: indefinite length items not allowed"); return H(0, 0, 1, 1 / 0) }; for (let t = 192; t <= 215; t++) at[t] = W;
                    at[216] = function(t, e, r, n) { return new s(i.tag, x(t, e + 1, n), 2) }, at[217] = function(t, e, r, n) { return new s(i.tag, B(t, e + 1, n), 3) }, at[218] = function(t, e, r, n) { return new s(i.tag, S(t, e + 1, n), 5) }, at[219] = function(t, e, r, n) { return new s(i.tag, I(t, e + 1, n), 9) }, at[220] = it, at[221] = it, at[222] = it, at[223] = it; for (let t = 224; t <= 243; t++) at[t] = st("simple values are not supported");
                    at[244] = it, at[245] = it, at[246] = it, at[247] = function(t, e, r, n) { if (!1 === n.allowUndefined) throw new Error("CBOR decode error: undefined values are not supported"); return new s(i.undefined, void 0, 1) }, at[248] = st("simple values are not supported"), at[249] = function(t, e, r, n) { return K(et(t, e + 1), 3, n) }, at[250] = function(t, e, r, n) { return K(nt(t, e + 1), 5, n) }, at[251] = function(t, e, r, n) { return K(ot(t, e + 1), 9, n) }, at[252] = it, at[253] = it, at[254] = it, at[255] = function(t, e, r, n) { if (!1 === n.allowIndefinite) throw new Error("CBOR decode error: indefinite length items not allowed"); return new s(i.break, void 0, 1) }; const ct = []; for (let t = 0; t < 24; t++) ct[t] = new s(i.uint, t, 1); for (let t = -1; t >= -24; t--) ct[31 - t] = new s(i.negint, t, 1);
                    ct[64] = new s(i.bytes, new Uint8Array(0), 1), ct[96] = new s(i.string, "", 1), ct[128] = new s(i.array, 0, 1), ct[160] = new s(i.map, 0, 1), ct[244] = new s(i.false, !1, 1), ct[245] = new s(i.true, !0, 1), ct[246] = new s(i.null, null, 1); const ut = { float64: !1, mapSorter: function(t, e) { const r = Array.isArray(t[0]) ? t[0][0] : t[0],
                                    n = Array.isArray(e[0]) ? e[0][0] : e[0]; if (r.type !== n.type) return r.type.compare(n.type); const o = r.type.major,
                                    i = ht[o].compareTokens(r, n); return 0 === i && console.warn("WARNING: complex key types used, CBOR key sorting guarantees are gone"), i }, quickEncodeToken: function(t) { switch (t.type) {
                                    case i.false:
                                        return d([244]);
                                    case i.true:
                                        return d([245]);
                                    case i.null:
                                        return d([246]);
                                    case i.bytes:
                                        return t.value.length ? void 0 : d([64]);
                                    case i.string:
                                        return "" === t.value ? d([96]) : void 0;
                                    case i.array:
                                        return 0 === t.value ? d([128]) : void 0;
                                    case i.map:
                                        return 0 === t.value ? d([160]) : void 0;
                                    case i.uint:
                                        return t.value < 24 ? d([Number(t.value)]) : void 0;
                                    case i.negint:
                                        if (t.value >= -24) return d([31 - Number(t.value)]) } } },
                        ht = [];
                    ht[i.uint.major] = T, ht[i.negint.major] = U, ht[i.bytes.major] = z, ht[i.string.major] = M, ht[i.array.major] = q, ht[i.map.major] = G, ht[i.tag.major] = J, ht[i.float.major] = X; const ft = new v;
                    class lt { constructor(t, e) { this.obj = t, this.parent = e }
                        includes(t) { let e = this;
                            do { if (e.obj === t) return !0 } while (e = e.parent); return !1 }
                        static createCheck(t, e) { if (t && t.includes(e)) throw new Error("CBOR encode error: object contains circular references"); return new lt(e, t) } } const pt = { null: new s(i.null, null), undefined: new s(i.undefined, void 0), true: new s(i.true, !0), false: new s(i.false, !1), emptyArray: new s(i.array, 0), emptyMap: new s(i.map, 0) },
                        dt = { number: (t, e, r, n) => Number.isInteger(t) && Number.isSafeInteger(t) ? new s(t >= 0 ? i.uint : i.negint, t) : new s(i.float, t), bigint: (t, e, r, n) => t >= BigInt(0) ? new s(i.uint, t) : new s(i.negint, t), Uint8Array: (t, e, r, n) => new s(i.bytes, t), string: (t, e, r, n) => new s(i.string, t), boolean: (t, e, r, n) => t ? pt.true : pt.false, null: (t, e, r, n) => pt.null, undefined: (t, e, r, n) => pt.undefined, ArrayBuffer: (t, e, r, n) => new s(i.bytes, new Uint8Array(t)), DataView: (t, e, r, n) => new s(i.bytes, new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), Array(t, e, r, n) { if (!t.length) return !0 === r.addBreakTokens ? [pt.emptyArray, new s(i.break)] : pt.emptyArray;
                                n = lt.createCheck(n, t); const o = []; let a = 0; for (const e of t) o[a++] = yt(e, r, n); return r.addBreakTokens ? [new s(i.array, t.length), o, new s(i.break)] : [new s(i.array, t.length), o] }, Object(t, e, r, n) { const o = "Object" !== e,
                                    a = o ? t.keys() : Object.keys(t),
                                    c = o ? t.size : a.length; if (!c) return !0 === r.addBreakTokens ? [pt.emptyMap, new s(i.break)] : pt.emptyMap;
                                n = lt.createCheck(n, t); const u = []; let h = 0; for (const e of a) u[h++] = [yt(e, r, n), yt(o ? t.get(e) : t[e], r, n)]; return function(t, e) { e.mapSorter && t.sort(e.mapSorter) }(u, r), r.addBreakTokens ? [new s(i.map, c), u, new s(i.break)] : [new s(i.map, c), u] } };
                    dt.Map = dt.Object, dt.Buffer = dt.Uint8Array; for (const t of "Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64".split(" ")) dt[`${t}Array`] = dt.DataView;

                    function yt(t, e = {}, r) { const i = function(t) { if (null === t) return "null"; if (void 0 === t) return "undefined"; if (!0 === t || !1 === t) return "boolean"; const e = typeof t; return n.includes(e) ? e : "function" === e ? "Function" : Array.isArray(t) ? "Array" : function(t) { return t && t.constructor && t.constructor.isBuffer && t.constructor.isBuffer.call(null, t) }(t) ? "Buffer" : function(t) { const e = Object.prototype.toString.call(t).slice(8, -1); if (o.includes(e)) return e }(t) || "Object" }(t),
                            s = e && e.typeEncoders && e.typeEncoders[i] || dt[i]; if ("function" == typeof s) { const n = s(t, i, e, r); if (null != n) return n } const a = dt[i]; if (!a) throw new Error(`CBOR encode error: unsupported type: ${i}`); return a(t, i, e, r) }

                    function gt(t, e, r, n) { if (Array.isArray(e))
                            for (const o of e) gt(t, o, r, n);
                        else r[e.type.major](t, e, n) }

                    function wt(t, e, r) { const n = yt(t, r); if (!Array.isArray(n) && r.quickEncodeToken) { const t = r.quickEncodeToken(n); if (t) return t; const o = e[n.type.major]; if (o.encodedSize) { const t = o.encodedSize(n, r),
                                    e = new v(t); if (o(e, n, r), 1 !== e.chunks.length) throw new Error(`Unexpected error: pre-calculated length for ${n} was wrong`); return f(e.chunks[0]) } } return gt(ft, n, e, r), ft.toBytes(!0) } const bt = { strict: !1, allowIndefinite: !0, allowUndefined: !0, allowBigInt: !0 };
                    class mt { constructor(t, e = {}) { this.pos = 0, this.data = t, this.options = e }
                        done() { return this.pos >= this.data.length }
                        next() { const t = this.data[this.pos]; let e = ct[t]; if (void 0 === e) { const r = at[t]; if (!r) throw new Error(`CBOR decode error: no decoder for major type ${t>>>5} (byte 0x${t.toString(16).padStart(2,"0")})`); const n = 31 & t;
                                e = r(this.data, this.pos, n, this.options) } return this.pos += e.encodedLength, e } } const _t = Symbol.for("DONE"),
                        vt = Symbol.for("BREAK");

                    function Et(t, e) { if (t.done()) return _t; const r = t.next(); if (r.type === i.break) return vt; if (r.type.terminal) return r.value; if (r.type === i.array) return function(t, e, r) { const n = []; for (let o = 0; o < t.value; o++) { const i = Et(e, r); if (i === vt) { if (t.value === 1 / 0) break; throw new Error("CBOR decode error: got unexpected break to lengthed array") } if (i === _t) throw new Error(`CBOR decode error: found array but not enough entries (got ${o}, expected ${t.value})`);
                                n[o] = i } return n }(r, t, e); if (r.type === i.map) return function(t, e, r) { const n = !0 === r.useMaps,
                                o = n ? void 0 : {},
                                i = n ? new Map : void 0; for (let s = 0; s < t.value; s++) { const a = Et(e, r); if (a === vt) { if (t.value === 1 / 0) break; throw new Error("CBOR decode error: got unexpected break to lengthed map") } if (a === _t) throw new Error(`CBOR decode error: found map but not enough entries (got ${s} [no key], expected ${t.value})`); if (!0 !== n && "string" != typeof a) throw new Error(`CBOR decode error: non-string keys not supported (got ${typeof a})`); const c = Et(e, r); if (c === _t) throw new Error(`CBOR decode error: found map but not enough entries (got ${s} [no value], expected ${t.value})`);
                                n ? i.set(a, c) : o[a] = c } return n ? i : o }(r, t, e); if (r.type === i.tag) { if (e.tags && "function" == typeof e.tags[r.value]) { const n = Et(t, e); return e.tags[r.value](n) } throw new Error(`CBOR decode error: tag not supported (${r.value})`) } throw new Error("unsupported") } var kt = r(1362); const At = { float64: !0, typeEncoders: { Object: function(t) { if (t.asCID !== t) return null; const e = kt.CID.asCID(t); if (!e) return null; const r = new Uint8Array(e.bytes.byteLength + 1); return r.set(e.bytes, 1), [new s(i.tag, 42), new s(i.bytes, r)] }, undefined: function() { throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded") }, number: function(t) { if (Number.isNaN(t)) throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded"); if (t === 1 / 0 || t === -1 / 0) throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded"); return null } } },
                        xt = { allowIndefinite: !1, allowUndefined: !1, allowNaN: !1, allowInfinity: !1, allowBigInt: !0, strict: !0, useMaps: !1, tags: [] };
                    xt.tags[42] = function(t) { if (0 !== t[0]) throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00"); return kt.CID.decode(t.subarray(1)) }; const Bt = "dag-cbor",
                        St = 113,
                        It = t => { return e = t, r = At, r = Object.assign({}, ut, r), wt(e, ht, r); var e, r },
                        Tt = t => function(t, e) { if (!(t instanceof Uint8Array)) throw new Error("CBOR decode error: data to decode must be a Uint8Array"); const r = (e = Object.assign({}, bt, e)).tokenizer || new mt(t, e),
                                n = Et(r, e); if (n === _t) throw new Error("CBOR decode error: did not find any content to decode"); if (n === vt) throw new Error("CBOR decode error: got unexpected break"); if (!r.done()) throw new Error("CBOR decode error: too many terminals, data makes no sense"); return n }(t, xt) }, 3925: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { code: () => S, createLink: () => x, createNode: () => A, decode: () => T, encode: () => I, name: () => B, prepare: () => E, validate: () => k }); var n = r(1362); const o = new TextDecoder;

                    function i(t, e) { let r = 0; for (let n = 0;; n += 7) { if (n >= 64) throw new Error("protobuf: varint overflow"); if (e >= t.length) throw new Error("protobuf: unexpected end of data"); const o = t[e++]; if (r += n < 28 ? (127 & o) << n : (127 & o) * 2 ** n, o < 128) break } return [r, e] }

                    function s(t, e) { let r;
                        [r, e] = i(t, e); const n = e + r; if (r < 0 || n < 0) throw new Error("protobuf: invalid length"); if (n > t.length) throw new Error("protobuf: unexpected end of data"); return [t.subarray(e, n), n] }

                    function a(t, e) { let r; return [r, e] = i(t, e), [7 & r, r >> 3, e] }

                    function c(t) { const e = {},
                            r = t.length; let n = 0; for (; n < r;) { let r, c; if ([r, c, n] = a(t, n), 1 === c) { if (e.Hash) throw new Error("protobuf: (PBLink) duplicate Hash section"); if (2 !== r) throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Hash`); if (void 0 !== e.Name) throw new Error("protobuf: (PBLink) invalid order, found Name before Hash"); if (void 0 !== e.Tsize) throw new Error("protobuf: (PBLink) invalid order, found Tsize before Hash");
                                [e.Hash, n] = s(t, n) } else if (2 === c) { if (void 0 !== e.Name) throw new Error("protobuf: (PBLink) duplicate Name section"); if (2 !== r) throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Name`); if (void 0 !== e.Tsize) throw new Error("protobuf: (PBLink) invalid order, found Tsize before Name"); let i;
                                [i, n] = s(t, n), e.Name = o.decode(i) } else { if (3 !== c) throw new Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${c}`); if (void 0 !== e.Tsize) throw new Error("protobuf: (PBLink) duplicate Tsize section"); if (0 !== r) throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Tsize`);
                                [e.Tsize, n] = i(t, n) } } if (n > r) throw new Error("protobuf: (PBLink) unexpected end of data"); return e } const u = new TextEncoder,
                        h = 2 ** 32;

                    function f(t, e) { let r = e.length; if ("number" == typeof t.Tsize) { if (t.Tsize < 0) throw new Error("Tsize cannot be negative"); if (!Number.isSafeInteger(t.Tsize)) throw new Error("Tsize too large for encoding");
                            r = p(e, r, t.Tsize) - 1, e[r] = 24 } if ("string" == typeof t.Name) { const n = u.encode(t.Name);
                            r -= n.length, e.set(n, r), r = p(e, r, n.length) - 1, e[r] = 18 } return t.Hash && (r -= t.Hash.length, e.set(t.Hash, r), r = p(e, r, t.Hash.length) - 1, e[r] = 10), e.length - r }

                    function l(t) { let e = 0; if (t.Hash) { const r = t.Hash.length;
                            e += 1 + r + d(r) } if ("string" == typeof t.Name) { const r = u.encode(t.Name).length;
                            e += 1 + r + d(r) } return "number" == typeof t.Tsize && (e += 1 + d(t.Tsize)), e }

                    function p(t, e, r) { const n = e -= d(r); for (; r >= 2147483648;) t[e++] = 127 & r | 128, r /= 128; for (; r >= 128;) t[e++] = 127 & r | 128, r >>>= 7; return t[e] = r, n }

                    function d(t) { return t % 2 == 0 && t++, Math.floor((function(t) { let e = 0; return t >= h && (t = Math.floor(t / h), e = 32), t >= 65536 && (t >>>= 16, e += 16), t >= 256 && (t >>>= 8, e += 8), e + y[t] }(t) + 6) / 7) } const y = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                        g = ["Data", "Links"],
                        w = ["Hash", "Name", "Tsize"],
                        b = new TextEncoder;

                    function m(t, e) { if (t === e) return 0; const r = t.Name ? b.encode(t.Name) : [],
                            n = e.Name ? b.encode(e.Name) : []; let o = r.length,
                            i = n.length; for (let t = 0, e = Math.min(o, i); t < e; ++t)
                            if (r[t] !== n[t]) { o = r[t], i = n[t]; break }
                        return o < i ? -1 : i < o ? 1 : 0 }

                    function _(t, e) { return !Object.keys(t).some((t => !e.includes(t))) }

                    function v(t) { if ("object" == typeof t.asCID) { const e = n.CID.asCID(t); if (!e) throw new TypeError("Invalid DAG-PB form"); return { Hash: e } } if ("object" != typeof t || Array.isArray(t)) throw new TypeError("Invalid DAG-PB form"); const e = {}; if (t.Hash) { let r = n.CID.asCID(t.Hash); try { r || ("string" == typeof t.Hash ? r = n.CID.parse(t.Hash) : t.Hash instanceof Uint8Array && (r = n.CID.decode(t.Hash))) } catch (t) { throw new TypeError(`Invalid DAG-PB form: ${t.message}`) }
                            r && (e.Hash = r) } if (!e.Hash) throw new TypeError("Invalid DAG-PB form"); return "string" == typeof t.Name && (e.Name = t.Name), "number" == typeof t.Tsize && (e.Tsize = t.Tsize), e }

                    function E(t) { if ((t instanceof Uint8Array || "string" == typeof t) && (t = { Data: t }), "object" != typeof t || Array.isArray(t)) throw new TypeError("Invalid DAG-PB form"); const e = {}; if (void 0 !== t.Data)
                            if ("string" == typeof t.Data) e.Data = b.encode(t.Data);
                            else { if (!(t.Data instanceof Uint8Array)) throw new TypeError("Invalid DAG-PB form");
                                e.Data = t.Data }
                        if (void 0 !== t.Links) { if (!Array.isArray(t.Links)) throw new TypeError("Invalid DAG-PB form");
                            e.Links = t.Links.map(v), e.Links.sort(m) } else e.Links = []; return e }

                    function k(t) { if (!t || "object" != typeof t || Array.isArray(t)) throw new TypeError("Invalid DAG-PB form"); if (!_(t, g)) throw new TypeError("Invalid DAG-PB form (extraneous properties)"); if (void 0 !== t.Data && !(t.Data instanceof Uint8Array)) throw new TypeError("Invalid DAG-PB form (Data must be a Uint8Array)"); if (!Array.isArray(t.Links)) throw new TypeError("Invalid DAG-PB form (Links must be an array)"); for (let e = 0; e < t.Links.length; e++) { const r = t.Links[e]; if (!r || "object" != typeof r || Array.isArray(r)) throw new TypeError("Invalid DAG-PB form (bad link object)"); if (!_(r, w)) throw new TypeError("Invalid DAG-PB form (extraneous properties on link object)"); if (!r.Hash) throw new TypeError("Invalid DAG-PB form (link must have a Hash)"); if (r.Hash.asCID !== r.Hash) throw new TypeError("Invalid DAG-PB form (link Hash must be a CID)"); if (void 0 !== r.Name && "string" != typeof r.Name) throw new TypeError("Invalid DAG-PB form (link Name must be a string)"); if (void 0 !== r.Tsize && ("number" != typeof r.Tsize || r.Tsize % 1 != 0)) throw new TypeError("Invalid DAG-PB form (link Tsize must be an integer)"); if (e > 0 && -1 === m(r, t.Links[e - 1])) throw new TypeError("Invalid DAG-PB form (links must be sorted by Name bytes)") } }

                    function A(t, e = []) { return E({ Data: t, Links: e }) }

                    function x(t, e, r) { return v({ Hash: r, Name: t, Tsize: e }) } const B = "dag-pb",
                        S = 112;

                    function I(t) { k(t); const e = {}; return t.Links && (e.Links = t.Links.map((t => { const e = {}; return t.Hash && (e.Hash = t.Hash.bytes), void 0 !== t.Name && (e.Name = t.Name), void 0 !== t.Tsize && (e.Tsize = t.Tsize), e }))), t.Data && (e.Data = t.Data),
                            function(t) { const e = function(t) { let e = 0; if (t.Data) { const r = t.Data.length;
                                            e += 1 + r + d(r) } if (t.Links)
                                            for (const r of t.Links) { const t = l(r);
                                                e += 1 + t + d(t) }
                                        return e }(t),
                                    r = new Uint8Array(e); let n = e; if (t.Data && (n -= t.Data.length, r.set(t.Data, n), n = p(r, n, t.Data.length) - 1, r[n] = 10), t.Links)
                                    for (let e = t.Links.length - 1; e >= 0; e--) { const o = f(t.Links[e], r.subarray(0, n));
                                        n -= o, n = p(r, n, o) - 1, r[n] = 18 }
                                return r }(e) }

                    function T(t) { const e = function(t) { const e = t.length; let r, n, o = 0,
                                    i = !1; for (; o < e;) { let e, u; if ([e, u, o] = a(t, o), 2 !== e) throw new Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${e}`); if (1 === u) { if (n) throw new Error("protobuf: (PBNode) duplicate Data section");
                                        [n, o] = s(t, o), r && (i = !0) } else { if (2 !== u) throw new Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${u}`); { if (i) throw new Error("protobuf: (PBNode) duplicate Links section"); let e;
                                            r || (r = []), [e, o] = s(t, o), r.push(c(e)) } } } if (o > e) throw new Error("protobuf: (PBNode) unexpected end of data"); const u = {}; return n && (u.Data = n), u.Links = r || [], u }(t),
                            r = {}; return e.Data && (r.Data = e.Data), e.Links && (r.Links = e.Links.map((t => { const e = {}; try { e.Hash = n.CID.decode(t.Hash) } catch (t) {} if (!e.Hash) throw new Error("Invalid Hash field found in link, expected CID"); return void 0 !== t.Name && (e.Name = t.Name), void 0 !== t.Tsize && (e.Tsize = t.Tsize), e }))), r } }, 7280: (t, e, r) => { "use strict";
                    r.d(e, { kU: () => u, Dp: () => c, ET: () => h }); var n = r(5934);
                    class o { constructor(t, e, r) { this.name = t, this.prefix = e, this.baseEncode = r }
                        encode(t) { if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`; throw Error("Unknown type, must be binary type") } }
                    class i { constructor(t, e, r) { this.name = t, this.prefix = e, this.baseDecode = r }
                        decode(t) { if ("string" != typeof t) throw Error("Can only multibase decode strings"); switch (t[0]) {
                                case this.prefix:
                                    return this.baseDecode(t.slice(1));
                                default:
                                    throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`) } }
                        or(t) { const e = {
                                [this.prefix]: this, ...t.decoders || {
                                    [t.prefix]: t } }; return new s(e) } }
                    class s { constructor(t) { this.decoders = t }
                        or(t) { const e = t.decoders || {
                                [t.prefix]: t }; return new s({...this.decoders, ...e }) }
                        decode(t) { const e = t[0],
                                r = this.decoders[e]; if (r) return r.decode(t); throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`) } }
                    class a { constructor(t, e, r, n) { this.name = t, this.prefix = e, this.baseEncode = r, this.baseDecode = n, this.encoder = new o(t, e, r), this.decoder = new i(t, e, n) }
                        encode(t) { return this.encoder.encode(t) }
                        decode(t) { return this.decoder.decode(t) } } const c = ({ name: t, prefix: e, encode: r, decode: n }) => new a(t, e, r, n),
                        u = ({ prefix: t, name: e, alphabet: r }) => { const { encode: o, decode: i } = function(t, e) { if (t.length >= 255) throw new TypeError("Alphabet too long"); for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255; for (var o = 0; o < t.length; o++) { var i = t.charAt(o),
                                        s = i.charCodeAt(0); if (255 !== r[s]) throw new TypeError(i + " is ambiguous");
                                    r[s] = o } var a = t.length,
                                    c = t.charAt(0),
                                    u = Math.log(a) / Math.log(256),
                                    h = Math.log(256) / Math.log(a);

                                function f(t) { if ("string" != typeof t) throw new TypeError("Expected String"); if (0 === t.length) return new Uint8Array; var e = 0; if (" " !== t[e]) { for (var n = 0, o = 0; t[e] === c;) n++, e++; for (var i = (t.length - e) * u + 1 >>> 0, s = new Uint8Array(i); t[e];) { var h = r[t.charCodeAt(e)]; if (255 === h) return; for (var f = 0, l = i - 1;
                                                (0 !== h || f < o) && -1 !== l; l--, f++) h += a * s[l] >>> 0, s[l] = h % 256 >>> 0, h = h / 256 >>> 0; if (0 !== h) throw new Error("Non-zero carry");
                                            o = f, e++ } if (" " !== t[e]) { for (var p = i - o; p !== i && 0 === s[p];) p++; for (var d = new Uint8Array(n + (i - p)), y = n; p !== i;) d[y++] = s[p++]; return d } } } return { encode: function(e) { if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw new TypeError("Expected Uint8Array"); if (0 === e.length) return ""; for (var r = 0, n = 0, o = 0, i = e.length; o !== i && 0 === e[o];) o++, r++; for (var s = (i - o) * h + 1 >>> 0, u = new Uint8Array(s); o !== i;) { for (var f = e[o], l = 0, p = s - 1;
                                                (0 !== f || l < n) && -1 !== p; p--, l++) f += 256 * u[p] >>> 0, u[p] = f % a >>> 0, f = f / a >>> 0; if (0 !== f) throw new Error("Non-zero carry");
                                            n = l, o++ } for (var d = s - n; d !== s && 0 === u[d];) d++; for (var y = c.repeat(r); d < s; ++d) y += t.charAt(u[d]); return y }, decodeUnsafe: f, decode: function(t) { var r = f(t); if (r) return r; throw new Error(`Non-${e} character`) } } }(r, e); return c({ prefix: t, name: e, encode: o, decode: t => (0, n.coerce)(i(t)) }) },
                        h = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => c({ prefix: e, name: t, encode: t => ((t, e, r) => { const n = "=" === e[e.length - 1],
                                    o = (1 << r) - 1; let i = "",
                                    s = 0,
                                    a = 0; for (let n = 0; n < t.length; ++n)
                                    for (a = a << 8 | t[n], s += 8; s > r;) s -= r, i += e[o & a >> s]; if (s && (i += e[o & a << r - s]), n)
                                    for (; i.length * r & 7;) i += "="; return i })(t, n, r), decode: e => ((t, e, r, n) => { const o = {}; for (let t = 0; t < e.length; ++t) o[e[t]] = t; let i = t.length; for (;
                                    "=" === t[i - 1];) --i; const s = new Uint8Array(i * r / 8 | 0); let a = 0,
                                    c = 0,
                                    u = 0; for (let e = 0; e < i; ++e) { const i = o[t[e]]; if (void 0 === i) throw new SyntaxError(`Non-${n} character`);
                                    c = c << r | i, a += r, a >= 8 && (a -= 8, s[u++] = 255 & c >> a) } if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data"); return s })(e, n, r, t) }) }, 2817: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { base32: () => o, base32upper: () => i, base32pad: () => s, base32padupper: () => a, base32hex: () => c, base32hexupper: () => u, base32hexpad: () => h, base32hexpadupper: () => f, base32z: () => l }); var n = r(7280); const o = (0, n.ET)({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }),
                        i = (0, n.ET)({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }),
                        s = (0, n.ET)({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }),
                        a = (0, n.ET)({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }),
                        c = (0, n.ET)({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }),
                        u = (0, n.ET)({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }),
                        h = (0, n.ET)({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }),
                        f = (0, n.ET)({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }),
                        l = (0, n.ET)({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 }) }, 9086: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { base58btc: () => o, base58flickr: () => i }); var n = r(7280); const o = (0, n.kU)({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }),
                        i = (0, n.kU)({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" }) }, 8750: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { CID: () => D.k0, bases: () => R, bytes: () => D.aI, codecs: () => z, digest: () => D.uR, hasher: () => D.C7, hashes: () => L, varint: () => D.PP }); var n = {};
                    r.r(n), r.d(n, { identity: () => p }); var o = {};
                    r.r(o), r.d(o, { base2: () => d }); var i = {};
                    r.r(i), r.d(i, { base8: () => y }); var s = {};
                    r.r(s), r.d(s, { base10: () => g }); var a = {};
                    r.r(a), r.d(a, { base16: () => w, base16upper: () => b }); var c = {};
                    r.r(c), r.d(c, { base36: () => _, base36upper: () => v }); var u = {};
                    r.r(u), r.d(u, { base64: () => k, base64pad: () => A, base64url: () => x, base64urlpad: () => B }); var h = {};
                    r.r(h), r.d(h, { code: () => O, decode: () => U, encode: () => N, name: () => C }); var f = r(7280),
                        l = r(5934); const p = (0, f.Dp)({ prefix: "\0", name: "identity", encode: t => (0, l.toString)(t), decode: t => (0, l.fromString)(t) }),
                        d = (0, f.ET)({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
                        y = (0, f.ET)({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
                        g = (0, f.kU)({ prefix: "9", name: "base10", alphabet: "0123456789" }),
                        w = (0, f.ET)({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }),
                        b = (0, f.ET)({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 }); var m = r(2817); const _ = (0, f.kU)({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }),
                        v = (0, f.kU)({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" }); var E = r(9086); const k = (0, f.ET)({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }),
                        A = (0, f.ET)({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }),
                        x = (0, f.ET)({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }),
                        B = (0, f.ET)({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 }); var S = r(6155),
                        I = r(8103),
                        T = r(6945); const { name: C, code: O, encode: N, decode: U } = { name: "json", code: 512, encode: t => (new TextEncoder).encode(JSON.stringify(t)), decode: t => JSON.parse((new TextDecoder).decode(t)) }; var D = r(6441); const R = {...n, ...o, ...i, ...s, ...a, ...m, ...c, ...E, ...u },
                        L = {...S, ...I },
                        z = { raw: T, json: h } }, 5934: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { equals: () => s, coerce: () => a, isBinary: () => c, fromHex: () => i, toHex: () => o, fromString: () => u, toString: () => h, empty: () => n }); const n = new Uint8Array(0),
                        o = t => t.reduce(((t, e) => t + e.toString(16).padStart(2, "0")), ""),
                        i = t => { const e = t.match(/../g); return e ? new Uint8Array(e.map((t => parseInt(t, 16)))) : n },
                        s = (t, e) => { if (t === e) return !0; if (t.byteLength !== e.byteLength) return !1; for (let r = 0; r < t.byteLength; r++)
                                if (t[r] !== e[r]) return !1;
                            return !0 },
                        a = t => { if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name) return t; if (t instanceof ArrayBuffer) return new Uint8Array(t); if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength); throw new Error("Unknown type, must be binary type") },
                        c = t => t instanceof ArrayBuffer || ArrayBuffer.isView(t),
                        u = t => (new TextEncoder).encode(t),
                        h = t => (new TextDecoder).decode(t) }, 1362: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { CID: () => c }); var n = r(6932),
                        o = r(8924),
                        i = r(9086),
                        s = r(2817),
                        a = r(5934);
                    class c { constructor(t, e, r, n) { this.code = e, this.version = t, this.multihash = r, this.bytes = n, this.byteOffset = n.byteOffset, this.byteLength = n.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, { byteOffset: w, byteLength: w, code: g, version: g, multihash: g, bytes: g, _baseCache: w, asCID: w }) }
                        toV0() { switch (this.version) {
                                case 0:
                                    return this;
                                default:
                                    { const { code: t, multihash: e } = this; if (t !== l) throw new Error("Cannot convert a non dag-pb CID to CIDv0"); if (e.code !== p) throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0"); return c.createV0(e) } } }
                        toV1() { switch (this.version) {
                                case 0:
                                    { const { code: t, digest: e } = this.multihash, r = o.create(t, e); return c.createV1(this.code, r) }
                                case 1:
                                    return this;
                                default:
                                    throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`) } }
                        equals(t) { return t && this.code === t.code && this.version === t.version && o.equals(this.multihash, t.multihash) }
                        toString(t) { const { bytes: e, version: r, _baseCache: n } = this; switch (r) {
                                case 0:
                                    return h(e, n, t || i.base58btc.encoder);
                                default:
                                    return f(e, n, t || s.base32.encoder) } }
                        toJSON() { return { code: this.code, version: this.version, hash: this.multihash.bytes } }
                        get[Symbol.toStringTag]() { return "CID" }[Symbol.for("nodejs.util.inspect.custom")]() { return "CID(" + this.toString() + ")" }
                        static isCID(t) { return b(/^0\.0/, m), !(!t || !t[y] && t.asCID !== t) }
                        get toBaseEncodedString() { throw new Error("Deprecated, use .toString()") }
                        get codec() { throw new Error('"codec" property is deprecated, use integer "code" property instead') }
                        get buffer() { throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead") }
                        get multibaseName() { throw new Error('"multibaseName" property is deprecated') }
                        get prefix() { throw new Error('"prefix" property is deprecated') }
                        static asCID(t) { if (t instanceof c) return t; if (null != t && t.asCID === t) { const { version: e, code: r, multihash: n, bytes: o } = t; return new c(e, r, n, o || d(e, r, n.bytes)) } if (null != t && !0 === t[y]) { const { version: e, multihash: r, code: n } = t, i = o.decode(r); return c.create(e, n, i) } return null }
                        static create(t, e, r) { if ("number" != typeof e) throw new Error("String codecs are no longer supported"); switch (t) {
                                case 0:
                                    if (e !== l) throw new Error(`Version 0 CID must use dag-pb (code: ${l}) block encoding`); return new c(t, e, r, r.bytes);
                                case 1:
                                    { const n = d(t, e, r.bytes); return new c(t, e, r, n) }
                                default:
                                    throw new Error("Invalid version") } }
                        static createV0(t) { return c.create(0, l, t) }
                        static createV1(t, e) { return c.create(1, t, e) }
                        static decode(t) { const [e, r] = c.decodeFirst(t); if (r.length) throw new Error("Incorrect length"); return e }
                        static decodeFirst(t) { const e = c.inspectBytes(t),
                                r = e.size - e.multihashSize,
                                n = (0, a.coerce)(t.subarray(r, r + e.multihashSize)); if (n.byteLength !== e.multihashSize) throw new Error("Incorrect length"); const i = n.subarray(e.multihashSize - e.digestSize),
                                s = new o.Digest(e.multihashCode, e.digestSize, i, n); return [0 === e.version ? c.createV0(s) : c.createV1(e.codec, s), t.subarray(e.size)] }
                        static inspectBytes(t) { let e = 0; const r = () => { const [r, o] = n.decode(t.subarray(e)); return e += o, r }; let o = r(),
                                i = l; if (18 === o ? (o = 0, e = 0) : 1 === o && (i = r()), 0 !== o && 1 !== o) throw new RangeError(`Invalid CID version ${o}`); const s = e,
                                a = r(),
                                c = r(),
                                u = e + c; return { version: o, codec: i, multihashCode: a, digestSize: c, multihashSize: u - s, size: u } }
                        static parse(t, e) { const [r, n] = u(t, e), o = c.decode(n); return o._baseCache.set(r, t), o } } const u = (t, e) => { switch (t[0]) {
                                case "Q":
                                    { const r = e || i.base58btc; return [i.base58btc.prefix, r.decode(`${i.base58btc.prefix}${t}`)] }
                                case i.base58btc.prefix:
                                    { const r = e || i.base58btc; return [i.base58btc.prefix, r.decode(t)] }
                                case s.base32.prefix:
                                    { const r = e || s.base32; return [s.base32.prefix, r.decode(t)] }
                                default:
                                    if (null == e) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided"); return [t[0], e.decode(t)] } },
                        h = (t, e, r) => { const { prefix: n } = r; if (n !== i.base58btc.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`); const o = e.get(n); if (null == o) { const o = r.encode(t).slice(1); return e.set(n, o), o } return o },
                        f = (t, e, r) => { const { prefix: n } = r, o = e.get(n); if (null == o) { const o = r.encode(t); return e.set(n, o), o } return o },
                        l = 112,
                        p = 18,
                        d = (t, e, r) => { const o = n.encodingLength(t),
                                i = o + n.encodingLength(e),
                                s = new Uint8Array(i + r.byteLength); return n.encodeTo(t, s, 0), n.encodeTo(e, s, o), s.set(r, i), s },
                        y = Symbol.for("@ipld/js-cid/CID"),
                        g = { writable: !1, configurable: !1, enumerable: !0 },
                        w = { writable: !1, enumerable: !1, configurable: !1 },
                        b = (t, e) => { if (!t.test("0.0.0-dev")) throw new Error(e);
                            console.warn(e) },
                        m = "CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n" }, 6945: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { name: () => i, code: () => s, encode: () => a, decode: () => c }); var n = r(5934); const o = t => (0, n.coerce)(t),
                        { name: i, code: s, encode: a, decode: c } = { name: "raw", code: 85, decode: o, encode: o } }, 8924: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { create: () => i, decode: () => s, equals: () => a, Digest: () => c }); var n = r(5934),
                        o = r(6932); const i = (t, e) => { const r = e.byteLength,
                                n = o.encodingLength(t),
                                i = n + o.encodingLength(r),
                                s = new Uint8Array(i + r); return o.encodeTo(t, s, 0), o.encodeTo(r, s, n), s.set(e, i), new c(t, r, e, s) },
                        s = t => { const e = (0, n.coerce)(t),
                                [r, i] = o.decode(e),
                                [s, a] = o.decode(e.subarray(i)),
                                u = e.subarray(i + a); if (u.byteLength !== s) throw new Error("Incorrect length"); return new c(r, s, u, e) },
                        a = (t, e) => t === e || t.code === e.code && t.size === e.size && (0, n.equals)(t.bytes, e.bytes);
                    class c { constructor(t, e, r, n) { this.code = t, this.size = e, this.digest = r, this.bytes = n } } }, 7225: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { from: () => o, Hasher: () => i }); var n = r(8924); const o = ({ name: t, code: e, encode: r }) => new i(t, e, r);
                    class i { constructor(t, e, r) { this.name = t, this.code = e, this.encode = r }
                        async digest(t) { if (t instanceof Uint8Array) { const e = await this.encode(t); return n.create(this.code, e) } throw Error("Unknown type, must be binary type") } } }, 8103: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { identity: () => i }); var n = r(7225),
                        o = r(5934); const i = (0, n.from)({ name: "identity", code: 0, encode: t => (0, o.coerce)(t) }) }, 6155: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { sha256: () => i, sha512: () => s }); var n = r(7225); const o = t => async e => new Uint8Array(await crypto.subtle.digest(t, e)),
                        i = (0, n.from)({ name: "sha2-256", code: 18, encode: o("SHA-256") }),
                        s = (0, n.from)({ name: "sha2-512", code: 19, encode: o("SHA-512") }) }, 6441: (t, e, r) => { "use strict";
                    r.d(e, { k0: () => n.CID, C7: () => s, uR: () => a, PP: () => o, aI: () => i }); var n = r(1362),
                        o = r(6932),
                        i = r(5934),
                        s = r(7225),
                        a = r(8924) }, 6932: (t, e, r) => { "use strict";
                    r.r(e), r.d(e, { decode: () => d, encodeTo: () => y, encodingLength: () => g }); var n = Math.pow(2, 31),
                        o = Math.pow(2, 7),
                        i = Math.pow(2, 14),
                        s = Math.pow(2, 21),
                        a = Math.pow(2, 28),
                        c = Math.pow(2, 35),
                        u = Math.pow(2, 42),
                        h = Math.pow(2, 49),
                        f = Math.pow(2, 56),
                        l = Math.pow(2, 63); const p = { encode: function t(e, r, o) { r = r || []; for (var i = o = o || 0; e >= n;) r[o++] = 255 & e | 128, e /= 128; for (; - 128 & e;) r[o++] = 255 & e | 128, e >>>= 7; return r[o] = 0 | e, t.bytes = o - i + 1, r }, decode: function t(e, r) { var n, o = 0,
                                    i = 0,
                                    s = r = r || 0,
                                    a = e.length;
                                do { if (s >= a) throw t.bytes = 0, new RangeError("Could not decode varint");
                                    n = e[s++], o += i < 28 ? (127 & n) << i : (127 & n) * Math.pow(2, i), i += 7 } while (n >= 128); return t.bytes = s - r, o }, encodingLength: function(t) { return t < o ? 1 : t < i ? 2 : t < s ? 3 : t < a ? 4 : t < c ? 5 : t < u ? 6 : t < h ? 7 : t < f ? 8 : t < l ? 9 : 10 } },
                        d = t => [p.decode(t), p.decode.bytes],
                        y = (t, e, r = 0) => (p.encode(t, e, r), e),
                        g = t => p.encodingLength(t) } },
            __webpack_module_cache__ = {};

        function __webpack_require__(t) { var e = __webpack_module_cache__[t]; if (void 0 !== e) return e.exports; var r = __webpack_module_cache__[t] = { id: t, loaded: !1, exports: {} }; return __webpack_modules__[t].call(r.exports, r, r.exports, __webpack_require__), r.loaded = !0, r.exports }
        __webpack_require__.d = (t, e) => { for (var r in e) __webpack_require__.o(e, r) && !__webpack_require__.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] }) }, __webpack_require__.g = function() { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (t) { if ("object" == typeof window) return window } }(), __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), __webpack_require__.r = t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, __webpack_require__.nmd = t => (t.paths = [], t.children || (t.children = []), t); var __webpack_exports__ = {};
        (() => { "use strict";

                function t(t, e, r) { const n = function(t) { if ("function" == typeof t.next) return t; if ("function" == typeof t[Symbol.iterator]) return t[Symbol.iterator](); if ("function" == typeof t[Symbol.asyncIterator]) return t[Symbol.asyncIterator](); throw new TypeError('"values" does not to conform to any of the iterator or iterable protocols') }(r),
                        o = [],
                        i = []; let s = !1,
                        a = !1,
                        c = 0,
                        u = null;

                    function h() { for (; i.length > 0 && o.length > 0;) { const { resolve: t } = i.shift();
                            t({ done: !1, value: o.shift() }) } for (; i.length > 0 && 0 === c && s;) { const { resolve: t, reject: e } = i.shift();
                            u ? (e(u), u = null) : t({ done: !0, value: void 0 }) } }
                    async function f() { if (s) h();
                        else if (!(a || c + o.length >= t)) { a = !0, c++; try { const { done: t, value: r } = await n.next();
                                t ? (s = !0, c--, h()) : async function(t) { try { const r = await e(t);
                                        o.push(r) } catch (t) { s = !0, u = t }
                                    c--, h(), f() }(r) } catch (t) { s = !0, c--, u = t, h() }
                            a = !1, f() } } const l = { next: async function() { if (0 === o.length) { const t = function() { let t, e; return { promise: new Promise(((r, n) => { e = r, t = n })), reject: t, resolve: e } }(); return i.push(t), f(), t.promise } const t = o.shift(); return f(), { done: !1, value: t } }, [Symbol.asyncIterator]: () => l }; return l }

                function e(r, n, o) { return void 0 === n ? (t, n) => n ? e(r, t, n) : e(r, t) : void 0 === o ? t => e(r, n, t) : t(r, n, o) } var r = __webpack_require__(2693),
                    n = __webpack_require__(3093),
                    o = __webpack_require__(618),
                    i = __webpack_require__(4676),
                    s = __webpack_require__(1362),
                    a = __webpack_require__(8924),
                    c = __webpack_require__(1082);
                async function u(t) { const e = await t.upTo(8),
                        r = i.decode(e); return t.seek(i.decode.bytes), r }
                async function h(t) { const e = await u(t); if (0 === e) throw new Error("Invalid CAR header (zero length)"); const r = await t.exactly(e);
                    t.seek(e); const n = (0, c.decode)(r); if (null == n || Array.isArray(n) || "object" != typeof n) throw new Error("Invalid CAR header format"); if (1 !== n.version) { if ("string" == typeof n.version) throw new Error(`Invalid CAR version: "${n.version}"`); throw new Error(`Invalid CAR version: ${n.version}`) } if (!Array.isArray(n.roots)) throw new Error("Invalid CAR header format"); if (Object.keys(n).filter((t => "roots" !== t && "version" !== t)).length) throw new Error("Invalid CAR header format"); return n }
                async function f(t) { const e = await t.exactly(2); if (18 === e[0] && 32 === e[1]) { const e = await t.exactly(34);
                        t.seek(34); const r = a.decode(e); return s.CID.create(0, 112, r) } const r = await u(t); if (1 !== r) throw new Error(`Unexpected CID version (${r})`); const n = await u(t),
                        o = await async function(t) { const e = await t.upTo(8);
                            i.decode(e); const r = i.decode.bytes,
                                n = i.decode(e.subarray(i.decode.bytes)),
                                o = r + i.decode.bytes + n,
                                s = await t.exactly(o); return t.seek(o), s }(t),
                        c = a.decode(o); return s.CID.create(r, n, c) }
                async function l(t) { const e = t.pos; let r = await u(t); if (0 === r) throw new Error("Invalid CAR section (zero length)"); return r += t.pos - e, { cid: await f(t), length: r, blockLength: r - (t.pos - e) } }
                async function p(t) { const { cid: e, blockLength: r } = await l(t), n = await t.exactly(r); return t.seek(r), { bytes: n, cid: e } }
                async function d(t) { const e = t.pos,
                        { cid: r, length: n, blockLength: o } = await l(t),
                        i = { cid: r, length: n, blockLength: o, offset: e, blockOffset: t.pos }; return t.seek(i.blockLength), i }

                function y(t) { const e = h(t); return { header: () => e, async * blocks() { for (await e;
                                (await t.upTo(8)).length > 0;) yield await p(t) }, async * blocksIndex() { for (await e;
                                (await t.upTo(8)).length > 0;) yield await d(t) } } }

                function g(t) { let e = 0; return { upTo: async r => t.subarray(e, e + Math.min(r, t.length - e)), async exactly(r) { if (r > t.length - e) throw new Error("Unexpected end of data"); return t.subarray(e, e + r) }, seek(t) { e += t }, get pos() { return e } } }

                function w(t) { const e = t[Symbol.asyncIterator](); return function(t) { let e = 0,
                            r = 0,
                            n = 0,
                            o = new Uint8Array(0); const i = async e => { r = o.length - n; const i = [o.subarray(n)]; for (; r < e;) { const e = await t(); if (null == e) break;
                                r < 0 ? e.length > r && i.push(e.subarray(-r)) : i.push(e), r += e.length }
                            o = new Uint8Array(i.reduce(((t, e) => t + e.length), 0)); let s = 0; for (const t of i) o.set(t, s), s += t.length;
                            n = 0 }; return { upTo: async t => (o.length - n < t && await i(t), o.subarray(n, n + Math.min(o.length - n, t))), async exactly(t) { if (o.length - n < t && await i(t), o.length - n < t) throw new Error("Unexpected end of data"); return o.subarray(n, n + t) }, seek(t) { e += t, n += t }, get pos() { return e } } }((async function() { const t = await e.next(); return t.done ? null : t.value })) }
                class b { constructor(t, e, r) { this._version = t, this._roots = e, this._blocks = r, this._keys = r.map((t => t.cid.toString())) }
                    get version() { return this._version }
                    async getRoots() { return this._roots }
                    async has(t) { return this._keys.indexOf(t.toString()) > -1 }
                    async get(t) { const e = this._keys.indexOf(t.toString()); return e > -1 ? this._blocks[e] : void 0 }
                    async * blocks() { for (const t of this._blocks) yield t }
                    async * cids() { for (const t of this._blocks) yield t.cid }
                    static async fromBytes(t) { if (!(t instanceof Uint8Array)) throw new TypeError("fromBytes() requires a Uint8Array"); return m(g(t)) }
                    static async fromIterable(t) { if (!t || "function" != typeof t[Symbol.asyncIterator]) throw new TypeError("fromIterable() requires an async iterable"); return m(w(t)) } }
                async function m(t) { const e = y(t),
                        { version: r, roots: n } = await e.header(),
                        o = []; for await (const t of e.blocks()) o.push(t); return new b(r, n, o) }
                Symbol.asyncIterator;
                class _ extends class { constructor(t, e, r) { this._version = t, this._roots = e, this._iterable = r, this._decoded = !1 }
                    get version() { return this._version }
                    async getRoots() { return this._roots } } {
                    [Symbol.asyncIterator]() { if (this._decoded) throw new Error("Cannot decode more than once"); if (!this._iterable) throw new Error("Block iterable not found"); return this._decoded = !0, this._iterable[Symbol.asyncIterator]() }
                    static async fromBytes(t) { const { version: e, roots: r, iterator: n } = await async function(t) { if (!(t instanceof Uint8Array)) throw new TypeError("fromBytes() requires a Uint8Array"); return v(g(t)) }(t); return new _(e, r, n) }
                    static async fromIterable(t) { const { version: e, roots: r, iterator: n } = await async function(t) { if (!t || "function" != typeof t[Symbol.asyncIterator]) throw new TypeError("fromIterable() requires an async iterable"); return v(w(t)) }(t); return new _(e, r, n) } }
                async function v(t) { const e = y(t),
                        { version: r, roots: n } = await e.header(); return { version: r, roots: n, iterator: e.blocks() } }

                function E(t) { const e = (0, c.encode)({ version: 1, roots: t }),
                        r = i.encode(e.length),
                        n = new Uint8Array(r.length + e.length); return n.set(r, 0), n.set(e, r.length), n }

                function k() {}
                Symbol.asyncIterator;
                class A { constructor(t, e) { this._encoder = e, this._mutex = e.setRoots(t), this._ended = !1 }
                    async put(t) { if (!(t.bytes instanceof Uint8Array && t.cid)) throw new TypeError("Can only write {cid, bytes} objects"); if (this._ended) throw new Error("Already closed"); const e = s.CID.asCID(t.cid); if (!e) throw new TypeError("Can only write {cid, bytes} objects"); return this._mutex = this._mutex.then((() => this._encoder.writeBlock({ cid: e, bytes: t.bytes }))), this._mutex }
                    async close() { if (this._ended) throw new Error("Already closed"); return await this._mutex, this._ended = !0, this._encoder.close() }
                    static create(t) { t = function(t) { if (void 0 === t) return []; if (!Array.isArray(t)) { const e = s.CID.asCID(t); if (!e) throw new TypeError("roots must be a single CID or an array of CIDs"); return [e] } const e = []; for (const r of t) { const t = s.CID.asCID(r); if (!t) throw new TypeError("roots must be a single CID or an array of CIDs");
                                e.push(t) } return e }(t); const { encoder: e, iterator: r } = B(); return { writer: new A(t, e), out: new x(r) } }
                    static createAppender() { const { encoder: t, iterator: e } = B(); return t.setRoots = () => Promise.resolve(), { writer: new A([], t), out: new x(e) } }
                    static async updateRootsInBytes(t, e) { const r = g(t);
                        await h(r); const n = E(e); if (r.pos !== n.length) throw new Error(`updateRoots() can only overwrite a header of the same length (old header is ${r.pos} bytes, new header is ${n.length} bytes)`); return t.set(n, 0), t } }
                class x { constructor(t) { this._iterator = t }[Symbol.asyncIterator]() { if (this._iterating) throw new Error("Multiple iterator not supported"); return this._iterating = !0, this._iterator } }

                function B() { const t = function() { const t = []; let e = null,
                                r = k,
                                n = !1,
                                o = null,
                                i = k; const s = () => (e || (e = new Promise((t => { r = () => { e = null, r = k, t() } }))), e),
                                a = { async next() { const e = t.shift(); return e ? (0 === t.length && r(), { done: !1, value: e }) : n ? (r(), { done: !0, value: void 0 }) : (o || (o = new Promise((t => { i = () => (o = null, i = k, t(a.next())) }))), o) } }; return { writer: { write(e) { t.push(e); const r = s(); return i(), r }, async end() { n = !0; const t = s(); return i(), t } }, iterator: a } }(),
                        { writer: e, iterator: r } = t; return { encoder: function(t) { return { async setRoots(e) { const r = E(e);
                                    await t.write(r) }, async writeBlock(e) { const { cid: r, bytes: n } = e;
                                    await t.write(new Uint8Array(i.encode(r.bytes.length + n.length))), await t.write(r.bytes), n.length && await t.write(n) }, close: async() => t.end() } }(e), iterator: r } } var S = __webpack_require__(493),
                    I = __webpack_require__(5021),
                    T = __webpack_require__(6441),
                    C = __webpack_require__(8645);
                class O extends C.BlockstoreAdapter { constructor() { super(), this.store = new Map }
                    async * blocks() { for (const [t, e] of this.store.entries()) yield { cid: T.k0.parse(t), bytes: e } }
                    put(t, e) { return this.store.set(t.toString(), e), Promise.resolve() }
                    get(t) { const e = this.store.get(t.toString()); if (!e) throw new Error(`block with cid ${t.toString()} no found`); return Promise.resolve(e) }
                    close() { return this.store.clear(), Promise.resolve() } }
                var N = __webpack_require__(6155); const U = { cidVersion: 1, chunker: "fixed", maxChunkSize: 262144, hasher: N.sha256, rawLeaves: !0, wrapWithDirectory: !0, maxChildrenPerNode: 174 }; var D = __webpack_require__(8490),
                    R = __webpack_require__(6154),
                    L = __webpack_require__(4923),
                    z = __webpack_require__(8161);
                class j extends C.BlockstoreAdapter { constructor(t) { super(), this.store = t }
                    async get(t) { const e = await this.store.get(t); if (!e) throw new Error(`Incomplete CAR. Block missing for CID ${t}`); if (!async function({ cid: t, bytes: e }) { const r = await N.sha256.digest(e); return (0, z.equals)(r.digest, t.multihash.digest) }({ cid: t, bytes: e })) throw new Error(`Invalid CAR. Hash of block data does not match CID ${t}`); return e }
                    static fromBlockstore(t) { return new j(t) }
                    static fromCarReader(t) { return new j({ get: async e => { const r = await t.get(e); return null == r ? void 0 : r.bytes } }) } }
                const P = ({ enumerable: t = !0, configurable: e = !1 } = {}) => ({ enumerable: t, configurable: e, writable: !1 }),
                    M = function*(t, e) { if (null != t && !(t instanceof Uint8Array))
                            for (const [r, n] of Object.entries(t)) { const t = [...e, r]; if (null != n && "object" == typeof n)
                                    if (Array.isArray(n))
                                        for (const [e, r] of n.entries()) { const n = [...t, e],
                                                o = T.k0.asCID(r);
                                            o ? yield [n.join("/"), o] : "object" == typeof r && (yield* M(r, n)) } else { const e = T.k0.asCID(n);
                                            e ? yield [t.join("/"), e] : yield* M(n, t) } } },
                    F = function*(t, e) { if (null != t)
                            for (const [r, n] of Object.entries(t)) { const t = [...e, r]; if (yield t.join("/"), !(null == n || n instanceof Uint8Array || "object" != typeof n || T.k0.asCID(n)))
                                    if (Array.isArray(n))
                                        for (const [e, r] of n.entries()) { const n = [...t, e];
                                            yield n.join("/"), "object" != typeof r || T.k0.asCID(r) || (yield* F(r, n)) } else yield* F(n, t) } };
                class q { constructor({ cid: t, bytes: e, value: r }) { if (!t || !e || void 0 === r) throw new Error("Missing required argument");
                        this.cid = t, this.bytes = e, this.value = r, this.asBlock = this, Object.defineProperties(this, { cid: P(), bytes: P(), value: P(), asBlock: P() }) }
                    links() { return M(this.value, []) }
                    tree() { return F(this.value, []) }
                    get(t = "/") { return ((t, e) => { let r = t; for (const [t, n] of e.entries()) { if (r = r[n], null == r) throw new Error(`Object has no property at ${e.slice(0,t+1).map((t=>`[${JSON.stringify(t)}]`)).join("")}`);const o=T.k0.asCID(r);if(o)return{value:o,remaining:e.slice(t+1).join("/")}}return{value:r}})(this.value,t.split("/").filter(Boolean))}}var H=__webpack_require__(6945),V=__webpack_require__(3925);class G{constructor(t,e,r={}){if("number"!=typeof e||e<=0)throw new Error("invalid target chunk size");this._reader=t,this._targetSize=e,this._decoders=[V,H,c,...r.decoders||[]]}async*cars(){const t=await this._reader.getRoots();if(1!==t.length)throw new Error(`unexpected number of roots: ${t.length}`);let e;for await(const r of this._cars(t[0]))e=r.channel,r.out&&(yield r.out);if(!e)throw new Error("missing CAR writer channel");e.writer.close(),yield e.out}async _get(t){const e=await this._reader.get(t);if(!e)throw new Error(`missing block for ${t}`);const{bytes:r}=e,n=this._decoders.find((e=>e.code===t.code));if(!n)throw new Error(`missing decoder for ${t.code}`);return new q({cid:t,bytes:r,value:n.decode(r)})}async*_cars(t,e=[],r){const n=await this._get(t);if((r=r||Object.assign(A.create(t),{size:0})).size>0&&r.size+n.bytes.byteLength>=this._targetSize){r.writer.close();const{out:t}=r;r=function(t){const e=Object.assign(A.create(t[0].cid),{size:t.reduce(((t,e)=>t+e.bytes.byteLength),0)});for(const r of t)e.writer.put(r);return e}(e),yield{channel:r,out:t}}e=e.concat(n),r.size+=n.bytes.byteLength,r.writer.put(n);for(const[,t]of n.links())for await(const n of this._cars(t,e,r))r=n.channel,yield n;if(!r)throw new Error("missing CAR writer channel");yield{channel:r}}static async fromIterable(t,e,r){const n=await b.fromIterable(t);return new G(n,e,r)}static async fromBlob(t,e,r){const n=await t.arrayBuffer(),o=await b.fromBytes(new Uint8Array(n));return new G(o,e,r)}}const W=globalThis.fetch,J=(globalThis.Request,globalThis.Response,globalThis.Blob),K=globalThis.File,X=O;class Y{constructor({token:t,endpoint:e=new URL("https://api.web3.storage")}){this.token=t,this.endpoint=e}static headers(t){if(!t)throw new Error("missing token");return{Authorization:`Bearer ${t}`,"X-Client":"web3.storage"}}static async put({endpoint:t,token:e},r,{onRootCidReady:i,onStoredChunk:s,maxRetries:a=5,wrapWithDirectory:c=!0,name:u}={}){const h=new X;try{const{out:f,root:l}=await async function({input:t,blockstore:e,hasher:r,maxChunkSize:i,maxChildrenPerNode:s,wrapWithDirectory:a}){if(!t||Array.isArray(t)&&!t.length)throw new Error("missing input file(s)");const c=e||new O,u=await n(o(I(t),(t=>(0,S.importer)(t,c,{...U,hasher:r||U.hasher,maxChunkSize:i||U.maxChunkSize,maxChildrenPerNode:s||U.maxChildrenPerNode,wrapWithDirectory:!1!==a&&U.wrapWithDirectory}))));if(!u||!u.cid)throw new Error("given input could not be parsed correctly");const h=u.cid,{writer:f,out:l}=await A.create([h]),p=l[Symbol.asyncIterator]();let d;return{root:h,out:{[Symbol.asyncIterator](){if(null!=d)throw new Error("Multiple iterator not supported");return d=(async()=>{for await(const t of c.blocks())await f.put(t);await f.close(),e||await c.close()})(),{async next(){const t=await p.next();return t.done&&await d,t}}}}}}({input:Array.from(r).map((t=>({path:t.name,content:t.stream()}))),blockstore:h,wrapWithDirectory:c,maxChunkSize:1048576,maxChildrenPerNode:1024});i&&i(l.toString());const p=await b.fromIterable(f);return await Y.putCar({endpoint:t,token:e},p,{onStoredChunk:s,maxRetries:a,name:u})}finally{await h.close()}}static async putCar({endpoint:t,token:n},o,{name:i,onStoredChunk:s,maxRetries:a=5}={}){const c=new URL("/car",t);let u=Y.headers(n);i&&(u={...u,"X-Name":i});const h=await o.getRoots();if(null==h[0])throw new Error("missing root CID");if(h.length>1)throw new Error("too many roots");const f=h[0].toString(),l=new G(o,10485760),p=e(3,(async t=>{const e=[];for await(const r of t)e.push(r);const n=new J(e,{type:"application/car"}),o=await r((async()=>{const t=await W(c.toString(),{method:"POST",headers:u,body:n}),e=await t.json();if(!t.ok)throw new Error(e.message);if(e.cid!==f)throw new Error(`root CID mismatch, expected: ${f}, received: ${e.cid}`);return e.cid}),{retries:a});return s&&s(n.size),o}));for await(const t of p(l.cars()));return f}static async get({endpoint:t,token:e},r){const n=new URL(`/car/${r}`,t);return function(t){const e=Object.assign(t,{unixFsIterator:async function*(){if(!t.ok)throw new Error(`Response was not ok: ${t.status} ${t.statusText} - Check for { "ok": false } on the Response object before calling .unixFsIterator`);if(!t.body)throw new Error("No body on response");const e=new X;try{for await(const r of async function*(t,{roots:e,blockstore:r}={}){const n=await _.fromIterable(function(t){return Symbol.asyncIterator in t?t:R(t)}(t)),o=r||new O;for await(const t of n)await o.put(t.cid,t.bytes);const i=j.fromBlockstore(o);e&&0!==e.length||(e=await n.getRoots());for(const t of e)yield*L.recursive(t,i)}(t.body,{blockstore:e}))yield r}finally{await e.close()}},files:async()=>{if(!t.ok)throw new Error(`Response was not ok: ${t.status} ${t.statusText} - Check for { "ok": false } on the Response object before calling .files`);const r=[];for await(const t of e.unixFsIterator()){if("directory"===t.type)continue;const e=await Z(t);r.push(e)}return r}});return e}(await W(n.toString(),{method:"GET",headers:Y.headers(e)}))}static async delete({endpoint:t,token:e},r){throw console.log("Not deleting",r,t,e),Error(".delete not implemented yet")}static async status({endpoint:t,token:e},r){const n=new URL(`/status/${r}`,t),o=await W(n.toString(),{method:"GET",headers:Y.headers(e)});if(404!==o.status){if(!o.ok)throw new Error(o.statusText);return o.json()}}static async*list(t,{before:e=(new Date).toISOString(),maxResults:r=1/0}={}){let n=0;const o=r>100?100:r;for await(const i of async function*(t,e,r){let n=await t(e,r);yield n;let o=D(n.headers.get("Link")||"");for(;o&&o.next;)n=await t(e,o.next),yield n,o=D(n.headers.get("Link")||"")}((function({endpoint:t,token:e},{before:r,size:n}){const o=new URLSearchParams({before:r,size:n.toString()}),i=new URL(`/user/uploads?${o}`,t);return W(i.toString(),{method:"GET",headers:{...Y.headers(e),"Access-Control-Request-Headers":"Link"}})}),t,{before:e,size:o})){if(!i.ok)throw new Error(`${i.status} ${i.statusText}`);const t=await i.json();for(const e of t){if(++n>r)return;yield e}}}put(t,e){return Y.put(this,t,e)}putCar(t,e){return Y.putCar(this,t,e)}get(t){return Y.get(this,t)}delete(t){return Y.delete(this,t)}status(t){return Y.status(this,t)}list(t){return Y.list(this,t)}}async function Z({content:t,path:e,cid:r}){const n=[];for await(const e of t())n.push(e);const o=new K(n,function(t){const e=t.indexOf("/");return-1===e?t:t.substring(e+1)}(e));return Object.assign(o,{cid:r.toString()})}const Q=document.querySelector("#upload-form"),tt=document.querySelector("#filepicker");function et(t){console.log(t)}document.querySelector("#output"),et("> ⁂ waiting for form submission..."),Q.addEventListener("submit",(async function(t){t.preventDefault(),et("> 📦 creating web3.storage client");const e=new Y({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQyQjZkN0QxNDM4ZjlhMTkyMTk5OEQ5MjRmMzA2OTg4YmRkNjNFNTgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Mjg1NDU1ODkxNzIsIm5hbWUiOiJnb29nbGkifQ.FhkQFDCRBuPe8Yp964QG8e4DV6-T3BlS7dpbBzbrh-Q"});et("> 🤖 chunking and hashing the files (in your browser!) to calculate the Content ID");const r=tt.files,n=await e.put(r,{onRootCidReady:t=>{et(`> 🔑 locally calculated Content ID: ${t} `),et("> 📡 sending files to web3.storage ")},onStoredChunk:t=>et(`> 🛰 sent ${t.toLocaleString()} bytes to web3.storage`)});var o;et(`> ✅ web3.storage now hosting ${n}`),o=`https://dweb.link/ipfs/${n}`,console.log(`> 🔗 ${o}`),et("> 📡 fetching the list of all unique uploads on this account");let i=0;for await(const t of e.list())et(`> 📄 ${t.cid}  ${t.name}`),i+=t.dagSize||0;et(`> ⁂ ${i.toLocaleString()} bytes stored!`),$("#user-storage-status").text("✔️")}),!1)})()})();
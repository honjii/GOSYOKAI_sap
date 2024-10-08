/*!
 * ScrollTrigger 3.7.1
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? t(exports)
        : "function" == typeof define && define.amd
        ? define(["exports"], t)
        : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
    "use strict";
    function J(e) {
        return e;
    }
    function K(e) {
        return Math.round(1e5 * e) / 1e5 || 0;
    }
    function L() {
        return "undefined" != typeof window;
    }
    function M() {
        return Se || (L() && (Se = window.gsap) && Se.registerPlugin && Se);
    }
    function N(e) {
        return !!~o.indexOf(e);
    }
    function O(e, t) {
        return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t];
    }
    function P(t, e) {
        var r = e.s,
            n = e.sc,
            o = v.indexOf(t),
            i = n === ot.sc ? 1 : 2;
        return (
            ~o || (o = v.push(t) - 1),
            v[o + i] ||
                (v[o + i] =
                    O(t, r) ||
                    (N(t)
                        ? n
                        : function (e) {
                              return arguments.length ? (t[r] = e) : t[r];
                          }))
        );
    }
    function Q(e) {
        return (
            O(e, "getBoundingClientRect") ||
            (N(e)
                ? function () {
                      return (
                          (pt.width = Me.innerWidth),
                          (pt.height = Me.innerHeight),
                          pt
                      );
                  }
                : function () {
                      return it(e);
                  })
        );
    }
    function T(e, t) {
        var r = t.s,
            n = t.d2,
            o = t.d,
            i = t.a;
        return (r = "scroll" + n) && (i = O(e, r))
            ? i() - Q(e)()[o]
            : N(e)
            ? Math.max(_e[r], Pe[r]) -
              (Me["inner" + n] || _e["client" + n] || Pe["client" + n])
            : e[r] - e["offset" + n];
    }
    function U(e, t) {
        for (var r = 0; r < d.length; r += 3)
            (t && !~t.indexOf(d[r + 1])) || e(d[r], d[r + 1], d[r + 2]);
    }
    function V(e) {
        return "string" == typeof e;
    }
    function W(e) {
        return "function" == typeof e;
    }
    function X(e) {
        return "number" == typeof e;
    }
    function Y(e) {
        return "object" == typeof e;
    }
    function Z(e) {
        return W(e) && e();
    }
    function $(r, n) {
        return function () {
            var e = Z(r),
                t = Z(n);
            return function () {
                Z(e), Z(t);
            };
        };
    }
    function ta(e) {
        return Me.getComputedStyle(e);
    }
    function va(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e;
    }
    function xa(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0;
    }
    function ya(e) {
        var t,
            r = [],
            n = e.labels,
            o = e.duration();
        for (t in n) r.push(n[t] / o);
        return r;
    }
    function Ba(t, r, e, n) {
        return e.split(",").forEach(function (e) {
            return t(r, e, n);
        });
    }
    function Ca(e, t, r) {
        return e.addEventListener(t, r, { passive: !0 });
    }
    function Da(e, t, r) {
        return e.removeEventListener(t, r);
    }
    function Ha(e, t) {
        if (V(e)) {
            var r = e.indexOf("="),
                n = ~r
                    ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1))
                    : 0;
            ~r &&
                (e.indexOf("%") > r && (n *= t / 100),
                (e = e.substr(0, r - 1))),
                (e =
                    n +
                    (e in C
                        ? C[e] * t
                        : ~e.indexOf("%")
                        ? (parseFloat(e) * t) / 100
                        : parseFloat(e) || 0));
        }
        return e;
    }
    function Ia(e, t, r, n, o, i, a) {
        var s = o.startColor,
            l = o.endColor,
            c = o.fontSize,
            u = o.indent,
            f = o.fontWeight,
            p = ke.createElement("div"),
            d = N(r) || "fixed" === O(r, "pinType"),
            g = -1 !== e.indexOf("scroller"),
            h = d ? Pe : r,
            v = -1 !== e.indexOf("start"),
            m = v ? s : l,
            b =
                "border-color:" +
                m +
                ";font-size:" +
                c +
                ";color:" +
                m +
                ";font-weight:" +
                f +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
            (b += "position:" + (g && d ? "fixed;" : "absolute;")),
            (!g && d) ||
                (b += (n === ot ? x : y) + ":" + (i + parseFloat(u)) + "px;"),
            a &&
                (b +=
                    "box-sizing:border-box;text-align:left;width:" +
                    a.offsetWidth +
                    "px;"),
            (p._isStart = v),
            p.setAttribute("class", "gsap-marker-" + e),
            (p.style.cssText = b),
            (p.innerText = t || 0 === t ? e + "-" + t : e),
            h.children[0] ? h.insertBefore(p, h.children[0]) : h.appendChild(p),
            (p._offset = p["offset" + n.op.d2]),
            S(p, 0, n, v),
            p
        );
    }
    function Ma() {
        return (l = l || s(F));
    }
    function Na() {
        l || ((l = s(F)), je || A("scrollStart"), (je = He()));
    }
    function Oa() {
        return !Be && !r && !ke.fullscreenElement && a.restart(!0);
    }
    function Ua(e) {
        var t,
            r = Se.ticker.frame,
            n = [],
            o = 0;
        if (g !== r || De) {
            for (R(); o < E.length; o += 4)
                (t = Me.matchMedia(E[o]).matches) !== E[o + 3] &&
                    ((E[o + 3] = t)
                        ? n.push(o)
                        : R(1, E[o]) || (W(E[o + 2]) && E[o + 2]()));
            for (I(), o = 0; o < n.length; o++)
                (t = n[o]), (Ve = E[t]), (E[t + 2] = E[t + 1](e));
            (Ve = 0), i && z(0, 1), (g = r), A("matchMedia");
        }
    }
    function Va() {
        return Da(ee, "scrollEnd", Va) || z(!0);
    }
    function gb(e, t, r, n) {
        if (e.parentNode !== t) {
            for (var o, i = H.length, a = t.style, s = e.style; i--; )
                a[(o = H[i])] = r[o];
            (a.position = "absolute" === r.position ? "absolute" : "relative"),
                "inline" === r.display && (a.display = "inline-block"),
                (s[y] = s[x] = "auto"),
                (a.overflow = "visible"),
                (a.boxSizing = "border-box"),
                (a[Xe] = xa(e, nt) + rt),
                (a[Ze] = xa(e, ot) + rt),
                (a[Ge] = s[et] = s.top = s[b] = "0"),
                ft(n),
                (s[Xe] = s.maxWidth = r[Xe]),
                (s[Ze] = s.maxHeight = r[Ze]),
                (s[Ge] = r[Ge]),
                e.parentNode.insertBefore(t, e),
                t.appendChild(e);
        }
    }
    function jb(e) {
        for (var t = j.length, r = e.style, n = [], o = 0; o < t; o++)
            n.push(j[o], r[j[o]]);
        return (n.t = e), n;
    }
    function mb(e, t, r, n, o, i, a, s, l, c, u, f) {
        if (
            (W(e) && (e = e(s)),
            V(e) &&
                "max" === e.substr(0, 3) &&
                (e = f + ("=" === e.charAt(4) ? Ha("0" + e.substr(3), r) : 0)),
            X(e))
        )
            a && S(a, r, n, !0);
        else {
            W(t) && (t = t(s));
            var p,
                d,
                g,
                h = Ee(t)[0] || Pe,
                v = it(h) || {},
                m = e.split(" ");
            (v && (v.left || v.top)) ||
                "none" !== ta(h).display ||
                ((g = h.style.display),
                (h.style.display = "block"),
                (v = it(h)),
                g ? (h.style.display = g) : h.style.removeProperty("display")),
                (p = Ha(m[0], v[n.d])),
                (d = Ha(m[1] || "0", r)),
                (e = v[n.p] - l[n.p] - c + p + o - d),
                a && S(a, d, n, r - d < 20 || (a._isStart && 20 < d)),
                (r -= r - d);
        }
        if (i) {
            var b = e + r,
                x = i._isStart;
            (f = "scroll" + n.d2),
                S(
                    i,
                    b,
                    n,
                    (x && 20 < b) ||
                        (!x &&
                            (u ? Math.max(Pe[f], _e[f]) : i.parentNode[f]) <=
                                b + 1)
                ),
                u &&
                    ((l = it(a)),
                    u &&
                        (i.style[n.op.p] =
                            l[n.op.p] - n.op.m - i._offset + rt));
        }
        return Math.round(e);
    }
    function ob(e, t, r, n) {
        if (e.parentNode !== t) {
            var o,
                i,
                a = e.style;
            if (t === Pe) {
                for (o in ((e._stOrig = a.cssText), (i = ta(e))))
                    +o ||
                        G.test(o) ||
                        !i[o] ||
                        "string" != typeof a[o] ||
                        "0" === o ||
                        (a[o] = i[o]);
                (a.top = r), (a.left = n);
            } else a.cssText = e._stOrig;
            (Se.core.getCache(e).uncache = 1), t.appendChild(e);
        }
    }
    function pb(l, e) {
        function Ye(e, t, r, n, o) {
            var i = Ye.tween,
                a = t.onComplete,
                s = {};
            return (
                i && i.kill(),
                (c = Math.round(r)),
                (t[p] = e),
                ((t.modifiers = s)[p] = function (e) {
                    return (
                        (e = K(f())) !== c && e !== u && 2 < Math.abs(e - c)
                            ? (i.kill(), (Ye.tween = 0))
                            : (e = r + n * i.ratio + o * i.ratio * i.ratio),
                        (u = c),
                        (c = K(e))
                    );
                }),
                (t.onComplete = function () {
                    (Ye.tween = 0), a && a.call(i);
                }),
                (i = Ye.tween = Se.to(l, t))
            );
        }
        var c,
            u,
            f = P(l, e),
            p = "_scroll" + e.p2;
        return (
            (l[p] = f),
            l.addEventListener(
                "wheel",
                function () {
                    return Ye.tween && Ye.tween.kill() && (Ye.tween = 0);
                },
                { passive: !0 }
            ),
            Ye
        );
    }
    var Se,
        i,
        Me,
        ke,
        _e,
        Pe,
        o,
        a,
        s,
        l,
        Ee,
        Ne,
        Ae,
        c,
        Be,
        Ie,
        u,
        Le,
        f,
        p,
        d,
        Re,
        ze,
        r,
        We,
        Ve,
        g,
        h,
        De = 1,
        Fe = [],
        v = [],
        He = Date.now,
        m = He(),
        je = 0,
        Ue = 1,
        Je = Math.abs,
        t = "scrollLeft",
        n = "scrollTop",
        b = "left",
        x = "right",
        y = "bottom",
        Xe = "width",
        Ze = "height",
        qe = "Right",
        $e = "Left",
        Ke = "Top",
        Qe = "Bottom",
        Ge = "padding",
        et = "margin",
        tt = "Width",
        w = "Height",
        rt = "px",
        nt = {
            s: t,
            p: b,
            p2: $e,
            os: x,
            os2: qe,
            d: Xe,
            d2: tt,
            a: "x",
            sc: function sc(e) {
                return arguments.length
                    ? Me.scrollTo(e, ot.sc())
                    : Me.pageXOffset || ke[t] || _e[t] || Pe[t] || 0;
            },
        },
        ot = {
            s: n,
            p: "top",
            p2: Ke,
            os: y,
            os2: Qe,
            d: Ze,
            d2: w,
            a: "y",
            op: nt,
            sc: function sc(e) {
                return arguments.length
                    ? Me.scrollTo(nt.sc(), e)
                    : Me.pageYOffset || ke[n] || _e[n] || Pe[n] || 0;
            },
        },
        it = function _getBounds(e, t) {
            var r =
                    t &&
                    "matrix(1, 0, 0, 1, 0, 0)" !== ta(e)[u] &&
                    Se.to(e, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                    }).progress(1),
                n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n;
        },
        at = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
        },
        st = { toggleActions: "play", anticipatePin: 0 },
        C = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        S = function _positionMarker(e, t, r, n) {
            var o = { display: "block" },
                i = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            (e._isFlipped = n),
                (o[r.a + "Percent"] = n ? -100 : 0),
                (o[r.a] = n ? "1px" : 0),
                (o["border" + i + tt] = 1),
                (o["border" + a + tt] = 0),
                (o[r.p] = t + "px"),
                Se.set(e, o);
        },
        lt = [],
        ct = {},
        k = {},
        _ = [],
        E = [],
        A = function _dispatch(e) {
            return (
                (k[e] &&
                    k[e].map(function (e) {
                        return e();
                    })) ||
                _
            );
        },
        B = [],
        I = function _revertRecorded(e) {
            for (var t = 0; t < B.length; t += 5)
                (e && B[t + 4] !== e) ||
                    ((B[t].style.cssText = B[t + 1]),
                    B[t].getBBox &&
                        B[t].setAttribute("transform", B[t + 2] || ""),
                    (B[t + 3].uncache = 1));
        },
        R = function _revertAll(e, t) {
            var r;
            for (Le = 0; Le < lt.length; Le++)
                (r = lt[Le]),
                    (t && r.media !== t) || (e ? r.kill(1) : r.revert());
            t && I(t), t || A("revert");
        },
        z = function _refreshAll(e, t) {
            if (!je || e) {
                h = !0;
                var r = A("refreshInit");
                Re && ee.sort(),
                    t || R(),
                    lt.forEach(function (e) {
                        return e.refresh();
                    }),
                    r.forEach(function (e) {
                        return e && e.render && e.render(-1);
                    }),
                    v.forEach(function (e) {
                        return "function" == typeof e && (e.rec = 0);
                    }),
                    a.pause(),
                    (h = !1),
                    A("refresh");
            } else Ca(ee, "scrollEnd", Va);
        },
        D = 0,
        ut = 1,
        F = function _updateAll() {
            if (!h) {
                var e = lt.length,
                    t = He(),
                    r = 50 <= t - m,
                    n = e && lt[0].scroll();
                if (
                    ((ut = n < D ? -1 : 1),
                    (D = n),
                    r &&
                        (je &&
                            !Ie &&
                            200 < t - je &&
                            ((je = 0), A("scrollEnd")),
                        (Ae = m),
                        (m = t)),
                    ut < 0)
                ) {
                    for (Le = e; 0 < Le--; ) lt[Le] && lt[Le].update(0, r);
                    ut = 1;
                } else for (Le = 0; Le < e; Le++) lt[Le] && lt[Le].update(0, r);
                l = 0;
            }
        },
        H = [
            b,
            "top",
            y,
            x,
            et + Qe,
            et + qe,
            et + Ke,
            et + $e,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "grid-column-start",
            "grid-column-end",
            "grid-row-start",
            "grid-row-end",
            "grid-area",
            "justify-self",
            "align-self",
            "place-self",
        ],
        j = H.concat([
            Xe,
            Ze,
            "boxSizing",
            "max" + tt,
            "max" + w,
            "position",
            et,
            Ge,
            Ge + Ke,
            Ge + qe,
            Ge + Qe,
            Ge + $e,
        ]),
        q = /([A-Z])/g,
        ft = function _setState(e) {
            if (e) {
                var t,
                    r,
                    n = e.t.style,
                    o = e.length,
                    i = 0;
                for (
                    (e.t._gsap || Se.core.getCache(e.t)).uncache = 1;
                    i < o;
                    i += 2
                )
                    (r = e[i + 1]),
                        (t = e[i]),
                        r
                            ? (n[t] = r)
                            : n[t] &&
                              n.removeProperty(
                                  t.replace(q, "-$1").toLowerCase()
                              );
            }
        },
        pt = { left: 0, top: 0 },
        G = /(?:webkit|moz|length|cssText|inset)/i;
    nt.op = ot;
    var ee =
        ((ScrollTrigger.prototype.init = function init(S, M) {
            if (
                ((this.progress = this.start = 0),
                this.vars && this.kill(1),
                Ue)
            ) {
                var d,
                    n,
                    f,
                    k,
                    _,
                    E,
                    A,
                    B,
                    I,
                    L,
                    R,
                    e,
                    z,
                    D,
                    F,
                    H,
                    j,
                    t,
                    U,
                    g,
                    Z,
                    q,
                    h,
                    $,
                    v,
                    m,
                    r,
                    b,
                    x,
                    K,
                    o,
                    p,
                    y,
                    G,
                    ee,
                    te,
                    re = (S = va(
                        V(S) || X(S) || S.nodeType ? { trigger: S } : S,
                        st
                    )).horizontal
                        ? nt
                        : ot,
                    w = S.onUpdate,
                    C = S.toggleClass,
                    i = S.id,
                    ne = S.onToggle,
                    oe = S.onRefresh,
                    a = S.scrub,
                    ie = S.trigger,
                    ae = S.pin,
                    se = S.pinSpacing,
                    le = S.invalidateOnRefresh,
                    ce = S.anticipatePin,
                    s = S.onScrubComplete,
                    ue = S.onSnapComplete,
                    fe = S.once,
                    pe = S.snap,
                    de = S.pinReparent,
                    ge = !a && 0 !== a,
                    he = Ee(S.scroller || Me)[0],
                    l = Se.core.getCache(he),
                    ve = N(he),
                    me =
                        "pinType" in S
                            ? "fixed" === S.pinType
                            : ve || "fixed" === O(he, "pinType"),
                    be = [S.onEnter, S.onLeave, S.onEnterBack, S.onLeaveBack],
                    xe = ge && S.toggleActions.split(" "),
                    c = "markers" in S ? S.markers : st.markers,
                    ye = ve
                        ? 0
                        : parseFloat(ta(he)["border" + re.p2 + tt]) || 0,
                    we = this,
                    u =
                        S.onRefreshInit &&
                        function () {
                            return S.onRefreshInit(we);
                        },
                    Ce = (function _getSizeFunc(e, t, r) {
                        var n = r.d,
                            o = r.d2,
                            i = r.a;
                        return (i = O(e, "getBoundingClientRect"))
                            ? function () {
                                  return i()[n];
                              }
                            : function () {
                                  return (
                                      (t ? Me["inner" + o] : e["client" + o]) ||
                                      0
                                  );
                              };
                    })(he, ve, re),
                    Te = (function _getOffsetsFunc(e, t) {
                        return !t || ~Fe.indexOf(e)
                            ? Q(e)
                            : function () {
                                  return pt;
                              };
                    })(he, ve),
                    Oe = 0;
                (we.media = Ve),
                    (ce *= 45),
                    (we.scroller = he),
                    (we.scroll = P(he, re)),
                    (k = we.scroll()),
                    (we.vars = S),
                    (M = M || S.animation),
                    "refreshPriority" in S && (Re = 1),
                    (l.tweenScroll = l.tweenScroll || {
                        top: pb(he, ot),
                        left: pb(he, nt),
                    }),
                    (we.tweenTo = d = l.tweenScroll[re.p]),
                    M &&
                        ((M.vars.lazy = !1),
                        M._initted ||
                            (!1 !== M.vars.immediateRender &&
                                !1 !== S.immediateRender &&
                                M.render(0, !0, !0)),
                        (we.animation = M.pause()),
                        (M.scrollTrigger = we),
                        (o = X(a) && a) &&
                            (K = Se.to(M, {
                                ease: "power3",
                                duration: o,
                                onComplete: function onComplete() {
                                    return s && s(we);
                                },
                            })),
                        (b = 0),
                        (i = i || M.vars.id)),
                    lt.push(we),
                    pe &&
                        ((Y(pe) && !pe.push) || (pe = { snapTo: pe }),
                        "scrollBehavior" in Pe.style &&
                            Se.set(ve ? [Pe, _e] : he, {
                                scrollBehavior: "auto",
                            }),
                        (f = W(pe.snapTo)
                            ? pe.snapTo
                            : "labels" === pe.snapTo
                            ? (function _getClosestLabel(t) {
                                  return function (e) {
                                      return Se.utils.snap(ya(t), e);
                                  };
                              })(M)
                            : "labelsDirectional" === pe.snapTo
                            ? (function _getLabelAtDirection(o) {
                                  return function (e, t) {
                                      var r,
                                          n = ya(o);
                                      if (
                                          (n.sort(function (e, t) {
                                              return e - t;
                                          }),
                                          0 < t.direction)
                                      ) {
                                          for (
                                              e -= 1e-4, r = 0;
                                              r < n.length;
                                              r++
                                          )
                                              if (n[r] >= e) return n[r];
                                          return n.pop();
                                      }
                                      for (r = n.length, e += 1e-4; r--; )
                                          if (n[r] <= e) return n[r];
                                      return n[0];
                                  };
                              })(M)
                            : Se.utils.snap(pe.snapTo)),
                        (p = pe.duration || { min: 0.1, max: 2 }),
                        (p = Y(p) ? Ne(p.min, p.max) : Ne(p, p)),
                        (y = Se.delayedCall(
                            pe.delay || o / 2 || 0.1,
                            function () {
                                if (
                                    Math.abs(we.getVelocity()) < 10 &&
                                    !Ie &&
                                    Oe !== we.scroll()
                                ) {
                                    var e =
                                            M && !ge
                                                ? M.totalProgress()
                                                : we.progress,
                                        t = ((e - x) / (He() - Ae)) * 1e3 || 0,
                                        r = Se.utils.clamp(
                                            -we.progress,
                                            1 - we.progress,
                                            (Je(t / 2) * t) / 0.185
                                        ),
                                        n =
                                            we.progress +
                                            (!1 === pe.inertia ? 0 : r),
                                        o = Ne(0, 1, f(n, we)),
                                        i = we.scroll(),
                                        a = Math.round(E + o * z),
                                        s = pe.onStart,
                                        l = pe.onInterrupt,
                                        c = pe.onComplete,
                                        u = d.tween;
                                    if (i <= A && E <= i && a !== i) {
                                        if (
                                            u &&
                                            !u._initted &&
                                            u.data <= Math.abs(a - i)
                                        )
                                            return;
                                        !1 === pe.inertia &&
                                            (r = o - we.progress),
                                            d(
                                                a,
                                                {
                                                    duration: p(
                                                        Je(
                                                            (0.185 *
                                                                Math.max(
                                                                    Je(n - e),
                                                                    Je(o - e)
                                                                )) /
                                                                t /
                                                                0.05 || 0
                                                        )
                                                    ),
                                                    ease: pe.ease || "power3",
                                                    data: Math.abs(a - i),
                                                    onInterrupt:
                                                        function onInterrupt() {
                                                            return (
                                                                y.restart(!0) &&
                                                                l &&
                                                                l(we)
                                                            );
                                                        },
                                                    onComplete:
                                                        function onComplete() {
                                                            (Oe = we.scroll()),
                                                                (b = x =
                                                                    M && !ge
                                                                        ? M.totalProgress()
                                                                        : we.progress),
                                                                ue && ue(we),
                                                                c && c(we);
                                                        },
                                                },
                                                i,
                                                r * z,
                                                a - i - r * z
                                            ),
                                            s && s(we, d.tween);
                                    }
                                } else we.isActive && y.restart(!0);
                            }
                        ).pause())),
                    i && (ct[i] = we),
                    (ie = we.trigger = Ee(ie || ae)[0]),
                    (ae = !0 === ae ? ie : Ee(ae)[0]),
                    V(C) && (C = { targets: ie, className: C }),
                    ae &&
                        (!1 === se ||
                            se === et ||
                            (se =
                                !(
                                    !se && "flex" === ta(ae.parentNode).display
                                ) && Ge),
                        (we.pin = ae),
                        !1 !== S.force3D && Se.set(ae, { force3D: !0 }),
                        (n = Se.core.getCache(ae)).spacer
                            ? (D = n.pinState)
                            : ((n.spacer = j = ke.createElement("div")),
                              j.setAttribute(
                                  "class",
                                  "pin-spacer" + (i ? " pin-spacer-" + i : "")
                              ),
                              (n.pinState = D = jb(ae))),
                        (we.spacer = j = n.spacer),
                        (r = ta(ae)),
                        (h = r[se + re.os2]),
                        (U = Se.getProperty(ae)),
                        (g = Se.quickSetter(ae, re.a, rt)),
                        gb(ae, j, r),
                        (H = jb(ae))),
                    c &&
                        ((e = Y(c) ? va(c, at) : at),
                        (L = Ia("scroller-start", i, he, re, e, 0)),
                        (R = Ia("scroller-end", i, he, re, e, 0, L)),
                        (t = L["offset" + re.op.d2]),
                        (B = Ia("start", i, he, re, e, t)),
                        (I = Ia("end", i, he, re, e, t)),
                        me ||
                            (Fe.length && !0 === O(he, "fixedMarkers")) ||
                            ((function _makePositionable(e) {
                                var t = ta(e).position;
                                e.style.position =
                                    "absolute" === t || "fixed" === t
                                        ? t
                                        : "relative";
                            })(ve ? Pe : he),
                            Se.set([L, R], { force3D: !0 }),
                            (v = Se.quickSetter(L, re.a, rt)),
                            (m = Se.quickSetter(R, re.a, rt)))),
                    (we.revert = function (e) {
                        var t = !1 !== e || !we.enabled,
                            r = Be;
                        t !== we.isReverted &&
                            (t &&
                                (we.scroll.rec || (we.scroll.rec = we.scroll()),
                                (ee = Math.max(
                                    we.scroll(),
                                    we.scroll.rec || 0
                                )),
                                (G = we.progress),
                                (te = M && M.progress())),
                            B &&
                                [B, I, L, R].forEach(function (e) {
                                    return (e.style.display = t
                                        ? "none"
                                        : "block");
                                }),
                            t && (Be = 1),
                            we.update(t),
                            (Be = r),
                            ae &&
                                (t
                                    ? (function _swapPinOut(e, t, r) {
                                          if ((ft(r), e.parentNode === t)) {
                                              var n = t.parentNode;
                                              n &&
                                                  (n.insertBefore(e, t),
                                                  n.removeChild(t));
                                          }
                                      })(ae, j, D)
                                    : (de && we.isActive) ||
                                      gb(ae, j, ta(ae), $)),
                            (we.isReverted = t));
                    }),
                    (we.refresh = function (e, t) {
                        if ((!Be && we.enabled) || t)
                            if (ae && e && je)
                                Ca(ScrollTrigger, "scrollEnd", Va);
                            else {
                                (Be = 1),
                                    K && K.pause(),
                                    le && M && M.progress(0).invalidate(),
                                    we.isReverted || we.revert();
                                for (
                                    var r,
                                        n,
                                        o,
                                        i,
                                        a,
                                        s,
                                        l,
                                        c,
                                        u,
                                        f,
                                        p = Ce(),
                                        d = Te(),
                                        g = T(he, re),
                                        h = 0,
                                        v = 0,
                                        m = S.end,
                                        b = S.endTrigger || ie,
                                        x =
                                            S.start ||
                                            (0 !== S.start && ie
                                                ? ae
                                                    ? "0 0"
                                                    : "0 100%"
                                                : 0),
                                        y =
                                            S.pinnedContainer &&
                                            Ee(S.pinnedContainer)[0],
                                        w =
                                            (ie &&
                                                Math.max(0, lt.indexOf(we))) ||
                                            0,
                                        C = w;
                                    C--;

                                )
                                    (s = lt[C]).end ||
                                        s.refresh(0, 1) ||
                                        (Be = 1),
                                        !(l = s.pin) ||
                                            (l !== ie && l !== ae) ||
                                            s.isReverted ||
                                            ((f = f || []).unshift(s),
                                            s.revert());
                                for (
                                    E =
                                        mb(
                                            x,
                                            ie,
                                            p,
                                            re,
                                            we.scroll(),
                                            B,
                                            L,
                                            we,
                                            d,
                                            ye,
                                            me,
                                            g
                                        ) || (ae ? -0.001 : 0),
                                        W(m) && (m = m(we)),
                                        V(m) &&
                                            !m.indexOf("+=") &&
                                            (~m.indexOf(" ")
                                                ? (m =
                                                      (V(x)
                                                          ? x.split(" ")[0]
                                                          : "") + m)
                                                : ((h = Ha(m.substr(2), p)),
                                                  (m = V(x) ? x : E + h),
                                                  (b = ie))),
                                        A =
                                            Math.max(
                                                E,
                                                mb(
                                                    m || (b ? "100% 0" : g),
                                                    b,
                                                    p,
                                                    re,
                                                    we.scroll() + h,
                                                    I,
                                                    R,
                                                    we,
                                                    d,
                                                    ye,
                                                    me,
                                                    g
                                                )
                                            ) || -0.001,
                                        z = A - E || ((E -= 0.01) && 0.001),
                                        h = 0,
                                        C = w;
                                    C--;

                                )
                                    (l = (s = lt[C]).pin) &&
                                        s.start - s._pinPush < E &&
                                        ((r = s.end - s.start),
                                        (l !== ie && l !== y) || (h += r),
                                        l === ae && (v += r));
                                if (
                                    ((E += h),
                                    (A += h),
                                    (we._pinPush = v),
                                    B &&
                                        h &&
                                        (((r = {})[re.a] = "+=" + h),
                                        y && (r[re.p] = "-=" + we.scroll()),
                                        Se.set([B, I], r)),
                                    ae)
                                )
                                    (r = ta(ae)),
                                        (i = re === ot),
                                        (o = we.scroll()),
                                        (Z = parseFloat(U(re.a)) + v),
                                        !g &&
                                            1 < A &&
                                            ((ve ? Pe : he).style[
                                                "overflow-" + re.a
                                            ] = "scroll"),
                                        gb(ae, j, r),
                                        (H = jb(ae)),
                                        (n = it(ae, !0)),
                                        (c = me && P(he, i ? nt : ot)()),
                                        se &&
                                            ((($ = [
                                                se + re.os2,
                                                z + v + rt,
                                            ]).t = j),
                                            (C =
                                                se === Ge
                                                    ? xa(ae, re) + z + v
                                                    : 0) &&
                                                $.push(re.d, C + rt),
                                            ft($),
                                            me && we.scroll(ee)),
                                        me &&
                                            (((a = {
                                                top:
                                                    n.top +
                                                    (i ? o - E : c) +
                                                    rt,
                                                left:
                                                    n.left +
                                                    (i ? c : o - E) +
                                                    rt,
                                                boxSizing: "border-box",
                                                position: "fixed",
                                            })[Xe] = a.maxWidth =
                                                Math.ceil(n.width) + rt),
                                            (a[Ze] = a.maxHeight =
                                                Math.ceil(n.height) + rt),
                                            (a[et] =
                                                a[et + Ke] =
                                                a[et + qe] =
                                                a[et + Qe] =
                                                a[et + $e] =
                                                    "0"),
                                            (a[Ge] = r[Ge]),
                                            (a[Ge + Ke] = r[Ge + Ke]),
                                            (a[Ge + qe] = r[Ge + qe]),
                                            (a[Ge + Qe] = r[Ge + Qe]),
                                            (a[Ge + $e] = r[Ge + $e]),
                                            (F = (function _copyState(e, t, r) {
                                                for (
                                                    var n,
                                                        o = [],
                                                        i = e.length,
                                                        a = r ? 8 : 0;
                                                    a < i;
                                                    a += 2
                                                )
                                                    (n = e[a]),
                                                        o.push(
                                                            n,
                                                            n in t
                                                                ? t[n]
                                                                : e[a + 1]
                                                        );
                                                return (o.t = e.t), o;
                                            })(D, a, de))),
                                        M
                                            ? ((u = M._initted),
                                              ze(1),
                                              M.render(M.duration(), !0, !0),
                                              (q = U(re.a) - Z + z + v),
                                              z !== q &&
                                                  F.splice(F.length - 2, 2),
                                              M.render(0, !0, !0),
                                              u || M.invalidate(),
                                              ze(0))
                                            : (q = z);
                                else if (ie && we.scroll())
                                    for (n = ie.parentNode; n && n !== Pe; )
                                        n._pinOffset &&
                                            ((E -= n._pinOffset),
                                            (A -= n._pinOffset)),
                                            (n = n.parentNode);
                                f &&
                                    f.forEach(function (e) {
                                        return e.revert(!1);
                                    }),
                                    (we.start = E),
                                    (we.end = A),
                                    (k = _ = we.scroll()) < ee && we.scroll(ee),
                                    we.revert(!1),
                                    (Be = 0),
                                    M &&
                                        ge &&
                                        M._initted &&
                                        M.progress() !== te &&
                                        M.progress(te, !0).render(
                                            M.time(),
                                            !0,
                                            !0
                                        ),
                                    G !== we.progress &&
                                        (K && M.totalProgress(G, !0),
                                        (we.progress = G),
                                        we.update()),
                                    ae &&
                                        se &&
                                        (j._pinOffset = Math.round(
                                            we.progress * q
                                        )),
                                    oe && oe(we);
                            }
                    }),
                    (we.getVelocity = function () {
                        return ((we.scroll() - _) / (He() - Ae)) * 1e3 || 0;
                    }),
                    (we.update = function (e, t) {
                        var r,
                            n,
                            o,
                            i,
                            a,
                            s = we.scroll(),
                            l = e ? 0 : (s - E) / z,
                            c = l < 0 ? 0 : 1 < l ? 1 : l || 0,
                            u = we.progress;
                        if (
                            (t &&
                                ((_ = k),
                                (k = s),
                                pe &&
                                    ((x = b),
                                    (b = M && !ge ? M.totalProgress() : c))),
                            ce &&
                                !c &&
                                ae &&
                                !Be &&
                                !De &&
                                je &&
                                E < s + ((s - _) / (He() - Ae)) * ce &&
                                (c = 1e-4),
                            c !== u && we.enabled)
                        ) {
                            if (
                                ((i =
                                    (a =
                                        (r = we.isActive = !!c && c < 1) !=
                                        (!!u && u < 1)) || !!c != !!u),
                                (we.direction = u < c ? 1 : -1),
                                (we.progress = c),
                                ge ||
                                    (!K || Be || De
                                        ? M && M.totalProgress(c, !!Be)
                                        : ((K.vars.totalProgress = c),
                                          K.invalidate().restart())),
                                ae)
                            )
                                if (
                                    (e && se && (j.style[se + re.os2] = h), me)
                                ) {
                                    if (i) {
                                        if (
                                            ((o =
                                                !e &&
                                                u < c &&
                                                s < A + 1 &&
                                                s + 1 >= T(he, re)),
                                            de)
                                        )
                                            if (e || (!r && !o)) ob(ae, j);
                                            else {
                                                var f = it(ae, !0),
                                                    p = s - E;
                                                ob(
                                                    ae,
                                                    Pe,
                                                    f.top +
                                                        (re === ot ? p : 0) +
                                                        rt,
                                                    f.left +
                                                        (re === ot ? 0 : p) +
                                                        rt
                                                );
                                            }
                                        ft(r || o ? F : H),
                                            (q !== z && c < 1 && r) ||
                                                g(Z + (1 !== c || o ? 0 : q));
                                    }
                                } else g(Z + q * c);
                            !pe || d.tween || Be || De || y.restart(!0),
                                C &&
                                    (a || (fe && c && (c < 1 || !We))) &&
                                    Ee(C.targets).forEach(function (e) {
                                        return e.classList[
                                            r || fe ? "add" : "remove"
                                        ](C.className);
                                    }),
                                !w || ge || e || w(we),
                                i && !Be
                                    ? ((n =
                                          c && !u
                                              ? 0
                                              : 1 === c
                                              ? 1
                                              : 1 === u
                                              ? 2
                                              : 3),
                                      ge &&
                                          ((o =
                                              (!a &&
                                                  "none" !== xe[n + 1] &&
                                                  xe[n + 1]) ||
                                              xe[n]),
                                          M &&
                                              ("complete" === o ||
                                                  "reset" === o ||
                                                  o in M) &&
                                              ("complete" === o
                                                  ? M.pause().totalProgress(1)
                                                  : "reset" === o
                                                  ? M.restart(!0).pause()
                                                  : "restart" === o
                                                  ? M.restart(!0)
                                                  : M[o]()),
                                          w && w(we)),
                                      (!a && We) ||
                                          (ne && a && ne(we),
                                          be[n] && be[n](we),
                                          fe &&
                                              (1 === c
                                                  ? we.kill(!1, 1)
                                                  : (be[n] = 0)),
                                          a ||
                                              (be[(n = 1 === c ? 1 : 3)] &&
                                                  be[n](we))))
                                    : ge && w && !Be && w(we);
                        }
                        m && (v(s + (L._isFlipped ? 1 : 0)), m(s));
                    }),
                    (we.enable = function (e, t) {
                        we.enabled ||
                            ((we.enabled = !0),
                            Ca(he, "resize", Oa),
                            Ca(he, "scroll", Na),
                            u && Ca(ScrollTrigger, "refreshInit", u),
                            !1 !== e &&
                                ((we.progress = G = 0),
                                (k = _ = Oe = we.scroll())),
                            !1 !== t && we.refresh());
                    }),
                    (we.getTween = function (e) {
                        return e && d ? d.tween : K;
                    }),
                    (we.disable = function (e, t) {
                        if (
                            we.enabled &&
                            (!1 !== e && we.revert(),
                            (we.enabled = we.isActive = !1),
                            t || (K && K.pause()),
                            (ee = 0),
                            n && (n.uncache = 1),
                            u && Da(ScrollTrigger, "refreshInit", u),
                            y &&
                                (y.pause(),
                                d.tween && d.tween.kill() && (d.tween = 0)),
                            !ve)
                        ) {
                            for (var r = lt.length; r--; )
                                if (lt[r].scroller === he && lt[r] !== we)
                                    return;
                            Da(he, "resize", Oa), Da(he, "scroll", Na);
                        }
                    }),
                    (we.kill = function (e, t) {
                        we.disable(e, t), i && delete ct[i];
                        var r = lt.indexOf(we);
                        lt.splice(r, 1),
                            r === Le && 0 < ut && Le--,
                            (r = 0),
                            lt.forEach(function (e) {
                                return e.scroller === we.scroller && (r = 1);
                            }),
                            r || (we.scroll.rec = 0),
                            M &&
                                ((M.scrollTrigger = null),
                                e && M.render(-1),
                                t || M.kill()),
                            B &&
                                [B, I, L, R].forEach(function (e) {
                                    return (
                                        e.parentNode &&
                                        e.parentNode.removeChild(e)
                                    );
                                }),
                            ae &&
                                (n && (n.uncache = 1),
                                (r = 0),
                                lt.forEach(function (e) {
                                    return e.pin === ae && r++;
                                }),
                                r || (n.spacer = 0));
                    }),
                    we.enable(!1, !1),
                    M && M.add && !z
                        ? Se.delayedCall(0.01, function () {
                              return E || A || we.refresh();
                          }) &&
                          (z = 0.01) &&
                          (E = A = 0)
                        : we.refresh();
            } else this.update = this.refresh = this.kill = J;
        }),
        (ScrollTrigger.register = function register(e) {
            if (
                !i &&
                ((Se = e || M()),
                L() &&
                    window.document &&
                    ((Me = window),
                    (ke = document),
                    (_e = ke.documentElement),
                    (Pe = ke.body)),
                Se &&
                    ((Ee = Se.utils.toArray),
                    (Ne = Se.utils.clamp),
                    (ze = Se.core.suppressOverwrites || J),
                    Se.core.globals("ScrollTrigger", ScrollTrigger),
                    Pe))
            ) {
                (s =
                    Me.requestAnimationFrame ||
                    function (e) {
                        return setTimeout(e, 16);
                    }),
                    Ca(Me, "wheel", Na),
                    (o = [Me, ke, _e, Pe]),
                    Ca(ke, "scroll", Na);
                var t,
                    r = Pe.style,
                    n = r.borderTop;
                (r.borderTop = "1px solid #000"),
                    (t = it(Pe)),
                    (ot.m = Math.round(t.top + ot.sc()) || 0),
                    (nt.m = Math.round(t.left + nt.sc()) || 0),
                    n ? (r.borderTop = n) : r.removeProperty("border-top"),
                    (c = setInterval(Ma, 200)),
                    Se.delayedCall(0.5, function () {
                        return (De = 0);
                    }),
                    Ca(ke, "touchcancel", J),
                    Ca(Pe, "touchstart", J),
                    Ba(Ca, ke, "pointerdown,touchstart,mousedown", function () {
                        return (Ie = 1);
                    }),
                    Ba(Ca, ke, "pointerup,touchend,mouseup", function () {
                        return (Ie = 0);
                    }),
                    (u = Se.utils.checkPrefix("transform")),
                    j.push(u),
                    (i = He()),
                    (a = Se.delayedCall(0.2, z).pause()),
                    (d = [
                        ke,
                        "visibilitychange",
                        function () {
                            var e = Me.innerWidth,
                                t = Me.innerHeight;
                            ke.hidden
                                ? ((f = e), (p = t))
                                : (f === e && p === t) || Oa();
                        },
                        ke,
                        "DOMContentLoaded",
                        z,
                        Me,
                        "load",
                        function () {
                            return je || z();
                        },
                        Me,
                        "resize",
                        Oa,
                    ]),
                    U(Ca);
            }
            return i;
        }),
        (ScrollTrigger.defaults = function defaults(e) {
            for (var t in e) st[t] = e[t];
        }),
        (ScrollTrigger.kill = function kill() {
            (Ue = 0),
                lt.slice(0).forEach(function (e) {
                    return e.kill(1);
                });
        }),
        (ScrollTrigger.config = function config(e) {
            "limitCallbacks" in e && (We = !!e.limitCallbacks);
            var t = e.syncInterval;
            (t && clearInterval(c)) || ((c = t) && setInterval(Ma, t)),
                "autoRefreshEvents" in e &&
                    (U(Da) || U(Ca, e.autoRefreshEvents || "none"),
                    (r = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
        }),
        (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
            var r = Ee(e)[0],
                n = v.indexOf(r),
                o = N(r);
            ~n && v.splice(n, o ? 6 : 2),
                o ? Fe.unshift(Me, t, Pe, t, _e, t) : Fe.unshift(r, t);
        }),
        (ScrollTrigger.matchMedia = function matchMedia(e) {
            var t, r, n, o, i;
            for (r in e)
                (n = E.indexOf(r)),
                    (o = e[r]),
                    "all" === (Ve = r)
                        ? o()
                        : (t = Me.matchMedia(r)) &&
                          (t.matches && (i = o()),
                          ~n
                              ? ((E[n + 1] = $(E[n + 1], o)),
                                (E[n + 2] = $(E[n + 2], i)))
                              : ((n = E.length),
                                E.push(r, o, i),
                                t.addListener
                                    ? t.addListener(Ua)
                                    : t.addEventListener("change", Ua)),
                          (E[n + 3] = t.matches)),
                    (Ve = 0);
            return E;
        }),
        (ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
            e || (E.length = 0), 0 <= (e = E.indexOf(e)) && E.splice(e, 4);
        }),
        ScrollTrigger);
    function ScrollTrigger(e, t) {
        i ||
            ScrollTrigger.register(Se) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            this.init(e, t);
    }
    (ee.version = "3.7.1"),
        (ee.saveStyles = function (e) {
            return e
                ? Ee(e).forEach(function (e) {
                      if (e && e.style) {
                          var t = B.indexOf(e);
                          0 <= t && B.splice(t, 5),
                              B.push(
                                  e,
                                  e.style.cssText,
                                  e.getBBox && e.getAttribute("transform"),
                                  Se.core.getCache(e),
                                  Ve
                              );
                      }
                  })
                : B;
        }),
        (ee.revert = function (e, t) {
            return R(!e, t);
        }),
        (ee.create = function (e, t) {
            return new ee(e, t);
        }),
        (ee.refresh = function (e) {
            return e ? Oa() : z(!0);
        }),
        (ee.update = F),
        (ee.maxScroll = function (e, t) {
            return T(e, t ? nt : ot);
        }),
        (ee.getScrollFunc = function (e, t) {
            return P(Ee(e)[0], t ? nt : ot);
        }),
        (ee.getById = function (e) {
            return ct[e];
        }),
        (ee.getAll = function () {
            return lt.slice(0);
        }),
        (ee.isScrolling = function () {
            return !!je;
        }),
        (ee.addEventListener = function (e, t) {
            var r = k[e] || (k[e] = []);
            ~r.indexOf(t) || r.push(t);
        }),
        (ee.removeEventListener = function (e, t) {
            var r = k[e],
                n = r && r.indexOf(t);
            0 <= n && r.splice(n, 1);
        }),
        (ee.batch = function (e, t) {
            function Ji(e, t) {
                var r = [],
                    n = [],
                    o = Se.delayedCall(i, function () {
                        t(r, n), (r = []), (n = []);
                    }).pause();
                return function (e) {
                    r.length || o.restart(!0),
                        r.push(e.trigger),
                        n.push(e),
                        a <= r.length && o.progress(1);
                };
            }
            var r,
                n = [],
                o = {},
                i = t.interval || 0.016,
                a = t.batchMax || 1e9;
            for (r in t)
                o[r] =
                    "on" === r.substr(0, 2) && W(t[r]) && "onRefreshInit" !== r
                        ? Ji(0, t[r])
                        : t[r];
            return (
                W(a) &&
                    ((a = a()),
                    Ca(ee, "refresh", function () {
                        return (a = t.batchMax());
                    })),
                Ee(e).forEach(function (e) {
                    var t = {};
                    for (r in o) t[r] = o[r];
                    (t.trigger = e), n.push(ee.create(t));
                }),
                n
            );
        }),
        (ee.sort = function (e) {
            return lt.sort(
                e ||
                    function (e, t) {
                        return (
                            -1e6 * (e.vars.refreshPriority || 0) +
                            e.start -
                            (t.start + -1e6 * (t.vars.refreshPriority || 0))
                        );
                    }
            );
        }),
        M() && Se.registerPlugin(ee),
        (e.ScrollTrigger = ee),
        (e.default = ee);
    if (typeof window === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
    } else {
        delete e.default;
    }
});

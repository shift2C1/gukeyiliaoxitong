!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
            return e[t]
        }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t) {
    const n = fabric.util.multiplyTransformMatrices, r = fabric.util.invertTransform;
    fabric.util.qrDecompose;
    let o = new fabric.Canvas("can");
    o.selection = false;
    o.set({preserveObjectStacking: !0});
    let i = !0, l = new fabric.Ellipse({
        rx: 50,
        ry: 30,
        fill: "transparent",
        strokeWidth: 1,
        stroke: "red",
        strokeUniform: !0,
        padding: 0,
        lockScalingFlip: !0
    }), a = l.rx + 30, c = l.ry + 30;

    function s(e) {
        return new fabric.Line(e, {
            fill: "red",
            stroke: "red",
            strokeWidth: 1,
            hasBorders: !1,
            hasControls: !1,
            centeredRotation: !1,
            padding: 0,
            strokeUniform: !0,
            selectable: !1,
            originX: "center",
            originY: "center"
        })
    }

    l.on({
        moving: () => {
            E(l)
        }, scaling: () => {
            E(l)
        }, rotating: () => {
            E(l)
        }, mouseup: () => {
            E(l)
        }
    });
    let d = s([l.getCenterPoint().x - a, l.getCenterPoint().y, l.getCenterPoint().x + a, l.getCenterPoint().y]),
        g = s([l.getCenterPoint().x, l.getCenterPoint().y - c, l.getCenterPoint().x, l.getCenterPoint().y + c]),
        u = new fabric.Triangle({
            angle: 90,
            top: l.getCenterPoint().y,
            left: l.getCenterPoint().x + a,
            width: 10,
            height: 30,
            fill: "red",
            stroke: "orange",
            strokeWidth: 0,
            originX: "center",
            originY: "center"
        }), f = new fabric.Triangle({
            angle: 0,
            top: l.getCenterPoint().y - c,
            left: l.getCenterPoint().x,
            width: 10,
            height: 30,
            fill: "red",
            stroke: "orange",
            strokeWidth: 0,
            originX: "center",
            originY: "center"
        }), y = new fabric.Text("X", {
            top: l.getCenterPoint().y,
            left: l.getCenterPoint().x + a,
            originX: "center",
            originY: "center",
            fontSize: 10
        }), h = new fabric.Text("Y", {
            top: l.getCenterPoint().y - c,
            left: l.getCenterPoint().x,
            originX: "center",
            originY: "center",
            fontSize: 10
        }), m = new fabric.Group([d, u, g, f, y, h]);
    m.set({selectable: !1}), o.add(m), o.add(l);
    new fabric.Rect({
        left: 100,
        top: 50,
        width: 20,
        height: 100,
        fill: "transparent",
        objectCaching: !1,
        stroke: "blue",
        strokeWidth: 1
    });
    let x = new fabric.Polygon([{x: 100, y: 50}, {x: 100, y: 130}, {x: 110, y: 150}, {x: 120, y: 130}, {
        x: 120,
        y: 50
    }], {fill: "transparent", objectCaching: !1, stroke: "blue", strokeWidth: 1, lockScalingFlip: !0});
    o.add(x);
    let p = new fabric.Polygon([{x: 150, y: 50}, {x: 140, y: 70}, {x: 140, y: 150}, {x: 160, y: 150}, {
        x: 160,
        y: 70
    }], {fill: "transparent", objectCaching: !1, stroke: "green", strokeWidth: 1, lockScalingFlip: !0});
    o.add(p);
    new fabric.Rect({
        left: 140,
        top: 50,
        width: 20,
        height: 100,
        fill: "transparent",
        objectCaching: !1,
        stroke: "green",
        strokeWidth: 1
    });

    let b = W([110, 50, 110, 150]), P = W([150, 50, 150, 150]);

    function C(e) {
        return new fabric.Circle({
            radius: 6,
            fill: e,
            opacity: 0,
            originX: "center",
            originY: "center",
            padding: 20,
            cornerSize: 0,
            hasRotatingPoint: !1,
            selectable: !1
        })
    }

    o.add(b), o.add(P);
    let k, v, B, I, _ = C("blue"), T = C("green");

    function w(e, t) {
        e.minions = t;
        let o = e.calcTransformMatrix(), i = r(o);
        e.relationship = n(i, t.calcTransformMatrix())
    }

    function E(e) {
        if (!e.minions) return;
        let t = e.relationship, r = n(e.calcTransformMatrix(), t), o = fabric.util.qrDecompose(r);
        e.minions.set({flipX: !1, flipY: !1}), e.minions.setPositionByOrigin({
            x: o.translateX,
            y: o.translateY
        }, "center", "center"), e.minions.set(o), e.minions.setCoords(), E(e.minions)
    }

    function M(e, t) {
        e.on("moving", () => {
            !function (e, t) {
                let n = L(t), r = {
                    x: e.getCenterPoint().x - t.getCenterPoint().x,
                    y: e.getCenterPoint().y - t.getCenterPoint().y
                }, o = r.x * n.x + r.y * n.y;
                e.setPositionByOrigin({
                    x: t.getCenterPoint().x + o * n.x,
                    y: t.getCenterPoint().y + o * n.y
                }, "center", "center"), e.setCoords()
            }(e, t)
        }), e.on("mouseup", () => {
            w(t, e)
        })
    }

    _.setPositionByOrigin({x: b.x2, y: b.y2}, "center", "center"), T.setPositionByOrigin({
        x: P.x1,
        y: P.y1
    }, "center", "center"), o.add(_), o.add(T), w(l, m), w(x, b), w(b, _), w(p, P), w(P, T), x.on({
        moving: () => {
            E(x)
        }, scaling: () => {
            E(x)
        }, rotating: () => {
            E(x)
        }, mouseup: () => {
            E(x)
        }
    }), p.on({
        moving: () => {
            E(p)
        }, scaling: () => {
            E(p)
        }, rotating: () => {
            E(p)
        }, mouseup: () => {
            E(p)
        }
    }), M(_, b), M(T, P);
    let z = j(_.getCenterPoint(), T.getCenterPoint(), "horizon");
    k = O(z.horizon), v = O(z.vertical);
    let S = j(l.getCenterPoint(), _.getCenterPoint(), "horizon");

    function j(e, t, n) {
        let r = q(e, t), o = {x: Math.cos(l.angle * Math.PI / 180), y: Math.sin(l.angle * Math.PI / 180)},
            i = U(r, o) * o.x, a = U(r, o) * o.y;
        return {horizon: [e.x, e.y, e.x + i, e.y + a], vertical: [e.x + i, e.y + a, t.x, t.y]}
    }

    function O(e) {
        return new fabric.Line(e, {
            strokeDashArray: [10, 5],
            fill: "orange",
            stroke: "orange",
            strokeWidth: 1,
            hasBorders: !1,
            hasControls: !1,
            centeredRotation: !1,
            padding: 0,
            strokeUniform: !0,
            selectable: !1
        })
    }

    function W(e) {
        return new fabric.Line(e, {
            fill: "red",
            stroke: "red",
            strokeWidth: 1,
            hasBorders: !1,
            hasControls: !1,
            centeredRotation: !1,
            padding: 0,
            strokeUniform: !0,
            selectable: !1
        })
    }

    B = O(S.horizon), I = O(S.vertical), o.add(k), o.add(v), o.add(B), o.add(I), o.bringToFront(_), o.bringToFront(T);
    const F = document.querySelector("input[type=file]");
    let R;
    F.addEventListener("change", () => {
        const e = new FileReader;
        e.readAsDataURL(F.files[0]), e.onload = () => {
            fabric.Image.fromURL(e.result, e => {
                o.setWidth(e.width), o.setHeight(e.height), o.setBackgroundImage(e, o.renderAll.bind(o))
            })
        }
    }, !1);
    let X = document.getElementsByName("position");
    document.getElementById("select_position").onclick = () => {
        for (let e = 0; e < X.length; e++) if (X[e].checked) {
            R = X[e].value, console.log(R);
            break
        }
        document.getElementById("direction").innerText = "frontal" === R ? "内侧" : "前部"
    }, document.getElementById("enter").onclick = function () {
        document.getElementsByName("choice").forEach(e => {
            e.innerText = "frontal" === R ? "正位" : "侧位"
        }), console.log("The angle of line_up is " + b.angle), console.log("The angle of line_down is " + P.angle);
        let e, t = document.getElementById("actual_radium").value / Math.max(l.getScaledWidth(), l.getScaledHeight());
        document.getElementById("dist_zheng").value = (t * x(k)).toFixed(2), document.getElementById("dist_zhou").value = (t * x(v)).toFixed(2), document.getElementById("dist_huan_zheng").value = (t * x(B)).toFixed(2), document.getElementById("dist_huan_zhou").value = (t * x(I)).toFixed(2);
        let n = function (e) {
            e < -180 ? e += 360 : e >= -180 && e <= 180 || (e -= 360);
            return e
        }(P.angle - b.angle);
        document.getElementById("angle_zheng").value = Math.abs(n).toFixed(2), i ? (e = l.angle, document.getElementById("angle_sign").innerText = n > 0 ? "lateral" === R ? "屈曲" : "外翻" : "lateral" === R ? "反张" : "内翻") : (e = l.angle + 180, document.getElementById("angle_sign").innerText = -1 * n > 0 ? "lateral" === R ? "屈曲" : "外翻" : "lateral" === R ? "反张" : "内翻");
        let r = l.angle - 90, o = q({x: 0, y: 0}, {x: Math.cos(e * Math.PI / 180), y: Math.sin(e * Math.PI / 180)}),
            a = q({x: 0, y: 0}, {x: Math.cos(r * Math.PI / 180), y: Math.sin(r * Math.PI / 180)});

        function c(e) {
            return {x: e.x2 - e.x1, y: e.y2 - e.y1}
        }

        let s = c(k), d = c(v), g = c(B), u = c(I), f = U(o, s), y = U(a, d), h = U(o, g);
        U(a, u);

        function m(e, t) {
            return e > 0 ? t.greater : t.less
        }

        function x(e) {
            return Math.sqrt((e.x2 - e.x1) * (e.x2 - e.x1) + (e.y2 - e.y1) * (e.y2 - e.y1))
        }

        console.log(t * y, t * f, t * h), "lateral" === R ? (document.getElementById("direct_zheng").innerText = m(f, {
            greater: "前部",
            less: "后部"
        }), document.getElementById("direct_zhou").innerText = m(y, {
            greater: "短缩",
            less: "过长"
        }), document.getElementById("direct_huan_zheng").innerText = m(h, {
            greater: "后部",
            less: "前部"
        })) : (document.getElementById("direct_zheng").innerText = m(f, {
            greater: "内侧",
            less: "外侧"
        }), document.getElementById("direct_zhou").innerText = m(y, {
            greater: "短缩",
            less: "过长"
        }), document.getElementById("direct_huan_zheng").innerText = m(h, {greater: "外侧", less: "内侧"}))
    };
    let Y = !1;

    function L(e) {
        let t = e.aCoords.tl.x - e.aCoords.bl.x, n = e.aCoords.tl.y - e.aCoords.bl.y, r = Math.sqrt(t * t + n * n);
        return {x: t / r, y: n / r}
    }

    function U(e, t) {
        return e.x * t.x + e.y * t.y
    }

    function q(e, t) {
        return {x: t.x - e.x, y: t.y - e.y}
    }

    document.onmousedown = function (e) {
        Y = !0
    }, document.onmousemove = function (e) {
        Y && function () {
            let e = j(_.getCenterPoint(), T.getCenterPoint()), t = j(l.getCenterPoint(), _.getCenterPoint());

            function n(e, t) {
                e.set({x1: t[0], y1: t[1], x2: t[2], y2: t[3]})
            }

            n(k, e.horizon), n(v, e.vertical), n(B, t.horizon), n(I, t.vertical), o.renderAll()
        }()
    }, document.onmouseup = function (e) {
        Y = !1
    }, document.getElementById("zheng").onclick = () => {
        i = !0
    }, document.getElementById("fu").onclick = () => {
        i = !1
    }
}]);
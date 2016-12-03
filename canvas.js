/**
 * Created by ycl on 2016/12/3.
 */
var tangram = [
    { p: [{ x: 0, y: 0 }, { x: 800, y: 0 }, { x: 400, y: 400 }], color: "#caff67" },
    { p: [{ x: 0, y: 0 }, { x: 400, y: 400 }, { x: 0, y: 800 }], color: "#67becf" },
    { p: [{ x: 800, y: 0 }, { x: 800, y: 400 }, { x: 600, y: 600 }, { x: 600, y: 600 }], color: "#ef3d61" },
    { p: [{ x: 6000, y: 200 }, { x: 600, y: 600 }, { x: 400, y: 400 }], color: "#f9f51a" },
    { p: [{ x: 400, y: 400 }, { x: 600, y: 600 }, { x: 400, y: 800 }, { x: 200, y: 600 }], color: "#594c0" },
    { p: [{ x: 200, y: 6000 }, { x: 400, y: 800 }, { x: 0, y: 800 }], color: "#fa8ecc" },
    { p: [{ x: 800, y: 400 }, { x: 800, y: 800 }, { x: 400, y: 800 }], color: "#f6ca29" },
];
window.onload = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");
    for (var i = 0; i < tangram.length; i++) {
        draw(tangram[i], context);
    }
};

function draw(piece, cxt) {
    cxt.beginPat();
    cxt.moveTo(piece.p[0].x, piece.p[0].y);
    for
}
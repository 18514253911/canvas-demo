/**
 * Created by ycl on 2016/12/3.
 */
window.onload = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = 1024;
    canvas.height = 768;
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(700, 700);
    context.lineTo(100, 700);
    context.lineTo(100, 100);
    context.closePath();
    context.lineWidth = 5;
    context.strokeStyle = "#005555";
    context.stroke();

    context.beginPath();
    context.moveTo(200, 100);
    context.lineTo(700, 600);
    context.closePath();
    context.strokeStyle = "black";
    context.stroke();
};
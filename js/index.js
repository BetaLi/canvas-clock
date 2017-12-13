// const drawing = document.getElementById("drawing");
// if(drawing.getContext){
//     const context = drawing.getContext("2d");
//
//     context.beginPath();
//
//     context.arc(100,100,100,0,2*Math.PI,false);
//     context.moveTo(194,100);
//     context.arc(100,100,94,0,2*Math.PI,false);
//     context.closePath();
//
//     context.translate(100,100);
// //秒针
//     setInterval(()=>{
//         context.rotate(1);
//         context.moveTo(0,0);
//         context.lineTo(0,90);
//         context.stroke();
//         },1000);
//
// //分针
//     context.moveTo(0,0);
//     context.lineTo(0,-85);
// //时针
//     context.moveTo(0,0);
//     context.lineTo(-65,0);
//
//    // context.stroke();
// }

const box = document.getElementById('box');
const cxt = box.getContext('2d');
function clock(){
    const date = new Date();
    let h = date.getHours();
    h = h + h/60;
    h = h>12? h-12:h;
    const m = date.getMinutes();
    const s = date.getSeconds();
    // 清画布
    cxt.clearRect(0,0,500,500);
    // 画表盘
    cxt.strokeStyle = 'fff';
    cxt.lineWidth = 6;
    cxt.beginPath();
    cxt.arc(250,250,100,0,2*Math.PI);
    cxt.stroke();
    // 画时钟刻度
    for(let i=0; i<12; i++){
        cxt.save();
        cxt.translate(250,250);
        cxt.rotate(30*i*Math.PI/180);
        cxt.lineWidth = 3;
        cxt.beginPath();
        cxt.moveTo(0,-80);
        cxt.lineTo(0,-92);
        cxt.stroke();
        cxt.restore();
    }
    //画分钟刻度
    for(let i=0; i<60; i++){
        cxt.save();
        cxt.translate(250,250);
        cxt.rotate(6*i*Math.PI/180);
        cxt.lineWidth = 2;
        cxt.beginPath();
        cxt.moveTo(0,-86);
        cxt.lineTo(0,-92);
        cxt.stroke();
        cxt.restore();
    }
    // 画时针
    cxt.save();
    cxt.lineWidth = 5;
    cxt.translate(250,250);
    cxt.rotate(h*30*Math.PI/180);
    cxt.beginPath();
    cxt.moveTo(0,6);
    cxt.lineTo(0,-40);
    cxt.stroke();
    cxt.restore();
    // 画分针
    cxt.save();
    cxt.lineWidth = 3;
    cxt.translate(250,250);
    cxt.rotate(m*6*Math.PI/180);
    cxt.beginPath();
    cxt.moveTo(0,8);
    cxt.lineTo(0,-60);
    cxt.stroke();
    cxt.restore();
    // 画秒针
    cxt.save();
    cxt.lineWidth = 1;
    cxt.translate(250,250);
    cxt.rotate(s*6*Math.PI/180);
    cxt.beginPath();
    cxt.moveTo(0,10);
    cxt.lineTo(0,-75);
    cxt.stroke();
    cxt.restore();
    // 画中心的小圆固定三根针
    cxt.save();
    cxt.beginPath();
    cxt.fillStyle = '#0f0';
    cxt.lineWidth = 2;
    cxt.translate(250,250);
    cxt.arc(0,0,2,0,360,false);
    cxt.stroke();
    cxt.fill();
    cxt.restore();
    // 画秒针上的园
    cxt.save();
    cxt.fillStyle = '#f00';
    cxt.lineWidth = 2;
    cxt.translate(250,250);
    cxt.rotate(s*6*Math.PI/180);
    cxt.beginPath();
    cxt.arc(0,-60,2,0,360,false);
    cxt.stroke();
    cxt.fill();
    cxt.restore();
}
clock();
setInterval(clock,1000);
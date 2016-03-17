/**
 * Created by Administrator on 2016/3/10.
 */
var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;
var lastTime;
var deltaTime;

var bgPic = new Image();
var ane;
var fruit;

var mx;
var my;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];

var momBodyOra = [];
var momBodyBlue = [];

var dustPic = [];

var mom;
var baby;

var data;
var wave;
var halo;
var dust;

document.body.onload = game;

function game(){
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init(){
    can1 = document.getElementById("canvas1");//fishes,dust. UI, circle
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById("canvas2");//background, ane, fruit
    ctx2 = can2.getContext('2d');

    can1.addEventListener('mousemove', onMouseMove, false);

    bgPic.src = "images/background.jpg";
    canWidth = can1.width;
    canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    wave = new waveObj();
    wave.init();

    halo = new haloObj();
    halo.init();

    data = new dataObj();

    dust = new dustObj();
    dust.init();

    mx = canWidth * .5;
    my = canHeight * .5;

    for(var i =0; i < 8; i++){
        babyTail[i] = new Image();
        babyTail[i].src = "images/babyTail" + i + '.png';
    }

    for(var i =0; i < 2; i++){
        babyEye[i] = new Image();
        babyEye[i].src = "images/babyEye" + i + '.png';
    }

    for(var i=0; i < 20; i++){
        babyBody[i] = new Image();
        babyBody[i].src = "images/babyFade" + i + '.png';
    }

    //mom for
    for(var i=0; i < 8; i++){
        momTail[i] = new Image();
        momTail[i].src = "images/bigTail" + i + '.png';
    }

    for(var i=0; i < 2; i++){
        momEye[i] = new Image();
        momEye[i].src = "images/bigEye" + i + '.png';
    }

    for(var i=0; i < 8; i++){
        momBodyOra[i] = new Image();
        momBodyBlue[i] = new Image();
        momBodyOra[i].src = "images/bigSwim" + i + '.png';
        momBodyBlue[i].src = "images/bigSwimBlue" + i + '.png';
    }

    for(var i=0; i < 7; i++)
    {
        dustPic[i] = new Image();
        dustPic[i].src = "images/dust" + i + '.png';
    }
    //data 内优化
    ctx1.textAlign = "center";
    ctx1.font ="30px Verdana";

}

function gameloop(){
    requestAnimFrame(gameloop);//setInterval, setTimeout, frame per second//
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if(deltaTime > 40){deltaTime = 40}
    background();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0, 0, canWidth, canWidth);
    momFruitCollision();
    momBabyCollision();
    mom.draw();
    baby.draw();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();

}


    function onMouseMove(e)
    {
        if(data.gameOver)
        {
        if(e.offSetX || e.layerX)
        {
            mx = e.offSetX == undefined ? e.layerX : e.offSetX;
            my = e.offSetY == undefined ? e.layerY : e.offSetY;
        }
        }
    }

/**
 * Created by Administrator on 2016/3/15.
 */
var dataObj = function (){
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = true;
    this.alpha = 0;
};


dataObj.prototype.draw = function () {
    var w = canWidth;
    var h = canHeight;

    ctx1.save();
    ctx1.shadowBlur = 20;
    ctx1.shadowColor = "white";
    ctx1.fillStyle = 'white';
    ctx1.fillText('score: ' + this.score, w * .5, h - 30);

    if(!this.gameOver)
    {
        this.alpha += deltaTime * 0.0001;
        if(this.alpha > 1)
        {
            this.alpha = 1;
        }
        ctx1.fillStyle = "rgba(255, 255, 255," + this.alpha +")";
        ctx1.fillText("GAMEOVER", w *.5, h *.5)
    }
    ctx1.restore();
};


dataObj.prototype.addScore = function () {
    this.score += this.fruitNum * 100 * this.double;
    this.fruitNum = 0;
    this.double = 1;
};
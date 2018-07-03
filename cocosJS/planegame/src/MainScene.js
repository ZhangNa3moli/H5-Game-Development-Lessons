var MainLayer = cc.Layer.extend({
    arr:[],
    plane:null,
    scoreLabel:null,
    score:0,
    enemy:null,
    speed:4,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //实现无限连续滚屏
        for(var i=0;i<2;i++){
            var bg = new cc.Sprite(res.bg1_png);
            bg.x
        }


        //启动无限滚屏定时器
        this.schedule(this.bgCallBack,0.01),

        return true;
    },

    bgCallBack:function(dt){
        for(var i in this.arr){
            if(this.arr[i].y < -720){
                this.arr[i].y += 2*1280;
            }
            this.arr[i].y -= 2;
            this.score += 1;
            this.scoreLabel.setString(this.score+"米");
        }
    },
    enemyCallBack:function(dt){}


});

var MainScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});

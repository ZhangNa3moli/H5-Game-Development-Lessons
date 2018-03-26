var HelloWorldLayer = cc.Layer.extend({
    redLayer:null,
    sprite:null,
    speed:0,
    //direct:1,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        var redlayer = new cc.LayerColor(cc.color.RED,100,100);
        redlayer.ignoreAnchor = false;
        redlayer.setAnchorPoint(0.5,0.5);
        redlayer.y = size.height/2;
        this.redLayer = redlayer;//
        this.addChild(this.redLayer);
        //this指（下边的）实例化出来的层节点

        //this.scheduleUpdate();//this指实例化的对象layer

        this.schedule(this.myCallBack,0.02,cc.REPEAT_FOREVER,0);
        return true;
    },
    update:function(dt){
        this.redlayer.x += 1;
        //cc.log(dt);
    },
    myCallBack:function(dt){

        if( this.redSprite.y < 0){
            this.speed = -this.speed;
        }else{
            this.speed += 0.2;
            //this.speed +=10*dt;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
        //this指实例化出来的场景节点
    }
});


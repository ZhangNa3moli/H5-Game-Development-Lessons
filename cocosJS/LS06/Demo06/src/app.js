
var HelloWorldLayer = cc.Layer.extend({
    redLayer:null,
    //direct:1,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var redlayer = new cc.LayerColor(cc.color.RED,100,100);
        redlayer.ignoreAnchor = false;
        redlayer.setAnchorPoint(0.5,0.5);
        redlayer.y = size.height/2;
        this.redLayer = redlayer;//
        this.addChild(this.redLayer);
        //this指（下边的）实例化出来的层节点

        //this.scheduleUpdate();//this指实例化的对象layer

        this.schedule(this.myCallBack,0.2,cc.REPEAT_FOREVER,2);
        return true;
    },
    update:function(dt){
        this.redlayer.x += 1;
        //cc.log(dt);
    },
    myCallBack:function(){
        this.redLayer.x+=20;
        if(this.redLayer.x > 400){
            this.unschedule(this.myCallBack);
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


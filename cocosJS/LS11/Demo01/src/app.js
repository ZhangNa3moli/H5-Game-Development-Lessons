
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var listener = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegin:function(touch,event){
                cc.log("onTouchBegan",touch);
                return true;
            },
            onTouchMoved:function(touch,event){
                cc.log("onTouchMoved");
            },
            onTouchEnded :function(touch,event){
                cc.log(onTouchEnded);
        }

        });

        //this指谁去监听这个事件，在此是单点事件

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


var SecondLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var size = cc.winSize;

        var bg = new cc.Sprite(res.Bg);
        bg.x = size.width/2;
        bg.y = size.height/2;
        this.addChild(bg);

        var plane = new cc.sprite(res.Plane);
        plane.x = size.width/2;
        plane.y = size.height/2;
        this.addChild(plane);

        return true;
    }
});

var SecondScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new SecondLayer();
        this.addChild(layer);
    }
});
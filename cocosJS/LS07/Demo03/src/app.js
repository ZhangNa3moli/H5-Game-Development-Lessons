
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var mucicOnItem = new cc.MenuItemImage(res.Begin_png,res.Pick_png,function (){

        },this);
        var musicOffItem = new cc.MenuItemImage(res.Stop_png,res.Pick_png,function(){

        },this);

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


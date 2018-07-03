var FontLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.WHITE));

    }
});
var FontScene= cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new FontLayer();
        this.addChild(layer);
    }
});
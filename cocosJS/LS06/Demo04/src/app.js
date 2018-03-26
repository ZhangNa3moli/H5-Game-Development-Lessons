
var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;

        //坐标系变换   世界坐标系->本地坐标系
        var node3 = new cc.Sprite(res.Red_png);
        node3.setAnchorPoint(cc.p(1.0,1.0));
        node3.x=200;
        node3.y=200;
        this.addChild(node3);

        var node4=new cc.Sprite(res.Yellow_png);
        node4.setAnchorPoint(cc.p(0.5,0.5));
        node4.x=50;
        node4.y=50;
        this.addChild(node4);

        var point = node3.convertToNodeSpace(node4.getPosition());//不考虑锚点
       var point = node3.convertToNodeSpaceAR(node4.getPosition());
       cc.log(point.x);
       cc.log(point.y);

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


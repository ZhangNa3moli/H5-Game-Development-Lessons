
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var layer1 = new cc.LayerColor(cc.color.RED,200,200);
        layer1.ignoreAnchor  = false;//
        layer1.x = size.width/2;
        layer1.y = size.height/2;
        this.addChild(layer1);
        //this指实例化出来的层节点

        var layer2 = new cc.LayerColor(cc.color.YELLOW,200,200);
        layer2.ignoreAnchor  = false;
        layer2.x = size.width/8;
        layer2.y = size.height/2;
        //this.setTag("aaa");
        this.addChild(layer2);
        //this指实例化出来的层节点

        var layer3 = new cc.LayerColor(cc.color.BLUE,200,200);
        layer3.ignoreAnchor  = false;
        layer3.x = size.width*5/6;
        layer3.y = size.height/2;
        this.addChild(layer3);
        //this指实例化出来的层节点


        return true;
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


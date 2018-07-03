var MainLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var layer = new cc.LayerColor(cc.color.RED);
        this.addChild(layer);

        var size = cc.winSize;
        var label = new cc.LabelTTF("这是一个主场景","",50);//label在颜色层上边
        label.x = size.width*0.5 ;
        label.y = size.height*0.7;
        this.addChild(label);//this指颜色层

        var menuItem = new cc.MenuItemFont("跳转到第开始场景" ,function(){
            //cc.director.runScene(new MainScene());
            cc.director.runScene(new cc.TransitionMoveInL(2,new StartScene));
        },this);
        menuItem.setFontSize(50);
        var menu = new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menu.x = size.width*0.5;
        menu.y = size.height*0.3;
        this.addChild(menu);
    }
});

var MainScene = cc.Scene.extend({
    ctor: function () {
        this._super();
        //var layer = new cc.LayerColor(cc.color.RED);
        var layer = new MainLayer();
        this.addChild(layer);
    }
});
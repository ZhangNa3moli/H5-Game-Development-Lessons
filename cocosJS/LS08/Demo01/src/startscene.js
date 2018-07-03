var StartLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var layer = new cc.LayerColor(cc.color.BLUE);
        this.addChild(layer);//this指实例化出来的Start层节点


    var size = cc.winSize;
    var label = new cc.LabelTTF("这是一个场景","",50);//label在颜色层上边
    label.x = size.width*0.5 ;
    label.y = size.height*0.7;
    this.addChild(label);//this指颜色层

     var menuItem = new cc.MenuItemFont("跳转到主场景" ,function(){
         //cc.director.runScene(new MainScene());
         cc.director.runScene(new cc.TransitionMoveInL(2,new MainScene));
     },this);
     menuItem.setFontSize(50);
     var menu = new cc.Menu(menuItem);
     menu.setPosition(0,0);
     menu.x = size.width*0.5;
     menu.y = size.height*0.3;
     this.addChild(menu);
    }
});

var StartScene = cc.Scene.extend({
    ctor: function () {
        this._super();
        //var layer = new cc.LayerColor(cc.color.RED);
        var layer = new StartLayer();
        this.addChild(layer);//this指实例化出来的Start场景节点
    }
});
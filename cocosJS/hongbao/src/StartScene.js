var StartLayer = cc.Layer.extend({
    //背景和图片都是sprite精灵，开始游戏是菜单
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //this.addChild(new cc.LayerColor(cc.color.YELLOW));
        //添加背景
        var bg  = new cc.Sprite(res.KaiShiBeiJing_jpg);
        bg.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(bg);

        //添加logo
        var logo = new cc.Sprite(res.Logo);
        logo.x = size.width*0.5;
        logo.y = size.height*1.5;
        this.addChild(logo);

        //moveTo开头小写 直接调用  不用new   MoveTo必须new scaleTo同
        //设置logo的入场动画
        var moveTo = cc.moveTo(0.5,logo.x,size.height*0.65).easing(cc.easeElasticOut(0.5));
        logo.runAction(moveTo);

        //添加菜单
        //参数：1  2 ：按下按钮和没按按钮时的图片  3：回调函数   4：指向
        var startMenuItem = new cc.MenuItemImage(res.KaiShiAnNiu_png,res.KaiShiAnNiuB_png,function(){
            cc.director.runScene(new MainScene);
        },this);
        startMenuItem.x = size.width/2;
        startMenuItem.y = size.height*0.3;
        //设置一个菜单把menu传进去
        var menu = new cc.Menu(startMenuItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu);

        //设置开始按钮的动画效果
        //从0放大到一倍，speed的线性变化效果
        startMenuItem.scale = 0;
        var scaleAction = cc.scaleTo(0.5,1.0).easing(cc.easeElasticOut(0.5));
        var seq = cc.sequence(cc.delayTime(0.5),scaleAction);
        startMenuItem.runAction(seq);





        return true;
    }
});

var StartScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});
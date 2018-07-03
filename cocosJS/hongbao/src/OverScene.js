var OverLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.BLUE));

        //背景
        var bg=new cc.Sprite(res.JieShuBeiJing_jpg);
        bg.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(bg);

        //展示框
        var frame=new cc.Sprite(res.JieShuKuang);
        frame.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(frame);

        //添加菜单
        var startMenuItem=new cc.MenuItemImage(res.ZaiLaiAnNiu_png,res.ZaiLaiAnNiuB_png,function(){
            cc.director.runScene(new StartScene());
        },this);
        startMenuItem.x=size.width*0.3;
        startMenuItem.y=size.height*0.2;

        var menu=new cc.Menu(startMenuItem);
        menu.x=0;
        menu.y=0;
        this.addChild(menu);

        var showMenuItem=new cc.MenuItemImage(res.XuanYaoAnNiu_png,res.XuanYaoAnNiuB_png,function(){
            //cc.director.runScene(new StartScene());
        },this);
        showMenuItem.x=size.width*0.7;
        showMenuItem.y=size.height*0.2;

        var menu2=new cc.Menu(showMenuItem);
        menu2.x=0;
        menu2.y=0;
        this.addChild(menu2);


        //读取展示分数
        var scoreLabel=new cc.LabelTTF("","",size.width/10);
        scoreLabel.x=size.width*0.46;
        scoreLabel.y=size.width*1.02;
        scoreLabel.setFontFillColor(cc.color.YELLOW);
        frame.addChild(scoreLabel);

        //读取存储的数据
        var score=cc.sys.localStorage.getItem("currentScore");
        scoreLabel.setString(score);
        //设置score的放大和speed变化效果
        scoreLabel.scale=0;
        var scaleAction=cc.scaleTo(0.5,1).easing((cc.easeElasticOut(0.5)));
        var seq=cc.sequence(cc.delayTime(0.2),scaleAction);
        scoreLabel.runAction(seq);


        return true;
    }
});

var OverScene= cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new OverLayer();
        this.addChild(layer);
    }
});
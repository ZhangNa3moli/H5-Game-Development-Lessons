var MainLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.GRAY));

        var ls = cc.sys.localStorage;
        //返回按钮
        var startMenuItem = new cc.MenuItemFont("返 回", function () {
            //if (ls.getItem("isEffectOn") == "YES") {
            //    cc.audioEngine.playEffect(res.Click_mp3);
            //}
            EffectEngine.playEffect(res.Click_mp3);
            cc.director.runScene(new ASStartScene());
        }, this);
        startMenuItem.setFontSize(80);
        startMenuItem.setColor(cc.color.BLACK);
        startMenuItem.setFontName("Arial");

        //菜单
        startMenuItem.x = size.width/2;
        startMenuItem.y = size.height/2;

        var menu = new cc.Menu(startMenuItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu);
        return true;
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});

//封装
var EffectEngine = function(){};
//自定义一个音效，多个音效均可采用此方法，不用每次都判断
EffectEngine.playEffect = function(url){
    if (cc.sys.localStorage.getItem("isEffectOn") == "YES") {
        cc.audioEngine.playEffect(url);
    }
};
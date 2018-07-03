
var HelloWorldLayer = cc.Layer.extend({
    sprites:[],
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.GRAY));
        //创建精灵数组
        for(var i=0;i<3;i++){
            this.sprites[i] = new cc.Sprite("res/sprite"+(i+1)+".png");
            this.sprites[i].x = size.width*0.2;
            this.sprites[i].y = size.height*(0.3*i+0.2);
            this.addChild(this.sprites[i]);
        }
        //即时动作
       /*

        var action1  = new cc.Place(300,size.height*0.2);
        this.sprites[0].runAction(action1);

        //this.sprites[1].runAction(cc.flipX(true));
        this.sprites[1].runAction(cc.flipY(true));

        this.sprites[2].runAction(cc.hide());
        //this.sprites[2].runAction(cc.show());

        this.sprites[2].runAction(cc.callFunc(function(){
            this.sprites[2].runAction(cc.show());
            cc.log("callFunc调用");
        },this));
        */
       //间隔动作
       /*
        //练习一
        //移动初始位置
        var action1 = cc.moveBy(5,200,0);
        //this.sprites[0].runAction(action1);
        //跳的最终位置
        this.sprites[0].runAction(cc.jumpTo(10,cc.p(400,400),50,2));

        //移动到哪
        this.sprites[0].runAction(cc.moveTo(10,400,400));

        //从哪开始跳，跳10s钟，x=300,y=0,跳的最高的高度是50,跳4次
        this.sprites[2].runAction(cc.jumpBy(10,cc.p(300,0),50,4));

        //旋转多少角度
        this.sprites[2].runAction(cc.rotateBy(10.0,90,0));
        //旋转到多少角度
       this.sprites[1].runAction(cc.rotateTo(10.0,90,0));

        var node_MenuItem1,node_MenuItem2;
        var isPaused = false;
        node_MenuItem1 = new cc.MenuItemFont("暂停/恢复",function(){
            if(!isPaused){
                this.sprites[1].pause();
                isPaused = !isPaused;
                cc.log("pause sprites[0]");
            }else{
                this.sprites[1].resume();
                isPaused = !isPaused;
                cc.log("pause sprites[0]");
            }
        },this);

        node_MenuItem2 = new cc.MenuItemFont("停止动作",function () {
            // this.sprites[1].stopAction();//需要传对应的action对象
            // this.sprites[1].stopActinByTag(tag);
            //通过tag得到对应的节点
            this.sprites[1].stopAllActions();
        },this);

        var menu = new cc.Menu(node_MenuItem1,node_MenuItem2);
        menu.y = size.height*0.5;
        menu.alignItemsHorizontallyWithPadding(50);
        this.addChild(menu);
      */


       /*
       //间隔动作练习二
        //this.sprites[0].runAction(cc.scaleBy(2.0,0.5));
        //this.sprites[0].runAction(cc.scaleBy(2.0,0.8,0.5));
        this.sprites[0].runAction(cc.scaleTo(2.0,1.2,1.2));

        this.sprites[1].runAction(cc.fadeOut(2.0));
        this.sprites[2].setOpacity(0);
        this.sprites[2].runAction(cc.fadeIn(5.0));

        var directorPauseItem,directorResumeItem;
        directorPauseItem = new cc.MenuItemFont("pause",function () {
            cc.director.pause();
        },this);
        directorResumeItem = new cc.MenuItemFont("resume",function () {
            cc.director.resume();
        },this);

        var menu = new cc.Menu(directorPauseItem,directorResumeItem);
        menu.y = size.height*0.5;
        menu.alignItemsHorizontallyWithPadding(50);
        this.addChild(menu);
     */

       /*
       //练习三 闪烁 进度条 颜色
        this.sprites[0].runAction(cc.blink(20.0,10));
        //this.sprites[0].runAction(cc.speed(cc.blink(20.0,10),5));//5倍速

        // 变速 speed 与 ease
        this.sprites[1].runAction(cc.speed(cc.moveBy(20,300,0),5));//5倍速

        var tempAct = cc.moveBy(5.0,200,0);
        //var tempEaseAction = tempAct.easing(cc.easeElasticIn());
        var tempEaseAction = tempAct.easing(cc.easeElasticInOut());//cc.easeBackIn();
        this.sprites[2].runAction(tempEaseAction);


        var timer = new cc.ProgressTimer(this.sprites[1]);
        timer.x = this.sprites[1].x+100;
        timer.y = this.sprites[1].y;
        this.addChild(timer);
        //timer.type = cc.ProgressTimer.TYPE_RADIAL;
        timer.type = cc.ProgressTimer.TYPE_BAR;
        timer.midPoint = cc.p(0,0);//控制变化起始点
        timer.barChangeRate = cc.p(0, 1);//控制y方向的变化率
        //timer.barChangeRate = cc.p(1, 0);//控制x方向的变化率
        // timer.runAction(cc.progressFromTo(5.0,0,90));
        timer.runAction(cc.progressTo(20.0,100));
    */

        //组合动画
     /*
        var action1 = cc.moveBy(2.0,100,0);
        var action2 = cc.rotateBy(2.0,90);
        var action3= cc.delayTime(2);
        var action4 = cc.scaleTo(5,0.5);
        //2.回调   callFunc小写
        var cAction = cc.callFunc(function(){
            //cc.log("sequence组合执行结束");
            this.sprites[0].runAction(cc.scaleTo(2,1.0));
        },this);
        //1.顺序执行  可以是及时执行  也可以间隔执行（隔段时间在执行）
        // 执行时只能实现一种动画，不能同时实现两种效果  例：平移又旋转
        var sAction = cc.sequence(action1,action3,action2,action4,cAction);
        this.sprites[0].runAction(sAction);
     */

    /*
     // 同步执行spawn组合动作
        var action3 = cc.moveBy(2.0,200,0);
        var action4 = cc.rotateBy(2.0,90);
        var cAction = cc.callFunc(function(){
            cc.log("xx");
        },this);
        //注意不要在spawn中使用callFunc
        this.sprites[1].runAction(cc.spawn(action3,action4));
     */

    //3.重复执行  repeat动作组合
        var action5 = cc.rotateBy(2.0,90);
        //this.sprites[2].runAction(cc.repeat(action5,5));
        //this.sprites[2].runAction(cc.repeatForever(action5));
        //this.sprites[2].runAction(action5.repeat(5));
        this.sprites[2].runAction(action5.repeatForever());


        //5.反向执行  reverse动作组合
        var action6 = cc.moveBy(2.0,200,0);
        var action7 = action6.reverse();
        this.sprites[0].runAction(cc.sequence(action6,action7));
        // this.sprites[2].runAction(cc.sequence(action6,action6.reverse());


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


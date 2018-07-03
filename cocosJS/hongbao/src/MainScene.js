var MainLayer = cc.Layer.extend({
    timeLabel:null,
    timeCount:10,
    hand:null,
    hbArr:[],
    score:0,
    ctor:function () {
        this._super();
        //游戏场景  单独写每个方法功能  把每个函数抽离出来

        var size = cc.winSize;
        this.addBg(size);//1.添加背景
        this.addCountDown(size);//2.添加倒计时图标及初始内容（10秒)
        this.schedule(this.countDownFun,1);//3.实现倒计时  schedule非默认方法
        this.addHand(size);//4.添加手节点（持续运行帧动画）
        this.addTouchListener();//5.添加点击和滑动监听
        this.addHongBao(size);//6.添加红包数组
        this.scheduleUpdate(this.update);//7.红包下落 schedule默认方法 默认调用update方法 1/60s执行一次
        //存

        return true;
    },
    addBg:function (size){
        var bg=new cc.Sprite(res.Bg_jpg);
        bg.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(bg);
    },
    addCountDown:function(size){
        //倒计时图标
        var countDown=new cc.Sprite(res.CountDown_png);
        //得到图片的矩形区域，用高度减去矩形区域  也可以用锚点设置位置
        countDown.setPosition(size.width*0.7,size.height-countDown.getBoundingBox().height);
        this.addChild(countDown);
        //倒计时内容值
        this.timeLabel=new cc.LabelTTF("","",size.width*0.1);
        this.timeLabel.setPosition(countDown.x+countDown.getBoundingBox().width*0.8,countDown.y);
        this.timeLabel.setString(10);
        this.timeLabel.setColor(cc.color(200,100,100));
        this.addChild(this.timeLabel);
    },
    countDownFun:function(){
        //定时器
        if(this.timeCount<1){
            //存储数据
            cc.sys.localStorage.setItem("currentScore",this.score);
            cc.director.runScene(new OverScene);
        }else{
            this.timeCount-=1;
            this.timeLabel.setString(this.timeCount);
        }
    },
    addHand:function(size){
        this.hand=new cc.Sprite(res.Hand_1_png);
        this.hand.setPosition(size.width*0.5,this.hand.getBoundingBox().height*0.5);
        this.addChild(this.hand);

        //创建帧动画
        // 两种方法：ainmation（帧动画的容器） animate（是真正的动作，用animation运行它）
        var animation=new cc.Animation();
        for(var i=1;i<=2;i++){
            var frameName=res["Hand_"+i+"_png"];
            animation.addSpriteFrameWithFile(frameName);
        }
        animation.setDelayPerUnit(0.2);
        animation.setRestoreOriginalFrame(true);
        var animate=new cc.Animate(animation);
        this.hand.runAction(animate.repeatForever());
    },
    addTouchListener:function(){
        var that=this;//通过软绑定，绑定到对应的层对象  有函数嵌套
        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,//单点触控
            swallowTouches:true,//事件是否会向下传递
            onTouchBegan:function(touch,event){
                return true;
            },
            onTouchMoved:function(touch,event){
                var delta=touch.getDelta();
                that.hand.setPositionX(that.hand.x+delta.x);
                if(that.hand.x<that.hand.getBoundingBox().width*0.5){
                    that.hand.x=that.hand.getBoundingBox().width*0.5;
                }
                if(that.hand.x>cc.winSize.width-that.hand.getBoundingBox().width*0.5){
                    that.hand.x=cc.winSize.width-that.hand.getBoundingBox().width*0.5;
                }
            }
        },this);
    },
    addHongBao:function(size){
        for(var i=0;i<100;i++){
            var hb=new cc.Sprite(res.Hongbao_png);
            hb.setPosition(Math.random()*size.width,size.height*(cc.random0To1()*i+1));
            hb.runAction(cc.repeatForever(cc.rotateBy(cc.random0To1()*5,360)));
            this.addChild(hb);
            this.hbArr.push(hb);
        }
    },
    update:function(){
        //遍历红包数组中的每个红包，y值-=10
        for(var k in this.hbArr){
            this.hbArr[k].y-=10;
        }
        //碰撞检测,每次碰撞时都把红包从父节点中移除出来
        for(var i=0;i<this.hbArr.length;i++){
            if(cc.rectContainsPoint(this.hbArr[i].getBoundingBox(),this.hand.getPosition())){
                this.hbArr[i].removeFromParent();//remove从层中删除
                this.hbArr.splice(i,1);
                this.score++;
            }
        }
    }
});

var MainScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});


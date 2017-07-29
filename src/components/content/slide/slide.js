
var zBase = {
	//初始化
	config:{
		index:0,
		auto:true,
		direct:'left', //滚动方向，left,top
	},
	init:function(){
		this.slide = this.$id('slide');
		this.img_div = this.$c('slide-img')[0],
		this.slide_btn = this.$tag('a',this.$c('slide-btn')[0]);
		this.img_arr = this.$tag('img',this.img_div);
		if(this.config.auto) this.play();	//是否自动播放
		this.hover();	//绑定导航悬停切换。即mouseover,mouseout事件
	},
	//以ID获取文档对象
	$id:function(id){return document.getElementById(id);},
	//以标签名获取文档对象
	$tag:function(tagName,obj){return (obj ?obj : document).getElementsByTagName(tagName);},
	//以class获取访谈录对象
	$c: function (claN,obj){
		var tag = this.$tag('*'),reg = new RegExp('(^|\\s)'+claN+'(\\s|$)'),arr=[];
		for(var i=0;i<tag.length;i++){
			if (reg.test(tag[i].className)){
				arr.push(tag[i]);
			}
		}
		return arr;
	},
	//添加class
	$add:function(obj,claN){
		reg = new RegExp('(^|\\s)'+claN+'(\\s|$)');
		if (!reg.test(obj.className)){
			
			obj.className += ' '+claN;
		}
	},
	//移除class
	$remve:function(obj,claN){var cla=obj.className,reg="/\\s*"+claN+"\\b/g";obj.className=cla?cla.replace(eval(reg),''):''},
	//css获取方法
	css:function(obj,attr,value){
		
		if(arguments[2] != null){
			console.log(value);
		  obj.style[attr] = value;
		}else{
			return  typeof window.getComputedStyle != 'undefined' ? window.getComputedStyle(obj,null)[attr] : obj.currentStyle[attr];
	   }
	},
	//动画效果
	animate:function(obj,attr,val){
		var d = 1000;//动画时间一秒完成。
		if(obj[attr]) clearInterval(obj[attr]);
		var start = parseInt(zBase.css(obj,attr));//动画开始位置
		//space = 动画结束位置-动画开始位置，即动画要运动的距离。
		var space =  val- start,st=(new Date).getTime(),m=space>0 ? 'ceil':'floor';
		obj[attr] = setInterval(function(){
			var t=(new Date).getTime()-st;//表示运行了多少时间，
			if (t < d){//如果运行时间小于动画时间
				var offset  = Math[m](zBase.easing['easeOut'](t,start,space,d)) +'px';
				zBase.css(obj,attr,offset);
			}else{
				clearInterval(obj[attr]);
				zBase.css(obj,attr,val+'px');
			}
		},20);
	},
	//自动播放
	play:function(){
		this.slide = setInterval(function(){
			zBase.config.index++;
			if(zBase.config.index>=zBase.img_arr.length) zBase.config.index=0;//如果当前索引大于图片总数，把索引设置0
			
			zBase.animate(zBase.img_div,zBase.config.direct,-zBase.config.index*960);
			for(var j=0;j<zBase.slide_btn.length;j++){
				zBase.$remve(zBase.slide_btn[j],'hover');
			}
			zBase.$add(zBase.slide_btn[zBase.config.index],'hover');
			
		},3000)
			
			
	},
	//导航切换
	hover:function(){
		for(var i=0;i<this.slide_btn.length;i++){
			this.slide_btn[i].index = i;//储存每个导航的索引值
			this.slide_btn[i].onmouseover = function(){
				if(zBase.slide) clearInterval(zBase.slide);
				zBase.config.index =this.index; 
				
				for(var j=0;j<zBase.slide_btn.length;j++){
					zBase.$remve(zBase.slide_btn[j],'hover') ;
				}
				zBase.$add(zBase.slide_btn[zBase.config.index],'hover');
				zBase.animate(zBase.img_div,zBase.config.direct,-zBase.config.index*960);
			}
			this.slide_btn[i].onmouseout = function(){
				zBase.play();
			}
		}
	},
	//常用的easing方法
	 easing :{
		linear:function(t,b,c,d){return c*t/d + b;},
		swing:function(t,b,c,d) {return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;},
		easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t + b;},
		easeOut:function(t,b,c,d){return -c*((t=t/d-1)*t*t*t - 1) + b;},
		easeInOut:function(t,b,c,d){return ((t/=d/2) < 1)?(c/2*t*t*t*t + b):(-c/2*((t-=2)*t*t*t - 2) + b);}
	}
}
function slideRun(){
	//调用代码		
	zBase.init();
	console.log(1)	
}
export {
	slideRun
}

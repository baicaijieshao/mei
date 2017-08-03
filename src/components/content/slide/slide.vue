<template>
	<div class="slide" :style="{width:originalData.img_width+'px',height:originalData.img_height+'px'}"> 
        <div class="slide-images" :style="{width:originalData.img_width+'px',height:originalData.img_height+'px'}" @mouseover="stop" @mouseout="play">
            <div class="slideContent" 
            	:class="{slide_trans:isTrans}" 
            	:style="{
            			width:originalData.img_width*(originalData.num+2)+'px'
            			,height:originalData.img_height+'px'
            			,left:-originalData.img_width+'px'
            			}" ref="slideContent">
            	<img class="slide-img" v-for="img in images" 
            		:src="img.url" :alt="img.num" 
            		:style="{width:originalData.img_width+'px',height:originalData.img_height+'px'}"/>
            </div>
        </div>
	    <div class="slide-buttons" >
	        <span v-for="key in images.length-2" 
	               	:class="['slide-button',{'button-on':key == index}]" 
	                @mouseover="turnTo(key)"></span>
	    </div>         
    </div>
</template>
<script>
	export default {
		data(){
			return {
                originalData:{
                    img_width:960,
                    img_height:300,
                    btn_width:40,
                    btn_height:40,
                    num:4,
                    delay:300
                },
                images:[
                	{ url : require('./slide4.jpg') , num : 4},
                	{ url : require('./slide1.jpg') , num : 1},
                	{ url : require('./slide2.jpg') , num : 2},
                	{ url : require('./slide3.jpg') , num : 3},
                	{ url : require('./slide4.jpg') , num : 4},
                	{ url : require('./slide1.jpg') , num : 1},
                ],
                isTrans:true,//因为到最后一张图片，index为1时，需要立即跳到第二张index也为1的图片，这个用来是否给出transition
                index:1,
                timer:null,//setInterval
                clickdelay:false//用来防止连续点击
			}
		},
		methods:{
                next(){
                    if(this.clickdelay){
                        return 
                    }
                    this.clickdelay=true
                    if(this.index==this.originalData.num){
                        this.index=1
                    }else{

                        this.index+=1
                    }
                    this.animate(this.originalData.img_width)
                },
                animate(offset){
                    var node=this.$refs.slideContent
                    var self=this;
                    var left=parseInt(node.style.left)-offset
                    this.isTrans=true
                    node.style.left=left+'px'
                    setTimeout(function(){
                        if(left<-(self.originalData.num*self.originalData.img_width)){
                            self.isTrans=false
                            node.style.left=-self.originalData.img_width+'px'
                            self.clickdelay=false //当到达最后一张图片时 
                        }
                        if(left>-100){
                            self.isTrans=false
                            node.style.left=-self.originalData.num*self.originalData.img_width+'px'
                            self.clickdelay=false //当到达第一张图片时  
                        }
                    },this.originalData.delay)
                },
                play(){
                    var self=this;
                    this.timer=setInterval(function(){
                        self.next()
                    },2000)
                },
                stop(){
                    this.clickdelay=false//用来防止连续点击
                    clearInterval(this.timer)
                    this.timer=null
                },
                turnTo(flag){
                    if(flag==this.index){
                        return
                    }else{
                        var offset=(flag-this.index)*this.originalData.img_width
                        this.index=flag
                        this.animate(offset)
                    }

                }
            },
            mounted(){
                /*下面是判断过渡动画是否完成*/ 
                var node=this.$refs.slideContent;
                var transitions = {
                     'transition':'transitionend',
                     'OTransition':'oTransitionEnd',
                     'MozTransition':'transitionend',
                     'WebkitTransition':'webkitTransitionEnd'
                    }
                    var self=this ;
               for(var t in transitions){

                   if( node.style[t] !== undefined ){
                       var transitionEvent=transitions[t];
                   }
               }
               transitionEvent && node.addEventListener(transitionEvent, function() {
                    self.clickdelay=false ;
               });
               this.play()
            }
	}

</script>
<style>
	.slide{position: relative;}
	.slide-images{position: relative;overflow: hidden;}
	.slideContent{position: absolute;z-index: 1;}
	.slide-img{border: none;outline:none;float: left}
	.slide-buttons{position: absolute;width: 100%;height: 15px;text-align: center;bottom: 10px;z-index: 99;}
	.slide-button{display:inline-block;height: 15px;width: 15px;border-radius: 50%;background: #ccc;margin: 0 5px;cursor: pointer;}
	.slide:hover .slide-arrow{display: block;background-color: rgba(0,0,0,.7);}
	.button-on{background: orange}
	.slide_trans{transition: left 1s ease-in-out}
</style>
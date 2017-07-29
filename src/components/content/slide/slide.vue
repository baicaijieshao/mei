<template>
	<div class="slide" id='slide'>
		<div class="slide-img" >
	        <transition-group tag='ul' class="clearfix" name='image'>
	            <li v-for='(image,index) in img' :key='index' v-show="index===mark">
	                <a><img :src='image'></a>
	            </li>
	        </transition-group>
		</div>
		<div class="slide-btn">
<!--			<a href="#" class="hover">●</a>
			<a href="#">●</a>
			<a href="#">●</a>
			<a href="#">●</a>-->
			<span v-for="(item,index) in img.length" :class="{'active':index===mark}" @mouseover="change(index)">
				●
			</span>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				mark: 0 ,
				timer: null ,
			    img:[
					require('./slide1.jpg'),
					require('./slide2.jpg'),
					require('./slide3.jpg'),
					require('./slide4.jpg')
			    ]
			}
		},
		created () {
			this.play()
		},
		methods:{
			change(i){
				this.mark= i
			},
			autoPlay(){
				this.mark++
				if(this.mark ===4){
					this.mark = 0
					return
				}
			},
			play(){
				setInterval(this.autoPlay,3000)
			}
		}
						
	}
	// slideRun();	
</script>

<style>
	.slide{
		position: relative;
		margin:5px auto;
		width: 100%;
		height: 300px;
		overflow: hidden;
	}
	.slide-img li{
		position: absolute;
		margin: 0px auto;
		width: 100%;
		height: 100%;
	}
	.slide li img{
		max-height: 100%;
		max-width: 100%;
	}
	.slide-btn{
		width: 100%;
		height: 20px;
		position: absolute;
		bottom: 20px;
		font-size: 30px;
		text-align: center;		
		z-index: 99;
	}
	.slide-btn span{
		color: #ccc;
	}
	.slide-btn span:hover{
		color: #C60;
	}
	.slide-btn span.active{
		color: #C60;
	}
	.image-enter-active {
	    transform: translateX(0);
	    transition: all 1s ease;
	}
	        
	.image-leave-active {
	    transform: translateX(-100%);
	    transition: all 1s ease;
	}
	.image-enter {
	    transform: translateX(100%)
	}
	.image-leave {
	    transform: translateX(0)
	}	
</style>
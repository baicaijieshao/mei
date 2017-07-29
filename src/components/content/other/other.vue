<template>
	<div class="other">
		<ul class="other-lable">
			<li v-for="(lable,lableindex) in lables" @mousemove="contentChange(lableindex)">
				{{ lable.text }}
			</li>
		</ul>
		<ul class="other-content">
			<li v-show="lables[0].showNum > 0" class="other-content-download">
			</li>
			<li v-show="lables[1].showNum > 0" class="other-content-history">
				<ul>
					<li v-for="erp in erps" >
						<a :href="erp.url" target="_blank">
							{{ erp.name}}
						</a>
					</li>
				</ul>
			</li>
			<li v-show="lables[2].showNum > 0" class="other-content-links">
				<ul>
					<li v-for="flink in flinks">
						<a :href="flink.url" target="_blank"> 
							{{ flink.name }} 
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				lables:[
					{ text : '下载中心' , showNum :  1 },
					{ text : '历史数据' , showNum : -1 },
					{ text : '友情链接' , showNum : -1 }
				],
				erps:[
					{ 
						name : '上海赛立特博科ERP系统' , 
						url : 'http://map.safety-inxs.com:8089/map/map.jsp'
					},
					{ 
						name : '南通赛立特博科ERP系统' , 
						url : 'http://yigo.safety-inxs.com:8089/Yigo/Yigo.jsp'
					}
				],
				flinks:[
					{ 
						name : '上海赛立特安全用品有限公司' ,
						url : 'http://www.safety-inxs.com/home/'
					},
					{ 
						name : 'Bladex系列产品' ,
						url : 'http://www.bladex5.com/'
					},
					{ 
						name : '赛立特上海安全设备有限公司' ,
						url : 'http://www.safety-inxs.com.cn/'
					},
					{ 
						name : '阿里巴巴' ,
						url : 'https://cninxs.1688.com/'
					}
				]
			}
		},
		methods:{
			contentChange(num){
				let _this = this ;
/*				_this.lables.forEach(function(item){
					item.index = -1 ;
				});*/
				for(let i=0;i<_this.lables.length;i++){
					_this.lables[i].showNum = -1; 
				}
				_this.lables[num].showNum = 1;
			}
		}
	}
/*	window.onload=function(){
		var otherLables = document.getElementsByClassName('other-lable')[0].getElementsByTagName('li');
		var otherContents = document.getElementsByClassName('other-content')[0].getElementsByTagName('li');
		for(let i=0;i<otherLables.length;i++) {
			otherLables[i].index = i ;
			otherLables[i].onmousemove=function(){
				for(let j=0;j<otherContents.length;j++){
					otherContents[j].className = 'hide';
				}
				otherContents[this.index].className = 'display';
			}
		}
	}
*/
</script>

<style>
	.other{
		margin: 10px auto;
		width: 100%;
		float: left;
	}
	.other-lable{
		height: 30px;
		border-left: 1px solid #d2d4d4;
	}
	.other-lable >li{
		float: left;
		width: 102px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 13px;
		border-top: 1px solid #d2d4d4;
		border-right: 1px solid #d2d4d4;
	}
	.other-lable li:hover{
		color: orange;
	}
	.other-content{
		float: left;
		width: 958px;
		height: 232px;
		border: 1px solid #d2d4d4;
		font-size: 13px;
	}
	.other-content > li{
		width: 100%;
		height: 100%;
	}
	.other-content > li:first-of-type{
		background:url(./download.jpg) no-repeat 0/cover;
		opacity: .8;
	}
	.other-content > li a{
		color: inherit;
	}
	.other-content a{
		display: inline-block;
		margin: 10px;
	}
	.other-content a:hover{
		font-size: 15px;
		color: orange;
	}
	.other-content li{
		float: left;
	}
</style>
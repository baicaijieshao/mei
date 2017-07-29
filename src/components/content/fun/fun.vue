<template>
	<div class="fun">
		<ul>
			<li v-for="fun in funs">
				<div class="fun-lable"> {{ fun.name }} </div>
				<div class="fun-img">
					<a :href="fun.url" target="_blank">
						<img :src="fun.img" />
					</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return{
				funs:[
					{ 
						name : '财务系统' ,
						img : require('./finance.jpg'),
						url : "javascript:alert('建设中，敬请期待!');"
					},
					{ 
						name : '办公自动化（OA）' ,
						img : require('./oa.jpg'),
						url : 'http://slt.safety-inxs.com:8081/seeyon/index.jsp'
					},
					{ 
						name : '集团考勤' ,
						img : require('./att.jpg'),
						url : "javascript:alert('建设中，敬请期待!');"
					},
					{ 
						name : '集团数据分析平台' ,
						img : require('./analysis.jpg'),
						url : "javascript:alert('建设中，敬请期待!');"
					},
					{ 
						name : '文档管理' ,
						img : require('./doc.jpg'),
						url : "javascript:alert('建设中，敬请期待!');"
					},
					{ 
						name : '集团移动互联平台' ,
						img : require('./mobileint.jpg'),
						url : "javascript:alert('建设中，敬请期待!');"
					}
				]
			}
		}		
	}
</script>

<style>
	.fun ul li{
		float: left;
		margin-top: 10px;
		width: 308px;
		height: 195px;
		text-align: center;
		border: 1px solid #d2d4d4;
		list-style: none;
	}
	.fun li:nth-child(2),.fun li:nth-child(5){
		margin: 10px 15px 0 15px;
	}
	.fun-lable{
		width: 100%;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #d2d4d4;
		background: #f7f6f6;
	}
	.fun-img{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 155px;
	}
	.fun-img img{
		height: 100px;
	}
</style>
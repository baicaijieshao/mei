<template>
	<div id="footer">
		<ul>
			<li v-for="ct in contents">
				<a :href="ct.url" target="_blank">{{ ct.name }}</a>
			</li>
			<li>{{ copyRight }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				copyRight: 'CopyRight © 赛立特集团',
				contents:[
					{ name : '联系我们' , url : "javascript:alert('建设中，敬请期待!');" },
					{ name : '我的邮箱' , url : "http://mail.safety-inxs.com/" },
					{ name : '公司建议' , url : "javascript:alert('建设中，敬请期待!');" }
				]
				
			}
		}
	}
</script>

<style>
	#footer{
		margin-bottom: 10px;
		font-size: 13px;
	}
	#footer li {
		float: left;
		margin: 10px 10px 20px 0px;
	}
	#footer li:last-child{
		float: right;
		margin-right: 0;
	}
</style>
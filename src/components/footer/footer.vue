<template>
	<div id="footer">
		<ul>
			<li>{{ copyRight }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				copyRight: 'CopyRight © 赛立特集团'
			}
		}
	}
</script>

<style>
	#footer{
		margin-bottom: 10px;
		font-size: 13px;
	}
</style>
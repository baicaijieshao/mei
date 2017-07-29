<template>
	<div id="header">
		<div class="header-img"></div>
		<input type="button" value="登录" class="header-button" @click="loginWindow"/>
		<div class="header-login" v-show='loginDisplay' >
			<div class="header-login-window">
				<button class="header-loginClose" @click="loginClose">关闭</button>
				<form action="" class="header-loginForm">
					<div class="header-loginForm-row">
						<input type="text" class="header-loginForm-username" placeholder="用户名"/>
					</div>
					<div class='header-loginForm-row'>
						<input type="password" class="header-loginForm-password" placeholder="密码"/>
					</div>
					<div class="header-loginForm-row">
						<input type="button" class="header-loginForm-login" value="登录">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				loginDisplay: false
			}
		},
		methods:{
			loginWindow() {
				this.loginDisplay = true ;
			},
			loginClose() {
				this.loginDisplay = false ;
			}
		}
	}
</script>

<style>
	#header{
		position: relative;
		width: 100%;
		height: 81px;
		margin: 10px 0;
	}
	.header-img{
		width: 500px;
		height: 81px;
		background: url(./log.jpg) no-repeat 0/contain;
	}
	.header-button{
		position: absolute;
		width: 120px;
		bottom: 0;right: 0;
		border: 1px solid #cc9966;
		background: #fff;
		letter-spacing: .2rem;
		color: #cc9966;
	}
	.header-login{
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;top: 0;
		right: 0;bottom: 0;
		background: rgba(200,200,200,.75);
		z-index: 99;
	}
	.header-login-window{
		position: relative;
		padding: 2.5rem;
		width: 350px;
		background: rgba(255,255,255,.8);
		
	}
	.header-loginClose{
		position: absolute;
		top: 5px;right: 5px;
		line-height: 20px;
		border: none;
		outline: none;
		font-family:  Microsoft Yahei;
		background: none;
		letter-spacing: 2px;
	}
	.header-loginForm{
		display: block;
		width: 100%;
	}
	.header-loginForm-row{
		width:230px;
		height: 38px;
		margin:0px auto;
		background:none;
		border-bottom:1px solid #ccc;	
	}
	.header-loginForm-row:last-of-type{
		margin-top: 10px;
		height: 35px;
	}
	.header-loginForm-row input{
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
	}
	.header-loginForm-username,.header-loginForm-password{
		line-height: 28px;
		background: none;
		letter-spacing: .1rem;
	}
	.header-loginForm-password{
		letter-spacing: .2rem;
	}
	.header-loginForm-login{
		background: #42b983;
		font-size: 15px;
		border-radius: 3px;
		letter-spacing: .2rem;
	}
</style>
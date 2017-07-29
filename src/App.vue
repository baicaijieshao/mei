<template>
	<div id='app'>
		<div class="app1">
	    <v-header></v-header>
	    <v-slide></v-slide>
	    <v-bus></v-bus>
	    <v-fun></v-fun>
	    <v-other></v-other>
	    <v-footer></v-footer>
	  </div>
  </div>
</template>

<script>
	import header from './components/header/header.vue'
	import slide from './components/content/slide/slide.vue'
	import bus from './components/content/bussiness/bussiness.vue'
	import fun from './components/content/fun/fun.vue'
	import footer from './components/footer/footer.vue'	
	import other from './components/content/other/other.vue'
	export default {
	  name: 'app',
	  components:{
	  	'v-header': header,
	  	'v-footer': footer,
	  	'v-slide': slide,
	  	'v-bus': bus,
	  	'v-fun': fun,
	  	'v-other': other
	  	}
	 }
</script>

<style>
	body{
		background: #ECE9D8;
	}
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  margin: 0px auto;
	  width: 1024px;
	  color: #2c3e50;
	  background: #FFF;
	}
	.app1{
		width: 960px;
		padding: 0 32px;
		background: #FFF;
		float: left;
	}
</style>

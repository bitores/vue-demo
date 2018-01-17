<template>
	<div>
		<h2>单页多路由（单路由多视图）</h2>
		<router-view ></router-view>

		 <router-view name="left"></router-view>

		 <router-view name="right"></router-view>
	</div>
</template>

<script>

export default {
	name:'info',
	data(){
		return {}
	}
}
</script>

<style>
	
</style>
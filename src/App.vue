<template>
	<div id="wrapper">
		<navbar></navbar>
		<div class="container" role="main">
			<div class="col-sm-3">
				<sidebar></sidebar>
			</div>
			<div class="col-sm-9">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from './components/Navbar.vue'
	import Sidebar from './components/Sidebar.vue'
	export default {
		name: 'app',
		components: {
			Sidebar,
			Navbar
		}
	}
</script>
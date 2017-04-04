<template>
	<div class="jumbotron">
		<h1>任务追踪</h1>
		<p>
			<strong><router-link to="/time-entries">创建一个任务</router-link></strong>
		</p>
		<ul>
	      <li v-for="article in articles">
	        {{article.title}}
	      </li>
	    </ul>
	</div>
</template>
<style>

</style>
<script>
	export default {
		data() {
			return {
				articles: []
			}
		},
		components: {},
		mounted: function() {
		    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
		        headers: {
		
		        },
		        emulateJSON: true
		    }).then(function(response) {
		      // 这里是处理正确的回调
		
		        this.articles = response.data.subjects
		        // this.articles = response.data["subjects"] 也可以
		
		    }, function(response) {
		        // 这里是处理错误的回调
		        console.log(response)
		    });
		  }
	}
</script>
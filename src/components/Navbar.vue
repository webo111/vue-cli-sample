<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="#" style="color: #00b786;text-shadow:0 0 0.1em #00b786,-0 -0 0.1em #00b786;">Vue</router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><router-link to="/home">首页</router-link></li>
            <li><router-link to="/time-entries">计划列表</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><router-link to="#">Action</router-link></li>
                <li><router-link to="#">Another action</router-link></li>
                <li><router-link to="#">Something else here</router-link></li>
                <li role="separator" class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li><router-link to="#">Separated link</router-link></li>
                <li><router-link to="#">One more separated link</router-link></li>
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>

<script>
$(function(){
	$('#navbar li').on('click',function(){
		$('#navbar li').removeClass('active');
		$(this).addClass('active');
	});
});
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
body {
  padding-top: 70px;
  padding-bottom: 30px;
}

.theme-dropdown .dropdown-menu {
  position: static;
  display: block;
  margin-bottom: 20px;
}

.theme-showcase > p > .btn {
  margin: 5px 0;
}

.theme-showcase .navbar .container {
  width: auto;
}
</style>
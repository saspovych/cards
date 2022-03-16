<template>
	<div>
		<nav>
			<ul>
				<li><router-link to="/">Настройки</router-link></li>
				<li><router-link to="/cards">Карточки</router-link></li>
			</ul>
		</nav>
		<div class="wrapper">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Poppins', sans-serif;
	color: black;
}

nav {
	padding: 25px 50px;

	background-color: lightgray;
}

ul {
	display: flex;

	list-style: none;
}

li {
	margin-right: 25px;

	font-size: 24px;
}

a {
	text-decoration: none;
	color: gray;
}

.router-link-active {
	color: black;
}

.wrapper {
	padding: 25px 75px;
}
</style>
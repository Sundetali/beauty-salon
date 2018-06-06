<template>
	<div class="wrapper">
		<nav class="navbar navbar-expand-md navbar-light">
			<div class="container">
				  <router-link class="navbar-brand" :to="{name: 'main'}"><img src="./assets/img/logo.jpg" width="140px" alt="zapis">
				  </router-link>
				  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				  </button>
				  <div class="collapse navbar-collapse d-md-flex justify-content-md-between" id="navbarSupportedContent">
				    <ul class="navbar-nav nav-left">
				      <li class="nav-item">
				      	Алматы
				      </li>
				      	<router-link :to="{name: 'contacts'}"  tag="li"  class="nav-item">
						    <a>Контакты</a>
						</router-link>
				    </ul>
				    <ul class="navbar-nav nav-right">
				      	<router-link :to="'/sign-up'" tag="li" class="nav-item">
						    <a>Регистрация</a>
						</router-link>
						<router-link :to="'/signin'" tag="li" class="nav-item">
						    <a>Вход</a>
						</router-link>
					    
					    
				    </ul>
				  </div>
			</div>
		</nav>
		<div class="content d-flex justify-content-center">
			<router-view></router-view>			
		</div>
		<footer>
			<div class="top-footer">
				<div class="container">
					<div class="row justify-content-around">
								<div>
									<p class="caption">Скачайте бесплатное приложение в<br> AppStore и Google Play</p>
									<div class="img-links d-flex align-items-center">
										<span class="footer-img"><img src="./assets/img/logo_footer.png" alt=""></span>
										<a class="footer-img" href="#"><img src="./assets/img/app_store.png" alt=""></a>
										<a class="footer-img" href="#"><img src="./assets/img/google_play.png"alt=""></a>
									</div>
								</div>
								<div>
									<img class="app-screen mx-auto" src="./assets/img/footer_apps_screens.png" alt="">
								</div>
					</div>
				</div>
			</div>
			<div class="bottom-menu">
				<div class="container">
					<div class="row">
							<ul class="d-flex justify-content-between w-100 mb-0">
								<li><router-link :to="{name: 'manual'}">Как записаться онлайн?</router-link></li>
								<li><a href="#">Хотите видеть Ваш салон у нас на сайте?</a></li>
								<li>
									<router-link :to="{name: 'contacts'}">Контакты</router-link>
								</li>
								<li>2017 - 2018 © ZAPIS'KZ</li>
							</ul>
					</div>
				</div>
			</div>			
		</footer>
	</div>
</template>

<script>
	export default {
	}
</script>

<style>
	body,html {
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
	    font-size: 12px;
	    line-height: 1.2;
	    background-color: #fff;
	    color: #444;
	}
	* {
		padding: 0;
		margin: 0;
	}
	img {
		max-width: 100%;
		cursor: pointer;
	}
	ul {
		list-style-type: none;
	}

	li {
		display: inline-block;
	}

	input.form-control:focus { 
	    box-shadow: none;
	    -webkit-box-shadow: none;
	}
	h1 {
		font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
		font-weight: 550;
	}
	.container {
		margin: 0 auto;
    	max-width: 1044px;
	}
	.btn {
	    border-radius: 15px;
	    padding: 5px 15px;
	}
	.btn:focus {
		box-shadow: none;
		-webkit-box-shadow: none;
	}
	nav {
		position: fixed!important;
		width: 100%;
		top: 0;
		background-color: #fff;
		z-index: 1000;
		border-bottom: 1px solid #e2e2e2;
		font-size: 15px;
		margin-bottom: 20px;
	}
	nav ul.nav-left li {
		border-left: 1px solid #e2e2e2;
	}
	nav ul.nav-right li:first-child {
		border-right: 1px solid #e2e2e2;
	}
	nav ul li {
		padding: 0 20px;
	}
	nav a {
		color: #333;
	}
	nav a:hover{
	    color: #bf2e23;
	    text-decoration: underline;
	}
	
	.content {
	    background-color: #f6f6f6;
	    min-height: 500px;
	    padding: 47px 0 65px;
	}
	footer {
		padding: 45px 0 0;
	    color: #fff;
	    background-color: #333;
	    position: relative;
	}
	footer .caption {
		font-size: 2.2rem;
	    font-weight: 700;
	    margin-bottom: 26px;
	    line-height: 3rem;
	}
	footer .footer-img {
		margin-right: 20px;
	}
	footer .app-screen {
		margin-top: -77px;
    	display: block;
	}
	footer .bottom-menu {
		position: absolute;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background-color: rgba(30, 30, 30, 0.95);
	    color: #fff;
	}
	footer .bottom-menu ul {
		padding: 5px 0;
	}
	footer .bottom-menu ul li{
		padding: 10px;
	}
	footer a {
		color: #fff;
	}
	footer a:hover,
	footer a:focus {
		color: inherit;
	}
	footer li {
		font-size: 1.15rem;
	}
	@media screen and (max-width: 600px) {
		body, html {
			font-size: 10px;
		}
		.top-footer .app-screen {
			margin-top: 1.4rem;
		}
	}
	@media screen and (max-width: 900px) {
		.top-footer .app-screen {
			margin-top: 1.4rem;
		}
	}
</style>
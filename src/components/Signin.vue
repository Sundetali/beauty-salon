<template>
	<div class="row justify-content-md-center wrapper-content">
		<div class="col-md-5">
			<h2 class="text-center">Вход в ZAPIS'KZ</h2>
			<form @submit.prevent>
				  <div class="form-group">
				    <input type="phoe" class="form-control" id="phone" placeholder="Номер телефона" autocomplete="off">
				  </div>
				  <div class="form-group">
				    <input type="password" class="form-control" id="password" placeholder="Пароль" autocomplete="off">
				  </div>
				  <router-link :to="'/forgot-password'" tag='a' class="text-right d-block">Забыли пароль?</router-link>
				<input type="button" value="ВОЙТИ" class="btn btn-green">
				<span class="d-block text-right ">Впервые на ZAPIS'KZ? <router-link :to="'/sign-up'" tag="a"> Зарегистрироваться</router-link></span>
				  
			</form>
		</div>
	</div>
</template>
<style scoped>
	h2 {
	    margin: 15px 0;	
	    font-size: 1.75rem;
	}
	.from-group input {
	    line-height: 1.3;
	    color: #333;
	    background-color: #fff;
	    border: 1px solid #a9a9a9;
	    padding: 8px 12px;
	    border-radius: 4px;
	}
	input{
		margin-bottom: 10px;
	}
	input.btn {
		display: block;
		width: 100%;
		color: #fff;
    	background-color: #bf2e23;
    	margin: 20px 0;
	}
	.form-control {
		font-size: 1.17rem;
	}
	.form-control:focus {
    	border-color: #bf2e23;
	}
	form a {
		color: #bf2e23;
		font-size: 1.14rem;
	}
</style>
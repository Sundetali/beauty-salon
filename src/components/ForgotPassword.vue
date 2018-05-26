<template>
	<div class="row justify-content-md-center">
		<div class="col-md-5">
			<h2 class="text-center">Забыли пароль</h2>
			<form @submit.prevent>
				<div class="form-group">
				    <input type="phone" class="form-control" id="phone" placeholder="Номер телефона">
				</div>
				<input type="button" value="ОТПРАВИТЬ" class="btn btn-green">  
			</form>
		</div>
	</div>
</template>
<style scoped>
	h2 {
	    margin: 15px 0;	
	    font-size: 1.75rem;
	}
	form .from-group input {
	    line-height: 1.3;
	    color: #333;
	    background-color: #fff;
	    border: 1px solid #a9a9a9;
	    padding: 8px 12px;
	    border-radius: 4px;
	    font-size: 14px;
	}
	form input{
		margin-bottom: 10px;
	}
	form input.btn {
		display: block;
		width: 100%;
		color: #fff;
    	background-color: #bf2e23;
    	margin: 20px 0;
	}
	form .form-control:focus {
    	border-color: #bf2e23;
	}
</style>
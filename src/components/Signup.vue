<template>
	<div class="row justify-content-md-center wrapper-content">
		<div class="col-md-5">
			<h2 class="text-center">Создание учетной записи</h2>
			<!-- <form @submit.prevent>
			 	  <div class="form-group">
			 	    <label for="phone">Телефон *</label>
			 	    <input type="phoe" class="form-control" id="phone" placeholder="Номер телефона">
			 	  </div>
			 	  <div class="form-group">
			 	    <label for="password">Пароль *</label>
			 	    <input type="password" class="form-control" id="password" placeholder="Придумайте пароль">
			 	  </div>
			 	  <div class="form-group">
			 	    <label for="repeat-password">Повторите пароль *</label>
			 	    <input type="password" class="form-control" id="repeat-password" placeholder="Напишите пароль еще раз">
			 	  </div>
			 	  <div class="form-group">
			 	    <label for="name">Имя *</label>
			 	    <input type="text" class="form-control" id="name" placeholder="Введите имя">
			 	  </div>
			 	  <div class="form-group">
			 	    <label for="surname">Фамилия</label>
			 	    <input type="text" class="form-control" id="surname" placeholder="Введите фамилю">
			 	  </div>
			 	  <div class="form-group">
			 	    <label for="email">E-mail</label>
			 	    <input type="email" class="form-control" id="email" placeholder="Введите свой почтовый ящик">
			 	  </div>
			 	  <div class="form-group text-right">
			 		  <input type="button" value="РЕГИСТРАЦИЯ" class="btn btn-green">
			 	  </div>
			 </form> --> 
			<template  v-if="!formSubmited">
				<form @submit.prevent="formSubmited = true">
				  	<div class="form-group">
						<app-input v-for="(item, index) in  info"
								   :name="item.name"
								   :value.sync="item.value"
								   :pattern="item.pattern"
								   :symbol="item.symbol"
								   :placeholder="item.placeholder"
								   :key="index"
								   @changeStatus="onChangeData(index, $event)">
		                </app-input>
				  	</div>
				  	<div class="form-group text-right">
				  		<input type="button" value="РЕГИСТРАЦИЯ" class="btn btn-green"
				  		 :disabled="done < info.length"
				  		 v-on:click="formSubmited = !formSubmited">
			  	  	</div>
				</form>
				<p class="obez">* - обязательные поля для заполнения</p>
					
			</template>
			<div v-else>
				<table class="table table-bordered">
					<tbody>
						<tr v-for="(item, index) in  info">
							<td>{{ item.name }}</td>
							<td>{{ item.value }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<style scoped>
	h2 {
		    margin: 15px 0;	
		    font-size: 1.75rem;
	}
	form {
		margin-bottom: 40px;
	}
	label {
		font-weight: bold;
	}
	input.form-control {
	    line-height: 1.3;
	    color: #333;
	    background-color: #fff;
	    border: 1px solid #a9a9a9;
	    padding: 8px 12px;
	    border-radius: 4px;
	    font-size: 1.17rem;
	}
	input.form-control:focus {
	    border-color: #bf2e23;  
	}

	.btn-green {
		margin-top: 10px;
		color: #fff;
	    background-color: #47a025;
	    border-color: #47a025;
	}
	p.obez {
		font-size: 1.25rem;
		font-style: italic;
	}
</style>
<style>
	.wrapper-content {
		width: 1024px;
	}
</style>

<script>
	import AppInput from './Input.vue';
	export default {
		data(){
			return {
				info: [
					{
						name: 'Телефон',
						value: '',
						symbol: '*',
						placeholder: "Номер телефона",
						pattern: /^[0-9]{7,14}$/,
					},
					{
						name: 'Пароль',
						value: '',
						symbol: '*',
						placeholder: "Придумайте пароль",
						pattern: /^[0-9]{7,14}$/,
					},
					{
						name: 'Повторите пароль',
						value: '',
						symbol: '*',
						placeholder: "Напишите пароль еще раз",
						pattern: /^[0-9]{7,14}$/,
					},				
					{
						name: 'Имя',
						value: '',
						symbol: '*',
						placeholder: "Введите имя",
						pattern: /^[a-zA-Z ]{3,30}$/
					},				
					{
						name: 'Фамилия',
						value: '',
						symbol: '',
						placeholder: "Введите фамилию",
						pattern: /^[a-zA-Z ]{3,30}$/
					},
					{
						name: 'Email',
						value: '',
						pattern: /.+/,
						placeholder: "Введите свой почтовый ящик",
						symbol: '',
					},
				],
				controls: [],
				done: 0,
				formSubmited: false
			}
		},
		created(){
			for(let i = 0; i < this.info.length; i++){
				this.controls.push(false);
			}
		},
		methods: {
			onChangeData(index, status){
				this.controls[index] = status;

				let done = 0;

				for(let i = 0; i < this.controls.length; i++){
					if(this.controls[i]){
						done++;
					}
				}

				this.done = done;
				//this.done += status ? 1 : -1;
			}
		},
		components: {
			AppInput
		}
	}
</script>
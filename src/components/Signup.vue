<template>
	<div class="row justify-content-md-center wrapper-content">
		<div class="col-md-6 col-sm-10 mx-auto">
			<h2 class="text-center">Создание учетной записи</h2>
			<template  v-if="!formSubmited">
				<form @submit.prevent="formSubmited = true">
				  	<div class="form-group">
						<app-input v-for="(item, index) in  info"
								   :type="item.type"
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
				  		<input type="button" value="РЕГИСТРАЦИЯ" class="btn btn-green d-block w-100"
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
				<router-link :to="{name: 'main'}" class="back">
							<input type="button" class="btn btn-big btn-primary btn-control mx-auto mt-3" value="Главная страница" v-on:click="showTable = false">
				</router-link>
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
						type: 'text',
						value: '',
						symbol: '*',
						placeholder: "Номер телефона",
						pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
						error: 'error!',
					},
					{
						name: 'Пароль',
						type: 'text',
						value: '',
						symbol: '*',
						placeholder: "Придумайте пароль",
						pattern: /^[a-zA-Z0-9]+$/,
					},
					{
						name: 'Повторите пароль',
						type: 'text',
						value: '',
						symbol: '*',
						placeholder: "Напишите пароль еще раз",
						pattern: /^[a-zA-Z0-9]{5,18}$/,
					},				
					{
						name: 'Имя',
						type: 'text',
						value: '',
						symbol: '*',
						placeholder: "Введите имя",
						pattern: /^[a-zA-Z]{3,30}$/
					},				
					{
						name: 'Фамилия',
						type: 'text',
						value: '',
						symbol: '',
						placeholder: "Введите фамилию",
						pattern: /^[a-zA-Z]{3,30}$/
					},
					{
						name: 'Email',
						type: 'email',
						value: '',
						pattern: /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/,
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
			}
		},
		components: {
			AppInput
		}
	}
</script>
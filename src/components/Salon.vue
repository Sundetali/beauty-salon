<template>
	<div class="reservation-page w-100">
		<div class="gray-wrap">
			<div class="container">
				<div class="row">
					<ul class="breadcrumb">
						<li><router-link to="/main">Все салоны</router-link></li>
						<li><router-link :to="'/salon/'+getSalon.name+'-'+getSalon.id">{{getSalon.type}} {{getSalon.name}}</router-link></li>
						<li>Онлайн запись</li>
					</ul>
					<h1 class="mb-10 w-100">{{getSalon.type}} {{getSalon.name}}</h1>
				</div>
			</div>
		</div>
		<div class="input-wrapper">
			<div class="container">
				<div class="row">
					<template v-if="showTable === false">
						<div class="wrapper-res-list w-100">
							<form>
							  <div class="form-group">
							    <label for="example" class="choice">
							    <span>
							    	<i class="fillabilityStatus fa fa-fw" :class="checkServiceClass"></i>
							    </span>
							    Выбирите услугу
								</label>
								<div class="selected-services d-flex justify-content-between align-items-center" 
									v-for="(elem, index) in selectedServices">
									<span class="left">
										<span class="name">{{elem.type.name}}</span>
										<br>
										<span class="duration">{{elem.type.minute}} минут</span>	
									</span>
									<span class="right">
									  {{elem.type.price}}
									</span>
									<i class="fas fa-times"
										v-on:click="getService(index)"></i>
								</div>
							    <div class="autocomplete mt-2" 
							    	v-on:click="showList = !showList">
							    	<input type="text" class="form-control" id="example" placeholder="ДОБАВИТЬ УСЛУГУ" autocomplete="off">
							    	<i class="fa fa-chevron-down" aria-hidden="true"></i>	
							    </div> 
							  </div>
							</form>
							<div class="list" 
							v-show="showList">
								<ul class="list-group"
									v-for="(item, index) in itemsReservation"
									:key="index">
								  	<li class="list-group-item categori">{{item.name}}</li>
								 	<li class="list-group-item list-item d-flex justify-content-between	align-items-top"
								 			v-for="(elem, i) in item.types"
								 			:key="i"
								 			v-on:click="getType(elem, item.name, i)">
								  		<span class="left">
									  		<span class="name">{{elem.name}}</span>
									  		<br>
									  		<span class="duration">{{elem.minute}} минут</span>	
								  		</span>
								  		<span class="right">{{elem.price}}</span>
								  	</li>
								</ul>
							</div>
						</div>
						<template v-if="checkParents">
							<div class="wrapper-masters mt-4 w-100">
								<form @submit.prevent>
								  <div class="form-group">
								    <label for="master" class="choice">
								    <span>
							    		<i class="fillabilityStatus fa fa-fw" :class="checkMasterClass"></i>
							    	</span>Выбирите мастера</label>
								    <div class="selected-services"
								    	v-show="getSelectedMaster != ''">
										<span class="left">
											<span class="name">{{getSelectedMaster}}</span>	
										</span>
										<i class="fas fa-times master-icon"
											v-on:click="getMasterDel()"></i>
									</div>
								    <div class="autocomplete" 
								    	v-on:click="showMasters = !showMasters">
								    	<input type="text" class="form-control" id="master" placeholder="ДОБАВИТЬ МАСТЕРА" autocomplete="off">
								    	<i class="fa fa-chevron-down" aria-hidden="true"></i>	
								    </div> 
								  </div>
								</form>
								<div class="list" 
								v-show="showMasters">
									<ul class="list-group">
									  	<li class="list-group-item list-item" 
										v-for="(master, index) in getMasters"
										:key="index"
										v-on:click="getMaster(index)">
										<span class="left">
									  		<span class="name">{{master}}</span>
									  		<br>
									  		<span class="duration">
									  			тип: {{selectedServices[0].parentname}}
									  		</span>	
								  		</span>
											
										</li>
									</ul>
								</div>
							</div>
							<div class="wrapper-field w-100 mt-4">
								<div class="contact-data">
									Контактные данные
								</div>
								<form @submit.prevent>
									<div class="wrapper-group d-flex">
										<div class="col-md-6 pl-0">
											    <label class="field" for="nameField"><span>
										    		<i class="fillabilityStatus fa fa-fw"  :class="checkUserClass"></i>
										    	</span>Ваше имя</label>
											    <input type="text" class="form-control" id="nameField" placeholder="Введите ваше имя"
											    		v-model="username" autocomplete="off">
										</div>
							
									  	<div class="col-md-6 pr-0">
											    <label class="field" for="phoneField">
											    	<span>
										    			<i class="fillabilityStatus fa fa-fw" :class="checkPhoneClass"></i>
										    		</span>Мобильный телефон
										    	</label>
											    <input type="text" class="form-control" id="phoneField" placeholder="Введите телефон" v-model="phoneNumber" autocomplete="off">
										</div>	
									</div>
									<input type="button" class="btn btn-big btn-primaryy btn-control mx-auto mt-3" value="ЗАПИСАТЬСЯ"
									v-on:click="showTable = true"
									:disabled="info">	
								</form>
							</div>		
						</template>
						<div v-else-if="selectedServices.length > 0" class="error-message">
							К сожалению, в салоне нет мастера, который может выполнить все выбранные Вами услуги. Поэтому Вам необходимо сделать несколько записей или удалить услуги 
						</div>
					</template>
					<div v-else class="reservation-info-box box w-100">
						<table class="table table-bordered">
							<tbody>
								<tr>
								  <th scope="row">Салон:</th>
								  <td>{{getSalon.name}}</td>
								</tr>
								<tr>
								  <th scope="row">Адрес:</th>
								  <td>{{getSalon.address}}</td>
								</tr>
								<tr v-for="(elem, index) in selectedServices" :key='index'>
								  <th scope="row">Услуга:</th>
								  <td>
								  	<span>{{elem.type.name}}</span>
								  	<span>{{elem.type.minute}} минут</span>
								  	<span>{{elem.type.price}}</span>
								  </td>
								</tr>
								<tr>
								  <th scope="row">Мастер:</th>
								  <td>{{selectedMaster}}</td>
								</tr>
								<tr>
								  <th scope="row">Клиент:</th>
								  <td>{{username}}</td>
								</tr>
								<tr>
								  <th scope="row">Телефон:</th>
								  <td>{{phoneNumber}}</td>
								</tr>
							</tbody>
						</table>
						<router-link :to="{name: 'main'}" class="back">
							<input type="button" class="btn btn-big btn-primaryy btn-control mx-auto mt-3" value="Главная страница" v-on:click="showTable = false">
						</router-link>
					</div>
					
				</div>
			</div>	
		</div>
	</div>
</template>

<style scoped>
	.reservation-page .container {
		max-width: 620px!important;
	}
	.gray-wrap {
		background: #e8e8e8; 
		padding: 10px 0;
	}
	ul.breadcrumb {
		padding: 5px 0 10px;
	    font-size: 14px;
	    margin: 0;
	    color: #656565;
	}
	ul.breadcrumb li a {
		color: #656565;
    	text-decoration: none;
	}
	ul.breadcrumb li+li:before {
	    padding: 0 4px;
	    color: #656565;
	    content: ">\00a0";
	    padding-left: 6px;
	}
	.gray-wrap h1 {
		font-size: 1.9rem;
    	font-weight: 500;
	}
	ul li a:hover {
		text-decoration: underline;
	}
	.input-wrapper {
		padding: 15px 0;
	}
	.selected-wrapper {
		margin-bottom: 15px;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.07);
	}
	.selected-services {
		padding: 8px 35px 9px 20px;
	    font-size: 15px;
	    border: 1px solid #e2e2e2;
	    background-color: #fff;
	    margin-bottom: -1px;
	    position: relative;
	}
	.form-group {
		margin-bottom: 0;
	}
	.fa-exclamation {
	    color: #feb73b;
	}
	.fa-check {
    	color: #47a025;
	}
	.reservation-page .fillabilityStatus {
	    font-size: 18px;
	    position: absolute;
	    margin-left: -25px;
	}
	.form-group label,
	.contact-data {
		font-weight: bold;
    	font-size: 16px;
    	margin-bottom: 10px;
	}
	.form-group input {
		height: 55px;
	    border: 1px solid #e2e2e2;
	    border-radius: 2px;
	    width: 100%;
	    color: #444;
	    background-color: #fff;
	    line-height: 1.2;
	    font-size: 15px;
	    line-height: 53px;
	    padding: 0 40px 0 14px;
	    box-shadow: 0 0 4px rgba(0, 0, 0, 0.07);
	}
	.form-group .choice {
		color: #444;
	}
	.fa-chevron-down,
	.fa-times {
		position: absolute;
	    top: 18px;
	    right: 14px;
		font-weight: 600;
	    font-size: 16px;
	    cursor: pointer;
	}
	.fa-chevron-down {
	}
	.form-group .autocomplete {
		position: relative;
	}
	.list {
		max-height: 500px;
		overflow: auto;
		width: 100%;
		box-shadow: 0 3px 9px rgba(0, 0, 0, 0.1);
	}
	.list .categori {
		font-size: 1.3rem;
	    padding-left: 15px;
	    background: #e8e8e8;
	    font-weight: bold;
	}
	.list li.list-group-item {
		border: none;
	}
	.list li.list-item {
		border-bottom: 2px solid #e2e2e2;
		padding-left: 25px;
		border-left: 4px solid transparent;
		cursor: pointer;
	}
	.list li.list-item:hover {
		background-color: #f9ebe9;
	    border-left-color: #bf2e23;
	    outline: 0;
	}
	.left .name {
		font-weight: bold;
		font-size: 1.2rem;
	}
	.left .duration {
    	color: #808080;
	}
	.right {
    	font-size: 1.1rem;
	}
	.error-message {
	    padding: 6px 8px;
	    margin: 5px 0 6px 0;
	    color: #b94a48;
	    background-color: #f2dede;
	    border-color: #eed3d7;
	    border-radius: 4px;
	    font-size: 14px;
	}
	.master-icon {
		top: 10px!important;
	}
	.contact-data {
		color: #444;
	}
	.wrapper-group .field {
		font-weight: bold;
		font-size: 14px;
	    line-height: 1.2;
	    color: #444;
	}
	.wrapper-group input[type=text] {
		display: block;
	    width: 100%;
	    line-height: 1.3;
	    color: #333;
	    background-color: #fff;
	    border: 1px solid #a9a9a9;
	    padding: 8px 12px;
	    border-radius: 4px;
	    font-size: 14px;
	}
	.wrapper-group input[type=text]:focus {
		border-color: #bf2e23;
	}
	.btn {
	    display: block;
	    cursor: pointer;
	    line-height: 1;
	    text-align: center;
	    vertical-align: middle;
	    color: inherit;
	    padding: 11px 18px;
	    border: 1px solid transparent;
	    border-radius: 18px;
	    font-weight: 500;
	    background-color: inherit;
	    text-transform: uppercase;
	    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	    -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	    -o-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	}
	.btn.btn-primaryy {
	    color: #bf2e23;
	    border-color: #bf2e23;
	}
	.btn.btn-big {
	    padding: 14px 22px 13px;
	    font-size: 15px;
	    border-radius: 22px;
	}
	.btn.btn-primaryy:hover{
	    color: #fff;
	    background-color: #bf2e23;
	}
	.back {
		text-decoration: none;
	}

</style>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		data() {
			return {
				showList: false,
				showMasters: false,
				username: '',
				phoneNumber: '',
				showTable: false,
			}
		},
		destroyed() {
			this.$store.commit('reservations/clearMaster');
			this.$store.commit('reservations/clearSelectedServices');
		},
		computed: {
			...mapGetters('reservations', {
				itemsReservation: 'itemsReservation',
				selectedServices: 'selectedServices',
				selectedMaster: 'selectedMaster',
				info: 'info',
			}),
			...mapGetters('salony', {
				items: 'items',
			}),
			getSalon() {
				for(var key in this.items) {
						if(this.$route.params.id == this.items[key].id) {
							return this.items[key];
						}
				}
			},
			checkParents() {
				if(this.selectedServices.length > 0) {
					var name = 	this.selectedServices[0].parentname;
					for(var i=0; i<this.selectedServices.length; i++) {
						if(this.selectedServices[i].parentname !== name){
							return false;
						}
					}
					return true;

				}
			},
			getMasters() {
				var masters = [];
				for(var i=0; i<this.selectedServices.length; i++) {
					for(var elem in this.selectedServices[i].type.masters) masters.push(this.selectedServices[i].type.masters[elem]);
				}
				var countMasters = masters.reduce((acc, el) => {
						    acc[el] = (acc[el] || 0) + 1;
						    return acc;
  				}, {});
  				var newMasters = [];
  				for(var element in countMasters) {
  					if(countMasters[element] == this.selectedServices.length) {
	  						newMasters.push(element);
	  				}
  				}
				return newMasters;
			},
			getSelectedMaster() {
				return this.getMasters.indexOf(this.selectedMaster) != -1 ? this.selectedMaster : '';
			},
			checkServiceClass() {
				return this.selectedServices.length > 0 ? 'fa-check' : 'fa-exclamation';
			},
			checkMasterClass() {
				return this.selectedMaster != '' ? 'fa-check' : 'fa-exclamation';
			},
			checkUserClass() {
				return this.username != '' ? 'fa-check' : 'fa-exclamation';
			},
			checkPhoneClass() {
				return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(this.phoneNumber) ? 'fa-check' : 'fa-exclamation';
			},
			info() {
				if(this.checkServiceClass == 'fa-check' && this.checkMasterClass == 'fa-check'
					&&  this.checkUserClass == 'fa-check' && this.checkPhoneClass == 'fa-check'){
					return false;
				}
				return true;
			},

		},
		methods: {
			clearSalon() {
				this.$store.dispatch('reservations/clearMaster');
				this.$store.dispatch('reservations/clearSelectedServices');
				
				this.showTable = false;
				return this.showTable;
			},
			getType(data = null, parentname = null, index) {
				var ob = {
						type: data,
						parentname: parentname,
						index: index,
					};
					for(var i=0; i<this.selectedServices; i++) {
						console.log(this.selectedServices);
					}
					console.log(parentname);
				this.$store.dispatch('reservations/addType',ob);
				this.showList = false;
			},
			getService(index) {
				return this.$store.dispatch('reservations/deleteService', index);
			},
			getMaster(index) {
				this.$store.dispatch('reservations/addMaster', this.getMasters[index]);
				this.showMasters = false;
			},
			getMasterDel() {
				return this.$store.dispatch('reservations/deleteMaster');
			},
		}

	}
</script>
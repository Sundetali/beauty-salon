<template>
	<div class="reservation-page w-100">
		<div class="gray-wrap">
			<div class="container">
				<div class="row">
					<ul class="breadcrumb">
						<li><a href="#">Все салоны</a></li>
						<li><a href="#">Салон красоты Vse Svoi</a></li>
						<li>Онлайн запись</li>
					</ul>
					<h1 class="mb-10 w-100">Студия красоты Nailfie.Kz</h1>
				</div>
			</div>
		</div>
		<div class="input-wrapper">
			<div class="container">
				<div class="row">
					<div class="selected-wrapper w-100">
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
					</div>
					<form class="w-100">
						  <div class="form-group">
						    <label for="example" class="choice"
						    		v-show="!choosenServices">Выбирите услугу</label>
						    <div class="autocomplete" 
						    	v-on:click="showList = !showList">
						    	<input type="text" class="form-control" id="example" placeholder="ДОБАВИТЬ УСЛУГУ">
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
						 	<li class="list-group-item d-flex justify-content-between				align-items-top"
						 			v-for="(elem, i) in item.types"
						 			:key="i"
						 			v-on:click="getType(elem, item.name)">
						  		<span class="left">
							  		<span class="name">{{elem.name}}</span>
							  		<br>
							  		<span class="duration">{{elem.minute}} минут</span>	
						  		</span>
						  		<span class="right">{{elem.price}}</span>
						  	</li>
						</ul>
					</div>
					<div class="wrapper-masters"
						v-if="checkParents" v-for="elem in getMasters">
						{{elem}}
					</div>
					<div v-else>error!</div>
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
	.form-group label {
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
	.list li.list-group-item+li {
		border-bottom: 2px solid #e2e2e2;
		padding-left: 25px;
		border-left: 4px solid transparent;
		cursor: pointer;
	}
	.list li.list-group-item+li:hover {
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

</style>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		data() {
			return {
				showList: false,
			}
		},
		computed: {
			...mapGetters('reservations', {
				itemsReservation: 'itemsReservation',
				selectedServices: 'selectedServices',
			}),
			choosenServices() {
				return this.selectedServices.length > 0;
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
			}
		},
		methods: {
			getType(data, parentname) {
				this.$store.dispatch('reservations/addType',
				{
					type: data,
					parentname: parentname,
				} 
					);
				this.showList = false;
			},
			getService(index) {
				return this.$store.dispatch('reservations/deleteService', index);
			},
		}

	}
</script>
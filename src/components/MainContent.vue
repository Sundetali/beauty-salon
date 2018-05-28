<template>
	<div class="wrapper-maincontent">
		<div class="content-search">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-6">
						<form @submit.prevent>
							<div class="form-group d-flex">
							   	<input type="text" class="form-control search-input" id="exampleInputEmail1" placeholder="Найди лучшие салоны">
							  	<button class="search"><i class="fa fa-search"></i></button>
							</div>
						</form>
					</div>
				</div>
			</div>	
		</div>
		<div class="content-answer">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<img class="banner" src="../assets/img/banner1.jpg" alt="Как записаться онлайн?">
					</div>
					<div class="col-md-6">
						<img class="banner" src="../assets/img/banner2.jpg" alt="Хотите видеть Ваш салон у нас на сайте?">
					</div>
				</div>
			</div>	
		</div>
		<div class="content-items">
			<div class="container">
				<h2 class="caption">Все салоны</h2>
				<div class="row">
					<template v-for="(item, index) in items">
						<div class="col-md-6">
							<div class="item-box d-flex" >
								<img src="../assets/img/img1.jpg" height="172" width="172" alt="">
								<div class="items-right d-flex flex-column justify-content-between">
									<div class="zapis-info">
										<span>{{item.type}}</span>
										<span class="name">{{item.name}}</span>
										<span class="mw-100">{{item.address}}</span>
									</div>
									<div class="item-bottom d-flex justify-content-between align-items-center  flex-wrap">
										<span class="reservation-сount d-flex align-items-center">
											<span class="icon"></span>
											<span class="ml-2">Сегодня записалось<br>{{item.itemNumber}}  человека </span>
										</span>
										<router-link :to="'/salon/'+item.id+'/reservations'">
											<input type="button" class="btn zapis-button" value="ЗАПИСАТЬСЯ"
											v-on:click="selectData(item.id)">	
										</router-link>
									</div>
								</div>	
							</div>
						</div>	
					</template>
				</div>
			</div>
		</div>
	</div> 
</template>

<style scoped>

	.content-search {
		margin: 20px 0 10px;
	}
	.content-search .search {
		height: 40px;
    	padding: 0 18px;    
    	background: #EDEDED;
		border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
	}
	.content-search .search:hover {
		height: 42px;
    	padding: 0 18px;    
    	background: #EDEDED;
		border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
		margin: 0;
	}

	.search-input {
		box-shadow: 0 2px 5px rgba(0, 0, 0 , 0.2)!important;
		-webkit-box-shadow: 0 2px 5px rgba(0, 0, 0 , 0.2)!important;
	    padding: 8px 15px!important;
	    border: 1px solid #cccccc!important;
	    -webkit-border-radius: 3px!important;
	    -moz-border-radius: 3px!important;
	    border-radius: 3px!important;
	    width: 400px;
	    height: 40px;
	    padding: 15px;
	    margin-bottom: 20px;
	    color: #333333;
    	text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
    	font-size: 1.2rem;
    	margin-right: 0;
	} 
	.content-answer .banner {
		transition: box-shadow 0.3s ease-in-out;
		margin-bottom: 30px;
	}
	.content-answer .banner:hover{
		box-shadow: 0 2px 6px rgba(0,0,0,0.3);
	    -webkit-box-shadow: 0 2px 6px rgba(0,0,0,0.3);
	}
	.content-items .zapis-button {
		color: #bf2e23;
	    border-color: #bf2e23;
	    background-color: #fff;
	    font-size: 11px;
	    padding: 3px 10px;
	    border-radius: 15px;
	    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	}
	.caption {
		font-size: 1.6rem;
		line-height: 4rem;
		font-weight: 550;
	}
	.content-items .item-box {
		margin-bottom: 20px;
		transition: box-shadow 0.3s ease-in-out;
		background: #fff;
	}

	.content-items .zapis-button:hover {
		color: #fff;
	    background-color: #bf2e23;
	}	
	.content-items .items-right {
		width: 100%;
		padding: 20px;
	}

	.content-items .zapis-info span {
		font-size: 13px;
		display: block;
		color: #444;
	}
	.content-items .zapis-info span.name {
		font-size: 15px;
	    font-weight: 550;
	    margin: 3px 0;
	} 
	.reservation-сount span {
		line-height: 1;
		font-size: 13px;
	    color: #707070;
	}
	.reservation-сount .icon {
		background: #fff url(../assets/img/reservation_count_icon.svg) no-repeat;
		background-size: 40px 40px;
		width: 19px;
	    height: 16px;
	    display: inline-block;
	}

	.content-items .item-box:hover{
		cursor: pointer;
		box-shadow: 0 2px 6px rgba(0,0,0,0.3);
	    -webkit-box-shadow: 0 2px 6px rgba(0,0,0,0.3);
	}
</style>
<style>
	.wrapper-maincontent {
		max-width: 1024px;
} 
</style>


<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters('salony', {
				items: 'items',
			}),
			get(index) {
				return '../assets/img/'+index+'.jpg';
			},
		},
		methods: {
			selectData(id) {
				return this.$store.dispatch('reservations/addData', id);
			},
		}
	}
</script>
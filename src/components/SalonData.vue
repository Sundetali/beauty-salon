<template>
	<div class="salon-info-wrap w-100">
		<div class="salon-info">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="header-box w-100">
							<ul class="breadcrumb">
								<li><router-link to="/main">Все салоны</router-link></li>
								<li><span>{{getSalon.type}} {{getSalon.name}}</span></li>
							</ul>
							<div class="heading-group">
								<p class="salon mt-2 mb-1">{{getSalon.type}}</p>
								<h1 class="name">{{getSalon.name}}</h1>
							</div>
						</div>
						<section class="contacts d-flex justify-content-between align-items-center flex-wrap">
								<div class="contacts-in">
									<p>
										<span class="ico-wrap">
											<i class="icon icon-location"></i>
										</span>
										<span>пр.Назарбаева, д.248, 3 этаж, офис 232 </span>
										<meta content="Алматы, Казахстан" />
									</p>
									<p>
										<span class="ico-wrap">
											<i class="icon icon-phone"></i>
										</span>
											<span>+7 (777) 139-05-55</span><br />
											<span>+7 (700) 978-94-95</span><br />
									</p>
									<p>
										<span class="ico-wrap">
											<i class="icon icon-time"></i>
										</span>08:00 - 22:00
									</p>	
								</div>
								<router-link :to="'/salon/'+idSalon+'/reservations'">
									<input type="button" class="btn btn-filled btn-big" value="ЗАПИСАТЬСЯ">	
								</router-link>			
								
						</section>
					</div>
					<div class="col-md-4"></div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row align-items-top mt-5">
				<div class="col-md-8">	
					<div class="all-services">
						<h2>О САЛОНЕ</h2>
						<p>
							<em>Добро пожаловать в салон красоты {{getSalon.name}}!</em>
						</p>
						<h2>УСЛУГИ</h2>
						<div id="accordion">
							<section class="services-category box"
							v-for="(elem, index) in itemsReservation"
							:key="index">
							    <div :id="'heading'+index">
								    <h2 class="mb-0">
								        <a data-toggle="collapse" :data-target="'#'+getElem(elem.name)" aria-expanded="true" :aria-controls="getElem(elem.name)"
								        v-on:click="$set(controls, index, !controls[index])">
								     		{{elem.name}} ({{elem.types.length}})
									     	<span>
									     		<i class="icon icon-chevron" :class="controls[index] ? 'top' : 'down'"></i>
									     	</span>
								        </a>
							     	</h2>
							    </div>
							    <div :id="getElem(elem.name)" class="collapse show" :aria-labelledby="'heading'+index" data-parent="#accordion">
							    	<div class="list-service"
							    	v-for="(item, index) in elem.types"
							    	:key="index">
										<section class="service d-flex justify-content-between">
											<div class="w-50 service-left">
												<h2>{{item.name}}</h2>
												<p class="time">{{item.minute}} минут</p>
											</div>
											<div class="w-50 service-right text-right pr-5">
												<span class="price">{{item.price}}
												</span>
												<span v-on:click="getType(item, elem.name)">
												<router-link :to="'/salon/'+idSalon+'/reservations'" 
												class="btn btn-primaryy reservation-btn">
												ЗАПИСАТЬСЯ</router-link>
												</span>	
											
											</div>
										</section>
							      	</div>
							    </div>
							</section>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="img-wrapper mb-2">
						<img src="../assets/img/salon.jpg" alt="salon">
					</div>
					<div class="info-slider">
						<h2 class="info-header">Мастера</h2>
						<div class="master-list p-3"
						
						>
						<div v-for="(salon,index) in itemsReservation">
							<h3>{{salon.name}}</h3>
							<p v-for="(master,index) in salon.types[0].masters"
							:key="index">
								{{master}}
							</p>
						</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	a {
		text-decoration: none;
	}
	.salon-info {
	    background-color: #fff;
	    box-shadow: 0 1px 2px rgba(0,0,0,.2);
	    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
	    -moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);
	    padding: 20px 0 15px;
	}
	.salon-info a:hover {
		text-decoration: underline;
	}
	.salon-info .heading-group {
	    margin-bottom: 25px;
	}
	.salon-info-wrap h1 {
	    font-size: 23px;
	    font-weight: 500;
	}
	ul.breadcrumb {
		padding: 5px 0 10px;
	    font-size: 14px;
	    margin: 0;
	    color: #656565;
	    background-color: #fff!important;
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
	.salon-info .heading-group {
		margin-bottom: 20px;
	}
	.salon-info .heading-group p {
		font-size: 14px;
		margin: 3px 0 0;
	}
	.salon-info .contacts {
	    font-size: 15px;
	}
	.salon-info .contacts p {
		padding-left: 30px;
		margin-bottom: 10px;
		position: relative;
	}
	.salon-info .contacts p .ico-wrap {
	    display: block;
	    color: #ff2222;
	    position: absolute;
	    left: 0;
	    top: 50%;
	    width: 20px;
	    height: 18px;
	    margin-top: -9px;
	    text-align: center;
	    line-height: 1;
	    font-size: 16px;
	}
	.salon-info .contacts p .icon {
		display: inline-block;
	}
	.salon-info .contacts p .icon.icon-location {
	    background: url(../assets/img/salon_page_sprite.png) no-repeat;
	    width: 16px;
	    height: 18px;
	    background-position: -23px 0px;
	}
	.salon-info .contacts p .icon.icon-phone {
	    background: url('../assets/img/salon_page_sprite.png') no-repeat;
	    width: 16px;
	    height: 16px;
	    background-position: -23px -18px;
	}
	.salon-info .contacts p .icon.icon-time {
	    background: url('../assets/img/salon_page_sprite.png') no-repeat;
	    width: 16px;
	    height: 16px;
	    background-position: -23px -34px;
	}
	.btn.btn-filled {
	    color: #fff;
	    background-color: #bf2e23;
	    border-color: #bf2e23;
	}
	.btn.btn-big {
	    padding: 0.8333rem 1.8333rem;
	    font-size: 15px;
	    border-radius: 22px;
	}
	.all-services {
		padding: 0 10px 25px;
	}
	.salon-info-wrap h2 {
	    font-weight: 550;
	    font-size: 18px;
	    margin-bottom: 10px;
	}
	.salon-info-wrap p {
		font-size: 15px;
	}
	#accordion {
		background: #fff;
	}
	.list-service .service {
	    margin: 0;
	    padding: 10px 0;
	    border-bottom: 1px solid #e2e2e2;
	}
	.list-service .service .service-left,
	.list-service .service .service-left {
		padding-left: 30px;

	}
	.list-service .service h2 {
	    font-size: 15px;
	    font-weight: 700;
	}
	.services-category {
		position: relative;
	}
	.services-category span .icon.icon-chevron {
	    background: url(../assets/img/salon_page_sprite.png) no-repeat;
	    width: 23px;
	    height: 13px;
	}
	.services-category span .icon {
	    position: absolute;
	    top: 19px;
	    right: 18px;
	}
	.top {
		background-position: 0 0;
	}
	.down {
		background-position: 0 -13px!important;
	}
	.list-service .service h2,
	.list-service .service .time {
		margin-bottom: 0;
	}
	.list-service .service .time {
	    color: #808080;
	}
	.list-service .service .time,
	.list-service .service .price {
	    font-size: 14px;
	}
	.btn.btn-primaryy {
	    color: #bf2e23;
	    border-color: #bf2e23;
	}
	.list-service .service .reservation-btn {
	    margin-left: 15px;
	    padding: 5px 15px;
	    font-size: 13px;
	}
	.btn.btn-primaryy:hover {
	    color: #fff;
	    background-color: #bf2e23;
	}
	#accordion h2 a{
		display: block;
	    padding: 15px;
	    color: #333;
	    text-decoration: none;
	    position: relative;
	   	font-size: 17px;
		font-weight: 700;
		cursor: pointer;
	}
	#accordion h2 a.collapsed {
		font-weight: 400;
	}
	.info-slider {
	    border: 1px solid #e2e2e2;
	    display: block;
	    background-color: #fff;
	    border-radius: 2px;
	    color: #333;
	    position: relative;
	    box-shadow: 0 0 4px rgba(0, 0, 0, 0.07);
	    margin-bottom: 20px;
	}
	.info-slider .info-header {
	    font-weight: 900;
	    font-size: 17px;
	    padding: 9px 12px;
	    border-bottom: 1px solid #e2e2e2;
	    margin: 0;
	}
	.info-slider .master-list {
	    max-height: 636px;
	    overflow: auto;
	}
	.info-slider .master-list div {
		border-bottom: 1px solid #e2e2e2;
		margin-bottom: 10px;
	}
</style>


<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		data() {
			return {
				top: true,
				controls: [],
				index: null,
			}
		},
		created() {
			for(var i=0; i < this.itemsReservation.length; i++) {
				this.$set(this.controls, i, false);
			}
		},
		computed: {
			...mapGetters('reservations', {
				itemsReservation: 'itemsReservation',
			}),
			...mapGetters('salony', {
				items: 'items',
			}),
			idSalon() {
				var id = this.$route.params.nameId.split('-');			
				return id[1];
			},
			getSalon() {
				for(var key in this.items) {
						if(this.idSalon == this.items[key].id) {
							return this.items[key];
						}
				}
			}
		},
		methods: {
			getElem(name) {
				return name.split(' ').join(''); 
			},
			chosenData(data) {
				return data;
			},
			getType(data, parentname) {
				return this.$store.dispatch('reservations/addType',
					{
						type: data,
						parentname: parentname,
					} 
				);
			}

		}

	}
</script>

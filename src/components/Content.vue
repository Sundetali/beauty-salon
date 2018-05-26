<template>
	<div>
		<div class="content-search">
			<div class="row justify-content-center">
				<div class="col-md-5">
					<form @submit.prevent>
						<div class="form-group d-flex">
						   	<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Найди лучшие салоны">
						  	<button class="search">search</button>
						</div>
					</form>
				</div>
			</div>	
		</div>
		<div class="content-answer">
			<div class="row">
				<div class="col-md-6">
					<img class="banner" src="../assets/img/banner1.jpg" alt="Как записаться онлайн?">
				</div>
				<div class="col-md-6">
					<img class="banner" src="../assets/img/banner2.jpg" alt="Хотите видеть Ваш салон у нас на сайте?">
				</div>
			</div>	
		</div>
		<div class="content-items">
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
									<span>{{item.address}}</span>
								</div>
								<div class="item-bottom d-flex justify-content-between align-items-center">
									<span>
										<img src="../assets/img/reservation_count_icon.png" alt="">	
										{{item.itemNumber}} 
									</span>
									<input type="button" class="btn zapis-button"  value="ЗАПИСАТЬСЯ">
									<router-link class="btn zapis-button" :to="'/salon/'+item.id+'/reservations'">
										<a>{{item.id}}</a>
									</router-link>
								</div>
							</div>	
						</div>
					</div>	
				</template>
			</div>
		</div>
	</div> 
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters('salony', {
				items: 'items'
			}),
			get(index) {
				return '../assets/img/'+index+'.jpg';
			}
		},
		/*methods: {

			getURL(index) {
				return '../assets/img/img'+(index+1)+'.jpg';

			}
		}*/
	}
</script>

<style scoped>

.content-search {
	margin: 20px 0 10px;
}
.content-search .search {
	box-shadow: 0 2px 5px rgba(0, 0, 0 , 0.2);
	-webkit-box-shadow:0 2px 5px rgba(0, 0, 0 , 0.2);
}

.form-control {
	box-shadow: 0 2px 5px rgba(0, 0, 0 , 0.2)!important;
	-webkit-box-shadow: 0 2px 5px rgba(0, 0, 0 , 0.2)!important;
    padding: 8px 15px!important;
    border: 1px solid #cccccc!important;
    -webkit-border-radius: 3px!important;
    -moz-border-radius: 3px!important;
    border-radius: 3px!important; 
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

.content-items .items-right span {
	font-size: 13px;
	display: block;
}
.content-items .items-right span.name {
	font-size: 15px;
    font-weight: 550;
    margin: 3px 0;
} 

.content-items .item-box:hover{
	cursor: pointer;
	box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    -webkit-box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}
</style>
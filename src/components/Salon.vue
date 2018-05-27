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
					<form class="w-100">
						  <div class="form-group">
						    <label for="example" class="choice">Выбирите услугу</label>
						    <div class="autocomplete">
						    	<input type="text" class="form-control" id="example" placeholder="ДОБАВИТЬ УСЛУГУ">
						    	<i class="fa fa-chevron-down" aria-hidden="true" 
						    		v-on:click="showList = !showList"></i>	
						    </div> 
						  </div>
					</form>
					<div class="list" v-show="showList">
						<ul class="list-group">
						  <li class="list-group-item categori">Волосы</li>
						  <li class="list-group-item d-flex justify-content-between align-items-top">
						  	<span class="left">
							  	<span class="name">Лаконы</span>
							  	<br>
							  	<span class="duration">60 минут</span>	
						  	</span>
						  	<span class="right">4000 T</span>
						  	
						  </li>
						  <li class="list-group-item">Morbi leo risus</li>
						  <li class="list-group-item">Porta ac consectetur ac</li>
						  <li class="list-group-item">Vestibulum at eros</li>
						</ul>
						<ul class="list-group">
						  <li class="list-group-item active">Cras justo odio</li>
						  <li class="list-group-item">Dapibus ac facilisis in</li>
						  <li class="list-group-item">Morbi leo risus</li>
						  <li class="list-group-item">Porta ac consectetur ac</li>
						  <li class="list-group-item">Vestibulum at eros</li>
						</ul>	
						<ul class="list-group">
						  <li class="list-group-item active">Cras justo odio</li>
						  <li class="list-group-item">Dapibus ac facilisis in</li>
						  <li class="list-group-item">Morbi leo risus</li>
						  <li class="list-group-item">Porta ac consectetur ac</li>
						  <li class="list-group-item">Vestibulum at eros</li>
						</ul>	
						<ul class="list-group">
						  <li class="list-group-item active">Cras justo odio</li>
						  <li class="list-group-item">Dapibus ac facilisis in</li>
						  <li class="list-group-item">Morbi leo risus</li>
						  <li class="list-group-item">Porta ac consectetur ac</li>
						  <li class="list-group-item">Vestibulum at eros</li>
						</ul>		
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
	.fa-chevron-down {
		position: absolute;
	    top: 18px;
	    right: 14px;
	    font-size: 16px;
	    cursor: pointer;
	}
	.form-group .autocomplete {
		position: relative;
	}
	.list {
		max-height: 540px;
		overflow: auto;
		width: 100%;
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
	.list li.list-group-item .name {
		font-weight: bold;
		font-size: 1.2rem;
	}
	.list li.list-group-item .duration {
    	color: #808080;
	}
	.list li.list-group-item .right {
    	font-size: 1.1rem;
	}

</style>

<script>
	export default {
		data() {
			return {
				showList: true,
			}
		}
	}

</script>
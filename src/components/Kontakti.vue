<template>
	<div class="wrapper-content">
		<div class="container">
			<h4 class="caption mx-auto">Контакты</h4>
			<div class="row">
				<div class="box d-flex flex-wrap">
					<div class="map"></div>
					<div class="address-wrapper d-flex flex-column">
						<div class="address address-item">
							<span class="bold "><i class="fa fa-map-marker"></i>	Адрес:
							</span>
							<span>
								г. Алматы, ул. Богенбай батыра 150, 4 этаж
							</span>
						</div>
						<div class="phone address-item">
							<span class="bold">
								<i class="fa fa-phone"></i>	Телефоны:
							</span>
							<span>+7 (707) 757-23-48</span>
						</div>
						<div class="email address-item">
							<span class="bold">
								<i class="fa fa-envelope"></i> Email:
							</span>
							<span>info@zapis.kz</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	
</script>

<style scoped>
.wrapper-content {
	min-width: 1044px;
	width: 100%;
}
.caption {
	font-size: 1.8rem;
	line-height: 4rem;
	font-weight: 550;
	color: #444;
	max-width: 1004px;
}

.box {
	max-width: 1004px;
	margin-left: auto;
	width: 100%;
	border: 1px solid #e2e2e2;
    background-color: #fff;
    border-radius: 2px;
    color: #333;
    position: relative;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.07);
    padding: 15px;
}
.box .map {
	width: 350px;
	height: 350px;
	border: 1px solid;
	margin-right: 20px;
}
.box .address-item {
	margin-top: 20px;
}
.box .address-item .fa {
	color: #bf2e23;
	width: 15px;
}
.box span {
	display: block;
	font-size: 1.15rem;
}
.box span.bold {
	font-weight: bolder;
}
</style>
<template>
	<div class="instruction-page w-100">
		<div class="container">
			<h1 class="text-center">Как записаться?</h1>
			<div class="row">
				<div class="col-sm-10 mx-auto">
					<div class="step w-100">
						<div class="shadow">
						</div>
						<div class="myrow d-flex ">
							<div class="step-text w-55">
								Выбирите<br>Нужный вам салон
							</div>
							<div class="img-w">
								<img src="../assets/img/step1.png" alt="sterp1" class="img1">
							</div>
							<div class="count c1"></div>
						</div>
					</div>
					<div class="step w-100">
						<div class="shadow">
						</div>
						<div class="myrow d-flex ">
							<div class="step-text">
								Выбирите<br>нужную услугу
							</div>
							<div class="img-w">
								<img src="../assets/img/step2.png" alt="sterp1" class="img2">
							</div>
							<div class="count c2"></div>
						</div>
					</div>
					<div class="step w-100">
						<div class="shadow">
						</div>
						<div class="myrow d-flex ">
							<div class="step-text">
								Подберите<br>время и мастера
							</div>
							<div class="img-w">
								<img src="../assets/img/step3.png" alt="sterp1" class="img3">
							</div>
							<div class="count c3"></div>
						</div>
					</div>
					<div class="step w-100">
						<div class="shadow">
						</div>
						<div class="myrow d-flex ">
							<div class="step-text">
								Подтвердите<br>номер телефона
							</div>
							<div class="img-w">
								<img src="../assets/img/step4.png" alt="sterp1" class="img4">
							</div>
							<div class="count c4"></div>
						</div>
					</div>
					<div class="step w-100">
						<div class="shadow">
						</div>
						<div class="myrow d-flex ">
							<div class="step-text">
								Готово!
							</div>
							<div class="img-w">
								<img src="../assets/img/step5.png" alt="sterp1" class="img5">
							</div>
							<div class="count c5"></div>
						</div>
					</div>
				</div>
				<div class="any-questions w-100">
					Остались вапросы? Звоните нам: <br>
					<span class="phone">8 (777) 777 77 77</span>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.instruction-page h1 {
	    font-weight: normal;
	    font-size: 1.667rem;
	    text-transform: uppercase;
	    margin: 40px 0;
	}
	.instruction-page .step {
		position: relative;
		max-width: 780px;
	    z-index: 1;
	    font-size: 20px;
	    color: #444;
	    padding-left: 100px;
	    margin: 0 auto 40px;

	}
	.instruction-page .shadow {
	    position: absolute;
	    top: 0px;
	    bottom: 0px;
	    left: 33%;
	    right: 22%;
	    z-index: 1;
	    -webkit-box-shadow: 0px 0px 45px 0px rgba(0,0,0,0.12);
	    -moz-box-shadow: 0px 0px 45px 0px rgba(0,0,0,0.12);
	    box-shadow: 0px 0px 45px 0px rgba(0,0,0,0.12);
	}
	.instruction-page .step .myrow {
	    position: relative;
	    z-index: 2;
	    background-color: #fff;
	    -webkit-box-shadow: -18px 0px 75px 0px rgba(0,0,0,0.1);
	    -moz-box-shadow: -18px 0px 75px 0px rgba(0,0,0,0.1);
	    box-shadow: -18px 0px 75px 0px rgba(0,0,0,0.1);
	}
	.instruction-page .step .step-text {
	    padding: 56px 54px 60px;
	    width: 45%;
	}
	.instruction-page .step .img-w {
	    width: 55%;
	}
	.instruction-page .step img {
	    -webkit-box-shadow: 0px 0px 33px 0px rgba(0,0,0,0.33);
	    display: block;
	    -moz-box-shadow: 0px 0px 33px 0px rgba(0,0,0,0.33);
	    max-width: 100%;
	    box-shadow: 0px 0px 33px 0px rgba(0,0,0,0.33);
	    margin: -8px 0;
	}
	.instruction-page .step .img3 {
	    margin: -15px 0;;
	}
	.instruction-page .step .img4 {
	    margin: -13px 0;;
	}
	.instruction-page .count.c1 {
	    background: url(../assets/img/count1.png) no-repeat;
	    width: 76px;
	    height: 166px;
	    bottom: 0px;
	    left: -73px;
	}
	.instruction-page .count.c2 {
	    background: url(../assets/img/count2.png) no-repeat;
	    width: 93px;
	    height: 169px;
	    bottom: 0px;
	    left: -91px;
	}
	.instruction-page .count.c3 {
	    background: url(../assets/img/count3.png) no-repeat;
	    width: 98px;
	    height: 168px;
	    top: 0px;
	    left: -94px;
	}
	.instruction-page .count.c4 {
		background: url(../assets/img/count4.png) no-repeat;
		width: 107px;
		height: 166px;
		bottom: 0px;
		left: -105px;
	}
	.instruction-page .count.c5 {
	    background: url(../assets/img/count5.png) no-repeat;
	    width: 107px;
	    height: 168px;
	    top: -1px;
	    left: -100px;
	}
	.instruction-page .count {
	    position: absolute;
	    z-index: 1;
	    display: block;
	}
	.instruction-page .any-questions {
	    text-align: center;
	    font-size: 20px;
	    color: #444;
	    line-height: 1.5;
	    text-transform: uppercase;
	    margin-top: 20px;
	}
	.instruction-page .any-questions .phone {
	    color: #bf2e23;
	    font-size: 24px;
	    white-space: nowrap;
	}
</style>
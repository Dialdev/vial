open=0;
//slide
function swap() {
	if (menu==1) { $('#slide1').animate({opacity: 0.0}, 1000).css("z-index", "0"); $('#slide2').animate({opacity: 1.0}, 1000).css("z-index", "1");  }
	if (menu==2) { $('#slide2').animate({opacity: 0.0}, 1000).css("z-index", "0"); $('#slide3').animate({opacity: 1.0}, 1000).css("z-index", "1"); }
	if (menu==3) { $('#slide3').animate({opacity: 0.0}, 1000).css("z-index", "0"); $('#slide4').animate({opacity: 1.0}, 1000).css("z-index", "1"); }
	if (menu==4) { $('#slide4').animate({opacity: 0.0}, 1000).css("z-index", "0"); $('#slide5').animate({opacity: 1.0}, 1000).css("z-index", "1"); }
	if (menu==5) { $('#slide5').animate({opacity: 0.0}, 1000).css("z-index", "0"); $('#slide6').animate({opacity: 1.0}, 1000).css("z-index", "1"); }
	if (menu==6) { $('#slide6').animate({opacity: 0.0}, 1000).css("z-index", "0"); $('#slide7').animate({opacity: 1.0}, 1000).css("z-index", "1"); }
	if (menu==7) { $('#slide7').animate({opacity: 0.0}, 1000).css("z-index", "0"); $('#slide8').animate({opacity: 1.0}, 1000).css("z-index", "1"); }
	if (menu==8) { $('#slide8').animate({opacity: 0.0}, 1000).css("z-index", "0"); $('#slide1').animate({opacity: 1.0}, 1000).css("z-index", "1"); menu=0;}
	menu+=1;
   // console.log(menu);
};
$(function(){
	//slide
	menu=1;
	setInterval('swap()',4000);
	//callback
	$('.input-phone').inputmask('+7 (999) 999-99-99');
	$('.zvonok').click(function(){
		if (open==0) {
			open=1;
			$('.zvonok').animate({'right':'254px'},500);
			$('.zakaz-form').animate({'right':'0px'},500);
		} else {
			open=0;
			$('.zvonok').animate({'right':'0px'},500);
			$('.zakaz-form').animate({'right':'-254px'},500);
		}
	});
	if($('.zakaz-form .errors').length > 0 ){
		open=1;
		$('.zvonok').animate({'right':'254px'},500);
		$('.zakaz-form').animate({'right':'0px'},500);
	} 
	if($('.zakaz-form .success').length > 0){
		$.fancybox.open('<div class="message">Спасибо за обращение. Наш менеджер в ближайшее время свяжется с вами!</div>');
		open=1;
		$('.zvonok').animate({'right':'254px'},500);
		$('.zakaz-form').animate({'right':'0px'},500);
	} 
	$('.zakaz').submit(function(){
		yaCounter22475323.reachGoal('zvonok');
		ga('send', 'event', 'order', 'click');
		console.log(" zvonok ok");
	});
	$('.obrat_sv form').submit(function(){
        yaCounter22475323.reachGoal('obratnaya_svyaz');
		ga('send', 'event', 'order', 'click');
        console.log("obratnaya_svyaz ok");
});
});
$(document).ready(function(){ 
	$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
	$(".up-btn").fadeIn();
	} else {
	$(".up-btn").fadeOut();
	}
	});
	 
	$(".up-btn").click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
	}); 
});
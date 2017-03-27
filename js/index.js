$('.nav_ul li.active a').each(function(){
	$(this).html($(this).parent('li.active').attr('sdli'))
});
$(function(){
	$('.nav_ul li').mouseenter(function(){
		 // alert($(this).attr('sdli'))
		$(this).find('a').html($(this).attr('sdli'));
	});
	$('.nav_ul li').mouseleave(function(){
		if($(this).hasClass('active')){
			$(this).find('a').html($(this).attr('sdli'));
		}else{	
			$(this).find('a').html($(this).attr('title'));
		}
	});
	$('.nav_ul li').click(function(){
		var thisa = $(this);
		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).find('a').html(thisa.attr('sdli'));
		thisa.siblings('li').each(function(){
			$(this).find('a').html($(this).attr('title'));
		});
	});
});
$('.nav_ul li.active').html($(this).attr('sdli'));
$(".prev,.next").hover(function(){
	$(this).stop(true,false).fadeTo("show",0.9);
},function(){
	$(this).stop(true,false).fadeTo("show",0.4);
});
// $(".banner-box").slide({
// 	titCell:".hd ul",
// 	mainCell:".bd ul",
// 	effect:"fold",
// 	interTime:3500,
// 	delayTime:500,
// 	autoPlay:true,
// 	autoPage:true, 
// 	trigger:"click" 
// });	
$('.product_ul li').click(function(){
	$(this).addClass('active').siblings('li').removeClass('active');
});
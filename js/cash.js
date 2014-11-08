var myScroll;			
$(document).ready(function(){
	myScroll = new IScroll('#wrapper', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	var $navbar = $('.navbar');//top下划出来的nav
	var $show_nav = $('#show_nav');//点击出现navbar的锚点
	var $mask = $('.mask');//完全遮罩层
	var $maskOver = $('.maskOver');//露出顶部header的遮罩层
	$show_nav.off('touchstart').on('touchstart',function(){
		var $this = $(this);
		if(!$this.hasClass('current')){
			$maskOver.stop().fadeIn();
			$this.addClass('current');
			$navbar.addClass('show');

		}else{
			$this.removeClass('current');
			$navbar.removeClass('show');
			$maskOver.stop().fadeOut();
		}
	});
	$list_normal = $('.list_normal');//选项组
	$('li','.list_normal').off('touchstrat').on('touchstart',function(){
		var $this = $(this);
		var startTouch  = event.touches[0];
		StartX = startTouch.pageX;
		StartY = startTouch.pageY;
		$this.off('touchmove').on('touchmove',function(){
			var moveTouch  = event.touches[0];
			endX = moveTouch.pageX;
			endY = moveTouch.pageY;
		});
		$this.off('touchend').on('touchend',function(){
			x = endX - StartX;
			y = endY - StartY;
			if(Math.abs(Math.abs(x) - Math.abs(y))<20 || Math.abs(x)>Math.abs(y)){
				$(this).addClass('current').siblings().removeClass('current');
			}
		});
	});
	$('.maskOver').off('touchstart').on('touchstart',function(){
		var $this = $(this);
		$this.fadeOut();//关闭遮罩层
		$navbar.removeClass('show');
		$show_nav.removeClass('current');
	});
});
	

















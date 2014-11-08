define(function(require, exports, module) {
	var $laCommon = require('core/la_common');
	exports.select = function(selectMenu) {
		var mobileObj = false;
		$laCommon.switchOS(function() {
			mobileObj = $('#menuRemindIOS');
		}, function() {
			mobileObj = $('#menuRemind');
		});
		if (selectMenu) {
			$('li', mobileObj).removeClass('current');
			$('li[dir="' + selectMenu + '"]', mobileObj).addClass('current');
			var span = false;
			$laCommon.switchOS(function() {
				span = $('li[dir="' + selectMenu + '"]', mobileObj).find('span');
			}, function() {
				span = $('li[dir="' + selectMenu + '"]', mobileObj);
			});
			if (span) {
				var left = $(span).offset().left;
				var width = $(span).width();
				$('.bar').css({
					'left': left + 'px',
					'width': width + 'px'
				});
				window.setTimeout(function() {
					if (!$('.bar').hasClass('bar-move')) {
						$('.bar').addClass('bar-move');
					}
				}, 500);
			}
		} else {
			return $('li.current', mobileObj).attr('dir');
		}
	};
	exports.click = function(menuClickEvent) {
		var mobileObj = false;
		$laCommon.switchOS(function() {
			mobileObj = $('#menuRemindIOS');
		}, function() {
			mobileObj = $('#menuRemind');
		});
		$laCommon.touchSE($('li', mobileObj), function(event, startTouch, o) {}, function(event, o) {
			$('li', mobileObj).removeClass('current');
			$(o).addClass('current');
			var selectMenu = $(o).attr('dir');
			if (selectMenu) {
				menuClickEvent(selectMenu);
			}
		});
	};
});
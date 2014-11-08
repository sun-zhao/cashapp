define(function(require, exports, module) {
	var $laCommon = require('core/la_common');
	var $inputManager = require('manager/input');
	exports.toggle = function() {
		var searchBox = $('.SearchBox');
		if ($(searchBox).hasClass('current')) {
			$(searchBox).removeClass('current');
			//$(searchBox).slideUp(100);
		} else {
			$(searchBox).addClass('current');
			//$(searchBox).slideDown(100);
		}
	};
	exports.close = function() {
		var searchBox = $('.SearchBox');
		if ($(searchBox).hasClass('current')) {
			$(searchBox).removeClass('current');
			//$(searchBox).slideUp(0);
		}
	};
	exports.show = function() {
		var searchBox = $('.SearchBox');
		if ($(searchBox).hasClass('current')) {
			$(searchBox).removeClass('current');
			//$(searchBox).slideUp(0);
		}
	};

	exports.init = function(searchCallback) {
		$inputManager.forceCloseKeyboard();
		$('#searchKey').off('focus').on('focus', function(e) {
			$(this).addClass('nobg');
		});
		$inputManager.blur($('#searchKey'), function(el, e) {
			var keyWord = $(el).val();
			if ( typeof searchCallback == 'function') {
				searchCallback(keyWord);
			}
		});
		$laCommon.touchSE($('#back_ser'), function(event, startTouch, o) {
		}, function(event, o) {
			exports.close();
		});
		$laCommon.touchSE($('.clear','.SearchIn'), function(event, startTouch, o) {
		}, function(event, o) {
			$('#searchKey').val('');
		});
	};

});

define(function(require, exports, module) {
	var $laCommon = require('core/la_common');
	exports.forceCloseKeyboard = function(backCallback) {
		$laCommon.switchOS(function() {}, function() {
			$('input').off('keydown').on('keydown', function(e) {
				e = (e) ? e : ((window.event) ? window.event : "")
				var keyCode = e.keyCode ? e.keyCode : (e.which ? e.which : e.charCode);
				if (keyCode == 13) {
					$(this).trigger('blur');
				}
			});
		});
	};
	exports.focus = function() {
		$('input').off('focus').on('focus', function(e) {
			$(this).addClass('inputFocus');
		});
		$('textarea').off('focus').on('focus', function(e) {
			$(this).addClass('inputFocus');
		});
	};
	exports.blur = function(el, blurCallback, bind) {
		if (bind) {
			$(el).bind('blur', function(e) {
				$(this).removeClass('inputFocus');
				if (typeof blurCallback == 'function') {
					blurCallback(el, e);
				}
			});
		} else {
			$(el).off('blur').on('blur', function(e) {
				$(this).removeClass('inputFocus');
				if (typeof blurCallback == 'function') {
					blurCallback(el, e);
				}
			});
		}
	};
});
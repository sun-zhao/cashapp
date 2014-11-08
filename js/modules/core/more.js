define(function(require, exports, module) {
	var $laCommon = require('core/la_common');
	var currentPageObj = false,
		currentElementEL;
	exports.init = function(elementEL, pageObj) {
		currentPageObj = pageObj;
		currentElementEL = elementEL;
		if (currentPageObj) {
			if (currentPageObj['hasNextPage'] == true) {
				$(currentElementEL).removeClass('color-9').text('点击加载更多')
			} else {
				$(currentElementEL).addClass('color-9').html('&nbsp;')
			}
		}
	};
	exports.reload = function() {
		exports.init(currentElementEL, currentPageObj);
	};
	exports.setPage = function(pageObj) {
		currentPageObj = pageObj;
	};
	exports.hasMore = function() {
		var more = false;
		if (currentPageObj) {
			if (currentPageObj['hasNextPage'] == true) {
				more = true;
			}
		}
		return more;
	};
	exports.click = function(callbackAction) {
		if (typeof callbackAction == 'function') {
			$laCommon.touchSE($(currentElementEL), function(event, startTouch, o) {
			}, function(event, o) {
				callbackAction();
			});
		}
	};
	exports.getNextIndex = function() {
		var nextIndex = 0;
		if (currentPageObj) {
			nextIndex = currentPageObj['nextIndex'];
		}
		return nextIndex;
	};
});
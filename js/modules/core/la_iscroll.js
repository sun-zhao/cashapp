define(function(require, exports, module) {
	var $laCommon = require('core/la_common');
	var myScroll = false,
		moveAction = false,
		moveEndAction = false,
		downCancelAction = false,
		refreshIngAction = false,
		downIngAction = false,
		downAction = false,
		upCancelAction = false,
		upIngAction = false,
		upAction = false,
		scrollDivEL = false,
		pullDownOffset = 0,
		pullUpOffset = 0;
	var downFlag=false;
	var upFlag=false;
	exports.init = function() {
		$laCommon.touchM($(document), function(moveTouch, element) {

		});
	};
	exports.refreshing = function(refreshIngCallback) {
		refreshIngAction = refreshIngCallback;
	};
	exports.down = function(downIngCallback, downCancelCallback, downCallback) {
		downIngAction = downIngCallback;
		downCancelAction = downCancelCallback;
		downAction = downCallback;
	};
	exports.up = function(upIngCallback, upCancelCallback, upCallback) {
		upIngAction = upIngCallback;
		upCancelAction = upCancelCallback;
		upAction = upCallback;
	};
	exports.move = function(moveCallback) {
		moveAction = moveCallback;
	};
	exports.moveEnd = function(moveEndCallback) {
		moveEndAction = moveEndCallback;
	};
	exports.getOffset = function() {
		if (myScroll) {
			return {
				'topOffset': myScroll.topOffset,
				'x': myScroll.x,
				'y': myScroll.y
			};
		}
	};
	exports.isOK = function() {
		if (myScroll) {
			return true;
		}
		return false;
	};
	exports.refresh = function() {
		if (myScroll) {
			myScroll.refresh()
		}
	};

	exports.goXY = function(x, y, delay) {
		if (scrollDivEL && myScroll) {
			if (!delay) {
				delay = 300;
			}
			myScroll.scrollTo(x, y, delay);
		}
	};
	exports.go = function(index, delay) {
		if (scrollDivEL && myScroll) {
			if (!delay) {
				delay = 300;
			}
			myScroll.scrollToElement($('li:nth-child(' + index + ')', scrollDivEL).get(0), delay);
		}
	};
	exports.disable = function() {
		if (myScroll) {
			myScroll.disable()
		}
	};
	exports.enable = function() {
		if (myScroll) {
			myScroll.enable()
		}
	};
	exports.use = function(elementID, downOn, downEL, upEl) {
		scrollDivEL = $('div', '#' + elementID);
		if (downEL) {
			pullDownOffset = $(downEL).get(0).offsetHeight;
		}
		if (upEl) {
			pullUpOffset = $(upEl).get(0).offsetHeight;
		}
		myScroll = new iScroll(elementID, {
			useTransition: true,
			topOffset: pullDownOffset,
			hScroll: false,
			hScrollbar: false,
			vScrollbar: false,
			onRefresh: function() {
				if (typeof refreshIngAction == 'function') {
					refreshIngAction();
				}
			},
			onScrollMove: function() {
				if (typeof moveAction == 'function') {
					moveAction(this);
				}
				if (this.y > 5 &&!downFlag&& (downOn || !$(downEL).hasClass('action'))) {
					//下拉时候
					if (downEL) {
						$(downEL).addClass('action').addClass('up');
					}
					if (typeof downIngAction == 'function') {
						downIngAction();
					}
					downFlag=true;
					this.minScrollY = 0;
				} else if (this.y < 5 &&downFlag&& (downOn || $(downEL).hasClass('action'))) {
					//下拉回退 放弃
					if (downEL) {
						$(downEL).removeClass('action').removeClass('up');
					}
					if (typeof downCancelAction == 'function') {
						downCancelAction();
					}
					downFlag=false;
					this.minScrollY = -pullDownOffset;
				} else if (this.y < (this.maxScrollY - 5) &&!upFlag&& (downOn || !$(upEl).hasClass('action'))) {
					if (upEl) {
						$(upEl).addClass('action');
					}
					if (typeof upIngAction == 'function') {
						upIngAction();
					}
					upFlag=true;
					this.maxScrollY = this.maxScrollY;
				} else if (this.y > (this.maxScrollY + 5) && this.maxScrollY <= 0 &&upFlag&& (downOn || $(upEl).hasClass('action'))) {
					if (upEl) {
						$(upEl).removeClass('action');
					}
					if (typeof upCancelAction == 'function') {
						upCancelAction();
					}
					upFlag=false;
					this.maxScrollY = pullUpOffset;
				}
			},
			onScrollEnd: function() {
				if (downFlag&&(downOn||$(downEL).hasClass('action'))) {
					if(downEL){
						$(downEL).removeClass('action').removeClass('up').addClass('wait');
					}
					downFlag=false;
					if (typeof downAction == 'function') {
						window.setTimeout(function() {
							downAction();
						}, 300);
					}
				} else if (upFlag&&(downOn||$(upEl).hasClass('action'))) {
					if(upEl){
						$(upEl).removeClass('action');
					}
					upFlag=false;
					if (typeof upAction == 'function') {
						window.setTimeout(function() {
							upAction();
						}, 300);
					}
				}
				if (typeof moveEndAction == 'function') {
					moveEndAction(this);
				}
			}
		});
	};
});
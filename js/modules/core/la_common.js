define(function(require, exports, module) {
	var $windowManager = require('manager/window');
	var $keyManager = require('manager/key');
	var $nativeUIManager = require('manager/nativeUI');
	var $controlWindow = require('view/controlWindow');
	var $userInfo = require('core/userInfo');
	var onReadCallback = false;
	var againBackbutton = false;
	var backTimes = 0;
	var backPass = false;
	exports.onReady = function(onReadyCallback) {
		onReadCallback = onReadyCallback;
	};
	exports.ready = function() {
		$(document).ready(function() {
			if (onReadCallback) {
				onReadCallback();
			}
			exports.switchOS(function() {}, function() {
				$keyManager.backButton(function() {
					if (!backPass) {
						backPass = true;
						var title = $windowManager.title();
						if (title == 'main') {
							$nativeUIManager.confirm('退出提醒', '你确定要退出快捷审批?', ['确定', '取消'], function() {
								plus.runtime.quit();
								backPass = false;
							}, function() {
								backPass = false;
							});
						} else if (title == 'mainList') {
							$controlWindow.homeWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'selectItem') {
							$controlWindow.editWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'selectDept') {
							$controlWindow.editWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'selectProvince') {
							$controlWindow.editWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'selectCity') {
							$windowManager.close();
							backPass = false;
						} else if (title == 'evalDetail') {
							$controlWindow.editWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'reqView') {
							$controlWindow.mainWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'reqEdit') {
							$nativeUIManager.confirm('温馨提示', '你确定放弃当前填写内容?', ["是", "否"], function() {
								if ($controlWindow.mainWindowExist()) {
									$controlWindow.mainWindowShow();
								} else {
									$controlWindow.homeWindowShow();
								}
								$windowManager.close();
							}, function() {

							});
							backPass = false;
						} else if (title == 'attList') {
							$controlWindow.reqViewWindowShow();
							$controlWindow.taskViewWindowShow();
							$controlWindow.manageViewWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'reqSend') {
							if ($controlWindow.mainWindowExist()) {
								$controlWindow.mainWindowShow();
							} else {
								$controlWindow.homeWindowShow();
							}
							$windowManager.close();
							backPass = false;
						}else if (title == 'flowList') {
							$controlWindow.editWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'contactsEdit') {
							$controlWindow.editWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'otDetail') {
							$controlWindow.editWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'erDetail') {
							$controlWindow.editWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'listDetail') {
							$controlWindow.editWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'contactsForward') {
							$controlWindow.taskForwardWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'taskView') {
							$controlWindow.mainWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'taskProcess') {
							$controlWindow.taskViewWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'taskForward') {
							$controlWindow.taskViewWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'manageView') {
							$controlWindow.mainWindowShow();
							$windowManager.close();
							backPass = false;
						} else if (title == 'manageProcess') {
							$controlWindow.manageViewWindowShow();
							$windowManager.close();
							backPass = false;
						}else if (title == 'approval') {
							$controlWindow.flowAddWindowShow();
							$windowManager.close();
							backPass = false;
						} else {
							$windowManager.close();
							backPass = false;
						}
					}
				});
			});
		});
	};
	exports.hasNetwork = function() {
		if (!plus.networkinfo) {
			return true;
		}
		var type = plus.networkinfo.getCurrentType(),
			networkInfo = plus.networkinfo;
		return type == networkInfo.CONNECTION_ETHERNET || type == networkInfo.CONNECTION_WIFI || type == networkInfo.CONNECTION_CELL2G || type == networkInfo.CONNECTION_CELL3G || type == networkInfo.CONNECTION_CELL4G;
	};
	exports.getRestApiURL = function() {
		return "http://laapi.mingdao.com";
	};
	exports.switchOS = function(IOS, ANDROID) {
		switch (plus.os.name) {
			case 'Android':
				ANDROID();
				break;
			case 'iOS':
				IOS();
				break;
			default:
				return;
				break;
		}
	};
	exports.touchM = function(elements, moveFunction) {
		if (elements) {
			$(elements).each(function(i, o) {
				$(o).off('touchmove').on('touchmove', function() {
					event.preventDefault();
					var moveTouch = event.touches[0];
					if (typeof moveFunction == 'function') {
						moveFunction(moveTouch, o);
					}
				});
			});
		}
	};
	exports.touchSE = function(elements, startFunction, endFunction) {
		if (elements) {
			$(elements).each(function(i, o) {
				$(o).off('touchstart').on('touchstart', function() {
					event.preventDefault();
					var startTouch = event.touches[0];
					if (typeof startFunction == 'function') {
						startFunction(event, startTouch, o);
					}
					$(o).off('touchend').on('touchend', function() {
						event.preventDefault();
						if (typeof endFunction == 'function') {
							endFunction(event, o);
						}
					});
				});
			});
		}
	};
	exports.touchSME = function(elements, startFunction, moveFunction, endFunction) {
		if (elements) {
			$(elements).each(function(i, o) {
				$(o).off('touchstart').on('touchstart', function() {
					event.preventDefault();
					var startTouch = event.touches[0];
					var startX = startTouch.pageX;
					var startY = startTouch.pageY;
					var endX = startX;
					var endY = startY;
					if (typeof startFunction == 'function') {
						startFunction(startX, startY, endX, endY, event, startTouch, o);
					}
					$(o).off('touchmove').on('touchmove', function() {
						event.preventDefault();
						var moveTouch = event.touches[0];
						endX = moveTouch.pageX;
						endY = moveTouch.pageY;
						if (typeof moveFunction == 'function') {
							moveFunction(startX, startY, endX, endY, event, moveTouch, o);
						}
					});
					$(o).off('touchend').on('touchend', function() {
						event.preventDefault();
						x = endX - startX;
						y = endY - startY;
						if (typeof endFunction == 'function') {
							endFunction(startX, startY, endX, endY, event, o);
						}
						$(o).off('touchmove');
					});
				});
			});
		}
	};
	if (window.plus) {
		window.setTimeout(exports.ready, 200);
	} else {
		document.addEventListener("plusready", function() {
			window.setTimeout(exports.ready, 200);
		}, false);
	}
});
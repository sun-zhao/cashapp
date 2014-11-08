define(function(require, exports, module) {
	var $laCommon = require('core/la_common');
	var $userInfo = require('core/userInfo');
	var $authorize = require('core/authorize');
	var $nativeUIManager = require('manager/nativeUI');
	var $windowManager = require('manager/window');
	var $maskManager = require('manager/mask');
	var clickMenuAction = false;
	getIndex = function() {
		var reqCount = $userInfo.get('reqCount');
		var taskApprove = $userInfo.get('taskApprove');
		var manageExecute = $userInfo.get('manageExecute');
		reqCount = parseInt(reqCount);
		taskApprove = parseInt(taskApprove);
		manageExecute = parseInt(manageExecute);
		var url = '';
		if (taskApprove > reqCount && taskApprove > manageExecute) {
			url = '../task/index.html';
		} else if (manageExecute > reqCount && manageExecute > taskApprove) {
			url = '../manage/index.html';
		} else if (reqCount > taskApprove && reqCount > manageExecute) {
			url = '../req/index.html';
		}else{
			url = '../req/index.html';
		}
		return url;
	};
	exports.menuAction = function(clickMenuCallback) {
		clickMenuAction = clickMenuCallback;
	};
	exports.toggle = function(callback) {
		var sidebar = $('.sidebar');
		if (sidebar) {
			$laCommon.switchOS(function() {
				if ($(sidebar).hasClass('show')) {
					$('#RemoveLeft').hide();
					$(sidebar).removeClass('show').addClass('hide');
					window.setTimeout(function() {
						$(sidebar).hide();
						if (typeof callback == 'function') {
							callback();
						}
					}, 500);
				} else {
					$(sidebar).show();
					$('#RemoveLeft').show();
					$(sidebar).removeClass('hide').addClass('show');
					window.setTimeout(function() {
						if (typeof callback == 'function') {
							callback();
						}
					}, 500);
				}
			}, function() {
				if ($(sidebar).hasClass('showA')) {
					$('#RemoveLeft').hide();
					$(sidebar).removeClass('showA').addClass('hideA');
					window.setTimeout(function() {
						$(sidebar).hide();
						if (typeof callback == 'function') {
							callback();
						}
					}, 500);
				} else {
					$(sidebar).show();
					$('#RemoveLeft').show();
					$(sidebar).removeClass('hideA').addClass('showA');
					window.setTimeout(function() {
						if (typeof callback == 'function') {
							callback();
						}
					}, 500);
				}
			});
		}
	};
	exports.init = function() {
		if ($userInfo.isAuthorize()) {
			$('#userName', '.sidebar').text($userInfo.get('userName'));
			$('#jobName', '.sidebar').text($userInfo.get('jobName'));
			$('#department', '.sidebar').text($userInfo.get('department'));

			var avstar100 = $userInfo.get('avstar100');
			if ($.trim(avstar100).length > 0) {
				if (avstar100.indexOf('default.gif') == -1) {
					$("#userImg").attr('src', avstar100);
				}
			}
		}

		$laCommon.touchSE($('.quit', '.sidebar'), function(event, startTouch, o) {
			$(o).addClass('current');
		}, function(event, o) {
			$(o).removeClass('current');
			exports.toggle(function() {
				$authorize.logout();
			});

		});

		$laCommon.touchSE($('.network', '.sidebar'), function(event, startTouch, o) {
			$(o).addClass('current');
		}, function(event, o) {
			$(o).removeClass('current');
			var account = $userInfo.get('account');
			var password = $userInfo.get('password');
			var oldCompanyId = $userInfo.get('companyId');
			if (account && password && oldCompanyId) {
				$maskManager.showMask();
				$nativeUIManager.watting('请稍后...', false);
				$authorize.validate(account, password, function(jsonData) {
					var companyList = jsonData['companyList'];
					if (companyList) {
						if ($(companyList).size() == 1) {
							var companyId = companyList[0].companyId;
							login(companyId, account, password);
						} else {
							$nativeUIManager.wattingClose();
							$('#companyListUL').empty();
							$(companyList).each(function(i, companyObj) {
								if (companyObj['companyId'] != oldCompanyId) {
									$('#companyListUL').append('<li uid="' + companyObj['companyId'] + '">' + companyObj['companyName'] + '</li>');
								}
							});
							$('#companyListDIV').show();
							$laCommon.touchSE($('li', '#companyListUL'), function(event, startTouch, o) {
								$(o).addClass('current');
							}, function(event, o) {
								var uid = $(o).attr('uid');
								if (uid) {
									$nativeUIManager.watting('请稍后...', false);
									$('#companyListDIV').hide();
									$authorize.login(uid, account, password, function() {
										$windowManager.load(getIndex());
										$maskManager.hideMask();
										$nativeUIManager.wattingClose();
									}, function() {
										$maskManager.hideMask();
										$nativeUIManager.wattingClose();
										$nativeUIManager.alert('提示', '切换失败', 'OK');
									});
								}
								$(o).removeClass('current');
							});

							$laCommon.touchSE($('.quitBtn'), function(event, startTouch, o) {}, function(event, o) {
								$('#companyListDIV').hide();
								$maskManager.hideMask();
							});
						}
					}
				}, function() {
					$nativeUIManager.wattingClose();
					$maskManager.hideMask();
				});
			}
		});

		$laCommon.touchSE($('.mingdao', '.sidebar'), function(event, startTouch, o) {
			$(o).addClass('current');
		}, function(event, o) {
			$(o).removeClass('current');
			$laCommon.switchOS(function() {
				$nativeUIManager.alert('提示', '抱歉，暂时不支持IOS跳转明道APP', '稍后更新');
				//				plus.runtime.launchApplication({
				//					action : "mingdao://"
				//				}, function(e) {
				//					alert("Open system default browser failed: " + e.message);
				//				});
			}, function() {
				plus.runtime.launchApplication({
					pname: "com.mingdao"
				}, function(e) {
					alert("Open system default browser failed: " + e.message);
				});
			});
		});

		$laCommon.touchSE($('li', '#leftMenu'), function(event, startTouch, o) {
			$(o).addClass('current');
		}, function(event, o) {
			$(o).removeClass('current');
			if (typeof clickMenuAction == 'function') {
				var selectMenu = $(o).attr('dir');
				if (selectMenu) {
					clickMenuAction(selectMenu);
				}
			}
		});

		$laCommon.touchM($(document), function(moveTouch, element) {

		});
	};
});
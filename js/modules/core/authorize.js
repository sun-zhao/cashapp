define(function(require, exports, module) {
	var $laCommon = require('core/la_common');
	var $userInfo = require('core/userInfo');
	var $windowManager = require('manager/window');
	var $nativeUIManager = require('manager/nativeUI');
	var $webSQLManager = require('manager/webSQL');
	var $pushManager = require('manager/push');
	var $controlWindow = require('view/controlWindow');
	checkTimeout = function(callback) {
		$.ajax({
			type: 'POST',
			url: $laCommon.getRestApiURL() + '/common/authorize/timeout',
			dataType: 'json',
			data: {
				'laToken': $userInfo.get('laAccessToken')
			},
			success: function(jsonData) {
				if (jsonData) {
					if (jsonData['result'] == '-2') {
						if (typeof callback == 'function') {
							callback();
						}
					}
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				if (typeof callback == 'function') {
					callback();
				}
			}
		});
	}
	exports.login = function(companyId, account, password, successCallback, errorCallback) {
		var pushInfo = $pushManager.pushInfo();
		var deviceToken = pushInfo['token'];
		var clientId = pushInfo['clientid']
		$.ajax({
			type: 'POST',
			url: $laCommon.getRestApiURL() + '/common/authorize',
			dataType: 'json',
			data: {
				companyId: companyId,
				account: account,
				password: password,
				deviceToken: deviceToken,
				clientId: clientId,
				osName: plus.os.name
			},
			success: function(jsonData) {
				if (jsonData) {
					if (jsonData['result'] == '0') {
						$userInfo.putJson(jsonData);
						$userInfo.put('companyId', companyId);
						$userInfo.put('account', account);
						$userInfo.put('password', password);
						$userInfo.put('selectMenu', 'ing');
						$userInfo.put('cancelUpdate', '0');
						var approveHelp = $userInfo.get('approveHelp');
						if (!approveHelp) {
							$userInfo.put('approveHelp','1');
						}
						if (typeof successCallback == 'function') {
							successCallback(jsonData);
						}
					} else {
						if (typeof errorCallback == 'function') {
							errorCallback();
						}
					}
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				if (typeof errorCallback == 'function') {
					errorCallback();
				}
			}
		});
	};
	exports.validate = function(account, password, successCallback, errorCallback) {
		$.ajax({
			type: 'POST',
			url: $laCommon.getRestApiURL() + '/common/authorize/companyList',
			dataType: 'json',
			data: {
				account: account,
				password: password
			},
			success: function(jsonData) {
				if (jsonData) {
					if (jsonData['result'] == '0') {
						if (typeof successCallback == 'function') {
							successCallback(jsonData);
						}
					} else {
						if (typeof errorCallback == 'function') {
							errorCallback();
						}
					}
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				if (typeof errorCallback == 'function') {
					errorCallback();
				}
			}
		});
	};
	exports.logout = function() {
		if ($userInfo.isAuthorize()) {
			$nativeUIManager.watting('正在退出...', false);
			window.setTimeout(function() {
				$.ajax({
					type: 'POST',
					url: $laCommon.getRestApiURL() + '/common/authorize/logout',
					dataType: 'json',
					data: {
						laToken: $.trim(localStorage.getItem("laAccessToken"))
					},
					success: function(jsonData) {
						if (jsonData) {
							if (jsonData['result'] == '0') {
								if (window.plus) {
									$userInfo.removeItem('password');
									$windowManager.load('login.html');
									$nativeUIManager.wattingClose();
								}
							}
						}
					},
					error: function(jsonData) {}
				});
			}, 1000);
		}
	};
	exports.timeout = function() {
		checkTimeout(function() {
			$controlWindow.homeWindowShow();
			$windowManager.getHomeWindow().loadURL('timeout.html');
			$windowManager.closeAll();
		});
	};
});
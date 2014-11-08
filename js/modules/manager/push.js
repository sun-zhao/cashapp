define(function(require, exports, module) {
	var $windowManager = require('manager/window');
	var $nativeUIManager = require('manager/nativeUI');
	var $remind = require('core/remind');
	var $userInfo = require('core/userInfo');
	var $controlWindow = require('view/controlWindow');
	var executeFlag = false;

	putRemind = function(remind) {
		var reqHistoryCount = remind['H'];
		var reqConfirmCount = remind['F'];
		var reqCount = remind['C'];
		var taskApprove = remind['T'];
		var manageExecute = remind['M'];
		if (reqHistoryCount) {
			$userInfo.put('reqHistoryCount', reqHistoryCount);
		}
		if (reqConfirmCount) {
			$userInfo.put('reqConfirmCount', reqConfirmCount);
		}
		if (reqCount) {
			$userInfo.put('reqCount', reqCount);
		}
		if (taskApprove) {
			$userInfo.put('taskApprove', taskApprove);
		}
		if (manageExecute) {
			$userInfo.put('manageExecute', manageExecute);
		}
	};
	bindClick = function() {
		plus.push.addEventListener("click", function(msg) {
			if (!executeFlag) {
				executeFlag = true;
				if (msg.payload) {
					$nativeUIManager.watting('正在进行跳转', false);
					window.setTimeout(function() {
						$nativeUIManager.wattingClose();
						var jsonData = false;
						if (typeof(msg.payload) == "string") {
							jsonData = strToJson(msg.payload);
						} else {
							jsonData = msg.payload['payload'];
							jsonData = strToJson(jsonData);
						}
						var currentWindowId = $windowManager.getCurrentWindowIds();
						var currentWindowURL = $windowManager.getLastWindow().getURL();
						var type = '';
						if (currentWindowId && $controlWindow.mainWindowExist()) {
							if (currentWindowId.indexOf('reqList') != -1) {
								if (currentWindowURL.indexOf('task/index.html') != -1) {
									type = 'REQ';
								} else if (currentWindowURL.indexOf('task/index.html') != -1) {
									type = 'TASK';
								} else if (currentWindowURL.indexOf('task/index.html') != -1) {
									type = 'MANAGE';
								}
							}
						}
						if (jsonData) {
							var action = jsonData['action'];
							var remind = jsonData['remind'];
							if (remind) {
								putRemind(remind);
								$remind.refresh(type);
							}
							if (action) {
								var key = action['K'];
								var value = action['V'];
								var reqId = action['R'];
								if (key && value && reqId) {
									$userInfo.put('pushWindowId', currentWindowId);
									$userInfo.put('pushWindowURL', currentWindowURL);
									if (key == 'R') {
										var url = 'result/reqView.html?reqId=' + value + '&formType=REQ';
										$windowManager.create('reqView', url, false, true, function(show) {
											show();
										});
									} else if (key == 'T') {
										var url = 'result/taskView.html?taskId=' + value + '&reqId=' + reqId + '&formType=TASK';
										$windowManager.create('taskView', url, false, true, function(show) {
											show();
										});
									} else if (key == 'E') {
										var url = 'result/manageView.html?manageId=' + value + '&reqId=' + reqId + '&formType=MANAGE';
										$windowManager.create('manageView', url, false, true, function(show) {
											show();
										});
									}
								}
							}
						}
					}, 1000);
				}
				window.setTimeout(function() {
					executeFlag = false;
					plus.push.remove(msg);
					//plus.push.clear();
				}, 5000);
			}
		}, false);
	};
	bindReceive = function() {
		plus.push.addEventListener("receive", function(msg) {
			if (!executeFlag) {
				executeFlag = true;
				if (msg.payload) {
					var jsonData = false;
					if (typeof(msg.payload) == "string") {
						jsonData = strToJson(msg.payload);
					} else {
						jsonData = msg.payload['payload'];
						if (!jsonData) {
							jsonData = msg.payload;
						}
					}
					if (jsonData) {
						var action = jsonData['action'];
						var remind = jsonData['remind'];
						if (remind) {
							var pushWindowId = $userInfo.get('pushWindowId');
							var pushWindowURL = $userInfo.get('pushWindowURL');
							var type = '';
							if (pushWindowId && $controlWindow.mainWindowExist()) {
								if (pushWindowId.indexOf('reqList') != -1) {
									if (pushWindowURL.indexOf('task/index.html') != -1) {
										type = 'REQ';
									} else if (pushWindowURL.indexOf('task/index.html') != -1) {
										type = 'TASK';
									} else if (pushWindowURL.indexOf('task/index.html') != -1) {
										type = 'MANAGE';
									}
								}
							}
							putRemind(remind);
							$remind.refresh(type);
						}
					}
				}
				window.setTimeout(function() {
					executeFlag = false;
				}, 5000);
			}
		});
	};
	exports.pushInfo = function() {
		return plus.push.getClientInfo();
	};
	exports.connect = function() {
		bindClick();
		bindReceive();
	};
});
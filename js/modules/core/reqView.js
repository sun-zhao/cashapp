define(function(require, exports, module) {
	var $laCommon = require('core/la_common');
	var $windowManager = require('manager/window');
	var $templete = require('core/templete');
	exports.render = function(reqView) {
		var sb = new StringBuilder();
		if (reqView['result'] == '0') {
			$('#title').text(reqView['applyName']);
			$('#userPhoto').attr('src', reqView['avstar100']);
			$('#userName').text(reqView['userName']);
			$('#jobName').text(reqView['jobName']);
			$('#reqNo').text(reqView['reqNo']);
			$('#reqDate').text(reqView['reqDate']);
			var rowContentList = reqView['rowContentList'];
			if (rowContentList && $(rowContentList).size() > 0) {
				var cardFlag = false;
				$(rowContentList).each(function(i, rowContent) {
					if (rowContent['type'] == 'eval') {
						var eval = rowContent['eval'];
						if (eval) {
							if (cardFlag) {
								sb.append(String.formatmodel($templete.getViewRowContentCardEndTemp(), {}));
								cardFlag = false;
							}
							sb.append(String.formatmodel($templete.getViewRowContentCardBeginTemp(), {}));
							sb.append(String.formatmodel($templete.getViewRowContentCardHeadTemp(), {
								'text': eval['label']
							}));
							sb.append(String.formatmodel($templete.getViewEvalULBeginTemp(), {}));
							var evalKeyList = eval['dataList'];
							if (evalKeyList) {
								$(evalKeyList).each(function(evalKeyIndex, evalKeyObj) {
									sb.append(String.formatmodel($templete.getViewEvalKeyBeginTemp(), {
										'evalKey': evalKeyObj['evalKey'],
										'evalScore': evalKeyObj['evalScore'],
									}));
									var evalDetailList = evalKeyObj['detailList'];
									if (evalDetailList) {
										$(evalDetailList).each(function(evalDetailIndex, evalDetailObj) {
											sb.append(String.formatmodel($templete.getViewEvalDetailTemp(), {
												'detailSeq': evalDetailObj['seq'],
												'detailText': evalDetailObj['detail'],
											}));
										});
									}
									sb.append(String.formatmodel($templete.getViewEvalKeyEndTemp(), {}));
								});
							}
							sb.append(String.formatmodel($templete.getViewEvalULEndTemp(), {}));
							sb.append(String.formatmodel($templete.getViewRowContentCardEndTemp(), {}));
						}
					} else if (rowContent['type'] == 'list4') {
						var colListObj = rowContent['colList'];
						if (colListObj) {
							var label = colListObj['label'];
							var names = colListObj['names'];
							var values = colListObj['values'];
							if (values && $(values).size() > 0) {
								if (cardFlag) {
									sb.append(String.formatmodel($templete.getViewRowContentCardEndTemp(), {}));
									cardFlag = false;
								}
								var index = 1;
								$(values).each(function(j, detailObj) {
									var valueList = values[j];
									if (valueList && $(valueList).size() > 0) {
										sb.append(String.formatmodel($templete.getViewRowContentCardBeginTemp(), {}));
										sb.append(String.formatmodel($templete.getViewRowContentCardHeadTemp(), {
											'text': label + ' ' + index
										}));

										if (valueList && $(valueList).size() > 0) {
											$(valueList).each(function(x, valueObj) {
												sb.append(String.formatmodel($templete.getViewRowContentTableTemp(), {
													'label': names[x],
													'value': valueObj,
												}));
											});
										}
										sb.append(String.formatmodel($templete.getViewRowContentCardEndTemp(), {}));
										index += 1;
									}
								});
							}
						}
					} else if (rowContent['type'] == 'list5') {

					} else if (rowContent['type'] == 'detailList') {
						var details = rowContent['details'];
						if (details && $(details).size() > 0) {
							if (cardFlag) {
								sb.append(String.formatmodel($templete.getViewRowContentCardEndTemp(), {}));
								cardFlag = false;
							}
							$(details).each(function(j, detailObj) {
								sb.append(String.formatmodel($templete.getViewRowContentCardBeginTemp(), {}));
								sb.append(String.formatmodel($templete.getViewRowContentCardHeadTemp(), {
									'text': rowContent['label'] + ' ' + detailObj['seq']
								}));
								var detailList = detailObj['detailList'];
								if (detailList && $(detailList).size() > 0) {
									$(detailList).each(function(x, detailListObj) {
										sb.append(String.formatmodel($templete.getViewRowContentTableTemp(), {
											'label': detailListObj['label'],
											'value': detailListObj['value'],
										}));
									});
								}
								sb.append(String.formatmodel($templete.getViewRowContentCardEndTemp(), {}));
							});
						}
					} else {
						if (!cardFlag) {
							sb.append(String.formatmodel($templete.getViewRowContentCardBeginTemp(), {}));
							cardFlag = true;
						}
						sb.append(String.formatmodel($templete.getViewRowContentTableTemp(), {
							'label': rowContent['label'],
							'value': rowContent['value'],
						}));
						if (i == ($(rowContentList).size() - 1)) {
							if (cardFlag) {
								sb.append(String.formatmodel($templete.getViewRowContentCardEndTemp(), {}));
							}
						}
					}
				});
			}
			var reqAttList = reqView['reqAttList'];
			if (reqAttList && $(reqAttList).size() > 0) {
				sb.append(String.formatmodel($templete.getViewRowContentCardBeginTemp(), {}));
				sb.append(String.formatmodel($templete.getViewRowContentAttTableTemp(), {}));
				sb.append(String.formatmodel($templete.getViewRowContentCardEndTemp(), {}));
			}
		}
		return sb.toString();
	};
	exports.bindAttViewEvent = function(reqAttList) {
		if (reqAttList && $(reqAttList).size() > 0) {
			$laCommon.touchSE($('.attTable'), function(event, startTouch, o) {}, function(event, o) {
				$windowManager.create('attList', '../attList.html', false, true, function(show) {
					var viewWindow = $windowManager.getById('attList');
					viewWindow.evalJS('setAttList(' + JSON.stringify(reqAttList) + ')');
					show();
				});
			});
		}
	};
	exports.approveFlow = function(commentsList) {
		if (commentsList && $(commentsList).size() > 0) {
			var sb = new StringBuilder();
			sb.append(String.formatmodel($templete.getViewRowContentCardBeginTemp(), {}));
			$(commentsList).each(function(i, o) {
				if ($.trim(o['content']).length <= 0) {
					sb.append(String.formatmodel($templete.getViewApproveFlowTemp(), {
						'mart5': i == 0 ? '' : 'mart5',
						'userName': o['userName'],
						'created': o['created'],
						'actionDesc': o['actionDesc']
					}));
				} else {
					sb.append(String.formatmodel($templete.getViewApproveFlowContentTemp(), {
						'mart5': i == 0 ? '' : 'mart5',
						'userName': o['userName'],
						'actionDesc': o['actionDesc'],
						'created': o['created'],
						'content': o['content']
					}));
				}
			});
			sb.append(String.formatmodel($templete.getViewRowContentCardEndTemp(), {}));
			$('.flow').append(sb.toString());
		}
	};
});
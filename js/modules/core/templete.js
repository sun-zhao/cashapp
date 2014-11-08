define(function(require, exports, module) {
	exports.getUpdate = function() {
		var update = new StringBuilder();
		update.append('<p class="font14">{title}</p>\n');
		update.append('<p>最新版本：{version}</p>\n');
		update.append('<p>{note}</p>\n');
		return update.toString();
	};

	exports.getMaskBg = function() {
		return '<div class="mask" style="opacity:0.5;display:none;" id="maskBg"></div>';
	};
	exports.getMask = function() {
		var maskWating = new StringBuilder();
		maskWating.append('<div class="maskOver" style="display:none;" id="maskOver"></div>\n');
		return maskWating.toString();
	};
	exports.getMaskWating = function() {
		var maskWating = new StringBuilder();
		maskWating.append('<div class="maskOver maskOverbg" style="display:block;" id="maskOverWatiting">\n');
		maskWating.append('<div class="maskIN aligncenter">\n');
		maskWating.append('<p><img src="../../img/loading.gif" width="81"></p>\n');
		maskWating.append('<p class="color-8 txt">努力加载中...</p>\n');
		maskWating.append('</div>\n');
		maskWating.append('</div>\n');
		return maskWating.toString();
	};
	exports.getReqListTemp = function(removeFlag, tip) {
		var reqListTemp = new StringBuilder();
		reqListTemp.append('<li class="{resultClass}" uid="{id}" finalNo="{finalNo}">\n');
		reqListTemp.append('<div class="clearfix li_in">\n');
		if (tip) {
			reqListTemp.append('<span class="BtnIcon arrow1"></span>\n');
		}
		reqListTemp.append('<span class="AppImg floatleft bg-0{bg}">\n');
		reqListTemp.append('<i class="BtnIcon f-ico{icon}"></i>\n');
		reqListTemp.append('</span>\n');
		reqListTemp.append('<p>\n');
		reqListTemp.append('<span class="AppName font14">{applyName}</span>\n');
		reqListTemp.append('<span class="floatright">{applyDate}</span>\n');
		reqListTemp.append('</p>\n');
		reqListTemp.append('<p>\n');
		reqListTemp.append('<span>{reqNo}</span>\n');
		reqListTemp.append('<span class="floatright">{resultText}</span>\n');
		reqListTemp.append('</p>\n');
		if (removeFlag) {
			reqListTemp.append('<span class="Revoke">撤销</span>\n');
		}
		reqListTemp.append('</div">\n');
		reqListTemp.append('</li>\n');
		return reqListTemp.toString();
	};
	exports.getTaskListTemp = function(tip) {
		var taskListTemp = new StringBuilder();
		taskListTemp.append('<li class="{resultClass}" uid="{id}" reqId="{reqId}" finalNo="{finalNo}">\n');
		taskListTemp.append('<div class="clearfix li_in">\n');
		if (tip) {
			taskListTemp.append('<span class="BtnIcon arrow1"></span>\n');
		}
		taskListTemp.append('<span class="AppImg floatleft bg-0{bg}">\n');
		taskListTemp.append('<i class="BtnIcon f-ico{icon}"></i>\n');
		taskListTemp.append('</span>\n');
		taskListTemp.append('<p>\n');
		taskListTemp.append('<span class="AppName font14">{userName} 发起的{applyName}</span>\n');
		taskListTemp.append('<span class="floatright">{applyDate}</span>\n');
		taskListTemp.append('</p>\n');
		taskListTemp.append('<p>\n');
		taskListTemp.append('<span>{reqNo}</span>\n');
		taskListTemp.append('<span class="floatright">{resultText}</span>\n');
		taskListTemp.append('</p>\n');
		taskListTemp.append('</div">\n');
		taskListTemp.append('</li>\n');
		return taskListTemp.toString();
	};
	exports.getManageListTemp = function(tip) {
		var manageListTemp = new StringBuilder();
		manageListTemp.append('<li class="{resultClass}" uid="{id}" reqId="{reqId}" finalNo="{finalNo}">\n');
		manageListTemp.append('<div class="clearfix li_in">\n');
		if (tip) {
			manageListTemp.append('<span class="BtnIcon arrow1"></span>\n');
		}
		manageListTemp.append('<span class="AppImg floatleft bg-0{bg}">\n');
		manageListTemp.append('<i class="BtnIcon f-ico{icon}"></i>\n');
		manageListTemp.append('</span>\n');
		manageListTemp.append('<p>\n');
		manageListTemp.append('<span class="AppName font14">{userName} 发起的{applyName}</span>\n');
		manageListTemp.append('<span class="floatright">{applyDate}</span>\n');
		manageListTemp.append('</p>\n');
		manageListTemp.append('<p>\n');
		manageListTemp.append('<span>{reqNo}</span>\n');
		manageListTemp.append('<span class="floatright">{resultText}</span>\n');
		manageListTemp.append('</p>\n');
		manageListTemp.append('</div">\n');
		manageListTemp.append('</li>\n');
		return manageListTemp.toString();
	};
	exports.getViewApproveFlowTemp = function() {
		var approveFlowTemp = new StringBuilder();
		approveFlowTemp.append('<table class="{mart5}">\n');
		approveFlowTemp.append('<tbody>\n');
		approveFlowTemp.append('<tr>\n');
		approveFlowTemp.append('<td width="25%">{userName}</td>\n');
		approveFlowTemp.append('<td width="25%">{actionDesc}</td>\n');
		approveFlowTemp.append('<td width="40%">{created}</td>\n');
		approveFlowTemp.append('</tr>\n');
		approveFlowTemp.append('</tbody>\n');
		approveFlowTemp.append('</table>\n');
		return approveFlowTemp.toString();
	};
	exports.getViewApproveFlowContentTemp = function() {
		var approveFlowTemp = new StringBuilder();
		approveFlowTemp.append('<table class="{mart5}">\n');
		approveFlowTemp.append('<tbody>\n');
		approveFlowTemp.append('<tr>\n');
		approveFlowTemp.append('<td width="25%">{userName}</td>\n');
		approveFlowTemp.append('<td width="25%">{actionDesc}</td>\n');
		approveFlowTemp.append('<td width="40%">{created}</td>\n');
		approveFlowTemp.append('</tr>\n');
		approveFlowTemp.append('<tr>\n');
		approveFlowTemp.append('<td colspan="3">\n');
		approveFlowTemp.append('<div class="message">\n');
		approveFlowTemp.append('<i class="Icon ico-arrow"></i>\n');
		approveFlowTemp.append('<p>{content}</p>\n');
		approveFlowTemp.append('</div>\n');
		approveFlowTemp.append('</td>\n');
		approveFlowTemp.append('</tr>\n');
		approveFlowTemp.append('</tbody>\n');
		approveFlowTemp.append('</table>\n');
		return approveFlowTemp.toString();
	};
	exports.getViewRowContentTableTemp = function() {
		var rowContentTemp = new StringBuilder();
		rowContentTemp.append('<table>\n');
		rowContentTemp.append('<tr>\n');
		rowContentTemp.append('<th>{label} :</th>\n');
		rowContentTemp.append('<td>{value}</td>\n');
		rowContentTemp.append('</tr>\n');
		rowContentTemp.append('</table>\n');
		return rowContentTemp.toString();
	};
	exports.getViewRowContentAttTableTemp = function() {
		var rowContentAttTemp = new StringBuilder();
		rowContentAttTemp.append('<table class="attTable">\n');
		rowContentAttTemp.append('<tr>\n');
		rowContentAttTemp.append('<th>附件 :</th>\n');
		rowContentAttTemp.append('<td><span class="color-cb"><i class="BtnIcon Icon-neex"></i>点击查看</span></td>\n');
		rowContentAttTemp.append('</tr>\n');
		rowContentAttTemp.append('</table>\n');
		return rowContentAttTemp.toString();
	};
	exports.getViewRowContentCardBeginTemp = function() {
		return '<section class="form">\n';
	};
	exports.getViewRowContentCardHeadTemp = function() {
		return '<header class="nopadding clearfix"><span class="nopadding color-6">{text}</span></header>\n';
	};
	exports.getViewRowContentCardEndTemp = function() {
		return '</section>\n';
	};
	exports.getApplyListTableBeginTemp = function() {
		return '<table class="floatleft applyTable" style="width:{width}px;">\n';
	};
	exports.getApplyListTableEndTemp = function() {
		return '</table>\n';
	};
	exports.getApplyListDDTemp = function() {
		return '<dd dir="{index}"></dd>\n';
	};
	exports.getApplyListTemp = function() {
		var applyListTemp = new StringBuilder();
		applyListTemp.append('<td uid="{id}" dir="{applyType}" lang="{finalNo}"><span class="bg-0{bg}"><i class="BtnIcon f-ico{icon}"></i></span>{applyName}</td>\n');
		return applyListTemp.toString();
	};
	exports.getViewEvalULBeginTemp = function() {
		return '<ul class="editList process score">\n';
	};
	exports.getViewEvalDetailTemp = function() {
		return '<li>{detailSeq}、{detailText}</li>\n';
	};
	exports.getViewEvalKeyBeginTemp = function() {
		var viewEvalKeyTemp = new StringBuilder();
		viewEvalKeyTemp.append('<li class="choose">\n');
		viewEvalKeyTemp.append('<div class="LiOut mart5">\n');
		viewEvalKeyTemp.append('<div class="Inmask clearfix">\n');
		viewEvalKeyTemp.append('<span class="floatleft color-6">{evalKey}</span>\n');
		viewEvalKeyTemp.append('<span><em>{evalScore} 分</em></span>\n');
		viewEvalKeyTemp.append('</div>\n');
		viewEvalKeyTemp.append('<ul>\n');
		return viewEvalKeyTemp.toString();
	};
	exports.getViewEvalKeyEndTemp = function() {
		var viewEvalKeyTemp = new StringBuilder();
		viewEvalKeyTemp.append('</ul>\n');
		viewEvalKeyTemp.append('</div>\n');
		viewEvalKeyTemp.append('</li>\n');
		return viewEvalKeyTemp.toString();
	};
	exports.getViewEvalULEndTemp = function() {
		return '</ul>\n';
	};
	exports.getSelectItemTemp = function(index) {
		var selectItemTemp = new StringBuilder();
		if (index == 0) {
			selectItemTemp.append('<li class="choose mart5 chooseSelect" uid="{key}" type="{type}">\n');
		} else {
			selectItemTemp.append('<li class="choose chooseSelect" uid="{key}" type="{type}">\n');
		}
		selectItemTemp.append('<div class="LiOut">\n');
		selectItemTemp.append('<div class="Userprocess clearfix">\n');
		selectItemTemp.append('<em>{label}</em>\n');
		selectItemTemp.append('</div>\n');
		selectItemTemp.append('</div>\n');
		selectItemTemp.append('</li>\n');
		return selectItemTemp.toString();
	};
	exports.getAttListTemp = function() {
		var attListTemp = new StringBuilder();
		attListTemp.append('<li class="choose" dir="{downloadUrl}" lang="{postfix}" uid="{oldName}.{postfix}">\n');
		attListTemp.append('<div class="LiOut">\n');
		attListTemp.append('<div class="Userprocess txt_hidden clearfix">\n');
		attListTemp.append('<span class="floatleft"><img src="../img/fu_{viewPostfix}.gif"></span>\n');
		attListTemp.append('<span>{oldName}.{postfix} ({attSize})</span>\n');
		attListTemp.append('<span class="floatright">{userName}</span>\n');
		attListTemp.append('</div>\n');
		attListTemp.append('</div>\n');
		attListTemp.append('</li>\n');
		return attListTemp.toString();
	};
	exports.getFormCardBeginTemp = function() {
		return '<ul class="editList p-top10">\n';
	};
	exports.getFormCardEndTemp = function() {
		return '</ul>\n';
	};
	exports.getFormSelectTemp = function() {
		var formSelectTemp = new StringBuilder();
		formSelectTemp.append('<li class="choose" uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formSelectTemp.append('<div class="LiOut">\n');
		formSelectTemp.append('<input type="hidden" id="{uid}{type}" name="{uid}{type}"/>\n');
		formSelectTemp.append('<div class="Inmask clearfix">\n');
		formSelectTemp.append('<span class="floatleft">{label}</span>\n');
		formSelectTemp.append('<span>&nbsp;</span>\n');
		formSelectTemp.append('</div>\n');
		formSelectTemp.append('<div class="Inmask Txterror">\n');
		formSelectTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formSelectTemp.append('</div>\n');
		formSelectTemp.append('</div>\n');
		formSelectTemp.append('</li>\n');
		return formSelectTemp.toString();
	};
	exports.getFormDateTemp = function() {
		var formDateTemp = new StringBuilder();
		formDateTemp.append('<li class="choose" uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formDateTemp.append('<div class="LiOut">\n');
		formDateTemp.append('<input type="hidden" id="{uid}{type}" name="{uid}{type}"/>\n');
		formDateTemp.append('<div class="Inmask clearfix">\n');
		formDateTemp.append('<span class="floatleft">{label}</span>\n');
		formDateTemp.append('<span>&nbsp;</span>\n');
		formDateTemp.append('</div>\n');
		formDateTemp.append('<div class="Inmask Txterror">\n');
		formDateTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formDateTemp.append('</div>\n');
		formDateTemp.append('</div>\n');
		formDateTemp.append('</li>\n');
		return formDateTemp.toString();
	};
	exports.getFormTimeTemp = function() {
		var formTimeTemp = new StringBuilder();
		formTimeTemp.append('<li class="choose" uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formTimeTemp.append('<div class="LiOut">\n');
		formTimeTemp.append('<input type="hidden" id="{uid}{type}" name="{uid}{type}"/>\n');
		formTimeTemp.append('<div class="Inmask clearfix">\n');
		formTimeTemp.append('<span class="floatleft">{label}</span>\n');
		formTimeTemp.append('<span>&nbsp;</span>\n');
		formTimeTemp.append('</div>\n');
		formTimeTemp.append('<div class="Inmask Txterror">\n');
		formTimeTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formTimeTemp.append('</div>\n');
		formTimeTemp.append('</div>\n');
		formTimeTemp.append('</li>\n');
		return formTimeTemp.toString();
	};
	exports.getFormSelectDeptTemp = function() {
		var formSelectDeptTemp = new StringBuilder();
		formSelectDeptTemp.append('<li class="choose" uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formSelectDeptTemp.append('<div class="LiOut">\n');
		formSelectDeptTemp.append('<input type="hidden" id="{uid}{type}" name="{uid}{type}"/>\n');
		formSelectDeptTemp.append('<div class="Inmask clearfix">\n');
		formSelectDeptTemp.append('<span class="floatleft">{label}</span>\n');
		formSelectDeptTemp.append('<span>&nbsp;</span>\n');
		formSelectDeptTemp.append('</div>\n');
		formSelectDeptTemp.append('<div class="Inmask Txterror">\n');
		formSelectDeptTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formSelectDeptTemp.append('</div>\n');
		formSelectDeptTemp.append('</div>\n');
		formSelectDeptTemp.append('</li>\n');
		return formSelectDeptTemp.toString();
	};
	exports.getFormSelectProvinceTemp = function() {
		var formSelectProvinceTemp = new StringBuilder();
		formSelectProvinceTemp.append('<li class="choose" uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formSelectProvinceTemp.append('<div class="LiOut">\n');
		formSelectProvinceTemp.append('<input type="hidden" id="{uid}{type}" name="{uid}{type}"/>\n');
		formSelectProvinceTemp.append('<div class="Inmask clearfix">\n');
		formSelectProvinceTemp.append('<span class="floatleft">{label}</span>\n');
		formSelectProvinceTemp.append('<span>&nbsp;</span>\n');
		formSelectProvinceTemp.append('</div>\n');
		formSelectProvinceTemp.append('<div class="Inmask Txterror">\n');
		formSelectProvinceTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formSelectProvinceTemp.append('</div>\n');
		formSelectProvinceTemp.append('</div>\n');
		formSelectProvinceTemp.append('</li>\n');
		return formSelectProvinceTemp.toString();
	};
	exports.getFormSelectProvinceCityTemp = function() {
		var formSelectProvinceCityTemp = new StringBuilder();
		formSelectProvinceCityTemp.append('<li class="choose" uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formSelectProvinceCityTemp.append('<div class="LiOut">\n');
		formSelectProvinceCityTemp.append('<input type="hidden" id="{uid}{type}" name="{uid}{type}"/>\n');
		formSelectProvinceCityTemp.append('<div class="Inmask clearfix">\n');
		formSelectProvinceCityTemp.append('<span class="floatleft">{label}</span>\n');
		formSelectProvinceCityTemp.append('<span>&nbsp;</span>\n');
		formSelectProvinceCityTemp.append('</div>\n');
		formSelectProvinceCityTemp.append('<div class="Inmask Txterror">\n');
		formSelectProvinceCityTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formSelectProvinceCityTemp.append('</div>\n');
		formSelectProvinceCityTemp.append('</div>\n');
		formSelectProvinceCityTemp.append('</li>\n');
		return formSelectProvinceCityTemp.toString();
	};
	exports.getFormSelectUserTemp = function() {
		var formSelectDeptTemp = new StringBuilder();
		formSelectDeptTemp.append('<li class="choose" uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formSelectDeptTemp.append('<div class="LiOut">\n');
		formSelectDeptTemp.append('<input type="hidden" id="{uid}{type}" name="{uid}{type}"/>\n');
		formSelectDeptTemp.append('<div class="Inmask clearfix">\n');
		formSelectDeptTemp.append('<span class="floatleft">{label}</span>\n');
		formSelectDeptTemp.append('<span>&nbsp;</span>\n');
		formSelectDeptTemp.append('</div>\n');
		formSelectDeptTemp.append('<div class="Inmask Txterror">\n');
		formSelectDeptTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formSelectDeptTemp.append('</div>\n');
		formSelectDeptTemp.append('</div>\n');
		formSelectDeptTemp.append('</li>\n');
		return formSelectDeptTemp.toString();
	};
	exports.getFormDateIntervalTemp = function() {
		var formDateIntervalTemp = new StringBuilder();
		formDateIntervalTemp.append('<li class="choose" uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formDateIntervalTemp.append('<div class="LiOut">\n');
		formDateIntervalTemp.append('<input type="hidden" id="{uid}{type}" name="{uid}{type}"/>\n');
		formDateIntervalTemp.append('<div class="Inmask clearfix">\n');
		formDateIntervalTemp.append('<span class="floatleft">{label}</span>\n');
		formDateIntervalTemp.append('<span>&nbsp;</span>\n');
		formDateIntervalTemp.append('</div>\n');
		formDateIntervalTemp.append('<div class="Inmask Txterror">\n');
		formDateIntervalTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formDateIntervalTemp.append('</div>\n');
		formDateIntervalTemp.append('</div>\n');
		formDateIntervalTemp.append('</li>\n');
		return formDateIntervalTemp.toString();
	};
	exports.getFormInputTemp = function() {
		var formInputTemp = new StringBuilder();
		formInputTemp.append('<li uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formInputTemp.append('<div class="LiOut">\n');
		formInputTemp.append('<input type="text" id="{uid}{type}" name="{uid}{type}"/>\n');
		formInputTemp.append('<div class="Inmask clearfix">\n');
		formInputTemp.append('<span class="floatleft">{label}</span>\n');
		formInputTemp.append('<span>{validateMsg}</span>\n');
		formInputTemp.append('</div>\n');
		formInputTemp.append('<div class="Inmask Txterror">\n');
		formInputTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formInputTemp.append('</div>\n');
		formInputTemp.append('</div>\n');
		formInputTemp.append('</li>\n');
		return formInputTemp.toString();
	};
	exports.getFormNumberTemp = function() {
		var formInputTemp = new StringBuilder();
		formInputTemp.append('<li uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formInputTemp.append('<div class="LiOut">\n');
		formInputTemp.append('<input type="number" id="{uid}{type}" name="{uid}{type}"/>\n');
		formInputTemp.append('<div class="Inmask clearfix">\n');
		formInputTemp.append('<span class="floatleft">{label}</span>\n');
		formInputTemp.append('<span>{validateMsg}</span>\n');
		formInputTemp.append('</div>\n');
		formInputTemp.append('<div class="Inmask Txterror">\n');
		formInputTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formInputTemp.append('</div>\n');
		formInputTemp.append('</div>\n');
		formInputTemp.append('</li>\n');
		return formInputTemp.toString();
	};
	exports.getFormTextAreaTemp = function() {
		var formTextAreaTemp = new StringBuilder();
		formTextAreaTemp.append('<li class="mart10 autoHeight" uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formTextAreaTemp.append('<div class="LiOut">\n');
		formTextAreaTemp.append('<textarea class="article" id="{uid}{type}" name="{uid}{type}"></textarea>\n');
		formTextAreaTemp.append('<div class="Inmask clearfix">\n');
		formTextAreaTemp.append('<span class="floatleft color-c">{label}</span>\n');
		formTextAreaTemp.append('<span>{validateMsg}</span>\n');
		formTextAreaTemp.append('</div>\n');
		formTextAreaTemp.append('<div class="Inmask Txterror">\n');
		formTextAreaTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formTextAreaTemp.append('</div>\n');
		formTextAreaTemp.append('</div>\n');
		formTextAreaTemp.append('</li>\n');
		return formTextAreaTemp.toString();
	};
	exports.getFormCheckBoxBeginTemp = function() {
		var formCheckBoxTemp = new StringBuilder();
		formCheckBoxTemp.append('<ul class="editList process processlist doubleCheck p-top10">\n');
		formCheckBoxTemp.append('<li class="ck" uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formCheckBoxTemp.append('<p class="color-8 marl10">{label}<span class="floatright marr10 error errorMsg">&nbsp;</span></p>\n');
		formCheckBoxTemp.append('<input type="hidden" id="{uid}{type}" name="{uid}{type}"/>\n');
		formCheckBoxTemp.append('</li>\n');
		return formCheckBoxTemp.toString();
	};
	exports.getFormCheckBoxEndTemp = function() {
		return '</ul>\n';
	};
	exports.getFormCheckBoxItemTemp = function(index) {
		var formCheckBoxItemTemp = new StringBuilder();
		if (index == 0) {
			formCheckBoxItemTemp.append('<li class="choose mart5" uid="{key}" lang="{type}" blank="{blankYn}" regData="{regData}" parent="{uid}">\n');
		} else {
			formCheckBoxItemTemp.append('<li class="choose" uid="{key}" lang="{type}" blank="{blankYn}" regData="{regData}" parent="{uid}">\n');
		}
		formCheckBoxItemTemp.append('<div class="LiOut">\n');
		formCheckBoxItemTemp.append('<div class="Userprocess clearfix">\n');
		formCheckBoxItemTemp.append('<em>{value}</em>\n');
		formCheckBoxItemTemp.append('</div>\n');
		formCheckBoxItemTemp.append('<span class="Check"></span>\n');
		formCheckBoxItemTemp.append('</div>\n');
		formCheckBoxItemTemp.append('</li>\n');
		return formCheckBoxItemTemp.toString();
	};
	exports.getFormRadioBeginTemp = function() {
		var formRadioTemp = new StringBuilder();
		formRadioTemp.append('<ul class="editList process processlist p-top10">\n');
		formRadioTemp.append('<li class="rd" uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		formRadioTemp.append('<p class="color-8 marl10">{label}<span class="floatright marr10 error errorMsg" >&nbsp;</span></p>\n');
		formRadioTemp.append('<input type="hidden" id="{uid}{type}" name="{uid}{type}"/>\n');
		formRadioTemp.append('</li>\n');
		return formRadioTemp.toString();
	};
	exports.getFormRadioEndTemp = function() {
		return '</ul>\n';
	};
	exports.getFormRadioItemTemp = function(index) {
		var formRadioItemTemp = new StringBuilder();
		if (index == 0) {
			formRadioItemTemp.append('<li class="choose mart5" uid="{key}" lang="{type}" blank="{blankYn}" regData="{regData}" parent="{uid}">\n');
		} else {
			formRadioItemTemp.append('<li class="choose" uid="{key}" lang="{type}" blank="{blankYn}" regData="{regData}" parent="{uid}">\n');
		}
		formRadioItemTemp.append('<div class="LiOut">\n');
		formRadioItemTemp.append('<div class="Userprocess clearfix">\n');
		formRadioItemTemp.append('<em>{value}</em>\n');
		formRadioItemTemp.append('</div>\n');
		formRadioItemTemp.append('</div>\n');
		formRadioItemTemp.append('</li>\n');
		return formRadioItemTemp.toString();
	};
	exports.getFormListDetailTemp = function(index) {
		var formDetailTemp = new StringBuilder();
		formDetailTemp.append('<li class="choose hsaRevoke {type}ListDetailLi" uid="{detailID}" key="{key}" type="{type}" label="{label}">\n');
		if (index == '1') {
			formDetailTemp.append('<p class="color-8 alignleft mart5 marl10">{detailText}</p>\n');
		}
		formDetailTemp.append('<div class="LiOut" >\n');
		formDetailTemp.append('<div class="Userprocess txt_hidden clearfix">\n');
		formDetailTemp.append('<span class="color-6">{text}</span>\n');
		formDetailTemp.append('</div>\n');
		formDetailTemp.append('</div>\n');
		formDetailTemp.append('<span class="Revoke">{delText}</span>\n');
		formDetailTemp.append('</li>\n');
		return formDetailTemp.toString();
	};
	exports.getFormDetailTemp = function(index) {
		var formDetailTemp = new StringBuilder();
		formDetailTemp.append('<li class="choose hsaRevoke detailLI" uid="{detailID}">\n');
		if (index == '1') {
			formDetailTemp.append('<p class="color-8 alignleft mart5 marl10">{detailText}</p>\n');
		}
		formDetailTemp.append('<div class="LiOut">\n');
		formDetailTemp.append('<div class="Userprocess txt_hidden clearfix">\n');
		formDetailTemp.append('<span class="color-6">{text}</span>\n');
		formDetailTemp.append('</div>\n');
		formDetailTemp.append('</div>\n');
		formDetailTemp.append('<span class="Revoke">{delText}</span>\n');
		formDetailTemp.append('</li>\n');
		return formDetailTemp.toString();
	};
	exports.getFormListAddTemp = function() {
		var formListAddTemp = new StringBuilder();
		formListAddTemp.append('<li class="mart20 createList" id="add{uid}" uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}" label="{label}">\n');
		formListAddTemp.append('<div class="LiOut aligncenter font14 addstep"><span class="font18">+</span> 添加{label}</div>\n');
		formListAddTemp.append('</li>\n');
		return formListAddTemp.toString();
	};
	exports.getFormEvalKeyTemp = function(index) {
		var formEvalKeyTemp = new StringBuilder();
		formEvalKeyTemp.append('<li class="choose evalKey" uid="{uid}{type}_{keyId}" controlId="{controlId}" keyId="{keyId}" lang="{type}" blank="{blankYn}" regData="{regData}">\n');
		if (index == 0) {
			formEvalKeyTemp.append('<p class="color-8 alignleft mart5 marl10">{detailText}</p>\n');
		}
		formEvalKeyTemp.append('<div class="LiOut">\n');
		formEvalKeyTemp.append('<input type="hidden" id="{uid}{type}_{keyId}" name="{uid}{type}_{keyId}"/>\n');
		formEvalKeyTemp.append('<div class="Inmask clearfix">\n');
		formEvalKeyTemp.append('<span class="floatleft">{keySeq}、{keyName}</span>\n');
		formEvalKeyTemp.append('<span>&nbsp;</span>\n');
		formEvalKeyTemp.append('</div>\n');
		formEvalKeyTemp.append('<div class="Inmask Txterror">\n');
		formEvalKeyTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formEvalKeyTemp.append('</div>\n');
		formEvalKeyTemp.append('</div>\n');
		formEvalKeyTemp.append('</li>\n');
		return formEvalKeyTemp.toString();
	};
	exports.getFormEvalDetailTemp = function() {
		return '<li>{detailSeq}、{detailText}</li>';
	};
	exports.getFormEvalScoreTemp = function() {
		var evalScoreTemp = new StringBuilder();
		evalScoreTemp.append('<li class="choose" uid="{value}" score="{score}">\n');
		evalScoreTemp.append('<div class="LiOut">\n');
		evalScoreTemp.append('<div class="Userprocess clearfix">\n');
		evalScoreTemp.append('<em>{label}</em>\n');
		evalScoreTemp.append('</div>\n');
		evalScoreTemp.append('</div>\n');
		evalScoreTemp.append('</li>\n');
		return evalScoreTemp.toString();
	};
	exports.getFormReadonlyTemp = function() {
		var formInputTemp = new StringBuilder();
		formInputTemp.append('<li uid="{uid}" lang="{type}" blank="{blankYn}" regData="{regData}" amountUID="{amountUID}">\n');
		formInputTemp.append('<div class="LiOut">\n');
		formInputTemp.append('<input type="text" id="{uid}{type}" name="{uid}{type}" readonly="readonly"/>\n');
		formInputTemp.append('<div class="Inmask clearfix">\n');
		formInputTemp.append('<span class="floatleft">{label}</span>\n');
		formInputTemp.append('<span>{validateMsg}</span>\n');
		formInputTemp.append('</div>\n');
		formInputTemp.append('<div class="Inmask Txterror">\n');
		formInputTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formInputTemp.append('</div>\n');
		formInputTemp.append('</div>\n');
		formInputTemp.append('</li>\n');
		return formInputTemp.toString();
	};
	exports.getContactsKeyWordTemp = function() {
		return '<li class="word-title" uid="{keyWord}" dir="{keyWord}"><p class="color-6">{keyWord}</p></li>\n';
	};
	exports.getContactsUserTemp = function() {
		var contactsUserTemp = new StringBuilder();
		contactsUserTemp.append('<li class="clearfix user" uid="{userId}" dir="{keyWord}" lang="{name}" dept="{dept}" job="{job}" approvalType="{approvalType}">\n');
		contactsUserTemp.append('<span class="block floatleft"><img src="{pic}"></span>\n');
		contactsUserTemp.append('<div class="floatleft">\n');
		contactsUserTemp.append('<p>{name}</p>\n');
		contactsUserTemp.append('<p><span>{dept}</span><span>{job}</span></p>\n');
		contactsUserTemp.append('</div>\n');
		contactsUserTemp.append('</li>\n');
		return contactsUserTemp.toString();
	};
	exports.getFlowNodeTemp = function() {
		var flowNodeTemp = new StringBuilder();
		flowNodeTemp.append('<li class="choose" nodeSeq="{nodeSeq}" nodeType="{nodeType}" approveType="{approveType}" approveId="{approveId}">\n');
		flowNodeTemp.append('<div class="LiOut nobgimg {mart5}">\n');
		flowNodeTemp.append('<div class="Userprocess txt_hidden clearfix">\n');
		flowNodeTemp.append('<span class="marl10">{text}：</span>\n');
		flowNodeTemp.append('<span class="color-6">{name}</span>\n');
		flowNodeTemp.append('</div>\n');
		flowNodeTemp.append('</div>\n');
		flowNodeTemp.append('</li>\n');
		return flowNodeTemp.toString();
	};
	exports.getAddFlowTemp = function() {
		return '<li class="mart10"><div class="LiOut mart5 aligncenter font14 addstep"><span class="font18">+</span> {text}</div></li>	\n';
	};
	exports.getAddFlowUserTemp = function() {
		var formSelectDeptTemp = new StringBuilder();
		formSelectDeptTemp.append('<li class="choose hsaRevoke approvalNode mart15" nodeSeq="{nodeSeq}" lang="varchar" >\n');
		formSelectDeptTemp.append('<div class="LiOut LiOutApproval">\n');
		formSelectDeptTemp.append('<input type="hidden" id="approveType{nodeSeq}" name="approveType{nodeSeq}"/>\n');
		formSelectDeptTemp.append('<input type="hidden" id="approve{nodeSeq}" name="approve{nodeSeq}"/>\n');
		formSelectDeptTemp.append('<div class="Inmask clearfix">\n');
		formSelectDeptTemp.append('<span class="floatleft">{label}</span>\n');
		formSelectDeptTemp.append('<span>&nbsp;</span>\n');
		formSelectDeptTemp.append('</div>\n');
		formSelectDeptTemp.append('<div class="Inmask Txterror">\n');
		formSelectDeptTemp.append('<span class="errorMsg">&nbsp;</span>\n');
		formSelectDeptTemp.append('</div>\n');
		formSelectDeptTemp.append('</div>\n');
		formSelectDeptTemp.append('<span class="Revoke">{delText}</span>\n');
		formSelectDeptTemp.append('</li>\n');
		return formSelectDeptTemp.toString();
	};
});
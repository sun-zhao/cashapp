define(function(require, exports, module) {
	var $laCommon = require('core/la_common');
	var $nativeUIManager = require('manager/nativeUI');
	var $userInfo = require('core/userInfo');
	var $maskManager = require('manager/mask');
	var $templete = require('core/templete');
	var checkInterval = 1000 * 60 * 60 * 24;
	checkUpdateData = function(j) {
		var curVer = plus.runtime.version;
		var inf = j[plus.os.name];
		if (inf) {
			var srvVer = inf['version'];
			if (compareVersion(curVer, srvVer)) {
				$('#updateContent', '#updateTip').append(String.formatmodel($templete.getUpdate(), inf));
				$('#updateTip').show();
				$maskManager.showMaskBg();

				$laCommon.touchSE($('#cancelUpdate'), function(event, startTouch, o) {
					$(o).addClass('current');
				}, function(event, o) {
					$(o).removeClass('current');
					$userInfo.put('cancelUpdate', '1');
					$('#updateTip').hide();
					$maskManager.hideMaskBg();
				});

				$laCommon.touchSE($('#nowUpdate'), function(event, startTouch, o) {
					$(o).addClass('current');
				}, function(event, o) {
					$(o).removeClass('current');
					$('#updateTip').hide();
					$maskManager.hideMaskBg();
					$laCommon.switchOS(function(){
						plus.runtime.openURL(inf['url'], function() {
							$nativeUIManager.alert('更新失败', '请访问http://www.pgyer.com/mingdaola最新版本下载', '我知道了', false);
						});
					},function(){
						plus.runtime.openURL(inf['url'], function() {
							$nativeUIManager.alert('更新失败', '请访问http://www.pgyer.com/mingdaola_ad最新版本下载', '我知道了', false);
						});
					});
				});
			}
		}
	};
	compareVersion = function(ov, nv) {
		if (!ov || !nv || ov == "" || nv == "") {
			return false;
		}
		var b = false, ova = ov.split(".", 4), nva = nv.split(".", 4);
		for (var i = 0; i < ova.length && i < nva.length; i++) {
			var so = ova[i], no = parseInt(so), sn = nva[i], nn = parseInt(sn);
			if (nn > no || sn.length > so.length) {
				return true;
			} else if (nn < no) {
				return false;
			}
		}
		if (nva.length > ova.length && 0 == nv.indexOf(ov)) {
			return true;
		}
	};

	exports.execute = function() {
		var cancelUpdate = $userInfo.get('cancelUpdate');
		if (cancelUpdate) {
			if(cancelUpdate=='1'){
				return false;
			}
		}
		
		$.ajax({
			type : 'POST',
			url : $laCommon.getRestApiURL() + '/common/common/update',
			dataType : 'json',
			data : {
				'laToken' : $userInfo.get('laAccessToken')
			},
			success : function(jsonData) {
				if (jsonData) {
					if (jsonData['result'] == '0') {
						var update = jsonData['update'];
						if (update) {
							checkUpdateData(update);
						}
					}
				}
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
			}
		});
	};
});

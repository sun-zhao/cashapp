define(function(require, exports, module) {
	var $templete = require('core/templete');
	exports.showMaskBg = function() {
		if($('#maskBg').size()==0){
			$('body').append($templete.getMaskBg());
		}
		$('#maskBg').show();
	};
	exports.hideMaskBg = function() {
		$('#maskBg').hide();
	};
	exports.showMask = function() {
		if($('#maskOver').size()==0){
			$('body').append($templete.getMask());
		}
		$('#maskOver').show();
	};
	exports.hideMask = function() {
		$('#maskOver').hide();
	};
	exports.createMaskWatiting = function(msg) {
		if($('#maskOverWatiting').size()==0){
			$('body').append($templete.getMaskWating());
		}
	};
	exports.showMaskWatiting = function(msg) {
		if(msg){
			$('.txt','#maskOverWatiting').text(msg);
		}
		$('#maskOverWatiting').show();
	};
	exports.hideMaskWatiting = function() {
		$('#maskOverWatiting').hide();
	};
});

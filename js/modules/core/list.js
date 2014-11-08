define(function(require, exports, module) {
	var requestURL = false, requestParams = {};
	var bindDataCallback = false, appendBindDataCallback = false, failCallback = false;
	exports.url = function(url) {
		requestURL = url;
	};
	exports.params = function(params) {
		if (params) {
			requestParams = params;
		}
		return requestParams;
	};
	exports.bind = function(bindData) {
		if (bindData) {
			bindDataCallback = bindData;
		}
	};
	exports.fail = function(fail) {
		if (fail) {
			failCallback = fail;
		}
	}
	exports.appendBind = function(appendBindData) {
		if (appendBindData) {
			appendBindDataCallback = appendBindData;
		}
	};
	exports.load = function() {
		if (requestURL) {
			$.ajax({
				type : 'POST',
				url : requestURL,
				dataType : 'json',
				data : requestParams,
				success : function(jsonData) {
					if (jsonData) {
						if (jsonData['result'] == '0') {
							if ( typeof bindDataCallback == 'function') {
								bindDataCallback(jsonData);
							}
						} else {
							if ( typeof failCallback == 'function') {
								failCallback();
							}
						}
					}
				},
				error : function(jsonData) {
					if ( typeof failCallback == 'function') {
						failCallback();
					}
				}
			});
		}
	};
	exports.appendLoad = function() {
		if (requestURL) {
			$.ajax({
				type : 'POST',
				url : requestURL,
				dataType : 'json',
				data : requestParams,
				success : function(jsonData) {
					if (jsonData) {
						if (jsonData['result'] == '0') {
							if ( typeof appendBindDataCallback == 'function') {
								appendBindDataCallback(jsonData);
							}
						} else {
							if ( typeof failCallback == 'function') {
								failCallback();
							}
						}
					}
				},
				error : function(jsonData) {
					if ( typeof failCallback == 'function') {
						failCallback();
					}
				}
			});
		}
	};

});

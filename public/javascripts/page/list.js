/**
 * @file 新闻列表页面
 * @author wangjincai(jincai.wang@foxmail.com)
 **/
;define('page/list', function(require, exports, module) {
	var msg = require('msg');
	msg.sub('pageEnter', function (e) {
		if (e.to == 'list') {
		}
	});
	msg.sub('pageLeave', function (e) {
		if (e.from == 'list') {

		}
	});
});
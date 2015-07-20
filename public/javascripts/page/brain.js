/**
 * @file 益智类游戏页面
 * @author wangjincai(jincai.wang@foxmail.com)
 **/
;define('page/brain', function(require, exports, module) {
	var msg = require('msg');
	msg.sub('pageEnter', function (e) {
		if (e.to == 'brain') {
		}
	});
	msg.sub('pageLeave', function (e) {
		if (e.from == 'brain') {

		}
	});
});
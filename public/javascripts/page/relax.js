/**
 * @file 休闲游戏页面
 * @author wangjincai(jincai.wang@foxmail.com)
 **/
;define('page/relax', function(require, exports, module) {
	var msg = require('msg');
	
	msg.sub('pageEnter', function (e) {
		if (e.to == 'relax') {
		}
	});
	msg.sub('pageLeave', function (e) {
		if (e.from == 'relax') {

		}
	});
});
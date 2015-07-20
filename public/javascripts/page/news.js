/**
 * @file 最新游戏推荐页面
 * @author wangjincai(jincai.wang@foxmail.com)
 **/
;define('page/news', function(require, exports, module) {
	var msg = require('msg');
	msg.sub('pageEnter', function (e) {
		if (e.to == 'news') {
		}
	});
	msg.sub('pageLeave', function (e) {
		if (e.from == 'news') {

		}
	});
});
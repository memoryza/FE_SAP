/**
 * @file 最新游戏推荐页面
 * @author wangjincai(wangjincai@baidu.com)
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
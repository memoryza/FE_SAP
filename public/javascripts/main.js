/**
 * @file 项目主入口
 * @author wangjincai(wangjincai@baidu.com)
 **/

;define('main', function(require, exports, module) {
	var msg = require('msg');
	var route = require('route');
	var log = require('log');
	var $ = require('zepto');
	// 事件绑定
	(function() {
		$('#menuList').on('click', '._linkTo', function(e) {
			log.add('top_menu_click');
			route.toPage(e, $(this).attr('href'), null, '');
		})
	})();
	// 页面路由
	route.init({act: 'news'});
});
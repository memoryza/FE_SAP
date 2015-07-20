/**
 * @file 项目主入口
 * @author wangjincai(jincai.wang@foxmail.com)
 **/

;define('main', function(require, exports, module) {
	var msg = require('msg');
	var route = require('route');
	var log = require('log');
	var util = require('util');
	var tips = require('tips');
	var template = require('template');
	var $ = require('zepto');

	var gEvent = {
		container: $('#appContainer'),
		// 主菜单切换
		changeTab: function (e) {
			var $this = $(this);
			var $parentLi = $this.closest('li');
			var href = $this.attr('href');
			if ($parentLi.hasClass('current')) {
				return false;
			}
			$parentLi.addClass('current').siblings().removeClass('current');
			log.add('top_menu_click');
			route.toPage(e, href, null, '');
			var params = util.getQueryParam(href);
			if (params.act) {
				gEvent.reqAct(params.act);
			}
		},
		reqAct: function(act) {
			var $title = gEvent.container.find('._title').clone();
			var $li = gEvent.container.find('._dataLi').clone();
			var startTime = +new Date();
			tips.loading(gEvent.container);
			$.getJSON('/ajax', {act: act}, function (d) {
				if (d.errNo == 0) {
					// loading 有一定效果,哈哈负值也没事的
					var diffTime = 1000 - (+new Date() - startTime);
					setTimeout(function() {
						gEvent.container.html(util.templateEngine(template.getGameListTpl(), {gameList: d.data, act: act}));
					}, diffTime);
				} else {
					tips.toast('获取列表内容失败。');
				}
			});
		}
	};
	// 事件绑定
	$('#menuList').on('click', '._linkTo', gEvent.changeTab);
	
	// 页面路由
	route.init({act: 'news'});
});
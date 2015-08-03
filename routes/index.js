/**
 * @file 项目主页入口
 * @author memoryza(jincai.wang@foxmail.com)
 **/
var express = require('express');
var qs = require('querystring');
var router = express.Router();
var indexMiddle = require('../include/middle/index');
var detect = require('./detect');
/* GET home page. */
router.get('/', function(req, res) {

	var params = req.query;
	var act = params.act || 'news';
	var list = {
		news: indexMiddle.getNewGameList,
		brain: indexMiddle.getBrainGameList,
		relax: indexMiddle.getRelaxGameList,
		list: indexMiddle.getNewsList
	};
	if (act && list[act]) {
		list[act](fallback);
	} else {
		res.render('error', {message: '您走错地方了', error: {status: 'error', stack: null}});
	}
   function fallback(gameList) {
		var actionList = {
			'news': 1,
			'brain': 1,
			'relax': 1,
			'list': 1
		};
	  	var data = {
	  		head: {
	  			title: '游戏商城',
			  	keywords: '益智,游戏,休闲',
			  	description:'益智、休闲类小游戏大合集'
			},
			act: act,
			menuList: [{
				href: '/?act=news',
				act: 'news',
				name: '最新'
			},{
				href: '/?act=brain',
				act: 'brain',
				name: '益智'
			},{
				href:'/?act=relax',
				act: 'relax',
				name: '休闲'
			},{
				href:'/?act=list',
				act: 'list',
				name: '新闻'
			}],
			adInfo: {
				name: '新闻',
				url: 'http://www.baidu.com'
			},
			gameList: gameList,
			actionList: JSON.stringify(actionList)
	 	};
	   	var device = detect(req.headers['user-agent']);
	   	if (device.os && device.os.phone) {
			res.render('m/index', data);
	   	} else {
	   		res.render('pc/index', data);
	   	}
   }
});

module.exports = router;

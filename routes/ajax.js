/**
 * @file 专门负责ajax请求处理
 * @author wangjincai(wangjincai@foxmail.com)
 **/

var express = require('express');
var router = express.Router();
var qs = require('querystring');
var indexMiddle = require('./middle/index');
router.get('/', function(req, res) {
	var params = qs.parse(req.search);
	var act = params['act'];
	var data = [];
	var list = {
		news: indexMiddle.getNewGameList,
		brain: indexMiddle.getBrainGameList,
		relax: indexMiddle.getRelaxGameList,
		list: indexMiddle.getNewsList
	};
	if (act && list[act]) {
		data = list[act]();
		res.end({errNo: 0, msg: 'success', data: data});
	} else {
		res.send({errNo: 1, msg: 'error', data: data});
	}
});

module.exports = router;
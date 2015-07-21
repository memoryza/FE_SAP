/**
 * @file 获取首页数据的接口
 * @author wangjincai(jincai.wang@foxmail.com)
 **/
var dbAPI = require('../model/game');
module.exports.getNewGameList = function(cb) {
	dbAPI.queryByTypeId('news', function(rows) {
		cb && cb(rows);
	});
}
module.exports.getBrainGameList = function(cb) {
	dbAPI.queryByTypeId('brain', function(rows) {
		cb && cb(rows);
	});
}
module.exports.getRelaxGameList = function(cb) {
	dbAPI.queryByTypeId('relax', function(rows) {
		cb && cb(rows);
	});
}
module.exports.getNewsList =  function(cb) {
	dbAPI.queryByTypeId('list', function(rows) {
		cb && cb(rows);
	});
}
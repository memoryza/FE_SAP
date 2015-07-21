/**
 * @file 游戏表维护
 * @author wangjincai(jincai.wang@foxmail.com)
 **/

var db = require('../db/index');
var table_name = 'game';
var cache_prefix = 'm_game';//todo 用redis和memcache做一层缓存
exports.insert = function(arr) {
	db.insert(table_name, arr)
}
// 根据分类查询数据库
exports.queryByTypeId = function(typename, cb) {
	var obj = {
		key : "*",
		where: "gtype->>'" + typename + "' = '1';"
	}
	db.query(table_name, obj, cb);
}
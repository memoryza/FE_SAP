var dbConfig = require('../config');
var dbAPI = require('./' + dbConfig.file);
// 多数据库打交道的需要统一暴露接口
module.exports = new dbAPI(dbConfig);

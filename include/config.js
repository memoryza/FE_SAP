var config = {
	dbType: 'pb'
}
var configs = {
	pb: {
		name: 'postgres',
	    pwd: 'wqrsubblove',
	    port: 5432,
	    server: 'localhost',
	    dbname: 'm_game',
	    file: 'pgAPI'
	}
}
if (configs[config.dbType]) {
	module.exports = configs[config.dbType];
} else {
	throw '数据库配置错误';
}

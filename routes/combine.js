/**
 * @file 专门做网站请求资源的合并压缩
 * @author memoryza(jincai.wang@foxmail.com)
 **/


 var fs = require('fs');
var sourceCacheList = {};
var express = require('express');
var qs = require('querystring');
var router = express.Router();
var zlib = require('zlib');
var resPattern = /^\?.*\.(js|css)$/;
 var path = require('path');
 var sourcePath = path.join(__dirname, '../public/dist');
 var cssPath = sourcePath + '/stylesheets/';
 var jsPath = sourcePath + '/javascripts/';
router.get('/', function(req, res) {
    var queryStr = '';
	for(var i in req.query) {
		if (i && req.query.hasOwnProperty(i) && i.indexOf('?') === 0) {
			queryStr = i;
		} 
	}
	var arr = queryStr.match(resPattern);
	if (arr && arr.length > 1) {
		if (arr[1] == 'css') {
			combine(queryStr, res, cssPath);
		} else {
			combine(queryStr, res, jsPath);
		}
	} else {
		res.send('没找到资源');
	}

});

function combine(qs, res, path) {
	qs = qs.substr(1);
	if (false && sourceCacheList[qs]) {
		res.send(sourceCacheList['qs']);
	} else {
		var resList = qs.split(',');
		var fileStr = [];
		var realFileCount = resList.length;;
		for(var i = 0, _len = realFileCount; i < _len; i++) {
			(function(j) {
				var file = path + resList[j];
				
				if (fs.existsSync(file)) {
					fileStr[j]= fs.readFileSync(file);
					if (j == realFileCount - 1) {
						sourceCacheList[qs] = fileStr.join(';');
						res.send(sourceCacheList[qs]);
					}
				} else {
					realFileCount--;
						console.log(file)
					
					if (realFileCount <= 0) {
						res.send('没找到资源');
					}
				}
			})(i)
		}
	}	
}

module.exports = router;
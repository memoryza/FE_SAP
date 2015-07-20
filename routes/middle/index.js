/**
 * @file 获取首页数据的接口
 * @author wangjincai(wangjincai@baidu.com)
 **/

module.exports.getNewGameList = function() {
	return [{
		name: '俄罗斯方块',
		logo: 'http://resource.duopao.com/sg/image/20140122011603.jpg',
		star: 3,
		url: 'http://duopao.com/games/play/g20140122011645515867',
		heat: 1000,
		desc: '世界经典游戏'
	},{
		name: '俄罗斯方块',
		logo: 'http://resource.duopao.com/sg/image/20140122011603.jpg',
		star: 3,
		url: 'http://duopao.com/games/play/g20140122011645515867',
		heat: 1000,
		desc: '世界经典游戏'
	},{
		name: '俄罗斯方块',
		logo: 'http://resource.duopao.com/sg/image/20140122011603.jpg',
		star: 3,
		url: 'http://duopao.com/games/play/g20140122011645515867',
		heat: 1000,
		desc: '世界经典游戏'
	},{
		name: '俄罗斯方块',
		logo: 'http://resource.duopao.com/sg/image/20140122011603.jpg',
		star: 3,
		url: 'http://duopao.com/games/play/g20140122011645515867',
		heat: 1000,
		desc: '世界经典游戏'
	},{
		name: '俄罗斯方块',
		logo: 'http://resource.duopao.com/sg/image/20140122011603.jpg',
		star: 3,
		url: 'http://duopao.com/games/play/g20140122011645515867',
		heat: 1000,
		desc: '世界经典游戏'
	}];
}
module.exports.getBrainGameList = function() {
	return [{
		name: '一笔连珠',
		logo: 'http://resource.duopao.com/sg/image/20140120005137.jpg',
		star: 5,
		url: 'http://duopao.com/games/play/g20140120005521614511',
		heat: 100000,
		desc: '一款非常容易上瘾的消除类游戏'
	},{
		name: '一笔连珠',
		logo: 'http://resource.duopao.com/sg/image/20140120005137.jpg',
		star: 5,
		url: 'http://duopao.com/games/play/g20140120005521614511',
		heat: 100000,
		desc: '一款非常容易上瘾的消除类游戏'
	},{
		name: '一笔连珠',
		logo: 'http://resource.duopao.com/sg/image/20140120005137.jpg',
		star: 5,
		url: 'http://duopao.com/games/play/g20140120005521614511',
		heat: 100000,
		desc: '一款非常容易上瘾的消除类游戏'
	}];
}
module.exports.getRelaxGameList =  this.getBrainGameList;
module.exports.getNewsList = this.getBrainGameList;
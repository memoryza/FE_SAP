/**
 * @file 全局的模板文件
 * @author wangjincai(jincai.wang@foxmail.com)
 **/

define('template', function(require, exports, module) {
	exports.getGameListTpl = function(data) {
		return '<%if(gameList.length > 0) {%>\
	   		<div class="game-title">共包含<span class="_title"><%gameList.length%></span>个游戏</div>\
	   		<ul class="_dataLi">\
	   			<%for(var i = 0, _len = gameList.length; i < _len; i++) {%>\
	   			<li>\
	   				<a href="<%gameList[i].url%>"">\
	   					<div class="game">\
	   						<div class="icon">\
	   							<img src="<%gameList[i].logo%>" width="64" height="64"/>\
	   							<%if(act == "news") {%>\
	   							 	<div class="news"></div>\
	   							<%}%>\
	   						</div>\
	   						<div class="info">\
		   						<p class="name"><%gameList[i].name%></p>\
		   						<div class="star">\
			   						<span class="star-info star-<%gameList[i].star%>"></span>\
			   						<span>人气：<%gameList[i].hot%></span>\
		   						</div>\
		   						<p class="desc"><%gameList[i].description%></p>\
		   						<div class="start-btn">开始</div>\
		   					</div>\
	   					</div>\
	   				</a>\
	   			</li>\
	   			<%}%>\
	   		</ul>\
	   		<%} else {%>\
	   			<div class="no-game">没有该分类数据。</div>\
	   		<%}%>';
	}
});
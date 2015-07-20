/**
 * @file 项目各种辅助提示
 * @author memoryza(jincai.wang@foxmail.com)
 **/

define('tips', function(require, exports, module) {
	// 区域loading，c:需要加载的区域dom
	exports.loading = function(c) {
		c = c[0] || c;
		c.innerHTML = '<div style="text-align:center;padding-top:20px;">\
						<img style="width:32px;height:32px;" src="/images/loading.gif"/>\
					</div>';
	}
	exports.toast = function (content, time) {
		if (content) {
			var timer = time || 3000;
			var ele = document.getElementById('toast');	
			ele.setAttribute('class', 'show');
			ele.innerText = content;
			setTimeout(function () {
				ele.setAttribute('class', '');
			}, timer);
		}
		

	}
})
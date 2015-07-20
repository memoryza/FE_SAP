/**
  * @file SAP路由管理
  * @author wangjincai(jincai.wang@foxmail.com)
  */
define('route', function(require, exports, module) {
    var util = require('util');
    var msg = require('msg');
    var cpId = '';
    var conf = {};
    var lastStateTS = 0;
    var routeType = util.getRouteType();
    exports.go = function (opId, curId) {
        msg.pub('pageLeave', {
            from: opId,
            to: curId
        });
        var modId = 'page\/' + curId;
        //@require.async page/news
        require.async(modId, function () {
            msg.pub('pageEnter', {
                from: opId,
                to: curId
            });
            msg.pub('pageLoding', {
                from: opId,
                to: curId
            });
        });
    };
    // 去那个页面
    exports.toPage = function (e, url, state, title) {
        e.preventDefault();
        state = state || null;
        title = title || '';
        if (routeType == 'pushState') {
            window.history.pushState(state, title, url);
            changeHandler();
        } else {
            var params = util.getQueryParam(url);
            var act = params.act;
            delete params.act;
            var hashurl = util.urlParam(params);
            hashurl = (hashurl ? '/' : '') + hashurl;
            location.hash = act + hashurl;
        }
    };
    var changeHandler = function (e) {
        var timer = +new Date();
        if ( timer - lastStateTS > 200) {
            lastStateTS = timer;
            var param = util.getAppParam(routeType);
            var opId = cpId;
            cpId = param.act || conf.act;
            exports.go(opId, cpId);
        }
        return false;
    };

    exports.init = function (opts) {
        conf = opts;
        changeHandler();
        if (routeType == 'pushState') {
            window.onpopstate = changeHandler;
        } else {
            window.onhashchange = changeHandler;
        }
    };
    // 重置lastState, 访问页面app/ 的时候路由需要连续触发两次，这时候就中了pushstate 200一次的限制
    exports.clearLastState = function () {
        lastStateTS = 0;
    }
});

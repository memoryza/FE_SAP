/**
* 简易的pubsub用户mobile版本坐一个facade模式加pubsub，准备精简各个页面的容易、公共绑定的代码
* author:memoryza(jincai.wang@foxmail.com)
**/
define('msg', function(require, exports, module) {
    'use strict';
    var observerList = {};
     //32位序列码，例如：81ca3814-efc4-44e6-2800-3b36749dcaff
    function guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }
    function PubSub() {}
    PubSub.prototype.sub = function(name, fn) {
        if(!observerList[name]) {
            observerList[name] = [];
        } 
        var token = guidGenerator();
        observerList[name].push({token:token, fn: fn});
        return token;
    }
    PubSub.prototype.pub = function(name) {
        if(observerList[name]) {
            for(var i = 0, _len = observerList[name].length; i < _len; i++) {
                observerList[name][i]['fn'].apply(null, Array.prototype.slice.call(arguments, 1));
            }
        }
    }
    PubSub.prototype.unsub = function(name, token) {
        if(observerList[name]) {
            for(var i = 0, _len = observerList[name].length; i < _len; i++) {
                if(observerList[name][i]['token'] == token) {
                    observerList[name].splice(i, 1);
                    break;
                }
            }
        }
    }
    module.exports = new PubSub();
})

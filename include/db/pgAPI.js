/**
 * @file pg数据库打交道
 * @author wangjincai(jincai.wang@foxmail.com)
 **/
var pg = require('pg');
function pgAPI(config) {
    if(this instanceof pgAPI) {
        this.client = null;
        this.init(config);
    } else {
        return new pgAPI(config);
    }
}
pgAPI.prototype = {
    init: function(config) {
      if (!this.client) {
        var conString = 'tcp://' + config.name + ':' + config.pwd
                        +  '@' + config.server + ':' + config.port
                        +  '/' + config.dbname;
        this.client = new pg.Client(conString);
        this.client.connect();
      }
    },
    /**
    * table:表名
    * obj: {key:value} 插入的数据键值对
    **/
    insert: function(table, obj) {
      if(!table || !obj || !(obj instanceof Object)) {
          throw(new Error('params error'));
      }
      if(this.client) {
          var str = "INSERT INTO " + table + "(";
          var params = [];
          var paramsVal = [];
          var placeholder = [];
          for(var key in obj) {
              if(key &&  obj.hasOwnProperty(key)) {
                  params.push(key);
                  paramsVal.push(obj[key]);
              } 
          }
          if(!params.length) {
              throw(new Error('keys error'));
          }
          str += params.join(',') + ') VALUES(';
          for(var i = 0; i < params.length; i++) {
            placeholder.push('$' + (i + 1));
          }
          str += placeholder.join(',') + ')';

          this.client.query(str, paramsVal, function(err) {
              if(err) {
                  throw(err);
              }
          });
      } else {
          throw(new Error('client not connection'));
      }
    },
     /**
    * table:表名
    * obj: {
    *   key: 带查询的字段，默认为空,
    *   where: 条件(内部提供查询分析另提供接口)
    * }
    **/
    query: function(table, obj, cb) {
      if(!table || !obj || !(obj instanceof Object)) {
          throw(new Error('params error'));
      }
      if(this.client) {
          var str = "SELECT "  + (obj.key ? obj.key : '*') + " FROM " + table;
          if(obj.where) {
            str += ' WHERE ' +  obj.where;
          }
          var query = this.client.query(str, function(err) {
              if(err) {
                  throw(err);
              }
          });
          var rows = [];
          query.on('row', function(row) {
            rows.push(row);
          });
          query.on('end', function() {
            cb(rows);
          })
      } else {
          throw(new Error('client not connection'));
      }
    },
    delete: function(table, id) {
        if(!table || !id) {
            throw(new Error('params error'));
        }
        if(this.client) {
            var str = "DELETE FROM  " + table + ' WHERE id=' + id;
            this.client.query(str, function(err) {
                if(err) {
                    throw(err);
                }
            });
        } else {
            throw(new Error('client not connection'));
        }
    },
    update: function(table, id, obj) {
        if(!table || !id || !obj || !(obj instanceof Object)) {
            throw(new Error('params error'));
        }
        if(!this.client) {
          throw(new Error('client not connection'));
        }
        
    },
    close: function() {
       this.client.end();
    }
}
module.exports = pgAPI;

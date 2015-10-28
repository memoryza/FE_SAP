#前端SPA（dependencies node)

额 不知道说啥，就是一个SAP啦【正在构建中】，pg(9.3.2+ 支持json查询)做后端数据库，node做sever，express做js模板，前端sap用pushstate+hash， 移动端采用部分状态记忆存储（localstorage+cookie），pc端为了保证搜索引擎能抓去，让hash直接跳转。

###使用方法
  
1、下载FE_SPA切换到跟目录执行
  
     npm install

2、安装progress

3、将help文件夹下pg.sql导入到数据库

4、执行命令
   
    node app.js
    
3、访问
    localhost:9999

[注：/bin/publish 包含app的进程守护、/public/执行grunt build  css、js的资源压缩]

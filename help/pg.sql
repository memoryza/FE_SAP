-- 以下为项目需要的sql语句
-- Schema: public

-- DROP SCHEMA public;

CREATE SCHEMA public
  AUTHORIZATION postgres;

GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
COMMENT ON SCHEMA public
  IS 'standard public schema';


-- Table: game

-- DROP TABLE game;

CREATE TABLE game
(
  id serial NOT NULL,
  name character varying(40),
  description character varying(200),
  star smallint, -- 评星
  url character varying(200),
  hot numeric, -- 人气指数
  type character varying(100)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE game
  OWNER TO postgres;
COMMENT ON COLUMN game.star IS '评星
';
COMMENT ON COLUMN game.hot IS '人气指数
';


-- Index: game_id

-- DROP INDEX game_id;

CREATE INDEX game_id
  ON game
  USING btree
  (id);

--select * from game where gtype->>'news' = '1';
-- test Date
-- INSERT INTO game( name, description, star, url, hot, gtype,logo)
--   VALUES ('俄罗斯方块', '世界经典游戏', 5, 'http://sxiao.4399.com/4399swf/upload_swf/ftp8/zzssjjys/20120412/2.swf', 10000, '{"news":"1"}', 'http://p2.qhimg.com/t01005575ac1e4665ed.png');

-- INSERT INTO game( name, description, star, url, hot, gtype, logo)
--    VALUES ('2048', '益智类游戏，耐玩，上手快', 5, 'http://www.aililuo.com/demo/canvas.html', 10000, '{"brain":"1"}', 'http://p3.gexing.com/touxiang/2012/7/14/201274540040147.jpg');

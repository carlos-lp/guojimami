/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : guojimami

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 18:43:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `phoneNum` varchar(11) NOT NULL COMMENT '手机号码',
  `password` varchar(255) NOT NULL COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=88 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15812345678', '123456');
INSERT INTO `user` VALUES ('2', '15812345679', '1234567');
INSERT INTO `user` VALUES ('3', '13473738393', '111111');
INSERT INTO `user` VALUES ('87', '13818393847', '111111');
SET FOREIGN_KEY_CHECKS=1;

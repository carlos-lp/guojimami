/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : guojimami

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 18:43:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `goodsurl` varchar(255) NOT NULL,
  `nav` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `type` varchar(255) NOT NULL,
  `date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '../img/81_thumb_G_1529373335200.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '192.00', '自贸仓', '2018-08-24 16:47:29');
INSERT INTO `goodslist` VALUES ('2', '../img/182_thumb_G_1489963397304.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '132.00', '自贸仓', '2018-08-27 17:07:59');
INSERT INTO `goodslist` VALUES ('3', '../img/23809_thumb_G_1510190301002.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '133.00', '自贸仓', '2018-08-27 17:08:39');
INSERT INTO `goodslist` VALUES ('4', '../img/81_thumb_G_1529373335200.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '123.00', '自贸仓', '2018-08-24 16:47:38');
INSERT INTO `goodslist` VALUES ('5', '../img/182_thumb_G_1489963397304.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '155.00', '自贸仓', '2018-08-27 17:08:07');
INSERT INTO `goodslist` VALUES ('6', '../img/81_thumb_G_1529373335200.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '165.00', '自贸仓', '2018-08-24 16:47:43');
INSERT INTO `goodslist` VALUES ('7', '../img/23812_thumb_G_1510276961607.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '183.00', '自贸仓', '2018-08-27 17:09:41');
INSERT INTO `goodslist` VALUES ('8', '../img/81_thumb_G_1529373335200.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '189.00', '自贸仓', '2018-08-24 16:47:49');
INSERT INTO `goodslist` VALUES ('9', '../img/4810_thumb_G_1529373654257.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '189.00', '自贸仓', '2018-08-24 16:47:52');
INSERT INTO `goodslist` VALUES ('10', '../img/23809_thumb_G_1510190301002.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '173.00', '自贸仓', '2018-08-27 17:08:47');
INSERT INTO `goodslist` VALUES ('11', '../img/4810_thumb_G_1529373654257.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '176.00', '自贸仓', '2018-08-24 16:47:57');
INSERT INTO `goodslist` VALUES ('12', '../img/23812_thumb_G_1510276961607.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '196.00', '自贸仓', '2018-08-27 17:09:46');
INSERT INTO `goodslist` VALUES ('13', '../img/4810_thumb_G_1529373654257.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '232.00', '自贸仓', '2018-08-27 17:04:34');
INSERT INTO `goodslist` VALUES ('14', '../img/182_thumb_G_1489963397304.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '199.00', '自贸仓', '2018-08-27 17:08:12');
INSERT INTO `goodslist` VALUES ('15', '../img/4810_thumb_G_1529373654257.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '166.00', '自贸仓', '2018-08-24 16:48:12');
INSERT INTO `goodslist` VALUES ('16', '../img/4810_thumb_G_1529373654257.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '129.00', '自贸仓', '2018-08-27 17:04:26');
INSERT INTO `goodslist` VALUES ('17', '../img/4810_thumb_G_1529373654257.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '166.00', '自贸仓', '2018-08-24 16:48:12');
INSERT INTO `goodslist` VALUES ('18', '../img/23809_thumb_G_1510190301002.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '123.00', '自贸仓', '2018-08-27 17:09:36');
INSERT INTO `goodslist` VALUES ('19', '../img/4810_thumb_G_1529373654257.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '166.00', '自贸仓', '2018-08-24 16:48:12');
INSERT INTO `goodslist` VALUES ('20', '../img/182_thumb_G_1489963397304.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '166.00', '自贸仓', '2018-08-27 17:08:35');
INSERT INTO `goodslist` VALUES ('21', '../img/4810_thumb_G_1529373654257.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '163.00', '自贸仓', '2018-08-27 17:04:45');
INSERT INTO `goodslist` VALUES ('22', '../img/23812_thumb_G_1510276961607.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '150.00', '自贸仓', '2018-08-27 17:12:37');
INSERT INTO `goodslist` VALUES ('23', '../img/4810_thumb_G_1529373654257.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '166.00', '自贸仓', '2018-08-24 16:48:12');
INSERT INTO `goodslist` VALUES ('24', '../img/23809_thumb_G_1510190301002.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '169.00', '自贸仓', '2018-08-27 17:10:29');
INSERT INTO `goodslist` VALUES ('25', '../img/4810_thumb_G_1529373654257.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '160.00', '自贸仓', '2018-08-27 17:04:56');
INSERT INTO `goodslist` VALUES ('26', '../img/4810_thumb_G_1529373654257.jpg', '海外奶粉', '荷兰奶粉', 'Nutrilon 荷兰牛栏奶粉1段 海外本土原版', '166.00', '自贸仓', '2018-08-24 16:48:12');
SET FOREIGN_KEY_CHECKS=1;

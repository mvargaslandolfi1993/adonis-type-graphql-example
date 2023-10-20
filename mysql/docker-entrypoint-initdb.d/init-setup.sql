CREATE DATABASE IF NOT EXISTS `adonis_app` COLLATE 'utf8_general_ci' ;
GRANT ALL ON `adonis_app`.* TO 'default'@'%' ;

CREATE DATABASE IF NOT EXISTS `adonis_app_testing` COLLATE 'utf8_general_ci' ;
GRANT ALL ON `adonis_app_testing`.* TO 'default'@'%' ;
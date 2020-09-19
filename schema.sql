-- Drops the "statemap" if it exists currently --
DROP DATABASE IF EXISTS statemap;
-- Creates the "statemap" database --
CREATE DATABASE statemap;
USE statemap;
CREATE TABLE states (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  abbr VARCHAR(2),
  PRIMARY KEY (id)
);
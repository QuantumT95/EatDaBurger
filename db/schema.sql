CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    'id' int NOT NULL AUTO_INCREMENT,
    'burger_name' varchar(35) NOT NULL,
    'devoured' BOOL DEFAULT FALSE,
    PRIMARY KEY ('id')
);
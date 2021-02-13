/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/
 CREATE database groceryList;

 USE groceryList;

 CREATE table groceryList (
   id INT(6) AUTO_INCREMENT PRIMARY KEY,
   itemName VARCHAR(20) NOT NULL,
   quantity INT(6) NOT NULL
 )

/*  Execute this file from the command line by typing:
 *    mysql -u student -
 *  to create the database and the tables.*/

 CREATE database groceryList;

 USE groceryList;

 CREATE table groceries (
   id INT(6) AUTO_INCREMENT PRIMARY KEY,
   itemName VARCHAR(20) NOT NULL,
   quantity INT(6) NOT NULL
 );
INSERT INTO groceries (itemName, quantity) VALUES ('banana', 9000);
INSERT INTO groceries (itemName, quantity) VALUES ('kiwi', 2);
INSERT INTO groceries (itemName, quantity) VALUES ('egg', 55);
// YOUR SERVER CODE HERE
const path = require('path');
const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js");

app.use(cors());
app.use(express.static(path.join(__dirname,'../client/dist')));

app.listen(port, () => {
});

// app.get('/', (req, res) => {
//   let sql = 'SELECT itemName, quantity FROM groceries'
//   db.query(sql, (err, data)=>{
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('WE BE GETTIN PAID!')
//       res.send(data);
//     }
//   })
// })

// app.get('/', (req, res)=>{
//   res.status(200);
//   res.send('text here')
// })

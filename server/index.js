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

app.get('/groceries', (req, res) => {
  let sql = 'SELECT itemName, quantity FROM groceries'
  db.query(sql, (err, data)=>{
    if (err) {
      console.error(err);
    } else {
      console.log('SENDING OVER DATA NOW: ')
      res.send(data);
    }
  })
})
app.post('/groceries', (req, res)=>{
  console.log(req)
  let sql = 'INSERT INTO groceries (itemName, quantity) VALUES '
  db.query(sql, (err, data)=> {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.end('Posted');
    }
  })
})

// app.get('/groceries', (req, res)=>{
//   db.query()
//   res.status(200);
//   console.log(res)
//   res.end('big logs')
// })

const express = require('express');
const app = express();


app.listen(3000);

app.get("/", (req, res) => {

res.sendFile("./pages/index.html" , {root: __dirname})
console.log("done")
});

app.get("/masaa", (req, res) => {

  res.sendFile("./pages/masaa.html" , {root: __dirname})
  console.log("done")
  })

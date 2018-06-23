const express = require('express');
const path = require('path');
var app = express();
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Server is up on: ", port);
});

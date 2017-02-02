var express = require('express');
var app = express();
var PostCollection = require('../configs/database/models/postSchema');


//********** creating apis***********

app.post("/api/blogPost", createPost);

function createPost(req, res) {
  var post =req.body;
  console.log(post);
  res.json(post);
}

module.exports = app;

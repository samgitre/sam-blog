var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Postmodel = require('./configs/database/models/postSchema');
var api = require('./apis/apis');
var Q =  require('q');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
require('./configs/database/config/dbConfig');
// require('./apis/apis');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'dia.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/pages')));
app.use(express.static(path.join(__dirname, 'public/')));

app.use('/', index);
app.use('/users', users);


 // ***************Creating the apis*****************

app.post("/api/blogPost", createPost);
app.get("/api/blogPost", getAllPosts);
app.get('/api/blogPost/:id', getPostById);
app.delete("/api/blogPost/:id", deletePost);
app.put("/api/blogPost/:id", updatePost);


function createPost(req, res) {
  var post =req.body;
  Postmodel.create(post).then(function(createdPost) {
      res.json(200);
  }).catch(function(err) {
    res.sendStatus(400);
  });
}

 function updatePost(req, res) {
   var postId = req.params.id;
   var post = req.body;
   Postmodel.update({_id:postId},
     {
       title :post.title,
       comment :post.comment
     }).then(function(status) {
       res.sendStatus(200);
     }).catch(function(err) {
       console.log(err);

       res.sendStatus(400);
     });
 }

function getPostById(req, res) {
  var postId = req.params.id;
  Postmodel.findById(postId).then(function(post) {
    res.json(post)
  }).catch(function(err) {
    res.sendStatus(400);
  });
}

function getAllPosts(req, res) {
  Postmodel.find().then(function(allPosts) {
    res.json(allPosts)
  }).catch(function(err) {
    res.sendStatus(400);
  });
}

function deletePost(req,res) {
  var postId = req.params.id;
  Postmodel.remove({_id:postId})
  .then(function(status) {
    res.sendStatus(200);
  }).catch(function(argument) {
    res.sendStatus(400);
  });
}
 // *************** End Creating the apis*****************

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

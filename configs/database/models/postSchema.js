var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title : {
    type : String,
    required : true
  },
  comment :{
    type :String,
    required: true
  },
  posted: {
    type : Date,
    default : Date.now
  },
  updatedAt :{
    type : Date,
    default:Date.now
  }
});
module.exports = mongoose.model("Post", postSchema);

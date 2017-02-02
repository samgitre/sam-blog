var mongoose = require('mongoose');
var url = "mongodb://bitsy_soft:dy13lsd7425@ds139879.mlab.com:39879/bitsyblog";

mongoose.Promise = global.Promise;

mongoose.connect(url, function() {
  mongoose.connection.once('open', function() {
    console.log("Connected to data house successfully");
  }).on('Error', function (error) {
    console.warn("Unable to connect to server" + error);
  });
});

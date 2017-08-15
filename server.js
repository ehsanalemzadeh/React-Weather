var express = require('express');

// Create our app
var app = express();

const PORT = process.env.port || 8000;

// app.use(function(req,res,next){
//   // console.log(req.headers);
//   if(req.headers['x-forwarded-proto'] === 'https' ){
//     req.redirect('http://'+req.hostname+req.url);
//   }else{
//     next();
//   }
// });

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port '+PORT);
});

// Do not forget to store your new request module in a variable in order to use it
const mongoose = require('mongoose');

var user = "Ramy_Atassi";
var password = "codecode1";
var port = 11065;
var bddname = "weatherapp";


// useNewUrlParser ;)
var options = {
   connectTimeoutMS: 5000,
   useNewUrlParser: true,
  };

mongoose.connect('mongodb://'+user+':'+password+'@ds111065.mlab.com:'+port+'/'+bddname,
    options,
    function(err) {
     if (err) {
       console.log(err);
     } else {
       console.info('connexion ok');
     }
    }
);

module.exports = mongoose;

var express = require('express');
var bodyParser = require('body-parser');
var area = require('./area');

var app = express();
var port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var router = express.Router();

router.get('/', function (req, res) {
    var side1 = req.query.side1;
    var side2 = req.query.side2;
    var value = area.getArea(lati = [side1, side2]);
    if(value == -1){
      res.send({
        "Code": 400,
        "Message": "parametri sbagliati"
      });
    }else if (value == -2) {
      res.send({
        "Code": 400,
        "Message": "parametri sbagliati"
      });
    }else{
      res.send({
        "code": 200,
        "Risultato:":value,

      });
    }
});

app.use('/', router);

app.listen(port, function(){
  console.log('Server in ascolto porta 8080')
});

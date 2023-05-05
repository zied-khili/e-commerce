var express = require('express');
var morgan =require('morgan')
var db = require('./db');
var cors=require("cors")
const { route } = require('./products/productRouter');
const productRouter=require('./products/productRouter')

var app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use('/prod',productRouter)


app.get('/home', (req, res) => {
  res.send('Hello World!');
});


let port = 5000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

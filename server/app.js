var express  = require('express');
var morgan =  require('morgan');
var cors = require("cors");
var app= express ();
var corsoptions = {origin: true, optionsSuccessStatus: 200 };


app.use(morgan( 'dev'));
app.use(express.json())
app.use(express.urlencoded ({extended: true}));
app.use(cors(corsoptions));
app.use(express.urlencoded ({extended: true}));


var incremental =0;

app. listen (8080, function (){
    console.log("Escuchando en el puerto 8080")
})

app.get ('/', function (req, res) {
    incremental++
    res.json({mensaje: "hola mundo"})
})

app.get ('/getIncremental', function (req, res) {
    res.json({Incremental: incremental})
})

app.get ('/retornoTexto', function (req, res) {
    res.send('Este mensaje esta en texto')
})

app.post ('/setIcremental', function (req, res) {
    incremental= req.body.dato
    var texto= req. body.texto
    res.json ({msg: "operacion con exito!" + texto})
})
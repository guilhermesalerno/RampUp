// Node application start up

var port = process.env.PORT || 3000;
var express = require('express');
var app = express();

app.get('/listings/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.listen(port);

console.log("Server running at http://127.0.0.1:" + port);
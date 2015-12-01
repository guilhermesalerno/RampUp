// Node application start up

var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var mysql =  require('mysql');

 var connection =  mysql.createConnection({
	host: process.env.RDS_HOSTNAME,
	user: process.env.RDS_USERNAME,
	password: process.env.RDS_PASSWORD
});

app.get('/listings/:id', function(req, res) {
	connection.connect();
	connection.query("use ebdb");
	connection.query("SELECT * FROM ebdb.Listings WHERE ID = ?", req.params.id, function(err, results){
		err && console.log(err);
		res.send(results);
		connection.end(function(err){
			err && console.log(err);
		});
	});    
});

app.listen(port);
console.log("Server running at http://127.0.0.1:" + port);
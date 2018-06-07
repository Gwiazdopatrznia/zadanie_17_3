let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let app = express();
let stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
	fs.readFile('./test.json', 'utf8', function(err, data) {
		if (err) throw err;
		stringfyFile = data
		res.send(data);
	});
});

app.post('/updateNote/:note', function(req, res) {
	fs.readFile('./test.json', 'utf8', function(err, data) {
		stringifyFile = data + req.params.note;

		fs.writeFile('./test.json', stringifyFile, function(err) {
   			if (err) throw err;
   			console.log('file updated');
   			res.send(stringifyFile);
		});
	});
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

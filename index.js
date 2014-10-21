var express = require('express'),
    exphbs  = require('express-handlebars');
	router = express.Router();
var chalk = require('chalk');

var app = express();

var startArgs = process.argv.slice(2);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


/*----------- STATIC -----------*/

app.use(express.static(__dirname + '/static'));

/*----------- ROUTES -----------*/

router.use(function(req, res, next) {
	console.log("Request: " + req.method, req.url);
	next();	
});


router.get('/', function (req, res) {
		res.render('home');
});


app.use('/', router);

// port 37605
app.listen(startArgs[0]);
console.log(chalk.inverse('\n Starting TRANSLATE! on port ' + startArgs[0] + '. \n'));


/* ---------- FUNCTIONS --------- */


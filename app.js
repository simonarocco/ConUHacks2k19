var express = require('express');

var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 7000);

app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
app.locals.pretty = true;
app.get("/", (req, res) => {
    res.redirect("/BuildProfile1.html");
});

http.createServer(app).listen(app.get('port'), function() {
 console.log('Express server listening on port ' + app.get('port'));
});
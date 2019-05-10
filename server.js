var bodyParser = require('body-parser')
var express = require('express')
var path = require("path");
var app = express()
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('./app/routing/htmlRoutes')(app)
require('./app/routing/apiRoutes')(app)

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function () {
    console.log("server listening to on http://localhost:" + PORT);
})
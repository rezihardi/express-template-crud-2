let express = require('express'),
    app = express(),
    port = process.env.PORT || 2007,
    bodyParser = require('body-parser'),
    controller = require('./controller');
    

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./routes');
routes(app);

app.listen(port);
console.log('Learn Something new from express, the port is: ' + port);
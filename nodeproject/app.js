var express = require('express');
var app = express();

var port = process.env.PORT; //global var from cloud9
var eventRouter = require('./src/routes/eventRoutes.js');
var dbRouter = require('./src/routes/dbRoutes.js');

app.use(express.static('public'));
app.use(express.static('bower_components' ));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Events', eventRouter);
app.use('/Db', dbRouter);

app.get('/', function(req, res){
    // res.send('Cabum!');
    res.render('index', { 
        list: ['first val', '2nd val', 'terceirao'],
        nav: [
            {Link: 'services', Text: 'Services'}, 
            {Link: 'portfolio', Text: 'Portfolio'}, 
            {Link: 'about', Text: 'About'},
            {Link: 'team', Text: 'Team'}, 
            {Link: 'contact', Text: 'Contact'},
            {Link: 'Events', Text: 'Events'},]
        
    });
});

app.get('/routing', function(req, res){
    res.send('Roteando');
});

app.listen(port, function(err){
    console.log('The server is running on port: ' + port);
});
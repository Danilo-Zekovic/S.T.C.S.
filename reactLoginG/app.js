var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(2000, function(){
    console.log('Server running on 2000...');
});
// npm install connect serve-static
// node app.js
// go to http://localhost:2000/index.html

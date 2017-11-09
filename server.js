var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen( process.env.PORT || 8081, function(){
    console.log('Servidor rodando na porta 8081.');
});
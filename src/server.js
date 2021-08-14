const app = require('./app');

//var PORT = process.env.PORT || 3000;

//app.listen(PORT,() => {
//    console.log(`Ouvindo na porta: ${PORT}`) 
//})

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});
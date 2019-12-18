const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000; //utilizar el puetto que da el porceso o el 3000
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales'); //registrar el parcial esto es propio de hbs
app.set('view engine', 'hbs');


//helpers

require('./hbs/helpers')

// app.get('/', function(req, res) {
//     res.render('home', { //con esto se renderiza-se dibuja la plantilla (para usar un aplantilla -codigo html que tiene ciertas variables )
//         nombre: "santIago",

//     });
// });

// app.get('/mundo', (req, res) => { //nuevo lugar de la aplicacion
//     res.render('mundo', { //con esto se renderiza-se dibuja la plantilla (para usar un aplantilla -codigo html que tiene ciertas variables )
//         nombre: "santiagO",

//     });
// });


app.listen(port, () => { // listen con callback
    console.log(`escuchando peticiones en el puerto ${port}`);
});
const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000; //utilizar el puetto que da el porceso o el 3000
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales'); //registrar el parcial esto es propio de hbs
app.set('view engine', 'hbs');



const clima = require('./clima');


const pruba = async() => {

    try {
        q = await clima.getClima(-0.190000, -78.500000);

        g = await clima.getClima(-2.210000, -79.900002);

        m = await clima.getClima(40.419998, -3.700000);

        p = await clima.getClima(43.720001, 10.400000);
        return q, g, m, p;
    } catch {
        console.log('error');
        return 'error';

    }


};

pruba();



app.get('/', function(req, res) {
    res.render('home', { //con esto se renderiza-se dibuja la plantilla (para usar un aplantilla -codigo html que tiene ciertas variables )
        q,
        g

    });
});

app.get('/mundo', (req, res) => { //nuevo lugar de la aplicacion
    res.render('mundo', { //con esto se renderiza-se dibuja la plantilla (para usar un aplantilla -codigo html que tiene ciertas variables )
        p,
        m
    });
});


app.listen(port, () => { // listen con callback
    console.log(`escuchando peticiones en el puerto ${port}`);
});
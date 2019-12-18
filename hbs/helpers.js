const hbs = require('hbs');
const axios = require('axios');
const clima = require('./controlador/clima');


hbs.registerHelper('clima', () => {
    let temp = clima.getClima(-0.190000, -78.500000);

    return temp

})


// clima.getClima(-0.190000, -78.500000).then(console.log);

//-2.210000, -79.900002 guayaquill

//40.419998, -3.700000 madrid


//43.720001, 10.400000 pisa italia
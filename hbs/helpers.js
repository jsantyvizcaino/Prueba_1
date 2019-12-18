const hbs = require('hbs');

const axios = require('axios');





hbs.registerHelper('clima1', async() => {
    let lat = -0.190000;
    let long = -78.500000;
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4645dc5c0f55f44b894afc86f2815ca6&units=metric`);
    return resp.data.main.temp;
})


// clima.getClima(-0.190000, -78.500000).then(console.log);

//-2.210000, -79.900002 guayaquill

//40.419998, -3.700000 madrid


//43.720001, 10.400000 pisa italia
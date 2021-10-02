const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      // CORS
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();

  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();

// Fetching API on Node Js
/*const axios = require('axios');
axios.get('http://localhost:5000/')
    .then((response)=> {
      console.log(response.status);
      console.log(response.message);
    })
    .catch(function(error) {
      // console.log(error);
    });
*/
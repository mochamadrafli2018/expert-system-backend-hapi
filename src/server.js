const Hapi = require('@hapi/hapi');
const routes = require('./routes');
// git push https://git.heroku.com/nested-api.git HEAD:master
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
  server.route(routes)
  await server.start();

  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();

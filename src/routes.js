const {DataProcessing} = require('./handlerPost');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      const response = h.response({
        status: 'success',
        message: 'Welcome to web app service to diagnostic eye disease',
      });
      response.code(200);
      return response;
    },
  },
  {
    method: 'POST',
    path: '/',
    handler: DataProcessing,
  },
];
module.exports = routes;

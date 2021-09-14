const {DataProcessing} = require('./handlerPost');
const routes = [
  {
    method: 'POST',
    path: '/diagnose',
    handler: DataProcessing,
  },
];
module.exports = routes;

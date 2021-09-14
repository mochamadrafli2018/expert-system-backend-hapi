const {getNotes, getNoteById} = require('./handlerGet')
const {addNote} = require('./handlerPost')

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: getNotes,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteById,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNote,
  },
]

module.exports = routes;
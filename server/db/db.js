const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const conn = require('knex')(config)

function getAllUsers(db = conn) {
  return db('users').select()
}

module.exports = {
  getAllUsers,
}

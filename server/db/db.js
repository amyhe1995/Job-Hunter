const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const conn = require('knex')(config)

function getAllUsers(db = conn) {
  return db('users').select()
}

function getOneUser(id, db = conn) {
  return db('users').select().where('id', id).first()
}

function addUser(data, db = conn) {
  return db('users').insert(data)
}

function delUser(id, db = conn) {
  return db('users').del().where('id', id)
}

module.exports = {
  getAllUsers,
  getOneUser,
  addUser,
  delUser,
}

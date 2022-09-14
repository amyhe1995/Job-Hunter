const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const conn = require('knex')(config)

function getAllUsers(db = conn) {
  return db('users').select()
}

function getOneUser(id, db = conn) {
  return db('users').select().where('auth0_id', id).first()
}

function addUser(data, db = conn) {
  return db('users').insert(data)
}

function userExists(username, db = conn) {
  return db('users')
    .where('username', username)
    .then((usersFound) => usersFound.length > 0)
}

function delUser(id, db = conn) {
  return db('users').del().where('id', id)
}

function updateUser(id, formData, db = conn) {
  return db('users').update(formData).where('id', id)
}

module.exports = {
  getAllUsers,
  getOneUser,
  addUser,
  userExists,
  delUser,
  updateUser,
}

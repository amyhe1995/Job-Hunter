exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('name')
    table.string('address')
    table.string('DOB')
    table.string('gender')
    table.string('email')
    table.integer('mobile')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}

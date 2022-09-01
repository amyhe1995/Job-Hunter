exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('name')
    table.string('fave_colour')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}

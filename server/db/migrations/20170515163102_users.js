exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('username')
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

exports.seed = async (knex) => {
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      name: 'Norman',
      fave_colour: '#6561e8'
    },
    {
      id: 2,
      name: 'Grace',
      fave_colour: '#bada55'
    }
  ])
}

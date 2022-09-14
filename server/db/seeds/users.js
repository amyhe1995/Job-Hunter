exports.seed = async (knex) => {
  await knex('users').del()
  await knex('users').insert([
    {
      auth0_id: 1,
      username: 'amy',
      address: 'tawa',
      DOB: '10/07/1995',
      gender: 'F',
      email: 'amy@gamil.com',
      mobile: 987776,
    },
    {
      auth0_id: 2,
      username: 'kate',
      address: 'wellington',
      DOB: '10/07/1995',
      gender: 'M',
      email: 'amy@gamil.com',
      mobile: 987776,
    },
    {
      auth0_id: 3,
      username: 'Emily',
      address: 'newtown',
      DOB: '10/07/1995',
      gender: 'F',
      email: 'amy@gamil.com',
      mobile: 987776,
    },
  ])
}

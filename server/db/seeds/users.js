exports.seed = async (knex) => {
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      name: 'amy',
      address: 'tawa',
      DOB: '10/07/1995',
      gender: 'F',
      email: 'amy@gamil.com',
      mobile: 987776,
    },
    {
      id: 2,
      name: 'kate',
      address: 'wellington',
      DOB: '10/07/1995',
      gender: 'M',
      email: 'amy@gamil.com',
      mobile: 987776,
    },
    {
      id: 3,
      name: 'Emily',
      address: 'newtown',
      DOB: '10/07/1995',
      gender: 'F',
      email: 'amy@gamil.com',
      mobile: 987776,
    },
  ])
}

import request from 'superagent'

export async function getUsers() {
  const resp = await request.get('/api/v1/users')
  return resp.body
}

export async function addNewUser(newUser) {
  const resp = await request.post('/api/v1/users').send(newUser)
  return resp.body
}

export async function deleteUser(id) {
  const resp = await request.delete('/api/v1/users/' + id)
  return resp.body
}

export async function updateUser(id, formData) {
  const resp = await request.patch('/api/v1/users/' + id).send(formData)
  console.log(id)
  return resp.body
}

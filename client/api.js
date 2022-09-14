import request from 'superagent'

export async function getUser(token) {
  // console.log(token)
  return request
    .get('/api/v1/users')
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}

export function addNewUser(user, token) {
  return request
    .post('/api/v1/users')
    .set('Authorization', `Bearer ${token}`)
    .send(user)
    .catch(logError)
}

export async function deleteUser(id) {
  const resp = await request.delete('/api/v1/users/' + id)
  return resp.body
}

export async function updateUser(id, formData) {
  const resp = await request.patch('/api/v1/users/' + id).send(formData)
  return resp.body
}

function logError(err) {
  if (err.response.text === 'Username Taken') {
    throw new Error('Username already taken - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error(
      'Only the user who added the fruit may update and delete it'
    )
  } else {
    // eslint-disable-next-line no-console
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}

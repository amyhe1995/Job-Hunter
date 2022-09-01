import request from 'superagent'

export async function getUsers () {
  const resp = await request.get('/api/v1/users')
  return resp.body
}

const express = require('express')
const router = express.Router()
const checkJwt = require('../auth0')
const db = require('../db/db')

// GET /api/v1/users
router.get('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub
  if (!auth0_id) {
    res.send(null)
  } else {
    db.getOneUser(auth0_id)
      .then((user) => {
        res.json(user ? user : null)
      })
      .catch((err) => res.status(500).send(err.message))
  }
})

// POST /api/v1/users
router.post('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub
  const { username, address, DOB, gender, email, mobile } = req.body
  const userDetails = {
    auth0_id,
    username,
    address,
    DOB,
    gender,
    email,
    mobile,
  }

  db.userExists(username)
    .then((usernameTaken) => {
      if (usernameTaken) throw new Error('Username Taken')
    })
    .then(() => db.addUser(userDetails))
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err)
      if (err.message === 'Username Taken') {
        res.status(403).send('Username Taken')
      } else {
        res.status(500).send(err.message)
      }
    })
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  await db.delUser(id)
  const users = await db.getAllUsers()
  res.json(users)
})

router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const { name, address, DOB, gender, email, mobile } = req.body
  const formData = {
    name,
    address,
    DOB,
    gender,
    email,
    mobile,
  }
  await db.updateUser(id, formData)
  const user = await db.getOneUser(id)
  res.json(user)
})
module.exports = router

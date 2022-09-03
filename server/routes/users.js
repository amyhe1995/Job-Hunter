const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', async (req, res) => {
  try {
    const users = await db.getAllUsers()
    res.json(users)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  const { name, address, DOB, gender, email, mobile } = req.body
  const data = {
    name,
    address,
    DOB,
    gender,
    email,
    mobile,
  }
  const idArr = await db.addUser(data)
  const id = idArr[0]
  const oneUser = await db.getOneUser(id)
  res.json(oneUser)
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  await db.delUser(id)
  const users = await db.getAllUsers()
  res.json(users)
})

module.exports = router

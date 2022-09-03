import React, { useState, useEffect } from 'react'
import { getUsers } from '../api'
import AddUser from './AddUser'
import User from './User'

function App() {
  const [users, setUsers] = useState([])

  useEffect(async () => {
    const arr = await getUsers()
    setUsers(arr)
  }, [users])

  return (
    <>
      <h1>React is running!</h1>
      <h2>Users:</h2>
      <ul>
        <User users={users} />
        <AddUser />
      </ul>
    </>
  )
}

export default App

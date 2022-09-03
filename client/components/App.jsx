import React, { useState, useEffect } from 'react'
import { getUsers } from '../api'
import User from './User'

function App() {
  const [users, setUsers] = useState([])

  useEffect(async () => {
    const arr = await getUsers()
    setUsers(arr)
  }, [])

  return (
    <>
      <h1>React is running!</h1>
      <h2>Users:</h2>
      <ul>
        <User users={users} />
      </ul>
    </>
  )
}

export default App

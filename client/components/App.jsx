import React, { useState, useEffect } from 'react'
import { getUsers } from '../api'

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
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default App

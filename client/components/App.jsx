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
    <div className="container">
      <h1>User Management System</h1>
      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} users={users} setUsers={setUsers} />
        ))}
        <AddUser />
      </ul>
    </div>
  )
}

export default App

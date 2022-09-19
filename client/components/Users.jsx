import React from 'react'
import { useSelector } from 'react-redux'

function Users() {
  const user = useSelector((state) => state.loggedInUser)

  return (
    <div className="container">
      <h1>User Management System</h1>
      {user && (
        <table>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Mobile</th>
          </tr>
          <tr>
            <th>{user.username}</th>
            <th>{user.address}</th>
            <th>{user.DOB}</th>
            <th>{user.gender}</th>
            <th>{user.mobile}</th>
          </tr>
        </table>
      )}
    </div>
  )
}

export default Users

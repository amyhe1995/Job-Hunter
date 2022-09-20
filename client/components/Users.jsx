import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
import { updateUser } from '../api'

function Users(props) {
  const id = props.id
  const userObj = props.user
  const [user, setUser] = useState('')
  useEffect(() => {
    setUser(userObj)
  }, [userObj])

  const [isEdit, setIsEdit] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    address: '',
    DOB: '',
    gender: '',
    mobile: '',
  })
  const handleEdit = () => {
    isEdit ? setIsEdit(false) : setIsEdit(true)
  }

  const handleType = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUserObj = await updateUser(id, formData)
    setUser(newUserObj)
    setIsEdit(false)
  }

  return (
    <div className="container">
      <h1>User Management System</h1>
      {!isEdit ? (
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
            {/* <button onClick={() => deleteUser(id)}>Delete</button> */}
            <button onClick={handleEdit}>Edit</button>
          </tr>
        </table>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Username:{user.username}</label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              defaultValue={user.address}
              onChange={handleType}
            />
          </label>
          <label>
            DOB
            <input
              type="text"
              name="DOB"
              defaultValue={user.DOB}
              onChange={handleType}
            />
          </label>
          <label>
            Gender
            <input
              type="text"
              name="gender"
              defaultValue={user.gender}
              onChange={handleType}
            />
          </label>
          <label>
            Mobile
            <input
              type="text"
              name="mobile"
              defaultValue={user.mobile}
              onChange={handleType}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}

export default Users

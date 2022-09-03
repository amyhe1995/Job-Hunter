import React, { useState } from 'react'
import { deleteUser, updateUser } from '../api'

function User(props) {
  const { id, name, address, DOB, gender, email, mobile } = props.user
  const [isEdit, setIsEdit] = useState(false)
  const [formData, setFormData] = useState({
    name: name,
    address: address,
    DOB: DOB,
    gender: gender,
    email: email,
    mobile: mobile,
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
    props.setUsers([...props.users, { ...props.user, newUserObj }])
    //reset props
    setIsEdit(false)
  }

  return (
    <>
      {!isEdit ? (
        <div>
          <h4>{name}</h4>
          <p>{address}</p>
          <p>{DOB}</p>
          <p>{gender}</p>
          <p>{email}</p>
          <p>{mobile}</p>
          <button onClick={() => deleteUser(id)}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              defaultValue={name}
              onChange={handleType}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              defaultValue={address}
              onChange={handleType}
            />
          </label>
          <label>
            DOB
            <input
              type="text"
              name="DOB"
              defaultValue={DOB}
              onChange={handleType}
            />
          </label>
          <label>
            Gender
            <input
              type="text"
              name="gender"
              defaultValue={gender}
              onChange={handleType}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              defaultValue={email}
              onChange={handleType}
            />
          </label>
          <label>
            Mobile
            <input
              type="text"
              name="mobile"
              defaultValue={mobile}
              onChange={handleType}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  )
}

export default User

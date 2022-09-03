import React, { useState } from 'react'
import { addNewUser } from '../api'

function AddUser() {
  const [userForm, setUserForm] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = await addNewUser(userForm)
    setUserForm(newUser)
  }

  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" onChange={handleChange} />
        </label>
        <label>
          DOB:
          <input type="text" name="DOB" onChange={handleChange} />
        </label>
        <label>
          gender:
          <input type="text" name="gender" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <label>
          Mobile:
          <input type="text" name="mobile" onChange={handleChange} />
        </label>
        <button> Submit</button>
      </form>
    </div>
  )
}

export default AddUser

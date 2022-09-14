import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Error, GridForm, ColOne, ColTwoText, Button } from './Styled'

import { addNewUser } from '../api'
import { updateLoggedInUser } from '../actions/loggedInUser'

function Register() {
  const user = useSelector((state) => state.loggedInUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    username: '',
    address: '',
    DOB: '',
    gender: '',
    email: '',
    mobile: '',
  })
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (user.username) navigate('/')
  }, [user])

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const userInfo = {
      auth0Id: user.auth0Id,
      email: user.email,
      ...form,
    }
    addNewUser(userInfo, user.token)
      .then(() => dispatch(updateLoggedInUser(userInfo)))
      .catch((err) => setErrorMsg(err.message))
  }

  const hideError = () => {
    setErrorMsg('')
  }

  return (
    <>
      <h2>Complete profile set up</h2>
      {errorMsg && <Error onClick={hideError}>Error: {errorMsg}</Error>}
      <GridForm onSubmit={handleSubmit}>
        <ColOne htmlFor="username">Username:</ColOne>
        <ColTwoText
          type="text"
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <ColOne htmlFor="address">Address:</ColOne>
        <ColTwoText
          type="text"
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
        <ColOne htmlFor="DOB">DOB:</ColOne>
        <ColTwoText
          type="text"
          id="DOB"
          name="DOB"
          value={form.DOB}
          onChange={handleChange}
        />
        <ColOne htmlFor="gender">Gender:</ColOne>
        <ColTwoText
          type="text"
          id="gender"
          name="gender"
          value={form.gender}
          onChange={handleChange}
        />
        <ColOne htmlFor="mobile">Mobile:</ColOne>
        <ColTwoText
          type="text"
          id="mobile"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
        />

        <Button
          disabled={
            !(
              form.username &&
              form.address &&
              form.DOB &&
              form.gender &&
              form.mobile
            )
          }
        >
          Save Profile
        </Button>
      </GridForm>
    </>
  )
}

export default Register

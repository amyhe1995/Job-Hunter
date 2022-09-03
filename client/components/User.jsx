import React from 'react'

function User(props) {
  return (
    <>
      {props.users.map((x) => (
        <div key={x.id}>
          <h4> Name: {x.name}</h4>
          <p>Address: {x.address}</p>
          <p>Gender: {x.gender}</p>
          <p>Email: {x.email}</p>
          <p>Mobile: {x.mobile}</p>
        </div>
      ))}
    </>
  )
}

export default User

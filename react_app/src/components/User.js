import React from 'react'

const User = ({user}) =>
  <div className='name' key={user.id} >
    <h4>{user.email}</h4>
  </div>

export default User

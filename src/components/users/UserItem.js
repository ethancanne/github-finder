import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const UserItem = ({user}) => {
  const {login, avatar_url} = user

  return (
    <div
      className='card'
      style={{width: '200px', margin: '30px', padding: '30px'}}>
      <div className='card-body text-center'>
        <img className='card-img-top rounded-circle' src={avatar_url} alt='' />
        <h1
          className='card-title'
          style={{marginTop: '10px', fontSize: '20px', width: '100%'}}>
          {login}
        </h1>
        <Link to={`/user/${login}`} class='btn bg-custom text-white'>
          More
        </Link>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem

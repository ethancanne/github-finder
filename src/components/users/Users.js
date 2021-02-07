import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'

const Users = props => {
  const githubContext = useContext(GithubContext)

  console.log(githubContext.users)
  if (githubContext.loading) {
    return <Spinner />
  } else {
    return (
      <div className='d-flex flex-wrap justify-content-center'>
        {githubContext.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default Users

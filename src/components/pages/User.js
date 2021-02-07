import React, {useEffect, useContext} from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext'

const User = ({match}) => {
  const githubContext = useContext(GithubContext)

  const {user, loading, repos} = githubContext

  useEffect(() => {
    githubContext.getUser(match.params.login)
    githubContext.getUserRepos(match.params.login)
  }, [])

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    company,
    public_repos,
    public_gists,
    hireable,
  } = user

  if (loading) return <Spinner />

  return (
    <>
      <Link to='/' className='btn btn-light mr-4'>
        Back to Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card mt-4'>
        <div className='p-4'>
          <div className='row'>
            <div className='col text-center'>
              <img
                src={avatar_url}
                alt='img'
                className='rounded-circle'
                style={{width: '100px'}}
              />
              <h1>{name}</h1>
              <p>{location}</p>
            </div>
            <div className='col'>
              {bio && (
                <>
                  <h3>Bio:</h3> <p>{bio}</p>
                </>
              )}

              <a href={html_url} className='btn btn-dark p-2 m-4'>
                Visit GitHub Profile
              </a>

              <ul>
                {login && (
                  <li>
                    <strong> Username: </strong>
                    {login}
                  </li>
                )}

                {blog && (
                  <li>
                    <strong> Website: </strong>
                    <a href={blog}>{blog}</a>
                  </li>
                )}

                {company && (
                  <li>
                    <strong> Company: </strong>
                    {company}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='card text-center mt-4 p-4 d-inline-block w-100 mt-4'>
        <div className='badge badge-primary w-10 m-2 p-2'>
          Followers: {followers}
        </div>
        <div className='badge badge-success w-10 m-2 p-2'>
          Following: {following}
        </div>
        <div className='badge badge-danger w-10 m-2 p-2'>
          Public Repos: {public_repos}
        </div>
        <div className='badge badge-dark w-10 m-2 p-2'>
          Public Gists: {public_gists}
        </div>
      </div>
      <Repos repos={repos} loading={loading} />
    </>
  )
}

export default User

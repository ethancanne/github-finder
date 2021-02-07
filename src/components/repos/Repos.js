import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'
import GithubContext from '../../context/github/githubContext'

function Repos() {
  const githubContext = useContext(GithubContext)

  return (
    <>
      <h3 className='mt-4'>Repos</h3>
      <div className='card'>
        {githubContext.userRepos.map(repo => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  )
}

export default Repos

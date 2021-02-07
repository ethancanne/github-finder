import React, {useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const [text, setText] = useState('')

  const onChange = e => setText(e.target.value)
  const onSubmit = e => {
    e.preventDefault()
    if (text === '') {
      return alertContext.setAlert('Please enter something', 'danger')
    }
    githubContext.searchUsers(text)
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmit} style={{marginBottom: '20px'}}>
          <input
            type='text'
            name='text'
            className='form-text'
            placeholder='Ethan'
            style={{width: '100%'}}
            onChange={onChange}
            value={text}
          />
          <input
            type='submit'
            value='Search'
            className='btn form-btn btn-dark'
          />
        </form>

        {githubContext.users.length !== 0 && (
          <button
            className='btn btn-block btn-light'
            onClick={() => {
              githubContext.clearUsers()
              setText('')
            }}>
            Clear
          </button>
        )}
      </div>
    </>
  )
}

export default Search

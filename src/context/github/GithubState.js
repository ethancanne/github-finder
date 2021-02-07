import React, {useReducer} from 'react'
import axios from 'axios'
import GithubReducer from './githubReducer'
import GithubContext from './githubContext'

import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from '../types'

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    userRepos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  //ACTIONS
  //Search users
  const searchUsers = async text => {
    setLoading()

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    })
  }

  //Set Loading
  const setLoading = () => dispatch({type: SET_LOADING})

  //get a specific users
  const getUser = async username => {
    setLoading()

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    dispatch({
      type: GET_USER,
      payload: res.data,
    })
  }

  //Get user repos
  const getUserRepos = async username => {
    setLoading()

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    })
  }

  //Clear users from state
  const clearUsers = () => dispatch({type: CLEAR_USERS})

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        userRepos: state.userRepos,
        loading: state.loading,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos,
      }}>
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState

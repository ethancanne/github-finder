//GithubReducer actually changes the state based on the data received from the payload provided in the dispatch functions in GithubState

import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from '../types'

//State = state before dispatch
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      }

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      }

    case GET_REPOS:
      return {
        ...state,
        userRepos: action.payload,
        loading: false,
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

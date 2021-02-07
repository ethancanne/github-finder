import {REMOVE_ALERT, SET_ALERT} from '../types'

//State = state before dispatch
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload
    case REMOVE_ALERT:
      return null

    default:
      return state
  }
}

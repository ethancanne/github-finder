import React, {useReducer} from 'react'
import AlertReducer from './alertReducer'
import AlertContext from './alertContext'

import {SET_ALERT, REMOVE_ALERT} from '../types'

const AlertState = props => {
  const initialState = {
    alert: null,
  }

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  //ACTIONS
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        type,
      },
    })

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      })
    }, 5000)
  }

  const closeAlert = () => {
    dispatch({
      type: REMOVE_ALERT,
    })
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
        closeAlert,
      }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState

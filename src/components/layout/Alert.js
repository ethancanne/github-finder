import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
  const alertContext = useContext(AlertContext)

  const {alert, closeAlert} = alertContext
  return (
    alert.alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i style={{marginRight: '10px'}} className='fas fa-info-circle'></i>
        {alert.msg}
        <a
          className=''
          style={{float: 'right', cursor: 'pointer'}}
          onClick={closeAlert}>
          Clear
        </a>
      </div>
    )
  )
}

export default Alert

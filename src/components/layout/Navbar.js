import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand-lg bg-custom text-white position-fixed fixed-top rounded-bottom'>
      <i className={props.icon} style={{ margin: '10px' }} />
      <a href='https://github.com' className='navbar-brand text-white'>
        {props.title}
      </a>

      <ul className='nav'>
        <li className='nav-item'>
          <Link to='/' className='nav-link text-white'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link text-white'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Navbar

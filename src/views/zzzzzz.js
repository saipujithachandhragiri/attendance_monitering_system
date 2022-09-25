import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './zzzzzz.css'

const Zzzzzz = (props) => {
  return (
    <div className="zzzzzz-container">
      <Helmet>
        <title>zzzzzz - Attendence</title>
        <meta property="og:title" content="zzzzzz - Attendence" />
      </Helmet>
      <div className="zzzzzz-container1">
        <div className="zzzzzz-container2">
          <span className="zzzzzz-text">404 Page Under MainTainance</span>
          <Link to="/" className="zzzzzz-navlink button">
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Zzzzzz

import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './z-attendence-submitted.css'

const ZAttendenceSubmitted = (props) => {
  return (
    <div className="z-attendence-submitted-container">
      <Helmet>
        <title>z-Attendence-Submitted - Attendence</title>
        <meta
          property="og:title"
          content="z-Attendence-Submitted - Attendence"
        />
      </Helmet>
      <div className="z-attendence-submitted-container1">
        <span className="z-attendence-submitted-text">
          Attendance Submitted
        </span>
        <Link to="/" className="z-attendence-submitted-navlink button">
          Home
        </Link>
      </div>
    </div>
  )
}

export default ZAttendenceSubmitted

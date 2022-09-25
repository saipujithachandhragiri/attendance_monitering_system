import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './d-teacxher-classroom.css'

const DTeacxherClassroom = (props) => {
  return (
    <div className="d-teacxher-classroom-container">
      <Helmet>
        <title>D-Teacxher-Classroom - Attendence</title>
        <meta property="og:title" content="D-Teacxher-Classroom - Attendence" />
      </Helmet>
      <div className="d-teacxher-classroom-container1">
        <form className="d-teacxher-classroom-form">
          <Link to="/zzzzzz" className="d-teacxher-classroom-button button">
            Genrate Attendence
          </Link>
        </form>
        <form className="d-teacxher-classroom-form1">
          <span className="d-teacxher-classroom-text">Class Details</span>
          <span className="d-teacxher-classroom-text1">
            Total Lectures - 20
          </span>
          <Link to="/zzzzzz" className="d-teacxher-classroom-button1 button">
            View Details
          </Link>
        </form>
      </div>
    </div>
  )
}

export default DTeacxherClassroom

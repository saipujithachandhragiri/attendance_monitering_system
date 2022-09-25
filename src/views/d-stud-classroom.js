import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './d-stud-classroom.css'

const DStudClassroom = (props) => {
  return (
    <div className="d-stud-classroom-container">
      <Helmet>
        <title>D-Stud-Classroom - Attendence</title>
        <meta property="og:title" content="D-Stud-Classroom - Attendence" />
      </Helmet>
      <form className="d-stud-classroom-form">
        <input
          type="number"
          placeholder="Enter Roll Number"
          className="d-stud-classroom-textinput input"
        />
        <Link
          to="/z-attendence-submitted"
          className="d-stud-classroom-button button"
        >
          Done
        </Link>
        <span className="d-stud-classroom-text">Mark Attendance</span>
      </form>
      <form className="d-stud-classroom-form1">
        <span className="d-stud-classroom-text1">Your Attendence</span>
        <span className="d-stud-classroom-text2">Total Lectures - 20</span>
        <span className="d-stud-classroom-text3">You Attended - 18 </span>
      </form>
    </div>
  )
}

export default DStudClassroom

import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './b-login-teacher.css'

const BLoginTeacher = (props) => {
  return (
    <div className="b-login-teacher-container">
      <Helmet>
        <title>B-Login-Teacher - Attendence</title>
        <meta property="og:title" content="B-Login-Teacher - Attendence" />
      </Helmet>
      <div className="b-login-teacher-container1">
        <div className="b-login-teacher-pricing-card">
          <h1 className="b-login-teacher-text">Login</h1>
          <input
            type="email"
            placeholder="Enter Your Registered Email"
            className="b-login-teacher-textinput input"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="b-login-teacher-textinput1 input"
          />
          <label className="b-login-teacher-text1">Passwword</label>
          <label className="b-login-teacher-text2">Username</label>
          <Link
            to="/c-teacher-profile"
            className="b-login-teacher-navlink button"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BLoginTeacher

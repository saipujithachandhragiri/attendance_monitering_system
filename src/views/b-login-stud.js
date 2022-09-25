import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './b-login-stud.css'

const BLoginStud = (props) => {
  return (
    <div className="b-login-stud-container">
      <Helmet>
        <title>B-Login-Stud - Attendence</title>
        <meta property="og:title" content="B-Login-Stud - Attendence" />
      </Helmet>
      <div className="b-login-stud-pricing-card">
        <h1 className="b-login-stud-text">Login</h1>
        <input
          type="email"
          placeholder="Enter Your Registered Email"
          className="b-login-stud-textinput input"
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="b-login-stud-textinput1 input"
        />
        <label className="b-login-stud-text1">Passwword</label>
        <label className="b-login-stud-text2">Username</label>
        <Link to="/c-student-profile" className="b-login-stud-navlink button">
          SIGN IN
        </Link>
      </div>
    </div>
  )
}

export default BLoginStud

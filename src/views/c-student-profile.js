import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './c-student-profile.css'

const CStudentProfile = (props) => {
  return (
    <div className="c-student-profile-container">
      <Helmet>
        <title>C-Student-Profile - Attendence</title>
        <meta property="og:title" content="C-Student-Profile - Attendence" />
      </Helmet>
      <form className="c-student-profile-form">
        <form className="c-student-profile-profile-border">
          <span className="c-student-profile-text">My Profile</span>
          <form className="c-student-profile-profile-text">
            <span className="c-student-profile-text01">
              Name : Students Name
            </span>
            <span className="c-student-profile-text02">
              Email id : Registered Mail
            </span>
            <span className="c-student-profile-text03">
              Password :  ~~~~~~~
            </span>
            <svg viewBox="0 0 1024 1024" className="c-student-profile-icon">
              <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
            </svg>
          </form>
          <img
            alt="image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/5/59/20201213175628%21User-avatar.svg/120px-User-avatar.svg.png"
            className="c-student-profile-image"
          />
          <span className="c-student-profile-text04">My Attendance Rooms</span>
        </form>
        <form className="c-student-profile-main1">
          <form className="c-student-profile-class1">
            <span className="c-student-profile-text05">Class 1</span>
            <svg viewBox="0 0 1152 1024" className="c-student-profile-icon02">
              <path d="M224 128h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM192 320h-128v-64h128v64z"></path>
              <path d="M544 128h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM512 320h-128v-64h128v64z"></path>
              <path d="M765.088 177.48l-171.464 86.394c-15.716 7.918-22.096 27.258-14.178 42.976l287.978 571.548c7.918 15.718 27.258 22.098 42.976 14.178l171.464-86.392c15.716-7.92 22.096-27.26 14.178-42.974l-287.978-571.55c-7.92-15.718-27.26-22.1-42.976-14.18z"></path>
            </svg>
            <Link
              to="/d-stud-classroom"
              className="c-student-profile-navlink button"
            >
              Open
            </Link>
          </form>
          <form className="c-student-profile-class2">
            <span className="c-student-profile-text06">Class 1</span>
            <svg viewBox="0 0 1152 1024" className="c-student-profile-icon06">
              <path d="M224 128h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM192 320h-128v-64h128v64z"></path>
              <path d="M544 128h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM512 320h-128v-64h128v64z"></path>
              <path d="M765.088 177.48l-171.464 86.394c-15.716 7.918-22.096 27.258-14.178 42.976l287.978 571.548c7.918 15.718 27.258 22.098 42.976 14.178l171.464-86.392c15.716-7.92 22.096-27.26 14.178-42.974l-287.978-571.55c-7.92-15.718-27.26-22.1-42.976-14.18z"></path>
            </svg>
            <Link
              to="/d-stud-classroom"
              className="c-student-profile-navlink1 button"
            >
              Open
            </Link>
          </form>
        </form>
        <form className="c-student-profile-main2">
          <form className="c-student-profile-class11">
            <span className="c-student-profile-text07">Class 3</span>
            <svg viewBox="0 0 1152 1024" className="c-student-profile-icon10">
              <path d="M224 128h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM192 320h-128v-64h128v64z"></path>
              <path d="M544 128h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM512 320h-128v-64h128v64z"></path>
              <path d="M765.088 177.48l-171.464 86.394c-15.716 7.918-22.096 27.258-14.178 42.976l287.978 571.548c7.918 15.718 27.258 22.098 42.976 14.178l171.464-86.392c15.716-7.92 22.096-27.26 14.178-42.974l-287.978-571.55c-7.92-15.718-27.26-22.1-42.976-14.18z"></path>
            </svg>
            <Link
              to="/d-stud-classroom"
              className="c-student-profile-navlink2 button"
            >
              Open
            </Link>
          </form>
          <form className="c-student-profile-class21">
            <span className="c-student-profile-text08">Class 4</span>
            <svg viewBox="0 0 1152 1024" className="c-student-profile-icon14">
              <path d="M224 128h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM192 320h-128v-64h128v64z"></path>
              <path d="M544 128h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM512 320h-128v-64h128v64z"></path>
              <path d="M765.088 177.48l-171.464 86.394c-15.716 7.918-22.096 27.258-14.178 42.976l287.978 571.548c7.918 15.718 27.258 22.098 42.976 14.178l171.464-86.392c15.716-7.92 22.096-27.26 14.178-42.974l-287.978-571.55c-7.92-15.718-27.26-22.1-42.976-14.18z"></path>
            </svg>
            <Link
              to="/d-stud-classroom"
              className="c-student-profile-navlink3 button"
            >
              Open
            </Link>
          </form>
        </form>
        <form className="c-student-profile-main3">
          <form className="c-student-profile-class12">
            <span className="c-student-profile-text09">
              <span>Class 5</span>
              <br></br>
            </span>
            <svg viewBox="0 0 1152 1024" className="c-student-profile-icon18">
              <path d="M224 128h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM192 320h-128v-64h128v64z"></path>
              <path d="M544 128h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM512 320h-128v-64h128v64z"></path>
              <path d="M765.088 177.48l-171.464 86.394c-15.716 7.918-22.096 27.258-14.178 42.976l287.978 571.548c7.918 15.718 27.258 22.098 42.976 14.178l171.464-86.392c15.716-7.92 22.096-27.26 14.178-42.974l-287.978-571.55c-7.92-15.718-27.26-22.1-42.976-14.18z"></path>
            </svg>
            <Link
              to="/d-stud-classroom"
              className="c-student-profile-navlink4 button"
            >
              Open
            </Link>
          </form>
          <form className="c-student-profile-class22">
            <Link to="/zzzzzz" className="c-student-profile-navlink5 button">
              Add Class
            </Link>
          </form>
        </form>
      </form>
    </div>
  )
}

export default CStudentProfile

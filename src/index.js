import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import DStudClassroom from './views/d-stud-classroom'
import CStudentProfile from './views/c-student-profile'
import DTeacxherClassroom from './views/d-teacxher-classroom'
import AHome from './views/a-home'
import ZAttendenceSubmitted from './views/z-attendence-submitted'
import BLoginTeacher from './views/b-login-teacher'
import Zzzzzz from './views/zzzzzz'
import CTeacherProfile from './views/c-teacher-profile'
import BLoginStud from './views/b-login-stud'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={DStudClassroom} exact path="/d-stud-classroom" />
        <Route component={CStudentProfile} exact path="/c-student-profile" />
        <Route
          component={DTeacxherClassroom}
          exact
          path="/d-teacxher-classroom"
        />
        <Route component={AHome} exact path="/" />
        <Route
          component={ZAttendenceSubmitted}
          exact
          path="/z-attendence-submitted"
        />
        <Route component={BLoginTeacher} exact path="/b-login-teacher" />
        <Route component={Zzzzzz} exact path="/zzzzzz" />
        <Route component={CTeacherProfile} exact path="/c-teacher-profile" />
        <Route component={BLoginStud} exact path="/b-login-stud" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

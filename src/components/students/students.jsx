import React from "react";
import Student from "./student/student";
import "./student/student.css";
import PropTypes from 'prop-types'

const Students = (props) => {
  let students = props.studentsList.map((student, index) =>
    <Student
      key={index}
      id={student.id}
      name={student.name}
      classNumber={student.classNumber}
      phoneNumber={student.phoneNumber}
      email={student.email}
      nameChanged={(event) => props.nameChanged(event, student.id)}
      classChanged={(event) => props.classChanged(event, student.id)}
      phoneNumberChanged={(event) =>
        props.phoneNumberChanged(event, student.id)
      }
      emailChanged={(event) => props.emailChanged(event, student.id)}
      deleted={() => props.deleted(student.id)}
    />
  )
  if (props.toggle) {
    return (
      <div className="student-section">
        {
          students
        }

      </div>
    );
  }
  return students

};
export default React.memo(Students);
Students.prototype = {
  studentsList: PropTypes.array.isRequired,
  nameChanged: PropTypes.func.isRequired,
  deleted: PropTypes.func.isRequired,
  classChanged: PropTypes.func.isRequired,
  phoneNumberChanged: PropTypes.func.isRequired,
  emailChanged: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,

}

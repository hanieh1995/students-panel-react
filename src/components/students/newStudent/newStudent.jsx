import React from "react";
import classes from "./newStudent.module.css";
import Button from "../../UI/button/button";
import PropTypes from 'prop-types';
import Wrapper from '../../hoc/Wrapper';
import WithClss from "../../hoc/WithClass";

const NewStudent = (props) => {
  const { studentName, studentClass, studentPhoneNumber, studentEmail } = props;
  const {
    studentNameHandler,
    studentClassHandler,
    studentEmailHandler,
    studentPhoneNumberHandler,
    addStudent
  } = props;
  return (
    <Wrapper>
      <h1>اضافه کردن دانش اموز</h1>
      <label>نام و نام خانوادگی</label>
      <input type="text" value={studentName} onChange={studentNameHandler} />
      <label>کلاس</label>
      <input type="number" value={studentClass} onChange={studentClassHandler}
      />
      <label>شماره تلفن</label>
      <input type="number" value={studentPhoneNumber} onChange={studentPhoneNumberHandler} />
      <label>ایمیل</label>
      <input type="email" value={studentEmail} onChange={studentEmailHandler} />
      <Button clicked={addStudent} btnType="success">
        اضافه کردن
      </Button>
    </Wrapper>
  );
};
export default React.memo(WithClss(NewStudent, classes.newStudent));
NewStudent.prototype = {
  studentName: PropTypes.string.isRequired,
  studentClass: PropTypes.number.isRequired,
  studentPhoneNumber: PropTypes.number.isRequired,
  studentEmail: PropTypes.string.isRequired,
  studentNameHandler: PropTypes.func.isRequired,
  studentClassHandler: PropTypes.func.isRequired,
  studentEmailHandler: PropTypes.func.isRequired,
  studentPhoneNumberHandler: PropTypes.func.isRequired,
  addStudent: PropTypes.func.isRequired
}

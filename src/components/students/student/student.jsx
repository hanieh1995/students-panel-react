import React from "react";
import "./student.css";
import Button from "../../UI/button/button";
import PropTypes from 'prop-types'

const Student = (props) => {
  return (
    <div className="student">
      <label> شماره دانش آموزی : {props.id}</label>
      <label> نام و نام خانوادگی </label>
      <input type="text" value={props.name} onChange={props.nameChanged} />

      <label> کلاس </label>
      <input
        type="text"
        value={props.classNumber}
        onChange={props.classChanged}
      />

      <label> شماره تلفن </label>
      <input
        type="number"
        value={props.phoneNumber}
        onChange={props.phoneNumberChanged}
      />

      <label> ایمیل </label>
      <input type="email" value={props.email} onChange={props.emailChanged} />

      <label>
        <Button btnType="danger" clicked={props.deleted}>
          حذف
        </Button>
      </label>
    </div>
  );
};
export default React.memo(Student) ;
Student.prototype={
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  classNumber: PropTypes.number.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  deleted: PropTypes.func.isRequired
}


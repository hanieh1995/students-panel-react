import React, { useState, useEffect, useRef } from "react";
import Students from "./components/students/students";
import Button from "./components/UI/button/button";
import NewStudent from "./components/students/newStudent/newStudent";
import Toolbar from "./Container/Header/Toolbar/Toolbar";
import "./App.css";

function App() {
  const inputEl = useRef(null);
  const [studentsState, setStudents] = useState([
    {
      id: 0,
      name: "Mahdi",
      classNumber: 204,
      phoneNumber: 1234564,
      email: "reactapp.ir@gmail.com",
    },
    {
      id: 1,
      name: "Alireza",
      classNumber: 244,
      phoneNumber: 1234789,
      email: "reactapp.ir@gmail.com",
    },
    {
      id: 2,
      name: "Ali",
      classNumber: 284,
      phoneNumber: 1234159,
      email: "reactapp.ir@gmail.com",
    },
    {
      id: 3,
      name: "Amir",
      classNumber: 274,
      phoneNumber: 1234,
      email: "reactapp.ir@gmail.com",
    },
  ]);
  const [toggle, setToggle] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [arryHolder, setArrayHolder] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentPhoneNumber, serStudentPhoneNumber] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  useEffect(() => {
    setArrayHolder(studentsState);
    inputEl.current.focus();
  }, [studentClass]);

  const nameChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    const student = { ...studentsState[studentIndex] };
    student.name = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };

  const classChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    const student = { ...studentsState[studentIndex] };
    student.classNumber = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };

  const phoneNumberChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    const student = { ...studentsState[studentIndex] };
    student.phoneNumber = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };

  const emailChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    const student = { ...studentsState[studentIndex] };
    student.email = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };

  const deleteStudent = (id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    const students = [...studentsState];
    students.splice(studentIndex, 1);
    setStudents(students);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const searchFilterFunction = (event) => {
    const itemData = arryHolder.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = event.target.value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setStudents(itemData);
    setSearchBarValue(event.target.value);
  };

  const studentNameHandler = (event) => {
    setStudentName(event.target.value);
  };

  const studentClassHandler = (event) => {
    setStudentClass(event.target.value);
  };

  const studentEmailHandler = (event) => {
    setStudentEmail(event.target.value);
  };

  const studentPhoneNumberHandler = (event) => {
    serStudentPhoneNumber(event.target.value);
  };

  const addStudent = () => {
    const newStudentsState = [...studentsState];
    newStudentsState.push({
      'id': studentsState.length,
      'name': studentName,
      'classNumber': studentClass,
      'email': studentEmail
    });
    setStudents(newStudentsState);
    setStudentClass('');
    setStudentEmail('');
    setStudentName('');
    serStudentPhoneNumber('');
  }

  const executeScroll = ()=>{
    window.scrollTo(0,inputEl.current.offsetTop);
  }

  return (
    <div className="App">
      <Toolbar/>
      <NewStudent
        studentName={studentName}
        studentClass={studentClass}
        studentEmail={studentEmail}
        studentPhoneNumber={studentPhoneNumber}
        studentNameHandler={studentNameHandler}
        studentClassHandler={studentClassHandler}
        studentEmailHandler={studentEmailHandler}
        studentPhoneNumberHandler={studentPhoneNumberHandler}
        addStudent={addStudent}
      />
      <input
        type="text"
        value={searchBarValue}
        onChange={searchFilterFunction}
        ref={inputEl}
      />
      <Button btnType="success" clicked={toggleHandler}>
        تغیر وضعیت نمایش
      </Button>
      <Students
        studentsList={studentsState}
        nameChanged={nameChangeHandler}
        classChanged={classChangeHandler}
        phoneNumberChanged={phoneNumberChangeHandler}
        emailChanged={emailChangeHandler}
        deleted={deleteStudent}
        toggle={toggle}
      />
      <Button btnType="danger" clicked={executeScroll}>
        click to scroll
      </Button>
    </div>
  );
}

export default App;

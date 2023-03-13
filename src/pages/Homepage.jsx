import React, { useEffect, useState, useRef } from "react";
import Students from "../components/students/students";
import Button from "../components/UI/button/button";
const HomePage = (props) => {

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
    const [arryHolder, setArrayHolder] = useState([]);
    const [searchBarValue, setSearchBarValue] = useState("");
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        setArrayHolder(studentsState);
        // inputEl.current.focus();
    }, []);

    const inputEl = useRef(null);

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

    return (
        <>
            <input
                type="text"
                value={searchBarValue}
                onChange={searchFilterFunction}
                ref={inputEl}
                style={{ marginTop: "80px" }}
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
        </>
    )
}
export default HomePage;
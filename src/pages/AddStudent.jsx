import React  from "react";
import NewStudent from "../components/students/newStudent/newStudent";
import { useState ,useEffect} from "react";
const AddStudent = (props) =>{
    useEffect(()=>{
        console.log(props);
    },[]);

    const [studentName, setStudentName] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [studentPhoneNumber, serStudentPhoneNumber] = useState("");
    const [studentEmail, setStudentEmail] = useState("");

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
 alert('studentadded')
    }


    return(
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
    )
}
export default AddStudent;
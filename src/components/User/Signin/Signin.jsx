import React from "react";
import Logo from '../../../assets/imges/1.png'
import Button from "../../UI/button/button";
import "./Signin.css";
const SignIn = (props) => {
    return (
        <>
            <img src={Logo} alt="reactapp.ir" className="img"/>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <Button>
                ورود
            </Button>
        </>
    )
}
export default SignIn;
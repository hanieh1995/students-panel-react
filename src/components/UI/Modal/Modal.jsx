import React from "react";
import "./Modal.css"
import Backdrop from "../Backdrop/Backdrop";
const Modal = (props)=>{
    return(
        <>
            <Backdrop show={props.show} modalClosed={props.modalClosed}/>
        <div className="Modal"
            style={{transform:props.show ? 'translateX(0)' : 'translateX(-100vw)',
            opacity:props.show?'1':'0'}}
        >
            {props.children}
        </div>
        </>
    )
}
export default Modal;
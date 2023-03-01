import React from "react";
import imgLogo from '../../assets/imges/1.png';
import './Logo.css';
const Logo = (props)=>{
    return(
        <div className="Logo" style={{height:props.height}}>
            <img src={imgLogo} alt="reactapp.ir logo"/>
        </div>
    )
}
export default React.memo(Logo) ;
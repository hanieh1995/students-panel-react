import React from "react";
import './Menuitem.css';
import { NavLink } from "react-router-dom";
const MenuItem = (props) => {

    return(
    <li className="MenuItem">
            <NavLink to={props.link} exact activeStyle={{color:'red', cursor:'pointer'}} activeClassName='active'>
            {props.children}
        </NavLink>
    </li>
    )
}
export default MenuItem;
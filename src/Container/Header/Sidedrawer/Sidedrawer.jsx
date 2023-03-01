import React from "react";
import Logo from "../../../components/Logo/Logo";
import Button from "../../../components/UI/button/button";
import MenuItems from "../Menuitems/Menuitems";
import './Sidedrawer.css';
import Backdrop from "../../../components/UI/Backdrop/Backdrop";
import prop from "prop";
const Sidedrawer = (props) => {
    let classes = ['Sidedrawer','Close'];
    if(props.show){
        classes = ['Sidedrawer','Open'];
    }
    return (
        <>
            <Backdrop show={props.show} modalClosed={props.CloseDrawer}/>
        <div className={classes.join(' ')}>
            <Logo height="15%" />
            <nav>
                <MenuItems />
            </nav>
            <div className="boxButton">
            <Button btnType='success' clicked={()=>{alert('signin open')}}>ورود و ثبت نام  </Button>
            </div>
        </div>
        </>
    )
}
export default Sidedrawer;
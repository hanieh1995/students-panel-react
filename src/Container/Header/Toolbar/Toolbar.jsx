import React, { useState } from "react";
import './Toolbar.css';
import Logo from "../../../components/Logo/Logo";
import MenuItems from "../Menuitems/Menuitems";
import Button from "../../../components/UI/button/button";
import Modal from "../../../components/UI/Modal/Modal";
import SignIn from "../../../components/User/Signin/Signin";
import Sidedrawer from "../Sidedrawer/Sidedrawer";
const Toolbar = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [openSideDrawer,setOpenSideDrawer] = useState(false);
    const modalHandler = () => {
        setShowModal(true)
    }
    const modalClosed = () => {
        setShowModal(false)
    }
    const SideDrawerHandler = ()=>{
        setOpenSideDrawer(true)
    }
    const CloseDrawer = ()=>{
        setOpenSideDrawer(false)
    }
    return (
        <header className="Toolbar">
            <Sidedrawer show={openSideDrawer} CloseDrawer={CloseDrawer}/>
            <div onClick={SideDrawerHandler}> icon </div>
            <div className="showNav">
                <Logo height="100%" />
                <nav>
                    <MenuItems />
                </nav>
                <Button btnType="danger" clicked={modalHandler} >ورود و ثبت نام</Button>
            </div>

            <Modal show={showModal} modalClosed={modalClosed}>
                <SignIn />
            </Modal>

        </header>
    )
}
export default Toolbar;
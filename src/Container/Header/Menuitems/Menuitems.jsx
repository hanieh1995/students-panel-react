import React from "react";
import './Menuitems.css';
import MenuItem from "./Menuitem/Menuitem";
const MenuItems = () => {
    return (
        <ul className="MenuItems">
            <MenuItem link="/" >
                صفحه اصلی
            </MenuItem>
            <MenuItem link={{
                pathname: "/add-student",
                search:"?sort-name",
                hash:"#the-hash",
                state:{fromDashboard:true}
                }}  >
                اضافه کردن دانش آموزان
            </MenuItem>

        </ul>
    )
}
export default MenuItems;
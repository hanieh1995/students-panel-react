import React from "react";
import './Menuitems.css';
import MenuItem from "./Menuitem/Menuitem";
const MenuItems = () => {
    return (
        <ul className="MenuItems">
            <MenuItem link="/" active>
                صفحه اصلی
            </MenuItem>
            <MenuItem link="/"  >
                مشاهده دانش آموزان
            </MenuItem>

        </ul>
    )
}
export default MenuItems;
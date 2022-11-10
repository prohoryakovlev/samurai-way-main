import React from "react";
import s from "./Navbar.module.css";

// let s = {
//     "nav":"Navbar_nav__NQMoW",
//     "item": "Navbar_item__LKszj"
// }


const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settincs</a>
            </div>
        </div>
    )
}
export default Navbar


import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <nav className={s.content}>
            <div>
                <img src="http://4everstatic.com/pictures/850xX/nature/horizon,-river,-panorama-184711.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </nav>
    )
}
export default Profile


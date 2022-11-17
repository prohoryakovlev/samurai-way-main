import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <nav>
            <div>
                <img src="http://4everstatic.com/pictures/850xX/nature/horizon,-river,-panorama-184711.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </nav>
    )
}
export default ProfileInfo


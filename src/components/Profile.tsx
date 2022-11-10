import React from "react";
import s from "./Profile.module.css";


const Profile = () => {
    return (
        <nav className={s.content}>
            <div>
                <img src="http://4everstatic.com/pictures/850xX/nature/horizon,-river,-panorama-184711.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Profile


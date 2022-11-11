import React from "react";
import s from "./Post.module.css";


const Post = (props: any) => {

    return (
        <div className={s.item}>
            <img src="https://cs6.pikabu.ru/avatars/298/v298790.jpg"/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>


        </div>


    )
}
export default Post


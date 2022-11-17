import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {message} from "antd";
import {log} from "util";


//
// type PostsType = {
//     title: string
//     message: any
// }


const MyPosts = (props: any) => {
    console.log(props.hey)
    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message={"Hi, how are you?"} likesCount={0}/>
                <Post message={"Its my first post"} likesCount={23}/>


            </div>
        </div>
    )
}
export default MyPosts


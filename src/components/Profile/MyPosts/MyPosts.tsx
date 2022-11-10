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



const MyPosts = (props:any) => {
    console.log(props.hey)
    return (
        <div>
            <div>My Post</div>

            <textarea></textarea>
            <button>Add post</button>


            <div className={s.posts}>
                <Post message={"Hi, how are you?"}/>
                <Post message={"Its my first post"}/>


            </div>
        </div>
    )
}
export default MyPosts


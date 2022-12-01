import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post"
import {message} from "antd";
import {log} from "util";


//
// type PostsType = {
//     title: string
//     message: any
// }


const MyPosts = (props: any) => {
    console.log(props.hey)

    let postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "Its my first post", likesCount: 11},

    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>


            </div>
        </div>
    )
}
export default MyPosts


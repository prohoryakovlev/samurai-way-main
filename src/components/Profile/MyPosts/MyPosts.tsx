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

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "Its my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 13},
        {id: 4, message: "Dadad", likesCount: 15},

    ]
    let postsElement = posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)
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
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts


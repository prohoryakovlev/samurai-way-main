import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post"



//
// type PostsType = {
//     title: string
//     message: any
// }


const MyPosts = (props: any) => {
    let postsElement = props.posts.map((p: { message: any; likesCount: any; }) =>
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


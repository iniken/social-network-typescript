import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";




const MyPosts = (props: any) => {

    let postElements = props.posts.posts.map((p: any) => <Post message={p.message} like={p.likesCount} id={p.id} />)

    return (
        <div className={s.myPostsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;


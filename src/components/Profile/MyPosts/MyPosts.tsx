import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsDataType} from "./../../../redux/state"

type MyPostPropsType= {
    postsData: Array<PostsDataType>
}
const MyPosts = (props: MyPostPropsType) => {

    let postElements = props.postsData.map(postMap =>
        <Post mes={postMap.message} like={postMap.likesCount}/>
    )

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


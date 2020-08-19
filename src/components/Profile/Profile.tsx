import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
/*import {StateDataType} from "./../../redux/state"*/



const Profile = (props:any) => {
    return (
        <div>
           <ProfileInfo />
           <MyPosts postsData={props.stateData.postsData}  />
        </div>
    )
}

export default Profile;
import React from 'react';
import MyPostsContainer from './MyPosts/myPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
  return (
    <>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </>
  );
};

export default Profile;

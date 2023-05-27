import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from './actions';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  if (!user || !user.accessToken) {
    navigate('/signup');
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(clearUser());
    navigate('/signup');
  };

  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Access Token: {user.accessToken}</p>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;

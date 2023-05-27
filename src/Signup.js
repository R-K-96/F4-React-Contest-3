import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from './actions';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (username && password && confirmPassword) {
      if (password === confirmPassword) {
        const accessToken = generateAccessToken();
        const user = {
          username,
          password,
          accessToken,
        };
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(setUser(user));
        setSuccessMessage('Signup successful. Redirecting to profile...');
        setErrorMessage('');
        setTimeout(() => {
          navigate('/profile');
        }, 2000);
      } else {
        setSuccessMessage('');
        setErrorMessage('Password and confirm password do not match.');
      }
    } else {
      setSuccessMessage('');
      setErrorMessage('Please fill in all fields.');
    }
  };

  const generateAccessToken = () => {
    return [...Array(16)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('');
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Signup;

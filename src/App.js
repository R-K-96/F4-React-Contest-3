import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Signup from './Signup';
import Profile from './Profile';
import NavBar from './NavBar';
import { useNavigate, Navigate} from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar/>
          <hr/>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

// path="/signup"
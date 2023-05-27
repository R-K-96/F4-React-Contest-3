import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Signup from './Signup';
import Profile from './Profile';
import Navbar from './Navbar';
import { useNavigate, Navigate} from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar/>
          <hr/>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Navigate to="/signup" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

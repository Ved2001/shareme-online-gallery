import './App.css';
import React, { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login';
import Home from './container/Home';
import { fetchUser } from './utils/fetchUser';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const user = fetchUser()

    if (!user) return navigate('/login')
  }, []);
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      < Routes >
        <Route exact path='login' element={<Login />} />
        <Route exact path='/*' element={<Home />} />
      </Routes>
    </ GoogleOAuthProvider >
  );
}

export default App;

import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import "./app.css";
import Profile from './components/profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/profile" element={<Profile />}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import JoinUs from './components/JoinUs';
import AddBusinessAcc from './components/AddBusinessAcc';
import AddPersonalAcc from './components/AddPersonalAcc';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import GMap from './components/GMap';
import LoginUser from './components/LoginUser';
import ForgotPass from './components/ForgotPass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
        <Route path='/' element={<App/>} />
        <Route path="/map" element={<GMap/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgotpass' element={<ForgotPass/>} />
        <Route path="/user" element={<LoginUser/>} />
        <Route path='/signup' element={<JoinUs/>} />
        <Route path='/addpersonal' element={<AddPersonalAcc/>} />
        <Route path='/addbusiness' element={<AddBusinessAcc/>} />
        </Routes>
    </Router>
    </ChakraProvider>
  </React.StrictMode>
);



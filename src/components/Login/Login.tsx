import React, { useState } from 'react';
import './Login.css';
import { FaUser } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io'; // Corrección aquí


const Login = () => {
  const [action, setAction] = useState('');

  const registerLink = () => {
    setAction('active');
  };

  return (
    <div className='background__login'>
      <div className={`wrapper ${action}`}>
        <div className={`form-box login ${action === 'login' ? 'active' : ''}`}>
          <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
              <input type='text' placeholder='Usuario' required />
              <FaUser className='icono' />
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Contraseña' required /> 
              <IoIosLock className='icono' />
            </div>
            <button type="submit">Ingresar</button>
            <div className="login-link">
              <p> ¿No tienes una cuenta? <a href='/Registro' className='HiperVinculoRegistro' onClick={registerLink}> Registro </a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
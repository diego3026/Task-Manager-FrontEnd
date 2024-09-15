import React, { useState } from 'react';
import './Register.css';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';


const Register = () => {

  const handleRegister = () => {

  }

  return (
    <div className='background__register'>
     <div className={`wrapper`}>
      <div className={`form-box registro`}>
        <div className='form'>
          <h1>Registro</h1>
          <div className='input-box'>
            <input type='text' placeholder='Usuario' required />
            <FaUser className='icono' />
          </div>
          <div className='input-box'>
            <input type='email' placeholder='Correo' required /> {/* Corrección aquí */}
            <FaEnvelope className='icono' />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Contraseña' required /> {/* Corrección aquí */}
            <IoIosLock className='icono' />
          </div>
          <button onClick={handleRegister}>Registrarse</button>
          <div className="register-link">
            <p> ¿Tienes una cuenta? <a href='/login' className='HiperVinculo'> Login </a></p> {/* Corrección aquí */}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
};

export default Register;






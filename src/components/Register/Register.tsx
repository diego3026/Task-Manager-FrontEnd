import React, { useEffect, useState } from 'react';
import './Register.css';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import AlertError from '../Alert/AlertError';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  useEffect(() => {
    setEmail('');
    setUsername('');
    setPassword('');
  }, []); 

  const handleRegister = () => {
    if (email !== "" && password !== "" && username !== "") {
      const data = { username, email, password };
      auth.registerUser(data)
    } else {
      AlertError('Ingrese todos los campos');
    }
  }

  return (
    <div className='background__register'>
     <div className={`wrapper`}>
      <div className={`form-box registro`}>
        <div className='form'>
          <h1>Registro</h1>
          <div className='input-box'>
            <input type='text' placeholder='Usuario' required value={username} onChange={(e) => setUsername(e.target.value)}/>
            <FaUser className='icono' />
          </div>
          <div className='input-box'>
            <input type='email' placeholder='Correo' required value={email} onChange={(e) => setEmail(e.target.value)}/> {/* Corrección aquí */}
            <FaEnvelope className='icono' />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Contraseña' required value={password} onChange={(e) => setPassword(e.target.value)}/> {/* Corrección aquí */}
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






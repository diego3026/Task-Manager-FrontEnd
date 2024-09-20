import './Login.css';
import { FaUser } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io'; // Corrección aquí
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import { useEffect, useState } from 'react';
import AlertError from '../Alert/AlertError';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []); 

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      const data = { email, password };
      auth.loginUser(data)
    } else {
      AlertError('Ingrese un usuario y contraseña');
    }
  };

  return (
    <div className='background__login'>
      <div className={`wrapper`}>
        <div className={`form-box login`}>
          <div className='form'>
            <h1>Login</h1>
            <div className='input-box'>
              <input type='text' placeholder='Email' value={email} required onChange={(e) => setEmail(e.target.value)}/>
              <FaUser className='icono' />
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Contraseña' value={password} required onChange={(e) => setPassword(e.target.value)} />
              <IoIosLock className='icono' />
            </div>
            <button onClick={handleLogin}>Ingresar</button>
            <div className="login-link">
              <p> ¿No tienes una cuenta? <a href='/registro' className='HiperVinculoRegistro'> Registro </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
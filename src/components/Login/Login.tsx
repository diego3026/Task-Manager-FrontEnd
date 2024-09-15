import './Login.css';
import { FaUser } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io'; // Corrección aquí
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/principal");
  };

  return (
    <div className='background__login'>
      <div className={`wrapper`}>
        <div className={`form-box login`}>
          <div className='form'>
            <h1>Login</h1>
            <div className='input-box'>
              <input type='text' placeholder='Usuario' required />
              <FaUser className='icono' />
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Contraseña' required />
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
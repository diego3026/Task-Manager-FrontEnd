// import { SlNotebook } from "react-icons/sl";
import Button from '@mui/material/Button';
import "./Header.css"
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()

    const handleLogin= () =>{
        navigate("/Login")
    }

    const handleRegister= () =>{
        navigate("/Registro")
    }

    return (
        <div className="navbar">
            <div className="logo">
                <h1 className="logo__text young-serif-regular">Easy</h1>
                <h1 className="logo__text-color young-serif-regular">Task</h1>
            </div>
            <div className="buttons">
                <Button onClick={handleRegister} variant="text" style={{color:"#232360",textTransform:"capitalize"}}>Registrarse</Button>
                <Button onClick={handleLogin} variant="contained" style={{backgroundColor:"#232360",textTransform:"capitalize"}}>Ingresar</Button>
            </div>
        </div>
    )
}

export default Header;
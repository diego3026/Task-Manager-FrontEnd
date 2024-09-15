import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Principal from '../pages/Principal/Principal';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';



function RouterProv() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/principal" element={<Principal/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Registro" element={<Register/>}/>
    </Routes>
  )
}

export default RouterProv;
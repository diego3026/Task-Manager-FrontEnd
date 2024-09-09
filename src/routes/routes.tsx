import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Principal from '../pages/Principal/Principal';

function RouterProv() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/principal" element={<Principal/>}/>
      <Route path="/prueb" element={<Principal/>}/>
    </Routes>
  )
}
  
export default RouterProv; 
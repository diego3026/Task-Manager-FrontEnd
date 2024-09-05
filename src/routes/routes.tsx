import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

function RouterProv() {
    return <Routes>
              <Route path="/" element={<Home/>}/>

            </Routes>
  }
  
  export default RouterProv; 
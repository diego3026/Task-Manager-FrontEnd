import { BrowserRouter } from "react-router-dom";
import Routes from './routes/routes'
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}


export default App
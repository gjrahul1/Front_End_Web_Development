import Login from './Login';
import './App.css';
import SignUp from './SignUp';

import {Route,BrowserRouter,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <nav>
        <a href="./">Home</a>
        <a href="./login">Login</a>
        <a href="./register">Signup</a>
      </nav>
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login></Login>}/>
      < Route path="/register" element={<SignUp></SignUp>}/>
      {/* Path should be / for landing page or home page */}
      <Route path="/" element={<h1>This is home page</h1>}/>

      {/* '*' indicates error or unknown path*/}
      <Route path="*" element={<h2>404 Page not found</h2>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

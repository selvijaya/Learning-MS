
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Registerpage from './Components/Registerpage/Registerpage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element ={<Registerpage/>}/>
      <Route path="/login" element={<LoginRegister/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

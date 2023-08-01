import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Upload from "./Pages/Upload/Upload";
import Home from "./Pages/Home/Home";
import Alert from "./Components/Alert/Alert";
import State from "./Context/State";
function App() {
  return (
    <>
      <State>
        <Router>
          <Navbar />
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </Router>
      </State>
    </>
  );
}
export default App;

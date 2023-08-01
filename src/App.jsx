import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Upload from "./Pages/Upload/Upload";
import Home from "./Pages/Home/Home";
import Alert from "./Components/Alert/Alert";
import Context from "./Context/Context";
function App() {
  return (
    <>
      <Context>
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
      </Context>
    </>
  );
}
export default App;

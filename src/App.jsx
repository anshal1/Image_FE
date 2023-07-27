import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Upload from "./Pages/Upload/Upload";
import Image from "./assets/wallpaperflare.com_wallpaper.jpg";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card img={Image} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;

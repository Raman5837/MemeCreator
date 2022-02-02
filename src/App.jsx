import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Gallery from "./Pages/Gallery/Gallery";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

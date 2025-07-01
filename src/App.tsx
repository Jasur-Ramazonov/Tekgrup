import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mainpage from "./Mainpage";
import Newspage from "./Newspage";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/news" element={<Newspage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

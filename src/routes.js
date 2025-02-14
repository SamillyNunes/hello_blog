import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>Pagina nao encontrada!</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  

  return (
    <BrowserRouter>
      <Menu />
      <ScrollToTop />

      <Routes>
        {/* Essa rota que tem o elemento DefaultPage eh como uma rota "pai", que vai definir
        qual rota vai ser apresentada. Essa estrutura vem das rotas aninhadas, usada para 
        aproveitar uma estrutura (nesse caso eh o Banner) para diversas paginas  */}
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;

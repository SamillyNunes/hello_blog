import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // vai fazer com que, sempre que mude a pagina, seja rolado para o topo de volta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

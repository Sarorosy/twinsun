import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");

    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "instant", // 👈 important (no weird smooth glitch on route)
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [pathname]);

  return null;
}
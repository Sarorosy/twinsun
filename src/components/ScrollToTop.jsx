import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Route content can render inside a custom container or the window.
    // Reset both so every navigation starts from the top reliably.
    requestAnimationFrame(() => {
      const scrollContainer = document.getElementById("scroll-container");

      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: 0,
          behavior: "auto",
        });
      }

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [pathname]);

  return null;
}
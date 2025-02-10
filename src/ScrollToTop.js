import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Detect route changes

  useEffect(() => {
    console.log("Route changed to:", pathname); // Debugging: Check if this runs

    // Skip scrolling for the home route
    if (pathname === "/") return;

    const timer = setTimeout(() => {
      window.scrollTo(0, 0); // Scroll the viewport to the top after a delay
    }, 100); // Delay of 0.1 seconds

    // Clean up the timeout to avoid potential memory leaks
    return () => clearTimeout(timer);
  }, [pathname]); // Trigger when the route changes

  return null;
};

export default ScrollToTop;




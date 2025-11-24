import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// scroll to top utility to move user to the top of the page since SPA doesn't do full page reloads and persists the scrolling position from previous pages
export function ScrollToTop() {
  const { pathname } = useLocation();

  // use effect to run every time the URL path changes since we are putting pathname in the dependency array
  useEffect(() => {
    window.scrollTo(0, 0); // top left corner
  }, [pathname]);

  return null;
}

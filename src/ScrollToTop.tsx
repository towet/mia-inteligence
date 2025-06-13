import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will detect navigation changes and
// automatically scroll the page to the top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Automatically scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;

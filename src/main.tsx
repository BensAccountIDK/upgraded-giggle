import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import App from "./App.tsx";
import "./index.css";

// Handle 404.html redirects for GitHub Pages
const root = document.getElementById("root")!;
const app = createRoot(root);

// Check if we have a stored redirect path from 404.html
useEffect(() => {
  const redirect = sessionStorage.getItem('redirect');
  if (redirect && redirect !== window.location.pathname + window.location.search + window.location.hash) {
    sessionStorage.removeItem('redirect');
    window.history.replaceState(null, '', redirect);
  }
}, []);

// Initial render with redirect handler
const RedirectHandler = () => {
  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect && redirect !== window.location.pathname + window.location.search + window.location.hash) {
      sessionStorage.removeItem('redirect');
      window.history.replaceState(null, '', redirect);
    }
  }, []);

  return <App />;
};

app.render(<RedirectHandler />);

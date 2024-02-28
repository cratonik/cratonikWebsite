import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';




const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header />
      <App />
      <Footer />
    </>,
  },
  {
    path: "/start-a-project",
    element: <>
      <Header />
      <Contact />
      <Footer />
    </>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();

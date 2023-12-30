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

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header />
      <div className='mainSection'>
        <App />
      </div>
    </>,
  },
  {
    path: "/contact",
    element: <>
      <Header />
      <div className='mainSection'>Contact</div>
    </>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();

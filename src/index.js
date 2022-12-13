import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import './App.css';
import Dashboard from './components/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ModalProvider } from './contexts/Modal';
import { AuthProvider } from './contexts/Auth';
import SignUp from './components/Signup';
import Focus from './components/Focus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/focus",
    element: <Focus/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider><AuthProvider><RouterProvider router={router}/></AuthProvider></ModalProvider>
  </React.StrictMode>
);

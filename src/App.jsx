import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import MainLayout from './Pages/MainLayout';
import JSX from './components/JSX';
import Props from './components/Props';
import PropsDrilling from './components/PropsDrilling';
import Hooks from './components/Hooks';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Main layout for all pages
    children: [
      { path: '/', element: <Home /> },
      { path: '/jsx', element: <JSX /> },
      { path: '/props', element: <Props /> },
      { path: '/propsDrilling', element: <PropsDrilling /> },
      { path: '/hooks', element: <Hooks/> },


    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

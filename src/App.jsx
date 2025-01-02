import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import MainLayout from './Pages/MainLayout';
import JSX from './components/JSX';
import Props from './components/Props';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Main layout for all pages
    children: [
      { path: '/', element: <Home /> },
      { path: '/jsx', element: <JSX /> },
      { path: '/props', element: <Props /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import MainLayout from './Pages/MainLayout';
import JSX from './components/JSX';
import Props from './components/Props';
import PropsDrilling from './components/PropsDrilling';
import Hooks from './components/Hooks';
import Var_Let_Const from './components/Javascript/Var_Let_Const';
import ArrayMethod from './components/Javascript/ArrayMethod';
import Object from './components/Javascript/Object';
import Async from './components/Javascript/Async';
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
      { path: '/var_let_const', element: <Var_Let_Const/> },
      { path: '/arraymethod', element: <ArrayMethod/> },
      { path: '/objects', element: <Object/> },
      { path: '/async', element: <Async/> },




    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

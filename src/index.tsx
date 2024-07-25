import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Description from './components/description';
import DescriptionMobile from './components/descriptionMobile';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>, 
  },
  {
    path: '/Description/:id',
    element: <Description />
  },
  {
    path: '/DescriptionMobile/:id',
    element: <DescriptionMobile/>
  }
 
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <RouterProvider router={router} />
);



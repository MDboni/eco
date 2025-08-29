import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import StatisticsPage from './Pages/StatisticsPage.jsx';
import DashboardPage from './Pages/DashboardPage.jsx';
import DetailsPage from './Pages/DetailsPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element: <HomePage/>
      },
      {
        path:'/Statistics',
        element: <StatisticsPage/>
      },
      {
        path:'/Dashboard',
        element: <DashboardPage/>
      },
      {
        path:'/details/:id',
        element: <DetailsPage/>,
        loader: () => fetch('/allProduct.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

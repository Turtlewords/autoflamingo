import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import App from './App.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//    },
//    {
//     path: "/shows",
//     element: <Shows />
//    },
//    {
//     path: "/contact",
//     element: <Contact />
//    },
//    {
//     path: "/music",
//     element: <Music />
//    }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

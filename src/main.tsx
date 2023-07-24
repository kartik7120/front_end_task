import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/error-page.tsx";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import FirstPage from './routes/FirstPage.tsx';
import { loader as userLoader } from "./routes/users/getUser.ts"
import SecondPage from './routes/secondPage.tsx';
import Tasks3 from './routes/tasks3.tsx';
import Task4 from './routes/task4.tsx';
import Task2 from './routes/Task2.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/protectedRoute",
    element: <ProtectedRoute />,
    errorElement: <ErrorPage />,
    loader: userLoader
  },
  {
    path: "/secondPage",
    element: <SecondPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/firstpage',
    element: <FirstPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/task3",
    element: <Tasks3 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/task4",
    element: <Task4 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/task2",
    element: <Task2 />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Dashboard from "../page/Dashboard/Dashboard";
import DashboardHome from "../page/DashboardHome/DashboardHome";
import AllWork from "../page/AllWork/AllWork";
import EditWork from "../page/Edit/EditWork";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },

        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/allWork',
                element: <AllWork></AllWork>,
                loader: () => fetch('https://job-task-1-server-lovat.vercel.app/allWork')
            },
            {
                path: '/dashboard/edit/:id',
                element: <EditWork></EditWork>,
                loader: ({ params }) => fetch(`https://job-task-1-server-lovat.vercel.app/allWork/${params.id}`)

            },

        ]
    }
]);


export default router;
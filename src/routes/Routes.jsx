import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
const routes = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[

            {
                index:true,
                element:  <Home></Home>
            },
            // {
            //     path:"/signin",
            //     element:<SignIn></SignIn>
            // },
            // {
            //     path:"/signup",
            //     element:<SignUp></SignUp>
            // },
            
            
           
        ]
    },

])


export default routes;
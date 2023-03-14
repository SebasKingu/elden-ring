import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Armaduras from "../pages/Armaduras";
import Municiones from "../pages/Municiones";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Municiones />
            },
            {
                path: '/armaduras',
                element: <Armaduras />
            }
        ]
    }
])

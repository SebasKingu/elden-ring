import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { loaderMun, loaderArmor } from "../js/loaders";
import Armaduras from "../pages/Armaduras";
import Municiones from "../pages/Municiones";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Municiones />,
                loader: loaderMun
            },
            {
                path: '/armaduras',
                element: <Armaduras />,
                loader: loaderArmor
            }
        ]
    }
])

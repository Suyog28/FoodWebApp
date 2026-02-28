import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router";
import Error from "./components/Error";
import Menu from "./components/Menu";

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>

    )
}

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/listRestaurantMenu/:id",
                element: <Menu />
            }
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);

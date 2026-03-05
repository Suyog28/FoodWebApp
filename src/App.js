import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router";
import Error from "./components/Error";
import Menu from "./components/Menu";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";

const InstamartStores = lazy(()=>import("./components/InstamartStores"))
const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
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
            },
            {
                path: "/InstamartStores",
                element:
                    <Suspense fallback={<Shimmer />}>
                        <InstamartStores />
                    </Suspense>
            }
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);

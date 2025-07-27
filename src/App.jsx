import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Applayout() {
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    );
}

const a = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "Body",
                element: <Body />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/About",
                element: <About />
            },
        ]
    },
]);

function App() {
    return (
        <>
         
            <RouterProvider router={a} />
        </>
    );
}

export default App;

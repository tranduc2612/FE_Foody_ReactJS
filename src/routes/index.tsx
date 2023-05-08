import Home from "../pages/Home/Home";
import { DefaultLayout } from "../components/Layout";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";
import { Fragment } from 'react';

export const publicRouter = [
    {path: "/", page: Home, layout: DefaultLayout},
    {path: "/about", page: About, layout: DefaultLayout},
    {path: "*", page: NotFound, layout: Fragment},
]


export const privateRouter = [
    {path: "/profile", page: Profile, layout: DefaultLayout},
    {path: "*", page: NotFound, layout: DefaultLayout},
]
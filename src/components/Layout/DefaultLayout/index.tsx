import { ReactNode,FunctionComponent } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export interface ILayoutDefault {
    children?:ReactNode
}

function DefaultLayout({children}:ILayoutDefault) {

    return ( <>
        <Header />

        {children}    
        <Outlet />    

        <Footer />
    </> );
}

export default DefaultLayout;
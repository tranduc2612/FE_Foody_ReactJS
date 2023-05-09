import { ReactNode,FunctionComponent } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export interface ILayoutDefault {
    children?:ReactNode
}

function DefaultLayout({children}:ILayoutDefault) {

    return ( <>
        <div className="bg-bg-header max-w-full shadow-current">
            <Header />
        </div>
        <Navbar />
        <div className="container">
            {children} 
        </div>
        <Footer />
    </> );
}

export default DefaultLayout;
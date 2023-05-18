import { ReactNode, useState,MouseEvent } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
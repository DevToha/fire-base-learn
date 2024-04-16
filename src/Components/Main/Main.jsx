// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Fotter";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
// import React from 'react';

// import { Link } from "react-router-dom";


// const Links = <>
//     <Link to="/"><li className="text-base font-semibold"><a>Home</a></li></Link>
//     <Link to="/signIn"><li className="text-base font-semibold"><a>Sign In</a></li></Link>
//     <Link to="/register"><li className="text-base font-semibold"><a>Register</a></li></Link>

// </>

import './home.css'
import Login from "../Login/Login";

const Home = () => {
    return (
        <div>
            <div className="text-4xl font-bold mt-32 mb-12 text-center">
                This is home
            </div>

            <div>
                <Login></Login>
            </div>
        </div>
    );
};

export default Home;
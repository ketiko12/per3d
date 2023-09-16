import { useState } from 'react';
import reactLogo from "./assets/react.svg";
import viteLogo from './assets/vite.png';
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Works, StarsCanvas} from './components';





const App=()=>{
    return(
        <BrowserRouter>
         <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar/>
                <Hero></Hero>

            </div>
            <About></About>
            <Experience></Experience>
            <Works></Works>
            <Feedbacks/>
            <div className="relative z-0">
                <Contact/>
                <StarsCanvas/>
            </div>
         </div>
        </BrowserRouter>

    )
}
export {App};
import React from "react";
import myGif from "../assets/lain.gif";
import Typewriter from './Typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {



    return (
        <>
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
            <img src={myGif} alt="my-gif" />


            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Anis Houidi</h1>
                    <p class="text-xl font-bold text-gray-300">I'm a <Typewriter text="Software Engineering Student :)" delay={120} infinite/></p>
                    <p className="text-md font-light text-gray-400 ">Curious to unravel the limitless possibilities that Software Engineering offers in various fields of the industry.</p>
                </div>
                <a href='https://www.linkedin.com/in/anis-ben-houidi/' className='mt-2 block'>Check my LinkedIn<FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a>
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/Anisx-D' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://www.facebook.com/profile.php?id=100019585146158' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faFacebook} /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/anis-ben-houidi/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}

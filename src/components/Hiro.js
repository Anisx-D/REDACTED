import profile from '../assets/profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {
    return (
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img src={profile} alt="profile" />
            </div>
            <div className='md:w-3/6'>
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Damasukma Trihanandi</h1>
                    <p class="text-xl font-medium">Cloud Engineer</p>
                    <p className="text-md font-light text-gray-400 ">Enthusiastic and motivated self-learning in Information Technology. Interested in exploring about Computer Network, Cloud Computing, DevSecops, and Web Development. Now I am looking for more experience in my field.</p>
                </div>
                <a href='http://blog.dama.ink' className='mt-2 block'>Go to My Blog <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a>
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/radendi' target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://instagram.com/damaasth' target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li>
                    <li>
                        <a href='htpp://'><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
    )
}

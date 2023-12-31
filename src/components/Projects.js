import ProjectCard from "./ProjectCards.js"

import hr from "../assets/curve-hr.svg"
import RadAi from "../assets/certs/RadAi.png"

// import 

export default function Projects(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects and Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Projects and Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <ProjectCard name="AI Radiology platform" img={RadAi} issued="ENSI" date="May 2023" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}

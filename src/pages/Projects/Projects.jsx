import React from "react";
import { Huttspot, Propfit, Choppins, Fidelity } from "../../assets";
import '../../assets/styles/global.css'
import Button from "../../components/Button";
import Slider from "../../components/SliderEffect";


export default function Projects(){
    const projects = [
        {
        name: "Propfit",
        img: Propfit,
        description: "Propfit is a modern rental and apartment management app designed to simplify property listing, tenant communication, rent tracking, and maintenance requests.",
        stack: ["React", "ExpressJS"],
    },
    {
        name: "Huttspot",
        img: Huttspot,
        description: "Huttspot is a modern rental and apartment management app designed to simplify property listing, tenant communication, rent tracking, and maintenance requests for students.",
        stack: ["React", "ExpressJS"],
    },
    {
        name: "Choppins",
        img: Choppins,
        description: "Choppins",
    },
    {
        name: "Fidelity Mobile",
        img: Fidelity,
        description: "Fidelity Mobile",
    }
    ]

    function createProject(project){
        return (
            <div className="project-container">
                <div className="project-img">
                    <img src={project.img} alt={project.name} />
                </div>
                <div className="project-name">
                    {project.name}
                </div>
                <div className="project-info">
                    <div className="project-description">
                        <div className="description">
                            <p>{project.description}</p>
                            <Button>View Project</Button>
                        </div>
                        <p id="stack">{project.stack}</p>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="project">
            <div className="text-container">
                <h2>My <br /><em className="invert-id">Projects</em></h2>
                <p>Using my skills, I help brings ideas into interfaces, and brands into experiences</p>
            </div>
            <div className="projects">
                <h1>Under Construction</h1>
                {/* <Slider items={projects} interval={5000} renderItem={project => (
                    createProject(project)
                )} /> */}
            </div>
        </div>
    )
}
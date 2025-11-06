import React, { useEffect, useRef } from "react";
import { Huttspot, Propfit, Choppins, Fidelity } from "../../assets";
import '../../assets/styles/global.css'
import Button from "../../components/Button";
import Slider from "../../components/SliderEffect";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects(){
    const projectsRef = useRef(null);
    const textRef = useRef(null);
    const projectRefs = useRef([]);
    const projects = [
        {
            name: "Propfit",
            img: Propfit,
            description: "Propfit is a modern rental and apartment management app designed to simplify property listing, tenant communication, rent tracking, and maintenance requests.",
            stack: ["React", "ExpressJS", "Node.js", "MongoDB"],
            link: "https://propfit.vercel.app",
        },
        {
            name: "Huttspot",
            img: Huttspot,
            description: "Huttspot is a modern rental and apartment management app designed to simplify property listing, tenant communication, rent tracking, and maintenance requests for students.",
            stack: ["React", "ExpressJS", "Firebase", "Tailwind"],
            link: "https://huttspot.vercel.app",
        },
        {
            name: "Choppins",
            img: Choppins,
            description: "A modern food delivery platform connecting local restaurants with hungry customers through an intuitive interface.",
            stack: ["React Native", "Node.js", "MongoDB", "Redux"],
            link: "https://choppins.app",
        },
        {
            name: "Fidelity Mobile",
            img: Fidelity,
            description: "A comprehensive mobile banking solution providing seamless financial services and secure transactions.",
            stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
            link: "https://fidelitymobile.com",
        }
    ]

    useEffect(() => {
        // Animate the text container
        gsap.fromTo(textRef.current,
            { 
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                }
            }
        );

        // Animate each project card
        projectRefs.current.forEach((project, index) => {
            gsap.fromTo(project,
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: project,
                        start: "top 85%",
                    },
                    delay: index * 0.2 // Stagger the animations
                }
            );
        });
    }, []);

    return(
        <div className="project" ref={projectsRef}>
            <div className="text-container" ref={textRef}>
                <h2>My <br /><em className="invert-id">Projects</em></h2>
                <p>Using my skills, I help brings ideas into interfaces, and brands into experiences</p>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div 
                        key={project.name}
                        className="project-card"
                        ref={el => projectRefs.current[index] = el}
                    >
                        <div className="project-image-container">
                            <img src={project.img} alt={project.name} />
                            <div className="project-overlay">
                                <div className="project-stack">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-actions">
                                <Button 
                                    variant="secondary" 
                                    onClick={() => window.open(project.link, '_blank')}
                                >
                                    View Project
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
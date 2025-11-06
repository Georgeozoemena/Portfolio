import React, { useEffect, useRef } from "react";
import '../assets/styles/components/card.css'
import gsap from 'gsap';

export default function Card(){
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    const skillSet = [
        {
            skill: "Web Development",
            description: "Building scalable and performant web applications",
            image: "/web-dev.svg", // Add appropriate image paths
            tools: [
                { name: "React", level: 90, image: "/react.svg" },
                { name: "Node.js", level: 85, image: "/nodejs.svg" },
                { name: "JavaScript", level: 95, image: "/javascript.svg" },
                { name: "TypeScript", level: 80, image: "/typescript.svg" },
                { name: "Git", level: 88, image: "/git.svg" },
                { name: "Express", level: 85, image: "/express.svg" }
            ]
        },
        {
            skill: "UI/UX Design",
            description: "Creating intuitive and engaging user experiences",
            image: "/uiux.svg",
            tools: [
                { name: "Figma", level: 92, image: "/figma.svg" },
                { name: "Framer", level: 85, image: "/framer.svg" },
                { name: "Photoshop", level: 80, image: "/photoshop.svg" },
                { name: "Design Systems", level: 88, image: "/design-systems.svg" }
            ]
        },
        {
            skill: "Brand Identity",
            description: "Crafting memorable and impactful brand experiences",
            image: "/brand.svg",
            tools: [
                { name: "Illustrator", level: 88, image: "/illustrator.svg" },
                { name: "After Effects", level: 75, image: "/after-effects.svg" },
                { name: "Brand Strategy", level: 90, image: "/strategy.svg" },
                { name: "Logo Design", level: 95, image: "/logo-design.svg" }
            ]
        }
    ];

    useEffect(() => {
        // Initial animation for cards
        gsap.fromTo(
            cardsRef.current,
            { 
                opacity: 0, 
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            }
        );

        // Hover animations for tools
        cardsRef.current.forEach(card => {
            const tools = card.querySelectorAll('.tool-item');
            tools.forEach(tool => {
                tool.addEventListener('mouseenter', () => {
                    gsap.to(tool, {
                        scale: 1.05,
                        duration: 0.2,
                        ease: "power2.out"
                    });
                });
                tool.addEventListener('mouseleave', () => {
                    gsap.to(tool, {
                        scale: 1,
                        duration: 0.2,
                        ease: "power2.in"
                    });
                });
            });
        });
    }, []);

    return (
        <div className="skills-container" ref={containerRef}>
            {skillSet.map((skill, index) => (
                <div 
                    className="skill-card" 
                    key={skill.skill}
                    ref={el => cardsRef.current[index] = el}
                >
                    <div className="skill-content">
                        <div className="skill-header">
                            <div className="skill-title-section">
                                <div className="skill-icon">
                                    <img src={skill.image} alt={skill.skill} />
                                </div>
                                <div className="skill-title-content">
                                    <h3>{skill.skill}</h3>
                                    <p className="skill-description">{skill.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="tools-list">
                            {skill.tools.map(tool => (
                                <div 
                                    className="tool-item" 
                                    key={tool.name}
                                >
                                    <div className="tool-info">
                                        <div className="tool-header">
                                            <div className="tool-icon">
                                                <img src={tool.image} alt={tool.name} />
                                            </div>
                                            <span className="tool-name">{tool.name}</span>
                                        </div>
                                        <div className="skill-bar-container">
                                            <div className="skill-bar">
                                                <div 
                                                    className="skill-level"
                                                    style={{ width: `${tool.level}%` }}
                                                />
                                            </div>
                                            <span className="skill-percentage">{tool.level}%</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
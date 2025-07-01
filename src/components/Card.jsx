import React from "react";
import '../assets/styles/components/card.css'

export default function Card(){
    const skillSet = [{
        img: "",
        skill: "Web Development",
        tools: ["HTML", "CSS", "JavaScript", "React", "Git", "NodeJS", "ExpressJS"]
    }, {
        img: "",
        skill: "UI/UX Design",
        tools: ["Figma", "Framer", "Photoshop"]
        
    }, {
        img: "",
        skill: "Brand Identity Design",
        tools: ["Adobe XD", "Adobe Illustrator", "Photoshop"]
    }]

    function createSkillSet(skill) {
        return (
            <div className="card">
                <div className="card-img">
                    <img src={skill.img} alt="" />
                </div>
                <div className="text-container">
                    <h3>{skill.skill}</h3>
                    <p>{skill.tools}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="card-container">
            {skillSet.map(createSkillSet)}
        </div>
    )
}
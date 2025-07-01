import React from "react";
import { AboutMe, Avatar, Github, Instagram, Twitter } from "../assets";
import { Link } from "react-router-dom";
import '../assets/styles/global.css'


export default function About(){
    const Socials = [{
        img: Twitter,
        link: "https://twitter.com/_GeorgeTweet"
    },
    {
        img: Instagram,
        link: "https://instagram.com/_georgee01"
    },
    {
        img: Github,
        link: "https://github.com/Georgeozoemena"
    }
]

function createSocials(handles){
    return <Link to={handles.link} target="_blank" key={handles.link}>
        <img src={handles.img} alt={`${handles.img}`} />
    </Link>
}

    return(
        <div className="about-me">
            {/* <h2>About me</h2> */}
            <div className="bio-content">
                <div className="my-bio">
                    <div className="my-bio-headline">
                        <img src={AboutMe} alt="" />
                    </div>
                    <div className="my-bio-description">
                        <p>I’m a Nigerian-based Web Developer, UI/UX Designer, Brand Identity Designer with 2years  of industry experience who uses technical and problem-solving skills to bring software solutions to reality</p>
                    </div>
                    <div className="my-socials">
                        <h5>Connect with Me</h5>
                        <div className="socials">
                            {Socials.map(createSocials)}
                        </div>
                    </div>
                </div>
                <div className="bio-img">
                    <img src={Avatar} alt="" />
                </div>
            </div>
        </div>
    )
}
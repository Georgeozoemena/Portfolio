import React from "react";
import '../assets/styles/global.css'
import Button from "../components/Button";
import { Avatar, Github, Instagram, Twitter } from "../assets";
import { Link } from "react-router-dom";

export default function Contact(){
    const Inputs = [{
        label: "name",
        type: "text",
        placeholder: "Your name"
    },
    {
        label: "email",
        type: "email",
        placeholder: "Your email"
    },
    {
        label: "message",
        type: "text",
        placeholder: "Mail"
    }
]
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
        return <Link to={handles.link} target="_blank">
            <img src={handles.img} alt="" />
        </Link>
    }

    function createInput(input){
        return <div className="input-content">
            <label htmlFor={input.label}>{input.label}</label>
            <input type={input.type} />
        </div>
    }

    return(
        <div className="connect-with-me">
            <h2>Contact Me</h2>
            <div className="contact-me">
                <div className="input">
                    <div className="input-container">
                        {Inputs.map(createInput)}
                    </div>
                    <Button>Send Message</Button>
                    <div className="my-socials">
                        <h5>Connect with Me</h5>
                        <div className="socials">
                            {Socials.map(createSocials)}
                        </div>
                    </div>
                </div>
                <div className="img-container">
                    {/* <img src={Avatar} alt="" /> */}
                </div>
            </div>
        </div>
    )
}
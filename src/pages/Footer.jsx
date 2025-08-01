import React from "react"
import { Github, Instagram, LogoWhite, Twitter } from "../assets"
import '../assets/styles/global.css'
import { Link } from "react-router-dom"

export default function Footer() {
    const quickLinks = [
        {
            Link: "Home",
            to: "/home"
        },
        {
            Link: "About Me",
            to: "/about"
        },
        {
            Link:  "Services",
            to: "/contact"
    }]
    const bestCases = [
        {
            Link: "Project",
            to: "/projects"
        },
        {
            Link: "Jobs",
            to: "/jobs"
        },
        {
            Link:  "Buy Coffee",
            to: "/coffee"
    }]

    const socials = [Twitter, Github, Instagram]

    return(
        <div className="footer">
            <div className="footer-content">
                <section className="section-1">
                    <div className="logo">
                        <img src={LogoWhite} alt="" />
                    </div>
                    <li>
                        <Link to={"email/"}>
                            georgeozoemena17@gmail.com
                        </Link>
                    </li>
                    <div className="socials">
                        {socials.map((social)=>{
                            return <div className="social">
                                <Link to={""}>
                                    <img src={social} alt="" />
                                </Link>
                            </div>
                        })}
                    </div>
                </section>
                <div className="links">
                    <div className="quick-links">
                        <h2>Quick Links</h2>
                        {quickLinks.map((quickLink)=> {
                            return <li><Link to={quickLink.to}>{quickLink.Link}</Link></li> 
                        })}
                    </div>
                    <div className="best-cases">
                        <h2>Best Cases</h2>
                        {bestCases.map((bestCases)=> {
                            return <li><Link to={bestCases.to}>{bestCases.Link}</Link></li> 
                        })}
                    </div>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <p>Copyright @ {new Date().getFullYear()} TechBishop. All rights reserved.</p>
                <p>Abuja - Nigeria</p>
            </div>
        </div>
    )
}

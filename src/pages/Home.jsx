import React from 'react'
import { HeadlineText, Avatar, LogoWhite } from '../assets'
import Button, { DownloadButton } from '../components/Button'
import '../assets/styles/global.css'
import About from './AboutMe'
import Projects from './Projects/Projects'
import Card from '../components/Card'
import Footer from './Footer'

export default function Home(){
    return (
        <div className="landing">
            <div className="hero">
                <div className="hero-text">
                    <h1>Turning Ideas into <em>Interfaces</em>, and Brands into <em>Experiences</em></h1>
                    <h3>Frontend Developer, UI/UX Designer, Brand Identity Specialist</h3>
                    <p>With 2+ years of creating clean code, intuitive interfaces, and memorable brands</p>
                </div>
                <div className="hero-btn-section">
                    <DownloadButton>View My Resume</DownloadButton>
                    <Button variant="secondary">Hire me</Button>
                </div>
            </div>
            <div className="body-section">
                <div className="skill-set-container">
                    <div className="text-container">
                        <h1>My Tech <em className='invert-id'>Stack</em></h1>
                        <p>Using my skills, I help brings ideas into interfaces, and brands into experiences</p>
                    </div>
                    <Card />
                </div>
                <Projects />
                <About />
                <div className="get-in-touch">
                    <div className="text-container">
                        <h2>Bring Your Ideas</h2>
                        <p>My creative solutions has helped clients raise $10M+ and expand they reach</p>
                    </div>
                    <div className="btn-container">
                        <Button variant="primary">Book a Call</Button>
                        <Button variant="secondary">Email Me</Button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
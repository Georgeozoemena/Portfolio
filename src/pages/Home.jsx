import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button, { DownloadButton } from '../components/Button'
import '../assets/styles/global.css'
import About from './AboutMe'
import Projects from './Projects/Projects'
import Card from '../components/Card'
import Footer from './Footer'

gsap.registerPlugin(ScrollTrigger);

export default function Home(){
    const landingRef = useRef(null)
    const heroTextRef = useRef(null)
    const heroBtnsRef = useRef(null)
    const skillSetRef = useRef(null)
    const getInTouchRef = useRef(null)

    useEffect(() => {
        // Initial landing animation
        gsap.fromTo(
            landingRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }
        )

        // Hero section staggered animation
        const heroText = heroTextRef.current.children
        gsap.fromTo(
            heroText,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.5
            }
        )

        // Hero buttons animation
        gsap.fromTo(
            heroBtnsRef.current.children,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.7)",
                delay: 1.2
            }
        )

        // Skill set section animation
        gsap.fromTo(
            skillSetRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: skillSetRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Get in touch section animation
        gsap.fromTo(
            getInTouchRef.current,
            { 
                opacity: 0,
                scale: 0.95,
                y: 30
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: getInTouchRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        )
    }, [])


    return (
        <>
            <div ref={landingRef} className="landing">
                <div className="hero">
                    <div ref={heroTextRef} className="hero-text">
                        <h1>Turning Ideas into <em>Interfaces</em>, and Brands into <em>Experiences</em></h1>
                        <h3>Fullstack Developer, UI/UX Designer, Brand Identity Specialist</h3>
                        <p>With 2+ years of creating clean code, intuitive interfaces, and memorable brands</p>
                    </div>
                    <div ref={heroBtnsRef} className="hero-btn-section">
                        <DownloadButton>View My Resume</DownloadButton>
                        <Button variant="secondary">Hire me</Button>
                    </div>
                </div>
                <div className="body-section">
                    <div ref={skillSetRef} className="skill-set-container">
                        <div className="text-container">
                            <h1>My Tech <em className='invert-id'>Stack</em></h1>
                            <p>Using my skills, I help brings ideas into interfaces, and brands into experiences</p>
                        </div>
                        <Card />
                    </div>                              
                    <Projects />
                    <About />
                    <div ref={getInTouchRef} className="get-in-touch">
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
        </>
    )
}
import React from 'react'
import '../assets/styles/components/nav.css'
import { Logo } from '../assets'
import { Outlet, Link } from 'react-router-dom'
import Button from './Button'

export default function NavBar(){
    const Routes = [
        {
            Link: "My Projects",
            to: "/projects"
        },
        {
            Link: "About Me",
            to: "/about"
        },
        {
            Link:  "Services",
            to: "/contact"
    }]

    function createRoute(Route) {
        return (
            <li>
                <Link to={Route.to}>{Route.Link}</Link>
            </li>

        )
    }
    
    return (
        <>
            <div className="nav-container">
                <Link to={"/"}>
                    <img src={Logo} id="logo" alt="" />
                </Link>
                <div className="link-container">
                    <div className="links">
                        {
                            Routes.map(createRoute)
                        }
                    </div>
                    <Button variant="secondary">Hire me</Button>
                </div>
            </div>
            <Outlet />
        </>
    )
}
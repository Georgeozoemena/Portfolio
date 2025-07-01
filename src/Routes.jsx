import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home"
import NavBar from "./components/Nav";
import About from "./pages/AboutMe";
import Contact from "./pages/ContactMe";
import Error from "./pages/NotFound";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Projects/Project";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route exact path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project" element={<Project />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}
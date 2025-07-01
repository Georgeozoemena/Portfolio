import React from "react"
import '../../assets/styles/global.css'

export default function Project(){
    return(
        <div className="my-project">
            <h2>Project Name</h2>
            <div className="project-info">
                <div className="project-cover-img"></div>
                <div className="project-description">
                    <p>project description</p>
                </div>
                <div className="project-imgs">
                    <div className="img-grid">
                        <div className="img"></div>
                        <div className="img"></div>
                    </div>
                    <div className="project-cover-img"></div>
                </div>
            </div>
        </div>
    )
}
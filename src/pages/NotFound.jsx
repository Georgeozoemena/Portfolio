import React from "react";
import Button from "../components/Button";
import '../assets/styles/global.css'
import { ErrorMessage } from "../assets";
import { Link } from "react-router-dom";

export default function Error(){
    return(
        <div className="not-found">
            <img src={ErrorMessage} alt="" />
            <Link to={"/"}>
                <Button>
                    Back to Homepage
                </Button>
            </Link>
        </div>
    )
}
import React from 'react'
import '../assets/styles/components/button.css'
import { Resume } from '../assets'

export default function Button({type, disabled, onClick, children, variant}) {
    
    return(
        <a href="">
            <button type={type} disabled={disabled} onClick={onClick} className={variant}>
                {children}
            </button>
        </a>
    )
}

export function DownloadButton({children, variant}) {
    return (
        <a href={Resume} download>
            <button className={variant}>{children}</button>
        </a>
    )
}
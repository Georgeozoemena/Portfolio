import React, { useEffect, useState } from 'react'
import '../assets/styles/components/sliderEffect.css' 

export default function Slider({ items, interval = 5000, renderItem}){
    // Logic to handle slide change
    const [sliderItem, setSliderItem] = useState(0);
    
    // Update the state with a new slider item
    useEffect(() => {
        const timer = setInterval(() => {
            setSliderItem(prev => prev === items.length - 1 ? 0 : prev + 1);
        }, interval); 

        return () => clearInterval(timer);
    }, [items.length, interval])
    
    
    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                {renderItem ? renderItem(items[sliderItem]) : items[sliderItem]}
            </div>
        </div>
    )
}
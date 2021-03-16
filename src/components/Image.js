import React, {useState, useContext} from "react"
import {Context} from "../Context"


function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)
    
    const heart = isHovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    const cart = isHovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} className="image-grid"/>

            {heart}
            {cart}

        </div>
    )
}

export default Image
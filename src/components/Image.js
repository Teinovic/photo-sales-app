import React, {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"


function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)
    console.log(className, img)
    
    function heart() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (isHovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    
    const cart = isHovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} className="image-grid"/>

            {heart()}
            {cart}

        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool  
    })
}

export default Image


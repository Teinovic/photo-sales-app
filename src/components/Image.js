import React, {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes, { func } from "prop-types"


function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite, addToCart, cartContents, removeFromCart} = useContext(Context)
    
    function heart() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (isHovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    
    function cart() {
        const alreadyInCart = cartContents.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if(isHovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }

    }

    return (
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} className="image-grid"/>

            {heart()}
            {cart()}

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


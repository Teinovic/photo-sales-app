import React, {useState, useEffect} from "react"
import {photos1} from './apifile'

const Context = React.createContext()

function ContextProvider({children}) {
    const [photoArray, updatePhotoArray] = useState([])
    const [cartContents, setCartContents] = useState([])

    const photosUrl = photos1
    
    useEffect(() => {
        async function addPhoto() {
            try {
                const photos = photosUrl
                updatePhotoArray(photos)
              } catch(err) {
                    console.log('Error happened here!')
                    console.error(err); // TypeError: failed to fetch
              }
        }
        addPhoto()
    }, [])

    function toggleFavorite(id) {
        const updatedArr = photoArray.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        updatePhotoArray(updatedArr)
    }

    function addToCart(newContents) {
        setCartContents(prevContents => [...prevContents, newContents])
    
    }

    function removeFromCart(id) {
        setCartContents(prevContents => prevContents.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartContents([])
    }
    

    
    return (
        <Context.Provider value={{photoArray, toggleFavorite, addToCart, cartContents, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}




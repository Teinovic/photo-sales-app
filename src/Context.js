import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [photoArray, updatePhotoArray] = useState([])
    const [cartContents, setCartContents] = useState([])

    const photosUrl = 'https://raw.githubusercontent.com/Teinovic/photo-sales-app/master/apifile'
    
    useEffect(() => {
        async function addPhoto() {
            const photosPromise = await fetch(photosUrl)
            const photos = await photosPromise.json()
            updatePhotoArray(photos)
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




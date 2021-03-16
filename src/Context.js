import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [photoArray, updatePhotoArray] = useState([])

    const photosUrl = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    
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
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        updatePhotoArray(updatedArr)
    }
    
    
    return (
        <Context.Provider value={{photoArray, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}



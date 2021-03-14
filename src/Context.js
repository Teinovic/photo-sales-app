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
    
    return (
        <Context.Provider value={{photoArray}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}



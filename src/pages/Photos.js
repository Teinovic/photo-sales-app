import React, {useContext} from "react"

import {Context} from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils/index"

function Photos() {
    const {photoArray} = useContext(Context)
    const mappedPhotos = photoArray.map((img, i) => (<Image key={img.id} img={img} className={getClass(i)} />))
    
    return (
        <main className="photos">
            {mappedPhotos}
        </main>
    )
}

export default Photos
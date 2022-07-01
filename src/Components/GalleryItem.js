import React, {useState} from "react"


// Individual Gallery Item to be displayed 
export default function GalleryItem(props){
    // state for tracking if item is selected
    let [view, setView] = useState(false)

    return(
        <div onClick={() => setView(!view)} style = {{"display": "inline-block"}}>
            <p>Gallery Item</p>
        </div>
    )
}
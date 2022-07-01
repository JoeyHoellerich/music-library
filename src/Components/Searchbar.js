import React from "react"

export default function SearchBar(props){
    return(
        <form onSubmit={(e) => {props.handleSearch(e, props.searchText)}}>
            <input placeholder="Songs, Artist, Album" type="text" onChange={(e) => props.setSearchText(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}
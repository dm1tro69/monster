import React from "react";
import './search-box.style.css'

export const SearchBox = ({plaseholder, handleChange}) => {
    return(
        <input
            className={'search'}
            onChange={handleChange}
            placeholder={plaseholder}
            type="search"/>
    )
}
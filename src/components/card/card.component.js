import React from "react";
import './card.style.css'

export const Card = (props) => {
    return(
        <div className={'card-container'}>
            <img src={`https://robohash.org/${props.item.id}?set=set2&size=180x180`} alt="monster"/>
            <h2>{props.item.name}</h2>
            <p>{props.item.email}</p>
        </div>
    )
}
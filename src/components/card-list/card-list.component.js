import React from "react";
import './card-list.style.css'
import {Card} from "../card/card.component";

export const CardList = (props) => {
    return(
        <div className={'card-list'}>
            {props.monsters.map((item, index)=> {
                return(
                    <Card
                        item={item}
                        key={item.id}
                    />
                )
            })}

        </div>
    )
}


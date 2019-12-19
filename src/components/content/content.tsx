import * as React from 'react';
import './content.css';
import {Swapi} from "../App/swapi";
import {useState} from "react";

interface Interface {
    idx:any,
}

const Content: React.FC<Interface> = (props: Interface) => {
    const swapi = new Swapi();

    const [state, setState] = useState({
        name: null,
        id: null,
        hairColor: null,
        eyeColor: null
    });

    const img = swapi.getPhoto(props.idx);

    swapi.getPerson(props.idx).then((item) => {
        setState({
            name: item.name,
            id: item.id,
            hairColor: item.hairColor,
            eyeColor: item.eyeColor
        })
    });

    return(
        <div className="content d-flex">
            <div className="content-info">
                <p className="name"><span className="green">Имя персонажа: </span>{state.name}<br/></p>
                <p className="name"><span className="green">ID персонажа: </span>{state.id}</p>
                <p className="name"><span className="green">Цвет волос: </span>{state.hairColor}</p>
                <p className="name"><span className="green">Цвет глаз: </span>{state.eyeColor}</p>
            </div>
            <img alt="" className={img ? "image" : "none"} src={img ? img : ''}/>
        </div>
    )

};

export {Content};
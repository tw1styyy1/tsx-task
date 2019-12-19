import * as React from 'react';
import {Swapi} from "../App/swapi";
import {useState} from "react";
import { useParams } from 'react-router-dom';
import './content.scss';

const Content: React.FC = () => {

    const { id } = useParams();
    const swapi = new Swapi();
    const img = swapi.getPhoto(id);

    const [state, setState] = useState({
        name: null,
        id: null,
        hairColor: null,
        eyeColor: null
    });

    swapi.getPerson(id).then((item) => {
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
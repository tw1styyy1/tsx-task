import * as React from 'react';
import {Swapi} from "../../services/swapi";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import './content.scss';

const Content: React.FC = () => {

    const { id } = useParams();
    const swapi = new Swapi();
    const img = swapi.getPhoto(String(id));  // todo: fix me

    const [state, setState] = useState({
        name:'...',
        hairColor:'...',
        eyeColor:'...',
    });

    useEffect(updatePerson,[]);

    function onPersonLoaded(person:any) {
        setState(person);
    }

    function updatePerson() {
        swapi.getPerson(id).then(onPersonLoaded);
    }

    return(
        <div className="content d-flex">
            <div className="content-info">
                <p className="name"><span className="green">Имя персонажа: </span>{state.name}<br/></p>
                <p className="name"><span className="green">Цвет волос: </span>{state.hairColor}</p>
                <p className="name"><span className="green">Цвет глаз: </span>{state.eyeColor}</p>
            </div>
            <img alt="" className={img ? "image" : "none"} src={img ? img : '#'}/>
        </div>
    )
};

export {Content};
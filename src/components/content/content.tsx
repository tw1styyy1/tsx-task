import * as React from 'react';
import {Swapi} from "../../services/swapi";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import './content.scss';

interface PersonVale{
    name?: string,
    hairColor?: string,
    eyeColor?: string,
}

const Content: React.FC = () => {

    const { id } = useParams();
    const swapi = new Swapi();

    const [state, setState] = useState<PersonVale>({
        name:'Загрузка...',
        hairColor:'Загрузка...',
        eyeColor:'Загрузка...',
    });

    useEffect(updatePerson,[]);

    function onPersonLoaded(person:PersonVale) {
        setState(person);
    }

    function updatePerson() {
        swapi.getPerson(id).then(onPersonLoaded);
    }

    return(
        <div className="content d-flex">
            <div className="content-info">
                <p className={state.name ? "name" : "none"}><span className="green">Имя персонажа: </span>{state.name}<br/></p>
                <p className={state.hairColor ? "name" : "none"}><span className="green">Цвет волос: </span>{state.hairColor}</p>
                <p className={state.eyeColor ? "name" : "none"}><span className="green">Цвет глаз: </span>{state.eyeColor}</p>
            </div>
        </div>
    )
};

export {Content};
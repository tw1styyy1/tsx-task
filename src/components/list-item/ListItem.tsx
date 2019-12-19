import * as React from 'react';
import './ListItem.css';
import {Link} from "react-router-dom";
import {Data} from "../App/data";

const ListItem: React.FC = () => {

    const data = new Data();

    return(
        <ul className="list-group">
            {data.getList().map((item, index) => (
                <li
                    key={item.name}
                    className="list-group-item d-flex justify-content-between align-items-center">
                    <Link to={item.href}>{item.name}</Link>
                    <span className="badge badge-primary badge-pill">{item.span}</span>
                </li>
            ))}
        </ul>
    );

};

export {ListItem};
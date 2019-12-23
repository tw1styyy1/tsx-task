import * as React from 'react';
import {Link} from "react-router-dom";
import {Data} from "../../services/data";
import './ListItem.scss';

const ListItem: React.FC = () => {

    const data = new Data();

    return(
        <ul className="list-group">
            {data.getList().map((item) => (
                <Link key={item.name} to={`/people/${item.id}`}>
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center">
                        {item.name}
                        <span className="badge badge-primary badge-pill">{item.span}</span>
                    </li>
                </Link>
            ))}
        </ul>
    );

};

export {ListItem};
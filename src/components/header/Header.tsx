import * as React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";
import {Data} from "../App/data";

const Header: React.FC = () => {

    const data = new Data();

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                {data.getHeader().map((item) => (
                    <li key={item.name} className="nav-item">
                        <Link className="nav-link" to={item.href}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export {Header};
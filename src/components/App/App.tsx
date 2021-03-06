import * as React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Header} from "../header/Header";
import {ListItem} from "../list-item/ListItem";
import {Content} from "../content/content";
import './App.scss'

const App: React.FC = () => {

    return(
        <Router>
            <Header/>
            <Route exact path={'/'}>
                <ListItem/>
            </Route>
            <Route exact path="/people/:id/">
                <Content/>
            </Route>
        </Router>
    )

};

export {App};

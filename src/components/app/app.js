import React, {useEffect} from "react";
import {Route, Switch, useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import {app as actions} from "../../store/actions/app";
import Types from '../../classes/types';
import HomePage from "../pages/home-page";
import Navbar from "../navbar";
import TodoPage from "../pages/todo-page";

import './app.scss';

const { routingMap } = Types;

const App = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        history.push(routingMap.get('home').path)
        dispatch(actions.getItems());
    }, [dispatch]);

    return (
        <div className="App">
            <Navbar />

            <Switch>
                <Route path={routingMap.get('home').path} component={HomePage} exact />
                <Route path={routingMap.get('todo').path} component={TodoPage} exact />
            </Switch>
        </div>
    );
};

export default App;
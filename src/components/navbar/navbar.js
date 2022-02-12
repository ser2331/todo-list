import React from "react";
import { useHistory } from 'react-router-dom';
import Types from "../../classes/types";

import './navbar.scss';

const { routingMap } = Types;

const Navbar = () => {
    const history = useHistory();

    return (
        <div className="Navbar">
            <div className="Navbar__btn-wrapper">
                <button
                    className="btn"
                    type="button"
                    onClick={() => history.push(routingMap.get('home').path)}
                >
                    {`Главная`}
                </button>
                <button
                    className="btn"
                    type="button"
                    onClick={() => history.push(routingMap.get('todo').path)}
                >
                    {`ToDo - List`}
                </button>
            </div>
            <div className="Navbar__delimiter-wrapper">
                <div className="delimiter" />
            </div>
        </div>
    );
};

export default Navbar;
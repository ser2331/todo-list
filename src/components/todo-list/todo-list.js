import React from "react";
import { useDispatch } from "react-redux";
import { app as actions } from '../../store/actions';
import deleteIcon from '../../assets/images/icons8-delete-64.png';

import './todo-list.scss';

const TodoList = ({items}) => {

    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(actions.deleteItem(id));
    };

    const onEditItem = (id) => {
        dispatch(actions.editItem(id));
    };

    const renderItem = (item) => (
        <div className='TodoList__item-wrapper' key={item.id}>
            <div
                className="item"
                onClick={() => onEditItem(item.id)}
                style={{ textDecoration: item.completed ? "line-through" : "" }}
            >
                {item.title}
            </div>

            <button
                type="button"
                className="delete"
                onClick={() => onDelete(item.id)}
            >
               <img src={deleteIcon} alt="delete" />
            </button>
        </div>
    );

    return (
        <div className="TodoList">
            {items.map(renderItem)}
        </div>
    );
};

export default TodoList;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { app as actions } from '../../store/actions';
import addItem from "../../assets/images/add.png";

import './add-item-form.scss';

const AddItemForm = () => {
    const dispatch = useDispatch();
    const [isText, setText] = useState('');

    const handleChange = (e) => {
        setText(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.addItem(isText));
        setText("");
    };

    return (
        <div className="AddItemForm">
            <form onSubmit={handleSubmit} className="AddItemForm__form-wrapper">
                <input
                    value={isText}
                    className="add-input"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="delete"
                >
                    <img src={addItem} alt="delete" />
                </button>
            </form>
        </div>
    );
};

export default AddItemForm;
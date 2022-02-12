import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../../pagination";
import TodoList from "../../todo-list";
import AddItemForm from "../../add-item-form";

import './todo-page.scss';

const TodoPage = () => {

    const items = useSelector(state => state.app.items);
    const currentPage = useSelector(state => state.app.currentPage);
    const pageSize = useSelector(state => state.app.pageSize);

    const itemsPage = items.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <div className="TodoPage">
            <TodoList items={itemsPage} />

            <AddItemForm />

            <Pagination
                currentPage={currentPage}
                pageSize={pageSize}
                totalCount={items.length}
            />
        </div>
    );
};

export default TodoPage;
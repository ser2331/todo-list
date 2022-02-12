import { app as actions } from '../../actions';

const initialState = {
    items: [],
    pageSize: 5,
    currentPage: 1,
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case actions.ITEMS:
            return {
                ...state,
                items: action.payload,
            };

        case actions.EDIT_ITEM:
            const newTodos =state.items.map((item) => item.id === action.payload ? {...item, completed: !item.completed} : {...item});

            return {
                ...state,
                items: newTodos,
            };

        case actions.DELETE_ITEM:
            const newArray = state.items.filter(({ id }) => id !== action.payload);

            return {
                ...state,
                items: newArray,
            };

        case actions.SET_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };

        case actions.ADD_ITEM:
            const newItem = {
                userId: 1,
                id: Math.random(),
                title: action.payload,
                completed: false,
            };
            return {
                ...state,
                items: [
                    newItem,
                    ...state.items,

                ],
            };

        default:
            return state;
    }
};

export default app;

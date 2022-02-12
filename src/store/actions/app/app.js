export const ITEMS = 'ITEMS';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SET_PAGE = 'SET_PAGE';
export const ADD_ITEM = 'ADD_ITEM';

export const items = (payload = '') => ({ type: ITEMS, payload });

export const editItem = (payload = '') => ({ type: EDIT_ITEM, payload });

export const deleteItem = (payload = '') => ({ type: DELETE_ITEM, payload });

export const setPage = (payload = '') => ({ type: SET_PAGE, payload });

export const addItem = (payload = '') => ({ type: ADD_ITEM, payload });

export const getItems = () => (dispatch, getState, apiService) => {
    apiService.getItems()
        .then((res) => {
            dispatch(items(res.data));
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
};

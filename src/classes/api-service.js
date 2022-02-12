import axios from 'axios';

class ApiService {
    _baseApi = ' https://jsonplaceholder.typicode.com/';

    _items = 'todos/';

    getItems = async () => await axios.get(this._baseApi + this._items, {});

}
export default ApiService;

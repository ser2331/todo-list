export default class Types {
    static routing = [
        { id: 0, key: 'home', path: '/' },
        { id: 1, key: 'todo', path: '/todo-list' },
    ];

    static routingMap = Types.routing.reduce((acc, item) => acc.set(item.key, { ...item }), new Map());

}

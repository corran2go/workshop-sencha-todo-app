App.models.Todo = Ext.regModel('Todo', {
    // create the Todo attributes
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        }
    ],
    // store Todos in HTML5 localstorage
    proxy: {
        type: 'localstorage',
        id: 'todo-proxy'
    }
});

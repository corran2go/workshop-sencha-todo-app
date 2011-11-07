App.stores.remoteTodos = new Ext.data.Store({
    // use our model
    model: 'Todo',
    autoLoad: true,
    // read Todos via AJAX as JSON
    proxy: {
        type: 'ajax',
        url: 'data/todos.json',
        reader: {
            type: 'json',
            root: 'todos',
            successProperty: 'success'
        }
    }
});

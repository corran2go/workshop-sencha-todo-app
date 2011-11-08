App.stores.todos = new Ext.data.Store({
    // use our model
    model: 'Todo',
    autoLoad: true,
    // store Todos in HTML5 localstorage
    proxy: {
        type: 'localstorage',
        id: 'todo-proxy',
        proxy: {
          idProperty: 'id'
        }
    }
});

App.stores.offlineTodos = new Ext.data.Store({
    // use our model
    model: 'Todo',
    autoLoad: true,
    // store Todos in WebDB
    proxy: {
        type: 'websql',
        dbName: 'todos',
        dbTable: 'todos',
        // idProperty: 'id',
        proxy: {
          idProperty: 'id'
        },
        writer: {
            type: 'json',
            writeAllFields: false
        }
    }
});

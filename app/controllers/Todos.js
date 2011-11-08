Ext.regController('Todos', {
    // use our store
    // store: App.stores.todos,
    // use WebDB Todos
    store: App.stores.offlineTodos,

    index: function() {
        App.views.viewport.reveal('todosList');
    },

    newForm: function() {
        console.log('newForm');
        // create empty record and display the form
        var record = new App.models.Todo()
        App.views.todosForm.load(record);
        App.views.viewport.reveal('todosForm');
    },

    editForm: function(params) {
        console.log('editForm');
        // read record from store via list index and display the form
        var record = this.store.getAt(params.index);
        App.views.todosForm.load(record);
        App.views.viewport.reveal('todosForm');
    },

    save: function(params) {
        console.log('save');
        // add record to store
        this.store.add(params.record);
        console.log('added to store');
        // sync store and refresh view
        this.store.sync();
        console.log('synced store');
        this.index();
    },

    update: function(params) {
        console.log('update');
        this.store.sync();
        this.index();
    },

    remove: function(params) {
        console.log('remove');
        this.store.remove(params.record);
        this.store.sync();
        this.index();
    }
});

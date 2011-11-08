Ext.regController('Todos', {
    // use our store
    store: App.stores.todos,

    index: function() {
        App.views.viewport.reveal('todosList');
    },

    newForm: function() {
        // create empty record and display the form
        var record = new App.models.Todo()
        App.views.todosForm.load(record);
        App.views.viewport.reveal('todosForm');
    },

    editForm: function(params) {
        // read record from store via list index and display the form
        var record = this.store.getAt(params.index);
        App.views.todosForm.load(record);
        App.views.viewport.reveal('todosForm');
    },

    save: function(params) {
        // add record to store
        this.store.add(params.record);
        // sync store and refresh view
        this.store.sync();
        this.index();
    },

    update: function(params) {
        this.store.sync();
        this.index();
    },

    remove: function(params) {
        this.store.remove(params.record);
        this.store.sync();
        this.index();
    }
});

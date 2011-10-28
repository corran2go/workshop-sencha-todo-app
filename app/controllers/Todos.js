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
        // store form data in record
        params.record.set(params.data);
        // add record to store
        this.store.add(params.record);
        // sync store and refresh view
        this.store.sync();
        this.index();
    },

    update: function(params) {
        // store form data in record
        params.record.set(params.data);
        // save updated record
        params.record.save();
        // refresh view
        this.index();
    },

    remove: function(params) {
        this.store.remove(params.record);
        this.store.sync();
        this.index();
    }
});

Ext.regController('Todos', {
    store: App.stores.todos,

    index: function() {
        App.views.viewport.reveal('todosList');
    },

    newForm: function() {
        var model = new App.models.Todo()
        App.views.todosForm.load(model);
        App.views.viewport.reveal('todosForm');
    },

    editForm: function(params) {
        var model = this.store.getAt(params.index);
        App.views.todosForm.load(model);
        App.views.viewport.reveal('todosForm');
    },

    save: function(params) {
        params.record.set(params.data);
        var errors = params.record.validate();

        if (errors.isValid()) {
            this.store.create(params.data);
            this.index();
        } else {
            alert(errors);
        }
    },

    update: function(params) {
        var tmpTodo = new App.models.Todo(params.data),
            errors = tmpTodo.validate()

        if (errors.isValid()) {
            params.record.set(params.data);
            params.record.save();
            this.index();
        } else {
            alert(errors);
        }
    },

    remove: function(params) {
        this.store.remove(params.record);
        this.store.sync();
        this.index();
    }
});

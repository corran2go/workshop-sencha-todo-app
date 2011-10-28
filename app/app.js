// create the Application
Ext.regApplication(
    // configure it by passing an object to the constructor
    {
        // creates the 'App' object/namespace, and also creates the sub-namespaces:
        // 'App.models', 'App.stores', 'App.views', 'App.controllers'
        name: 'App',
        // 'launch()' is called after the document finished loading
        launch: function() {
            // create the main viewport, this -> 'App'
            this.views.viewport = new this.views.Viewport();

            // create a reference to the views via a ComponentQuery for the id
            this.views.todosList = this.views.viewport.down('#todosList');
            this.views.todosForm = this.views.viewport.down('#todosForm');
        }
    }
);

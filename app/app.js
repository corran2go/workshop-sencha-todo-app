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
        }
    }
);

// create the Application
new Ext.Application(
    // configure it by passing an object to the constructor
    {
        // creates a 'App' object/namespace
        name: 'App',
        // 'launch()' is called after the document finished loading
        launch: function() {
            // create the main viewport
            this.views.viewport = new this.views.Viewport();
        }
    }
);

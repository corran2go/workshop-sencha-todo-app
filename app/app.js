// create the Application
new Ext.Application(
    // configure it by passing an object to the constructor
    {
        // 'launch()' is called after the document finished loading
        launch: function() {
            // create the main panel
            new Ext.Panel(
                // configure it by passing an object to the constructor
                {
                    fullscreen: true,
                    layout: 'fit',
                    styleHtmlContent: true,
                    // add the following list of components to the dock (default: top)
                    dockedItems: [
                        {
                            // create a Toolbar object, short form of 'new Ext.Toolbar()'
                            xtype: 'toolbar',
                            title: 'My First App'
                        }
                    ],
                    // display some simple HTML content
                    html: '<h2>Hello Sencha Touch!</h2>I did it!'
                }
            );
        }
    }
);

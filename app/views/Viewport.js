// the main viewport is a subclass of a panel
App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'fit',

    initComponent: function() {
        // place items by adding them to the list of components
        Ext.apply(this, {
            items: [
                {
                    // use the custom xtype to add our todos list
                    xtype: 'App.views.TodosList',
                    // enable access to it via '#todosList' using ComponentQuery
                    id: 'todosList'
                }
            ]
        });
        App.views.Viewport.superclass.initComponent.call(this);
    }
});

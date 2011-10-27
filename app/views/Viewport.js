// the main viewport is a subclass of a panel
App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'fit',
    initComponent: function() {
        // place items by adding them to the List configuration
        Ext.apply(this, {
            items: [
                {
                    // use the custom xtype to add our todos list
                    xtype: 'App.views.todosList',
                    id: 'todosList'
                }
            ]
        });
        App.views.Viewport.superclass.initComponent.call(this);
    }
});

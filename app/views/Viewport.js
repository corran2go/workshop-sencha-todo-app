// the main viewport is a subclass of a panel
App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',

    initComponent: function() {
        // place items by adding them to the List configuration
        Ext.apply(this, {
            items: [
                {
                    // use the custom xtype to add our todos list
                    xtype: 'App.views.TodosList',
                    id: 'todosList'
                },
                {
                    xtype: 'App.views.TodosForm',
                    id: 'todosForm'
                }
            ]
        });
        App.views.Viewport.superclass.initComponent.call(this);
    },

    reveal: function(target) {
        var direction = (target === 'todosList') ? 'right' : 'left'
        this.setActiveItem(
            App.views[target],
            { type: 'slide', direction: direction }
        );
    }
});

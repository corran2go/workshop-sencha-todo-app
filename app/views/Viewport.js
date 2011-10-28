// the main viewport is a subclass of a panel
App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    // place list and form view as cards next to another
    layout: 'card',

    initComponent: function() {
        // place items by adding them to the list of components
        Ext.apply(this, {
            items: [
                {
                    // use the custom xtype to add our todos list
                    xtype: 'App.views.TodosList',
                    // enable access to it via '#todosList' using ComponentQuery
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

    // allow nagivation between list and form
    reveal: function(target) {
        var direction = (target === 'todosList') ? 'right' : 'left'
        this.setActiveItem(
            App.views[target],
            {
                // slide between list and form
                type: 'slide',
                direction: direction
            }
        );
    }
});

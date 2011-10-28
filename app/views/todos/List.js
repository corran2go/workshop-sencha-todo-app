App.views.TodosList = Ext.extend(Ext.Panel, {
    // initialize the UI
    initComponent: function() {
        // create add button
        var addButton = {
            itemId: 'addButton',
            // display default add icon
            iconCls: 'add',
            iconMask: true,
            ui: 'plain',
            // react on button click/tap
            handler: this.onAddAction,
            scope: this
        };

        // create title bar
        var titlebar = {
            xtype: 'toolbar',
            dock: 'top',
            title: 'Todos',
            // add button to toolbar
            items: [
                // spacer takes all remaining space -> button is right aligned
                { xtype: 'spacer' },
                addButton
            ]
        };

        // create list
        var list = {
            xtype: 'list',
            // display the todo title
            itemTpl: '{title}',
            // static data without store
            store: null,
            data: [
                { title: 'Todo 1' },
                { title: 'Todo 2' },
                { title: 'Todo 3' }
            ],
            // react on todo-item click/tap
            listeners: {
                itemtap: this.onItemtapAction,
                scope: this
            }
        };

        // place items by adding them to the List configuration
        Ext.apply(this, {
            layout: 'fit',
            dockedItems: [ titlebar ],
            items: [ list ]
        });

        // call super class
        App.views.TodosList.superclass.initComponent.call(this);
    },

    // handle add button
    onAddAction: function() {
        alert('add todo');
    },

    // handle list click/tap
    onItemtapAction: function() {
        alert('list tap');
    }
});

// register custom xtype
Ext.reg('App.views.TodosList', App.views.TodosList);

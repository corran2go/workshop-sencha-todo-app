App.views.todosList = Ext.extend(Ext.Panel, {
    // initialize the UI
    initComponent: function() {
        // create add button
        var addButton = {
            itemId: 'addButton',
            // display default add icon
            iconCls: 'add',
            iconMask: true,
            ui: 'plain',
            // click/tap handler
            handler: this.onAddAction,
            scope: this
        };

        // create title bar
        var titlebar = {
            xtype: 'toolbar',
            dock: 'top',
            title: 'Todos',
            // add toobar items
            items: [
                // spacer takes all remaining space -> button is right aligned
                { xtype: 'spacer' },
                addButton
            ]
        };

        // create list
        var list = {
            xtype: 'list',
            // display the title
            itemTpl: '{title}',
            // static data without store
            data: [
                { title: 'Todo 1' },
                { title: 'Todo 2' },
                { title: 'Todo 3' }
            ],
            store: null,
            // add listeners
            listeners: {
                itemtap: this.onItemtapAction,
                scope: this
            }
        };

        // place items by adding them to the List configuration
        Ext.apply(this, {
            html: 'list placeholder',
            layout: 'fit',
            dockedItems: [ titlebar ],
            items: [ list ]
        });

        // call super class
        App.views.todosList.superclass.initComponent.call(this);
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
Ext.reg('App.views.todosList', App.views.todosList);

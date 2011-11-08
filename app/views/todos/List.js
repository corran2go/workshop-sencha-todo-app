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
            // load/save Todo from/to our store
            // store: App.stores.todos,
            // use WebDB Todos
            store: App.stores.offlineTodos,
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
        // call 'newForm()' on 'Todos' controller
        Ext.dispatch({
            controller: 'Todos',
            action: 'newForm'
        });
    },

    // handle list click/tap
    onItemtapAction: function(list, index, item, e) {
        Ext.dispatch({
            controller: 'Todos',
            action: 'editForm',
            index: index
        });
    }
});

// register custom xtype
Ext.reg('App.views.TodosList', App.views.TodosList);

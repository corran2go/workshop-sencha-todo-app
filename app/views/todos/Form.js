App.views.TodosForm = Ext.extend(Ext.form.FormPanel, {
    initComponent: function() {
        var cancelButton = {
            text: 'Zurück',
            ui: 'back',
            handler: this.onCancelAction,
            scope: this
        };

        var titlebar = {
            id: 'todoFormTitlebar',
            xtype: 'toolbar',
            title: 'Neues Todo',
            items: [ cancelButton ]
        };

        var saveButton = {
            id: 'todoFormSaveButton',
            text: 'Speichern',
            ui: 'confirm',
            handler: this.onSaveAction,
            scope: this
        };

        var deleteButton = {
            id: 'todoFormDeleteButton',
            text: 'Löschen',
            ui: 'decline',
            handler: this.onDeleteAction,
            scope: this
        };

        var buttonbar = {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                deleteButton,
                { xtype: 'spacer' },
                saveButton
            ]
        };

        // create form fields
        var fields = {
            xtype: 'fieldset',
            id: 'todoFormFieldset',
            title: 'Todo',
            instructions: 'Bitte Titel und Beschreibung eingeben',
            // common field config
            defaults: {
                xtype: 'textfield',
                labelAlign: 'left',
                labelWidth: '30%',
                required: false,
                useClearIcon: true,
                autoCapitalize: false
            },
            items: [
                {
                    // bind the form to the model via name
                    name: 'id',
                    hidden: true
                },
                {
                    name : 'title',
                    label: 'Titel'
                },
                {
                    name: 'description',
                    label: 'Beschreibung'
                }
            ]
        };

        Ext.apply(this, {
            scroll: 'vertical',
            dockedItems: [ titlebar, buttonbar ],
            items: [ fields ],
            listeners: {
                // prepare the form for creating or updating a todo before it is shown
                beforeactivate: function() {
                    var deleteButton = this.down('#todoFormDeleteButton'),
                        saveButton = this.down('#todoFormSaveButton'),
                        titlebar = this.down('#todoFormTitlebar'),
                        model = this.getRecord();

                    // a new todo is not yet saved so it is in phantom state
                    if (model.phantom) {
                        titlebar.setTitle('Neues Todo');
                        saveButton.setText('Speichern');
                        deleteButton.hide();
                    } else {
                        titlebar.setTitle('Todo bearbeiten');
                        saveButton.setText('Aktualisieren');
                        deleteButton.show();
                    }
                },
                // clear the form after hiding
                deactivate: function() {
                    this.resetForm()
                }
            }
        });

        App.views.TodosForm.superclass.initComponent.call(this);
    },

    onCancelAction: function() {
        Ext.dispatch({
            controller: 'Todos',
            action: 'index'
        });
    },

    onSaveAction: function() {
        var record = this.getRecord();
        // store form data in record
        this.updateRecord(record, true);
        record.setDirty();

        Ext.dispatch({
            controller: 'Todos',
            action    : (record.phantom ? 'save' : 'update'),
            data      : this.getValues(),
            record    : record,
            form      : this
        });
    },

    onDeleteAction: function() {
        Ext.dispatch({
            controller: 'Todos',
            action    : 'remove',
            record    : this.getRecord()
        });
    },

    resetForm: function() {
        this.reset();
    }
});

Ext.reg('App.views.TodosForm', App.views.TodosForm);

App.views.TodosForm = Ext.extend(Ext.form.FormPanel, {
    defaultInstructions: 'Text eintragen/ändern',
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

        var fields = {
            xtype: 'fieldset',
            id: 'todoFormFieldset',
            title: 'Todo',
            instructions: this.defaultInstructions,
            defaults: {
                xtype: 'textfield',
                labelAlign: 'left',
                labelWidth: '40%',
                required: false,
                useClearIcon: true,
                autoCapitalize : false
            },
            items: [
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
                beforeactivate: function() {
                    var deleteButton = this.down('#todoFormDeleteButton'),
                        saveButton = this.down('#todoFormSaveButton'),
                        titlebar = this.down('#todoFormTitlebar'),
                        model = this.getRecord();

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
                deactivate: function() { this.resetForm() }
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
        var model = this.getRecord();

        Ext.dispatch({
            controller: 'Todos',
            action    : (model.phantom ? 'save' : 'update'),
            data      : this.getValues(),
            record    : model,
            form      : this
        });
    },

    onDeleteAction: function() {
        Ext.Msg.confirm("Todo entfernen?", "", function(answer) {
            if (answer === "yes") {
                Ext.dispatch({
                    controller: 'Todos',
                    action    : 'remove',
                    record    : this.getRecord()
                });
            }
        }, this);
    },

    resetForm: function() {
        var fieldset = this.down('#todoFormFieldset');
        fieldset.setInstructions(this.defaultInstructions);
        this.reset();
    }
});

Ext.reg('App.views.TodosForm', App.views.TodosForm);

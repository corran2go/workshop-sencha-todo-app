App.models.Todo = Ext.regModel('Todo', {
    // create the Todo attributes
    idProperty: 'id',
    fields: [
        // {
            // name: 'id',
            // type: 'int'
        // },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        }
    ]
});

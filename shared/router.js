Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'listTodos'});

Router.route('/todos/:_id', {
    name: 'todo',
    data: function() {
        let todoId = this.params._id;
        return Todos.findOne({ _id: todoId });
    }
});

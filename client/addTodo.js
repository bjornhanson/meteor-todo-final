Template.addTodo.events({
    'submit form': function(event) {
        event.preventDefault();
        let todo = {
            createdOn: new Date(),
            createdBy: Meteor.userId(),
            isDone: false,
            value: $(event.target).find('input[name="todo"]').val()
        };

        var todoId = Todos.insert(todo);
        //Router.go('/todos/' + todoId);

    }

});

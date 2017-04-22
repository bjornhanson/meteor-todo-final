Template.listTodos.helpers({
    'todos': function() {
        return Todos.find({ createdBy: Meteor.userId() });
    },
    'todosLeft': function() {
        return Todos.find({ createdBy: Meteor.userId(), isDone: false }).count();
    }
});

Template.listTodos.events({
    'click button[name="delete"]': function(event) {
        event.preventDefault();
        Todos.remove({ _id: this._id });
    },
    'change input[name="checkDone"]': function(event) {
        let isDone = false;
        if ($(event.target).prop('checked')){
            console.log('checked!');
            isDone = true;
        }
        Todos.update({ _id: this._id }, { $set: { isDone: isDone } });
    }
})

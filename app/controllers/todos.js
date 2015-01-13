import Ember from 'ember';

export default Ember.Controller.extend({
  newTodo: '',

  actions: {
    createTodo: function () {
      var todoTitle = this.get('newTodo'),
          todo = this.get('store').createRecord('todo', {
            title: todoTitle
          });

      todo.save();
    }
  }
});

import TodosIndexRoute from 'todos/routes/todos/index';

export default TodosIndexRoute.extend({
  model: function () {
    return this.get('store').filter('todo', function (todo) {
      return todo.get('isCompleted');
    });
  }
});

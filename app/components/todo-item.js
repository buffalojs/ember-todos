import Ember from 'ember';

export default Ember.Component.extend({
  saveState: function () {
    this.get('todo').save();
  }.observes('todo.isCompleted'),

  actions: {
    destroy: function () {
      var todo = this.get('todo');

      todo.destroyRecord();
    }
  }
});

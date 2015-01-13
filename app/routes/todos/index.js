import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'todos/index',
  templateName: 'todos/index',

  model: function () {
    return this.get('store').find('todo');
  }
});

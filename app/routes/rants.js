import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('rant');
  },
  // connects to rants/new controller
  // actions: {
  //   refresh: function() {
  //     this.refresh();
  //   }
  // }
});

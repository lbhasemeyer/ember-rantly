import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    doSearch: function() {
      var input = this.get('term');
      this.store.find('rant', {find: input}).then(function (res) {
        this.set('model', res);
        this.transitionToRoute('rants');
      }.bind(this));
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  // queryParams: ['searchparams'],
  // searchparams: null,
  // needs: ['rants/index'],

  actions: {
    doSearch: function() {
      var input = this.get('term');
      this.store.find('rant', {find: input}).then(function (result) {
        this.set('model', result);
        console.log(result);
        console.log(this);
      }.bind(this));
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  // queryParams: ['searchparams'],
  // searchparams: null,
  // needs: ['rants/index'],
  loggedIn: false,

  setupController: function(controller) {
    controller.reset();
  },

  reset: function() {
    this.setProperties({
      email: "",
      password: "",
      errorMessage: ""
    });
  },

  actions: {
    doSearch: function() {
      var input = this.get('term');
      var controller = this;

      if ((typeof(input) == 'undefined') || (input === '')) {
        Ember.$(".search-area").placeholder.html("This can't be blank!");
      } else {
        controller.store.find('rant', {find: input}).then(function (result) {
          controller.set('model', result);
        });
        Ember.$(".search-area").placeholder.html("Search");
        controller.set('search', '');
        controller.transitionToRoute('rants.search', { queryParams: {term: input} });
      }
    },

    signIn: function() {
      var controller = this;
      var data = {
        email: this.get("email"),
        password: this.get("password")
      };
      controller.set('errorMessage', null);
      var session = controller.store.createRecord('session', data);
      session.save().then(function(){
        controller.set('loggedIn', true);
        localStorage.setItem('authToken', session._data.token);
        controller.transitionToRoute('rants');
      });
    },

    signOut: function() {
      localStorage.clear();
      this.transitionToRoute('rants');
    }
  }
});

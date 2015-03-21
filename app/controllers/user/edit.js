import Ember from "ember";

export default Ember.ObjectController.extend({

  actions: {
    editUser: function(user) {
      var first_name = this.get('first_name');
      var last_name = this.get('last_name');
      var email = this.get('email');
      Ember.$(".errors").html('');

      if (((first_name == null) || (first_name.length === 0)) || ((last_name == null) || (last_name.length === 0)) || ((email == null) || (email.length === 0))) {
        Ember.$(".errors").append("<p>" + "Please enter all fields." + "</p");
      } else if (first_name && last_name && email) {
        user.set('first_name', first_name);
        user.set('last_name', last_name);
        user.set('email', email);
        user.save().then(function() {
          this.transitionToRoute('users');
        }.bind(this));
      }
    },

    deleteUser: function(user) {
      user.deleteRecord();
      user.save().then(function(){
        this.transitionToRoute('users');
      }.bind(this));
    }
  },

  fullName: function() {
    return this.get("first_name") + " " + this.get("last_name");
  }.property('first_name', 'last_name')

});

import Ember from "ember";

export default Ember.ArrayController.extend({

  actions: {

    register: function() {
      var controller = this;
      var firstName = this.get('fName');
      var lastName  = this.get('lName');
      var email     = this.get('userEmail').trim();
      var password  = this.get('userPassword');
      var passwordConfirm  = this.get('passwordConfirm');

      var user = controller.store.createRecord('user',
    { first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirmation: passwordConfirm});

      controller.set('fName', '');
      controller.set('lName', '');
      controller.set('userEmail', '');
      controller.set('userPassword', '');
      controller.set('passwordConfirm', '');

      user.save().then(function(){

        var data = {
          email: controller.get("userEmail"),
          password: controller.get("userPassword")
        };
        controller.set('errorMessage', null);
        var session = controller.store.createRecord('session', data);
        session.save().then(function(){
          controller.set('loggedIn', true);
          localStorage.setItem('authToken', session._data.token);
          controller.transitionToRoute('rants');
        });
      });
    }

  }
});

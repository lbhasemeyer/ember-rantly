import Ember from "ember";

export default Ember.ArrayController.extend({

  actions: {

    register: function() {
      var controller = this;
      var firstName = this.get('fName'),
      lastName  = this.get('lName'),
      email     = this.get('userEmail').trim(),
      password  = this.get('userPassword'),
      passwordConfirm  = this.get('passwordConfirm');

      var user = controller.store.createRecord('user',
    { first_name: firstName,
      last_name: lastName,
      email: email,
      password_digest: password});

      controller.set('fName', '');
      controller.set('lName', '');
      controller.set('userEmail', '');
      controller.set('userPassword', '');

      user.save();
      alert("You have created an account.  Please sign in to continue.");
      // .then(function(){
      //
      //   var data = {
      //     email: controller.get("userEmail"),
      //     password: controller.get("userPassword")
      //   };
      //   controller.set('errorMessage', null);
      //   var session = controller.store.createRecord('session', data);
      //   session.save().then(function(){
      //     controller.set('loggedIn', true);
      //     localStorage.setItem('authToken', session._data.token);
      //     controller.transitionToRoute('rants');
      //   });
      // });
    }

  }
});

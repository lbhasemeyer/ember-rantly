import Ember from "ember";

export default Ember.ArrayController.extend({

  needs: ['application'],

  actions: {

    newUser: function() {
      var controller = this;

      var user = controller.store.createRecord('user',
    { firstName: this.get('first'),
    lastName: this.get('last'),
    email: this.get('email'),
    password: this.get('password'),
    passwordConfirmation: this.get('passwordconfirmation')
  });

  controller.set('first_name', '');
  controller.set('last_name', '');
  controller.set('email', '');
  controller.set('password', '');
  controller.set('password_confirmation', '');

  return user.save().then(function(response) {
    alert("You have created an account.  Please sign in to continue.");
  });
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

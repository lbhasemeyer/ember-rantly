import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editRant: function(rant){
      this.set('isEditing', true);
    },

    saveRant: function(rant) {
      var title = this.get('title');
      var body = this.get('body');
      if (body && title) {
        rant.set('title', title);
        rant.set('body', body);
        rant.save().then(function() {
          this.transitionToRoute('rants');
        }.bind(this));
      }
      this.set('isEditing', false);
    },

    cancelRant: function(rant){
      this.set('isEditing', false);
      this.transitionToRoute('rant');
    },

    deleteRant: function(rant) {
      rant.deleteRecord();
      rant.save().then(function(){
        this.transitionToRoute('rants');
      }.bind(this));
    }
  }

});

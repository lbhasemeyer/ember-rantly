import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {
    editRant: function(rant){
      rant.set('isEditing', true);
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
      this.transitionToRoute('rants');
    },

    deleteRant: function(rant) {
      rant.deleteRecord();
      rant.save().then(function(){
        this.transitionToRoute('rants');
      }.bind(this));
    }
  }

});

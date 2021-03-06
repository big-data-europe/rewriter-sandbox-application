import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model() {
    return this.get('store').createRecord('subject');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "subjects");
      }).catch( function() {
        alert("Creation of subject failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "subjects");
      }).catch( function() {
        alert("Cancelling creation of subject failed");
      });
    }
  }
});

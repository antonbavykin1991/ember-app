import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return Ember.RSVP.hash({
			user: this.modelFor('application').user,
	    questions: this.store.findAll('question', {orderBy: 'createdAt'})
	  });
	}
});

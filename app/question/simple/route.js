import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return Ember.RSVP.hash({
			user: this.modelFor('application').user,
	    question: this.store.findRecord('question', params.id).then(function (question) {
	    	return question;
	    }, function () {
	    	return false;
	    })
	  });
	},
	actions: {
		error: function () {
			console.log(1);
		}
	}
});

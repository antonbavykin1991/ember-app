import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return Ember.RSVP.hash({
			user: this.modelFor('application').user,
	    allQuestions: this.store.findAll('question'),
	    answeredQuestions: this.store.filter('question', function(question) {
			  return question.get('numberOfAnswers') > 0;
			}),
			notAnsweredQuestions: this.store.filter('question', function(question) {
			  return question.get('numberOfAnswers') == 0;
			})
	  });
	}
});

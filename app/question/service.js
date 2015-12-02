import Ember from 'ember';

export default Ember.Service.extend({
	store: Ember.inject.service('store'),
	destroyQuestion (question) {
    var arr = [],
        answers = question.get('answers').toArray();
    
    answers.forEach(function (answer) {
      arr.push(answer.destroyRecord());
    });

    return question.destroyRecord().then(function () {
      return Ember.RSVP.Promise.all(arr);
    });
  },
  postQuestion (question) {
	 	return this.get('store')
	 		.createRecord('question', question)
	 		.save();
  }, 
  editQuestion(question, text) {
		question.set('text', text);
    return question.save();
  },
  postAnswer(question, answer) {
    return this.get('store')
    	.createRecord('answer', answer)
    	.save()
    	.then(function (answer) {
      	question.get('answers').pushObject(answer);
      	return question.save();
    	});
	}
});

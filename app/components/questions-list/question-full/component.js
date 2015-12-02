import Ember from 'ember';

export default Ember.Component.extend({
	editable: false,
	_initialize: Ember.on('init', function() {
    var userID = this.get('session.secure.id');
		var editable = this.get('question.user.id') === userID ? true : false;
		this.set('editable', editable);
  }),
  numberOfAnswers: 0,
  actions: {
  	editQuestion () {
  		this.eventbus.publish('editQuestion', this.get('question'));
  	}
  }
});

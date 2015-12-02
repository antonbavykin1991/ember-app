import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	editable: false,
	_initialize: Ember.on('init', function() {
    var userID = this.get('session.secure.auth.uid');
		var editable = this.get('question.user.id') === userID ? true : false;
		this.set('editable', editable);
  }),
	actions: {
		editQuestion() {
			this.eventbus.publish('editQuestion', this.get('question'));
		},
		removeQuestion() {
			this.eventbus.publish('removeQuestion', this.get('question'));
		}
	}
});

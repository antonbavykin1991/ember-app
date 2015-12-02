import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
	validations: {
    'text': {
      presence: true,
      length: { 
      	minimum: 10 
      }
    }
  },
  runTestValidation: function() {
  	this.set('showError', true);
  }.observes('text'),
	actions: {
		postAnswer() {
			if (this.get('errors.text').length) {
				this.set('showError', true);
			} else {
				this.eventbus.publish('postAnswer', this.get('text'));
				this.set('text','');
				this.set('showError', false);	
			} 
		}
	}
});

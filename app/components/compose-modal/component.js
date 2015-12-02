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
	focusOnTextarea: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', () => {
      this.$().find('textarea').focus();
    });
  }),
  showError: false,
  runTestValidation: function() {
  	this.set('showError', true);
  }.observes('text'),
  actions: {
	  postQuestion: function() {	    
	   	if (this.get('errors.text').length) {
				this.set('showError', true);
			} else {
				this.attrs.post(this.get('text'));
				this.attrs.dismiss();
			} 
	  }
	}
});

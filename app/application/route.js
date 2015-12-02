import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model() {
  	var isAuth = this.get('session.isAuthenticated');
  	
  	return Ember.RSVP.hash({
			user: isAuth ? this.store.findRecord('user', this.get('session.secure.auth.uid')) : {}
		});
  }
});
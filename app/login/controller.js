import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login () {
      this.get('session').authenticate('authenticator:firebase', {
        'email': this.get('email'),
        'password': this.get('password')
      }).then(()=>{
        this.set('errorMessage', '');
        this.transitionTo('index');
      });
    },
    logout () {
      this.get('session').invalidate().then(()=>{
        this.transitionToRoute('login');
      });
    }
  }
});
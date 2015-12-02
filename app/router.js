import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

// Router.reopen({
//   notifyGoogleAnalytics: function() {
//     console.log(this.get('url'));
//   }.on('didTransition')
// });

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('login', {});
  this.route('protected', {});
  this.route('question', {path: '/questions'}, function() {
    
    this.route('list', {path: ''}, function() {
    	this.route('answered', {});
    	this.route('notanswered', {});
    });

    this.route('simple', {path: ':id'});
  });
});

export default Router;

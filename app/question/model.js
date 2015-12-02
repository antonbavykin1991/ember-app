import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  text: DS.attr('string'),
  user: DS.belongsTo('user', {async: true}),
  answers: DS.hasMany('answer', {async: true}),
  createdAt: DS.attr('date'),
  numberOfAnswers: Ember.computed('answers', function() {
	  return this.get('answers.length');
	})
});

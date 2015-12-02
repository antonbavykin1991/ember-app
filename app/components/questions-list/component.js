import Ember from 'ember';
//import Surface from 'famous/core/Surface';

export default Ember.Component.extend({
	tagName: 'ul',
  classNames: ['card'],
  questionsSorting: ['createdAt:desc'],
  sortedQuestions: Ember.computed.sort('questions', 'questionsSorting')
});

import Ember from 'ember';
import EventBus from '../../mixins/event-bus';

export default Ember.Controller.extend(EventBus, {
  listen: {
    postAnswer: 'postAnswer'
  },
  actions: {
    postAnswer(text) {
      this.questionService.postAnswer(this.get('model.question'), {
        user: this.get('model.user'),
        text: text,
        question: this.get('model.question'),
        createdAt: new Date()
      });
		}
  }
});

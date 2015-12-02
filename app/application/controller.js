import Ember from 'ember';
import EventBus from '../mixins/event-bus';

export default Ember.Controller.extend(EventBus, {
  _setUser: function() {
    if (this.get('session.isAuthenticated')) {
      this.set('model.user', this.store.findRecord('user', this.get('session.secure.auth.uid')));
    }
  }.observes('session.isAuthenticated'),
  _clearQuestion: function () {
    if (!this.get('showingComposeModal')) {
      this.set('question', null);
      this.set('questionText', null);
    }
  }.observes('showingComposeModal'),
  listen: {
    removeQuestion: 'removeQuestion',
    editQuestion: 'editQuestion',
  },
  actions: {
    toggleComposeModal() {
      if (!this.get('session.isAuthenticated')) { 
        this.transitionToRoute('login');
        return false;
      }

      this.set('showingComposeModal', !this.get('showingComposeModal'));
    },
    invalidateSession() {
      this.get('session').invalidate();
    },
    postQuestions(text) {
      var question = this.get('question');
      
      if (question) {
        this.questionService.editQuestion(question, text);
      } else {
        this.questionService.postQuestion({
          user: this.get('model.user'),
          text: text,
          createdAt: new Date()
        });
      }
    },
    editQuestion (question) {
      this.set('questionText', question.get('text') );
      this.set('question', question);
      this.send('toggleComposeModal');
    },
    removeQuestion (question) {
      this.questionService.destroyQuestion(question);
    }
  }
});

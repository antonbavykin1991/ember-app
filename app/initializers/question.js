export function initialize(container, application) {
  application.inject('controller', 'questionService', 'service:question');
}

export default {
  name: 'question',
  initialize: initialize
};

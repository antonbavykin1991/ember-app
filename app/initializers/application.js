export function initialize(container, application) {
  application.inject('component', 'eventbus', 'service:eventbus');
  application.inject('controller', 'eventbus', 'service:eventbus');
}

export default {
  name: 'eventbus',
  initialize: initialize
};

import Ember from 'ember';
import EventBusMixin from '../../../mixins/event-bus';
import { module, test } from 'qunit';

module('Unit | Mixin | event bus');

// Replace this with your real tests.
test('it works', function(assert) {
  var EventBusObject = Ember.Object.extend(EventBusMixin);
  var subject = EventBusObject.create();
  assert.ok(subject);
});

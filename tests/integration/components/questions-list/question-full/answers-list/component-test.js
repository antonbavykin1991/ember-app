import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('questions-list/question-full/answers-list', 'Integration | Component | questions list/question full/answers list', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{questions-list/question-full/answers-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#questions-list/question-full/answers-list}}
      template block text
    {{/questions-list/question-full/answers-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

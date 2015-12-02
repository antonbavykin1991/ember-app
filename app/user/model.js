import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
  aboutMe: DS.attr('string'),
  image: DS.attr('string', { defaultValue: '/images/avatar.jpg'}),
  joinedAt: DS.attr('date')
});

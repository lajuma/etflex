import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('String'),
  desc: DS.attr('String'),
  // children: DS.hasMany('term', { inverse: 'parent' }),
  // parent: DS.belongsTo('term', { inverse: 'children' }),
});

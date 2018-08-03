import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';


export default Controller.extend({
  media: service(),
  sortedProperties: ['title:asc'],
  sortedTerms: computed.sort('model', 'sortedProperties'),

  filter: '',
  // never use arrow function in computed prop
  filteredTerms: computed('arrangedContent', 'filter', function() {
    const filter = this.get('filter');
    const regex = new RegExp(filter, 'gi');
    const terms = this.model;

    return terms.filter((term) => {
      return term.get('title').match(regex) || term.get('desc').match(regex);
    });
  }),

});

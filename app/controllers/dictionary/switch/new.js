import Controller from '@ember/controller';
// import { computed } from '@ember/object';


export default Controller.extend({

  // Actions

  actions: {

    addTerm() {
      const title = this.get('title');
      const desc = this.get('desc') || 'tba';

      if (title) {
        const term = { title, desc };
        // create record
        const newTerm = this.get('store').createRecord('term', term);
        // save to db
        newTerm.save();
        // reset properties
        this.setProperties({
          title: '',
          desc: '',
        });
      }
    },
  },
});

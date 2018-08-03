import Controller from '@ember/controller';
// import { computed } from '@ember/object';


export default Controller.extend({

  // Actions

  actions: {

    editTerm(id) {
      const title = this.get('model.title');
      const desc = this.get('model.desc');

      if (title && desc) {
        // update record
        this.get('store').findRecord('term', id).then(term => {
          this.set('title', title);
          this.set('desc', desc);
          // save to db
          term.save();
        });
        this.transitionToRoute('dictionary.switch.new');
      }

    },

    deleteTerm(id) {
      this.get('store').findRecord('term', id).then(term => {
        term.deleteRecord();
        // save to db
        term.save();
      });
      this.transitionToRoute('dictionary.switch.new');
    }
  },
});

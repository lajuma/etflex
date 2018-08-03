import Component from '@ember/component';

export default Component.extend({

  /** @type {String} **/
  tagName: 'etf-input-form',

  // Actions

  actions: {

    clickAction() {
      this.sendAction('clickAction');
    },

    deleteAction() {
      this.sendAction('deleteAction');
    }
  },

});

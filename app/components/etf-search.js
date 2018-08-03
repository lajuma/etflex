import Component from '@ember/component';

export default Component.extend({

  // Attributes

  /** @type {String} **/
  tagName: 'etf-search',

  // Actions

  actions: {

    keyDown() {
      this.sendAction('keyDown');
    }

  },
});

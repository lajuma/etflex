import Component from '@ember/component';

export default Component.extend({

  /** @type {String} **/
  tagName: 'etf-login-form',

  // Actions

  actions: {

    clickAction() {
      this.sendAction('clickAction');
    },
  }
  
});

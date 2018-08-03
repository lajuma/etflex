import Route from '@ember/routing/route';

export default Route.extend({
  // redirects to /list/switch
  beforeModel() {
    this.replaceWith('dictionary.switch');
  },
});

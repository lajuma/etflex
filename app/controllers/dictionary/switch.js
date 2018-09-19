import Controller from '@ember/controller';

export default Controller.extend({

  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {

    login(username, password) {
      this.get('session').open('firebase', {
            provider: 'password',
            email: username,
            password: password,
          }).then((data) => {
            console.log(data);
            this.transitionToRoute('dictionary.switch.new');
          });
    },

    logout() {
      this.get('session').close();
      this.transitionToRoute('dictionary.switch');
    },

},

});

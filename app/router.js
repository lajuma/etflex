import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dictionary', { path: 'list' }, function() {
    this.route('switch', function() {
      this.route('edit', { path: ':term_id' } );
      this.route('new');
    });
  });

});

export default Router;

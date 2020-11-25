export default {
  path: '/home',
  component: r =>  require.ensure([], () => r(require('./home.vue')), 'home'),
};

export default {
  path: '/html5',
  component: r =>  require.ensure([], () => r(require('./html5.vue')), 'html5'),
};

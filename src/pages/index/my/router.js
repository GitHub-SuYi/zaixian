export default {
  path: '/my',
  component: r =>  require.ensure([], () => r(require('./my.vue')), 'my'),
};

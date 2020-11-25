export default {
  path: '/vux',
  component: r =>  require.ensure([], () => r(require('./vux.vue')), 'vux'),
};

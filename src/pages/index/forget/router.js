export default {
  path: '/forget',
  component: r =>  require.ensure([], () => r(require('./forget.vue')), 'forget'),
};

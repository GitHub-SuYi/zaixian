export default {
  path: '/hot',
  component: r =>  require.ensure([], () => r(require('./hot.vue')), 'hot'),
};

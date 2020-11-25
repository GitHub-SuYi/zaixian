export default {
  path: '/zhuce',
  component: r =>  require.ensure([], () => r(require('./zhuce.vue')), 'zhuce'),
};

var Vue = require('vue'),
    app = require('./app.vue')

new Vue({
  el: '#app',
  render (h) {
    return h('app')
  },
  components: { app }
})


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const opts = {
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#1976d2',
        secondary: '#424242',
        accent: '#82b1ff',
        error: '#ff5252',
        info: '#2196f3',
        success: '#4caf50',
        warning: '#ffc107'
      }
    }
  }
}

Vue.use(Vuetify, opts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

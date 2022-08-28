import { createApp } from 'vue'
import App from './App.vue'

// Routes
import router from '@/router'

// Dependencies imports
import BootstrapVue3 from 'bootstrap-vue-3'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'

// CSS imports
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

app
  .use(VueAxios, axios)
  .use(router)
  .use(VueSweetalert2)
  .use(BootstrapVue3)
  .mount('#app')

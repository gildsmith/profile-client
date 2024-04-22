import router from './router.loader.js'
import {createPinia} from 'pinia'
import {createApp} from 'vue'
import App from './App.vue'

import axios from 'axios'

window.axios = axios
window.axios.defaults.withCredentials = true
window.axios.defaults.withXSRFToken = true
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
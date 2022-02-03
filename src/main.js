import { createApp } from 'vue'
import App from './App.vue'
import Vueform from '@vueform/vueform/plugin'
import vueformConfig from './../vueform.config'
import './index.css'

const app = createApp(App)

app.use(Vueform, vueformConfig)

app.mount('#app')
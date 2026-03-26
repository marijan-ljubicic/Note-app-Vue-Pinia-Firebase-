import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import './styles/tailwind.css'

createApp(App).use(router).mount('#app')

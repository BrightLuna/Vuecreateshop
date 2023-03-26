import 'mdb-vue-ui-kit/css/mdb.min.css'
// import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'; // here
import 'primeicons/primeicons.css';

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons

createApp(App).use(router).use(PrimeVue).mount('#app')

// import "bootstrap/dist/js/bootstrap.js"
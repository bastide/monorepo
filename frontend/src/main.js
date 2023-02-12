import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from "./router";

// bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
createApp(App).use(router).mount('#app')

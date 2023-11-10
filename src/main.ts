import './assets/main.css'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'
Amplify.configure(awsExports);
createApp(App).use(router).mount('#app')

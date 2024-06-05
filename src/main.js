import  './assets/style.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faCodeBranch,faCodeFork,faSpinner,faStar,faBars} from '@fortawesome/free-solid-svg-icons'
import {faEye} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faGithub,faEye,faCodeBranch,faCodeFork,faStar,faSpinner,faBars)


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')

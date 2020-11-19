import Vue from 'vue'
import App from './App'
import store from '@/store'

import { uniRequest } from './util/request.js'

Vue.prototype.$uniRequest = uniRequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()

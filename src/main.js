// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'
import installPlugin from '@/plugin'
import './index.less'
import '@/assets/icons/iconfont.css'
import TreeTable from 'tree-table-vue'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'
// Mock should not be introduced in prd
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(TreeTable)
Vue.use(VOrgTree)
/**
 * @description Register admin built-in plugin
 */
installPlugin(Vue)
/**
 * @description Production environment shutdown prompt
 */
Vue.config.productionTip = false
/**
 * @description Global registration application configuration
 */
Vue.prototype.$config = config
/**
 * registration instruction
 */
importDirective(Vue)
Vue.directive('clickOutside', clickOutside)


/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})

Vue.mixin({
  methods: {
    capitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1),
    l: str => this.$i18n.messages[this.$i18n.locale][str]
  }
})
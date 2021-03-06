import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from '@/store.js'
import i18nPlugin from './plugins/i18n.js'

const i18nStrings = {
    en: {
        hi: 'Hello'
    },
    ko : {
        hi: '안녕'
    }
}
const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18nPlugin, i18nStrings)
app.mixin(mixins)
app.mount('#app')
app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})
window.Kakao.init("b0e0aa848edf4bb18e08b2032f4b311a");




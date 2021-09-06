//import Vuex from '@/views/vuex/Vuex.vue'
import StoreAccess from "@/views/vuex/StoreAccess.vue"

export default {
    path: '/vuex',
    name: 'Vuex',
    component: StoreAccess,
    children: [
        {
            path: 'storeaccess',
            component: StoreAccess
        },
    ]
}
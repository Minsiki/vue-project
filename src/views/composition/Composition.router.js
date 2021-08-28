import Calculator from "@/views/composition/Calculator.vue"
import CalculatorAPI from '@/views/composition/CompositionAPI.vue'
import CalculatorAPI2 from '@/views/composition/CompositionAPI2.vue'
import CalculatorAPI3 from '@/views/composition/CompositionAPI3.vue'
import CalculatorAPI4 from '@/views/composition/CompositionAPI4.vue'

export default {
    path: '/composition',
    component: Calculator,
    children: [
        {
            path: 'calculator',
            component: CalculatorAPI
        }, {
            path: 'calculator2',
            component: CalculatorAPI2
        }, {
            path: 'calculator3',
            component: CalculatorAPI3
        }, {
            path: 'calculator4',
            component: CalculatorAPI4
        }
    ]
}
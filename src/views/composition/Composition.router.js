import Composition from '@/views/composition/Composition.vue'
import Calculator from "@/views/composition/Calculator.vue"
import CalculatorAPI from '@/views/composition/CompositionAPI.vue'
import CalculatorAPI2 from '@/views/composition/CompositionAPI2.vue'
import CalculatorAPI3 from '@/views/composition/CompositionAPI3.vue'
import CalculatorAPI4 from '@/views/composition/CompositionAPI4.vue'
import CompositionAPIProvide from '@/views/composition/CompositionAPIProvide.vue'
import Mixins from '@/views/composition/Mixins.vue'
import Plugins from '@/views/composition/Plugin.vue'

export default {
    path: '/composition',
    name: 'Composition',
    component: Composition,
    children: [
        {
            path: 'calculator',
            component: Calculator
        },
        {
            path: 'calculator1',
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
        }, {
            path: 'provideIndect',
            component: CompositionAPIProvide
        }, {
            path: 'mixins',
            component: Mixins
        }, {
            path: 'plugin',
            component: Plugins
        }
    ]
}
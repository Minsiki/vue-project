import Nested from '@/views/nested/NestedComponent.vue'
import Parent from '@/views/nested/ParentComponent.vue'
import Parent2 from '@/views/nested/ParentComponent2.vue'
import Parent3 from '@/views/nested/ParentComponent3.vue'
import Parent4 from '@/views/nested/ParentComponent4.vue'
import Parent5 from '@/views/nested/ParentComponent5.vue'

export default {
    path: '/nested',
    component: Nested,
    children: [
        {
            path: 'parent1',
            component: Parent
        }, {
            path: 'parent2',
            component: Parent2
        }, {
            path: 'parent3',
            component: Parent3
        }, {
            path: 'parent4',
            component: Parent4
        }, {
            path: 'parent5',
            component: Parent5
        }
        
    ]
}

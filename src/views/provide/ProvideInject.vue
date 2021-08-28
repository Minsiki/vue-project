<template>
 <provide-inject-child/>
</template>
<script>
import ProvideInjectChild from '@/views/provide/ProvideInjectChild.vue'
export default {
    name: '', 
    components: {ProvideInjectChild}, 
    data() {
        return {
            items: ['a', 'b']
        };
    },
    beforeCreate() {}, 
    created() {}, 
    beforeMount() {}, 
    mounted() {}, 
    beforeUpdate() {}, 
    updated() {}, 
    beforeUnMount() {}, 
    unmounted() {}, 
    provide() {
        return {
            itemLength: this.items.length
        };
    },
    methods: {}
}
</script>
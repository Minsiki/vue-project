<template>
    <child-component2 @send-message="sendMessage" ref="child_component2"/>
</template>
<script>
import ChildComponent2 from '@/views/nested/ChildComponent2.vue';
export default {
    name: '', 
    components: {ChildComponent2}, 
    data() {
        return {
            sampleData: ''
        };
    },
    beforeCreate() {}, 
    created() {}, 
    beforeMount() {}, 
    mounted() {
        this.$refs.child_component2.callFromParent();
    }, 
    beforeUpdate() {}, 
    updated() {}, 
    beforeUnMount() {}, 
    unmounted() {}, 
    methods: {}
}
</script>
<template>
    <child-component @send-message="sendMessage" ref="child_component"/>
</template>
<script>
import ChildComponent from '@/views/nested/ChildComponent.vue';

export default {
    name: '', 
    components: {ChildComponent}, 
    data() {
        return {
            sampleData: '',
        };
    },
    beforeCreate() {}, 
    created() {}, 
    beforeMount() {}, 
    mounted() {
        this.$refs.child_component.$refs.btn.click();
    }, 
    beforeUpdate() {}, 
    updated() {}, 
    beforeUnMount() {}, 
    unmounted() {}, 
    methods: {}
}
</script>
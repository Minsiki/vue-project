<template>
    <child-component @send-message="sendMessage"/>
</template>
<script>
import ChildComponent from '@/views/nested/ChildComponent4.vue'
export default {
    name: '', 
    components: {ChildComponent}, 
    data() {
        return {
            sampleData: ''
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
    methods: {
        sendMessage(data) {
            console.log(data);
        }
    }
}
</script>
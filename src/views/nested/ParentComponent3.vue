<template>
    <child-component @send-messgae="sendMessage" ref="child_component"/>
    <button type="button" @click="changeChildData">Change Child Data</button>
</template>
<script>
import ChildComponent from '@/views/nested/ChildComponent3.vue'
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
        changeChildData() {
            this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
        }
        
    }
}
</script>
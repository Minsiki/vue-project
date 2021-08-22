<template>
    <button type="button" @click="callFromParent" ref="btn">click</button>
</template>
<script>
export default {
    name: '', 
    components: {}, 
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
        callFromParent() {
            console.log("부모 컴포넌트에서 직접 호출한 함수");
        }
    }
}
</script>
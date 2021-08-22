<template>
    <div>
        <PageTitle title="페이지 제목이란다."/>
        Hello, Nested!!!
    </div>
    <router-view></router-view>
</template>
<script>
import PageTitle from "@/components/PageTitle.vue"
export default {
    name: '', 
    components: {PageTitle}, 
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
    methods: {}
}
</script>
<style scoped>
    div {
        margin-bottom: 5px;
        border-bottom: 1px solid black;
    }
</style>
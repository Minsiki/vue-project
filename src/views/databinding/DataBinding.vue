<template>
 <h1 class="title">
     Hello, {{title}}!
 </h1>
 <router-view></router-view>
</template>
<script>
export default {
    name: '', 
    components: {}, 
    data() {
        return {
            title: 'Databinding'
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
<style>
    .title {
        margin-bottom: 5px;
        border-bottom: 1px solid black;
    }
</style>
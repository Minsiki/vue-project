<template>
    <div>
        <h1 v-if="type == 'A'"> A</h1>
        <h1 v-else-if="type == 'B'"> B </h1>
        <h1 v-else> C</h1>
    </div>
</template>
<script>
export default {
    name: '', 
    components: {}, 
    data() {
        return {
            type: 'B'
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
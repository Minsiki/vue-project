<template>
    <div>
        <img v-bind:src="imgSrc"/>
    </div>
</template>
<script>
export default {
    name: '', 
    components: {}, 
    data() {
        return {
            imgSrc: 'https://kr.vuejs.org/images/logo.png'
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
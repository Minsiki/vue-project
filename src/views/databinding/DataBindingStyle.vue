<template>
    <div v-bind:style="styleObject">
        인라인 스타일 바인딩
    </div>
</template>
<script>
export default {
    name: '', 
    components: {}, 
    data() {
        return {
            styleObject: {
                color: 'red',
                fontSize: '13px'
            }
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
    .container {
        width: 100%;
        height: 200px;
    }

    .active {
        background-color: yellow;
        font-weight: bold;
    }

    .text-red {
        color: red;
    }
</style>
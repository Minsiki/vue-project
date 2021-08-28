<template>
    <div>
        <h2> Calculator</h2>
        <div>
            <input type="number" v-model="num1" @keyup="plusNumbers"/>
            <span> + </span>
            <input type="number" v-model="num2" @keyup="plusNumbers"/>
            <span> = </span>
            <span> {{result}}</span>
        </div>
    </div>
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
    methods: {}
}
</script>
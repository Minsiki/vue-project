<template>
    <div>
        <button type="button" @click="increaseCounter"> Add 1</button>
        <button type="button" @click="increaseParam(2)"> Add Param</button>
        <button type="button" @click="increaseCounter(), increaseParam(2)"> Add</button>
        
        <p> The counter is : {{counter}} </p>
    </div>
</template>
<script>
export default {
    name: '', 
    components: {}, 
    data() {
        return {
            counter: 1
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
        increaseCounter() {
            this.counter = this.counter + 1;
        },

        increaseParam(data) {
            this.counter = this.counter + data;
        }
    }
}
</script>
<template>
<div>
        <select v-model="city" @change="changeSelect">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select>
    </div>
</template>
<script>
export default {
    name: '', 
    components: {}, 
    data() {
        return {
            city: ''
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
        changeSelect() {
            alert(this.city);
        }
    }
}
</script>
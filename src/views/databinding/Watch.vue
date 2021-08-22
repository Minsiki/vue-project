<template>
    <h1> Full Name : {{fullName}}</h1>
    <button @click="changeName">Change</button>
</template>
<script>
export default {
    name: '', 
    components: {}, 
    data() {
        return {
            firstName: 'Mason',
            lastName: 'Kim',
            fullName: ''
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
        changeName() {
            this.firstName = 'Minsik';
        }
    },
    watch: {
        firstName() {
            this.fullName = `${this.firstName} ${this.lastName}`;
        },

        lastName() {
            this.fullName = `${this.firstName} ${this.lastName}`;
        },
    }
}
</script>
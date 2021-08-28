<template>
    <modal-layout>
        <template v-slot:header>
            <h1> 팝업 타이틀 </h1>
        </template>
        <template v-slot:default>
            <p>팝업 컨텐트 1</p>
            <p>팝업 컨텐트 2</p>
        </template>
        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </modal-layout>
</template>

<script>
import ModalLayout from "@/views/modal/SlotModalLayout.vue"
export default {
    name: '', 
    components: {ModalLayout}, 
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
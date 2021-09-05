<template>
<CompositionAPIInject/>
</template>
<script>

import {provide} from "vue"
import CompositionAPIInject from '@/views/composition/CompositionAPIInject'
export default {
    name: '',
    components: {
        CompositionAPIInject
    },
    setup() {
        console.log(0);
      provide('title', 'Vue.js 프로젝트');
    }
}
</script>
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
import {plusCalculator} from '@/common.js'
export default {
    name: '', 
    setup() {
        let {num1, num2, result} = plusCalculator();
        return {
            num1, num2, result
        }
    }
}
</script>
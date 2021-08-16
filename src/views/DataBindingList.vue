<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td> {{product.product_name}} </td>
                    <td> {{product.price}} </td>
                    <td> {{product.category}} </td>
                    <td> {{product.delivery_price}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: '', 
    components: {}, 
    data() {
        return {
            productList: [
                {product_name: 'keyboard', price: 25000, category: "노트북/태블릿", delivery_price: 5000},
                {product_name: 'mouse', price: 12000, category: "노트북/태블릿", delivery_price: 5000},
                {product_name: 'i-pad', price: 725000, category: "노트북/태블릿", delivery_price: 5000},
                {product_name: 'board', price: 32000, category: "노트북/태블릿", delivery_price: 5000},
                {product_name: '무선 충전기', price: 42000, category: "노트북/태블릿", delivery_price: 5000},
            ]
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
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>
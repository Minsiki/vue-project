<script>
import ApiMixin from '@/api.js'
export default {
    mixins: [ApiMixin],
    data() {
        return {
            productList: []
        };
    },
    async mounted() {
        this.productList = await this.$callAPI("https://c1d545a1-f2ae-4fb7-be06-c07d55d94d98.mock.pstmn.io/list", "get");
        console.log(this.productList);
    }
}
</script>
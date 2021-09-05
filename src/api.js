import axios from 'axios'
export default {
    methods: {
        async $callAPI(url, method) {
            return (await axios({
                method: method,
                url
            }).catch(e => {
                console.log(e);
            }));
        }
    }
}
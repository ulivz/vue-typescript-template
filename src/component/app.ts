import * as Vue from 'vue';

export default Vue.extend({
    template: require('./app.html'),
    data() {
        return {}
    },
    mounted() {
        console.log(this);
    }
});
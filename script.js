const app = new Vue({
    el: '#app',
    data: {
        randomMail: null,
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.randomMail = res.data.response
            })
    },
})
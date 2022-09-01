const app = new Vue({
    el: '#app',
    data: {
        randomMail: null,
        allEmails: [],
    },

    mounted() {
        for (let i = 0; i < 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.allEmails.push(res.data.response)
                })
        }
    },
    

    // methods: {
    //     generateMail(){
    //         for (let i = 0; i < 10; i++) {

    //             axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    //                 .then((res) => {
    //                     this.allEmails.push(res.data.response)
    //                 })
    //         }
    //     }
    // },
})
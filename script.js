const app = new Vue({
    el: '#app',
    data: {
        randomMail: null,
        allEmails: [],
        Arraymails:[],
    },

    mounted() {
        for (let i = 0; i < 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.allEmails.push(res.data.response)
                })
        }
    },

    //  methods: {
    //     pushArray(){
    //         this.Arraymails.push(this.allEmails)
    //     }
    //  },

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
import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.esm-browser.min.js';

const app = {
    data(){
        return{
            baseUrl:'https://vue3-course-api.hexschool.io',
            user:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            const url = `${this.baseUrl}/v2/admin/signin`;
            axios.post(url,this.user)
            .then(res=>{
                const {token, expired} = res.data;
                document.cookie = `hexschool=${token}; expires=${expired}`;
                window.location = './products.html';
            })
            .catch(err=>{
                alert(err.data.message);
            })
        }
    }
}

createApp(app).mount('#app');

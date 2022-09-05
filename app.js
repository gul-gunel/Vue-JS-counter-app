const app = Vue.createApp({
	data(){
		return{
			title: 'Counter',
			value: 0,

		}
	},
	methods: {
		// dec(){
		// 	this.value--;
		// },
		// res(){
		// 	this.value = 0;
		// },
		// inc(){
		// 	this.value++;
		// },
	},
	computed: {
		classBox(){
			return {
				red : this.value < 0,
				'green' : this.value > 0,  // - olması durumunda tırnak zorunlu
			}
		},
	}
})
app.mount('.counter')
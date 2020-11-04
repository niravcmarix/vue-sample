<template>
    <div>
        HELLO: <p v-bind:id="form.email"></p>
        {{form.email}}
        <form @submit="login">
            <input placeholder="Email" v-model="form.email"/><br/>
            <input placeholder="Password" v-model="form.password"/><br/>
            
            <button type="submit">Click to Home</button>
        </form>

        <button v-show="false">dasdasda</button>

        {{errors ? errors.toString() : ''}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            data: "Tsting",
            form: {
                email: '',
                password: ''
            }
        }
    },
    mounted() {
        console.log("MOUNTED", this.$router);
    },
    methods: {
        login(e){
            e.preventDefault();
            console.log("Called", this.form);
            this.errors = [];

            if (!this.form.email) {
                this.errors.push('email required.');
            }
            if (!this.form.password) {
                this.errors.push('password required.');
            }

            if(this.errors.length > 0) {
                return;
            }

            localStorage.setItem("flag", true)
            this.$store.dispatch("setLoggedIn", true);
            // console.log("called liogin", this.$router);
            this.$router.push("/about");
        }
    }
}

</script>

<style>

</style>
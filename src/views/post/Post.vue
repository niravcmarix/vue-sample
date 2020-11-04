<template>
    <div>
        <h1>Post listing</h1>
        <div v-if="getLoading">
            <h3>Loading....</h3>
        </div>
        <div v-else>
            <div v-for="(item, index) in list" v-bind:key="index">
                <div>
                    
                    <h4>
                        <router-link :to="{ name: 'Post-Details', params: { postId: item.id }}"> {{item.title}}</router-link>    
                    </h4>
                    <p>{{item.body}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            isLoading: false
        }
    },
    computed: {
        getLoading() {
            return this.isLoading;
        }
    },
    mounted() {
        console.log("MOUNTED");
        this.getAPI();
    },
    methods: {
        getAPI() {
            console.log("cget api")
            this.isLoading = true;
            fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => res.json())
            .then((result) => {
                this.list = result;
                setTimeout(() => {
                    this.isLoading = false;
                },1500)
            }).catch(err => {
                console.log(err);
                this.isLoading = false;
            })
        }
    }
}
</script>

<style>

</style>
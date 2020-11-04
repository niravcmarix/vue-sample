<template>
    <div>
        <HelloComponent custom="testing from" idName="test"/>
        <div v-if="getLoading">
            <h2>Loading....</h2>
        </div>
        <div v-else>
            Post Details View {{getId}}
            <h4>{{title}}</h4>
            <p>{{body}}</p>
        </div>
    </div>
</template>

<script>
import HelloComponent from "../../components/HelloWorld.vue"
export default {
    props: ['postId'],
    components: {
        HelloComponent
    },
    data() {
        return {
            body: '',
            title: '',
            isLoading: false
        }
    },
    computed: {
        getId() {
            return this.postId;
        },
        getLoading() {
            return this.isLoading;
        }
    },
    mounted() {
        this.getDetails();
    },
    methods: {
        getDetails() {
            this.isLoading = true;
            // https://jsonplaceholder.typicode.com/posts/1
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.getId}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                this.body = result.body;
                this.title = result.title;
                this.isLoading = false;
                // this.list = result;
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
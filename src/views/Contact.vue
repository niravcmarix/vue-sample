<template>
<p v-annoying-background>CBOTACT {{counter}}</p>
<button v-annoying-background="'red'" @click="increment()">Click</button>
</template>

<script>
import myMixin from "../mixins/demoMixin";
import { AnnoyingBackground } from '../directives/AnnoyingBackgroundDirective';
export default {
    mixins: [myMixin],
    directives: {
        AnnoyingBackground
    },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter++;
        },
        // hello () {
        //     console.log("FROM CONSTACT");
        // }
    },
    mounted() {
        console.log("MOUNTED", this.$route, this.$router, this.$query);
        this.hello();
    },
    beforeCreate() {
        console.log("BEFORE CREATE");
    },
    created() {
        console.log("CREATED");
    },
    beforeMount() {
        console.log("BEFORE MOUNT");
    },
    beforeUpdate() {
        console.log("BEFORE UPDATE");
    },
    updated() {
        console.log("UPDATED");
    },
    beforeUnmount() {
        console.log("BEFORE UN MOUNT");
    },
    unmounted() {
        console.log("UN MOUNTED");
    }
}
</script>
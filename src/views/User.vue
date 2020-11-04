<template>
    <div>
        User Vew {{userId}} {{userId}} {{userId}} {{userId}}
    </div>
</template>
<script>
export default {
    props: ['username'],
    data() {
        return {
            
        }
    },
    computed: {
        userId() {
            return this.username
        }
    },
    mounted() {
        console.log(this.username);
    }
}
</script>
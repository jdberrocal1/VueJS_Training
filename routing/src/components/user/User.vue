<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{id}}</p>
        <button @click="goHome" class="btn btn-info">Go Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            goHome() {
                this.$router.push({path: '/'})
            }
        }
    }
</script>

<style>
</style>
<template>
    <div>
        <h3>Some User Details</h3>
        <p>User ID: {{this.user.id}}</p>
        <router-link 
            :to="{name: 'userEdit', params: {id: this.user.id}}"
            tag='button'
            class="btn btn-success">
               Edit
        </router-link>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                user: {
                    id: this.$route.params.id
                }
            }
        },
        methods: {
            goHome() {
                this.$router.push({path: '/'})
            }
        }
    }
</script>

<style>
</style>
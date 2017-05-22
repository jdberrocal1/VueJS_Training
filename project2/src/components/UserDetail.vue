<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ age }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
                //default: 'Daniel' // this default value is used when the prop is not required and is not passed
            },
            age: Number
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

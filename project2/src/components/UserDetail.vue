<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ age }}</p>
    </div>
</template>

<script>
    import {eventBus} from '../main';

    export default {
        props: {
            name: {
                type: String,
                required: true
                //default: 'Daniel' // this default value is used when the prop is not required and is not passed
            },
            age: Number
        },
        created() {
           eventBus.$on('updateUserAge', (data) => {
               this.age = data;
           });
           eventBus.$on('nameWasChanged', (data) => {
               this.name = data;
           }); 
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

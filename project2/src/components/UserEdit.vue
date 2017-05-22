<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="editAge()">Add Years</button>
        <button @click="reverse()">Reverse Name</button>
        <button @click="restoreName()">Restore Name</button>
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
            age: Number,
            restoreName: Function
        },
        methods: {
            editAge() {
                this.age += 1;
                this.$emit('updateUserAge', this.age);
            },
            reverse() {
                this.name = this.name.split('').reverse().join('');
                this.$emit('nameWasChanged', this.name);
            }

        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>

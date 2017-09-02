<template>
    <div>
        <button class="btn btn-primary" @click="increment(3)">Increment</button>
        <button class="btn btn-primary" @click="decrement(2)">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        methods: {
            ...mapActions({
                increment: '_incrementCounterAct',
                decrement: '_decrementCounterAct'
            })
        }
    }
</script>
<template>
    <div>
        <button class="btn btn-primary" @click="click(true)">Increment</button>
        <button class="btn btn-primary" @click="click(false)">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        methods: {
            ...mapActions({
                increment: '_incrementCounterAct',
                decrement: '_decrementCounterAct',
                addClick: '_addClicksAct'
            }),
            click(isAdding){
                if (isAdding){
                    this.increment(3);
                } else {
                    this.decrement(2);
                }
                this.addClick(1);
            }
        }
    }
</script>
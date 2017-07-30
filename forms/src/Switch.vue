<template>
    <div>
        <div
            id="on"
            @click="setSwitch(true)"
            :class="{active: value}">On</div>
        <div
            id="off"
            @click="setSwitch(false)"
            :class="{active: !value}">Off</div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods:{
            setSwitch (val) {
                this.$emit('input',val);
            }
        }
    }
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgrey;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
</style>

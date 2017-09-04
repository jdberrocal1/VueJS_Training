<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Double Counter is: {{ doubleCounter }}</p>
        <p>Clicks: {{ clicks }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'; 
    export default {
        computed: {
            ...mapGetters({
                counter:'_getCounter',
                doubleCounter: '_getDoubleCounter',
                clicks: '_getClicks'
            })
        }
    }
</script>
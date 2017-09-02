<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Double Counter is: {{ doubleCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'; 
    export default {
        computed: {
            ...mapGetters({
                counter:'_getCounter',
                doubleCounter: '_getDoubleCounter'
            })
        }
    }
</script>
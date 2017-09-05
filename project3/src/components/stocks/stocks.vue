<template>
    <div class="row">
      <appStock v-for="stock in stocks" :stock="stock"></appStock>
    </div>
</template>

<script>
import stock from './stock.vue';
export default {
  computed:{
    stocks(){
      return this.$store.getters.stocks;
    }
  },
  components:{
    appStock: stock
  }
}
</script>

<style>

</style>
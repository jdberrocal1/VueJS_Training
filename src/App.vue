<template>
  <div>
    <appHeader></appHeader>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from './components/header.vue';
export default {
  components: {
    appHeader: header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>

<style>

</style>

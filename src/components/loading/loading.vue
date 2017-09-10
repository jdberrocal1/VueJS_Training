<template>
  <div class="loadingContainer">
    <h3 class="center loadingTxt">{{message}}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: 'Loading'
    }
  }
}
</script>

<style scoped>
  .loadingContainer {
    position: fixed;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    background-color: grey;
    z-index: 1;
  }

  .center {
    position: fixed;
    top: 50%;
    left: 45%;
  }

  .loadingTxt{
    opacity: 1 !important;
    color: #000;
  }

</style>
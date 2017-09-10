<template>
  <div class="loadingContainer">
    <div class="center loadingTxt">
      <h2 class="noMargin">{{message}}</h2>
      <h2 class="noMargin">{{points}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: 'Loading!',
      points: ''
    }
  },
  mounted() {
    setInterval(()=> {
      this.points = this.points.includes('....') ? '.' : this.points + '.';
    },1000);
  }
}
</script>

<style scoped>
  .loadingContainer {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgb(0, 0, 0);
    /* RGBa with 0.6 opacity */
    background-color: rgba(0, 0, 0, 0.3);
    /* For IE 5.5 - 7*/
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);
    /* For IE 8*/
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
    z-index: 1;
  }

  .center {
    position: fixed;
    top: 50%;
  }

  .loadingTxt{
    text-align: center;
    width: 100%;
  }

  .noMargin {
    margin: 0;
  }

</style>
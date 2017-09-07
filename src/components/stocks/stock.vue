<template>
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>Price: {{stock.price}}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-4">
            <input 
              type="number" 
              class="form-control" 
              placeholder="Quantity" 
              v-model="quantity"
              :class="{'error': insufficientFunds}">
          </div>
          <div class="col-xs-8">
            <button 
              class="btn btn-success pull-right" 
              @click="buy" 
              :disabled="quantity <= 0 || insufficientFunds"
              :class="{'btn-danger': insufficientFunds}">
              {{insufficientFunds ? 'Not Enough Funds' : 'Buy'}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed:{
    funds(){
      return this.$store.getters.funds;
    },
    insufficientFunds(){
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buy() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    }
  }
}
</script>

<style scoped>
  input.form-control.error, input.error {
    border: 1px solid red;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(139,32,0,.6);
  }
</style>
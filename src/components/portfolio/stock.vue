<template>
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>Price: {{stock.price}} | Quantity: {{stock.quantity}}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-4">
            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{'error': insufficientQuantity}">
          </div>
          <div class="col-xs-8">
            <button class="btn btn-info pull-right" :class="{'btn-danger': insufficientQuantity}" @click="sell" :disabled="quantity <= 0 || insufficientQuantity">
              {{insufficientQuantity ? 'Not Enough Stocks' : 'Sell'}}
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
    insufficientQuantity(){
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    sell() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch('sellStock', order);
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
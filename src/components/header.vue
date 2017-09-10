<template>
  <nav class="navbar darkNav">
    <app-loading v-if="loading"></app-loading>
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to='/' class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li">
            <a>Portfolio</a>
          </router-link>
          <router-link to="/stocks" activeClass="active" tag="li">
            <a>Stocks</a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <strong class="navbar-text whiteTxt">
            Funds: {{funds | currency}}
          </strong>
          <li>
            <a @click="endDay">End Day</a>
          </li>
          <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
            <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a @click="saveData">Save Data</a>
              </li>
              <li>
                <a @click="loadData">Load Data</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>

export default {
  data() {
    return {
      isDropdownOpen: false,
      loading: false
    }
  },
  computed:{
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods:{
    endDay(){
      this.$store.dispatch('randomizeStocks');
    },
    saveData() {
      this.loading = true;
      const data = {
        funds: this.funds,
        stockPorfolio: this.$store.getters.stocksPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('stocks.json', data)
        .finally(()=>{
          this.loading = false;
        })
    },
    loadData() {
      
    }
  }

}
</script>

<style>
  .darkNav {
    background-color: #1B1D1E;
    border-radius: 0;
    border: 3px solid #00FF0E;
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }

  .darkNav a, .darkNav .whiteTxt {
    color: white;
  }

   .darkNav li>a:hover, .darkNav li>a:focus, .darkNav li.active > a,  .darkNav li.open > a {
    background-color: #00FF0E;
    color: #1B1D1E;
  }
</style>

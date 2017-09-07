<template>
  <nav class="navbar darkNav">
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
            Funds: ${{funds}}
          </strong>
          <li>
            <a href="#">End Day</a>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Save Data</a>
              </li>
              <li>
                <a href="#">Load Data</a>
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
  computed:{
    funds(){
      return this.$store.getters.funds;
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

   .darkNav li>a:hover, .darkNav li>a:focus, .darkNav li.active > a  {
    background-color: #00FF0E;
    color: #1B1D1E;
  }
</style>

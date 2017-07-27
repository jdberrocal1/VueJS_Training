<template>
    <div class="container">
        <app-header :maxQuotes="maxQuotes" :quoteCount="quotes.length"></app-header>
        <app-new-quote @quoteAdded="addQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info"> Info: Click on Quote to delete it!</div>
            </div>
        </div>
        <div class="row" v-if="quotes.length >= maxQuotes">
            <div class="col-sm-12 text-center">
                <div class="alert alert-danger"> <b>Maximum  Quotes Amount Reached!</b></div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';
    export default {
        data: function() {
            return {
               maxQuotes: 10,
               quotes:  ['test'],
            };
        },
        methods:{
            addQuote(quote) {
                if(this.quotes.length < this.maxQuotes) {
                    this.quotes.push(quote);
                }
            },
            deleteQuote(index) {
                this.quotes.splice(index,1);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
        
    }
</script>

<style>
    .margin-bottom-10 {
        margin-bottom: 10px;
    }
</style>

import Vue from 'vue';

export const loadData = ({commit}) => {
    commit('isLoading', true);
    Vue.http.get('stocks.json')
        .then(response => {
            let data = response.data;
            if (data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                };

                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        })
        .finally(()=> {
            commit('isLoading', false);
        });
};

export const isLoading = (context, isLoading) => {
    context.commit('isLoading', isLoading);
};
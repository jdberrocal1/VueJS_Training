import home from './components/home.vue';
import portfolio from './components/portfolio/portfolio.vue';
import stocks from './components/stocks/stocks.vue';


export const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/portfolio',
        component: portfolio
    },
    {
        path: '/stocks',
        component: stocks
    }
];
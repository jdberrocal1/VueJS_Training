import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        clicks:0
    },
    getters: {
        _getClicks: state => {
            return state.clicks;
        },
    },
    mutations: {
        _addClicksMut: (state, payload) => {
            state.clicks += payload;
        }
    },
    actions: {
        _addClicksAct: (context, payload) => {
            context.commit('_addClicksMut',payload);
        }
    },
    modules: {
        counter
    }
});
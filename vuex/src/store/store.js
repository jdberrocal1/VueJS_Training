import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        _getCounter: state => {
            return state.counter;
        },
        _getDoubleCounter: state => {
            return state.counter * 2;
        }
    },
    mutations: {
        _incrementCounterMut: (state, payload) => {
            state.counter += payload;
        },
        _decrementCounterMut: (state, payload) => {
            state.counter -= payload;
        }
    },
    actions: {
        _incrementCounterAct: (context, payload) => {
            context.commit('_incrementCounterMut', payload)
        },
        _decrementCounterAct: (context, payload) => {
            context.commit('_decrementCounterMut', payload)
        }
    }
});
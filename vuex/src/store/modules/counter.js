const state = {
    counter: 0
};

const getters = {
    _getCounter: state => {
        return state.counter;
    },
    _getDoubleCounter: state => {
        return state.counter * 2;
    }
};

const mutations = {
    _incrementCounterMut: (state, payload) => {
        state.counter += payload;
    },
    _decrementCounterMut: (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
    _incrementCounterAct: (context, payload) => {
        context.commit('_incrementCounterMut', payload)
    },
    _decrementCounterAct: (context, payload) => {
        context.commit('_decrementCounterMut', payload)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
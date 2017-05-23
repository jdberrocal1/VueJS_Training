import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
      setAge(age) {
        this.$emit('updateUserAge', age);
      },
      setName(name) {
        this.$emit('nameWasChanged', name);
      }
    }
  }
);

new Vue({
  el: '#app',
  render: h => h(App)
})

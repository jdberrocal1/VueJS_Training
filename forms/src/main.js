import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['January',	'February',	'March',	'April',	'May', 'June', 'July',	'August',	'September',	'October',	'November',	'December'];

Vue.filter('formatDate',function(value) {
  var date = new Date(value);
  date.setDate(date.getDate()+1);
  return months[date.getMonth()] + ', '+ days[date.getDay()] + ' ' + date.getDate() + ', ' + date.getFullYear();
});
new Vue({
  el: '#app',
  render: h => h(App)
});
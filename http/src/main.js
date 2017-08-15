import Vue from 'vue';
import VueResource from 'vue-resource';
import VueProgressBar from 'vue-progressbar';
import App from './App.vue';

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-http-9deff.firebaseio.com/posts.json';

const options = {
  color: 'blue',
  failedColor: 'red',
  thickness: '3px',
  autoRevert: true
}

Vue.use(VueProgressBar, options);

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['January',	'February',	'March',	'April',	'May', 'June', 'July',	'August',	'September',	'October',	'November',	'December'];

Vue.filter('formatDate',function(value) {
  var date = new Date(value);
  date.setDate(date.getDate());
  return months[date.getMonth()] + ', '+ days[date.getDay()] + ' ' + date.getDate() + ', ' + date.getFullYear();
});

new Vue({
  el: '#app',
  render: h => h(App)
})

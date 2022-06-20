Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});

Vue.component('sibling-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});


var app = new Vue({
  el: '#app',
  data:{
    message: 'Hello vue. passed from Parent Component1111',
    anotherMessage: 'Hello vue. passed from Parent Component22222'
  }

});

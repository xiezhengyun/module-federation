import Vue from "vue";
import Layout from './Layout.vue';

// const Content = () => import("yibaoUI/Content");
// const Button = () => import("yibaoUI/Button");


// Vue.component("content-element", Content);
// Vue.component("button-element", Button);

new Vue({
  render: h => h(Layout),
}).$mount('#app')

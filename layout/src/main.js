import Vue from "vue";
import App from './App';

// const Content = () => import("yibaoUI/Content");
// const Button = () => import("yibaoUI/Button");


// Vue.component("content-element", Content);
// Vue.component("button-element", Button);
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
}).$mount('#app')

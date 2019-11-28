import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";
import "foundation-sites/dist/css/foundation.min.css";
import ax from "./ax.js";
import i18n from "./i18n";
import "foundation-sites";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  ax,
  i18n,
  render: h => h(App)
}).$mount("#app");

new Vue({
  created() {
    AOS.init();
  }
});

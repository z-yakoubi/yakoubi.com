import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

// resolve asyncData after the initial route is resolved
router.beforeResolve(async (to, from, next) => {
  const matchedComponents = router.getMatchedComponents(to);

  // call `asyncData()` on all matched route components
  await Promise.all(
    matchedComponents.map(
      Component =>
        Component.asyncData &&
        Component.asyncData({
          store: { dispatch: store.dispatch, getters: store.getters }
        })
    )
  );

  next();
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");

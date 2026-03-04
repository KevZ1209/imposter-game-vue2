import Vue from "vue";
import App from "./App.vue";
import "./assets/global.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
        // registration worked
        console.log(
          "ServiceWorker registration successful with scope: ",
          reg.scope
        );
      })
      .catch((err) => {
        // registration failed
        console.warn("ServiceWorker registration failed:", err);
      });
  });
}

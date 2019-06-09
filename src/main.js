import Vue from "vue";
import VueI18n from "vue-i18n";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueI18n);

const messages = {
  ja: {
    common: {
      weekend: "週末"
    },
    message: {
      title: "こんにちは、@:(common.weekend)",
      description:
        "<marquee><span class='important'>HTML</span>で遊びましょう</marquee>",
      apple: "りんご 0個 | りんご 1個 | りんご 10個",
      listItem: ["一番目", "二番目", "三番目"]
    }
  },
  en: {
    common: {
      weekend: "weekend"
    },
    message: {
      title: "hello @:(common.weekend)",
      description:
        "<marquee >Let's play with <span class='important'>HTML</span></marquee>",
      apple: "no apples | an apple | {count} apples",
      listItem: ["first", "second", "third"]
    }
  }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "ja", // set locale
  messages // set locale messages
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");

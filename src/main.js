import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./language"

const app = createApp(App)
app.use(store).use(router).use(i18n).mount("#app");

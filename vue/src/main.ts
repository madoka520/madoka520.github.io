import { createApp } from "vue";
import App from "./App.vue";


const startApp = async () => {
  const app = createApp(App);
  app.mount("#app");
};
startApp();

//这个不要动
import Vue from "vue";
import Vuex from "vuex";

// Store modules
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
});

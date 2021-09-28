import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sourceDirs : Array<string>()
  },
  mutations: {
    addSourceDir(state, newDir : string) {
      state.sourceDirs.push(newDir);
    }
  },
  actions: {
    addSourceDir(context, newDir : string) {
      context.commit('addSourceDir', newDir);
    }
  },
  modules: {},
});

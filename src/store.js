import Vue from "vue";
import Vuex from "vuex";

// API that returns Promises
import { fetchingResources } from "@/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resources: []
  },
  mutations: {
    setResources(state, resources) {
      state.resources = resources;
    }
  },
  actions: {
    async fetchResources({ commit }, { resource, params }) {
      commit(
        "setResources",
        [].concat(await fetchingResources(resource, params))
      );
    }
  },
  getters: {
    getResourcesByType: ({ resources }) => type => {
      const resourcesByType = resources.filter(
        resource => resource.type === type
      );

      return resourcesByType.length ? resourcesByType : null;
    }
  }
});

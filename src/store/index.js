import { createStore } from "vuex";
// import { createApp } from "vue";

const store = createStore({
  state() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    };
  },
  mutations: {
    CHANGE_STATUS(state, payload) {
      state.isLoggedIn = payload;
    },
    SET_AUTH_USER(state, payload) {
      state.authUser = payload;
    },
    SET_MODAL_STATE(state, payload) {
      state.isLoginOpen = payload;
    },
  },
  actions: {
    changeStatus({ commit }, payload) {
      commit("CHANGE_STATUS", payload);
    },
    changeUserInfo({ commit }, payload) {
      commit("SET_AUTH_USER", payload);
    },
    changeModalState({ commit }, payload) {
      commit("SET_MODAL_STATE", payload);
    },
  },
});

export default store;

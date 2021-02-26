<template>
  <AppHeader />
  <div class="w-full flex">
    <router-view></router-view>
  </div>

  <teleport to="body">
    <LoginModal />
  </teleport>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
import firebase from "./utilities/fire-base";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      // isLoginOpen: false,
      // isLoggedIn: false,
      // authUser: {},
    };
  },
  components: {
    AppHeader,
    LoginModal,
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.changeStatus(true);
        this.changeUserInfo(user);
      } else {
        this.changeStatus(false);
        this.changeUserInfo({});
      }
    });
  },
  methods: {
    ...mapActions(["changeUserInfo", "changeStatus", "changeModalState"]),
  },
};
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: all 1s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>

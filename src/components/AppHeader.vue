<template>
  <header class="flex">
    <nav
      class="w-full flex justify-between bg-gradient-to-r from-blue-300 to-blue-600 text-white px-4 py-2"
    >
      <router-link
        v-for="item in navList"
        :key="item"
        class="mx-2"
        :to="item.to"
        >{{ item.title }}</router-link
      >
      <div class="ml-auto">
        <button v-if="loggedIn" @click="logOut">LogOut</button>
        <button v-else @click="openLogin" class="mx-2">
          Login
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import firebase from "../utilities/fire-base";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      navList: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "DC Heroes",
          to: "/dc-heroes",
        },
        {
          title: "Calendar",
          to: "/calendar",
        },
        {
          title: "Markdown",
          to: "/markdown",
        },
        {
          title: "Slider",
          to: "/slider",
        },
        {
          title: "Calculator",
          to: "/calculator",
        },
        {
          title: "Modal",
          to: "/reusable-modal",
        },
        {
          title: "RealTimeChat",
          to: "/real-time-chat",
        },
        {
          title: "User Crud",
          to: "/user-crud",
        },
      ],
    };
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    },
    openLogin() {
      this.changeModalState(true);
    },
    ...mapActions(["changeModalState"]),
  },
  computed: {
    loggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};
</script>

<style></style>

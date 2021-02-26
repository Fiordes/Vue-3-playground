<template>
  <div v-if="isLoginOpen">
    <section
      @click="close"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-40 m-auto bg-white p-2 rounded shadow w-1/3">
          <h1 class="text-4xl ml-4 text-center">Login</h1>
          <Google @close-login-from-google="close" />
          <p class="text-center my-2">Or</p>
          <form class="p-4" @submit.prevent="submitForm">
            <div class="mb-2">
              <label for="">Email or User Name</label>
              <input
                type="text"
                class="rounded shadow p-2 w-full mt-2"
                placeholder="Enter your email or username"
                v-model="userName"
              />
            </div>
            <div class="mb-2">
              <label for="">Password</label>
              <input
                type="password"
                class="rounded shadow p-2 w-full mt-2"
                placeholder="Enter your password"
                v-model="password"
              />
            </div>
            <div class="">
              <button
                type="submit"
                class="w-full rounded shadow bg-gradient-to-r from-red-600 to-yellow-600 text-white p-2"
              >
                <span v-if="!isLoadind">Login</span>
                <span v-else>Loadind </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/fire-base";
import Google from "./Login/Google";
import { mapActions, useStore } from "vuex";
export default {
  data() {
    return {
      userName: "dima@gmal.com",
      password: "123456",
      isLoadind: false,
    };
  },
  methods: {
    submitForm() {
      this.isLoadind = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.userName, this.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
          this.isLoadind = false;
          this.userName = "";
          this.password = "";
          this.close();
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
          console.log(errorCode);
          this.isLoadind = false;
        });
    },
    close() {
      this.changeModalState(false);
    },
    ...mapActions(["changeModalState"]),
  },
  components: {
    Google,
  },
  computed: {
    isLoginOpen() {
      const store = useStore();
      return store.state.isLoginOpen;
    },
  },
};
</script>

<style></style>
